"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { ROUTES } from "@/app/lib/routes";
import { SOCIALS } from "@/app/lib/socials";
import { CONTAINER as CONTAINER_CLASS } from "@/app/components/Container";

// 1. Centralisation de TOUTES les données (Contenu)
const FOOTER_LINKS = [
    {
        title: "L'association",
        links: [
            { label: "Accueil", href: ROUTES.home },
            { label: "Historique", href: ROUTES.about },
            { label: "Missions & Visions", href: "#" },
            { label: "Bureau Exécutif", href: ROUTES.offices },
        ]
    },
    {
        title: "Vie Associative",
        links: [
            { label: "Comités", href: ROUTES.offices },
            { label: "Actualités / Blog", href: ROUTES.news },
            { label: "Nous contacter", href: ROUTES.contact },
        ]
    },
    {
        title: "Ressources",
        links: [
            { label: "Statuts", href: "#" },
            { label: "Règlements intérieurs", href: "#" },
            { label: "FAQ", href: "#" },
            { label: "Mentions Légales", href: "#" },
        ]
    }
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full font-sans text-zinc-900 bg-primary-light dark:bg-zinc-950">
            
            {/* Top Section */}
            <div className={`${CONTAINER_CLASS} py-10 flex flex-col md:flex-row md:justify-between items-center`}>
                <div className="w-full max-w-137.5 mb-8 md:mb-0 text-center md:text-left">
                    <h3 className="text-xl font-onest font-bold tracking-wide text-primary dark:text-green-500 mb-3 uppercase">
                        Soyez informé des nouvelles
                    </h3>
                    <div className="flex w-full h-12.5 bg-primary-mid dark:bg-green-900 overflow-hidden mb-2 font-sans">
                        <input
                            type="email"
                            placeholder="Entrez votre email"
                            className="bg-primary-mid text-primary-light/60 placeholder-green-100 px-4 flex-1 outline-none text-sm"
                        />
                        <button className="w-12.5 h-12.5 shrink-0 bg-primary hover:bg-black transition-colors flex items-center justify-center text-white" aria-label="S'inscrire">
                            <Image src="/icons/arrow-up-right.svg" alt="Subscribe" width={36} height={36} />
                        </button>
                    </div>
                    <p className="text-xs font-sans">
                        En cliquant sur Inscrivez-vous, vous acceptez nos Conditions générales et notre Politique de confidentialité.
                    </p>
                </div>

                {/* Réseaux Sociaux : Rendu dynamique (DRY) */}
                <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                    <h3 className="text-xl font-onest font-normal text-primary dark:text-zinc-50 mb-3 text-center md:text-right">
                        Suivez-nous sur
                    </h3>
                    <div className="flex gap-3">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="w-12.5 h-12.5 rounded-full border border-primary-mid dark:border-green-500 flex items-center justify-center text-primary-mid dark:text-green-500 hover:bg-primary-mid hover:text-white transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className={`${CONTAINER_CLASS} py-12 flex flex-col lg:flex-row justify-between gap-12 lg:gap-24`}>
                {/* Logo & Description */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/4">
                    <div className="flex flex-col items-center w-53.75">
                        <div className="mb-8">
                            <Image src="/icons/aempo-logo.svg" alt="AEMPO Logo" width={215} height={95} />
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="w-20 h-20 shrink-0 rounded-full bg-primary-mid hover:bg-primary transition-colors flex items-center justify-center text-white"
                            aria-label="Retour en haut"
                        >
                            <ArrowUp weight="bold" size={32} />
                        </button>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl">
                    {FOOTER_LINKS.map((section, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-center">
                                <h4 className="text-xl font-onest font-extrabold text-primary dark:text-zinc-50 mb-5 uppercase tracking-wide">
                                    {section.title}
                                </h4>
                                <ul className="flex flex-col gap-2.5 text-base text-zinc-900 dark:text-zinc-400">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href={link.href} className="hover:text-primary-mid transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-primary-mid dark:bg-[#1a3826]">
                <div className={`${CONTAINER_CLASS} py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left text-sm md:text-base tracking-wide text-white`}>
                    <p>© 2026 AEMP-Togo - Tous droits réservés.</p>
                    <p>Conçu et développé par PEREIRA Salim (Digixel)</p>
                </div>
            </div>
        </footer>
    );
}