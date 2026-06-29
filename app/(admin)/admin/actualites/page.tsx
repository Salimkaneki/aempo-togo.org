"use client";

import Link from "next/link";
import { Plus, PencilSimple, Trash } from "@phosphor-icons/react/dist/ssr";
import { useArticles } from "../../_lib/articlesStore";

export default function ArticlesAdminPage() {
  const { articles, remove } = useArticles();

  const handleDelete = (slug: string, title: string) => {
    if (window.confirm(`Supprimer « ${title} » ? Cette action est irréversible.`)) {
      remove(slug);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">{articles.length} article(s)</p>
        <Link
          href="/admin/actualites/nouveau"
          className="flex items-center gap-2 bg-primary-mid hover:bg-primary text-white text-sm font-medium px-4 h-10 rounded-md transition-colors"
        >
          <Plus size={16} weight="bold" /> Nouvel article
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-zinc-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-zinc-50 text-zinc-500 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Titre</th>
              <th className="px-5 py-3 font-medium hidden md:table-cell">Catégorie</th>
              <th className="px-5 py-3 font-medium hidden md:table-cell">Date</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {articles.map((a) => (
              <tr key={a.slug} className="hover:bg-zinc-50">
                <td className="px-5 py-3">
                  <p className="font-medium text-zinc-900 truncate max-w-xs">{a.title}</p>
                  <p className="text-xs text-zinc-400 md:hidden">{a.date} · {a.category}</p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2.5 py-1 rounded">
                    {a.category}
                  </span>
                </td>
                <td className="px-5 py-3 hidden md:table-cell text-zinc-500">{a.date}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/admin/actualites/${a.slug}`}
                      aria-label="Éditer"
                      className="p-2 rounded-md text-zinc-600 hover:bg-primary-light hover:text-primary transition-colors"
                    >
                      <PencilSimple size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(a.slug, a.title)}
                      aria-label="Supprimer"
                      className="p-2 rounded-md text-zinc-600 hover:bg-red-50 hover:text-danger transition-colors"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {articles.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-zinc-400">
                  Aucun article.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
