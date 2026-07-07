"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import Image from "next/image";
import { ROUTES } from "@/app/lib/routes";
import MobileNav from "./MobileNav";

const HEADER_LINKS = [
  { label: "À propos", href: ROUTES.about },
  { label: "Actualités", href: ROUTES.news },
  { label: "Bureau", href: ROUTES.offices },
  { label: "Contact", href: ROUTES.contact },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b font-montserrat transition-all duration-300 ${
        scrolled
          ? "border-zinc-200/80 bg-white/80 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80"
          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black"
      }`}
    >
      <div
        className={`mx-auto flex max-w-360 items-center justify-between px-6 transition-all duration-300 lg:px-12 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* LOGO */}
        <Link href={ROUTES.home} className="flex items-center">
          <Image
            src="/icons/aempo-logo.svg"
            alt="AEMPO Logo"
            width={120}
            height={95}
            style={{ height: "auto" }}
            className={`origin-left transition-transform duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-base text-zinc-900 dark:text-zinc-50">
          {HEADER_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative transition-colors duration-200 ${
                  active
                    ? "text-primary dark:text-green-300"
                    : "hover:text-primary dark:hover:text-green-300"
                }`}
              >
                {link.label}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-200 ease-out dark:bg-green-300 ${
                    active
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          {/* SÉLECTEUR DE LANGUE */}
          <div className="hidden sm:flex items-center gap-2 text-sm tracking-widest">
            <button className="font-medium text-zinc-900 dark:text-zinc-50 hover:text-green-700 transition-colors">
              EN
            </button>
            <span className="text-zinc-300 dark:text-zinc-700 font-light">|</span>
            <button className="font-medium text-zinc-400 hover:text-green-700 transition-colors">
              FR
            </button>
          </div>

          {/* BOUTON THEME */}
          <ThemeToggle />

          {/* NAV MOBILE */}
          <MobileNav links={HEADER_LINKS} />
        </div>
      </div>
    </header>
  );
}
