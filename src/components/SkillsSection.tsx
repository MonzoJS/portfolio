'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaDatabase, FaPalette } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const skills = [
  {
    name: { ru: 'HTML5, CSS3, Tailwind CSS', en: 'HTML5, CSS3, Tailwind CSS' },
    icon: SiTailwindcss,
    level: 95,
    color: '#06B6D4',
  },
  {
    name: { ru: 'JavaScript (ES6+), TypeScript', en: 'JavaScript (ES6+), TypeScript' },
    icon: SiTypescript,
    level: 90,
    color: '#3178C6',
  },
  {
    name: { ru: 'React, Next.js', en: 'React, Next.js' },
    icon: FaReact,
    level: 92,
    color: '#61DAFB',
  },
  {
    name: { ru: 'Framer Motion, GSAP', en: 'Framer Motion, GSAP' },
    icon: FaReact,
    level: 80,
    color: '#8B5CF6',
  },
  {
    name: { ru: 'Figma, Adobe XD', en: 'Figma, Adobe XD' },
    icon: FaFigma,
    level: 90,
    color: '#F24E1E',
  },
  {
    name: { ru: 'UI/UX дизайн', en: 'UI/UX Design' },
    icon: FaPalette,
    level: 95,
    color: '#6366F1',
  },
  {
    name: { ru: 'Адаптивная верстка', en: 'Responsive Layout' },
    icon: SiTailwindcss,
    level: 95,
    color: '#06B6D4',
  },
  {
    name: { ru: 'Мультиязычность (i18n)', en: 'Multilanguage (i18n)' },
    icon: FaReact,
    level: 80,
    color: '#0EA5E9',
  },
  {
    name: { ru: 'Работа с API', en: 'API Integration' },
    icon: FaNodeJs,
    level: 80,
    color: '#339933',
  },
];

export default function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name[language]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const Icon = skill.icon as React.ComponentType<any>;
                    return <Icon className="w-8 h-8" style={{ color: skill.color }} />;
                  })()}
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                    {skill.name[language]}
                  </h3>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}% {t.mastery}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 