import TextCarousel from "@/components/TextCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="hero h-[90vh] w-full flex flex-row items-center justify-center px-[10%] gap-24">
        <div className="relative flex items-center justify-center">
          <TextCarousel />
        </div>
      </div>
    </main>
  );
}