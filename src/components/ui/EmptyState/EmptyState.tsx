import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({
  title,
  description,
  action,
  className = "",
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        rounded-xl border border-black/10
        bg-white px-6 py-10
        text-center
        ${className}
      `}
      {...props}
    >
      <div aria-hidden="true" className="mb-5 flex items-end gap-1">
        <span className="h-2 w-6 rounded-full bg-tea-blue" />
        <span className="h-2 w-4 rounded-full bg-tea-green" />
        <span className="h-2 w-3 rounded-full bg-tea-orange" />
        <span className="h-2 w-2 rounded-full bg-tea-red" />
      </div>

      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

      {description && (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-black/60">
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}