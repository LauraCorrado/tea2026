import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { IconButton, Modal } from "@/components/ui";

import { TimelineCard } from "./TimelineCard";

import type { TimelineItem, TimelineProps } from "./Timeline.types";

const DRAG_THRESHOLD = 6;

export function Timeline({
  items,
  autoScrollSpeed = 25,
  className = "",
  ...props
}: TimelineProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);

  const pointerStartX = useRef<number | null>(null);
  const scrollStartX = useRef(0);

  const isDraggingRef = useRef(false);
  const suppressClickRef = useRef(false);

  const currentSpeedRef = useRef(autoScrollSpeed);
  const targetSpeedRef = useRef(autoScrollSpeed);

  const isManualScrollingRef = useRef(false);
  const manualScrollTimeoutRef = useRef<number | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const [isPointerDown, setIsPointerDown] = useState(false);

  const [activeItem, setActiveItem] = useState<TimelineItem | null>(null);

  const isPaused = isHovered || isPointerDown || activeItem !== null;

  useEffect(() => {
    if (isPaused) {
      targetSpeedRef.current = 0;
      return;
    }

    currentSpeedRef.current = Math.max(currentSpeedRef.current, 1);

    targetSpeedRef.current = autoScrollSpeed;
  }, [isPaused, autoScrollSpeed]);

  useEffect(() => {
    const viewportNode = viewportRef.current;
    const setNode = setRef.current;

    if (!viewportNode || !setNode) {
      return;
    }
    const viewport = viewportNode;
    const set = setNode;

    let frameId = 0;
    let previousTime = performance.now();

    const initializePosition = () => {
      const loopWidth = set.offsetWidth;

      if (loopWidth > 0) {
        viewport.scrollLeft = loopWidth;
      }
    };

    initializePosition();

    function animate(time: number) {
      const deltaTime = Math.min(time - previousTime, 50);

      previousTime = time;

      currentSpeedRef.current +=
        (targetSpeedRef.current - currentSpeedRef.current) * 0.04;

      if (
        !isDraggingRef.current &&
        !isManualScrollingRef.current &&
        Math.abs(currentSpeedRef.current) > 0.01
      ) {
        viewport.scrollLeft += (currentSpeedRef.current * deltaTime) / 1000;
      }

      const loopWidth = set.offsetWidth;

      if (loopWidth > 0) {
        if (viewport.scrollLeft >= loopWidth * 2) {
          viewport.scrollLeft -= loopWidth;
        }
        if (viewport.scrollLeft <= 0) {
          viewport.scrollLeft += loopWidth;
        }
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    if (!viewport) return;
    const target = event.target as HTMLElement;

    if (target.closest("button, a, input, textarea, select")) {
      return;
    }

    pointerStartX.current = event.clientX;

    scrollStartX.current = viewport.scrollLeft;

    isDraggingRef.current = false;

    setIsPointerDown(true);

    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    if (!viewport || pointerStartX.current === null) {
      return;
    }

    const delta = event.clientX - pointerStartX.current;

    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      isDraggingRef.current = true;
      suppressClickRef.current = true;
    }

    if (!isDraggingRef.current) {
      return;
    }

    viewport.scrollLeft = scrollStartX.current - delta;
  }

  function handlePointerEnd(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    pointerStartX.current = null;
    isDraggingRef.current = false;

    setIsPointerDown(false);

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  }

  function handleCardClick(item: TimelineItem) {
    if (suppressClickRef.current) {
      return;
    }

    setActiveItem(item);
  }

  function scrollByDirection(direction: "previous" | "next") {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const card = viewport.querySelector<HTMLElement>("[data-timeline-card]");

    if (!card) return;

    const cardParent = card.parentElement;

    const parentStyle = cardParent ? window.getComputedStyle(cardParent) : null;

    const gap = parentStyle
      ? Number.parseFloat(parentStyle.columnGap || parentStyle.gap || "0")
      : 0;

    const distance = card.getBoundingClientRect().width + gap;
    isManualScrollingRef.current = true;

    currentSpeedRef.current = 0;
    targetSpeedRef.current = 0;

    viewport.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });

    if (manualScrollTimeoutRef.current !== null) {
      window.clearTimeout(manualScrollTimeoutRef.current);
    }

    manualScrollTimeoutRef.current = window.setTimeout(() => {
      isManualScrollingRef.current = false;
      if (isHovered || isPointerDown || activeItem !== null) {
        targetSpeedRef.current = 0;
      } else {
        targetSpeedRef.current = autoScrollSpeed;
      }
    }, 500);
  }
  useEffect(() => {
    const viewportNode = viewportRef.current;
    const setNode = setRef.current;

    if (!viewportNode || !setNode) {
      return;
    }

    const viewport = viewportNode;
    const set = setNode;

    let frameId = 0;
    let previousTime = performance.now();

    const loopWidth = set.offsetWidth;

    if (loopWidth > 0) {
      viewport.scrollLeft = loopWidth * 2;
    }

    function animate(time: number) {
      const deltaTime = Math.min(time - previousTime, 50);

      previousTime = time;

      currentSpeedRef.current +=
        (targetSpeedRef.current - currentSpeedRef.current) * 0.04;

      if (
        !isDraggingRef.current &&
        !isManualScrollingRef.current &&
        Math.abs(currentSpeedRef.current) > 0.01
      ) {
        viewport.scrollLeft += (currentSpeedRef.current * deltaTime) / 1000;
      }

      const currentLoopWidth = set.offsetWidth;

      if (currentLoopWidth > 0) {
        if (viewport.scrollLeft >= currentLoopWidth * 3) {
          viewport.scrollLeft -= currentLoopWidth;
        }
        if (viewport.scrollLeft <= currentLoopWidth) {
          viewport.scrollLeft += currentLoopWidth;
        }
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);

      if (manualScrollTimeoutRef.current !== null) {
        window.clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  function renderItems(prefix: string, hidden = false) {
    return items.map((item) => (
      <TimelineCard
        key={`${prefix}-${item.id}`}
        item={item}
        onClick={hidden ? () => {} : handleCardClick}
      />
    ));
  }

  return (
    <>
      <section className={`w-full ${className}`} {...props}>
        <div
          className="
            mb-5
            flex
            justify-end
            gap-2
          "
        >
          <IconButton
            icon={<ChevronLeft size={18} />}
            label="Scorri indietro"
            animation="glow"
            onClick={() => scrollByDirection("previous")}
          />

          <IconButton
            icon={<ChevronRight size={18} />}
            label="Scorri avanti"
            animation="glow"
            onClick={() => scrollByDirection("next")}
          />
        </div>

        <div
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-label="Linea del tempo TEA"
          className="
            w-full

            overflow-x-hidden
            overflow-y-visible

            cursor-grab
            select-none
            touch-pan-y

            active:cursor-grabbing

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-tea-blue
            focus-visible:ring-offset-4
          "
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") {
              setIsHovered(true);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              setIsHovered(false);
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              scrollByDirection("previous");
            }

            if (event.key === "ArrowRight") {
              scrollByDirection("next");
            }
          }}
        >
          <div className="flex w-max">
            <div
              aria-hidden="true"
              className="
      flex
      shrink-0
      items-stretch
      gap-5
      pr-5
    "
            >
              {renderItems("before-2", true)}
            </div>

            <div
              aria-hidden="true"
              className="
      flex
      shrink-0
      items-stretch
      gap-5
      pr-5
    "
            >
              {renderItems("before-1", true)}
            </div>

            <div
              ref={setRef}
              className="
      flex
      shrink-0
      items-stretch
      gap-5
      pr-5
    "
            >
              {renderItems("main")}
            </div>

            <div
              aria-hidden="true"
              className="
      flex
      shrink-0
      items-stretch
      gap-5
      pr-5
    "
            >
              {renderItems("after-1", true)}
            </div>

            <div
              aria-hidden="true"
              className="
      flex
      shrink-0
      items-stretch
      gap-5
      pr-5
    "
            >
              {renderItems("after-2", true)}
            </div>
          </div>
        </div>
      </section>

      {activeItem && (
        <Modal
          open
          onClose={() => setActiveItem(null)}
          eyebrow="Timeline"
          title={activeItem.title}
          period={String(activeItem.year)}
          description={activeItem.description}
          image={activeItem.image}
          gallery={activeItem.images}
          size="lg"
        >
          {activeItem.client && (
            <div className="mt-6">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-black/40
                "
              >
                Committente
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-black/70
                "
              >
                {activeItem.client}
              </p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}