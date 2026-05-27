"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Vérifie le thème actuel à l'initialisation
    const theme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (theme === "dark" || (!theme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Pour éviter des problèmes de décalage HTML côté serveur (SRR) / client
  if (!mounted) return <div className="w-6 h-6" />; 

  return (
    <button
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="text-zinc-900 hover:text-green-700 dark:text-white transition-colors flex items-center justify-center"
    >
      {isDark ? <Sun size={24} weight="bold" /> : <Moon size={24} weight="bold" />}
    </button>
  );
}
