"use client";

import { useRouter } from "next/navigation";
import ArticleForm from "../../../_components/ArticleForm";
import { useArticles } from "../../../_lib/articlesStore";

export default function NewArticlePage() {
  const router = useRouter();
  const { create, getBySlug } = useArticles();

  return (
    <ArticleForm
      submitLabel="Créer l'article"
      onSubmit={(article) => {
        // Éviter une collision de slug
        let slug = article.slug;
        let i = 2;
        while (getBySlug(slug)) slug = `${article.slug}-${i++}`;
        create({ ...article, slug });
        router.push("/admin/actualites");
      }}
    />
  );
}
