import { Stethoscope, SquaresFour, Pill, Scroll } from "@phosphor-icons/react/dist/ssr";
import { CONTAINER } from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";

const CARDS_DATA = [
  {
    title: "Communauté",
    icon: Stethoscope,
    theme: "dark",
    items: [
      { strong: "+ 500", normal: "Membres" },
      { strong: "3", normal: "Disciplines Unies" },
      { strong: "100%", normal: "de dévouement" }
    ]
  },
  {
    title: "Organisation",
    icon: SquaresFour,
    theme: "light",
    items: [
      { strong: "6", normal: "Comités" },
      { strong: "1", normal: "Bureau Exécutif" },
      { strong: "X", normal: "Partenaires" }
    ]
  },
  {
    title: "Impacts",
    icon: Pill,
    theme: "light",
    items: [
      { strong: "+20", normal: "Projets" },
      { strong: "+1000", normal: "Personnes Sensibilisées" }
    ]
  },
  {
    title: "L'histoire",
    icon: Scroll,
    theme: "dark",
    items: [
      { strong: "Depuis", normal: "AMJR" },
      { strong: "+X", normal: "Alumni" },
      { strong: "X", normal: "Partenaires" }
    ]
  }
];

export default function ActionSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className={`${CONTAINER} flex flex-col lg:flex-row gap-12 lg:gap-12.5 items-start`}>
        {/* Title */}
        <div className="w-full lg:w-1/3 flex items-start">
          <SectionTitle className="text-primary uppercase max-w-xl">
            L'AEMPO-TOGO EN ACTION
          </SectionTitle>
        </div>

        {/* Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {CARDS_DATA.map((card, index) => {
            const Icon = card.icon;
            const isDark = card.theme === "dark";
            const bgClass = isDark ? "bg-primary-mid" : "bg-accent";
            const textClass = isDark ? "text-white" : "text-primary";
            const dotClass = isDark ? "bg-white" : "bg-primary";

            return (
              <div key={index} className={`${bgClass} ${textClass} p-6 flex items-center gap-4 min-h-40`}>
                <Icon size={56} weight="regular" className="shrink-0 mt-1" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-onest font-medium mb-3">{card.title}</h3>
                  <ul className={`flex flex-col gap-1.5 font-montserrat font-light text-[15px] ${isDark ? '' : 'font-medium'}`}>
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 mt-0.5">
                        <span className={`w-1.5 h-1.5 ${dotClass} rounded-full shrink-0 mt-2`}></span>
                        <span>
                          <span className="font-semibold text-xl">{item.strong}</span> {item.normal}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
