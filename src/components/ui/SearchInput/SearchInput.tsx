import { Search, X } from "lucide-react";

import type { SearchInputProps } from "./SearchInput.types";

export function SearchInput({
  value,
  onChange,
  onClear,
  onSubmit,
  helperText,
  placeholder = "Cerca...",
  className = "",
  ...props
}: SearchInputProps) {
  function handleClear() {
    onChange("");
    onClear?.();
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <Search
          size={18}
          aria-hidden="true"
          className="
          pointer-events-none
          absolute left-3 top-1/2
          -translate-y-1/2
          text-black/50
        "
        />

        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="
          h-11 w-full
          rounded-md
          border border-black/20
          bg-white
          pl-10 pr-10
          text-sm
          outline-none
          transition-colors
          placeholder:text-black/40
          hover:border-black/40
          focus:border-tea-blue
          focus:ring-2
          focus:ring-tea-blue/20
        "
          {...props}
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Cancella ricerca"
            className="
            absolute right-3 top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            text-black/50
            transition-colors
            hover:bg-black/5
            hover:text-black
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-tea-blue
          "
          >
            <X size={16} aria-hidden="true" color="#0072c6" />
          </button>
        )}
      </div>

      {helperText && (
        <p className="mt-2 text-sm text-tea-black/70">{helperText}</p>
      )}
    </div>
  );
}