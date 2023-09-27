"use client";

import { motion } from "framer-motion";

interface TextCarouselProps {
  greetings: string[];
}

export default function TextCarousel({ greetings }: TextCarouselProps) {
  return (
    <>
      {greetings.map((greeting, i) => (
        <motion.h1
          key={i}
          initial={true}
          animate={{
            scale: [0.6, 1, 1, 0.6],
            opacity: [0, 1, 1, 0],
            filter: [
              "blur(0.4rem)",
              "blur(0rem)",
              "blur(0rem)",
              "blur(0.4rem)",
            ],
            y: ["70%", "0%", "0%", "-70%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 1.8,
            repeatDelay: 6.2,
            times: [0, 0.2, 0.6, 0.8, 1],
          }}
          className="absolute text-[4rem] sm:text-[5rem] md:text-[7rem] text-clip whitespace-nowrap font-black select-none opacity-0 text-center z-[1] tracking-tight"
        >
          {greeting}
        </motion.h1>
      ))}
    </>
  );
}
