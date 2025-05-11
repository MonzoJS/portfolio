'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const projects = [
  {
    title: {
      ru: 'Электронная коммерция',
      en: 'E-commerce Platform',
    },
    description: {
      ru: 'Современная платформа электронной коммерции с интеграцией платежных систем и управлением товарами.',
      en: 'Modern e-commerce platform with payment system integration and product management.',
    },
    image: '/projects/ecommerce.jpg',
    link: 'https://example.com/ecommerce',
  },
  {
    title: {
      ru: 'Корпоративный сайт',
      en: 'Corporate Website',
    },
    description: {
      ru: 'Корпоративный сайт с современным дизайном и адаптивной версткой для крупной компании.',
      en: 'Corporate website with modern design and responsive layout for a large company.',
    },
    image: '/projects/corporate.jpg',
    link: 'https://example.com/corporate',
  },
  {
    title: {
      ru: 'Мобильное приложение',
      en: 'Mobile App',
    },
    description: {
      ru: 'Кроссплатформенное мобильное приложение с нативным пользовательским интерфейсом.',
      en: 'Cross-platform mobile app with native user interface.',
    },
    image: '/projects/mobile.jpg',
    link: 'https://example.com/mobile',
  },
];

export default memo(function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title[language]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 will-change-transform"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title[language]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description[language]}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    id={`project-view-btn-${project.title[language]}`}
                  >
                    {t.viewProject}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}); 