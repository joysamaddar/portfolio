"use client";

import { useRef } from "react";
import Heading from "./ui/Heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import Image from "next/image";
import { cn, useParallax } from "@/lib/utils";
import { hobbiesList, hobbiesListMobile } from "@/constants/hobbies";

export default function Hobbies() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressRevealingText } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  } as any);
  const sectionRef = useRef(null);
  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  } as any);
  const sectionOpacity = useTransform(opacityScroller, [0.4, 0.8], [1, 0]);
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
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      id="hobbies"
      className="relative select-none mx-[10%] sm:mx-[15%] min-h-max my-[3rem] py-[6rem]"
    >
      <Heading>HOBBIES</Heading>
      <div className="mt-24 text-graytransparent">
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
          <p className="w-full text-center mt-6 text-xs sm:text-sm">
            - Probably someone, not me
          </p>
        </motion.div>
        <div
          className="hidden md:flex flex-row my-[15rem] items-center justify-between gap-2 h-[60dvh] overflow-clip"
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
          className="flex md:hidden flex-row my-[6rem] items-center justify-between gap-2 h-[60dvh] overflow-clip"
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
          className="flex mb-24 w-full lg:w-1/2 m-auto leading-7 text-center text-base sm:text-xl font-medium"
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
            <span className="text-white">something new to eat</span>,{" "}
            <span className="text-white">painting</span>, or probably doing{" "}
            <span className="text-white">something stupid</span>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
