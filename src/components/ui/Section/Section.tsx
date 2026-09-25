// appunti:sfondo colore e padding verticale
import type { SectionProps } from "./Section.types";

const baseClasses = "w-full";

const variantClasses = {
  default: "bg-white text-tea-black",
  alternative: "bg-gray-100 text-tea-black",
  blue: "bg-tea-blue text-white",
  green: "bg-tea-green text-white",
  orange: "bg-tea-orange text-white",
  red: "bg-tea-red text-white",
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