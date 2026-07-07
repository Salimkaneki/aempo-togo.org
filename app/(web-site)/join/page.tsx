import type { Metadata } from "next";
import Hero from "@/app/components/sections/Hero";
import JoinForm from "@/app/components/forms/JoinForm";
import { CONTAINER } from "@/app/components/layout/Container";

export const metadata: Metadata = {
  title: "Rejoindre l'AEMPO",
};

export default function JoinPage() {
  return (
    <>
      <Hero
        variant="page"
        showBanner={true}
        showSubtitle={true}
        subtitleText="Devenir membre"
        titleText="Rejoignez la relève médicale du Togo."
        bannerText="Pas besoin d'être membre pour faire la différence ! Propulsez la relève médicale togolaise grâce à votre don."
        bannerCtaText="Faire un don"
        imageSrc="/images/hero-about.png"
        imagePosition="object-top"
      />

      <section className="w-full bg-surface py-24">
        <div className={`${CONTAINER} flex flex-col items-center gap-15`}>
          {/* Intitulé */}
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-4xl font-onest font-extrabold text-black uppercase">
              Rejoindre AEMPO-TOGO
            </h1>
            <p className="max-w-167.5 text-xl font-montserrat text-black">
              Vous souhaitez rejoindre notre équipe ? Remplissez ce formulaire et
              partagez-nous votre profil.
            </p>
          </div>

          {/* Formulaire */}
          <JoinForm />
        </div>
      </section>
    </>
  );
}
