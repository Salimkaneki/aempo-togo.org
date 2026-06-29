import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { ROUTES } from "@/app/lib/routes";

const HEADER_LINKS = [
  { label: "À propos", href: ROUTES.about },
  { label: "Actualités", href: ROUTES.news },
  { label: "Bureau", href: ROUTES.offices },
  { label: "Contact", href: ROUTES.contact },
];

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white font-montserrat transition-colors dark:bg-black dark:border-zinc-800">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
          <Link href={ROUTES.home} className="flex items-center">
          <Image src="/icons/aempo-logo.svg" alt="AEMPO Logo" width={120} height={95} style={{ height: 'auto' }} />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-base text-zinc-900 dark:text-zinc-50">
          {HEADER_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-green-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {/* SÉLECTEUR DE LANGUE */}
          <div className="flex items-center gap-2 text-sm tracking-widest">
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
        </div>
      </div>
    </header>
  );
}