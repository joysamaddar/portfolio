import { MotionValue, motion, useTransform } from "framer-motion";
import React from "react";

interface RevealingTextContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
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
  ...props
}: RevealingTextContainerProps) {
  const widthDiff =
    (1 - widthEnd) / (children.length == 1 ? 1 : children.length - 1);

  return (
    <div
      {...props}
      className="flex flex-col font-semibold text-white responsive_text_xl"
    >
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

interface RevealingTextItemProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollYProgress?: MotionValue<number>;
  widthStart?: number;
  widthEnd?: number;
  widthDiff?: number;
  index: number;
}

export function RevealingTextItem({
  scrollYProgress,
  widthStart,
  widthEnd,
  widthDiff,
  index,
  children,
  ...props
}: RevealingTextItemProps) {
  const width = useTransform(
    scrollYProgress!,
    [widthStart!, widthEnd! + widthDiff! * index],
    ["100%", "0%"]
  );
  return (
    <div {...props} className="relative">
      <p>{children}</p>
      <motion.div
        style={{ width }}
        className="mask absolute top-0 right-0 bg-black opacity-60 h-[calc(100%+1rem)] w-full"
      ></motion.div>
    </div>
  );
}
