import { useState } from "react";
import { Plus } from "lucide-react";

import { IconButton, Modal } from "@/components/ui";
import { CarouselControls } from "@/components/ui/Carousel";

import type { AboutHeroProps } from "./AboutHero.types";

export function AboutHero({
  slides,
  descriptionMaxLength = 220,
  className = "",
  ...props
}: AboutHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = slides.length;

  if (total === 0) return null;

  const currentSlide = slides[currentIndex];

  const canPrevious = currentIndex > 0;
  const canNext = currentIndex < total - 1;

  const description = currentSlide.description ?? "";

  const hasLongDescription = description.length > descriptionMaxLength;

  const visibleDescription = hasLongDescription
    ? truncateText(description, descriptionMaxLength)
    : description;

  function previous() {
    if (!canPrevious) return;

    setDirection("left");
    setModalOpen(false);
    setCurrentIndex((current) => current - 1);
  }

  function next() {
    if (!canNext) return;

    setDirection("right");
    setModalOpen(false);
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

  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        py-5
        ${className}
      `}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Presentazione TEA"
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div
        key={currentSlide.id}
        className={`
    mx-auto
    grid
    w-full
    max-w-7xl
    items-center
    gap-8
    lg:grid-cols-2

    ${
      direction === "right" ? "about-hero-slide-right" : "about-hero-slide-left"
    }
  `}
      >
        {/* CONTENUTO */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-tea-blue">
            {currentSlide.title}
          </h1>

          {visibleDescription && (
            <p className="text-lg text-gray-700">{visibleDescription}</p>
          )}

          {hasLongDescription && (
            <div>
              <IconButton
                icon={<Plus size={18} />}
                label={`Approfondisci ${currentSlide.title}`}
                onClick={() => setModalOpen(true)}
                className="text-tea-blue hover:text-white hover:bg-tea-blue transition-all duration-100"
                title="Continua a leggere"
              />
            </div>
          )}
        </div>

        {/* IMMAGINE */}
        {currentSlide.image && (
          <div className="overflow-hidden rounded-xl">
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

      {/* CONTROLLI */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          justify-end
        "
      >
        <div className="mt-5 w-fit">
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

      {/* APPROFONDIMENTO */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        variant="story"
        title={currentSlide.title}
        description={currentSlide.description}
        size="lg"
      />
    </section>
  );
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.slice(0, maxLength).replace(/\s+\S*$/, "");

  return `${truncated}…`;
}