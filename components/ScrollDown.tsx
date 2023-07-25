"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

export default function ScrollDown() {
  return (
    <div className="fixed bottom-0 right-0 m-8 md:m-12 select-none flex items-center justify-center">
      <motion.svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="w-16 md:w-20 h-auto fill-white absolute"
        initial={{ rotate: 0, opacity: 0, scale: 0 }}
        animate={{
          rotate: 360,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          rotate: {
            duration: 4,
            ease: "circInOut",
            repeat: Infinity,
          },
          opacity: {
            duration: 0.4,
            ease: "easeIn",
          },
          scale: {
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <defs>
          <path
            id="circle"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text font-size="18">
          <textPath href="#circle">scroll down • scroll down •</textPath>
        </text>
      </motion.svg>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeIn",
        }}
      >
        <Mouse className="w-5 md:w-8"/>
      </motion.div>
    </div>
  );
}
