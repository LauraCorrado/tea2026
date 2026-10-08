import type { IconType } from "react-icons";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe
} from "react-icons/fa6";

import type {
  SocialLinksProps,
  SocialLinksSize,
  SocialPlatform,
} from "./SocialLinks.types";

const platformIcons: Record<SocialPlatform, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  website: FaGlobe
};

const platformLabels: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  website: "Sito web"
};

const sizeClasses: Record<SocialLinksSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizes: Record<SocialLinksSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

export function SocialLinks({
  links,
  size = "md",
  className = "",
  ...props
}: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      {...props}
    >
      {links.map(({ platform, href, label }) => {
        const Icon = platformIcons[platform];

        return (
          <a
            key={`${platform}-${href}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label ?? `Visita ${platformLabels[platform]}`}
            className={`
              inline-flex
              items-center
              justify-center

              rounded-full
              border
              border-current
              text-site-text

              transition-all
              duration-200

              hover:bg-site-orange-strong
              hover:text-site-on-orange-strong

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-site-orange
              focus-visible:ring-offset-2
              focus-visible:ring-offset-site-surface

              ${sizeClasses[size]}
            `}
          >
            <Icon size={iconSizes[size]} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}