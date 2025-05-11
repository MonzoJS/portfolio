'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { useState, useRef } from 'react';

const contactInfo = [
  {
    icon: FaEnvelope,
    title: { ru: 'Email', en: 'Email' },
    value: { ru: 'saydy059@gmail.com', en: 'saydy059@gmail.com' },
    link: 'mailto:saydy059@gmail.com',
  },
  {
    icon: FaLocationDot,
    title: { ru: 'Город', en: 'City' },
    value: { ru: 'Москва, Россия', en: 'Moscow, Russia' },
  },
  {
    icon: FaEnvelope,
    title: { ru: 'GitHub', en: 'GitHub' },
    value: { ru: 'MonzoJS', en: 'MonzoJS' },
    link: 'https://github.com/MonzoJS',
  },
  {
    icon: FaEnvelope,
    title: { ru: 'Telegram', en: 'Telegram' },
    value: { ru: '@Monzo_2', en: '@Monzo_2' },
    link: 'https://t.me/Monzo_2',
  },
];

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Позволяет Formspree отправить форму, но показывает toast
    setTimeout(() => {
      setShowToast(true);
      formRef.current?.reset();
      setTimeout(() => setShowToast(false), 4000);
    }, 100); // небольшая задержка для UX
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Контактная информация */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-primary-500/10 via-white/5 to-secondary-500/10 h-full w-full" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-display font-bold mb-8 text-gray-900 dark:text-white">
                  {t.contactInfo}
                </h3>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon as React.ComponentType<any>;
                    return (
                      <motion.div
                        key={info.title[language]}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="group/item flex items-center gap-4"
                      >
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-md group-hover/item:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-1">
                            {info.title[language]}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">
                            {info.link ? (
                              <a href={info.link} target="_blank" rel="noopener noreferrer" className="underline">{info.value[language]}</a>
                            ) : (
                              info.value[language]
                            )}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Форма обратной связи */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md shadow-2xl transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
            >
              <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-primary-500/20 via-white/10 to-secondary-500/20" />
              <div className="relative z-10 p-8">
                <form
                  className="space-y-6"
                  action="https://formspree.io/f/xrbqkerb"
                  method="POST"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 via-indigo-500 to-secondary-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                  >
                    {t.send}
                  </motion.button>
                </form>
                {showToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed left-1/2 bottom-10 z-50 -translate-x-1/2 px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl shadow-2xl font-semibold text-lg flex items-center gap-3"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {language === 'ru' ? 'Сообщение успешно отправлено!' : 'Message sent successfully!'}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 