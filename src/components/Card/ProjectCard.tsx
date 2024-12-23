import { ProjectFace } from "@/ts/interfaces";
import Image from "next/image";
import Link from "next/link";

interface cardFace {
  data: ProjectFace;
  className?: string;
}

function ProjectCard({ data, className }: cardFace) {
  const { _id, title, previewImages, desc, date, address, status } = data;
  const setDate = new Date(date);
  return (
    <Link href={`/projects/${_id}`} className={`relative overflow-hidden ${className}`}>
      <Image
        src={`data:image/jpeg;base64,${previewImages[0]}`}
        alt={title}
        width={500}
        height={500}
        quality={100}
        blurDataURL="data:..."
        placeholder="blur"
        className="w-full h-full object-cover aspect-square clip-path-penta-tl-sm md:clip-path-penta-tl-md"
      />
      <span className="w-full h-full absolute top-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
      <div className="h-16"></div>
      <div className="absolute top-2 right-2 p-2 py-1 bg-navy-900/20 flex justify-center items-center gap-2 text-xs rounded-full text-white">
        <div className="size-2 bg-accent-500 rounded-full animate-pulse" />
        <p>{status}</p>
      </div>
      <div className="w-full absolute bottom-0 p-6 text-white">
        <h2 className="text-2xl uppercase font-[500]">{title}</h2>
        <div className="flex justify-between text-md font-[200] text-xs">
          <span>{address}</span>
          <span className="opacity-75">Year {setDate.getFullYear()}</span>
        </div>
        <p className="pt-2">{desc}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
