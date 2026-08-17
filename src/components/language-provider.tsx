"use client";

import * as React from "react";
import { type Lang, translate } from "@/i18n/dictionary";

type Localized = { id: string; en: string };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: (key: string) => string;
  pick: (value: Localized) => string;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "jembawan-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
    } else if (navigator.language.toLowerCase().startsWith("id")) {
      setLangState("id");
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = React.useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      tr: (key: string) => translate(key, lang),
      pick: (v: Localized) => v[lang],
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
