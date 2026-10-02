import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonColor =
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "black"
    | "white";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
    children: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    className?: string;
}

export type NativeButtonProps =
    ButtonBaseProps &
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        keyof ButtonBaseProps
    > & {
        as?: "button";
    };

export type LinkButtonProps =
    ButtonBaseProps &
    Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof ButtonBaseProps
    > & {
        as: "a";
    };

export type ButtonProps =
    | NativeButtonProps
    | LinkButtonProps;