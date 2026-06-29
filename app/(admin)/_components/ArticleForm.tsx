"use client";

import { useRouter } from "next/navigation";
import TextInput from "@/app/components/form/TextInput";
import TextArea from "@/app/components/form/TextArea";
import SelectInput from "@/app/components/form/SelectInput";
import { ARTICLE_CATEGORIES, type Article } from "@/app/lib/data/articles";

const CATEGORIES = ARTICLE_CATEGORIES.filter((c) => c !== "Tout voir");

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const toParagraphs = (s: string) =>
  s.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
const fromParagraphs = (arr: string[]) => arr.join("\n\n");

interface ArticleFormProps {
  initial?: Article;
  submitLabel: string;
  onSubmit: (article: Article) => void;
}

export default function ArticleForm({ initial, submitLabel, onSubmit }: ArticleFormProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();
    const title = get("title");

    const article: Article = {
      slug: get("slug") || slugify(title),
      title,
      category: get("category"),
      date: get("date"),
      readTime: get("readTime"),
      image: get("image") || "/images/hero-about.png",
      excerpt: get("excerpt"),
      content: {
        introduction: toParagraphs(get("introduction")),
        objectifs: toParagraphs(get("objectifs")),
        citation: get("citation") || undefined,
        conclusion: toParagraphs(get("conclusion")),
      },
    };
    onSubmit(article);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl">
      <section className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col gap-5">
        <h2 className="font-onest font-bold text-primary">Informations générales</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <TextInput label="Titre" name="title" placeholder="Titre de l'article" defaultValue={initial?.title} />
          <SelectInput
            label="Catégorie"
            name="category"
            placeholder="Choisir une catégorie"
            options={[...CATEGORIES]}
            defaultValue={initial?.category}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <TextInput label="Slug (URL)" name="slug" required={false} placeholder="auto si vide" defaultValue={initial?.slug} />
          <TextInput label="Date" name="date" placeholder="Ex: 25 Juil. 2025" defaultValue={initial?.date} />
          <TextInput label="Temps de lecture" name="readTime" placeholder="Ex: 5 minutes de lecture" defaultValue={initial?.readTime} />
        </div>
        <TextInput label="Image (URL)" name="image" required={false} placeholder="/images/hero-about.png" defaultValue={initial?.image} />
        <TextArea label="Extrait" name="excerpt" rows={2} placeholder="Court résumé affiché dans les listes" defaultValue={initial?.excerpt} />
      </section>

      <section className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col gap-5">
        <div>
          <h2 className="font-onest font-bold text-primary">Contenu</h2>
          <p className="text-sm text-placeholder">Séparez les paragraphes par une ligne vide.</p>
        </div>
        <TextArea label="Introduction" name="introduction" rows={4} placeholder="Paragraphe(s) d'introduction" defaultValue={initial ? fromParagraphs(initial.content.introduction) : ""} />
        <TextArea label="Objectifs" name="objectifs" rows={5} placeholder="Paragraphe(s) d'objectifs" defaultValue={initial ? fromParagraphs(initial.content.objectifs) : ""} />
        <TextArea label="Citation" name="citation" required={false} rows={2} placeholder="Citation (optionnelle)" defaultValue={initial?.content.citation ?? ""} />
        <TextArea label="Conclusion" name="conclusion" rows={4} placeholder="Paragraphe(s) de conclusion" defaultValue={initial ? fromParagraphs(initial.content.conclusion) : ""} />
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-primary-mid hover:bg-primary transition-colors text-white font-montserrat font-medium px-6 h-11 rounded-lg"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 h-11 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-colors font-medium"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
