"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: "2rem" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeIn" }}
        className="h-[10vh] flex flex-row items-center justify-between px-[10%] text-sm select-none"
      >
        <h2 className="uppercase font-extrabold">
          J<span className="font-extralight">S</span>
        </h2>
        <ul className="flex flex-row gap-4">
          <li className="cursor-pointer">Experience</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </motion.nav>
    </div>
  );
}
