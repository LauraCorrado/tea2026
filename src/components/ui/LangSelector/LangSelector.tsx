import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import type { LangSelectorProps } from "./LangSelector.types";

export function LangSelector({
  languages,
  value,
  onChange,
  className = "",
  placement = "bottom",
  variant = "select",
  ...props
}: LangSelectorProps) {
  const [open, setOpen] = useState(false);

  const selectedLanguage =
    languages.find((language) => language.code === value) ?? languages[0];

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`} {...props}>
        {languages.map((language) => {
          const selected = language.code === value;

          return (
            <button
              key={language.code}
              type="button"
              onClick={() => onChange(language.code)}
              aria-pressed={selected}
              className={`
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                px-3
                py-2
                text-sm
                font-medium
                transition-colors

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-site-blue
                focus-visible:ring-offset-2
                focus-visible:ring-offset-site-surface

                ${
                  selected
                    ? "border-site-green bg-site-green/10 text-site-text"
                    : "border-site-border bg-site-surface text-site-text hover:border-site-green/50 hover:bg-site-green/10"
                }
              `}
            >
              <ReactCountryFlag
                countryCode={language.countryCode}
                svg
                aria-hidden="true"
                className="text-lg"
              />

              <span>{language.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          inline-flex
          items-center
          gap-2

          rounded-md
          border
          border-site-border
          bg-site-surface

          px-3
          py-2

          text-sm
          font-medium
          text-site-text

          transition-colors

          hover:border-site-green/50
          hover:bg-site-green/10

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-site-blue
          focus-visible:ring-offset-2
          focus-visible:ring-offset-site-surface
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
          className={`
            transition-transform
            duration-200

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className={`
            absolute
            right-0
            z-20
            min-w-full

            overflow-hidden
            rounded-md

            border
            border-site-border
            bg-site-surface
            text-site-text

            shadow-lg

            ${placement === "top" ? "bottom-full mb-2" : "top-full mt-2"}
          `}
        >
          {languages.map((language) => {
            const selected = language.code === value;

            return (
              <button
                key={language.code}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(language.code);
                  setOpen(false);
                }}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3

                  px-3
                  py-2

                  text-left
                  text-sm

                  transition-colors

                  hover:bg-site-green/10

                  focus-visible:outline-none
                  focus-visible:bg-site-green/10

                  ${selected ? "bg-site-green/10 font-medium" : ""}
                `}
              >
                <ReactCountryFlag
                  countryCode={language.countryCode}
                  svg
                  aria-hidden="true"
                  className="text-lg"
                />

                <span>{language.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
