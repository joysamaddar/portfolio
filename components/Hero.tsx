"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import TextCarousel from "./ui/TextCarousel";
import { useRef } from "react";
import GradientBlocker from "./ui/GradientBlocker";
import GradientBackground from "./ui/GradientBackground";
import GradientGrid from "./ui/GradientGrid";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  } as any);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.section
      id="hero"
      style={{ opacity }}
      ref={sectionRef}
      className="h-screen mx-[15%] flex flex-row items-center justify-center"
    >
      <GradientBackground />
      <div className="flex items-center justify-center z-10">
        <TextCarousel />
      </div>
      <GradientBlocker />
    </motion.section>
  );
}
