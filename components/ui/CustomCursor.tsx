"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorRef, animateCursor] = useAnimate();

  const variants = {
    load: {
      opacity: 0,
      x: -6,
      y: -6,
    },
    move: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      transition: {
        duration:
          Math.sqrt(
            mousePosition.x * mousePosition.x +
              mousePosition.y * mousePosition.y
          ) /
          (window.innerWidth * 1.7),
      },
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (
        (window.innerWidth - e.clientX <= 10 ||
          window.innerWidth - e.clientX >= window.innerWidth - 10 ||
          window.innerHeight - e.clientY <= 10 ||
          window.innerHeight - e.clientY >= window.innerHeight - 10) &&
        cursorRef.current.opacity != 0
      ) {
        animateCursor(cursorRef.current, { opacity: 0 });
      } else {
        if (cursorRef.current.opacity != 1) {
          animateCursor(cursorRef.current, { opacity: 1 });
        }
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      variants={variants}
      initial="load"
      animate="move"
      className="hidden sm:block w-3 h-3 bg-white rounded-full z-[1005] fixed pointer-events-none"
    />
  );
}
