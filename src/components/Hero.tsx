'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import Lottie from 'lottie-react';
import heroAnimation from '@/assets/hero-lottie.json.json';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-secondary-900">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent dark:from-primary-800/20" />
      
      {/* Анимированные фоновые круги */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-md will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-md will-change-transform"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Фото/анимация слева */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-8 md:mb-0 md:w-1/2 w-full flex-shrink-0"
          >
            <Lottie
              animationData={heroAnimation}
              loop={true}
              className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl bg-white/10"
            />
          </motion.div>

          {/* Текст и кнопки справа */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
            >
              {t.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {t.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
            >
              <Link
                href="#projects"
                id="view-portfolio-btn"
                className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">{t.viewPortfolio}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                href="#contact"
                id="contact-btn"
                className="group relative px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-primary-200 dark:border-primary-700 overflow-hidden"
              >
                <span className="relative z-10">{t.cta}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 