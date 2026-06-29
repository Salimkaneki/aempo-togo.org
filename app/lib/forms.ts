import type { FormEvent } from "react";

/**
 * Crée un handler de soumission partagé pour les formulaires : empêche le
 * rechargement, collecte les champs via FormData et les journalise.
 *
 * TODO: brancher l'envoi réel (route API / email / service externe).
 */
export function createFormSubmitHandler(label: string) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(label, data);
  };
}
