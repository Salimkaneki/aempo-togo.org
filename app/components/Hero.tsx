"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const CONTAINER_CLASS = "mx-auto w-full max-w-[1440px] px-6 lg:px-12";

interface HeroProps {
    showBanner?: boolean;
    variant?: "home" | "page";
    showSubtitle?: boolean;
    bannerText?: string;       // Prop pour changer le texte du paragraphe
    bannerCtaText?: string;    // Prop pour changer le texte du bouton
    imageSrc?: string;         // Prop pour changer l'image de fond
    subtitleText?: string;     // Prop pour changer le sous-titre
    titleText?: string;        // Prop pour changer le titre principal
    imagePosition?: string;    // Prop pour ajuster la position de l'image (object-center, object-top, etc.)
}

export default function Hero({ 
    showBanner = true, 
    variant = "home", 
    showSubtitle = true,
    bannerText = "L'excellence médicale togolaise commence ici. Rejoignez le réseau officiel des étudiants en Médecine, Pharmacie et Dentaire pour innover, s'engager et bâtir ensemble l'avenir de la santé au Togo.",
    bannerCtaText = "Nous rejoindre",
    imageSrc = "/images/hero-image.jpeg",
    subtitleText = "AEMPO-TOGO",
    titleText = "L'EXCELLENCE MÉDICALE TOGOLAISE COMMENCE ICI.",
    imagePosition = "object-center"
}: HeroProps) {
    const router = useRouter();

    // 1. Calcul dynamique de la hauteur pour le mode "page" (355px ou 485px)
    let heightClass = "h-[calc(100vh-80px)]"; // Par défaut pour "home"
    
    if (variant === "page") {
        heightClass = showBanner ? "h-[485px]" : "h-[355px]";
    }

    // 2. Gestion de l'overlay (Dégradé pour "home", opacité 45% pour "page")
    const overlayClass = variant === "home" 
        ? "bg-linear-to-t from-black/90 via-black/30 to-transparent" 
        : "bg-black/45";

    return (
        <section className={`${heightClass} w-full flex flex-col transition-all duration-300`}>
            {/* Background Image Container */}
            <div className="relative w-full flex-1">
                <Image
                    src={imageSrc}
                    alt="AEMPO Togo Students"
                    fill
                    sizes="100vw"
                    loading="eager"
                    className={`object-cover ${imagePosition}`}
                    priority
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${overlayClass}`}></div>

                {/* Hero Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end pb-10">
                    <div className={CONTAINER_CLASS}>
                        
                        {!showSubtitle ? (
                            <button 
                                onClick={() => router.back()}
                                className="flex items-center gap-2 text-white hover:text-green-400 font-medium text-sm mb-4 uppercase tracking-wider transition-colors group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                Retour
                            </button>
                        ) : (
                            <p className="text-[24px] font-semibold text-white mb-2 uppercase tracking-wide">
                                {subtitleText}
                            </p>
                        )}

                        <h1 className="text-4xl md:text-[56px] font-onest font-bold text-white leading-[1.1] max-w-330 uppercase">
                            {titleText}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Bottom Green Banner */}
            {showBanner && (
                <div className="bg-[#103a22] w-full">
                    <div className={`${CONTAINER_CLASS} py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6`}>
                        <p className="text-white text-2xl max-w-5xl font-montserrat font-light leading-relaxed">
                            {bannerText} {/* Texte dynamique */}
                        </p>
                        <button className="flex items-center gap-3 bg-[#eff7f1] text-[#0b321a]  text-2xl p-4 shrink-0 hover:bg-white transition-colors">
                            {bannerCtaText} {/* Texte du bouton dynamique */}
                            <ArrowUpRight weight="bold" size={24} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}