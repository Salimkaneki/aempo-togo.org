"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";

interface NavLinkItem {
  label: string;
  href: string;
}

export default function MobileNav({ links }: { links: NavLinkItem[] }) {
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
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="p-2 -mr-2 text-zinc-900 dark:text-zinc-50"
      >
        <List size={26} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-white dark:bg-black shadow-xl flex flex-col p-6">
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="self-end p-2 -mr-2 text-zinc-900 dark:text-zinc-50"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col mt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-montserrat text-zinc-900 dark:text-zinc-50 hover:text-primary-mid border-b border-zinc-100 dark:border-zinc-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
