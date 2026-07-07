"use client";

import { useState } from "react";
import { Plus, PencilSimple, Trash, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { useBureau } from "../../_lib/bureauStore";
import AdminModal from "../../_components/AdminModal";
import TextInput from "@/app/components/forms/fields/TextInput";
import type { BureauMember } from "@/app/lib/data/bureau";

interface EditTarget {
  sectionIndex: number;
  memberIndex: number | null; // null = ajout
  member?: BureauMember;
}

export default function BureauAdminPage() {
  const { bureaus, addMember, updateMember, removeMember } = useBureau();
  const [target, setTarget] = useState<EditTarget | null>(null);

  const handleDelete = (sectionIndex: number, memberIndex: number, member: BureauMember) => {
    if (window.confirm(`Retirer ${member.nom} (${member.fonction}) ?`)) {
      removeMember(sectionIndex, memberIndex);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!target) return;
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();
    const member: BureauMember = {
      fonction: get("fonction"),
      nom: get("nom") || "Nom Prénom",
      photo: get("photo") || undefined,
    };

    if (target.memberIndex === null) {
      addMember(target.sectionIndex, member);
    } else {
      updateMember(target.sectionIndex, target.memberIndex, member);
    }
    setTarget(null);
  };

  return (
    <div className="flex flex-col gap-8">
      {bureaus.map((section, sectionIndex) => (
        <section key={section.title} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="font-onest font-bold text-lg text-zinc-900">
              {section.title}
              <span className="ml-2 text-sm font-montserrat font-normal text-zinc-400">
                {section.members.length} membre(s)
              </span>
            </h2>
            <button
              type="button"
              onClick={() => setTarget({ sectionIndex, memberIndex: null })}
              className="flex items-center gap-2 text-sm font-medium text-primary-mid hover:text-primary transition-colors"
            >
              <Plus size={16} weight="bold" /> Ajouter un membre
            </button>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50 text-zinc-500 text-left">
                <tr>
                  <th className="px-5 py-3 font-medium">Fonction</th>
                  <th className="px-5 py-3 font-medium">Nom</th>
                  <th className="px-5 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {section.members.map((member, memberIndex) => (
                  <tr key={`${member.fonction}-${memberIndex}`} className="hover:bg-zinc-50">
                    <td className="px-5 py-3 text-zinc-500">{member.fonction}</td>
                    <td className="px-5 py-3 font-medium text-zinc-900">{member.nom}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() =>
                            setTarget({ sectionIndex, memberIndex, member })
                          }
                          aria-label="Éditer"
                          className="p-2 rounded-md text-zinc-600 hover:bg-primary-light hover:text-primary transition-colors"
                        >
                          <PencilSimple size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(sectionIndex, memberIndex, member)}
                          aria-label="Supprimer"
                          className="p-2 rounded-md text-zinc-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {section.members.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-5 py-10 text-center text-zinc-400">
                      <span className="inline-flex items-center gap-2">
                        <UsersThree size={18} /> Aucun membre dans cette section.
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {target && (
        <AdminModal
          title={target.memberIndex === null ? "Ajouter un membre" : "Modifier le membre"}
          onClose={() => setTarget(null)}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <TextInput
              label="Fonction"
              name="fonction"
              placeholder="Ex: Président"
              defaultValue={target.member?.fonction}
            />
            <TextInput
              label="Nom"
              name="nom"
              required={false}
              placeholder="Nom Prénom"
              defaultValue={target.member?.nom}
            />
            <TextInput
              label="Photo (URL)"
              name="photo"
              required={false}
              placeholder="/images/bureau/president.jpg"
              defaultValue={target.member?.photo}
            />
            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className="bg-primary-mid hover:bg-primary transition-colors text-white font-medium px-6 h-11 rounded-lg"
              >
                {target.memberIndex === null ? "Ajouter" : "Enregistrer"}
              </button>
              <button
                type="button"
                onClick={() => setTarget(null)}
                className="px-6 h-11 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-colors font-medium"
              >
                Annuler
              </button>
            </div>
          </form>
        </AdminModal>
      )}
    </div>
  );
}
