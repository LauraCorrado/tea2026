import type { ButtonProps } from "./Button.types";

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
  // stati focus e disabled:
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses = {
  primary:
    "bg-tea-blue text-white enabled:hover:bg-tea-blue/80 enabled:active:bg-tea-blue/80 focus-visible:ring-tea-blue",
  secondary:
    "bg-tea-orange text-white enabled:hover:bg-tea-orange/80 enabled:active:bg-tea-orange/80 focus-visible:ring-tea-orange",
  tertiary:
    "border border-tea-green bg-transparent text-tea-green enabled:hover:bg-tea-green enabled:hover:text-white enabled:active:bg-tea-green enabled:active:text-white focus-visible:ring-tea-green",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-13 px-6 text-lg",
};

export function Button({
  children,
  variant = "primary", //default
  size = "md", //default
  className = "",
  type = "button", //not submit by default
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
