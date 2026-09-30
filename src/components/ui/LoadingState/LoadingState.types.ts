import type { HTMLAttributes, ReactNode } from "react";

export type LoadingStateSize = "sm" | "md" | "lg";

export interface LoadingStateProps
    extends HTMLAttributes<HTMLDivElement> {
    label?: ReactNode;
    size?: LoadingStateSize;
}