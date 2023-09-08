import { cn } from "@/lib/utils";

interface ButtonProps {
  children: string;
  type?: "primary" | "white";
  className?: string;
}

export default function Button({
  children,
  type = "primary",
  className,
}: ButtonProps) {
  const typeClasses = {
    white: "border border-white text-white btn_shadow_white",
    primary: "border border-primary text-primary btn_shadow_primary",
  };
  return (
    <button className={cn("p-2 w-[100px]", typeClasses[type], className)}>
      {children}
    </button>
  );
}
