import type { HTMLAttributes } from "react";

export interface TimelineImage {
    src: string;
    alt: string;
}

export interface TimelineItem {
    id: string;
    title: string;
    year: string | number;
    description?: string;
    client?: string;
    image?: TimelineImage;
    images?: TimelineImage[];
}

export interface TimelineProps
    extends HTMLAttributes<HTMLElement> {
    items: readonly TimelineItem[];

    autoScrollSpeed?: number;
}