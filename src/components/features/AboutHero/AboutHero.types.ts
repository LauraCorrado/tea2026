import type { HTMLAttributes } from "react";

export interface AboutHeroSlide {
    id: string;
    title: string;

    description?: string;

    image?: {
        src: string;
        alt: string;
    };
}

export interface AboutHeroProps
    extends HTMLAttributes<HTMLElement> {
    slides: readonly AboutHeroSlide[];
    descriptionMaxLength?: number;
}