import { useState } from "react";
import { ArrowRight } from "lucide-react";

import type {
  CompetenceCardColor,
  CompetenceCardProps,
} from "./CompetenceCard.types";

const gradientClasses: Record<CompetenceCardColor, string> = {
  blue: `
    from-[#081f33]
    via-[#004f86]
    to-tea-blue
  `,
  red: `
    from-[#2a0d09]
    via-[#7a160c]
    to-tea-red
  `,
  green: `
    from-[#08261a]
    via-[#006b36]
    to-tea-green
  `,
  orange: `
    from-[#2b1603]
    via-[#9a4f00]
    to-tea-orange
  `,
};

export function CompetenceCard({
  title,
  description,
  image,
  defaultFlipped = false,
  className = "",
  color = "blue",
  ...props
}: CompetenceCardProps) {
  const [isFlipped, setIsFlipped] = useState(defaultFlipped);
  const [isHovered, setIsHovered] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);

  const showHoverPreview = isHovered && !suppressHover && !isFlipped;

  const rotation = showHoverPreview ? 30 : isFlipped ? 180 : 0;

  function handleMouseEnter() {
    if (!isFlipped) {
      setIsHovered(true);
    }
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setSuppressHover(false);
  }

  function handleFlipToBack() {
    setIsFlipped(true);
    setSuppressHover(isHovered);
  }

  function handleFlipToFront() {
    setIsFlipped(false);
    setIsHovered(false);
    setSuppressHover(false);
  }

  return (
    <div
      className={`
        mb-4
        inline-block
        w-full
        break-inside-avoid

        perspective-[1000px]

        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="
          grid
          w-full
        min-h-75
          transform-3d

          transition-transform
          duration-500
          ease-in-out

          motion-reduce:transition-none
        "
        style={{
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        <button
          type="button"
          onClick={handleFlipToBack}
          tabIndex={isFlipped ? -1 : 0}
          aria-hidden={isFlipped}
          aria-label="Mostra la descrizione della competenza"
          className={`
            group
            [grid-area:1/1]

            flex
            w-full
            flex-col

            overflow-hidden
            rounded-xl

            bg-black
            text-left

            shadow-md

            backface-hidden

            transition-shadow
            duration-500

            hover:shadow-2xl
            hover:shadow-black/70

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-tea-blue
            focus-visible:ring-offset-4

            ${isFlipped ? "pointer-events-none" : ""}
          `}
        >
          <div className="relative flex flex-1">
            <img
              src={image.src}
              alt={image.alt}
              className="
                absolute inset-0
                h-full w-full
                object-cover
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute inset-0

                bg-linear-to-t
                from-black/80
                via-black/25
                to-black/10
              "
            />

            <div
              className="
                relative z-10

                flex
                w-full
                flex-col
                justify-between

                p-5
              "
            >
              <div
                className="
                  flex flex-1
                  items-center
                  justify-center
                "
              >
                <h3
                  className="
                    max-w-48

                    text-center
                    text-xl
                    font-semibold
                    leading-tight
                    tracking-tight

                    text-shadow-lg
                    text-shadow-tea-black/20

                    text-white
                  "
                >
                  {title}
                </h3>
              </div>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-2

                  text-xs
                  font-medium
                  text-white/90
                "
              >
                <span>Gira</span>

                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1

                    motion-reduce:transition-none
                  "
                />
              </div>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={handleFlipToFront}
          tabIndex={isFlipped ? 0 : -1}
          aria-hidden={!isFlipped}
          aria-label="Torna al fronte della carta"
          className={`
            [grid-area:1/1]

            flex
            w-full
            flex-col

            rounded-xl

            bg-linear-to-br
            ${gradientClasses[color]}

            p-5

            text-left
            text-white

            shadow-md

            backface-hidden
            transform-[rotateY(180deg)]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-offset-4

            ${!isFlipped ? "pointer-events-none" : ""}
          `}
        >
          <div className="flex-1">
            <h3
              className="
                mt-2
                text-lg
                font-semibold
                leading-tight
                tracking-tight
                text-white
              "
            >
              {title}
            </h3>

            <div
              className="
                mt-4
                text-sm
                leading-relaxed
                text-white/80
              "
            >
              {description}
            </div>
          </div>

          <div
            className="
              mt-6

              flex
              items-center
              justify-center
              gap-2

              text-xs
              font-medium
              text-white/90
            "
          >
            <ArrowRight size={15} aria-hidden="true" className="rotate-180" />

            <span>Torna indietro</span>
          </div>
        </button>
      </div>
    </div>
  );
}