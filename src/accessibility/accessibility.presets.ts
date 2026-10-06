import type { AccessibilitySettings } from "./accessibility.types";

export type AccessibilityPresetName =
    | "lowVision"
    | "cognitiveSupport"
    | "reducedDistractions"
    | "senior";

export const accessibilityPresets: Record<
    AccessibilityPresetName,
    Partial<AccessibilitySettings>
> = {
    lowVision: {
        highContrast: true,
        fontScale: 125,
        lineHeight: 1.7,
        letterSpacing: 0.02,
        largeCursor: true,
    },

    cognitiveSupport: {
        reduceMotion: true,
        highlightHeadings: true,
        fontScale: 110,
        lineHeight: 1.8,
        letterSpacing: 0.03,
    },

    reducedDistractions: {
        reduceMotion: true,
        highlightHeadings: true,
        lineHeight: 1.7,
    },

    senior: {
        fontScale: 120,
        lineHeight: 1.7,
        letterSpacing: 0.01,
        highContrast: true,
        largeCursor: true,
    },
}