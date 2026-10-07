import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";

import type { TimelineCardProps } from "./TimelineCard.types";

export function TimelineCard({
  item,
  onClick,
  className = "",
  ...props
}: TimelineCardProps) {
  return (
    <article
      data-timeline-card
      className={`
        flex
        w-[78vw]
        shrink-0
        flex-col

        overflow-hidden
        rounded-2xl

        border
        border-site-border

        bg-site-surface
        text-site-text

        shadow-sm

        sm:w-80
        lg:w-70

        ${className}
      `}
      {...props}
    >
      {item.image && (
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={item.image.src}
            alt={item.image.alt}
            draggable={false}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0

              bg-linear-to-t
              from-black/30
              to-transparent
            "
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span
          className="
            text-sm
            font-semibold
            tracking-wide
            text-site-blue
          "
        >
          {item.year}
        </span>

        <h3
          className="
            mt-2
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            text-site-text
          "
        >
          {item.title}
        </h3>

        <div className="mt-auto pt-5">
          <Button
            type="button"
            variant="secondary"
            color="blue"
            size="sm"
            className="gap-2"
            onClick={() => onClick(item)}
          >
            <span>Apri</span>

            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}