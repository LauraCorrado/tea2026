import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl";

export interface ModalImage {
    src: string;
    alt: string;
}

export type ModalVariant =
    | "default"
    | "story";

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

    variant?: ModalVariant;

    size?: ModalSize;
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    className?: string;
}