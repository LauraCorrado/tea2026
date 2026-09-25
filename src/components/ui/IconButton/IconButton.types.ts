import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonAnimation =
    | "glow"
    | "rotate"
    | "none"
    | "draw"

export interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    label: string;
    size?: IconButtonSize;
    animation?: IconButtonAnimation;
}