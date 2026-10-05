import type { AccessibilitySettings } from "./accessibility.types";

const STORAGE_KEY = "tea-accessibility-settings";

export function loadAccessibilitySettings(): AccessibilitySettings | null {
    try {
        const storedSettings = localStorage.getItem(STORAGE_KEY);

        if (!storedSettings) {
            return null;
        }

        return JSON.parse(storedSettings) as AccessibilitySettings;
    } catch {
        return null;
    }
}

export function saveAccessibilitySettings(
    settings: AccessibilitySettings,
) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(settings),
        );
    } catch {
        // il browser potrebbe impedire l'accesso a local storage
    }
}