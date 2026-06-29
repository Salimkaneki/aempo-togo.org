"use client";

import Link from "next/link";
import {
  Newspaper,
  UsersThree,
  UserPlus,
  EnvelopeSimple,
  Plus,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { useArticles } from "../_lib/articlesStore";
import { BUREAUS } from "@/app/lib/data/bureau";
import { ARTICLE_CATEGORIES } from "@/app/lib/data/articles";

export default function DashboardPage() {
  const { articles } = useArticles();
  const members = BUREAUS.reduce((n, b) => n + b.members.length, 0);

  const stats = [
    { label: "Actualités", value: articles.length, Icon: Newspaper, hint: "publiées" },
    { label: "Membres du bureau", value: members, Icon: UsersThree, hint: "actifs" },
    { label: "Demandes d'adhésion", value: 0, Icon: UserPlus, hint: "en attente" },
    { label: "Messages", value: 0, Icon: EnvelopeSimple, hint: "non lus" },
  ];

  const categories = ARTICLE_CATEGORIES.filter((c) => c !== "Tout voir").map((name) => ({
    name,
    count: articles.filter((a) => a.category === name).length,
  }));
  const maxCount = Math.max(1, ...categories.map((c) => c.count));

  return (
    <div className="flex flex-col gap-6">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h2 className="font-onest font-bold text-2xl text-zinc-900">Bonjour, Admin 👋</h2>
          <p className="font-montserrat text-sm text-zinc-500">
            Voici un aperçu de l&apos;activité d&apos;AEMPO-TOGO.
          </p>
        </div>
        <Link
          href="/admin/actualites/nouveau"
          className="self-start sm:self-auto flex items-center gap-2 bg-primary-mid hover:bg-primary text-white text-sm font-medium font-montserrat px-4 h-10 rounded-lg transition-colors"
        >
          <Plus size={16} weight="bold" /> Nouvel article
        </Link>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, Icon, hint }) => (
          <div key={label} className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-montserrat font-semibold uppercase tracking-wide text-zinc-400">
                {label}
              </p>
              <Icon size={18} className="text-zinc-300 shrink-0" />
            </div>
            <p className="mt-3 text-3xl font-onest font-bold text-zinc-900">{value}</p>
            <p className="mt-1 font-montserrat text-xs text-zinc-400">{hint}</p>
          </div>
        ))}
      </div>

      {/* Deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dernières actualités */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-zinc-100">
            <h3 className="font-onest font-bold text-zinc-900">Dernières actualités</h3>
            <Link
              href="/admin/actualites"
              className="flex items-center gap-1 text-sm font-montserrat text-primary-mid hover:text-primary transition-colors"
            >
              Tout voir <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
          <ul className="divide-y divide-zinc-100">
            {articles.slice(0, 5).map((a) => (
              <li
                key={a.slug}
                className="flex items-center gap-4 px-5 py-3 hover:bg-zinc-50 transition-colors"
              >
                <span className="size-9 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                  <Newspaper size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-montserrat font-medium text-zinc-900 truncate">{a.title}</p>
                  <p className="font-montserrat text-xs text-zinc-400">
                    {a.date} · {a.category}
                  </p>
                </div>
                <Link
                  href={`/admin/actualites/${a.slug}`}
                  className="text-sm font-montserrat text-zinc-400 hover:text-primary-mid shrink-0 transition-colors"
                >
                  Éditer
                </Link>
              </li>
            ))}
            {articles.length === 0 && (
              <li className="px-5 py-10 text-center text-zinc-400 font-montserrat text-sm">
                Aucun article.
              </li>
            )}
          </ul>
        </div>

        {/* Répartition par catégorie */}
        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
          <h3 className="font-onest font-bold text-zinc-900 mb-4">Répartition par catégorie</h3>
          <ul className="flex flex-col gap-3.5">
            {categories.map((c) => (
              <li key={c.name} className="font-montserrat">
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-zinc-600">{c.name}</span>
                  <span className="text-zinc-900 font-medium">{c.count}</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary-mid"
                    style={{ width: `${(c.count / maxCount) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
