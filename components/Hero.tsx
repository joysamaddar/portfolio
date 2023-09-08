"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import TextCarousel from "./ui/TextCarousel";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"]
  } as any);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <motion.section style={{ opacity }} ref={sectionRef} className="h-screen mx-[15%] flex flex-row items-center justify-center">
      <div className="flex items-center justify-center z-10">
        <TextCarousel />
      </div>
    </motion.section>
  );
}
