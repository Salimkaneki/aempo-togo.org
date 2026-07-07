"use client";

import { useEffect, useState } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import TextInput from "@/app/components/forms/fields/TextInput";

// ⚠️ STUB : paramètres du site persistés en localStorage (mock).
// À remplacer par une vraie persistance lors de la phase backend.

interface Settings {
  orgName: string;
  email: string;
  phone: string;
  address: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

const DEFAULT_SETTINGS: Settings = {
  orgName: "AEMPO-TOGO",
  email: "contact@aempotogo.com",
  phone: "",
  address: "Lomé, Togo",
  facebook: "",
  instagram: "",
  linkedin: "",
};

const STORAGE_KEY = "aempo:admin:settings";

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<Settings>) });
    } catch {
      /* ignore */
    }
  }, []);

  const set = (key: keyof Settings) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, [key]: e.target.value }));
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* ignore */
    }
    setSaved(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl">
      <section className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col gap-5">
        <h2 className="font-onest font-bold text-primary">Général</h2>
        <TextInput
          label="Nom de l'organisation"
          name="orgName"
          value={settings.orgName}
          onChange={set("orgName")}
        />
        <div className="flex flex-col md:flex-row gap-5">
          <TextInput
            label="Email de contact"
            name="email"
            type="email"
            value={settings.email}
            onChange={set("email")}
          />
          <TextInput
            label="Téléphone"
            name="phone"
            required={false}
            placeholder="+228 ..."
            value={settings.phone}
            onChange={set("phone")}
          />
        </div>
        <TextInput
          label="Adresse"
          name="address"
          required={false}
          value={settings.address}
          onChange={set("address")}
        />
      </section>

      <section className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col gap-5">
        <h2 className="font-onest font-bold text-primary">Réseaux sociaux</h2>
        <TextInput
          label="Facebook"
          name="facebook"
          required={false}
          placeholder="https://facebook.com/..."
          value={settings.facebook}
          onChange={set("facebook")}
        />
        <TextInput
          label="Instagram"
          name="instagram"
          required={false}
          placeholder="https://instagram.com/..."
          value={settings.instagram}
          onChange={set("instagram")}
        />
        <TextInput
          label="LinkedIn"
          name="linkedin"
          required={false}
          placeholder="https://linkedin.com/..."
          value={settings.linkedin}
          onChange={set("linkedin")}
        />
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-primary-mid hover:bg-primary transition-colors text-white font-montserrat font-medium px-6 h-11 rounded-lg"
        >
          Enregistrer
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-primary-mid">
            <Check size={16} weight="bold" /> Enregistré
          </span>
        )}
      </div>
    </form>
  );
}
