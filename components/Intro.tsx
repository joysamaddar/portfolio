"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Heading from "./ui/Heading";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  } as any);
  const texts = [
    "Grew up fiddling with",
    "paintbrushes and computers,",
    "and the artistic and analytical side",
    "in me has since transitioned into",
    "developing pixel-perfect UIs",
    "and robust backends.",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-[15%] mt-[6rem] pt-[6rem] pb-[6rem] select-none flex flex-col"
    >
      <Heading>ABOUT ME</Heading>
      <div className="mt-24">
      <RevealingTextContainer scrollYProgress={scrollYProgress}>
        {texts.map((text, i) => (
          <RevealingTextItem index={i} key={i}>
            {text}
          </RevealingTextItem>
        ))}
      </RevealingTextContainer>
      </div>
    </section>
  );
}
