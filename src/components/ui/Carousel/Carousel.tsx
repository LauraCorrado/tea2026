import { useRef, useState } from "react";

import { CarouselControls } from "./CarouselControls";
import type { CarouselProps } from "./Carousel.types";

const DRAG_THRESHOLD = 40;

export function Carousel<T>({
  items,
  renderItem,
  loop = false,
  showArrows = true,
  showIndicators = true,
  showCounter = true,
  className = "",
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragStartX = useRef<number | null>(null);

  const total = items.length;

  if (total === 0) return null;

  const canPrevious = loop || currentIndex > 0;
  const canNext = loop || currentIndex < total - 1;

  function goTo(index: number) {
    if (loop) {
      setCurrentIndex((index + total) % total);
      return;
    }

    setCurrentIndex(Math.min(total - 1, Math.max(0, index)));
  }

  function previous() {
    goTo(currentIndex - 1);
  }

  function next() {
    goTo(currentIndex + 1);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    dragStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null) return;

    const deltaX = event.clientX - dragStartX.current;

    dragStartX.current = null;

    if (Math.abs(deltaX) < DRAG_THRESHOLD) return;

    if (deltaX > 0) {
      previous();
    } else {
      next();
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      previous();
    }

    if (event.key === "ArrowRight") {
      next();
    }
  }

  return (
    <div className={`w-full ${className}`} onKeyDown={handleKeyDown}>
      <div
        className="
          relative
          overflow-hidden
          touch-pan-y
        "
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Carosello"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          dragStartX.current = null;
        }}
      >
        <div
          className="
            flex
            transition-transform
            duration-500
            ease-out
          "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full shrink-0"
              aria-hidden={index !== currentIndex}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <CarouselControls
          currentIndex={currentIndex}
          total={total}
          onPrevious={previous}
          onNext={next}
          canPrevious={canPrevious}
          canNext={canNext}
          showArrows={showArrows}
          showCounter={showCounter}
        />

        {showIndicators && total > 1 && (
          <div
            className="flex justify-center gap-2"
            aria-label="Seleziona slide"
          >
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Vai alla slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-site-blue
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-site-bg

                  ${
                    index === currentIndex
                      ? "w-6 bg-site-blue"
                      : "w-2 bg-site-border-strong"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}