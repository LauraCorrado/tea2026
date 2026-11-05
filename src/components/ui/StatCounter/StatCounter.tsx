import { useEffect, useRef, useState } from "react";

import { useAccessibility } from "@/hooks/useAccessibility";

import type { StatCounterProps } from "./StatCounter.types";

export function StatCounter({
  value,
  label,
  description,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
  ...props
}: StatCounterProps) {
  const { settings } = useAccessibility();

  const rootRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const element = rootRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (settings.reduceMotion || prefersReducedMotion) {
      setCurrentValue(value);
      hasAnimated.current = true;

      return;
    }

    let frameId = 0;

    function startAnimation() {
      if (hasAnimated.current) return;

      hasAnimated.current = true;

      const startTime = performance.now();

      function animate(time: number) {
        const elapsed = time - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCurrentValue(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      }

      frameId = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        startAnimation();
        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [duration, settings.reduceMotion, value]);

  return (
    <div
      ref={rootRef}
      className={`
        min-w-0
        ${className}
      `}
      {...props}
    >
      <p
        className="
          text-4xl
          font-semibold
          leading-none
          text-site-red

          md:text-5xl
        "
        aria-label={`${prefix}${value}${suffix}`}
      >
        <span aria-hidden="true">
          {prefix}
          {currentValue.toLocaleString("it-IT")}
          {suffix}
        </span>
      </p>

      <p
        className="
          mt-3
          font-semibold
          text-site-text
        "
      >
        {label}
      </p>

      {description && (
        <p
          className="
            mt-1
            text-sm
            text-site-muted
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}