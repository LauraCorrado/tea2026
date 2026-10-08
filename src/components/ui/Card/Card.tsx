import type { CardPadding, CardProps, CardVariant } from "./Card.types";

const baseClasses = "overflow-hidden rounded-xl bg-site-surface text-site-text";

const variantClasses: Record<CardVariant, string> = {
  default: "",
  outlined: "border border-site-border",
  elevated: "shadow-md",
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  badges,
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
      {badges && badges.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">{badges}</div>
      )}

      {children}
    </div>
  );
}
