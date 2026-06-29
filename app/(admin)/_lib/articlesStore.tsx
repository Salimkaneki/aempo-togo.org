"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { allArticles, type Article } from "@/app/lib/data/articles";

// ⚠️ Store MOCK : état en mémoire + persistance localStorage (par navigateur).
// À remplacer par des appels BDD/Server Actions lors de la phase persistance.

interface ArticlesContextValue {
  articles: Article[];
  getBySlug: (slug: string) => Article | undefined;
  create: (article: Article) => void;
  update: (slug: string, article: Article) => void;
  remove: (slug: string) => void;
}

const ArticlesContext = createContext<ArticlesContextValue | null>(null);
const STORAGE_KEY = "aempo:admin:articles";

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>(allArticles);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setArticles(JSON.parse(saved) as Article[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    } catch {
      /* ignore */
    }
  }, [articles, hydrated]);

  const value: ArticlesContextValue = {
    articles,
    getBySlug: (slug) => articles.find((a) => a.slug === slug),
    create: (article) => setArticles((prev) => [article, ...prev]),
    update: (slug, article) =>
      setArticles((prev) => prev.map((a) => (a.slug === slug ? article : a))),
    remove: (slug) => setArticles((prev) => prev.filter((a) => a.slug !== slug)),
  };

  return (
    <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>
  );
}

export function useArticles() {
  const ctx = useContext(ArticlesContext);
  if (!ctx) throw new Error("useArticles doit être utilisé dans <ArticlesProvider>");
  return ctx;
}
