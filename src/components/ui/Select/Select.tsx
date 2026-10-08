import { ChevronDown } from "lucide-react";

import type { SelectProps } from "./Select.types";

export function Select({
  options,
  value,
  onChange,
  placeholder = "Seleziona...",
  helperText,
  label,
  hideLabel = false,
  className = "",
  id,
  ...props
}: SelectProps) {
  const selectId = id ?? "select-input";

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
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
        <select
          id={selectId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="
            h-11
            w-full
            appearance-none
            rounded-md

            border
            border-site-border
            bg-site-surface

            px-3
            pr-10

            text-sm
            text-site-text

            outline-none
            transition-colors

            hover:border-site-border-strong

            focus:border-site-blue
            focus:ring-2
            focus:ring-site-blue/20
          "
          {...props}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-site-blue
          "
        />
      </div>

      {helperText && (
        <p className="mt-2 text-sm text-site-muted">{helperText}</p>
      )}
    </div>
  );
}