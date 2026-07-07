import Image from "next/image";

interface MemberCardProps {
  fonction: string;
  nom: string;
  photo?: string;
}

export default function MemberCard({ fonction, nom, photo }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="relative size-36.25 shrink-0 rounded-full bg-primary-light overflow-hidden flex items-center justify-center">
        {photo ? (
          <Image src={photo} alt={nom} fill sizes="145px" className="object-cover" />
        ) : (
          <Image
            src="/icons/aempo-logo.svg"
            alt="AEMPO-TOGO"
            width={119}
            height={53}
            className="opacity-90"
          />
        )}
      </div>

      {/* Identité */}
      <div className="flex flex-col items-center gap-2.5 text-center">
        <p className="text-xl font-montserrat font-semibold text-black">{fonction}</p>
        <p className="text-base font-montserrat text-black">{nom}</p>
      </div>
    </div>
  );
}
