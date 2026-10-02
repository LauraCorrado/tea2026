import type { HTMLAttributes, ReactNode } from "react";

export interface PublicationAccordionProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    title: ReactNode;
    description?: ReactNode;
    pdfUrl: string;
    defaultOpen?: boolean;
}