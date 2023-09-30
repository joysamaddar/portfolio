import { cn } from "@/lib/utils";

export default function GradientBlocker({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-[60dvh] absolute left-0 bottom-0 z-[995] w-full gradientblockergradient pointer-events-none",
        className
      )}
    />
  );
}
