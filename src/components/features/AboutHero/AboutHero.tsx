import { useState } from "react";

import { CarouselControls } from "@/components/ui/Carousel";

import type { AboutHeroProps } from "./AboutHero.types";

import decorativeAbout from "@/assets/images/decorative/decorativeAbout.webp";

export function AboutHero({
  slides,
  backgroundVariant = "wave",
  className = "",
  ...props
}: AboutHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = slides.length;

  if (total === 0) return null;

  const currentSlide = slides[currentIndex];

  const canPrevious = currentIndex > 0;
  const canNext = currentIndex < total - 1;

  function previous() {
    if (!canPrevious) return;

    setDirection("left");
    setCurrentIndex((current) => current - 1);
  }

  function next() {
    if (!canNext) return;

    setDirection("right");
    setCurrentIndex((current) => current + 1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      previous();
    }

    if (event.key === "ArrowRight") {
      next();
    }
  }

  const sectionBackgroundClass =
    backgroundVariant === "gradient"
      ? "about-hero-bg-gradient"
      : "about-hero-bg-wave";

  const contentTextClass =
    backgroundVariant === "gradient" ? "text-white" : "text-site-text";

  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        py-20
        ${sectionBackgroundClass}
        ${contentTextClass}
        ${className}
      `}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Presentazione TEA"
      onKeyDown={handleKeyDown}
      {...props}
    >
      {backgroundVariant === "wave" && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <img
              src={decorativeAbout}
              alt=""
              className="
                h-full
                w-full
                object-cover
                object-[center_25%]
                opacity-30
              "
            />
          </div>

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              z-0
              bg-site-surface/55
            "
          />
        </>
      )}

      <div
        key={currentSlide.id}
        className={`
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-10
          px-6

          lg:grid-cols-2
          lg:px-10

          ${
            direction === "right"
              ? "about-hero-slide-right"
              : "about-hero-slide-left"
          }
        `}
      >
        <div className="flex flex-col gap-5">
          <h1
            className="
              text-4xl
              font-bold
              leading-tight

              md:text-5xl
            "
          >
            {currentSlide.title}
          </h1>

          {currentSlide.description && (
            <div
              className="
                max-w-2xl
                text-lg
                leading-relaxed
                opacity-80
              "
            >
              {currentSlide.description}
            </div>
          )}
        </div>

        {currentSlide.image && (
          <div
            className="
              relative
              z-10
              overflow-hidden
              rounded-2xl
              shadow-xl
            "
          >
            <img
              src={currentSlide.image.src}
              alt={currentSlide.image.alt}
              className="
                aspect-4/3
                h-full
                w-full
                object-cover
              "
            />
          </div>
        )}
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          mt-8
          flex
          w-full
          max-w-7xl
          justify-end
          px-6

          lg:px-10
        "
      >
        <div className="w-fit">
          <CarouselControls
            currentIndex={currentIndex}
            total={total}
            onPrevious={previous}
            onNext={next}
            canPrevious={canPrevious}
            canNext={canNext}
            showArrows
            showCounter
          />
        </div>
      </div>
    </section>
  );
}