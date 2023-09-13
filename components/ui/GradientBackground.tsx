export default function GradientBackground() {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen overflow-hidden">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#1f2222cc] to-transparent blur-3xl absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] animate-pulse select-none pointer-events-none"></div>
      <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#13141462] to-transparent blur-3xl absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] animate-pulse select-none pointer-events-none"></div>
      <div className="w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#1518184b] to-transparent blur-3xl absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] animate-pulse select-none pointer-events-none"></div>
    </div>
  );
}
