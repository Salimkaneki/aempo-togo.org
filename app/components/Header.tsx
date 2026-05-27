import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white font-sans transition-colors dark:bg-black dark:border-zinc-800">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-widest text-zinc-900 dark:text-zinc-50">
            AEMPO
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-base text-zinc-900 dark:text-zinc-50">
          <Link href="/a-propos" className="hover:text-green-700 transition-colors">
            À propos
          </Link>
          <Link href="/actualites" className="hover:text-green-700 transition-colors">
            Actualités
          </Link>
          <Link href="/bureau" className="hover:text-green-700 transition-colors">
            Bureau
          </Link>
          <Link href="/contact" className="hover:text-green-700 transition-colors">
            Contact
          </Link>
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