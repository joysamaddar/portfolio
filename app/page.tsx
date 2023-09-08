import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MakeAndBreak from "@/components/MakeAndBreak";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-screen overflow-clip">
      <Hero />
      <MakeAndBreak />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
