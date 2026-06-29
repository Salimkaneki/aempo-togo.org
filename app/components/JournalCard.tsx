import Image from "next/image";
import Link from "next/link";
import { Clock } from "@phosphor-icons/react/dist/ssr";

interface JournalCardProps {
  image: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  slug?: string;
  layout?: "carousel" | "grid";
  theme?: "light" | "dark";
}

export default function JournalCard({ 
  image, 
  date, 
  readTime, 
  title, 
  excerpt, 
  slug,
  layout = "carousel",
  theme = "dark"
}: JournalCardProps) {
  const isGrid = layout === "grid";
  const isLight = theme === "light";

  const className = `${isGrid ? "w-full" : "w-[85vw] sm:w-120 lg:w-150 shrink-0 snap-start"} flex flex-col group cursor-pointer`;

  const content = (
    <>
      <div className="relative w-full aspect-video overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes={isGrid ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "500px"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`flex items-center justify-between text-sm font-montserrat ${isLight ? "text-gray-700" : "text-white/70"} mb-2`}>
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock size={16} />
          {readTime}
        </span>
      </div>
      <h3 className={`text-xl font-onest font-semibold ${isLight ? "text-black group-hover:text-primary" : "text-white group-hover:text-green-400 transition-colors"} mb-2 leading-snug`}>
        {title}
      </h3>
      <p className={`text-base font-montserrat ${isLight ? "text-gray-600" : "text-white/60"} line-clamp-2`}>
        {excerpt}
      </p>
    </>
  );

  if (slug) {
    return (
      <Link href={`/news/${slug}`} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}
