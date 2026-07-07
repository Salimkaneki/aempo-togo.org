import type { ReactNode } from "react";

const WEIGHTS = {
  semibold: "font-semibold",
  medium: "font-medium",
} as const;

/**
 * Classe de base partagée pour les boîtes de champ (input / select / textarea).
 * Ne fixe pas la hauteur : chaque champ ajoute `h-11` (input/select) ou
 * `min-h-*` (textarea).
 */
export const FIELD_BOX_CLASS =
  "w-full bg-primary-light border border-muted px-4 py-2.5 font-montserrat text-black outline-none transition-colors hover:border-primary-mid focus:border-primary";

interface FieldLabelProps {
  children: ReactNode;
  /** Lie le label à un champ via son id (omis pour les groupes, ex. radios). */
  htmlFor?: string;
  /** Affiche l'astérisque rouge « requis ». */
  required?: boolean;
  weight?: keyof typeof WEIGHTS;
}

export function FieldLabel({
  children,
  htmlFor,
  required = false,
  weight = "semibold",
}: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex gap-1 text-sm font-montserrat ${WEIGHTS[weight]} text-black`}
    >
      {children}
      {required && <span className="text-danger">*</span>}
    </label>
  );
}
