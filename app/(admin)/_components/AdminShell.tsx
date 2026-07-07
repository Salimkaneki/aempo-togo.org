"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ArticlesProvider } from "../_lib/articlesStore";
import { CommitteesProvider } from "../_lib/committeesStore";
import { PartnersProvider } from "../_lib/partnersStore";
import { BureauProvider } from "../_lib/bureauStore";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop (lg+) : réduit/étend la sidebar. Mobile : ouvre/ferme le drawer.
  const handleToggle = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setCollapsed((c) => !c);
    } else {
      setMobileOpen((o) => !o);
    }
  };

  return (
    <ArticlesProvider>
      <CommitteesProvider>
        <PartnersProvider>
          <BureauProvider>
            <div className="min-h-screen lg:flex bg-surface text-black">
              <Sidebar
                collapsed={collapsed}
                mobileOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
              />
              <div className="flex-1 flex flex-col min-w-0">
                <Topbar onToggle={handleToggle} />
                <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
              </div>
            </div>
          </BureauProvider>
        </PartnersProvider>
      </CommitteesProvider>
    </ArticlesProvider>
  );
}
