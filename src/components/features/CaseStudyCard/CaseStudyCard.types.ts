import type { HTMLAttributes, ReactNode } from "react";

export interface CaseStudyCardImage {
    src: string;
    alt: string;
}

export type CaseStudyImagePosition = "left" | "right";

export interface CaseStudyCardProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    image: CaseStudyCardImage;
    title: ReactNode;
    description?: ReactNode;
    badges?: ReactNode[];
    action?: ReactNode;
    imagePosition?: CaseStudyImagePosition;
}