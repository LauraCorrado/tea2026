import { Search, X } from "lucide-react";

import type { SearchInputProps } from "./SearchInput.types";

export function SearchInput({
  value,
  onChange,
  onClear,
  onSubmit,
  helperText,
  placeholder = "Cerca...",
  label,
  hideLabel = false,
  className = "",
  id,
  ...props
}: SearchInputProps) {
  const inputId = id ?? "search-input";

  function handleClear() {
    onChange("");
    onClear?.();
  }

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={
            hideLabel
              ? "sr-only"
              : "mb-2 ms-1 block text-sm font-medium text-site-blue"
          }
        >
          {label}
        </label>
      )}

      <div className="relative">
        <Search
          size={18}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-site-soft
          "
        />

        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="
            h-11
            w-full
            rounded-md

            border
            border-site-border
            bg-site-surface

            pl-10
            pr-10

            text-sm
            text-site-text

            outline-none
            transition-colors

            placeholder:text-site-soft

            hover:border-site-border-strong

            focus:border-site-blue
            focus:ring-2
            focus:ring-site-blue/20
          "
          {...props}
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Cancella ricerca"
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2

              rounded-full
              p-1

              text-site-soft

              transition-colors

              hover:bg-site-surface-alt
              hover:text-site-blue

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-site-blue
              focus-visible:ring-offset-2
              focus-visible:ring-offset-site-surface
            "
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      {helperText && (
        <p className="mt-2 text-sm text-site-muted">{helperText}</p>
      )}
    </div>
  );
}