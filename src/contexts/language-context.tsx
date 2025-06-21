"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/translations/en";
import { ar } from "@/translations/ar";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

export type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const translations = { en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const t = (key: keyof Translations): string => {
    const currentTranslations = translations[language] as Translations;
    const fallbackTranslations = translations.en as Translations;
    return currentTranslations[key] || fallbackTranslations[key] || key;
  };

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 