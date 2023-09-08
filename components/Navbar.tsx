"use client";

import { motion } from "framer-motion";
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

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex flex-row items-start justify-between pl-[3%] pr-[2%] pt-8 md:pt-12 text-xs select-none z-[997]">
        <Link href={"./"} className="group">
        <motion.svg
          initial={{ opacity: 0, x: "-1.5rem" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
          width="28"
          height="28"
          viewBox="0 0 137 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M137 0H0V82.5H41.3223L61.6612 62.1612L79.3388 79.8388L51.6777 107.5H0V137H137V0Z"
            fill="var(--white)"
            className="group-hover:fill-primary transition-all duration-500"
          />
        </motion.svg>
        </Link>
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
            Skills
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
