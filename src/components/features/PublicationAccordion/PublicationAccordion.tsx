import { useState } from "react";
import { ChevronDown, Download, ArrowRight } from "lucide-react";

import { Button } from "@/components";
import type { PublicationAccordionProps } from "./PublicationAccordion.types";

export function PublicationAccordion({
  title,
  description,
  pdfUrl,
  defaultOpen = false,
  className = "",
  ...props
}: PublicationAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article
      className={`
        overflow-hidden
        rounded-xl

        border
        border-site-border

        bg-site-surface
        text-site-text

        transition-colors
        duration-300

        ${open ? "border-site-blue/40" : ""}
        ${className}
      `}
      {...props}
    >
      <div
        className="
          flex
          items-center
          gap-4
          p-5
        "
      >
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="
            min-w-0
            flex-1
            text-left

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-site-blue
            focus-visible:ring-offset-2
            focus-visible:ring-offset-site-surface
          "
        >
          <h3
            className="
              min-w-0

              text-lg
              font-semibold
              tracking-tight
              text-site-blue

              md:text-xl
            "
          >
            {title}
          </h3>
        </button>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={pdfUrl}
            download
            aria-label={`Scarica ${
              typeof title === "string" ? title : "pubblicazione"
            }`}
            className="
              inline-flex
              size-10
              items-center
              justify-center

              rounded-full

              border
              border-site-red

              text-site-red

              transition-colors
              duration-300

              hover:bg-site-red
              hover:text-site-on-red

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-site-red
              focus-visible:ring-offset-2
              focus-visible:ring-offset-site-surface
            "
          >
            <Download size={18} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label={open ? "Chiudi pubblicazione" : "Apri pubblicazione"}
            className="
              inline-flex
              size-10
              items-center
              justify-center

              rounded-full

              text-site-blue

              transition-colors
              duration-300

              hover:bg-site-blue/10

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-site-blue
              focus-visible:ring-offset-2
              focus-visible:ring-offset-site-surface
            "
          >
            <ChevronDown
              size={20}
              aria-hidden="true"
              className={`
                transition-transform
                duration-300

                ${open ? "rotate-180" : ""}
              `}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="
            border-t
            border-site-border

            px-5
            pb-5
            pt-4
          "
        >
          {description && (
            <div
              className="
                max-w-3xl
                text-sm
                leading-relaxed
                text-site-muted
              "
            >
              {description}
            </div>
          )}

          <Button
            as="a"
            href={pdfUrl}
            download
            variant="secondary"
            color="red"
            size="sm"
            className="mt-5 gap-2"
          >
            <span>Scarica pubblicazione</span>

            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      )}
    </article>
  );
}