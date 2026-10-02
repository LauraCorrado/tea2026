import type { HTMLAttributes } from "react";

export type InteractiveHeroColor =
    | "blue"
    | "green"
    | "orange"
    | "red";

export interface InteractiveHeroArea {
    id: string;
    title: string;
    description: string;
    href: string;
    color: InteractiveHeroColor;
}

export interface InteractiveHeroProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    videoSrc: string;
    videoPoster?: string;

    eyebrow?: string;
    title: string;
    description?: string;

    areas: readonly InteractiveHeroArea[];
}