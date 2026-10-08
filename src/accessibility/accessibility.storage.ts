import type { AccessibilityPresetName } from "./accessibility.presets";
import type { AccessibilitySettings } from "./accessibility.types";

const STORAGE_KEY = "tea-accessibility-settings";

export interface StoredAccessibilityState {
  settings: AccessibilitySettings;
  activePreset: AccessibilityPresetName | null;
  presetBaseSettings: AccessibilitySettings | null;
}

export function loadAccessibilityState(): StoredAccessibilityState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "settings" in parsed
    ) {
      return parsed as StoredAccessibilityState;
    }

    return {
      settings: parsed as AccessibilitySettings,
      activePreset: null,
      presetBaseSettings: null,
    };
  } catch {
    return null;
  }
}

export function saveAccessibilityState(
  state: StoredAccessibilityState,
) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state),
    );
  } catch {
    // Il browser potrebbe impedire l'accesso a localStorage.
  }
}