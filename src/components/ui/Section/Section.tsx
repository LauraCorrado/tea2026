import type { SectionProps } from "./Section.types";

const baseClasses = "w-full";

const variantClasses = {
  default: "bg-site-surface text-site-text",
  alternative: "bg-site-surface-alt text-site-text",

  blue: "bg-site-blue text-site-on-blue",
  green: "bg-site-green text-site-on-green",
  orange: "bg-site-orange text-site-on-orange",
  red: "bg-site-red text-site-on-red",
};

const spacingClasses = {
  sm: "py-8 md:py-10",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
};

export function Section({
  children,
  variant = "default",
  spacing = "md",
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${baseClasses} ${variantClasses[variant]} ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}