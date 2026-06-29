"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ArticlesProvider } from "../_lib/articlesStore";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ArticlesProvider>
      <div className="min-h-screen flex bg-surface text-black">
        <Sidebar collapsed={collapsed} />
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar onToggle={() => setCollapsed((c) => !c)} />
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </ArticlesProvider>
  );
}
