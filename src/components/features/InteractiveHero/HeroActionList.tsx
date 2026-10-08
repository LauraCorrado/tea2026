import { ArrowRight } from "lucide-react";

import type { HeroActionListProps } from "./HeroActionList.types";

const colorClasses = {
  blue: `
    border-site-blue
    hover:bg-site-blue
    hover:text-site-on-blue
    aria-pressed:bg-site-blue
    aria-pressed:text-site-on-blue
  `,

  green: `
    border-site-green
    hover:bg-site-green
    hover:text-site-on-green
    aria-pressed:bg-site-green
    aria-pressed:text-site-on-green
  `,

  orange: `
    border-site-orange
    hover:bg-site-orange
    hover:text-site-on-orange
    aria-pressed:bg-site-orange
    aria-pressed:text-site-on-orange
  `,

  red: `
    border-site-red
    hover:bg-site-red
    hover:text-site-on-red
    aria-pressed:bg-site-red
    aria-pressed:text-site-on-red
  `,
};

export function HeroActionList({
  areas,
  activeAreaId,
  onSelect,
}: HeroActionListProps) {
  return (
    <div
      className="
        flex
        w-full
        max-w-md
        flex-col
        gap-3
      "
      aria-label="Macro-aree TEA"
    >
      {areas.map((area) => {
        const active = area.id === activeAreaId;

        return (
          <button
            key={area.id}
            type="button"
            aria-pressed={active}
            aria-controls="hero-info-panel"
            onClick={() => onSelect(area)}
            className={`
              group

              flex
              w-80
              items-center
              justify-between
              gap-4

              rounded-xl
              border

              bg-black/30
              px-5
              py-4

              text-left
              text-white

              backdrop-blur-sm

              transition-all
              duration-300

              hover:translate-x-1

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black

              ${colorClasses[area.color]}
            `}
          >
            <span className="font-semibold">{area.title}</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        );
      })}
    </div>
  );
}