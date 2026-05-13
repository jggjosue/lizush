"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "es" | "en";

interface LanguageCtx {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageCtx>({ lang: "es", toggleLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lizush-lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  function toggleLang() {
    setLang(prev => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("lizush-lang", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
