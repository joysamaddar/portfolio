"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Heading from "./ui/Heading";

export default function Skills() {
  const targetElem = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetElem,
    offset: ["start end", "end start"],
  } as any);
  const forwardText = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001,
    }),
    [0.15, 1],
    ["0%", "100%"]
  );
  const reverseText = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001,
    }),
    [0.15, 1],
    ["0%", "-100%"]
  );

  return (
    <section
      ref={targetElem}
      className="relative select-none mx-[8%] my-[6rem] h-[200vh]"
    >
      <div className="sticky top-[10rem]">
        <Heading>SKILLS</Heading>
        <div className="flex flex-col gap-3 mt-[2rem] justify-center font-extralight text-5xl text-white overflow-clip h-[50vh] uppercase tracking-wider">
          <motion.div
            style={{ translateX: reverseText }}
            className="flex flex-row gap-2 text-gray items-center w-max relative"
          >
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              HTML
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              CSS
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              SCSS
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              TailwindCSS
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Bootstrap
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Javascript
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              TypeScript
            </p>
            <div className="absolute right-[calc(-100%-1.5rem)] flex flex-row gap-2 items-center">
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                HTML
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                CSS
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                SCSS
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                TailwindCSS
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Bootstrap
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Javascript
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                TypeScript
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ x: forwardText }}
            className="flex flex-row gap-2 text-gray items-center w-max relative"
          >
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              React
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Redux
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Zustand
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Next.JS
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Node.js
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Express.js
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              NestJS
            </p>
            <div className="absolute left-[calc(-100%-2rem)] flex flex-row gap-2 items-center">
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                React
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Redux
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Zustand
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Next.JS
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Node.js
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Express.js
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                NestJS
              </p>
              <p className="text-lg font-extralight">•</p>
            </div>
          </motion.div>
          <motion.div
            style={{ x: reverseText }}
            className="flex flex-row gap-2 text-gray items-center w-max relative"
          >
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Clojure
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              ClojureScript
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Java
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Spring
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              SpringBoot
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              NoSQL
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              MongoDB
            </p>
            <div className="absolute right-[calc(-100%-1.5rem)] flex flex-row gap-2 items-center">
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Clojure
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                ClojureScript
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Java
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Spring
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                SpringBoot
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                NoSQL
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                MongoDB
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ x: forwardText }}
            className="flex flex-row gap-2 text-gray items-center w-max relative"
          >
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Mongoose
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              TypeORM
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              SQL
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Hibernate
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              GraphQL
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              RestAPIs
            </p>
            <p className="text-lg font-extralight">•</p>
            <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
              Git
            </p>
            <div className="absolute left-[calc(-100%-2rem)] flex flex-row gap-2 items-center">
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Mongoose
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                TypeORM
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                SQL
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Hibernate
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                GraphQL
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                RestAPIs
              </p>
              <p className="text-lg font-extralight">•</p>
              <p className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out">
                Git
              </p>
              <p className="text-lg font-extralight">•</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
