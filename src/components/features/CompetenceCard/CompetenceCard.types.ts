import type { HTMLAttributes, ReactNode } from "react";

export interface CompetenceCardImage {
    src: string;
    alt: string;
}

export type CompetenceCardColor =
    | "blue"
    | "red"
    | "green"
    | "orange";

export interface CompetenceCardProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    description: ReactNode;
    image: CompetenceCardImage;
    defaultFlipped?: boolean;
    color?: CompetenceCardColor;
}