// ─── Partenaires ────────────────────────────────────────────────────────────
// Source unique partagée entre la page d'accueil et le backoffice.

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { id: "cnts", name: "CNTS", logo: "/icons/partners/cnts-log.svg" },
  { id: "univ-lome", name: "Université de Lomé (FSS)", logo: "/icons/partners/univ-lome-logo.svg" },
];
