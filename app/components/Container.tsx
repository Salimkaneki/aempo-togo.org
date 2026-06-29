import type { ReactNode } from "react";

/** Classe du conteneur centré standard du site (largeur max + paddings). */
export const CONTAINER = "mx-auto max-w-360 px-6 lg:px-12";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Conteneur centré réutilisable. Le contenu/layout est passé via `className`. */
export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={`${CONTAINER} ${className}`}>{children}</div>;
}
