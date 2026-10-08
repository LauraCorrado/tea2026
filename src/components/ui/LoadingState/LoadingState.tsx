import type { LoadingStateProps, LoadingStateSize } from "./LoadingState.types";

const spinnerSizeClasses: Record<LoadingStateSize, string> = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const textSizeClasses: Record<LoadingStateSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function LoadingState({
  label = "Caricamento...",
  size = "md",
  className = "",
  ...props
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      {...props}
    >
      <div
        aria-hidden="true"
        className={`
          relative
          ${spinnerSizeClasses[size]}
        `}
      >
        <div
          aria-hidden="true"
          className={`
            rounded-full
            animate-spin
            motion-reduce:animate-none
            ${spinnerSizeClasses[size]}
          `}
          style={{
            background: `
              conic-gradient(
                var(--site-blue) 0deg 75deg,
                transparent 75deg 90deg,
                var(--site-green) 90deg 165deg,
                transparent 165deg 180deg,
                var(--site-orange) 180deg 255deg,
                transparent 255deg 270deg,
                var(--site-red) 270deg 345deg,
                transparent 345deg 360deg
              )
            `,
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
            animationDuration: "1.6s",
          }}
        />
      </div>

      {label && (
        <span
          className={`font-medium text-site-muted ${textSizeClasses[size]}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}