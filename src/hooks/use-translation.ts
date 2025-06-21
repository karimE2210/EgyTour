"use client";

import { useLanguage } from "@/contexts/language-context";

export function useTranslation(): { t: (key: string) => string } {
  const { t, language, setLanguage } = useLanguage();

  return {
    t,
    language,
    setLanguage,
    isRTL: language === "ar",
  };
} 