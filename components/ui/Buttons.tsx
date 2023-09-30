import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "white";
}

export function Button({
  children,
  type = "primary",
  className,
  ...props
}: ButtonProps) {
  const typeClasses = {
    white: "border border-white text-white btn_shadow_white",
    primary: "border border-primary text-primary btn_shadow_primary",
  };
  return (
    <button
      {...props}
      className={cn("p-2 min-w-[100px]", typeClasses[type], className)}
    >
      {children}
    </button>
  );
}

interface ButtonWithIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
}

export function ButtonWithIcon({
  children,
  icon: Icon,
  className,
  ...props
}: ButtonWithIconProps) {
  return (
    <button
      {...props}
      className={cn(
        "flex flex-row items-center icon_btn_shadow_primary w-full",
        className
      )}
    >
      <p className="p-3.5 sm:p-4 bg-white text-black border border-white">
        <Icon className="w-5 sm:w-6" />
      </p>
      <p className="p-4 border border-white flex-grow text-center">
        {children}
      </p>
    </button>
  );
}
