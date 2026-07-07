import type { Metadata } from "next";
import MemberCard from "@/app/components/cards/MemberCard";
import { BUREAUS, BUREAU_INTRO } from "@/app/lib/data/bureau";
import { CONTAINER } from "@/app/components/layout/Container";

export const metadata: Metadata = {
  title: "Bureau exécutif",
};

export default function OfficesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="w-full h-53.25 bg-primary-mid flex flex-col justify-end">
        <div className={`${CONTAINER} w-full pb-10`}>
          <p className="text-2xl font-onest font-semibold text-white mb-4 uppercase">
            Le bureau exécutif
          </p>
          <h1 className="text-4xl md:text-[56px] font-onest font-extrabold text-white leading-[1.1] uppercase">
            Les visages de notre engagement.
          </h1>
        </div>
      </section>

      {/* ── Contenu ───────────────────────────────────────────────────── */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-200 px-6 flex flex-col gap-16">
          <p className="text-base font-montserrat text-black text-center">
            {BUREAU_INTRO}
          </p>

          {BUREAUS.map((bureau) => (
            <div key={bureau.title} className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-[32px] font-montserrat font-semibold text-black">
                {bureau.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-15 gap-y-12 justify-items-center">
                {bureau.members.map((member, idx) => (
                  <MemberCard key={`${member.fonction}-${idx}`} {...member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
