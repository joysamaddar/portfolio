"use client";

import { useRef } from "react";
import Heading from "./ui/Heading";
import { motion, useScroll } from "framer-motion";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import neo from "@/public/neo.jpg";
import mt_titlis from "@/public/mt_titlis.jpeg";
import eiffel from "@/public/eiffel.jpeg";
import nusa from "@/public/nusa.jpeg";
import waffle from "@/public/waffle.jpeg";
import sketch from "@/public/sketch.jpeg";
import painting1 from "@/public/painting1.jpeg";
import painting2 from "@/public/painting2.jpeg";
import Image from "next/image";
import { cn, useParallax } from "@/lib/utils";

const hobbiesList = [
  [
    { title: "Hugging my doggo Neo", src: neo },
    { title: "On top of Mt. Titlis", src: mt_titlis },
  ],
  [
    { title: "Chilling near a beach", src: nusa },
    { title: "Admiring the Eiffel Tower at night", src: eiffel },
  ],
  [
    { title: "Munching on some waffles", src: waffle },
    { title: "Another one of my paintings", src: painting2 },
  ],
  [
    { title: "A night sky painting", src: painting1 },
    { title: "One of my many sketches", src: sketch },
  ],
];

const hobbiesListMobile = [
  [
    { title: "Hugging my doggo Neo", src: neo },
    { title: "One of my many sketches", src: sketch },
  ],
  [
    { title: "On top of Mt. Titlis", src: mt_titlis },
    { title: "Another one of my paintings", src: painting2 },
  ],
];

export default function Hobbies() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressRevealingText } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  } as any);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRefMobile = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressImageContainer } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  } as any);
  const { scrollYProgress: scrollYProgressImageContainerMobile } = useScroll({
    target: imageContainerRefMobile,
    offset: ["start end", "end start"],
  } as any);
  const yReverse = useParallax(scrollYProgressImageContainer, -150);
  const yForward = useParallax(scrollYProgressImageContainer, 300);
  const yReverseMobile = useParallax(scrollYProgressImageContainerMobile, -150);
  const yForwardMobile = useParallax(scrollYProgressImageContainerMobile, 300);

  const hideAndShowVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const hideAndShowAndScaleVariant = {
    hide: {
      opacity: 0,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hobbies"
      className="relative select-none mx-[15%] min-h-max mt-[12rem] pt-[6rem] pb-[6rem]"
    >
      <Heading>HOBBIES</Heading>
      <div className="my-36 text-graytransparent">
        <motion.div
          variants={hideAndShowVariant}
          initial="hide"
          whileInView="show"
          className="w-max flex items-center justify-center flex-col m-auto text-center"
          ref={targetRef}
          viewport={{ once: true }}
        >
          <RevealingTextContainer
            scrollYProgress={scrollYProgressRevealingText}
          >
            {["All work and no play", "makes Joy a dull boy"].map((text, i) => (
              <RevealingTextItem index={i} key={i}>
                {text}
              </RevealingTextItem>
            ))}
          </RevealingTextContainer>
          <p className="w-full text-center my-6 text-sm">
            - Probably someone, not me
          </p>
        </motion.div>
        <div
          className="hidden md:flex flex-row mt-[15rem] items-center justify-between gap-2 h-[60dvh] overflow-clip"
          ref={imageContainerRef}
        >
          {hobbiesList.map((hobbies, i) => (
            <motion.div
              key={i}
              variants={hideAndShowVariant}
              initial="hide"
              whileInView="show"
              style={{ y: i % 2 == 0 ? yForward : yReverse }}
              viewport={{ once: true }}
              className={cn("flex flex-col gap-2")}
            >
              {hobbies.map((hobbie, j) => (
                <motion.div
                  key={j}
                  variants={hideAndShowAndScaleVariant}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  className=""
                >
                  <Image
                    src={hobbie.src}
                    alt={hobbie.title}
                    className="h-[400px] w-[300px] object-cover"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
        <div
          className="flex md:hidden flex-row mt-[15rem] items-center justify-between gap-2 h-[60dvh] overflow-clip"
          ref={imageContainerRefMobile}
        >
          {hobbiesListMobile.map((hobbies, i) => (
            <motion.div
              key={i}
              variants={hideAndShowVariant}
              initial="hide"
              whileInView="show"
              style={{ y: i % 2 == 0 ? yForwardMobile : yReverseMobile }}
              viewport={{ once: true }}
              className={cn("flex flex-col gap-2")}
            >
              {hobbies.map((hobbie, j) => (
                <motion.div
                  key={j}
                  variants={hideAndShowAndScaleVariant}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  className=""
                >
                  <Image
                    src={hobbie.src}
                    alt={hobbie.title}
                    className="h-[400px] w-[300px] object-cover"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={hideAndShowVariant}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          className="flex mt-[15rem] w-full lg:w-1/2 m-auto leading-7 text-center text-xl font-medium"
        >
          <p>
            Apart from coding,
            <br />
            <br />
            You can usually find me{" "}
            <span className="text-white">petting doggos</span>,{" "}
            <span className="text-white">travelling around the world</span>,
            chilling on the <span className="text-white">beach</span>, binging
            on some <span className="text-white">netflix shows</span>, trying{" "}
            <span className="text-white">something new to eat</span>, <span className="text-white">painting</span>, or
            probably doing <span className="text-white">something stupid</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
