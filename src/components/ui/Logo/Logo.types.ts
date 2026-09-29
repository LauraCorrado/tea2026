import type { ImgHTMLAttributes } from "react";

export type LogoVariant = "default" | "negative";
export type LogoSize = "sm" | "md" | "lg" | "xl";

export interface LogoProps
    extends Omit<
        ImgHTMLAttributes<HTMLImageElement>,
        "src" | "alt"
    > {
    variant?: LogoVariant;
    size?: LogoSize;
    alt?: string;
}