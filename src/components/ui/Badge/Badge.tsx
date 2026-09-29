import type { BadgeColor, BadgeProps, BadgeVariant } from "./Badge.types";

const baseClasses =
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";

const filledClasses: Record<BadgeColor, string> = {
  blue: "bg-tea-blue text-white",
  green: "bg-tea-green text-white",
  orange: "bg-tea-orange text-white",
  red: "bg-tea-red text-white",
  black: "bg-tea-black text-white",
};

const outlinedClasses: Record<BadgeColor, string> = {
  blue: "border border-tea-blue text-tea-blue",
  green: "border border-tea-green text-tea-green",
  orange: "border border-tea-orange text-tea-orange",
  red: "border border-tea-red text-tea-red",
  black: "border border-tea-black text-tea-black",
};

const variantClasses: Record<BadgeVariant, Record<BadgeColor, string>> = {
  filled: filledClasses,
  outlined: outlinedClasses,
};

export function Badge({
  children,
  color = "blue",
  variant = "filled",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`${baseClasses} ${variantClasses[variant][color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}