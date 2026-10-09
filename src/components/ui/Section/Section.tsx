import type { SectionProps } from "./Section.types";
import { useSectionReveal } from "@/hooks/useSectionReveal";

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

const revealClasses =
  "transition-[opacity,translate] duration-[600ms] ease-out";

const hiddenRevealClasses = {
  up: "translate-y-6 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
};

export function Section({
  children,
  variant = "default",
  spacing = "md",
  animate = true,
  reveal = "up",
  className = "",
  ...props
}: SectionProps) {
  const { sectionRef, isVisible } = useSectionReveal({
    enabled: animate,
  });

  const animationClasses = animate
    ? `${revealClasses} ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : hiddenRevealClasses[reveal]
      }`
    : "";

  return (
    <section
      ref={sectionRef}
      className={`${baseClasses} ${variantClasses[variant]} ${spacingClasses[spacing]} ${animationClasses} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}