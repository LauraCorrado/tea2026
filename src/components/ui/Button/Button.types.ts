import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonColor =
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "black"
    | "white";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
}