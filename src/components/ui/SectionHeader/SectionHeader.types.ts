import type { HTMLAttributes, ReactNode } from "react";

export type SectionHeaderAlign = "left" | "center" | "right";

export interface SectionHeaderProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode; // per custom element
    eyebrow?: ReactNode;
    description?: ReactNode;
    align?: SectionHeaderAlign;
}