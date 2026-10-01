import { useState } from "react";
import { ChevronDown, ExternalLink, FileDown } from "lucide-react";

import type {
  PatentAccordionProps,
  PatentAccordionType,
} from "./PatentAccordion.types";

const typeLabels: Record<PatentAccordionType, string> = {
  "international-patent": "Brevetto internazionale",
  "national-patent": "Brevetto nazionale",
  "community-trademark": "Marchio comunitario",
  design: "Design",
};

export function PatentAccordion({
  type,
  name,
  number,
  year,
  description,
  documentationUrl,
  pdfUrl,
  defaultOpen = false,
  className = "",
  ...props
}: PatentAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article
      className={`
        overflow-hidden
        rounded-xl
        border border-black/10
        bg-white
        transition-colors duration-300
        ${open ? "border-tea-blue/40" : ""}
        ${className}
      `}
      {...props}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="
          flex w-full
          items-center justify-between
          gap-6
          p-6
          text-left
          transition-colors
          hover:bg-black/2
        "
      >
        <h3
          className="
            text-xl font-semibold
            tracking-tight
            text-tea-blue
            md:text-2xl
          "
        >
          {name}
        </h3>

        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`
            shrink-0
            text-tea-blue
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* CONTENUTO */}
      {open && (
        <div
          className="
            border-t border-black/10
            px-6 pb-6 pt-5
          "
        >
          <div
            className="
              flex flex-wrap
              items-center gap-x-6 gap-y-2
              text-sm
            "
          >
            <span
              className="
                font-semibold
                uppercase
                tracking-[0.16em]
                text-tea-blue
              "
            >
              {typeLabels[type]}
            </span>

            <span className="font-medium text-black/45">{year}</span>
          </div>

          <p
            className="
              mt-4
              font-mono
              text-sm font-semibold
              tracking-wide
              text-black/60
            "
          >
            {number}
          </p>

          {description && (
            <div
              className="
                mt-5
                max-w-3xl
                leading-relaxed
                text-black/65
              "
            >
              {description}
            </div>
          )}

          {(documentationUrl || pdfUrl) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {documentationUrl && (
                <a
                  href={documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-semibold
                    text-tea-blue
                    transition-opacity
                    hover:opacity-70
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-tea-blue
                    focus-visible:ring-offset-2
                  "
                >
                  Documentazione
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}

              {pdfUrl && (
                <a
                  href={pdfUrl}
                  download
                  className="
                    inline-flex items-center gap-2
                    text-sm font-semibold
                    text-tea-red
                    transition-opacity
                    hover:opacity-70
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-tea-red
                    focus-visible:ring-offset-2
                  "
                >
                  Scarica PDF
                  <FileDown size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
