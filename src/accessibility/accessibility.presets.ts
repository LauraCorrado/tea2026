import type { AccessibilitySettings } from "./accessibility.types";

export type AccessibilityPresetName =
    | "lowVision"
    | "cognitiveSupport"
    | "reducedDistractions"
    | "senior";

export interface AccessibilityPresetDefinition {
    label: string;
    description: string;
    color: "blue" | "green" | "orange" | "red";
    settings: Partial<AccessibilitySettings>;
}

// centrale controllo per preset a77y
export const accessibilityPresets: Record<
    AccessibilityPresetName,
    AccessibilityPresetDefinition
> = {
    lowVision: {
        label: "Supporto per ipovisione",
        description:
            "Aumenta leggibilità, dimensione dei caratteri e facilità di orientamento",
        color: "blue",

        settings: {
            fontScale: 125,
            lineHeight: 1.7,
            letterSpacing: 0.02,
            highlightHeadings: true,
            largeCursor: true,
        },
    },

    cognitiveSupport: {
        label: "Supporto cognitivo e alla lettura",
        description:
            "Riduce il carico visivo e facilita la lettura e l'individuazione dei contenuti",
        color: "orange",

        settings: {
            highlightHeadings: true,
            fontScale: 110,
            lineHeight: 1.8,
            letterSpacing: 0.03,
            readingGuide: true,
            readingMask: false,
        },
    },

    reducedDistractions: {
        label: "Riduzione distrazioni",
        description:
            "Riduce il movimento e concentra l'attenzione sulla lettura",
        color: "green",

        settings: {
            readingMask: true,
            readingGuide: false,
        },
    },

    senior: {
        label: "Supporto per persone anziane",
        description:
            "Aumenta la leggibilità e rende più semplice l'interazione con i contenuti",
        color: "red",

        settings: {
            reduceMotion: true,
            highlightHeadings: true,
            fontScale: 120,
            lineHeight: 1.7,
            letterSpacing: 0.01,
            largeCursor: true,
        },
    },
};

export const accessibilityPresetOrder: AccessibilityPresetName[] = [
    "lowVision",
    "cognitiveSupport",
    "reducedDistractions",
    "senior",
];