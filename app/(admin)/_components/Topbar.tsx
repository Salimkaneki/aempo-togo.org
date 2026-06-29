"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  List,
  MagnifyingGlass,
  Bell,
  CaretDown,
  User,
  Gear,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";
import ThemeToggle from "@/app/components/ThemeToggle";
import { NAV } from "../_lib/nav";

export default function Topbar({ onToggle }: { onToggle: () => void }) {
  const pathname = usePathname();
  const current = NAV.find((n) =>
    n.href === "/admin"
      ? pathname === "/admin"
      : pathname === n.href || pathname.startsWith(`${n.href}/`)
  );
  const title = current?.label ?? "Administration";

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <header className="h-16 shrink-0 bg-white border-b border-zinc-200 flex items-center gap-3 px-4 lg:px-6 sticky top-0 z-30">
      <button
        onClick={onToggle}
        aria-label="Basculer le menu"
        className="p-2 -ml-2 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
      >
        <List size={20} />
      </button>

      {/* Fil d'ariane + titre */}
      <div className="min-w-0">
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-montserrat">
          <span>Admin</span>
          <span>/</span>
          <span className="text-zinc-500">{title}</span>
        </div>
        <h1 className="font-onest font-bold text-base text-zinc-900 leading-tight truncate">
          {title}
        </h1>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {/* Recherche */}
        <div className="hidden md:flex items-center gap-2 h-9 px-3 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-400 focus-within:border-primary-mid focus-within:bg-white transition-colors">
          <MagnifyingGlass size={16} />
          <input
            placeholder="Rechercher…"
            aria-label="Rechercher"
            className="bg-transparent outline-none w-40 text-sm text-zinc-700 placeholder:text-zinc-400 font-montserrat"
          />
          <kbd className="hidden lg:inline text-[10px] font-montserrat text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5">
            ⌘K
          </kbd>
        </div>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <ThemeToggle />

        <div className="w-px h-6 bg-zinc-200 mx-1" />

        {/* Menu utilisateur */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className="flex items-center gap-2 p-1 pr-2 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <span className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold font-onest">
              AD
            </span>
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-sm font-medium text-zinc-900 font-montserrat">Admin AEMPO</span>
              <span className="text-xs text-zinc-400 font-montserrat">Administrateur</span>
            </span>
            <CaretDown
              size={14}
              className={`hidden sm:block text-zinc-400 transition-transform ${menuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white border border-zinc-200 rounded-lg shadow-lg py-1 z-40 font-montserrat">
              <div className="px-3 py-2 border-b border-zinc-100">
                <p className="text-sm font-medium text-zinc-900">Admin AEMPO</p>
                <p className="text-xs text-zinc-400">admin@aempotogo.com</p>
              </div>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors">
                <User size={16} /> Profil
              </button>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors">
                <Gear size={16} /> Paramètres
              </button>
              <div className="border-t border-zinc-100 my-1" />
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                <SignOut size={16} /> Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
