import React from "react";
import { motion } from "framer-motion";
interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps): JSX.Element {
  return (
    <motion.h2
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        },
      }}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.8, margin: "0px 0px -200px 0px" }}
      className="text-xs text-gray uppercase underline underline-offset-4"
    >
      {children}
    </motion.h2>
  );
}
