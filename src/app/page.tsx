/**
 * Главная страница портфолио.
 */

import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/server/functions/settings';
import QuizStepper from '@/components/QuizStepper';
import Scene from '@/components/animations/Scene'; // Прямой импорт нашей новой легкой сцены

export const runtime = 'edge';

const DEFAULT_TEXTS = {
  hero_badge: '2 spots available / 2 свободных места',
  hero_title_1: 'УЛЬТИМАТИВНЫЙ ДИЗАЙН ПАРТНЕР',
  hero_title_2: 'ДЛЯ УСПЕШНЫХ СТАРТАПОВ И БРЕНДОВ',
  hero_description: 'Мы предлагаем качественные услуги разработки и дизайна с прозрачным ценообразованием.',
};

export default async function HomePage() {
  let settings;
  
  try {
    settings = await getSiteSettings();
  } catch (error) {
    console.error('Ошибка загрузки настроек:', error);
    settings = {}; 
  }

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        
        {/* Background Image generated for the hero */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none flex items-center justify-center">
          <Image 
            src="/hero-bg.png" 
            alt="Hero Background" 
            fill 
            className="object-cover scale-110"
            priority
          />
        </div>

        {/* Легкая CSS-сцена поверх для эффектов свечения */}
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
          <Scene />
        </div>
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center animate-fade-in mt-20 flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-green-500/30 bg-green-500/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-sans text-sm tracking-wide text-green-400 font-medium">
              {settings?.hero_badge ?? DEFAULT_TEXTS.hero_badge}
            </span>
          </div>

          <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-8 leading-[1.1]">
            <span className="text-[#ff4400]">
              {settings?.hero_title_1 ?? DEFAULT_TEXTS.hero_title_1}
            </span>
            <br />
            {settings?.hero_title_2 ?? DEFAULT_TEXTS.hero_title_2}
          </h1>

          <p className="mx-auto max-w-2xl font-sans text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-12">
            {settings?.hero_description ?? DEFAULT_TEXTS.hero_description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#quiz" className="group relative px-8 py-4 bg-[#ff4400] hover:bg-[#e63d00] text-white rounded-full transition-all font-sans text-[15px] font-semibold tracking-wide overflow-hidden shadow-[0_0_40px_rgba(255,68,0,0.3)] hover:shadow-[0_0_60px_rgba(255,68,0,0.5)]">
              Рассчитать проект
            </Link>
            <Link href="#portfolio" className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white rounded-full transition-all font-sans text-[15px] font-medium tracking-wide">
              Смотреть работы
            </Link>
          </div>
        </div>
      </section>

      <section id="quiz" className="relative py-32 bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-4">Готовы начать?</h2>
            <p className="text-gray-400 text-lg">Ответьте на несколько вопросов, чтобы я мог подготовить предложение.</p>
          </div>
          <QuizStepper />
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32 lg:px-8 text-center text-white">
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-4">Избранные работы</h2>
        <p className="text-gray-500 text-lg">Здесь скоро появятся кейсы...</p>
      </section>
    </>
  );
}