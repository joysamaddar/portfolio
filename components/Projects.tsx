"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import dooit from "@/public/dooit.png";
import joey_jumps from "@/public/joey_jumps.png";
import xatty from "@/public/xatty.png";
import Heading from "./ui/Heading";
import { SlidingText } from "./ui/SlidingText";
import GradientBlocker from "./ui/GradientBlocker";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import { useRef } from "react";
import { Github } from "lucide-react";
import GradientGrid from "./ui/GradientGrid";
import AlternateSlidingTexts from "./ui/AlternateSlidingTexts";

const projects = [
  {
    title: "DOOIT",
    imageSrc: dooit,
    imagePosition: "top",
    description: "A kanban board with a sleek design and intuitive UX.",
    primaryColorText: "kanban board",
    features: [
      "Create and manage multiple projects",
      "Add/Remove users from projects on the fly",
      "Get tasks progress and other statistics",
    ],
    skills: [
      "TypeScript",
      "NestJS",
      "GraphQL",
      "MongoDB",
      "TypeORM",
      "NextJS",
      "Tailwind CSS",
      "SCSS",
      "Daisy UI",
    ],
    liveLink: "https://dooit.vercel.app/",
    codeLink: "https://github.com/joysamaddar/dooit",
    align: "left",
  },
  {
    title: "JOEY JUMPS",
    imageSrc: joey_jumps,
    imageBorder: "white",
    description: "A platformer game for fun and lols.",
    primaryColorText: "platformer game",
    features: [
      "No libraries used. No gimmicks. Just plain old HTML and JS.",
      "Amazing sprite animations.",
    ],
    skills: ["HTML", "Vanilla Javascript"],
    liveLink: "https://joysamaddar.github.io/Joey-Jumps/",
    codeLink: "https://github.com/joysamaddar/Joey-Jumps",
    align: "left",
  },
  {
    title: "XATTY",
    imageSrc: xatty,
    description: "A chat app that allows realtime chat between users.",
    primaryColorText: "chat app",
    features: [
      "Allows multiple users per room",
      "No useless signup or login needed. Share room link & chat!",
    ],
    skills: ["Node.js", "Express.js", "Socket.IO", "React", "SCSS"],
    liveLink: "https://xatty.netlify.app/",
    codeLink: "https://github.com/joysamaddar/Xatty",
    align: "right",
  },
];

