'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaChartBar } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: FaCode,
    title: {
      ru: 'Веб-разработка',
      en: 'Web Development',
    },
    description: {
      ru: 'Создание современных, быстрых и отзывчивых веб-сайтов с использованием передовых технологий.',
      en: 'Creating modern, fast, and responsive websites using cutting-edge technologies.',
    },
    price: 'от 15 000 руб',
  },
  {
    icon: FaPalette,
    title: {
      ru: 'UI/UX Дизайн',
      en: 'UI/UX Design',
    },
    description: {
      ru: 'Разработка интуитивно понятных и эстетически привлекательных пользовательских интерфейсов.',
      en: 'Developing intuitive and aesthetically pleasing user interfaces.',
    },
    price: 'от 10 000 руб',
  },
  {
    icon: FaChartBar,
    title: {
      ru: 'Инфографика',
      en: 'Infographics',
    },
    description: {
      ru: 'Создание информативных и визуально привлекательных графиков и диаграмм для вашего бизнеса.',
      en: 'Creating informative and visually appealing graphs and charts for your business.',
    },
    price: 'от 5 000 руб',
  },
];

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-800">
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
            {services.map((service, index) => (
              <ServiceCard
                key={service.title[language]}
                title={service.title[language]}
                description={service.description[language]}
                icon={service.icon}
                delay={index * 0.1}
                price={service.price}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 