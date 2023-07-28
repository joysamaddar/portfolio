import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Socials(){
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
    hidden: { opacity: 0, y: "-1.5rem" },
    show: { opacity: 1, y: "0", transition: { type: "spring", bounce: 0.3 } },
  };

  return(
    <motion.div
    variants={ulAnim}
    initial="hidden"
    animate="show"
    className="text-graytransparent flex flex-col gap-4 items-center justify-start transition-all fixed bottom-0 pl-[2.5%] my-8 md:my-12"
  >
    <motion.a
      variants={socialsAnim}
      href="https://www.linkedin.com/in/joy-samaddar/"
      target="_blank"
    >
      <Linkedin className="w-5 h-5 hover:text-blue-500" />
    </motion.a>
    <motion.a
      variants={socialsAnim}
      href="https://github.com/joysamaddar"
      target="_blank"
    >
      <Github className="w-5 h-5 hover:text-blue-500" />
    </motion.a>
    <motion.a
      variants={socialsAnim}
      href="https://twitter.com/0xjooy"
      target="_blank"
    >
      <Twitter className="w-5 h-5 hover:text-blue-500" />
    </motion.a>
  </motion.div>
  )
}