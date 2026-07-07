"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, PencilSimple, Trash, Handshake } from "@phosphor-icons/react/dist/ssr";
import { usePartners } from "../../_lib/partnersStore";
import AdminModal from "../../_components/AdminModal";
import TextInput from "@/app/components/forms/fields/TextInput";
import type { Partner } from "@/app/lib/data/partners";

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PartnersAdminPage() {
  const { partners, create, update, remove } = usePartners();
  const [editing, setEditing] = useState<Partner | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const openCreate = () => {
    setEditing(null);
    setFormOpen(true);
  };
  const openEdit = (partner: Partner) => {
    setEditing(partner);
    setFormOpen(true);
  };

  const handleDelete = (partner: Partner) => {
    if (window.confirm(`Supprimer « ${partner.name} » ?`)) remove(partner.id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = ((fd.get("name") as string | null) ?? "").trim();
    const logo = ((fd.get("logo") as string | null) ?? "").trim() || "/icons/aempo-logo.svg";

    if (editing) {
      update(editing.id, { ...editing, name, logo });
    } else {
      create({ id: slugify(name) || `partner-${partners.length + 1}`, name, logo });
    }
    setFormOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{partners.length} partenaire(s)</p>
        <button
          type="button"
          onClick={openCreate}
          className="flex items-center gap-2 bg-primary-mid hover:bg-primary text-white text-sm font-medium px-4 h-10 rounded-lg transition-colors"
        >
          <Plus size={16} weight="bold" /> Nouveau partenaire
        </button>
      </div>

      {partners.length === 0 ? (
        <EmptyState onCreate={openCreate} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 flex flex-col gap-4"
            >
              <div className="h-24 flex items-center justify-center bg-zinc-50 rounded-lg">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="font-montserrat font-medium text-zinc-900 truncate">{partner.name}</p>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => openEdit(partner)}
                    aria-label="Éditer"
                    className="p-2 rounded-md text-zinc-600 hover:bg-primary-light hover:text-primary transition-colors"
                  >
                    <PencilSimple size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(partner)}
                    aria-label="Supprimer"
                    className="p-2 rounded-md text-zinc-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {formOpen && (
        <AdminModal
          title={editing ? "Modifier le partenaire" : "Nouveau partenaire"}
          onClose={() => setFormOpen(false)}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <TextInput label="Nom" name="name" placeholder="Nom du partenaire" defaultValue={editing?.name} />
            <TextInput
              label="Logo (URL)"
              name="logo"
              required={false}
              placeholder="/icons/partners/exemple.svg"
              defaultValue={editing?.logo}
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
        <Handshake size={24} />
      </span>
      <p className="font-montserrat text-zinc-500">Aucun partenaire pour le moment.</p>
      <button
        type="button"
        onClick={onCreate}
        className="text-sm font-medium text-primary-mid hover:text-primary transition-colors"
      >
        Ajouter un partenaire
      </button>
    </div>
  );
}
