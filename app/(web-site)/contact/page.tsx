import type { Metadata } from "next";
import {
  EnvelopeSimple,
  Phone,
  Archive,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import Hero from "@/app/components/sections/Hero";
import ContactForm from "@/app/components/forms/ContactForm";
import { ROUTES } from "@/app/lib/routes";
import { SOCIALS } from "@/app/lib/socials";
import { CONTAINER } from "@/app/components/layout/Container";

export const metadata: Metadata = {
  title: "Contact",
};

const CONTACT_ROWS = [
  { Icon: EnvelopeSimple, text: "contact@aempotogo.com" },
  { Icon: Phone, text: "(+228) 22 22 56 45" },
  { Icon: Archive, text: "BP 3286 - Lomé, Togo" },
  { Icon: MapPin, text: "Ave Pompidou, Lomé" },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        showBanner={true}
        showSubtitle={true}
        subtitleText="Contactez l'AEMPO-TOGO"
        titleText="Rejoignez la relève médicale du Togo."
        bannerText="Intégrez une communauté engagée pour l'avenir de la santé au Togo. Développez vos compétences et contribuez à la relève médicale de demain."
        bannerCtaText="Nous rejoindre"
        bannerCtaHref={ROUTES.join}
        imageSrc="/images/hero-about.png"
        imagePosition="object-top"
      />

      <section className="w-full bg-surface py-16">
        <div className={`${CONTAINER} flex flex-col gap-10`}>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Adresses & Contact */}
            <div className="lg:w-85 shrink-0 flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="text-[28px] font-montserrat font-semibold text-black tracking-tight">
                  Adresses &amp; Contact
                </h2>
                <ul className="flex flex-col gap-6">
                  {CONTACT_ROWS.map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-4">
                      <Icon size={24} className="shrink-0 text-primary-mid" />
                      <span className="text-lg font-montserrat text-black leading-relaxed">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="size-11 rounded-full bg-primary-mid hover:bg-primary transition-colors flex items-center justify-center text-white"
                  >
                    <Icon size={24} weight="fill" />
                  </a>
                ))}
              </div>
            </div>

            {/* Formulaire */}
            <ContactForm />
          </div>

          {/* Carte */}
          <iframe
            title="Carte — AEMPO-TOGO, Lomé"
            src="https://www.google.com/maps?q=Universit%C3%A9%20de%20Lom%C3%A9%2C%20Togo&output=embed"
            className="w-full h-114.5 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
