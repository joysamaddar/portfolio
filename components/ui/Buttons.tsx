import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: JSX.Element | string;
  type?: "primary" | "white";
  className?: string;
}

export function Button({ children, type = "primary", className }: ButtonProps) {
  const typeClasses = {
    white: "border border-white text-white btn_shadow_white",
    primary: "border border-primary text-primary btn_shadow_primary",
  };
  return (
    <button className={cn("p-2 min-w-[100px]", typeClasses[type], className)}>
      {children}
    </button>
  );
}

interface ButtonWithIconProps {
  children: JSX.Element | string;
  icon: LucideIcon;
  className?: string;
}

export function ButtonWithIcon({
  children,
  icon: Icon,
  className,
}: ButtonWithIconProps) {
  return (
    <button className={cn("flex flex-row items-center icon_btn_shadow_primary w-full", className)}>
      <p className="p-3.5 sm:p-4 bg-white text-black border border-white">
        <Icon className="w-5 sm:w-6"/>
      </p>
      <p className="p-4 border border-white flex-grow text-center">
        {children}
      </p>
    </button>
  );
}
