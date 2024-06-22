"use client";

import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface IProjectCard {
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
  githubLink: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  githubLink,
  demoLink,
}: IProjectCard) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-dark-color-2 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-[30rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={thumbnail}
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href="#"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => {
              window.open(githubLink);
            }}
            className="px-4 py-2 rounded-xl bg-dark-color-2 dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
