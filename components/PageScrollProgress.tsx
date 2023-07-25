"use client"

import { motion, useScroll, useSpring } from "framer-motion";

export default function PageScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: useSpring(scrollYProgress, {
          stiffness: 100,
          damping: 25,
          restDelta: 0.001,
        }),
      }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 origin-[0%] z-[998]"
    ></motion.div>
  );
}
