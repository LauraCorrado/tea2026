import { createContext, useEffect, useState, type ReactNode } from "react";

export type LanguageCode = "it" | "en";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "tea-language";

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === "it" || stored === "en") {
      return stored;
    }

    return "it";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);

    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}