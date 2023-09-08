import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface HeadingProps {
  children: string;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps): JSX.Element {
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
      viewport={{ once: false, amount: 0.8, margin: "0px 0px -200px 0px" }}
      className={cn("text-xs text-gray uppercase underline underline-offset-4", className)}
    >
      {children}
    </motion.h2>
  );
}
