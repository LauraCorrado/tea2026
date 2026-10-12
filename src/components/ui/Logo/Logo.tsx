import teaLogo from "@/assets/images/logos/teaLogo.png";
import teaLogoNegative from "@/assets/images/logos/teaNegLogo.png";
import aivesLogo from "@/assets/images/logos/aivesLogo.png";
import aivesLogoNegative from "@/assets/images/logos/aivesWhiteLogo.png";
import ammiraLogo from "@/assets/images/logos/ammiraBaseLogo.png";
import ammiraLogoNegative from "@/assets/images/logos/ammiraNegBaseLogo.png";
import rinaISO9001Logo from "@/assets/images/logos/rinaISO9001Logo.png"

import { useAccessibility } from "@/hooks/useAccessibility";

import type {
  LogoBrand,
  LogoProps,
  LogoSize,
} from "./Logo.types";

const logoSources: Record<
  LogoBrand,
  {
    default: string;
    negative?: string;
    alt: string;
  }
> = {
  tea: {
    default: teaLogo,
    negative: teaLogoNegative,
    alt: "Logo TEA - Storie da Scoprire",
  },

  aives: {
    default: aivesLogo,
    negative: aivesLogoNegative,
    alt: "Logo AIVES",
  },

  ammira: {
    default: ammiraLogo,
    negative: ammiraLogoNegative,
    alt: "Logo @MMIRA",
  },
  rina9001: {
    default: rinaISO9001Logo,
    alt: "Logo Rina Certificazione ISO 9001:2015"
  }
};


const sizeClasses: Record<LogoSize, string> = {
  sm: "max-h-12 max-w-32",
  md: "max-h-16 max-w-44",
  lg: "max-h-20 max-w-56",
  xl: "max-h-28 max-w-72",
};

export function Logo({
  brand = "tea",
  variant = "default",
  size = "md",
  alt,
  className = "",
  ...props
}: LogoProps) {
  const { settings } = useAccessibility();

  const logo = logoSources[brand];

  const wantsNegative =
    variant === "negative" ||
    (variant === "default" && settings.darkMode);

  const hasNegative = Boolean(logo.negative);

  const useNegative = wantsNegative && hasNegative;

  const needsWhiteBackground =
    settings.darkMode &&
    wantsNegative &&
    !hasNegative;

  const src = useNegative
    ? logo.negative!
    : logo.default;

  return (
    <img
      src={src}
      alt={alt ?? logo.alt}
      className={`
        h-auto
        w-auto
        object-contain

        ${sizeClasses[size]}

        ${
          needsWhiteBackground
            ? "rounded-lg bg-white p-3"
            : ""
        }

        ${className}
      `}
      {...props}
    />
  );
}