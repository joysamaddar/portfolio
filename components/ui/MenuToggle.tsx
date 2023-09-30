import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, useAnimate } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";

interface MenuToggleProps extends HTMLMotionProps<"div"> {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function MenuToggle({
  menuOpen,
  setMenuOpen,
  className,
  ...props
}: MenuToggleProps) {
  const [line1, animateLine1] = useAnimate();
  const [line2, animateLine2] = useAnimate();
  const [line3, animateLine3] = useAnimate();
  const [line4, animateLine4] = useAnimate();

  const lineContinerAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineAnim = {
    hidden: { opacity: 0, x: "1.5rem" },
    show: { opacity: 1, x: "0", transition: { type: "spring", bounce: 0.3 } },
  };

  useEffect(() => {
    animateLine1(
      line1.current,
      { opacity: menuOpen ? 0 : 1, y: menuOpen ? "0.5rem" : "0rem" },
      { duration: 0.3 }
    );
    animateLine2(
      line2.current,
      { rotate: menuOpen ? "45deg" : "0deg" },
      { duration: 0.3 }
    );
    animateLine3(
      line3.current,
      {
        rotate: menuOpen ? "-45deg" : "0deg",
        opacity: menuOpen ? 1 : 0,
      },
      { duration: 0.3 }
    );
    animateLine4(
      line4.current,
      { opacity: menuOpen ? 0 : 1, y: menuOpen ? "-0.5rem" : "0rem" },
      { duration: 0.3 }
    );
  }, [menuOpen]);

  return (
    <motion.div
      {...props}
      variants={lineContinerAnim}
      initial="hidden"
      animate="show"
      className={cn(
        "fixed right-[3%] top-8 md:top-12 text-xs select-none z-[1001] flex flex-col cursor-pointer h-[22px] w-[24px] scale-100",
        className
      )}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <motion.div
        variants={lineAnim}
        ref={line1}
        className="w-[24px] h-[3px] bg-graytransparent absolute right-0"
      ></motion.div>
      <motion.div
        variants={lineAnim}
        ref={line2}
        className="w-[24px] h-[3px] bg-graytransparent absolute right-0 top-[0.5rem]"
      ></motion.div>
      <motion.div
        ref={line3}
        className="w-[24px] h-[3px] bg-graytransparent absolute right-0 top-[0.5rem] opacity-0"
      ></motion.div>
      <motion.div
        variants={lineAnim}
        ref={line4}
        className="w-[24px] h-[3px] bg-graytransparent absolute right-0 top-[1rem]"
      ></motion.div>
    </motion.div>
  );
}
