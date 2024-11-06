import Image from "next/image";
import { heebo } from "../lib/fonts";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row  items-center max-w-[1030px] mx-auto md:mt-[150px] justify-between md:mb-[100px]  p-4">
      <div
        className="relative md:order-2  sm:w-[298px]
        aspect-square w-[160px] "
      >
        {/* for image background style */}
        <div className="w-full h-full bg-[#AA9F9F] bg-opacity-[31%] absolute rounded-full right-2 top-2" />

        <Image
          src={"/images/profile.png"}
          alt="image"
          width={400}
          height={400}
          className="relative z-10"
        />
      </div>
      <div
        className={`${heebo.className} flex flex-col   md:items-start items-center
            text-center
            md:text-left md:max-w-[531px] sm:gap-y-[30px] gap-y-4 pt-5 md:pt-0`}
      >
        <h1
          className={` font-black md:text-5xl sm:text-3xl text-2xl text-[#21243D] md:leading-[61px] md:tracking-[2px]`}
        >
          Hi, I am John, Creative Technologist
        </h1>
        <p className="">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className="font-medium text-lg text-white bg-[#F98585]  hover:bg-opacity-80 w-[205px] h-[50px] shadow-md   
          sm:scale-100 scale-90
          
          shadow-black/30"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}
