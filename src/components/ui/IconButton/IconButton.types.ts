import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonAnimation =
    | "glow"
    | "rotate"
    | "none"
    | "draw";

interface IconButtonBaseProps {
    icon: ReactNode;
    label: string;
    size?: IconButtonSize;
    animation?: IconButtonAnimation;
    className?: string;
}

export type IconButtonAsButton =
    IconButtonBaseProps &
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        keyof IconButtonBaseProps
    > & {
        as?: "button";
    };

export type IconButtonAsLink =
    IconButtonBaseProps &
    Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof IconButtonBaseProps
    > & {
        as: "a";
    };

export type IconButtonProps =
    | IconButtonAsButton
    | IconButtonAsLink;