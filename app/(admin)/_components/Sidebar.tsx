"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "../_lib/nav";

function isActive(pathname: string, href: string) {
  return href === "/admin"
    ? pathname === "/admin"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={`${collapsed ? "w-16" : "w-64"} shrink-0 bg-white border-r border-zinc-200 flex flex-col transition-all duration-300 sticky top-0 h-screen`}
    >
      {/* Wordmark */}
      <div className="h-16 flex items-center px-4 border-b border-zinc-200">
        {collapsed ? (
          <span className="font-onest font-extrabold text-lg text-zinc-900">A</span>
        ) : (
          <span className="font-onest font-extrabold text-lg tracking-wide text-zinc-900 truncate">
            AEMPO <span className="text-primary-mid">Admin</span>
          </span>
        )}
      </div>

      {/* Navigation groupée */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-0.5">
            {!collapsed && (
              <p className="px-3 mb-1.5 text-[10px] font-montserrat font-semibold uppercase tracking-wider text-zinc-400">
                {group.title}
              </p>
            )}
            {group.items.map(({ label, href, Icon, soon }) => {
              if (soon) {
                return (
                  <span
                    key={label}
                    title={collapsed ? `${label} (bientôt)` : "Bientôt disponible"}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-300 cursor-not-allowed font-montserrat"
                  >
                    <Icon size={19} className="shrink-0" />
                    {!collapsed && <span className="text-sm truncate">{label}</span>}
                  </span>
                );
              }
              const active = isActive(pathname, href);
              return (
                <Link
                  key={label}
                  href={href}
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
                  {!collapsed && <span className="text-sm truncate">{label}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Utilisateur */}
      <div className="border-t border-zinc-200 p-3 flex items-center gap-3">
        <div className="size-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-sm font-semibold font-onest">
          AD
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-medium text-zinc-900 truncate font-montserrat">Admin AEMPO</p>
            <p className="text-xs text-zinc-400 truncate font-montserrat">admin@aempotogo.com</p>
          </div>
        )}
      </div>
    </aside>
  );
}
