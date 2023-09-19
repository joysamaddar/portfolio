"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MenuToggle from "./ui/MenuToggle";
import Socials from "./ui/Socials";

const navSections = ["About", "Experience", "Projects", "Skills", "Hobbies"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <div className="fixed left-[3%] top-8 md:top-12 text-xs select-none z-[1001]">
        <Link
          href={"/#hero"}
          className="group"
          onClick={() => setMenuOpen(false)}
        >
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
      </div>
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menuOverlay"
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: "0%",
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="w-screen h-screen bg-black fixed top-0 left-0 z-[1000] px-[15%]"
          >
            <div
              id="nav-container"
              className="flex items-center justify-center h-screen"
            >
              <motion.ul
                variants={ulAnim}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center justify-center text-graytransparent uppercase gap-6 text-2xl font-medium tracking-widest"
              >
                {navSections.map((navSection, i) => (
                  <motion.li
                    key={i}
                    variants={liAnim}
                    className="cursor-pointer"
                    whileHover={liHoverAnim}
                  >
                    <Link
                      href={`#${navSection.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {navSection}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <Socials direction="horizontal" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
