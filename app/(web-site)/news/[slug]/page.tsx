import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import JournalCard from "@/app/components/JournalCard";
import {
  allArticles,
  getArticleBySlug,
  getRelatedArticles,
  getShortReadTime,
} from "@/app/lib/data/articles";

export function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}
import { CONTAINER } from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";

// ─── Page component ───────────────────────────────────────────────────────────

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-2xl font-onest text-gray-500">
          Article introuvable.
        </p>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative w-full h-105">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-end pb-10">
          <div className={`${CONTAINER} w-full`}>
            <Link
              href="/news"
              className="flex items-center gap-2 text-white hover:text-green-400 font-medium text-sm mb-4 uppercase tracking-wider transition-colors group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Retour
            </Link>
            <h1 className="text-4xl md:text-[56px] font-onest font-bold text-white leading-[1.1] max-w-225 uppercase">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Article body ──────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-20">
        <div className={`${CONTAINER} flex flex-col lg:flex-row gap-12 lg:gap-20`}>
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0 flex flex-col gap-6">
            <div>
              <p className="text-sm font-montserrat text-gray-400 uppercase tracking-wider mb-1">
                Date de publication
              </p>
              <p className="text-base font-onest font-semibold text-black">
                {article.date}
              </p>
            </div>
            <div>
              <p className="text-sm font-montserrat text-gray-400 uppercase tracking-wider mb-2">
                Catégorie
              </p>
              <span className="inline-block bg-primary-light text-primary text-sm font-medium px-4 py-1.5 rounded">
                {article.category}
              </span>
            </div>
          </aside>

          {/* Content */}
          <article className="flex-1 max-w-3xl">
            {/* Introduction */}
            <SectionTitle className="text-primary mb-6">
              Introduction
            </SectionTitle>
            <div className="flex flex-col gap-4 mb-12">
              {article.content.introduction.map((p, i) => (
                <p
                  key={i}
                  className="text-base font-montserrat text-gray-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Objectifs */}
            <SectionTitle className="text-primary mb-6">
              Objectifs
            </SectionTitle>
            <div className="flex flex-col gap-4 mb-8">
              {article.content.objectifs.map((p, i) => (
                <p
                  key={i}
                  className="text-base font-montserrat text-gray-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Blockquote */}
            {article.content.citation && (
              <blockquote className="border-l-4 border-primary pl-6 py-2 mb-12 italic text-lg font-montserrat text-gray-600 leading-relaxed">
                {article.content.citation}
              </blockquote>
            )}

            {/* Conclusion */}
            <SectionTitle className="text-primary mb-6">
              Conclusion
            </SectionTitle>
            <div className="flex flex-col gap-4">
              {article.content.conclusion.map((p, i) => (
                <p
                  key={i}
                  className="text-base font-montserrat text-gray-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ── Autres articles ───────────────────────────────────────────── */}
      <section className="w-full pb-20">
        <div className={CONTAINER}>
          <div className="flex items-center justify-between mb-10">
            <SectionTitle className="text-black">
              Autres articles
            </SectionTitle>
            <Link
              href="/news"
              className="flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-5 py-2.5 rounded hover:bg-[#D0E8D3] transition-colors"
            >
              Tous les articles
              <ArrowUpRight weight="bold" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((a) => (
              <JournalCard
                key={a.slug}
                slug={a.slug}
                image={a.image}
                date={a.date}
                readTime={getShortReadTime(a.readTime)}
                title={a.title}
                excerpt={a.excerpt}
                layout="grid"
                theme="light"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
