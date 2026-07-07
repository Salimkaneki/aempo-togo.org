import Image from "next/image";
import Hero from "@/app/components/sections/Hero";
import JournalSection from "@/app/components/sections/JournalSection";
import ActionSection from "@/app/components/sections/ActionSection";
import { allArticles, getShortReadTime } from "@/app/lib/data/articles";
import { ROUTES } from "@/app/lib/routes";
import { CONTAINER } from "@/app/components/layout/Container";
import SectionTitle from "@/app/components/ui/SectionTitle";

const JOURNAL_DATA = allArticles.slice(0, 3).map((a) => ({
  image: a.image,
  date: a.date,
  readTime: getShortReadTime(a.readTime),
  title: a.title,
  excerpt: a.excerpt,
}));

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
        bannerCtaHref={ROUTES.join}
      />

      <section className="w-full bg-primary-light py-20">
        <div className={`${CONTAINER} flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}>
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
            <SectionTitle className="leading-[1.1] text-primary mb-6 uppercase">
              L'AEMPO-TOGO EN QUELQUES MOTS.
            </SectionTitle>
            <div className="flex flex-col gap-4 text-base font-montserrat text-primary leading-relaxed">
              <p>
                L’Association des Étudiants en Médecine, Pharmacie et Odonto-Stomatologie du Togo (AEMPO-TOGO) est l’organisation phare qui fédère et représente les futurs acteurs de la santé formés à la Faculté des Sciences de la Santé (FSS).
              </p>
              <p>
                Reconnue pour son dynamisme, elle constitue une véritable plateforme d'échange et d'entraide, œuvrant au quotidien pour l'épanouissement académique, social et professionnel de ses membres.
              </p>
              <p>
                À travers ses nombreux comités thématiques, l’AEMPO-TOGO s’engage à promouvoir l’excellence des soins, à stimuler l’innovation interdisciplinaire et à forger des leaders intègres, capables de relever avec détermination les grands défis sanitaires nationaux et internationaux de demain.
              </p>
            </div>
            <button className="mt-8 bg-primary-mid hover:bg-primary transition-colors text-white font-montserrat font-medium px-8 py-3">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <ActionSection />

      <JournalSection items={JOURNAL_DATA} />

      <section className="w-full bg-[#fbfbf9] py-24">
        <div className={`${CONTAINER} flex flex-col items-center`}>
          <SectionTitle className="text-primary uppercase mb-4 text-center">
            NOS PARTENAIRES & SOUTIENS
          </SectionTitle>
          <p className="text-xl font-sans text-black mb-14 text-center max-w-lg">
            Ils nous font confiance et nous accompagnent dans notre mission
          </p>

          <div className="w-full max-w-full overflow-x-auto scrollbar-none pb-2">
            <div className="flex w-max min-w-full flex-nowrap justify-start gap-4 sm:gap-6 lg:gap-8 px-1 sm:px-0">
              {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <div key={idx} className="bg-white w-64 sm:w-72 lg:w-80 h-44 sm:h-52 lg:h-56 shrink-0 flex items-center justify-center p-4 sm:p-6">
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
        </div>
      </section>
    </>
  );
}
