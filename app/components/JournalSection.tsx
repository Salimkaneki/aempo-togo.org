"use client";

import { useRef, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import JournalCard from "./JournalCard";

interface JournalSectionProps {
  items: Array<{
    image: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
  }>;
}

export default function JournalSection({ items }: JournalSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setIsAtStart(el.scrollLeft < 16);
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 16);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 524;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#0e3b23] py-20">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-onest font-extrabold text-white uppercase">
            LE JOURNAL DE L&apos;AEMPO
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-15 bg-linear-to-r from-[#0e3b23] to-transparent pointer-events-none z-10 transition-opacity duration-300"
            style={{ opacity: isAtStart ? 0 : 1 }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-15 bg-linear-to-l from-[#0e3b23] to-transparent pointer-events-none z-10 transition-opacity duration-300"
            style={{ opacity: isAtEnd ? 0 : 1 }}
          />
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-none gap-6 snap-x snap-mandatory"
          >
            {items.map((item, idx) => (
              <JournalCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
