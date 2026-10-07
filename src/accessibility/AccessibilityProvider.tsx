import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { defaultAccessibilitySettings } from "./accessibility.defaults";
import {
  loadAccessibilitySettings,
  saveAccessibilitySettings,
} from "./accessibility.storage";
import {
  accessibilityPresets,
  type AccessibilityPresetName,
} from "./accessibility.presets";

import type { AccessibilitySettings } from "./accessibility.types";

interface AccessibilityContextValue {
  settings: AccessibilitySettings;

  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) => void;

  resetSettings: () => void;
  applyPreset: (preset: AccessibilityPresetName) => void;
}

export const AccessibilityContext =
  createContext<AccessibilityContextValue | null>(null);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider({
  children,
}: AccessibilityProviderProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    return loadAccessibilitySettings() ?? defaultAccessibilitySettings;
  });

  function updateSetting<K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function resetSettings() {
    setSettings(defaultAccessibilitySettings);
  }

  function applyPreset(preset: AccessibilityPresetName) {
    setSettings((current) => ({
      ...current,
      ...accessibilityPresets[preset],
    }));
  }

  useEffect(() => {
    saveAccessibilitySettings(settings);
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,
      updateSetting,
      resetSettings,
      applyPreset,
    }),
    [settings],
  );

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.reduceMotion = String(settings.reduceMotion);
    root.dataset.darkMode = String(settings.darkMode);
    root.dataset.highlightHeadings = String(settings.highlightHeadings);
    root.dataset.largeCursor = String(settings.largeCursor);

    root.style.setProperty(
      "--a11y-font-scale",
      String(settings.fontScale / 100),
    );

    root.style.setProperty("--a11y-line-height", String(settings.lineHeight));

    root.style.setProperty(
      "--a11y-letter-spacing",
      `${settings.letterSpacing}em`,
    );
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}