"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Heading from "./ui/Heading";
import AlternateSlidingTexts from "./ui/AlternateSlidingTexts";

const skillsData = [
  [
    "HTML",
    "CSS",
    "SCSS",
    "TailwindCSS",
    "Bootstrap",
    "Javascript",
    "TypeScript",
  ],
  ["React", "Redux", "Zustand", "Next.JS", "Node.js", "Express.js", "NestJS"],
  [
    "Clojure",
    "ClojureScript",
    "Java",
    "Spring",
    "SpringBoot",
    "NoSQL",
    "MongoDB",
  ],
  ["Mongoose", "TypeORM", "SQL", "Hibernate", "GraphQL", "RestAPIs", "Git"],
];

export default function Skills() {
  const targetElem = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetElem,
    offset: ["start end", "end start"],
  } as any);

  return (
    <section
      ref={targetElem}
      className="relative select-none mx-[15%] my-[6rem]"
    >
      <div className="top-[10rem]">
        <Heading>SKILLS</Heading>
        <AlternateSlidingTexts
          scrollYProgress={scrollYProgress}
          textsData={skillsData}
          className="mt-[2rem] h-[50vh]"
        />
      </div>
    </section>
  );
}
