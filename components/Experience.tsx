"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Experience() {
  const targetElem = useRef(null);

  return (
    <section ref={targetElem} className="select-none px-[8%] my-[6rem]">
      <h2 className="text-xs text-gray uppercase underline underline-offset-4">
        EXPERIENCE
      </h2>
      <div className="flex flex-col gap-20 mt-24 items-start justify-center mx-48">
        <div className="relative flex flex-row items-start justify-between w-full py-12">
          <div className="h-[1px] w-full absolute top-0 left-0 bg-gray"></div>
          <h2 className="uppercase font-black text-4xl tracking-wide flex flex-row">
            <p className="flex flex-col items-center justify-center">
              <span>JUN</span>
              <span className="font-extralight text-xs">2023</span>
            </p>
            -NOW
          </h2>
          <div className="text-right relative">
            <Link href={"https://www.linkedin.com/company/fasthrdotai/"}>
              <ArrowUpRight className="text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
            </Link>
            <p className="text-lg mb-2">Fasthr.AI</p>
            <p className="text-gray">Frontend Engineer</p>
            <p className="text-gray text-xs font-light">Full time</p>
          </div>
        </div>
        <div className="relative flex flex-row items-start justify-between w-full py-12">
          <div className="h-[1px] w-full absolute top-0 left-0 bg-gray"></div>
          <h2 className="uppercase font-black text-4xl tracking-wide flex flex-row">
            <p className="flex flex-col items-center justify-center">
              <span>MAR</span>
              <span className="font-extralight text-xs">2022</span>
            </p>
            -
            <p className="flex flex-col items-center justify-center">
              <span>MAY</span>
              <span className="font-extralight text-xs">2023</span>
            </p>
          </h2>
          <div className="text-right relative">
            <Link href={"https://www.linkedin.com/company/cognizant/"}>
              <ArrowUpRight className="text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
            </Link>
            <p className="text-lg mb-2">Cognizant</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray">Programmer Analyst</p>
                <p className="text-gray text-xs font-light">
                  AUG 2022-MAY 2023
                </p>
                <p className="text-gray text-xs font-light">Full time</p>
              </div>
              <div>
                <p className="text-gray">Intern</p>
                <p className="text-gray text-xs font-light">
                  MAR 2022-AUG 2023
                </p>
                <p className="text-gray text-xs font-light">Internship</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-row items-start justify-between w-full py-12">
          <div className="h-[1px] w-full absolute top-0 left-0 bg-gray"></div>
          <h2 className="uppercase font-black text-4xl tracking-wide flex flex-row">
            <p className="flex flex-col items-center justify-center">
              <span>FEB</span>
              <span className="font-extralight text-xs">2022</span>
            </p>
            -
            <p className="flex flex-col items-center justify-center">
              <span>MAR</span>
              <span className="font-extralight text-xs">2022</span>
            </p>
          </h2>
          <div className="text-right relative">
            <Link href={"https://www.linkedin.com/company/agoraverse/"}>
              <ArrowUpRight className="text-gray absolute top-0 right-[-2rem] translate-y-[5%]" />
            </Link>
            <p className="text-lg mb-2">Agoraverse</p>
            <p className="text-gray">Junior Full Stack Developer</p>
            <p className="text-gray text-xs font-light">Part time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
