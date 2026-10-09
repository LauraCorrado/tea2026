import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { IconButton } from "@/components/ui";
import { useAccessibility } from "@/hooks/useAccessibility";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const { settings } = useAccessibility();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior:
        settings.reduceMotion || prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <div
      className={`
        fixed
        bottom-5
        right-4
        z-60

        transition-[opacity,transform]
        duration-300

        sm:bottom-6
        sm:right-6

        ${
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
      aria-hidden={!visible}
    >
      <IconButton
        icon={<ArrowUp size={20} aria-hidden="true" />}
        label="Torna all'inizio della pagina"
        size="lg"
        animation="glow"
        onClick={handleClick}
        tabIndex={visible ? 0 : -1}
        className="bg-site-surface text-site-text shadow-lg hover:bg-site-surface-alt"
      />
    </div>
  );
}