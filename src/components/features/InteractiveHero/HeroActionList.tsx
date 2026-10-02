import { ArrowRight } from "lucide-react";

import type { HeroActionListProps } from "./HeroActionList.types";

const colorClasses = {
  blue: `
    border-tea-blue
    hover:bg-tea-blue
    aria-pressed:bg-tea-blue
  `,

  green: `
    border-tea-green
    hover:bg-tea-green
    aria-pressed:bg-tea-green
  `,

  orange: `
    border-tea-orange
    hover:bg-tea-orange
    aria-pressed:bg-tea-orange
  `,

  red: `
    border-tea-red
    hover:bg-tea-red
    aria-pressed:bg-tea-red
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
              hover:text-white

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