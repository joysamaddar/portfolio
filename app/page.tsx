import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MakeAndBreak from "@/components/MakeAndBreak";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="max-w-screen overflow-clip">
      <Hero />
      <MakeAndBreak />
      <Intro />
      <Experience />
      <Skills />
      <Works />
    </main>
  );
}
