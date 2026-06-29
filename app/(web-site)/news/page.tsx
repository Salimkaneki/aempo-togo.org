"use client";

import { useState } from "react";
import Hero from "@/app/components/Hero";
import FilterTag from "@/app/components/FilterTag";
import JournalCard from "@/app/components/JournalCard";
import { allArticles, ARTICLE_CATEGORIES, getShortReadTime } from "@/app/lib/data/articles";
import { CONTAINER } from "@/app/components/Container";

const FILTERS = ARTICLE_CATEGORIES;

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("Tout voir");

  const filteredArticles = activeFilter === "Tout voir"
    ? allArticles
    : allArticles.filter((a) => a.category === activeFilter);

  return (
    <>
      <Hero
        imageSrc="/images/hero-about.png"
        subtitleText="Journal de l'AEMPO-TOGO"
        titleText="TOUTE L'ACTUALITÉ DE LA RELÈVE MÉDICALE EN ACTION."
        variant="page"
        showBanner={false}
        imagePosition="object-top"
      />

      <section className="w-full py-10 flex flex-row justify-center">
        <div className={`${CONTAINER} flex flex-col lg:flex-row items-center gap-4 lg:gap-5`}>
          {FILTERS.map((filter) => (
            <FilterTag
              key={filter}
              title={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </section>

      <section className="w-full pb-20">
        <div className="mx-auto max-w-360 px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-10">
            {filteredArticles.map((article) => (
              <JournalCard
                key={article.slug}
                slug={article.slug}
                image={article.image}
                date={article.date}
                readTime={getShortReadTime(article.readTime)}
                title={article.title}
                excerpt={article.excerpt}
                theme="light"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}