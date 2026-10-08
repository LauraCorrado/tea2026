import { ArrowRight, X } from "lucide-react";

import { Button, IconButton } from "@/components/ui";

import type { HeroInfoPanelProps } from "./HeroInfoPanel.types";

const accentClasses = {
  blue: "bg-site-blue",
  green: "bg-site-green",
  orange: "bg-site-orange",
  red: "bg-site-red",
};

export function HeroInfoPanel({ area, onClose }: HeroInfoPanelProps) {
  return (
    <aside
      id="hero-info-panel"
      aria-labelledby={`hero-info-title-${area.id}`}
      onClick={(event) => {
        event.stopPropagation();
      }}
      className="
        relative

        flex
        min-h-80
        w-full
        flex-col

        overflow-hidden
        rounded-2xl

        bg-site-surface/95
        p-7

        text-site-text

        shadow-2xl
        backdrop-blur-md

        md:p-8
      "
    >
      <div
        aria-hidden="true"
        className={`
          absolute
          left-0
          top-0
          h-48
          w-1.5
          rounded-e-lg

          ${accentClasses[area.color]}
        `}
      />

      <div className="flex justify-end">
        <IconButton
          icon={<X size={20} />}
          label="Chiudi approfondimento"
          animation="rotate"
          onClick={onClose}
        />
      </div>

      <div
        className="
          flex
          flex-1
          flex-col
          justify-center
        "
      >
        <h2
          id={`hero-info-title-${area.id}`}
          className="
            max-w-xl
            text-3xl
            font-semibold
            tracking-tight

            md:text-4xl
          "
        >
          {area.title}
        </h2>

        <p
          className="
            mt-5
            max-w-xl
            text-base
            leading-relaxed
            text-site-muted

            md:text-lg
          "
        >
          {area.description}
        </p>

        <div className="mt-7">
          <Button
            as="a"
            href={area.href}
            color={area.color}
            size="md"
            className="gap-2"
          >
            <span>Scopri di più</span>

            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </aside>
  );
}