const textsData = [
  [
    "HTML",
    "CSS",
    "SCSS",
    "TailwindCSS",
    "Bootstrap",
    "Javascript",
    "TypeScript",
  ],
  ["React", "Next.js", "Framer Motion", "GSAP", "Git", "Zustand", "Redux"],
  ["Node.js", "Express.js", "NestJS", "NoSQL", "SQL", "Mongoose", "TypeORM"],
  [
    "GraphQL",
    "RestAPIs",
    "Clojure",
    "ClojureScript",
    "Python",
    "Java",
    "Spring",
  ],
  [
    "SpringBoot",
    "RadixUI",
    "Daisy UI",
    "Tanstack Table",
    "Hibernate",
    "Socket.IO",
  ],
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  } as any);

  const textsVariant = {
    hidden: {
      opacity: 0,
      y: "1rem",
    },
    show: (i: number) => ({
      opacity: 1,
      y: "0rem",
      transition: {
        duration: 0.4,
        delay: 0.35 * i,
      },
    }),
  };

  const skillsVariant = {
    hidden: {
      opacity: 0,
      scale: "140%",
    },
    show: (i: number) => ({
      opacity: 1,
      scale: "100%",
      transition: {
        duration: 0.4,
        delay: 0.35 * i,
      },
    }),
  };

  return (
    <section className="relative select-none mx-[15%] mt-[6rem]">
      <Heading className="sticky h-16 md:h-24 top-0 flex items-end bg-black z-[995] pb-[1.25rem] w-[120%]">
        Projects
      </Heading>
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
              },
            },
          }}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, margin: "0px 0px -200px 0px" }}
          className={cn(
            "flex items-center justify-between gap-12 text-white h-[100vh] relative overflow-y-clip overflow-x-visible scrollsnapping",
            project.align == "left" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <GradientGrid
            className="z-[0] left-2/3 !opacity-10"
            doNotRepeat={false}
          />
          <div className="flex flex-col w-1/2">
            <SlidingText
              className={
                project.title.split("").length < 7 ? "text-[6vw]" : "text-[5vw]"
              }
              doNotRepeat={false}
            >
              {project.title}
            </SlidingText>
            <div className="flex flex-col gap-8">
              <motion.p
                custom={1.5}
                variants={textsVariant}
                className="text-[1.5vw]"
              >
                {project.description.split(project.primaryColorText)[0]}
                <span className="text-primary">{project.primaryColorText}</span>
                {project.description.split(project.primaryColorText)[1]}
              </motion.p>
              {project.features && (
                <div className="flex flex-col gap-1 font-thin">
                  <motion.p
                    custom={2}
                    variants={textsVariant}
                    className="font-normal"
                  >
                    FEATURES
                  </motion.p>
                  {project.features.map((feature, i) => (
                    <motion.p custom={3 + i} variants={textsVariant} key={i}>
                      ◼ {feature}
                    </motion.p>
                  ))}
                </div>
              )}
              <div className="flex flex-row gap-2 flex-wrap font-thin w-[75%] text-[11px]">
                {project.skills.map((skill, i) => (
                  <motion.p
                    custom={project.features ? project.features.length + 3 : 2}
                    variants={skillsVariant}
                    className="p-1 gradientborder shadow-2xl"
                    key={i}
                  >
                    {skill}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            variants={{
              hidden: {
                y: 100,
              },
              show: {
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeInOut",
                },
              },
            }}
            className="w-1/2 relative h-[100vh]"
          >
            {project.imagePosition == "top" && <GradientBlocker />}
            <Image
              src={project.imageSrc}
              alt={`${project.title} product image`}
              className={cn(
                "mt-48 absolute border-primary rounded-2xl border-[2px]",
                project.imagePosition == "top"
                  ? "top-0"
                  : "top-[55%] translate-y-[-50%] -mt-12",
                project.imageBorder == "white" && "border-white"
              )}
              priority
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
                x: -118,
              },
              show: {
                opacity: 1,
                y: 0,
                x: -118,
                transition: {
                  duration: 0.8,
                  delay: 0.4,
                  ease: "easeInOut",
                },
              },
            }}
            className={cn(
              "absolute bottom-12 left-[50.75%] z-[999] flex flex-row gap-2 flex-wrap bg-black drop-shadow-2xl p-3 gradientborder"
            )}
          >
            <Link href={project.codeLink} target="_blank">
              <Button type="white">View Code</Button>
            </Link>
            <Link href={project.liveLink} target="_blank">
              <Button>View Live</Button>
            </Link>
          </motion.div>
        </motion.div>
      ))}
      <div
        ref={targetRef}
        className="h-[100vh] flex flex-col gap-16 items-center justify-center scrollsnapping text-center relative"
      >
        <div className="absolute blur-[7px] w-full">
          <AlternateSlidingTexts
            scrollYProgress={scrollYProgress}
            textsData={textsData}
          />
          <GradientBlocker />
        </div>
        <RevealingTextContainer scrollYProgress={scrollYProgress}>
          {["Check out more", "of my projects on"].map((text, i) => (
            <RevealingTextItem index={i} key={i}>
              {text}
            </RevealingTextItem>
          ))}
        </RevealingTextContainer>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            },
          }}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, margin: "0px 0px 0px 0px" }}
        >
          <Button type="white" className="relative p-3">
            <p className="flex flex-row gap-2">
              <Github /> Github
            </p>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
