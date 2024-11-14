"use client";

import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Shivam",
    },
    {
      text: "Bhadani,",
    },
    {
      text: "a",
    },
    {
      text: "Software",
    },
    {
      text: "Engineer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] md:h-[26rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Transforming Ideas into Functional Software
      </p>
      <TypewriterEffectSmooth
        className="text-base sm:text-2xl md:text-3xl lg:text-5xl"
        words={words}
      />
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-4">
        <a href="mailto:shivambhadani28@gmail.com" target="_blank">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-base font-medium text-white backdrop-blur-3xl">
              Hire Me
            </span>
          </button>
        </a>
        <button
          className="px-10 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
          onClick={() => router.push("/projects")}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
