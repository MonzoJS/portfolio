'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const testimonials = [
  {
    name: { ru: 'Алексей Иванов', en: 'Alexey Ivanov' },
    position: { ru: 'Project Manager', en: 'Project Manager' },
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: {
      ru: 'Саид отлично справился с задачей по созданию сайта — всё быстро, качественно и с вниманием к деталям.',
      en: 'Said did a great job creating the website — everything was fast, high-quality, and with attention to detail.',
    },
  },
  {
    name: { ru: 'Мария Смирнова', en: 'Maria Smirnova' },
    position: { ru: 'Дизайнер', en: 'Designer' },
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: {
      ru: 'Очень понравился подход к UI/UX и современный стиль. Рекомендую!',
      en: 'Really liked the UI/UX approach and modern style. Highly recommend!',
    },
  },
  {
    name: { ru: 'Игорь Кузнецов', en: 'Igor Kuznetsov' },
    position: { ru: 'Владелец бизнеса', en: 'Business Owner' },
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: {
      ru: 'Сайт стал выглядеть премиально, а клиенты отмечают удобство и красоту интерфейса.',
      en: 'The site now looks premium, and clients note the convenience and beauty of the interface.',
    },
  },
  {
    name: { ru: 'Екатерина Лебедева', en: 'Ekaterina Lebedeva' },
    position: { ru: 'Маркетолог', en: 'Marketer' },
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: {
      ru: 'Быстро, профессионально, всегда на связи. Спасибо за работу!',
      en: 'Fast, professional, always in touch. Thank you for your work!',
    },
  },
];

export default memo(function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name[language]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative will-change-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="relative w-12 h-12 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name[language]}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white">
                        {testimonial.name[language]}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position[language]}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {(() => {
                      const Icon = FaQuoteLeft as React.ComponentType<any>;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </motion.div>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.text[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}); 