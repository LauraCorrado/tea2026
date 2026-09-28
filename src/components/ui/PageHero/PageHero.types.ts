import type { HTMLAttributes, ReactNode } from "react";

export type PageHeroOverlay =
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "dark";

export interface PageHeroProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    title: ReactNode;
    subtitle?: ReactNode;
    backgroundImage: string;
    overlay?: PageHeroOverlay;
    action?: ReactNode;
}