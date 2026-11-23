import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANGUAGE, LANGUAGES, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'language';
const SUPPORTED = LANGUAGES.map((l) => l.code);

// Saved choice → browser language (if supported) → default.
const initialLanguage = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  const browser = (navigator.languages || [navigator.language])
    .map((l) => String(l).slice(0, 2).toLowerCase())
    .find((l) => SUPPORTED.includes(l));
  return browser || DEFAULT_LANGUAGE;
};

const get = (obj, path) => path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((code) => {
    if (!SUPPORTED.includes(code)) return;
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, []);

  // t('nav.home') → text in the current language, falling back to the default language.
  const t = useCallback(
    (path) => get(TRANSLATIONS[lang], path) ?? get(TRANSLATIONS[DEFAULT_LANGUAGE], path) ?? path,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
};
