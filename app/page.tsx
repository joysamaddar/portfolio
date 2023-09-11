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

export default function Home() {
  const [socialsRef, animateSocials] = useAnimate();
  const [scrollDownRef, animateScrollDown] = useAnimate();
  const { scrollYProgress } = useScroll();
  const xVelocity = useVelocity(scrollYProgress);

  useEffect(() => {
    return xVelocity.onChange((latestVelocity) => {
      if (latestVelocity > 0 && socialsRef.current.style.opacity != 0) {
        animateSocials(
          socialsRef.current,
          { opacity: 0 },
          { duration: 0.2, ease: "easeInOut" }
        );
        animateScrollDown(
          scrollDownRef.current,
          { opacity: 0 },
          { duration: 0.2, ease: "easeInOut" }
        );
      }
      if (latestVelocity < 0 && socialsRef.current.style.opacity != 1) {
        animateSocials(
          socialsRef.current,
          { opacity: 1 },
          { duration: 0.2, ease: "easeInOut" }
        );
        animateScrollDown(
          scrollDownRef.current,
          { opacity: 1 },
          { duration: 0.2, ease: "easeInOut" }
        );
      }
    });
  }, []);

  return (
    <>
      <Socials ref={socialsRef} />
      <main className="max-w-screen overflow-clip">
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
