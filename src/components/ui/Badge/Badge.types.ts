import type { HTMLAttributes, ReactNode } from "react";

export type BadgeColor =
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "black";

export type BadgeVariant =
    | "filled"
    | "outlined";

export interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    color?: BadgeColor;
    variant?: BadgeVariant;
}