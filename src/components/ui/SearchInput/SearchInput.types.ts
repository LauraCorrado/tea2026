import type {
    InputHTMLAttributes,
    ReactNode,
} from "react";

export interface SearchInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "onChange" | "onSubmit"
    > {
    value: string;
    onChange: (value: string) => void;
    onClear?: () => void;
    onSubmit?: (value: string) => void;
    helperText?: ReactNode;
    label?: string;
    hideLabel?: boolean;
}