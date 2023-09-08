"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MakeAndBreak() {
  const targetElem = useRef(null);
  return (
    <section ref={targetElem} className="h-[240px] select-none mx-[8%]">
      <motion.div
        initial={{ width: 0, height: 0 }}
        whileInView={{
          width: ["0%", "100%", "100%"],
          height: ["3px", "3px", "240px"],
          transition: { duration: 2, ease: "easeInOut", times: [0, 0.15, 0.9] },
        }}
        viewport={{ once: true, amount: 1, margin: "0px 0px -200px 0px" }}
        className="relative bg-gradient-to-r from-blue-400 to-blue-500 h-[15rem] mb-24 flex items-center justify-center mx-auto overflow-hidden z-[998]"
      >
        {[...Array(3)].map((_num, i: number) => {
          const dist = 300*(i+1);
          return (
            <motion.div
              key={i}
              initial={{ width: "0px", height: "0px" }}
              whileInView={{
                width: dist+"px",
                height: dist+"px",
                transition: { type: "spring", bounce: 0.3, delay: 1 },
              }}
              viewport={{
                once: true,
                amount: 1,
                margin: "-25%",
                root: targetElem,
              }}
              className="bg-[#00000005] absolute rounded-full"
            />
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: "1.5rem" }}
          whileInView={{
            opacity: 1,
            y: "0",
            transition: { duration: 0.5, delay: 1 },
          }}
          viewport={{ once: true, amount: 1, margin: "-25%", root: targetElem }}
          className="italic font-semibold text-4xl text-graytransparent cursor-default"
        >
          I{" "}
          <motion.div className="relative inline-block group">
            <motion.p className="absolute opacity-0 group-hover:opacity-100 text-blue-600 transition duration-250 ease-in-out">
              break
            </motion.p>
            <motion.p className="absolute brokenclip1 group-hover:translate-y-[-2rem] transition duration-250 ease-in-out">
              make
            </motion.p>
            <motion.p className="brokenclip2 group-hover:translate-y-[2rem] transition duration-250 ease-in-out">
              make
            </motion.p>
          </motion.div>{" "}
          stuff on the internet
        </motion.div>
      </motion.div>
    </section>
  );
}
