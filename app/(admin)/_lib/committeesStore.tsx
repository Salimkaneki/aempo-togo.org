"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { COMMITTEES, type Committee } from "@/app/lib/data/committees";

// ⚠️ Store MOCK : état en mémoire + persistance localStorage (par navigateur).
// À remplacer par des appels BDD/Server Actions lors de la phase persistance.

interface CommitteesContextValue {
  committees: Committee[];
  create: (committee: Committee) => void;
  update: (id: string, committee: Committee) => void;
  remove: (id: string) => void;
}

const CommitteesContext = createContext<CommitteesContextValue | null>(null);
const STORAGE_KEY = "aempo:admin:committees";

export function CommitteesProvider({ children }: { children: ReactNode }) {
  const [committees, setCommittees] = useState<Committee[]>(COMMITTEES);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCommittees(JSON.parse(saved) as Committee[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(committees));
    } catch {
      /* ignore */
    }
  }, [committees, hydrated]);

  const value: CommitteesContextValue = {
    committees,
    create: (committee) => setCommittees((prev) => [...prev, committee]),
    update: (id, committee) =>
      setCommittees((prev) => prev.map((c) => (c.id === id ? committee : c))),
    remove: (id) => setCommittees((prev) => prev.filter((c) => c.id !== id)),
  };

  return <CommitteesContext.Provider value={value}>{children}</CommitteesContext.Provider>;
}

export function useCommittees() {
  const ctx = useContext(CommitteesContext);
  if (!ctx) throw new Error("useCommittees doit être utilisé dans <CommitteesProvider>");
  return ctx;
}
