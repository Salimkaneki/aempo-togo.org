import Hero from "@/app/components/Hero";
import Image from "next/image";
import PillarsSection from "@/app/components/PillarsSection";
import TrajectorySection from "@/app/components/TrajectorySection";
import Committee from "@/app/components/Committee";

const COMMITTEES = [
  { name: "SCORA", logo: "/images/commitees/scora.svg" },
  { name: "SCORP", logo: "/images/commitees/scorp.svg" },
  { name: "SCOPH", logo: "/images/commitees/scoph.svg" },
  { name: "SCOPE", logo: "/images/commitees/scope.svg" },
  { name: "SCORE", logo: "/images/commitees/score.svg" },
  { name: "SCOME", logo: "/images/commitees/scome.svg" },
];

export default function About() {
  return (
    <>
      <Hero
        imageSrc="/images/hero-about.png"
        subtitleText="À PROPOS"
        titleText="UNE COMMUNAUTÉ HISTORIQUE ENGAGÉE POUR LA SANTÉ DE DEMAIN."
        variant="page"
        showBanner={false}
        imagePosition="object-top"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start max-w-2xl">
            <h2 className="text-3xl md:text-4xl leading-[1.1] font-onest font-extrabold text-[#0e3b23] mb-6 uppercase">
              L'AEMPO-C’EST QUOI ?
            </h2>
            <div className="flex flex-col gap-4 text-base font-montserrat text-black leading-relaxed">
              <p>
                L’AEMPO-TOGO est l'organisation de référence qui rassemble les étudiants en Médecine,
                 Pharmacie et Odonto-Stomatologie. Notre vocation ? 
                 Transformer les étudiants d'aujourd'hui en professionnels de santé d'excellence,
                  capables de répondre aux grands défis de demain.
              </p>
              <p>
                À travers un engagement continu dans des projets éducatifs, sociaux et scientifiques, 
                nous cultivons le leadership, renforçons les capacités de nos membres et faisons rayonner
                le dynamisme de la jeunesse médicale togolaise.
              </p>
            </div>
          </div>


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


        </div>
      </section>

      {/* Section : Les Piliers */}
      <PillarsSection />
      
      {/* Section : Notre Trajectoire (Importée proprement) */}
      <TrajectorySection />

      <section className="w-full bg-[#eef6f0] py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-20 justify-center items-center flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl leading-[1.1] font-onest font-extrabold text-[#0e3b23] mb-6 uppercase">
            LES COMITÉS PERMANENTS
          </h2>

          <div className="w-170 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

            {COMMITTEES.map((item) => (
              <Committee
                key={item.name}
                name={item.name}
                logo={item.logo}
              />
            ))}
            
          </div>

        </div>
      </section>

      <section className="w-full  py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-14 justify-center items-center flex flex-col gap-12">
          <p className="font-sans text-3xl w-302.5 ">
            Ces comités ne sont pas de simples groupes de travail : ils sont le cœur battant de l'AEMPO-TOGO.
            C’est à travers eux que nos étudiants sortent des amphithéâtres pour aller au contact direct de la population, mener des campagnes de prévention vitales et défendre farouchement l'accès aux soins pour tous.
          </p>

          <h1 className="font-onest text-[180px] font-extrabold text-[#E8F5E9] uppercase ">
            AEMPO-TOGO
          </h1>
        </div>        
      </section>
    </>
  );
}