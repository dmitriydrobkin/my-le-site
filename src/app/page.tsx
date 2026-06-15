/**
 * Главная страница портфолио.
 */

import Link from 'next/link';
import { getSiteSettings } from '@/server/functions/settings';
import QuizStepper from '@/components/QuizStepper';
import Scene from '@/components/animations/Scene'; // Прямой импорт нашей новой легкой сцены

export const runtime = 'edge';

const DEFAULT_TEXTS = {
  hero_badge: 'Lead Creative Developer',
  hero_title_1: 'Создаю сайты, которые',
  hero_title_italic: 'приносят прибыль',
  hero_description: 'Премиальный дизайн, современные анимации и надежная архитектура. Выводим ваш бизнес на новый уровень.',
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
        
        {/* Легкая CSS-сцена */}
        <Scene />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-fade-in mt-20">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-blue-400 mb-6 font-semibold">
            {settings?.hero_badge ?? DEFAULT_TEXTS.hero_badge}
          </p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-8">
            {settings?.hero_title_1 ?? DEFAULT_TEXTS.hero_title_1}
            <br />
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {settings?.hero_title_italic ?? DEFAULT_TEXTS.hero_title_italic}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-12">
            {settings?.hero_description ?? DEFAULT_TEXTS.hero_description}
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="#quiz" className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full transition-all font-sans text-sm font-bold uppercase tracking-wider overflow-hidden">
              <span className="relative z-10">Рассчитать проект</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="#portfolio" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white rounded-full transition-all font-sans text-sm font-bold uppercase tracking-wider">
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