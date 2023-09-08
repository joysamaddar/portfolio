import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SlidingTextProps {
  children: string;
  className?: string;
  doNotRepeat?: boolean;
}

export function SlidingText({ children, className, doNotRepeat=true }: SlidingTextProps) {
  const letters = children.split("");

  return (
    <motion.div
      className={cn("text-6xl font-black flex relative overflow-hidden", className)}
      variants={{
        down: {
          opacity: "0%",
        },
        up: {
          opacity: "100%",
          transition: {
            duration: 0.25,
          },
        },
      }}
      initial={"down"}
      whileInView={"up"}
      viewport={{ once: doNotRepeat, amount: 0.8, margin: "0px 0px -200px 0px" }}
    >
      {letters.map((letter, i) => (
        <motion.p
          key={i}
          custom={i}
          variants={{
            down: {
              y: "100%",
            },
            up: (i: number) => ({
              y: "0%",
              transition: {
                duration: 0.38,
                delay: 0.18 * i,
                ease: "easeOut"
              },
            }),
          }}
          className="m-[-0.025em] min-w-[1.5rem]"
        >
          {letter}
        </motion.p>
      ))}
    </motion.div>
  );
}
