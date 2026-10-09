import { useEffect, useRef, useState } from "react";

import { useAccessibility } from "@/hooks/useAccessibility";

interface UseSectionRevealOptions {
    enabled?: boolean;
    threshold?: number;
    rootMargin?: string;
}

export function useSectionReveal({
    enabled = true,
    threshold = 0.12,
    rootMargin = "0px 0px -10% 0px",
}: UseSectionRevealOptions = {}) {
    const { settings } = useAccessibility();
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(!enabled);

    useEffect(() => {
        if (!enabled) {
            setIsVisible(true);
            return;
        }

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const revealImmediately = () => {
            if (settings.reduceMotion || mediaQuery.matches) {
                setIsVisible(true);
                return true;
            }

            return false;
        };

        if (revealImmediately()) {
            return;
        }

        const element = sectionRef.current;

        if (!element || !("IntersectionObserver" in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setIsVisible(true);
                observer.disconnect();
            },
            {
                threshold,
                rootMargin,
            },
        );

        observer.observe(element);

        const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setIsVisible(true);
                observer.disconnect();
            }
        };

        mediaQuery.addEventListener("change", handleMotionPreferenceChange);

        return () => {
            observer.disconnect();
            mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
        };
    }, [enabled, rootMargin, settings.reduceMotion, threshold]);

    return {
        sectionRef,
        isVisible,
    };
}