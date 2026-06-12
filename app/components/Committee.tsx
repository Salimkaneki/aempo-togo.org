interface CommitteeProps {
  name: string;
  logo: string;
}

export default function Committee({ name, logo }: CommitteeProps) {
  return (
    <div className="bg-[rgb(14,59,35)] w-50 h-50 flex items-center justify-center select-none">
        <img 
          src={logo} 
          alt={name} 
          draggable="false" 
          className="w-25 h-25 object-contain pointer-events-none" 
        />
    </div>
  );
}