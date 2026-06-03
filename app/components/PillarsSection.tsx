import { Lightbulb, Target, Handshake } from "@phosphor-icons/react/dist/ssr";

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
    <section className="w-full bg-[#eef6f0] py-20">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-fit mx-auto">
          
          {/* Title Area (Top Left) */}
          <div className="flex items-center w-full md:w-125">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[1.2] font-onest font-extrabold text-[#2a6645] uppercase w-full">
              LES PILIERS DE NOTRE ENGAGEMENT.
            </h2>
          </div>

          {/* Cards */}
          {PILLARS_DATA.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-white p-7 md:p-8 flex flex-col justify-center w-full md:w-125 min-h-55">
                <div className="flex items-center justify-between mb-4 text-[#9ca3af]">
                  <h3 className="text-[36px] md:text-[40px] font-onest font-medium">
                    {pillar.title}
                  </h3>
                  {/* Correction de la taille de l'icône (50 au lieu de 4) */}
                  <Icon size={50} weight="regular" />
                </div>
                
                {/* Correction de la taille et de la graisse du texte */}
                <p className="text-base md:text-lg w-full font-montserrat font-medium text-[#9ca3af] leading-relaxed">
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
