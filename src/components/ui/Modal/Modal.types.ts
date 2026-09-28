import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl";

export interface ModalImage {
    src: string;
    alt: string;
}

export interface ModalProps {
    open: boolean;
    onClose: () => void;

    eyebrow?: ReactNode;
    title?: ReactNode;
    period?: ReactNode;
    description?: ReactNode;

    image?: ModalImage;
    gallery?: ModalImage[];

    actions?: ReactNode;
    children?: ReactNode;

    size?: ModalSize;
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    className?: string;
}