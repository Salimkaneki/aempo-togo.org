"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { PARTNERS, type Partner } from "@/app/lib/data/partners";

// ⚠️ Store MOCK : état en mémoire + persistance localStorage (par navigateur).
// À remplacer par des appels BDD/Server Actions lors de la phase persistance.

interface PartnersContextValue {
  partners: Partner[];
  create: (partner: Partner) => void;
  update: (id: string, partner: Partner) => void;
  remove: (id: string) => void;
}

const PartnersContext = createContext<PartnersContextValue | null>(null);
const STORAGE_KEY = "aempo:admin:partners";

export function PartnersProvider({ children }: { children: ReactNode }) {
  const [partners, setPartners] = useState<Partner[]>(PARTNERS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setPartners(JSON.parse(saved) as Partner[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(partners));
    } catch {
      /* ignore */
    }
  }, [partners, hydrated]);

  const value: PartnersContextValue = {
    partners,
    create: (partner) => setPartners((prev) => [...prev, partner]),
    update: (id, partner) =>
      setPartners((prev) => prev.map((p) => (p.id === id ? partner : p))),
    remove: (id) => setPartners((prev) => prev.filter((p) => p.id !== id)),
  };

  return <PartnersContext.Provider value={value}>{children}</PartnersContext.Provider>;
}

export function usePartners() {
  const ctx = useContext(PartnersContext);
  if (!ctx) throw new Error("usePartners doit être utilisé dans <PartnersProvider>");
  return ctx;
}
