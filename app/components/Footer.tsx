"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

// 1. Centralisation de TOUTES les données (Contenu)
const FOOTER_LINKS = [
    {
        title: "L'association",
        links: [
            { label: "Accueil", href: "/" },
            { label: "Historique", href: "/about" },
            { label: "Missions & Visions", href: "#" },
            { label: "Bureau Exécutif", href: "/offices" },
        ]
    },
    {
        title: "Vie Associative",
        links: [
            { label: "Comités", href: "/offices" },
            { label: "Actualités / Blog", href: "/news" },
            { label: "Nous contacter", href: "/contact" },
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

const SOCIAL_LINKS = [
    { name: "Facebook", href: "#", icon: "/icons/facebook.svg" },
    { name: "X", href: "#", icon: "/icons/x.svg" },
    { name: "LinkedIn", href: "#", icon: "/icons/linkedin.svg" },
    { name: "YouTube", href: "#", icon: "/icons/youtube.svg" },
];

// 2. Centralisation des styles structurels répétitifs
const CONTAINER_CLASS = "mx-auto max-w-[1440px] px-6 lg:px-12";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full font-sans text-zinc-900 bg-[#eff7f1] dark:bg-zinc-950">
            
            {/* Top Section */}
            <div className={`${CONTAINER_CLASS} py-10 flex flex-col md:flex-row justify-between items-start md:items-center`}>
                <div className="w-full max-w-137.5 mb-8 md:mb-0">
                    <h3 className="text-xl font-onest font-bold tracking-wide text-[#1c4b31] dark:text-green-500 mb-3 uppercase">
                        Soyez informé des nouvelles
                    </h3>
                    <div className="flex w-full h-12.5 bg-[#357a55] dark:bg-green-900 overflow-hidden mb-2 font-sans">
                        <input
                            type="email"
                            placeholder="Entrez votre email"
                            className="bg-[#357a55] text-[#E8F5E9]/60 placeholder-green-100 px-4 flex-1 outline-none text-sm"
                        />
                        <button className="w-12.5 h-12.5 shrink-0 bg-[#0b321a] hover:bg-black transition-colors flex items-center justify-center text-white" aria-label="S'inscrire">
                            <Image src="/icons/arrow-up-right.svg" alt="Subscribe" width={36} height={36} />
                        </button>
                    </div>
                    <p className="text-xs font-sans text-nowrap">
                        En cliquant sur Inscrivez-vous, vous acceptez nos Conditions générales et notre Politique de confidentialité.
                    </p>
                </div>

                {/* Réseaux Sociaux : Rendu dynamique (DRY) */}
                <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                    <h3 className="text-xl font-onest font-normal text-[#1c4b31] dark:text-zinc-50 mb-3 text-right">
                        Suivez-nous sur
                    </h3>
                    <div className="flex gap-3">
                        {SOCIAL_LINKS.map((social, i) => (
                            <a 
                                key={i} 
                                href={social.href} 
                                aria-label={social.name}
                                className="w-12.5 h-12.5 rounded-full border border-[#4ea977] dark:border-green-500 flex items-center justify-center hover:bg-[#4ea977] hover:text-white transition-colors"
                            >
                                {/* Optionnel : Tu pourra   s décommenter cette ligne dès que tu auras les icônes */}
                                {/* <Image src={social.icon} alt={social.name} width={18} height={18} /> */}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className={`${CONTAINER_CLASS} py-12 flex flex-col lg:flex-row justify-between gap-12 lg:gap-24`}>
                {/* Logo & Description */}
                <div className="flex flex-col items-start lg:w-1/4">
                    <div className="flex flex-col items-center w-53.75">
                        <div className="mb-8">
                            <Image src="/icons/aempo-logo.svg" alt="AEMPO Logo" width={215} height={95} />
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="w-20 h-20 shrink-0 rounded-full bg-[#357a55] hover:bg-[#1a4a30] transition-colors flex items-center justify-center text-white"
                            aria-label="Retour en haut"
                        >
                            <ArrowUp weight="bold" size={32} />
                        </button>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl">
                    {FOOTER_LINKS.map((section, index) => (
                        <div key={index} className="flex flex-col items-start sm:items-center">
                            <div className="text-left sm:text-center">
                                <h4 className="text-xl font-onest font-extrabold text-[#1c4b31] dark:text-zinc-50 mb-5 uppercase tracking-wide">
                                    {section.title}
                                </h4>
                                <ul className="flex flex-col gap-2.5 text-base text-zinc-900 dark:text-zinc-400">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href={link.href} className="hover:text-[#357a55] transition-colors">
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
            <div className="bg-[#448b62] dark:bg-[#1a3826]">
                <div className={`${CONTAINER_CLASS} py-5 flex flex-col md:flex-row items-center justify-between text-white text-base tracking-wide`}>
                    <p>© 2026 AEMP-Togo - Tous droits réservés.</p>
                    <p>Conçu et développé par PEREIRA Salim (Digixel)</p>
                </div>
            </div>
        </footer>
    );
}