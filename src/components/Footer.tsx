'use client';

import Link from 'next/link';
import { FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const navigation = {
  main: [
    { name: { ru: 'Главная', en: 'Home' }, href: '/' },
    { name: { ru: 'Портфолио', en: 'Portfolio' }, href: '#projects' },
    { name: { ru: 'Услуги', en: 'Services' }, href: '#services' },
    { name: { ru: 'Обо мне', en: 'About' }, href: '#about' },
    { name: { ru: 'Контакты', en: 'Contact' }, href: '#contact' },
    { name: { ru: 'Резюме', en: 'Resume' }, href: 'https://drive.google.com/file/d/17KIvAguSguRJ6IKj4qgGYkYHsjy4DLon/view?usp=drive_link', external: true },
    { name: { ru: 'Политика', en: 'Privacy Policy' }, href: '/privacy', external: false },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/MonzoJS',
      icon: FaGithub,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Monzo_2',
      icon: FaTelegram,
    },
    {
      name: 'Email',
      href: 'mailto:saydy059@gmail.com',
      icon: FaEnvelope,
    },
  ],
};

export default function Footer() {
  const { language } = useLanguage();
  const [year, setYear] = useState<number>(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex justify-center mb-6">
          <Link href="/" className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 drop-shadow-lg">
            Said
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          {navigation.main.map((item) => (
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
              >
                {item.name[language]}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
              >
                {item.name[language]}
              </Link>
            )
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-8">
          {navigation.social.map((item) => {
            const Icon = item.icon as React.ComponentType<any>;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
          &copy; {year} Саид. {language === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
} 