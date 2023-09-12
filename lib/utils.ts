import { clsx, type ClassValue } from "clsx"
import { MotionValue, easeIn, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance / 2, -distance / 2], {
    ease: easeIn,
  });
}