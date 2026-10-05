import type { HTMLAttributes, ReactNode } from "react";

export interface AboutHeroSlide {
    id: string;
    title: ReactNode;
    description?: ReactNode;

    image?: {
        src: string;
        alt: string;
    };
}

export interface AboutHeroProps
    extends HTMLAttributes<HTMLElement> {
    slides: readonly AboutHeroSlide[];
    backgroundVariant?: "gradient" | "wave";
}