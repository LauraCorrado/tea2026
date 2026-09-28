import type { ButtonColor, ButtonProps, ButtonVariant } from "./Button.types";

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50" +
  "transition-all duration-300";

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-13 px-6 text-lg",
};

const primaryColorClasses: Record<ButtonColor, string> = {
  blue: "bg-tea-blue text-white enabled:hover:bg-tea-blue/80 enabled:active:bg-tea-blue/80 focus-visible:ring-tea-blue",

  green:
    "bg-tea-green text-white enabled:hover:bg-tea-green/80 enabled:active:bg-tea-green/80 focus-visible:ring-tea-green",

  orange:
    "bg-tea-orange text-white enabled:hover:bg-tea-orange/80 enabled:active:bg-tea-orange/80 focus-visible:ring-tea-orange",

  red: "bg-tea-red text-white enabled:hover:bg-tea-red/80 enabled:active:bg-tea-red/80 focus-visible:ring-tea-red",

  black:
    "bg-tea-black text-white enabled:hover:bg-tea-black/80 enabled:active:bg-tea-black/80 focus-visible:ring-tea-black",

  white:
    "bg-white text-black enabled:hover:bg-white/80 enabled:active:bg-white/80 focus-visible:ring-tea-black",
};

const secondaryColorClasses: Record<ButtonColor, string> = {
  blue: "border border-tea-blue bg-transparent text-tea-blue enabled:hover:bg-tea-blue/70 enabled:hover:border-transparent enabled:hover:text-white enabled:active:bg-tea-blue enabled:active:text-white focus-visible:ring-tea-blue",

  green:
    "border border-tea-green bg-transparent text-tea-green enabled:hover:bg-tea-green/70 enabled:hover:border-transparent enabled:hover:text-white enabled:active:bg-tea-green enabled:active:text-white focus-visible:ring-tea-green",

  orange:
    "border border-tea-orange bg-transparent text-tea-orange enabled:hover:bg-tea-orange/70 enabled:hover:border-transparent enabled:hover:text-white enabled:active:bg-tea-orange enabled:active:text-white focus-visible:ring-tea-orange",

  red: "border border-tea-red bg-transparent text-tea-red enabled:hover:bg-tea-red/70 enabled:hover:border-transparent enabled:hover:text-white enabled:active:bg-tea-red enabled:active:text-white focus-visible:ring-tea-red",

  black:
    "border border-tea-black bg-transparent text-tea-black enabled:hover:bg-tea-black/70 enabled:hover:border-transparent enabled:hover:text-white enabled:active:bg-tea-black enabled:active:text-white focus-visible:ring-tea-black",

  white:
    "border border-white bg-transparent text-white enabled:hover:bg-white/70 enabled:hover:border-transparent enabled:hover:text-black enabled:active:bg-black enabled:active:text-white focus-visible:ring-tea-black",
};

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
  primary: primaryColorClasses,
  secondary: secondaryColorClasses,
};

export function Button({
  children,
  variant = "primary",
  color = "blue",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant][color]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
