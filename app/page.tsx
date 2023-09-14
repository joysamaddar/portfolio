"use client";

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MakeAndBreak from "@/components/MakeAndBreak";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useEffect } from "react";
import { useAnimate, useScroll, useVelocity } from "framer-motion";
import Socials from "@/components/ui/Socials";
import ScrollDown from "@/components/ui/ScrollDown";
import Hobbies from "@/components/Hobbies";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import GradientBlocker from "@/components/ui/GradientBlocker";
import bg from "@/public/bg.webp";

export default function Home() {
  const [mainRef, animateMain] = useAnimate();
  const [socialsRef, animateSocials] = useAnimate();
  const [scrollDownRef, animateScrollDown] = useAnimate();
  const { scrollYProgress } = useScroll();
  const xVelocity = useVelocity(scrollYProgress);

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
    });
  }, []);

  return (
    <>
      <div className="w-screen h-[100dvh] absolute top-0 bottom-0 overflow-clip pointer-events-none select-none">
        <div
          className={
            "sm:hidden h-[100dvh] absolute top-0 z-[995] w-full bg-gradient-to-r from-black to-transparent"
          }
        />
        <div
          className={
            "sm:hidden h-[30dvh] absolute top-0 z-[995] w-full bg-gradient-to-b from-black to-transparent"
          }
        />
        <Image
          src={bg}
          className="z-[990] w-full h-full object-cover object-left-top opacity-60"
          alt="Background image"
          priority
        />
        <GradientBlocker />
      </div>
      <Socials ref={socialsRef} />
      <main className="max-w-screen overflow-clip" ref={mainRef}>
        <Hero />
        <MakeAndBreak />
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Hobbies />
      </main>
      <ScrollDown ref={scrollDownRef} />
    </>
  );
}
