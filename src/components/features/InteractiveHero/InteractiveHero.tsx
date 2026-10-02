import { useEffect, useState } from "react";

import { HeroActionList } from "./HeroActionList";
import { HeroInfoPanel } from "./HeroInfoPanel";

import type {
  InteractiveHeroArea,
  InteractiveHeroProps,
} from "./InteractiveHero.types";

export function InteractiveHero({
  videoSrc,
  videoPoster,
  eyebrow,
  title,
  description,
  areas,
  className = "",
  ...props
}: InteractiveHeroProps) {
  const [activeArea, setActiveArea] = useState<InteractiveHeroArea | null>(
    null,
  );

  function closePanel() {
    setActiveArea(null);
  }

  /*
   * ESC chiude il pannello.
   */
  useEffect(() => {
    if (!activeArea) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePanel();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeArea]);

  return (
    <section
      className={`
        relative
        isolate
        w-full
        overflow-hidden
        lg:min-h-[80vh]

        ${className}
      `}
      onClick={() => {
        if (activeArea) {
          closePanel();
        }
      }}
      {...props}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={videoPoster}
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-20

          h-full
          w-full
          object-cover
        "
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        aria-hidden="true"
        className="
    absolute
    inset-0
    -z-10
    bg-tea-blue/35
  "
      />

      <div
        aria-hidden="true"
        className="
    absolute
    inset-0
    -z-10
    bg-linear-to-r
    from-black/65
    via-black/25
    to-transparent
  "
      />

      <div
        className="
    mx-auto
    flex
    w-full
    max-w-7xl
    items-center

    px-5
    py-10

    sm:px-6
    sm:py-12

    lg:min-h-[80vh]
    lg:px-10
    lg:py-20
  "
      >
        <div
          className="
            grid
    w-full
    gap-8

    lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
    lg:items-center
    lg:gap-12
          "
        >
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {eyebrow && (
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/90
                "
              >
                {eyebrow}
              </p>
            )}

            <h1
              className="
                mt-3
    max-w-xl

    text-3xl
    font-semibold
    leading-tight
    tracking-tight
    text-white

    sm:text-4xl
    md:text-5xl
    lg:text-6xl
              "
            >
              {title}
            </h1>

            {description && (
              <p
                className="
                  mt-5
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-white/90
                  text-shadow-black text-shadow-md
                "
              >
                {description}
              </p>
            )}

            <div className="mt-10">
              <HeroActionList
                areas={areas}
                activeAreaId={activeArea?.id}
                onSelect={(area) => {
                  setActiveArea(area);
                }}
              />
            </div>
          </div>

          {activeArea && (
            <div className="lg:min-h-80">
              <HeroInfoPanel area={activeArea} onClose={closePanel} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}