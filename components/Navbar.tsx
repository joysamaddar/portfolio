"use client";

import { motion, useScroll } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const liHoverAnim = {
    color: "#fff",
    transition: { ease: "easeIn", duration: 0.3 },
  };
  const ulAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const liAnim = {
    hidden: { opacity: 0, x: "1.5rem" },
    show: { opacity: 1, x: "0", transition: { type: "spring", bounce: 0.3 } },
  };

  const socialsAnim =  {
    hidden: { opacity: 0, y: "-1.5rem" },
    show: { opacity: 1, y: "0", transition: { type: "spring", bounce: 0.3 } },
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex flex-row items-start justify-between pl-[2.5%] pr-[2%] pt-8 md:pt-12 text-xs select-none z-[997]">
        <motion.h2
          initial={{ opacity: 0, x: "-1.5rem", rotate: "90deg"}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3}}
          className="font-light text-2xl tracking-[-0.25rem]"
        >
          (((•)))-
          {/* )•)- */}
        </motion.h2>
        <motion.div variants={ulAnim} initial="hidden" animate="show" className="text-graytransparent flex flex-row gap-4 items-center justify-start transition-all">
            <motion.a variants={socialsAnim} href="https://www.linkedin.com/in/joy-samaddar/" target="_blank"><Linkedin className="w-5 h-5 hover:text-blue-500" /></motion.a>
            <motion.a variants={socialsAnim} href="https://github.com/joysamaddar" target="_blank"><Github className="w-5 h-5 hover:text-blue-500" /></motion.a>
            <motion.a variants={socialsAnim} href="https://twitter.com/0xjooy" target="_blank"><Twitter className="w-5 h-5 hover:text-blue-500" /></motion.a>
          </motion.div>
        <motion.ul
          variants={ulAnim}
          initial="hidden"
          animate="show"
          className="flex flex-col items-end justify-center text-graytransparent uppercase"
        >
          <motion.li
            variants={liAnim}
            className="pb-1"
            whileHover={liHoverAnim}
          >
            ABOUT
          </motion.li>
          <motion.li
            variants={liAnim}
            className="py-1"
            whileHover={liHoverAnim}
          >
            Experience
          </motion.li>
          <motion.li
            variants={liAnim}
            className="py-1"
            whileHover={liHoverAnim}
          >
            Work
          </motion.li>
          <motion.li
            variants={liAnim}
            className="pt-1"
            whileHover={liHoverAnim}
          >
            Contact
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  );
}
