import type { HTMLAttributes } from "react";

export interface LanguageOption {
    code: string;
    label: string;
    countryCode: string;
}

export interface LangSelectorProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    languages: readonly LanguageOption[];
    value: string;
    onChange: (language: string) => void;
    placement?: "top" | "bottom";
    variant?: "select" | "inline";
    className?: string;
}