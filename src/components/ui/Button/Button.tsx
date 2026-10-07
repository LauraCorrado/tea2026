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
  blue:
    "bg-site-blue text-site-on-blue " +
    "hover:bg-site-blue/80 active:bg-site-blue/80 " +
    "focus-visible:ring-site-blue",

  green:
    "bg-site-green text-site-on-green " +
    "hover:bg-site-green/80 active:bg-site-green/80 " +
    "focus-visible:ring-site-green",

  orange:
    "bg-site-orange text-site-on-orange " +
    "hover:bg-site-orange/80 active:bg-site-orange/80 " +
    "focus-visible:ring-site-orange",

  red:
    "bg-site-red text-site-on-red " +
    "hover:bg-site-red/80 active:bg-site-red/80 " +
    "focus-visible:ring-site-red",

  black:
    "bg-site-neutral text-site-on-neutral " +
    "hover:bg-site-neutral/80 active:bg-site-neutral/80 " +
    "focus-visible:ring-site-neutral",

  white:
    "bg-white text-black " +
    "hover:bg-white/80 active:bg-white/80 " +
    "focus-visible:ring-white",
};

const secondaryColorClasses: Record<ButtonColor, string> = {
  blue:
    "border border-site-blue bg-transparent text-site-blue " +
    "hover:border-transparent hover:bg-site-blue/80 hover:text-site-on-blue " +
    "active:bg-site-blue active:text-site-on-blue " +
    "focus-visible:ring-site-blue",

  green:
    "border border-site-green bg-transparent text-site-green " +
    "hover:border-transparent hover:bg-site-green/80 hover:text-site-on-green " +
    "active:bg-site-green active:text-site-on-green " +
    "focus-visible:ring-site-green",

  orange:
    "border border-site-orange bg-transparent text-site-orange " +
    "hover:border-transparent hover:bg-site-orange/80 hover:text-site-on-orange " +
    "active:bg-site-orange active:text-site-on-orange " +
    "focus-visible:ring-site-orange",

  red:
    "border border-site-red bg-transparent text-site-red " +
    "hover:border-transparent hover:bg-site-red/80 hover:text-site-on-red " +
    "active:bg-site-red active:text-site-on-red " +
    "focus-visible:ring-site-red",

  black:
    "border border-site-neutral bg-transparent text-site-neutral " +
    "hover:border-transparent hover:bg-site-neutral/80 hover:text-site-on-neutral " +
    "active:bg-site-neutral active:text-site-on-neutral " +
    "focus-visible:ring-site-neutral",

  white:
    "border border-white bg-transparent text-white " +
    "hover:border-transparent hover:bg-white/80 hover:text-black " +
    "active:bg-white active:text-black " +
    "focus-visible:ring-white",
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