"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArticleForm from "../../../_components/ArticleForm";
import { useArticles } from "../../../_lib/articlesStore";

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const { getBySlug, update } = useArticles();
  const article = getBySlug(slug);

  if (!article) {
    return (
      <p className="text-zinc-500">
        Article introuvable.{" "}
        <Link href="/admin/actualites" className="text-primary-mid underline">
          Retour à la liste
        </Link>
      </p>
    );
  }

  return (
    <ArticleForm
      initial={article}
      submitLabel="Enregistrer les modifications"
      onSubmit={(updated) => {
        update(slug, updated);
        router.push("/admin/actualites");
      }}
    />
  );
}
