import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MakeAndBreak from "@/components/MakeAndBreak";

export default function Home() {
  return (
    <main className="max-w-screen overflow-clip">
      <Hero />
      <MakeAndBreak/>
      <Intro />
    </main>
  );
}
