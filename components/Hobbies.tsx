"use client";

import { useRef } from "react";
import Heading from "./ui/Heading";
import {
  MotionValue,
  easeIn,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import neo from "@/public/neo.jpg";
import mt_titlis from "@/public/mt_titlis.jpeg";
import eiffel from "@/public/eiffel.jpeg";
import nusa from "@/public/nusa.jpeg";
import boba from "@/public/boba.jpg";
import sketch from "@/public/sketch.jpeg";
import painting1 from "@/public/painting1.jpeg";
import painting2 from "@/public/painting2.jpeg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const hobbiesList = [
  [
    { title: "Hugging my doggo Neo", src: neo },
    { title: "On top of Mt. Titlis", src: mt_titlis },
    { title: "Sipping on some boba", src: boba },
    { title: "Another one of my paintings", src: painting2 },
  ],
  [
    { title: "Admiring the Eiffel Tower at night", src: eiffel },
    { title: "Chilling near a beach", src: nusa },
    { title: "A night sky painting", src: painting1 },
    { title: "One of my many sketches", src: sketch },
  ],
];

function useParallax(
  value: MotionValue<number>,
  distance: number,
  direction: "reverse" | "forward"
) {
  return useTransform(
    value,
    [0, 1],
    [
      direction == "reverse" ? distance : -distance,
      direction == "reverse" ? -distance : distance,
    ],
    {
      ease: easeIn,
    }
  );
}

export default function Hobbies() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressRevealingText } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  } as any);

  const imageContainerRef = useRef(null);
  const { scrollYProgress: scrollYProgressImageContainer } = useScroll({
    target: imageContainerRef,
  });
  const yReverse = useParallax(scrollYProgressImageContainer, 200, "reverse");
  const yForward = useParallax(scrollYProgressImageContainer, 40, "forward");

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
      className="relative select-none mx-[15%] min-h-max mt-[12rem] pt-[6rem] pb-[12rem]"
    >
      <Heading>HOBBIES</Heading>
      <div className="mt-24 text-graytransparent">
        <motion.div
          variants={hideAndShowVariant}
          initial="hide"
          whileInView="show"
          className="w-max flex items-center justify-center flex-col m-auto"
          ref={targetRef}
          viewport={{ once: true }}
        >
          <RevealingTextContainer
            scrollYProgress={scrollYProgressRevealingText}
          >
            {["All work and no play", "makes joy a dull boy"].map((text, i) => (
              <RevealingTextItem index={i} key={i}>
                {text}
              </RevealingTextItem>
            ))}
          </RevealingTextContainer>
          <p className="w-full text-right mt-6">- Probably someone, not me</p>
        </motion.div>
        <motion.div
          variants={hideAndShowVariant}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          className="flex mt-36 text-left w-1/2 font-light"
        >
          <p>
            Wait, I do have a life apart from coding too.
            <br />
            <br />
            You can usually find me{" "}
            <span className="text-white">petting doggos</span>,{" "}
            <span className="text-white">travelling around the world</span>,
            chilling on the <span className="text-white">beach</span>, binging
            on some <span className="text-white">netflix shows</span>, trying{" "}
            <span className="text-white">something new to eat</span> at some
            local restro, <span className="text-white">painting</span>, or
            probably doing <span className="text-white">something stupid</span>.
          </p>
        </motion.div>
        <div
          className="flex flex-row mt-44 items-center justify-between gap-8"
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
              className={cn(
                "w-1/2 flex flex-col items-end justify-center gap-4",
                i % 2 == 0 ? "items-end" : "items-start"
              )}
            >
              {hobbies.map((hobbie, j) => (
                <motion.div
                  key={j}
                  variants={hideAndShowAndScaleVariant}
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col gap-1"
                >
                  <Image
                    src={hobbie.src}
                    alt={hobbie.title}
                    className="h-[400px] w-[300px] object-cover rounded-2xl"
                  />
                  <p className="text-xs font-extralight text-left">
                    {hobbie.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
