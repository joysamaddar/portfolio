import { MotionValue, motion, useTransform } from "framer-motion";
import React from "react";

interface RevealingTextContainerProps {
  scrollYProgress: MotionValue<number>;
  widthStart?: number;
  widthEnd?: number;
  children: JSX.Element[];
}

export function RevealingTextContainer({
  scrollYProgress,
  widthStart = 0.35,
  widthEnd = 0.5,
  children,
}: RevealingTextContainerProps) {
  const widthDiff = (1 - widthEnd) / (children.length==1?1:(children.length - 1));

  return (
    <div className="flex flex-col gap-6 mt-12 font-semibold text-6xl text-white">
      {children.map((child) => {
        return React.cloneElement(child, {
          scrollYProgress,
          widthStart,
          widthEnd,
          widthDiff,
        });
      })}
    </div>
  );
}

interface RevealingTextItemProps {
  scrollYProgress?: MotionValue<number>;
  widthStart?: number;
  widthEnd?: number;
  widthDiff?: number;
  index: number;
  children: string;
}

export function RevealingTextItem({
  scrollYProgress,
  widthStart,
  widthEnd,
  widthDiff,
  index,
  children,
}: RevealingTextItemProps) {
  const width = useTransform(
    scrollYProgress!,
    [widthStart!, widthEnd! + widthDiff! * index],
    ["100%", "0%"]
  );
  return (
    <div className="relative">
      <p>{children}</p>
      <motion.div
        style={{ width }}
        className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"
      ></motion.div>
    </div>
  );
}
