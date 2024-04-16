import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  className?: string;
  image?: string;
};

const GridOption = ({ title, className, image }: Props) => {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn(
        "relative font-semibold text-xl rounded-md hover:scale-[1.02] transition-all p-5 h-full col-span-1 hover:opacity-75 border border-white hover:border-walmart",
        className
      )}
    >
      <h2>{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover opacity-20 rounded-md "
        />
      )}
    </Link>
  );
};

export default GridOption;
