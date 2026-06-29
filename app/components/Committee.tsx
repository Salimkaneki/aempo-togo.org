import Image from "next/image";

interface CommitteeProps {
  name: string;
  logo: string;
}

export default function Committee({ name, logo }: CommitteeProps) {
  return (
    <div className="bg-primary w-50 h-50 flex items-center justify-center select-none">
        <Image 
          src={logo} 
          alt={name}
          width={100}
          height={100}
          draggable={false}
          className="w-25 h-25 object-contain pointer-events-none" 
        />
    </div>
  );
}