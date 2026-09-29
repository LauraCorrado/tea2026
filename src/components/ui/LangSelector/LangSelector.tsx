import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import type { LangSelectorProps } from "./LangSelector.types";

export function LangSelector({
  languages,
  value,
  onChange,
  className = "",
  ...props
}: LangSelectorProps) {
  const [open, setOpen] = useState(false);

  const selectedLanguage =
    languages.find((language) => language.code === value) ?? languages[0];

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          inline-flex items-center gap-2
          rounded-md
          border border-black/20
          bg-white
          px-3 py-2
          text-sm font-medium
          transition-colors
          hover:bg-tea-green/20
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-tea-blue
          focus-visible:ring-offset-2
        "
      >
        <ReactCountryFlag
          countryCode={selectedLanguage.countryCode}
          svg
          aria-hidden="true"
          className="text-lg"
        />

        <span>{selectedLanguage.label}</span>

        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="
            absolute bottom-full right-0 z-20 mt-2
            min-w-full
            overflow-hidden
            rounded-md
            border border-black/10
            bg-white
            shadow-lg
          "
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              role="option"
              aria-selected={language.code === value}
              onClick={() => {
                onChange(language.code);
                setOpen(false);
              }}
              className="
      flex w-full items-center gap-3
      px-3 py-2
      text-left text-sm
      hover:bg-tea-green/5
    "
            >
              <ReactCountryFlag
                countryCode={language.countryCode}
                svg
                aria-hidden="true"
                className="text-lg"
              />

              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}