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
          skewY: latestVelocity * 4,
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
