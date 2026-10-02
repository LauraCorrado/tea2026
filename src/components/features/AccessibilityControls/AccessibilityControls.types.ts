export interface AccessibilitySettings {
    reduceMotion: boolean;
    lowVision: boolean;
    adhdFriendly: boolean;
    cognitiveSupport: boolean;
    seniorMode: boolean;

    highContrast: boolean;
    darkMode: boolean;

    contentScale: number;
    highlightHeadings: boolean;
    fontScale: number;
    lineHeight: number;
    letterSpacing: number;

    largeCursor: boolean;
    readingMask: boolean;
    readingGuide: boolean;
}

export interface AccessibilityControlsProps {
    className?: string;
}