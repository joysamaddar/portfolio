"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Heading from "./ui/Heading";
import { SlidingText } from "./ui/SlidingText";
import { skills } from "@/constants/skills";

export default function Skills() {
  const targetElem = useRef<HTMLElement>(null);

  return (
    <section
      id="skills"
      ref={targetElem}
      className="relative select-none sm:mx-[15%] min-h-max pt-[6rem] mb-[6rem]"
    >
      <Heading className="mx-[15%] sm:mx-[0%]">SKILLS</Heading>
      <div className="flex flex-col items-center justify-center mt-24">
        {Object.keys(skills).map((skillName, i) => (
          <motion.div
            whileHover="show"
            className="relative w-full flex flex-col sm:flex-row gap-10 items-center justify-between text-gray py-12 px-12 group hover:text-graytransparent transition-all ease-in-out duration-500 min-h-[180px] overflow-hidden"
            key={i}
          >
            <motion.div
              initial={{ width: 0, height: 0 }}
              variants={{
                show: {
                  width: ["0%", "100%", "100%"],
                  height: ["0.5%", "0.5%", "100%"],
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.9],
                  },
                },
              }}
              className="absolute top-0 sm:top-auto left-1/2 translate-x-[-50%] bg-gradient-to-r from-primary-light to-primary z-0 pointer-events-none origin-center"
            />
            <div className="absolute z-0 pointer-events-none flex items-center justify-center w-full translate-x-[-4%]">
              {[...Array(3)].map((_num, i: number) => {
                const dist = 300 * (i + 1);
                return (
                  <motion.div
                    key={i}
                    initial={{ width: "0px", height: "0px" }}
                    variants={{
                      show: {
                        width: dist + "px",
                        height: dist + "px",
                        transition: {
                          type: "spring",
                          bounce: 0.3,
                          repeat: 0,
                          delay: 0.4,
                        },
                      },
                    }}
                    className="bg-[#0000000a] rounded-full absolute"
                  />
                );
              })}
            </div>
            <motion.div
              variants={{
                collapse: {
                  width: "0%",
                },
                expand: {
                  width: "100%",
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              initial={"collapse"}
              whileInView={"expand"}
              viewport={{
                once: true,
              }}
              className="h-[1px] absolute top-0 left-0 linegradient"
            ></motion.div>
            <SlidingText
              className="text-[1rem] uppercase gap-[0.1rem] font-semibold text-white"
              doNotRepeat={true}
              margin={"0px"}
              amount={"all"}
            >
              {skillName}
            </SlidingText>
            <motion.div
              variants={{
                hide: {
                  opacity: "0%",
                },
                show: {
                  opacity: "100%",
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              initial={"hide"}
              whileInView={"show"}
              viewport={{
                once: true,
              }}
              className="w-full sm:w-1/2 flex flex-row gap-2 flex-wrap text-sm font-light font-mono text-center sm:text-justify z-[1]"
            >
              <p className="w-full">{skills[skillName].join(", ")}</p>
            </motion.div>
            {Object.keys(skills).length == i + 1 && (
              <motion.div
                variants={{
                  collapse: {
                    width: "0%",
                  },
                  expand: {
                    width: "100%",
                    transition: {
                      duration: 0.6,
                    },
                  },
                }}
                initial={"collapse"}
                whileInView={"expand"}
                viewport={{
                  once: true,
                }}
                className="h-[1px] absolute bottom-0 left-0 linegradient"
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
