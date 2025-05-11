'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { FaCode, FaPalette, FaChartLine } from 'react-icons/fa';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const services = [
  {
    title: { ru: 'Веб-разработка', en: 'Web Development' },
    description: {
      ru: 'Создание современных сайтов и веб-приложений под ключ: от лендингов до сложных платформ.',
      en: 'Development of modern websites and web applications: from landing pages to complex platforms.',
    },
    icon: FaCode,
    price: 'от 40 000 ₽',
  },
  {
    title: { ru: 'UI/UX Дизайн', en: 'UI/UX Design' },
    description: {
      ru: 'Разработка уникальных интерфейсов, прототипов и дизайн-систем с акцентом на удобство и эстетику.',
      en: 'Design of unique interfaces, prototypes, and design systems with a focus on usability and aesthetics.',
    },
    icon: FaPalette,
    price: 'от 25 000 ₽',
  },
  {
    title: { ru: 'Инфографика', en: 'Infographics' },
    description: {
      ru: 'Создание информативных и стильных инфографик для презентаций, сайтов и соцсетей.',
      en: 'Creation of informative and stylish infographics for presentations, websites, and social media.',
    },
    icon: FaChartLine,
    price: 'от 7 000 ₽',
  },
];

const projects = [
  {
    title: { ru: 'Modern Portfolio', en: 'Modern Portfolio' },
    description: { ru: 'Современный сайт-портфолио для дизайнера с анимациями и эффектом стекла.', en: 'Modern portfolio website for a designer with animations and glassmorphism.' },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://modern-portfolio-demo.vercel.app'
  },
  {
    title: { ru: 'Startup Landing', en: 'Startup Landing' },
    description: { ru: 'Лендинг для стартапа с адаптивным дизайном и поддержкой тем.', en: 'Landing page for a startup with responsive design and theme support.' },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Styled Components', 'i18n'],
    link: 'https://github.com/vercel/next.js'
  },
  {
    title: { ru: 'Creative Agency', en: 'Creative Agency' },
    description: { ru: 'Сайт креативного агентства с портфолио и анимациями.', en: 'Creative agency website with portfolio and animations.' },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js', 'GSAP', 'UI/UX'],
    link: 'https://creative-agency-demo.vercel.app'
  }
];

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <AboutSection />
      <SkillsSection />
      
      {/* Секция проектов */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title[language]}
                title={project.title[language]}
                description={project.description[language]}
                image={project.image}
                tags={project.tags}
                link={project.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Секция услуг */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.services.title}
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
        </div>
      </section>
      
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 