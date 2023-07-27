"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  } as any);
  const width1 = useTransform(scrollYProgress, [0.25, 0.4], ["100%", "0%"])
  const width2 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"])
  const width3 = useTransform(scrollYProgress, [0.25, 0.6], ["100%", "0%"])
  const width4 = useTransform(scrollYProgress, [0.25, 0.7], ["100%", "0%"])
  const width5 = useTransform(scrollYProgress, [0.25, 0.8], ["100%", "0%"])
  const width6 = useTransform(scrollYProgress, [0.25, 0.9], ["100%", "0%"])

  return (
    <section id="about" ref={sectionRef} className="relative w-screen px-[8%] pt-[12rem] pb-[6rem] select-none flex flex-col">
      <h2 className="text-xs text-gray uppercase underline underline-offset-4">ABOUT ME</h2>
      <div className="flex flex-col gap-6 mt-12 font-semibold text-6xl text-white">
        <div className="relative">
          <p>Grew up fiddling with</p>
          <motion.div style={{width: width1}} className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"></motion.div>
        </div>
        <div className="relative">
          <p>paintbrushes and computers,</p>
          <motion.div style={{width: width2}} className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"></motion.div>
        </div>
        <div className="relative">
          <p>and the artistic and analytical side</p>
          <motion.div style={{width: width3}} className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"></motion.div>
        </div>
        <div className="relative">
          <p>in me has since transitioned into</p>
          <motion.div style={{width: width4}} className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"></motion.div>
        </div>
        <div className="relative">
          <p>developing pixel-perfect UIs</p>
          <motion.div style={{width: width5}} className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"></motion.div>
        </div>
        <div className="relative">
          <p>and robust backends.</p>
          <motion.div style={{width: width6}} className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"></motion.div>
        </div>
      </div>
    </section>
  );
}
