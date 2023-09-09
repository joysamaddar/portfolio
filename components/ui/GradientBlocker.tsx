import { cn } from "@/lib/utils";

interface GradientBlockerProps {
  className?: string;
}

export default function GradientBlocker({ className }: GradientBlockerProps) {
  return (
    <div
      className={cn(
        "h-[45dvh] absolute bottom-0 z-[995] w-full bg-gradient-to-t from-black to-transparent",
        className
      )}
    />
  );
}
