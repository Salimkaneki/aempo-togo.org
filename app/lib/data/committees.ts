// ─── Comités permanents ─────────────────────────────────────────────────────
// Source unique partagée entre la page publique (about) et le backoffice.
// ⚠️ Descriptions PLACEHOLDER — à remplacer par les contenus officiels.

export interface Committee {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const PLACEHOLDER_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export const COMMITTEES: Committee[] = [
  { id: "scora", name: "SCORA", logo: "/images/commitees/scora.svg", description: PLACEHOLDER_DESCRIPTION },
  { id: "scorp", name: "SCORP", logo: "/images/commitees/scorp.svg", description: PLACEHOLDER_DESCRIPTION },
  { id: "scoph", name: "SCOPH", logo: "/images/commitees/scoph.svg", description: PLACEHOLDER_DESCRIPTION },
  { id: "scope", name: "SCOPE", logo: "/images/commitees/scope.svg", description: PLACEHOLDER_DESCRIPTION },
  { id: "score", name: "SCORE", logo: "/images/commitees/score.svg", description: PLACEHOLDER_DESCRIPTION },
  { id: "scome", name: "SCOME", logo: "/images/commitees/scome.svg", description: PLACEHOLDER_DESCRIPTION },
];
