import { useRef, type PointerEvent } from "react";
import type { IconButtonAnimation, IconButtonProps } from "./IconButton.types";

const baseClasses =
  "group icon-button relative inline-flex items-center justify-center overflow-hidden " +
  "rounded-full border border-tea-black/20 bg-transparent text-tea-black " +
  "transition-[border-color,transform,opacity] duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-blue " +
  "focus-visible:ring-offset-2 " +
  "enabled:active:scale-95 " +
  "disabled:cursor-not-allowed disabled:opacity-40";

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-13 w-13",
};

const animationClasses: Record<IconButtonAnimation, string> = {
  glow: "enabled:hover:border-transparent enabled:hover:scale-105 enabled:hover:text-white",
  rotate: "enabled:hover:border-tea-black/40",
  draw: "",
  none: "",
};

const iconAnimationClasses = {
  glow: "",

  rotate:
    "transition-transform duration-300 group-enabled:group-hover:rotate-90",

  draw: "icon-button-draw", //principalmente per il menu btn

  none: "",
};

export function IconButton({
  icon,
  label,
  size = "md",
  animation = "none",
  className = "",
  type = "button",
  disabled,
  ...props
}: IconButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null); // direct reference to the button element in DOM
  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    // when cursor moves over the button
    if (disabled || animation !== "glow") return;

    const button = buttonRef.current;
    if (!button) return;

    // get the position and size of the button in the viewport
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <button
      {...props}
      ref={buttonRef}
      type={type}
      aria-label={label}
      disabled={disabled}
      onPointerMove={handlePointerMove}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${animationClasses[animation]}
        ${className}
      `}
    >
      {animation === "glow" && (
        <span aria-hidden="true" className="icon-button-glow" />
      )}

      <span
        className={`
          relative z-10
          ${iconAnimationClasses[animation]}
        `}
      >
        {icon}
      </span>
    </button>
  );
}
