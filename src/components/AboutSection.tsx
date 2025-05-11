'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-xs mx-auto"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-lg" />
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.25)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="relative z-10"
              >
                <Image
                  src="/avatar-said.jpg"
                  alt="Said photo"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                Саид — Веб-разработчик, Frontend Developer, UI/UX Designer
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                Я специализируюсь на создании современных, адаптивных и визуально привлекательных веб-сайтов и интерфейсов. За 2 года работы реализовал проекты для малого бизнеса и стартапов, уделяя особое внимание деталям, анимациям и пользовательскому опыту. Мои сильные стороны — креативность, глубокое понимание UI/UX, владение современными технологиями и любовь к чистому коду.
                <br />
                <span className="block mt-4">Город: <b>Москва, Россия</b><br/>Email: <a href="mailto:saydy059@gmail.com" className="underline text-primary-600">saydy059@gmail.com</a><br/>GitHub: <a href="https://github.com/MonzoJS" className="underline text-primary-600" target="_blank">MonzoJS</a><br/>Telegram: <a href="https://t.me/Monzo_2" className="underline text-primary-600" target="_blank">@Monzo_2</a></span>
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/file/d/17KIvAguSguRJ6IKj4qgGYkYHsjy4DLon/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Скачать резюме (PDF)
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-lg border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  Связаться со мной
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 