"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, PencilSimple, Trash, Buildings } from "@phosphor-icons/react/dist/ssr";
import { useCommittees } from "../../_lib/committeesStore";
import AdminModal from "../../_components/AdminModal";
import TextInput from "@/app/components/forms/fields/TextInput";
import TextArea from "@/app/components/forms/fields/TextArea";
import type { Committee } from "@/app/lib/data/committees";

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function CommitteesAdminPage() {
  const { committees, create, update, remove } = useCommittees();
  const [editing, setEditing] = useState<Committee | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const openCreate = () => {
    setEditing(null);
    setFormOpen(true);
  };
  const openEdit = (committee: Committee) => {
    setEditing(committee);
    setFormOpen(true);
  };

  const handleDelete = (committee: Committee) => {
    if (window.confirm(`Supprimer le comité « ${committee.name} » ?`)) remove(committee.id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();
    const name = get("name");
    const logo = get("logo") || "/icons/aempo-logo.svg";
    const description = get("description");

    if (editing) {
      update(editing.id, { ...editing, name, logo, description });
    } else {
      create({ id: slugify(name) || `comite-${committees.length + 1}`, name, logo, description });
    }
    setFormOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{committees.length} comité(s)</p>
        <button
          type="button"
          onClick={openCreate}
          className="flex items-center gap-2 bg-primary-mid hover:bg-primary text-white text-sm font-medium px-4 h-10 rounded-lg transition-colors"
        >
          <Plus size={16} weight="bold" /> Nouveau comité
        </button>
      </div>

      {committees.length === 0 ? (
        <EmptyState onCreate={openCreate} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="h-28 bg-primary flex items-center justify-center">
                <Image
                  src={committee.logo}
                  alt={committee.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-onest font-bold text-zinc-900">{committee.name}</h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => openEdit(committee)}
                      aria-label="Éditer"
                      className="p-2 rounded-md text-zinc-600 hover:bg-primary-light hover:text-primary transition-colors"
                    >
                      <PencilSimple size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(committee)}
                      aria-label="Supprimer"
                      className="p-2 rounded-md text-zinc-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
                <p className="font-montserrat text-sm text-zinc-500 line-clamp-3">
                  {committee.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {formOpen && (
        <AdminModal
          title={editing ? "Modifier le comité" : "Nouveau comité"}
          onClose={() => setFormOpen(false)}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <TextInput label="Nom" name="name" placeholder="Ex: SCORA" defaultValue={editing?.name} />
            <TextInput
              label="Logo (URL)"
              name="logo"
              required={false}
              placeholder="/images/commitees/exemple.svg"
              defaultValue={editing?.logo}
            />
            <TextArea
              label="Description"
              name="description"
              rows={5}
              placeholder="Description du comité"
              defaultValue={editing?.description}
            />
            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className="bg-primary-mid hover:bg-primary transition-colors text-white font-medium px-6 h-11 rounded-lg"
              >
                {editing ? "Enregistrer" : "Ajouter"}
              </button>
              <button
                type="button"
                onClick={() => setFormOpen(false)}
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

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="bg-white rounded-xl border border-dashed border-zinc-300 p-12 flex flex-col items-center text-center gap-3">
      <span className="size-12 rounded-xl bg-primary-light text-primary flex items-center justify-center">
        <Buildings size={24} />
      </span>
      <p className="font-montserrat text-zinc-500">Aucun comité pour le moment.</p>
      <button
        type="button"
        onClick={onCreate}
        className="text-sm font-medium text-primary-mid hover:text-primary transition-colors"
      >
        Ajouter un comité
      </button>
    </div>
  );
}
