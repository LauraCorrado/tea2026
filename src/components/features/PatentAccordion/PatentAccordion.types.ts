import type { HTMLAttributes, ReactNode } from "react";

export type PatentAccordionType =
    | "international-patent"
    | "national-patent"
    | "community-trademark"
    | "design";

export interface PatentAccordionProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    type: PatentAccordionType;
    name: ReactNode;
    number: string;
    year: string | number;
    description?: ReactNode;
    documentationUrl?: string;
    pdfUrl?: string;
    defaultOpen?: boolean;
}