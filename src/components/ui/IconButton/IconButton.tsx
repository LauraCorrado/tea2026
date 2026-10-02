import type { PointerEvent } from "react";

import type { IconButtonAnimation, IconButtonProps } from "./IconButton.types";

const baseClasses =
  "group icon-button relative inline-flex items-center justify-center overflow-hidden " +
  "rounded-full border border-tea-black/20 bg-transparent text-tea-black " +
  "transition-[border-color,transform,opacity] duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-blue " +
  "focus-visible:ring-offset-2 " +
  "active:scale-95 " +
  "disabled:cursor-not-allowed disabled:opacity-40";

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-13 w-13",
};

const animationClasses: Record<IconButtonAnimation, string> = {
  glow: "hover:border-transparent hover:scale-105 hover:text-white",

  rotate: "hover:border-tea-black/40",

  draw: "",

  none: "",
};

const iconAnimationClasses: Record<IconButtonAnimation, string> = {
  glow: "",

  rotate: "transition-transform duration-300 group-hover:rotate-90",

  draw: "icon-button-draw",

  none: "",
};

export function IconButton(props: IconButtonProps) {
  const size = props.size ?? "md";
  const animation = props.animation ?? "none";
  const className = props.className ?? "";

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${animationClasses[animation]}
    ${className}
  `;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (animation !== "glow") return;

    const element = event.currentTarget;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);

    element.style.setProperty("--mouse-y", `${y}px`);
  }

  const content = (
    <>
      {animation === "glow" && (
        <span aria-hidden="true" className="icon-button-glow" />
      )}

      <span
        className={`
          relative z-10
          ${iconAnimationClasses[animation]}
        `}
      >
        {props.icon}
      </span>
    </>
  );

  /*
   * LINK
   */
  if (props.as === "a") {
    const {
      as,
      icon,
      label,
      size: _size,
      animation: _animation,
      className: _className,
      onPointerMove,
      ...anchorProps
    } = props;

    return (
      <a
        {...anchorProps}
        aria-label={label}
        className={classes}
        onPointerMove={(event) => {
          handlePointerMove(event);
          onPointerMove?.(event);
        }}
      >
        {content}
      </a>
    );
  }

  /*
   * BUTTON
   */
  const {
    as,
    icon,
    label,
    size: _size,
    animation: _animation,
    className: _className,
    type = "button",
    onPointerMove,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type}
      aria-label={label}
      className={classes}
      onPointerMove={(event) => {
        handlePointerMove(event);
        onPointerMove?.(event);
      }}
    >
      {content}
    </button>
  );
}