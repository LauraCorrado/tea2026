import {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";

import { defaultAccessibilitySettings } from "./accessibility.defaults";

import {
  accessibilityPresets,
  type AccessibilityPresetName,
} from "./accessibility.presets";

import {
  loadAccessibilityState,
  saveAccessibilityState,
} from "./accessibility.storage";

import type { AccessibilitySettings } from "./accessibility.types";

interface AccessibilityContextValue {
  settings: AccessibilitySettings;

  activePreset: AccessibilityPresetName | null;

  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) => void;

  resetSettings: () => void;

  togglePreset: (preset: AccessibilityPresetName) => void;
}

export const AccessibilityContext =
  createContext<AccessibilityContextValue | null>(null);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider({
  children,
}: AccessibilityProviderProps) {
  const [initialState] = useState(() => {
    return loadAccessibilityState();
  });

  const [settings, setSettings] = useState<AccessibilitySettings>(
    initialState?.settings ?? defaultAccessibilitySettings,
  );

  const [activePreset, setActivePreset] =
    useState<AccessibilityPresetName | null>(
      initialState?.activePreset ?? null,
    );

  const [presetBaseSettings, setPresetBaseSettings] =
    useState<AccessibilitySettings | null>(
      initialState?.presetBaseSettings ?? null,
    );

  function updateSetting<K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));

    if (!activePreset) {
      return;
    }

    const presetSettings = accessibilityPresets[activePreset].settings;

    const settingBelongsToPreset = key in presetSettings;

    if (settingBelongsToPreset) {
      setActivePreset(null);
      setPresetBaseSettings(null);

      return;
    }

    setPresetBaseSettings((current) => {
      if (!current) {
        return current;
      }

      return {
        ...current,
        [key]: value,
      };
    });
  }

  function togglePreset(presetName: AccessibilityPresetName) {
    if (activePreset === presetName) {
      setSettings(presetBaseSettings ?? defaultAccessibilitySettings);

      setActivePreset(null);
      setPresetBaseSettings(null);

      return;
    }

    const baseSettings =
      activePreset && presetBaseSettings ? presetBaseSettings : settings;

    setPresetBaseSettings(baseSettings);

    setSettings({
      ...baseSettings,
      ...accessibilityPresets[presetName].settings,
    });

    setActivePreset(presetName);
  }

  function resetSettings() {
    setSettings(defaultAccessibilitySettings);
    setActivePreset(null);
    setPresetBaseSettings(null);
  }

  useEffect(() => {
    saveAccessibilityState({
      settings,
      activePreset,
      presetBaseSettings,
    });
  }, [settings, activePreset, presetBaseSettings]);

  useLayoutEffect(() => {
    const root = document.documentElement;

    root.dataset.reduceMotion = String(settings.reduceMotion);

    root.dataset.darkMode = String(settings.darkMode);

    root.dataset.highlightHeadings = String(settings.highlightHeadings);

    root.dataset.largeCursor = String(settings.largeCursor);

    root.dataset.lineHeightAdjusted = String(
      settings.lineHeight !== defaultAccessibilitySettings.lineHeight,
    );

    root.dataset.letterSpacingAdjusted = String(
      settings.letterSpacing !== defaultAccessibilitySettings.letterSpacing,
    );

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
    <AccessibilityContext.Provider
      value={{
        settings,
        activePreset,
        updateSetting,
        resetSettings,
        togglePreset,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}