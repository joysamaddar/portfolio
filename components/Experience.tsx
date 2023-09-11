"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Heading from "./ui/Heading";
import { ExperienceType } from "@/@types/experience.type";

const experiences: ExperienceType[] = [
  {
    from: {
      month: "JUN",
      year: 2023,
    },
    to: {
      month: "NOW",
    },
    company: "Fasthr.AI",
    companyLink: "https://www.linkedin.com/company/fasthrdotai/",
    roles: [{ role: "Frontend Engineer", type: "Full time" }],
  },
  {
    from: {
      month: "MAR",
      year: 2022,
    },
    to: {
      month: "MAY",
      year: 2023,
    },
    company: "Cognizant",
    companyLink: "https://www.linkedin.com/company/cognizant/",
    roles: [
      {
        role: "Programmer Analyst",
        from: {
          month: "AUG",
          year: 2022,
        },
        to: {
          month: "MAY",
          year: 2023,
        },
        type: "Full time",
      },
      {
        role: "Intern",
        from: {
          month: "MAR",
          year: 2022,
        },
        to: {
          month: "AUG",
          year: 2022,
        },
        type: "Internship",
      },
    ],
  },
  {
    from: {
      month: "FEB",
      year: 2022,
    },
    to: {
      month: "MAR",
      year: 2022,
    },
    company: "Agoraverse",
    companyLink: "https://www.linkedin.com/company/agoraverse/",
    roles: [{ role: "Junior Full Stack Developer", type: "Part time" }],
  },
];

interface ExperienceItemProps {
  experience: ExperienceType;
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const animCount = useRef<number>(2);
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
      className="relative flex flex-row items-start justify-between w-full py-12"
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
        className="uppercase font-black text-4xl tracking-wide flex flex-row"
      >
        <p className="flex flex-col items-center">
          <span>{experience.from.month}</span>
          <motion.span
            custom={2}
            variants={pTagVariants}
            className="font-extralight text-xs"
          >
            {experience.from.year}
          </motion.span>
        </p>
        -
        <p className="flex flex-col items-center">
          <span>{experience.to.month}</span>
          {experience.to.year && (
            <motion.span
              custom={2}
              variants={pTagVariants}
              className="font-extralight text-xs"
            >
              {experience.to.year}
            </motion.span>
          )}
        </p>
      </motion.h2>
      <div className="text-right relative">
        <motion.a
          custom={1}
          variants={pTagVariants}
          href={experience.companyLink}
          target="_blank"
        >
          <ArrowUpRight className="z-[999] text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
        </motion.a>
        <motion.p custom={1} variants={pTagVariants} className="text-lg mb-2">
          {experience.company}
        </motion.p>
        <div className="flex flex-col gap-4">
          {experience.roles.map((role, index) => {
            return (
              <div key={index}>
                <motion.p
                  custom={animCount.current++}
                  variants={pTagVariants}
                  className="text-gray"
                >
                  {role.role}
                </motion.p>
                {role.from?.month && (
                  <motion.p
                    custom={animCount.current++}
                    variants={pTagVariants}
                    className="text-gray text-xs font-light"
                  >
                    {`${role.from?.month} ${role.from?.year}-${role.to?.month} ${role.to?.year}`}
                  </motion.p>
                )}
                <motion.p
                  custom={animCount.current++}
                  variants={pTagVariants}
                  className="text-gray text-xs font-light"
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
  return (
    <section id="experience" className="select-none mx-[15%] py-[6rem]">
      <Heading>EXPERIENCE</Heading>
      <div className="flex flex-col gap-20 mt-24 items-start justify-center">
        {experiences.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
      </div>
    </section>
  );
}
