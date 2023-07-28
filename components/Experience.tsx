"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Experience() {
  const targetElem = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetElem,
    offset: ["start end", "end start"],
  } as any);
  const widthline1 = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["0%", "100%"]
  );
  const widthline2 = useTransform(scrollYProgress, [0.25, 0.4], ["0%", "100%"]);
  const widthline3 = useTransform(scrollYProgress, [0.4, 0.65], ["0%", "100%"]);

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
        delay: 0.4*i,
      },
    }),
  }
  return (
    <section ref={targetElem} className="select-none px-[8%] my-[6rem]">
      <h2 className="text-xs text-gray uppercase underline underline-offset-4">
        EXPERIENCE
      </h2>
      <div className="flex flex-col gap-20 mt-24 items-start justify-center mx-48">
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
          className="relative flex flex-row items-start justify-between w-full py-12"
        >
          <motion.div
            style={{ width: widthline1 }}
            className="h-[1px] absolute top-0 left-0 bg-gray"
          ></motion.div>
          <motion.h2
            custom={1}
            variants={pTagVariants}
            className="uppercase font-black text-4xl tracking-wide flex flex-row"
          >
            <p className="flex flex-col items-center justify-center">
              <span>JUN</span>
              <motion.span
                custom={2}
                variants={pTagVariants}
                className="font-extralight text-xs"
              >
                2023
              </motion.span>
            </p>
            -NOW
          </motion.h2>
          <div className="text-right relative">
            <motion.a
              custom={1}
              variants={pTagVariants}
              href={"https://www.linkedin.com/company/fasthrdotai/"}
              target="_blank"
            >
              <ArrowUpRight className="z-[999] text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
            </motion.a>
            <motion.p
              custom={1}
              variants={pTagVariants}
              className="text-lg mb-2"
            >
              Fasthr.AI
            </motion.p>
            <motion.p
              custom={2}
              variants={pTagVariants}
              className="text-gray"
            >
              Frontend Engineer
            </motion.p>
            <motion.p
              custom={3}
            variants={pTagVariants}
              className="text-gray text-xs font-light"
            >
              Full time
            </motion.p>
          </div>
        </motion.div>
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
          className="relative flex flex-row items-start justify-between w-full py-12"
        >
          <motion.div
            style={{ width: widthline2 }}
            className="h-[1px] w-full absolute top-0 left-0 bg-gray"
          ></motion.div>
          <motion.h2
            custom={1}
            variants={pTagVariants}
            className="uppercase font-black text-4xl tracking-wide flex flex-row"
          >
            <p className="flex flex-col items-center justify-center">
              <span>MAR</span>
              <motion.span
                custom={2}
                variants={pTagVariants}
                className="font-extralight text-xs"
              >
                2022
              </motion.span>
            </p>
            -
            <p className="flex flex-col items-center justify-center">
              <span>MAY</span>
              <motion.span
                custom={2}
                variants={pTagVariants}
                className="font-extralight text-xs"
              >
                2023
              </motion.span>
            </p>
          </motion.h2>
          <div className="text-right relative">
            <motion.a
             custom={1}
             variants={pTagVariants}
              href={"https://www.linkedin.com/company/cognizant/"}
              target="_blank"
            >
              <ArrowUpRight className="z-[999] text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
            </motion.a>
            <motion.p
              custom={1}
              variants={pTagVariants}
              className="text-lg mb-2"
            >
              Cognizant
            </motion.p>
            <div className="flex flex-col gap-4">
              <div>
                <motion.p
                 custom={2}
                 variants={pTagVariants}
                  className="text-gray"
                >
                  Programmer Analyst
                </motion.p>
                <motion.p
                  custom={3}
                  variants={pTagVariants}
                  className="text-gray text-xs font-light"
                >
                  AUG 2022-MAY 2023
                </motion.p>
                <motion.p
                  custom={4}
                  variants={pTagVariants}
                  className="text-gray text-xs font-light"
                >
                  Full time
                </motion.p>
              </div>
              <div>
                <motion.p
                  custom={5}
                  variants={pTagVariants}
                  className="text-gray"
                >
                  Intern
                </motion.p>
                <motion.p
                  custom={6}
                  variants={pTagVariants}
                  className="text-gray text-xs font-light"
                >
                  MAR 2022-AUG 2023
                </motion.p>
                <motion.p
                  custom={7}
                  variants={pTagVariants}
                  className="text-gray text-xs font-light"
                >
                  Internship
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
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
          className="relative flex flex-row items-start justify-between w-full py-12"
        >
          <motion.div
            style={{ width: widthline3 }}
            className="h-[1px] w-full absolute top-0 left-0 bg-gray"
          ></motion.div>
          <motion.h2
            custom={1}
            variants={pTagVariants}
            className="uppercase font-black text-4xl tracking-wide flex flex-row"
          >
            <p className="flex flex-col items-center justify-center">
              <span>FEB</span>
              <motion.span
                custom={2}
                variants={pTagVariants}
                className="font-extralight text-xs"
              >
                2022
              </motion.span>
            </p>
            -
            <p className="flex flex-col items-center justify-center">
              <span>MAR</span>
              <motion.span
                custom={2}
                variants={pTagVariants}
                className="font-extralight text-xs"
              >
                2022
              </motion.span>
            </p>
          </motion.h2>
          <div className="text-right relative">
            <motion.a
              custom={1}
              variants={pTagVariants}
              href={"https://www.linkedin.com/company/agoraverse/"}
              target="_blank"
            >
              <ArrowUpRight className="z-[999] text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
            </motion.a>
            <motion.p
              custom={1}
              variants={pTagVariants}
              className="text-lg mb-2"
            >
              Agoraverse
            </motion.p>
            <motion.p
              custom={2}
              variants={pTagVariants}
              className="text-gray"
            >
              Junior Full Stack Developer
            </motion.p>
            <motion.p
              custom={3}
              variants={pTagVariants}
              className="text-gray text-xs font-light"
            >
              Part time
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
