import type { CardPadding, CardProps, CardVariant } from "./Card.types";

const baseClasses = "overflow-hidden rounded-xl bg-white";

const variantClasses: Record<CardVariant, string> = {
  default: "",
  outlined: "border border-black/10",
  elevated: "shadow-md",
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}