import type { ButtonColor, ButtonProps, ButtonVariant } from "./Button.types";

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium " +
  "transition-all duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-13 px-6 text-lg",
};

const primaryColorClasses: Record<ButtonColor, string> = {
  blue: "bg-tea-blue text-white hover:bg-tea-blue/80 active:bg-tea-blue/80 focus-visible:ring-tea-blue",

  green:
    "bg-tea-green text-white hover:bg-tea-green/80 active:bg-tea-green/80 focus-visible:ring-tea-green",

  orange:
    "bg-tea-orange text-white hover:bg-tea-orange/80 active:bg-tea-orange/80 focus-visible:ring-tea-orange",

  red: "bg-tea-red text-white hover:bg-tea-red/80 active:bg-tea-red/80 focus-visible:ring-tea-red",

  black:
    "bg-tea-black text-white hover:bg-tea-black/80 active:bg-tea-black/80 focus-visible:ring-tea-black",

  white:
    "bg-white text-black hover:bg-white/80 active:bg-white/80 focus-visible:ring-tea-black",
};

const secondaryColorClasses: Record<ButtonColor, string> = {
  blue: "border border-tea-blue bg-transparent text-tea-blue hover:bg-tea-blue/70 hover:border-transparent hover:text-white active:bg-tea-blue active:text-white focus-visible:ring-tea-blue",

  green:
    "border border-tea-green bg-transparent text-tea-green hover:bg-tea-green/70 hover:border-transparent hover:text-white active:bg-tea-green active:text-white focus-visible:ring-tea-green",

  orange:
    "border border-tea-orange bg-transparent text-tea-orange hover:bg-tea-orange/70 hover:border-transparent hover:text-white active:bg-tea-orange active:text-white focus-visible:ring-tea-orange",

  red: "border border-tea-red bg-transparent text-tea-red hover:bg-tea-red/70 hover:border-transparent hover:text-white active:bg-tea-red active:text-white focus-visible:ring-tea-red",

  black:
    "border border-tea-black bg-transparent text-tea-black hover:bg-tea-black/70 hover:border-transparent hover:text-white active:bg-tea-black active:text-white focus-visible:ring-tea-black",

  white:
    "border border-white bg-transparent text-white hover:bg-white/70 hover:border-transparent hover:text-black active:bg-black active:text-white focus-visible:ring-tea-black",
};

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
  primary: primaryColorClasses,
  secondary: secondaryColorClasses,
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const color = props.color ?? "blue";
  const size = props.size ?? "md";
  const className = props.className ?? "";

  const classes = `
    ${baseClasses}
    ${variantClasses[variant][color]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (props.as === "a") {
    const {
      as,
      variant: _variant,
      color: _color,
      size: _size,
      className: _className,
      children,
      ...anchorProps
    } = props;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    as,
    variant: _variant,
    color: _color,
    size: _size,
    className: _className,
    children,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}