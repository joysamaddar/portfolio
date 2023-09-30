import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLMotionProps<"h2"> {
  children: string;
  className?: string;
}

export default function Heading({
  children,
  className,
  ...props
}: HeadingProps): JSX.Element {
  return (
    <motion.h2
      {...props}
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
      viewport={{ once: false }}
      className={cn(
        "text-[10px] md:text-xs text-gray uppercase underline underline-offset-4",
        className
      )}
    >
      {children}
    </motion.h2>
  );
}
