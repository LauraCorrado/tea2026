import type { ImgHTMLAttributes } from "react";

export type LogoBrand = "tea" | "aives" | "ammira" | "rina9001";
export type LogoVariant = "default" | "negative";
export type LogoSize = "sm" | "md" | "lg" | "xl";

export interface LogoProps
    extends Omit<
        ImgHTMLAttributes<HTMLImageElement>,
        "src" | "alt"
    > {
    brand?: LogoBrand;
    variant?: LogoVariant;
    size?: LogoSize;
    alt?: string
}