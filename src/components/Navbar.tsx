'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { href: '/', label: { ru: 'Главная', en: 'Home' } },
  { href: '#about', label: { ru: 'Обо мне', en: 'About' } },
  { href: '#skills', label: { ru: 'Навыки', en: 'Skills' } },
  { href: '#projects', label: { ru: 'Проекты', en: 'Projects' } },
  { href: '#services', label: { ru: 'Услуги', en: 'Services' } },
  { href: '#testimonials', label: { ru: 'Отзывы', en: 'Testimonials' } },
  { href: '#contact', label: { ru: 'Контакты', en: 'Contact' } },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav
      className="fixed w-full z-50 bg-transparent flex justify-center items-center py-2"
    >
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-primary-900/80 via-secondary-900/80 to-primary-900/80 backdrop-blur-xl shadow-2xl border border-white/10 dark:border-gray-700/10 px-10">
        <div className="flex items-center justify-center h-16 w-full">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 drop-shadow-lg mr-8">
            Portfolio
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-all duration-300 px-3 py-1 rounded-xl
                  ${pathname === item.href
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow font-bold underline underline-offset-4'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'}
                `}
              >
                {item.label[language]}
              </Link>
            ))}
            {/* Переключатель языка */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-1 rounded-full text-base font-medium backdrop-blur bg-white/30 border border-white/20 shadow-md text-gray-900 dark:text-white hover:bg-white/50 transition-all duration-300"
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>
          </div>

          {/* Мобильная кнопка меню */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white transition-colors ml-auto"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-0 left-0 w-full h-full z-40 backdrop-blur-2xl bg-gradient-to-br from-primary-900/95 to-secondary-900/95 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col items-center space-y-6 mt-20">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-semibold transition-all duration-300 px-4 py-2 rounded-xl
                      ${pathname === item.href
                        ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow font-bold underline underline-offset-4'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'}
                    `}
                  >
                    {item.label[language]}
                  </Link>
                ))}
                {/* Переключатель языка для мобильной версии */}
                <button
                  onClick={toggleLanguage}
                  className="mt-2 px-4 py-1 rounded-full text-lg font-medium backdrop-blur bg-white/30 border border-white/20 shadow-md text-gray-900 dark:text-white hover:bg-white/50 transition-all duration-300 w-fit"
                >
                  {language === 'ru' ? 'EN' : 'RU'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ThemeToggle />
    </nav>
  );
} 