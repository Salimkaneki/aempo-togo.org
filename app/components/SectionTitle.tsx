import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  /** Couleur, casse et marges via className (ex. "text-primary uppercase mb-6").
   *  Couleur et `uppercase` ne sont pas imposés pour rester flexibles. */
  className?: string;
}

/** Titre de section standard : Onest extrabold, responsive (3xl → 4xl). */
export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-onest font-extrabold ${className}`}>
      {children}
    </h2>
  );
}
