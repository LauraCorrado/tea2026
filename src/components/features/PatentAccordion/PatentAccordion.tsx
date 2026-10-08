import { ExternalLink, FileDown } from "lucide-react";
import { Accordion } from "@/components/ui";

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
  return (
    <Accordion
      title={name}
      defaultOpen={defaultOpen}
      className={className}
      {...props}
    >
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-x-6
          gap-y-2
          text-sm
        "
      >
        <span
          className="
            font-semibold
            uppercase
            tracking-[0.16em]
            text-site-blue
          "
        >
          {typeLabels[type]}
        </span>

        <span className="font-medium text-site-soft">{year}</span>
      </div>

      <p
        className="
          mt-4
          font-mono
          text-sm
          font-semibold
          tracking-wide
          text-site-muted
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
            text-site-muted
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
                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-site-blue

                transition-opacity

                hover:opacity-70

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-site-blue
                focus-visible:ring-offset-2
                focus-visible:ring-offset-site-surface
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
                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-site-red

                transition-opacity

                hover:opacity-70

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-site-red
                focus-visible:ring-offset-2
                focus-visible:ring-offset-site-surface
              "
            >
              Scarica PDF
              <FileDown size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </Accordion>
  );
}