"use client";

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MakeAndBreak from "@/components/MakeAndBreak";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useEffect } from "react";
import {
  motion,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import Socials from "@/components/ui/Socials";
import ScrollDown from "@/components/ui/ScrollDown";
import Hobbies from "@/components/Hobbies";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Image from "next/image";
import slanting_lines from "@/public/slanting_lines.svg";
import Footer from "@/components/Footer";

export default function Home() {
  const [mainRef, animateMain] = useAnimate();
  const [socialsRef, animateSocials] = useAnimate();
  const [scrollDownRef, animateScrollDown] = useAnimate();
  const { scrollYProgress } = useScroll();
  const xVelocity = useVelocity(scrollYProgress);
  const xTransform = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001,
    }),
    [0, 1],
    ["50%", "-50%"]
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    return xVelocity.onChange((latestVelocity) => {
      if (window.getComputedStyle(socialsRef.current).display != "none") {
        animateMain(
          mainRef.current,
          {
            skewY: latestVelocity * 2.5,
          },
          { duration: 0.04, ease: "easeIn" }
        );

        if (latestVelocity > 0 && socialsRef.current.style.opacity != 0) {
          animateSocials(
            socialsRef.current,
            { opacity: 0 },
            { duration: 0.1, ease: "easeInOut" }
          );
          animateScrollDown(
            scrollDownRef.current,
            { opacity: 0 },
            { duration: 0.1, ease: "easeInOut" }
          );
        }

        if (latestVelocity < 0 && socialsRef.current.style.opacity != 1) {
          animateSocials(
            socialsRef.current,
            { opacity: 1 },
            { duration: 0.1, ease: "easeInOut" }
          );
          animateScrollDown(
            scrollDownRef.current,
            { opacity: 1 },
            { duration: 0.1, ease: "easeInOut" }
          );
        }
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Socials ref={socialsRef} />
      <main className="overflow-clip" ref={mainRef}>
        <div className="container">
          <Hero />
          <MakeAndBreak />
          <Intro />
          <Experience />
          <Projects />
          <Skills />
          <Hobbies />
        </div>
        <motion.div
          style={{ x: xTransform }}
          className="w-[200%] mt-12 select-none"
        >
          <Image
            src={slanting_lines}
            alt="Slanting lines"
            className="w-full h-[170px] object-cover -rotate-6"
          />
        </motion.div>
        <div className="container">
          <Contact />
          <Footer />
        </div>
      </main>
      <ScrollDown ref={scrollDownRef} />
    </>
  );
}
