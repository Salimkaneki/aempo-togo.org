// ─── Bureau exécutif ────────────────────────────────────────────────────────
// ⚠️ DONNÉES PLACEHOLDER — à compléter.
// Remplace les `nom` par les vrais noms et ajoute les photos via le champ
// `photo` (ex: "/images/bureau/president.jpg"). Sans photo, l'avatar affiche
// le logo AEMPO par défaut.

export interface BureauMember {
  fonction: string;
  nom: string;
  photo?: string;
}

export interface BureauSection {
  title: string;
  members: BureauMember[];
}

export const BUREAU_INTRO =
  "Rencontrez les étudiants dévoués qui pilotent les initiatives de l'AEMPO-TOGO au quotidien. Un bureau élu par ses pairs, engagé à représenter vos intérêts et à faire rayonner notre faculté.";

const NATIONAL_ROLES = [
  "Président",
  "Vice-Président",
  "Secrétaire Général",
  "Secrétaire Général Adjoint",
  "Trésorier Général",
  "Trésorier Adjoint",
  "Commissaire aux Comptes",
  "Chargé de Communication",
  "Chargé des Projets",
  "Chargé des Relations Extérieures",
  "Chargé de l'Organisation",
  "Conseiller",
];

const LOCAL_ROLES = [
  "Président Local",
  "Vice-Président",
  "Secrétaire",
  "Trésorier",
  "Chargé de Communication",
  "Chargé des Projets",
  "Chargé de l'Organisation",
  "Conseiller",
];

const toPlaceholders = (roles: string[]): BureauMember[] =>
  roles.map((fonction) => ({ fonction, nom: "Nom Prénom" }));

export const BUREAUS: BureauSection[] = [
  { title: "Bureau National", members: toPlaceholders(NATIONAL_ROLES) },
  { title: "Bureau Local de Lomé", members: toPlaceholders(LOCAL_ROLES) },
  { title: "Bureau Local de Kara", members: toPlaceholders(LOCAL_ROLES) },
];
