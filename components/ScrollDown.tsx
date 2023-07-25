"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

export default function ScrollDown() {
  return (
    <div className="fixed bottom-0 right-0 m-4 bg-black rounded-full p-2">
      <motion.svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="w-20 h-auto fill-white"
        initial={true}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          ease: "circInOut",
          repeat: Infinity,
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
      <Mouse className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" />
    </div>
  );
}
