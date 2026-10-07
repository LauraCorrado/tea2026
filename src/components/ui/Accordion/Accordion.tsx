import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { AccordionProps } from "./Accordion.types";

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className = "",
  ...props
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`
        overflow-hidden
        rounded-xl
        border
        border-site-border
        bg-site-surface
        text-site-text
        transition-colors
        duration-300

        ${open ? "border-site-blue/50" : ""}
        ${className}
      `}
      {...props}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          p-6
          text-left

          transition-colors

          hover:bg-site-surface-alt

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-site-blue
        "
      >
        <div
          className="
            text-xl
            font-semibold
            tracking-tight
            text-site-blue

            md:text-base
          "
        >
          {title}
        </div>

        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`
            shrink-0
            text-site-blue
            transition-transform
            duration-300

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div
          className="
            border-t
            border-site-border
            px-6
            pb-6
            pt-5
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}