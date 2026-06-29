"use client";

import { useState } from "react";
import TextInput from "./form/TextInput";
import SelectInput from "./form/SelectInput";
import RadioGroup from "./form/RadioGroup";
import { createFormSubmitHandler } from "@/app/lib/forms";

const BUREAUX = ["Lomé", "Kara"];
const FILIERES = ["Médecine", "Pharmacie", "Odonto-Stomatologie"];
const NIVEAUX = [
  "1ère année",
  "2ème année",
  "3ème année",
  "4ème année",
  "5ème année",
  "6ème année",
  "7ème année",
];

export default function JoinForm() {
  const [bureau, setBureau] = useState(BUREAUX[0]);

  const handleSubmit = createFormSubmitHandler("Formulaire Rejoindre AEMPO :");

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-205 flex flex-col gap-9">
      {/* ── Affiliation & Compétences ─────────────────────────────────── */}
      <section className="flex flex-col gap-9">
        <h2 className="text-2xl font-montserrat font-semibold text-black">
          Affiliation &amp; Compétences
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
          <RadioGroup
            label="Bureau exécutif"
            name="bureau"
            options={BUREAUX}
            value={bureau}
            onChange={setBureau}
          />
          <TextInput
            label="Compétences"
            name="competences"
            placeholder="Ex:  Graphique design, Monteur vidéo"
          />
        </div>
      </section>

      {/* ── Informations personnelles ─────────────────────────────────── */}
      <section className="flex flex-col gap-9">
        <h2 className="text-2xl font-montserrat font-semibold text-black">
          Informations personnelles
        </h2>
        <div className="flex flex-col gap-6.5">
          <div className="flex flex-col md:flex-row gap-5">
            <TextInput label="Nom" name="nom" placeholder="Ex:  Ama Kwatcha" />
            <TextInput label="Prénom(s)" name="prenoms" placeholder="Ex:  Ama Kwatcha" />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ex:  amakwatcha@gmail.com"
            />
            <TextInput
              label="Numéro de téléphone"
              name="telephone"
              type="tel"
              placeholder="Ex:  +228 90 90 90 90"
            />
          </div>
        </div>
      </section>

      {/* ── Informations académiques ──────────────────────────────────── */}
      <section className="flex flex-col gap-9">
        <h2 className="text-2xl font-montserrat font-semibold text-black">
          Informations académiques
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
          <SelectInput
            label="Filière"
            name="filiere"
            placeholder="Choisissez votre filière"
            options={FILIERES}
          />
          <SelectInput
            label="Niveau"
            name="niveau"
            placeholder="Choisissez votre niveau d'étude"
            options={NIVEAUX}
          />
        </div>
      </section>

      <button
        type="submit"
        className="w-full h-11 bg-primary-mid hover:bg-primary transition-colors text-surface font-montserrat font-medium text-base flex items-center justify-center"
      >
        Rejoindre l&apos;AEMPO
      </button>
    </form>
  );
}
