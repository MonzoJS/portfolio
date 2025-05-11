'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ClientOnly from '@/components/ClientOnly';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Проверяем, что мы на клиенте
    if (typeof window !== 'undefined') {
      // Получаем сохраненный язык из localStorage при загрузке
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else {
        // Если язык не сохранен, определяем его на основе браузера
        const browserLanguage = navigator.language.split('-')[0];
        setLanguage(browserLanguage === 'ru' ? 'ru' : 'en');
      }
    }
  }, []);

  const toggleLanguage = () => {
    if (typeof window !== 'undefined') {
      const newLanguage = language === 'ru' ? 'en' : 'ru';
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ClientOnly>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ClientOnly>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 