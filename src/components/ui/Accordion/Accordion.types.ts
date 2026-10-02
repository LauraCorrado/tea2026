import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface AccordionProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    children: ReactNode;
    defaultOpen?: boolean;
}