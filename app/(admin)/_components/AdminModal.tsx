"use client";

import { useEffect } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";

interface AdminModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

/** Modal générique du backoffice : overlay + carte blanche, Escape / clic fond pour fermer. */
export default function AdminModal({ title, onClose, children }: AdminModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-montserrat">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-200 bg-white shadow-xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-zinc-100 bg-white px-6 py-4">
          <h2 className="font-onest font-bold text-zinc-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
