import { Lightbulb, Target, Handshake } from "@phosphor-icons/react/dist/ssr";
import { CONTAINER } from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";

const PILLARS_DATA = [
  {
    title: "Notre Vision",
    icon: Lightbulb,
    description: "“Être le pilier central de l'excellence académique et le principal moteur d'innovation sanitaire au sein de la jeunesse togolaise.”",
  },
  {
    title: "Notre Mission",
    icon: Target,
    description: "“Fédérer, former et accompagner les étudiants de la FSS pour bâtir une communauté apte à relever les défis sanitaires togolais.”",
  },
  {
    title: "Nos Valeurs",
    icon: Handshake,
    description: "“Promouvoir l'excellence, l'humanisme et la solidarité étudiante à travers un leadership inclusif et un engagement fort pour la santé publique.”",
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-primary-light py-20">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-260 mx-auto">
          
          {/* Title Area (Top Left) */}
          <div className="flex items-center">
            <SectionTitle className="lg:text-[40px] leading-[1.2] text-primary uppercase w-full">
              LES PILIERS DE NOTRE ENGAGEMENT.
            </SectionTitle>
          </div>

          {/* Cards */}
          {PILLARS_DATA.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-white p-7 md:p-8 flex flex-col justify-center w-full min-h-55">
                <div className="flex items-center justify-between mb-4 text-muted">
                  <h3 className="text-[36px] md:text-[40px] font-onest font-medium">
                    {pillar.title}
                  </h3>
                  {/* Correction de la taille de l'icône (50 au lieu de 4) */}
                  <Icon size={50} weight="regular" />
                </div>
                
                {/* Correction de la taille et de la graisse du texte */}
                <p className="text-base md:text-lg w-full font-montserrat font-medium text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
