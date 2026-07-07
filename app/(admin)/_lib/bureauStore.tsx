"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { BUREAUS, type BureauSection, type BureauMember } from "@/app/lib/data/bureau";

// ⚠️ Store MOCK : état en mémoire + persistance localStorage (par navigateur).
// À remplacer par des appels BDD/Server Actions lors de la phase persistance.

interface BureauContextValue {
  bureaus: BureauSection[];
  addMember: (sectionIndex: number, member: BureauMember) => void;
  updateMember: (sectionIndex: number, memberIndex: number, member: BureauMember) => void;
  removeMember: (sectionIndex: number, memberIndex: number) => void;
}

const BureauContext = createContext<BureauContextValue | null>(null);
const STORAGE_KEY = "aempo:admin:bureau";

export function BureauProvider({ children }: { children: ReactNode }) {
  const [bureaus, setBureaus] = useState<BureauSection[]>(BUREAUS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setBureaus(JSON.parse(saved) as BureauSection[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bureaus));
    } catch {
      /* ignore */
    }
  }, [bureaus, hydrated]);

  const mapSection = (
    sectionIndex: number,
    fn: (members: BureauMember[]) => BureauMember[]
  ) =>
    setBureaus((prev) =>
      prev.map((section, i) =>
        i === sectionIndex ? { ...section, members: fn(section.members) } : section
      )
    );

  const value: BureauContextValue = {
    bureaus,
    addMember: (sectionIndex, member) =>
      mapSection(sectionIndex, (members) => [...members, member]),
    updateMember: (sectionIndex, memberIndex, member) =>
      mapSection(sectionIndex, (members) =>
        members.map((m, i) => (i === memberIndex ? member : m))
      ),
    removeMember: (sectionIndex, memberIndex) =>
      mapSection(sectionIndex, (members) => members.filter((_, i) => i !== memberIndex)),
  };

  return <BureauContext.Provider value={value}>{children}</BureauContext.Provider>;
}

export function useBureau() {
  const ctx = useContext(BureauContext);
  if (!ctx) throw new Error("useBureau doit être utilisé dans <BureauProvider>");
  return ctx;
}
