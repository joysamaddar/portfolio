"use client";

import { motion, useScroll } from "framer-motion";

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

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex flex-row items-start justify-between px-[8%] pt-8 md:pt-12 text-xs select-none z-[997]">
        <motion.h2
          initial={{ opacity: 0, x: "-1.5rem" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
          className="font-extrabold tracking-[0.25rem]"
        >
          joy
        </motion.h2>
        <motion.ul
          variants={ulAnim}
          initial="hidden"
          animate="show"
          className="flex flex-col items-end justify-center text-gray uppercase"
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
