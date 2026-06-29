import React from 'react';
import SectionTitle from "@/app/components/SectionTitle";

const TIMELINE_DATA = [
  {
    year: "1979",
    title: "Création de l'AEM",
    description: "Fondation de l'association par et pour les étudiants en médecine, posant les bases de notre engagement associatif.",
    position: "right",
    theme: "green"
  },
  {
    year: "1996",
    title: "Naissance de l'AEMP-Togo",
    description: "Intégration de la filière Pharmacie. L'association évolue pour représenter une communauté médicale plus large.",
    position: "left",
    theme: "yellow"
  },
  {
    year: "2019",
    title: "Évolution en AEMPO-Togo",
    description: "Ouverture à l'Odontostomatologie. Adoption de notre identité actuelle, unifiant ainsi toutes les vocations de la santé.",
    position: "right",
    theme: "green"
  },
  {
    year: "2020",
    title: "Décentralisation",
    description: "Pour être au plus près de chaque étudiant, l'association se déploie à travers le pays avec les sections de Lomé et Kara.",
    position: "left",
    theme: "yellow"
  },
  {
    year: "2023",
    title: "L'Envergure Internationale",
    description: "Une nouvelle ère d'impact. Nous déployons de nouveaux projets et portons nos valeurs au-delà de nos frontières.",
    position: "right",
    theme: "green"
  }
];

export default function TrajectorySection() {
  return (
    <section className="w-full bg-[#fbfbf9] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        
        {/* Header */}
        {/* Passage à mb-24 (96px) pour l'espacement global avec la timeline */}
        <div className="flex flex-col items-center text-center mb-24 w-full max-w-264.5 mx-auto">
          
          <SectionTitle className="text-primary uppercase mb-3">
            NOTRE TRAJECTOIRE
          </SectionTitle>
          
          {/* Passage à mb-24 (96px) pour l'espacement avec le paragraphe */}
          <p className="text-xl md:text-2xl font-montserrat font-medium text-black mb-24">
            Une évolution constante depuis 1979
          </p>
          
          <div className="text-left w-full">
            <p className="text-base md:text-lg font-montserrat text-black leading-relaxed">
              Née d'une volonté commune d'unir les forces des futurs acteurs de la santé, l'AEMPO-Togo rassemble la nouvelle génération de médecins, pharmaciens et chirurgiens-dentistes. Notre association est un espace vivant d'entraide, de formation continue et d'innovation sociale. À travers nos projets concrets et nos actions sur le terrain, nous forgeons des professionnels conscients des enjeux sociétaux et profondément dévoués au bien-être de notre population.
            </p>
          </div>

        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto pb-10">
          
          {/* Conteneur Relatif qui englobe la ligne et les éléments */}
          <div className="relative flex flex-col gap-12 md:gap-16">
            
            {/* Ligne Centrale */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2 z-0"></div>

            {TIMELINE_DATA.map((item, index) => {
              const isRight = item.position === "right";
              const isGreen = item.theme === "green";
              const bgClass = isGreen ? "bg-primary-light" : "bg-accent";
              
              return (
                <div key={index} className={`relative flex items-center w-full ${isRight ? 'md:justify-end' : 'md:justify-start'}`}>
                  
                  {/* --- LES MASQUES --- */}
                  {index === 0 && (
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-1/2 w-4 bg-[#fbfbf9] -translate-x-1/2 z-10"></div>
                  )}
                  {index === TIMELINE_DATA.length - 1 && (
                    <div className="absolute left-6 md:left-1/2 top-1/2 bottom-0 w-4 bg-[#fbfbf9] -translate-x-1/2 z-10"></div>
                  )}

                  {/* --- LE POINT --- */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-primary border-[3px] border-[#fbfbf9] box-content -translate-x-1/2 z-20 shrink-0"></div>
                  
                  {/* Conteneur de la carte */}
                  <div className={`w-full pl-16 md:pl-0 md:w-[45%]`}>
                    
                    <div className={`
                      ${bgClass} p-7 md:p-8 flex flex-col justify-center min-h-40
                      ${!isRight ? 'md:items-end md:text-right text-left items-start' : 'items-start text-left'}
                    `}>
                      <h3 className="text-xl md:text-2xl font-onest font-medium text-primary mb-3">
                        {item.year} &mdash; {item.title}
                      </h3>
                      <p className="text-[15px] md:text-base font-montserrat font-medium text-primary leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}