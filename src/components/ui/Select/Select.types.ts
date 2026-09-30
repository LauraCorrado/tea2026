import type {
    ReactNode,
    SelectHTMLAttributes,
} from "react";

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps
    extends Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        "onChange" | "value"
    > {
    options: readonly SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    helperText?: ReactNode;
}