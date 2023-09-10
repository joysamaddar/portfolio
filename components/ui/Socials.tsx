"use client";

import { AnimationScope, motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import React, { Ref } from "react";

const Socials = React.forwardRef((_props, ref) => {
  const ulAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const socialsAnim = {
    hidden: { opacity: 0, x: "-1.5rem" },
    show: { opacity: 1, x: "0", transition: { type: "spring", bounce: 0.3 } },
  };

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement> | undefined}
      variants={ulAnim}
      initial="hidden"
      animate="show"
      className="text-graytransparent flex flex-col items-center justify-start transition-all fixed bottom-0 ml-[2.5%] my-8 md:my-12 z-[997]"
    >
      <motion.a
        variants={socialsAnim}
        href="https://www.linkedin.com/in/joy-samaddar/"
        target="_blank"
        className="p-2"
      >
        <Linkedin className="w-5 h-5 hover:text-primary" />
      </motion.a>
      <motion.a
        variants={socialsAnim}
        href="https://github.com/joysamaddar"
        target="_blank"
        className="p-2"
      >
        <Github className="w-5 h-5 hover:text-primary" />
      </motion.a>
      <motion.a
        variants={socialsAnim}
        href="https://twitter.com/0xjooy"
        target="_blank"
        className="p-2"
      >
        <Twitter className="w-5 h-5 hover:text-primary" />
      </motion.a>
    </motion.div>
  );
});

Socials.displayName = Socials.displayName;
export default Socials;
