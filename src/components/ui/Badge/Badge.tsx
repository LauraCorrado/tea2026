import type { BadgeColor, BadgeProps, BadgeVariant } from "./Badge.types";

const baseClasses =
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";

const filledClasses: Record<BadgeColor, string> = {
  blue: "bg-site-blue text-site-on-blue",
  green: "bg-site-green text-site-on-green",
  orange: "bg-site-orange text-site-on-orange",
  red: "bg-site-red text-site-on-red",
  black: "bg-site-neutral text-site-on-neutral",
};

const outlinedClasses: Record<BadgeColor, string> = {
  blue: "border border-site-blue text-site-blue",
  green: "border border-site-green text-site-green",
  orange: "border border-site-orange text-site-orange",
  red: "border border-site-red text-site-red",
  black: "border border-site-neutral text-site-neutral",
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