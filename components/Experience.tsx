"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Heading from "./ui/Heading";
import { ExperienceType } from "@/@types/experience.type";
import { experiences } from "@/constants/experiences";
import LogoCarousel from "./ui/LogoCarousel";

interface ExperienceItemProps {
  experience: ExperienceType;
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const animCount = useRef<number>(1);
  const pTagVariants = {
    hidden: {
      opacity: 0,
      y: "1rem",
    },
    show: (i: number) => ({
      opacity: 1,
      y: "0rem",
      transition: {
        duration: 0.4,
        delay: 0.4 * i,
      },
    }),
  };

  return (
    <motion.div
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
      viewport={{ once: true, amount: 0.8 }}
      className="relative flex flex-col sm:flex-row items-center justify-between w-full py-12 min-h-[180px] sm:min-h-[250px] gap-10"
    >
      <motion.div
        variants={{
          collapse: {
            width: "0%",
          },
          expand: {
            width: "100%",
            transition: {
              duration: 0.6,
              delay: 0.4,
            },
          },
        }}
        initial={"collapse"}
        whileInView={"expand"}
        viewport={{ once: true, amount: 0.8, margin: "0px 0px -150px 0px" }}
        className="h-[1px] absolute top-0 left-0 linegradient"
      ></motion.div>
      <motion.h2
        custom={1}
        variants={pTagVariants}
        className="text-lg md:text-xl text-white leading-7 tracking-wider font-medium flex flex-row"
      >
        {experience.company}
      </motion.h2>
      <div className="text-center sm:text-right relative">
        <div className="flex flex-col gap-6">
          {experience.roles.map((role, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col gap-0.5 text-graytransparent"
              >
                <motion.p custom={animCount.current++} variants={pTagVariants}>
                  {role.role}
                </motion.p>
                {role.from?.month && (
                  <motion.p
                    custom={animCount.current++}
                    variants={pTagVariants}
                    className="text-xs font-light"
                  >
                    {`${role.from?.month} ${role.from?.year} - ${
                      role.to?.month
                    } ${role.to?.year ? role.to.year : ""}`}
                  </motion.p>
                )}
                <motion.p
                  custom={animCount.current++}
                  variants={pTagVariants}
                  className="text-xs font-light"
                >
                  {role.type}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  } as any);
  const sectionOpacity = useTransform(opacityScroller, [0.4, 0.8], [1, 0]);

  return (
    <motion.section
      style={{ opacity: sectionOpacity }}
      ref={sectionRef}
      id="experience"
      className="select-none sm:mx-[15%] my-[3rem] py-[6rem]"
    >
      <Heading className="mx-[10%] sm:mx-[0%]">EXPERIENCE</Heading>
      <div className="flex flex-col mt-24 items-start justify-center">
        <motion.div
          variants={{
            collapse: {
              width: "0%",
            },
            expand: {
              width: "100%",
              transition: {
                duration: 0.6,
                delay: 0.4,
              },
            },
          }}
          initial={"collapse"}
          whileInView={"expand"}
          viewport={{ once: true, amount: 0.8, margin: "0px 0px -10% 0px" }}
          className="h-[1px] linegradient"
        ></motion.div>
        <LogoCarousel />
        {experiences.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
        <motion.div
          variants={{
            collapse: {
              width: "0%",
            },
            expand: {
              width: "100%",
              transition: {
                duration: 0.6,
                delay: 0.4,
              },
            },
          }}
          initial={"collapse"}
          whileInView={"expand"}
          viewport={{ once: true, amount: 0.8, margin: "0px 0px -10% 0px" }}
          className="h-[1px] linegradient"
        ></motion.div>
      </div>
    </motion.section>
  );
}
