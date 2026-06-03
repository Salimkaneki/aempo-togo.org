import Image from "next/image";
import Hero from "./components/Hero";
import JournalSection from "./components/JournalSection";
import ActionSection from "./components/ActionSection";

const JOURNAL_DATA = [
  {
    image: "/images/hero-image.jpeg",
    date: "1 jan 2024",
    readTime: "10 Minutes de lecture",
    title: "Lancement officiel de la plateforme de l'AEMPO",
    excerpt: "L'AEMPO-TOGO franchit une nouvelle étape avec le lancem..."
  },
  {
    image: "/images/hero-image.jpeg",
    date: "1 jan 2024",
    readTime: "10 Minutes de lecture",
    title: "Lancement officiel de la plateforme de l'AEMPO",
    excerpt: "L'AEMPO-TOGO franchit une nouvelle étape avec le lancem..."
  },
  {
    image: "/images/hero-image.jpeg",
    date: "1 jan 2024",
    readTime: "10 Minutes de lecture",
    title: "Lancement officiel de la plateforme de l'AEMPO",
    excerpt: "L'AEMPO-TOGO franchit une nouvelle étape avec le lancem..."
  }
];

const PARTNERS = [
  {
    name: "CNTS",
    logo: "/icons/partners/cnts-log.svg"
  },
  {
    name: "Université de Lomé (FSS)",
    logo: "/icons/partners/univ-lome-logo.svg"
  }
];

export default function Home() {
  return (
    <>  
      <Hero
        showBanner={true}
        showSubtitle={true}
        variant="home"
      />

      <section className="w-full bg-[#eef6f0] py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
            <div className="relative w-full lg:w-162.5 h-100 shrink-0">
            <Image 
              src="/images/hero-image.jpeg" 
              alt="AEMPO-TOGO Team" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start max-w-2xl">
            <h2 className="text-3xl md:text-4xl leading-[1.1] font-onest font-extrabold text-[#0e3b23] mb-6 uppercase">
              L'AEMPO-TOGO EN QUELQUES MOTS.
            </h2>
            <div className="flex flex-col gap-4 text-base font-montserrat text-[#1c4b31] leading-relaxed">
              <p>
                "L'Association des Étudiants en Médecine, Pharmacie et Odonto-Stomatologie du Togo (AEMPO-TOGO) est l'organisation phare qui fédère et représente les futurs acteurs de la santé formés à la Faculté des Sciences de la Santé (FSS).
              </p>
              <p>
                Reconnue pour son dynamisme, elle constitue une véritable plateforme d'échange et d'entraide, œuvrant au quotidien pour l'épanouissement académique, social et professionnel de ses membres.
              </p>
              <p>
                À travers ses nombreux comités thématiques, l'AEMPO-TOGO s'engage à promouvoir l'excellence des soins, à stimuler l'innovation interdisciplinaire et à forger des leaders intègres, capables de relever avec détermination les grands défis sanitaires nationaux et internationaux de demain."
              </p>
            </div>
            <button className="mt-8 bg-[#448b62] hover:bg-[#2c6847] transition-colors text-white font-montserrat font-medium px-8 py-3">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <ActionSection />

      <JournalSection items={JOURNAL_DATA} />

      <section className="w-full bg-[#fbfbf9] py-24">
        <div className="mx-auto max-w-360 px-6 lg:px-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-onest font-extrabold text-[#0d3a22] uppercase mb-4 text-center">
            NOS PARTENAIRES & SOUTIENS
          </h2>
          <p className="text-xl font-sans text-black mb-14 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          
          <div className="flex overflow-x-auto scrollbar-none gap-8">
            {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <div key={idx} className="bg-white w-80 h-56.25 shrink-0 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
