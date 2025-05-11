'use client';

import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import ClientOnly from '@/components/ClientOnly';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', newTheme);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <ClientOnly>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Переключить тему"
      >
        {theme === 'light' ? (
          (() => {
            const Icon = FaMoon as React.ComponentType<any>;
            return <Icon className="w-5 h-5 text-gray-800" />;
          })()
        ) : (
          (() => {
            const Icon = FaSun as React.ComponentType<any>;
            return <Icon className="w-5 h-5 text-yellow-500" />;
          })()
        )}
      </button>
    </ClientOnly>
  );
} 