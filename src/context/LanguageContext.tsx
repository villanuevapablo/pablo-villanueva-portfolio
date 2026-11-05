import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/portfolio';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Safe storage reader for Safari private mode & storage-blocked environments
const getInitialLanguage = (): Language => {
  try {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const saved = window.localStorage.getItem('pv_portfolio_lang');
      if (saved === 'es' || saved === 'en') {
        return saved;
      }
    }
  } catch (err) {
    // Safari Private Browsing mode or SecurityError when cookies/storage are disabled
    console.warn('LocalStorage is restricted in this browser environment. Using default language.', err);
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('pv_portfolio_lang', lang);
      }
    } catch (err) {
      // Ignore write errors in Safari Private mode
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    try {
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = language;
      }
    } catch {
      // Ignore DOM document quirks
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
