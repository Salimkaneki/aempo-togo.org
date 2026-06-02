import Hero from "@/app/components/Hero";
import Image from "next/image";

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

      <section className="w-full  py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start max-w-2xl">
            <h2 className="text-3xl md:text-4xl leading-[1.1] font-onest font-extrabold text-[#0e3b23] mb-6 uppercase">
              L'AEMPO-C’EST QUOI ?
            </h2>
            <div className="flex flex-col gap-4 text-base font-montserrat text-[#1c4b31] leading-relaxed">
              <p>
                L’AEMPO-TOGO est l'organisation de référence qui rassemble les étudiants en Médecine, Pharmacie et Odonto-Stomatologie. Notre vocation ? Transformer les étudiants d'aujourd'hui en professionnels de santé d'excellence, capables de répondre aux grands défis de demain.
              </p>
              <p>
                À travers un engagement continu dans des projets éducatifs, sociaux et scientifiques, nous cultivons le leadership, renforçons les capacités de nos membres et faisons rayonner le dynamisme de la jeunesse médicale togolaise.
              </p>
            </div>
          </div>


          {/* Image */}
            <div className="relative w-full lg:w-162.5 h-100 shrink-0">
            <Image 
              src="/images/img-4.png" 
              alt="AEMPO-TOGO Team" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>


        </div>
      </section>

      <section className="w-full bg-[#eef6f0] py-20">
        
      </section>
    </>
  );
}   
