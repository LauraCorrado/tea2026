import type { HTMLAttributes } from "react";

export type SocialPlatform =
    | "facebook"
    | "instagram"
    | "linkedin"
    | "youtube";

export interface SocialLink {
    platform: SocialPlatform;
    href: string;
    label?: string;
}

export type SocialLinksSize = "sm" | "md" | "lg";

export interface SocialLinksProps
    extends HTMLAttributes<HTMLDivElement> {
    links: SocialLink[];
    size?: SocialLinksSize;
}