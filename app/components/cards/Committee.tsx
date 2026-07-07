"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CommitteeProps {
  name: string;
  logo: string;
  description: string;
}

export default function Committee({ name, logo, description }: CommitteeProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`En savoir plus sur ${name}`}
        className="bg-primary w-50 h-50 flex items-center justify-center select-none cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid focus-visible:ring-offset-2"
      >
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          draggable={false}
          className="w-25 h-25 object-contain pointer-events-none"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 font-montserrat"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 animate-overlay-in"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="relative w-full max-w-171.5 bg-primary text-white shadow-2xl animate-drawer-in">
            <div className="flex flex-col items-end justify-center gap-6 px-10 py-6">
              <div className="flex w-full flex-col items-start gap-3 wrap-break-word">
                <h2 className="w-full text-[40px] font-bold leading-tight">{name}</h2>
                <p className="w-full text-base font-medium leading-normal">{description}</p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-12 w-65 items-center justify-center rounded-lg bg-accent text-base font-semibold text-primary transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
