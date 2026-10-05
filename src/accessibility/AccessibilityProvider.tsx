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

import type { AccessibilitySettings } from "./accessibility.types";

interface AccessibilityContextValue {
  settings: AccessibilitySettings;

  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) => void;

  resetSettings: () => void;
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

  useEffect(() => {
    saveAccessibilitySettings(settings);
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,
      updateSetting,
      resetSettings,
    }),
    [settings],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}