import { heebo } from "@/app/lib/fonts";
import Image from "next/image";

type FeaturedWorkPropsType = {
  title: string;
  imgSrc: string;
  year: string;
  type: string;
  description: string;
};

export function FeaturedWork({
  title,
  imgSrc,
  year,
  type,
  description,
}: FeaturedWorkPropsType) {
  return (
    <div
      className={` ${heebo.className} flex sm:flex-row flex-col items-center gap-4  `}
    >
      <div className="relative   w-full sm:w-[400px] aspect-[11/8] ">
        <Image
          alt="feature work image"
          fill
          src={imgSrc}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-between gap-4  sm:self-stretch ">
        <h3 className="font-bold sm:text-[30px] text-2xl">{title}</h3>
        <p className="space-x-2">
          <span className="text-white font-bold bg-[#F98585] px-2 py-[1px] rounded-xl">
            {year}
          </span>

          <span className="text-xl text-black/60 ">{type}</span>
        </p>
        <p className="text-lg font-light">{description}</p>
      </div>
    </div>
  );
}
