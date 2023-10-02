"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./ui/Heading";
import GradientBlocker from "./ui/GradientBlocker";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { Github, MoveRight } from "lucide-react";
import AlternateSlidingTexts from "./ui/AlternateSlidingTexts";
import { projects } from "@/constants/projects";
import { Button } from "./ui/Buttons";

const textsData = [
  ["MORE", "MORE", "MORE", "MORE", "MORE", "MORE", "MORE"],
  [
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
  ],
  ["MORE", "MORE", "MORE", "MORE", "MORE", "MORE", "MORE"],
  [
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
    "PROJECTS",
  ],
  ["MORE", "MORE", "MORE", "MORE", "MORE", "MORE"],
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  } as any);
  const sectionRef = useRef(null);
  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  } as any);
  const sectionOpacity = useTransform(opacityScroller, [0.4, 0.8], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      id="projects"
      className="relative select-none mx-[10%] sm:mx-[15%] my-[3rem] py-[6rem]"
    >
      <Heading>Projects</Heading>
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 0.4,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 w-full leading-7 text-center text-base sm:text-lg md:text-xl font-medium text-graytransparent"
      >
        Check out some of my <span className="text-primary">side projects</span>{" "}
        below.
      </motion.p>
      <motion.div className="flex flex-row mt-24 items-center justify-center flex-wrap gap-14">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 0.4,
                },
              },
            }}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className={cn("flex flex-col relative w-[400px] h-[300px]")}
          >
            <div className="w-full h-full border bg-black z-20 p-12 md:p-20 gradientborder text-graytransparent">
              <div className="h-full leading-7 tracking-wider font-medium flex flex-col items-start justify-center">
                <div className="flex flex-col gap-6">
                  <p className="text-lg md:text-xl text-white">
                    {project.title}
                  </p>
                  <p className="font-light text-sm text-graytransparent">
                    {project.description}
                  </p>
                  <div className="flex flex-row gap-4">
                    {project.metadata?.map((meta, i) => (
                      <p
                        key={i}
                        className="text-xs font-mono text-darkgray uppercase"
                      >
                        {meta}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 p-4">
                  <Link href={project.url}>
                    <MoveRight className="w-5 text-gray hover:text-primary duration-300 transition-all ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-full border gradientborder bg-black absolute top-[3%] left-[-2%] z-10"></div>
          </motion.div>
        ))}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.4,
              },
            },
          }}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className={cn("flex flex-col relative w-[400px] h-[300px]")}
        >
          <div className="w-full h-full border bg-black z-20 gradientborder relative">
            <div className="absolute w-full opacity-50">
              <AlternateSlidingTexts
                scrollYProgress={scrollYProgress}
                textsData={textsData}
              />
              <GradientBlocker />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Link href={"https://github.com/joysamaddar"} target="_blank">
                <Button type="white" className="relative p-2 text-sm bg-black">
                  <p className="flex flex-row gap-2 items-center justify-center">
                    <Github className="w-4" /> Github
                  </p>
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full h-full border gradientborder bg-black absolute top-[3%] left-[-2%] z-10"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
