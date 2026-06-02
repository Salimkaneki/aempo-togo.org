import Image from "next/image";
import { Clock } from "@phosphor-icons/react/dist/ssr";

interface JournalCardProps {
  image: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export default function JournalCard({ image, date, readTime, title, excerpt }: JournalCardProps) {
  return (
    <div className="w-125 shrink-0 snap-start flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-4/3 overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="500px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between text-sm font-montserrat text-white/70 mb-2">
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock size={16} />
          {readTime}
        </span>
      </div>
      <h3 className="text-xl font-onest font-semibold text-white mb-2 leading-snug group-hover:text-green-400 transition-colors">
        {title}
      </h3>
      <p className="text-base font-montserrat text-white/60 line-clamp-2">
        {excerpt}
      </p>
    </div>
  );
}
