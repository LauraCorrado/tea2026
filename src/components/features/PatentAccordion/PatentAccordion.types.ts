import type { HTMLAttributes, ReactNode } from "react";

export type PatentAccordionType =
    | "international-patent"
    | "national-patent"
    | "community-trademark"
    | "design";

export interface PatentNationalization {
    country: string;
    number: string;
    year?: string | number;
}

export interface PatentAccordionProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    type: PatentAccordionType;

    typeLabel?: string;

    name: ReactNode;
    number: string;
    year: string | number;

    description?: ReactNode;

    nationalizations?: PatentNationalization[];

    documentationUrl?: string;
    pdfUrl?: string;

    defaultOpen?: boolean;
}