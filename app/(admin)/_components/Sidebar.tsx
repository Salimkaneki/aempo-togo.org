"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "../_lib/nav";

function isActive(pathname: string, href: string) {
  return href === "/admin"
    ? pathname === "/admin"
    : pathname === href || pathname.startsWith(`${href}/`);
}

interface SidebarProps {
  /** Mode réduit (icônes seules) — desktop uniquement. */
  collapsed: boolean;
  /** Drawer ouvert — mobile uniquement. */
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ collapsed, mobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  // Mobile : Escape ferme + verrou du scroll quand le drawer est ouvert.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, onClose]);

  // Libellés masqués seulement en mode réduit ET sur desktop (toujours visibles dans le drawer mobile).
  const labelHidden = collapsed ? "lg:hidden" : "";

  return (
    <>
      {/* Overlay mobile */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 lg:hidden ${mobileOpen ? "" : "hidden"}`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 h-screen bg-white border-r border-zinc-200 flex flex-col transition-transform duration-300
          lg:sticky lg:top-0 lg:z-auto lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${collapsed ? "lg:w-16" : "lg:w-64"}`}
      >
        {/* Wordmark */}
        <div className="h-16 flex items-center px-4 border-b border-zinc-200 shrink-0">
          <span
            className={`font-onest font-extrabold text-lg tracking-wide text-zinc-900 truncate ${labelHidden}`}
          >
            AEMPO <span className="text-primary-mid">Admin</span>
          </span>
          <span
            className={`font-onest font-extrabold text-lg text-zinc-900 hidden ${collapsed ? "lg:inline" : ""}`}
          >
            A
          </span>
        </div>

        {/* Navigation groupée */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-0.5">
              <p
                className={`px-3 mb-1.5 text-[10px] font-montserrat font-semibold uppercase tracking-wider text-zinc-400 ${labelHidden}`}
              >
                {group.title}
              </p>
              {group.items.map(({ label, href, Icon, soon }) => {
                if (soon) {
                  return (
                    <span
                      key={label}
                      title={`${label} (bientôt)`}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-300 cursor-not-allowed font-montserrat"
                    >
                      <Icon size={19} className="shrink-0" />
                      <span className={`text-sm truncate ${labelHidden}`}>{label}</span>
                    </span>
                  );
                }
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={onClose}
                    title={collapsed ? label : undefined}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-md font-montserrat transition-colors ${
                      active
                        ? "bg-zinc-100 text-zinc-900 font-medium"
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    <Icon
                      size={19}
                      weight={active ? "fill" : "regular"}
                      className={`shrink-0 ${active ? "text-primary" : "text-zinc-400 group-hover:text-zinc-600"}`}
                    />
                    <span className={`text-sm truncate ${labelHidden}`}>{label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Utilisateur */}
        <div className="border-t border-zinc-200 p-3 flex items-center gap-3 shrink-0">
          <div className="size-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-sm font-semibold font-onest">
            AD
          </div>
          <div className={`min-w-0 ${labelHidden}`}>
            <p className="text-sm font-medium text-zinc-900 truncate font-montserrat">Admin AEMPO</p>
            <p className="text-xs text-zinc-400 truncate font-montserrat">admin@aempotogo.com</p>
          </div>
        </div>
      </aside>
    </>
  );
}
