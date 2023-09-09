import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientGridProp {
  className?: string;
}

export default function GradientGrid({ className }: GradientGridProp) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 0.25,
          transition: {
            duration: 0.4,
          },
        },
      }}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={cn(
        "absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[2] flex items-center justify-center",
        className
      )}
    >
      <div className="absolute flex flex-col gap-8 items-center justify-center">
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "200px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "400px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "600px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "800px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "600px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "400px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              width: "0px",
            },
            show: {
              width: "200px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="h-[2px] linegradient"
        ></motion.div>
      </div>
      <div className="absolute flex flex-row gap-8 items-center justify-center">
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "200px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "300px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "400px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "500px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "400px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "300px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
        <motion.div
          variants={{
            hidden: {
              height: "0px",
            },
            show: {
              height: "200px",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="w-[2px] linegradient"
        ></motion.div>
      </div>
    </motion.div>
  );
}
