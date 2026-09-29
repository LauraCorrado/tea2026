import teaLogo from "@/assets/images/logos/tea-logo.png";
import teaLogoNegative from "@/assets/images/logos/tea-logo-negative.png";

import type { LogoProps, LogoSize, LogoVariant } from "./Logo.types";

const logoSources: Record<LogoVariant, string> = {
  default: teaLogo,
  negative: teaLogoNegative,
};

const sizeClasses: Record<LogoSize, string> = {
  sm: "w-18",
  md: "w-26",
  lg: "w-38",
  xl: "w-48",
};

export function Logo({
  variant = "default",
  size = "md",
  alt = "TEA - Storie da Scoprire",
  className = "",
  ...props
}: LogoProps) {
  return (
    <img
      src={logoSources[variant]}
      alt={alt}
      className={`h-auto object-contain ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}