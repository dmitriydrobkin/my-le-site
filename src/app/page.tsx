/**
 * Главная страница агентства: сайты и боты под ключ.
 */

import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/server/functions/settings';
import { QuizTrigger } from '@/components/QuizTrigger';
import Scene from '@/components/animations/Scene';

export const runtime = 'edge';

const DEFAULT_TEXTS = {
  hero_badge: 'Системы автоматизации бизнеса',
  hero_title_1: 'СКОЛЬКО ВЫ ТЕРЯЕТЕ',
  hero_title_2: 'БЕЗ САЙТА И ТЕЛЕГРАМ-БОТА?',
  hero_description: 'Превращаем ваш бизнес в автоматизированную систему продаж. Вы получаете готовый сайт и умного бота под ключ от одного надежного специалиста.',
};

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Автосалон "Premium Auto"',
    description: 'Корпоративный сайт + бот для записи на тест-драйв',
    image: '/portfolio/auto.jpg', // Placeholder
  },
  {
    id: 2,
    title: 'Сеть кофеен',
    description: 'Интернет-магазин зерен + программа лояльности в Telegram',
    image: '/portfolio/coffee.jpg', // Placeholder
  },
  {
    id: 3,
    title: 'Юридическое агентство',
    description: 'Лендинг с высокой конверсией + бот первичной квалификации',
    image: '/portfolio/law.jpg', // Placeholder
  }
];

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
      {/* Hero Section (Lost Profit) */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[#ff4400]/20 rounded-full blur-[120px] absolute -top-[20%] -left-[10%]" />
          <div className="w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] absolute bottom-[10%] right-[10%]" />
        </div>

        {/* CSS-сцена поверх */}
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
          <Scene />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center animate-fade-in flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#ff4400]/30 bg-[#ff4400]/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff4400] animate-pulse" />
            <span className="font-sans text-sm tracking-wide text-[#ff4400] font-medium uppercase">
              {settings?.hero_badge ?? DEFAULT_TEXTS.hero_badge}
            </span>
          </div>

          <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-6 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              {settings?.hero_title_1 ?? DEFAULT_TEXTS.hero_title_1}
            </span>
            <br />
            {settings?.hero_title_2 ?? DEFAULT_TEXTS.hero_title_2}
          </h1>

          <p className="mx-auto max-w-2xl font-sans text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-12">
            {settings?.hero_description ?? DEFAULT_TEXTS.hero_description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuizTrigger className="group relative px-8 py-4 bg-[#ff4400] hover:bg-[#e63d00] text-white rounded-full transition-all font-sans text-[15px] font-semibold tracking-wide overflow-hidden shadow-[0_0_40px_rgba(255,68,0,0.3)] hover:shadow-[0_0_60px_rgba(255,68,0,0.5)]">
              Рассчитать стоимость проекта
            </QuizTrigger>
            <Link href="#portfolio" className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white rounded-full transition-all font-sans text-[15px] font-medium tracking-wide backdrop-blur-md">
              Смотреть кейсы
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition / Features Section */}
      <section className="relative py-32 bg-black border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Экономия времени</h3>
              <p className="text-gray-400 leading-relaxed">Больше никаких долгих согласований с агентствами. Я веду проект от идеи до запуска и настройки рекламы.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Единая экосистема</h3>
              <p className="text-gray-400 leading-relaxed">Сайт привлекает клиентов, а Телеграм-бот автоматически прогревает и квалифицирует их.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Увеличение прибыли</h3>
              <p className="text-gray-400 leading-relaxed">Автоматизация позволяет обрабатывать заявки 24/7, не теряя ни одного горячего лида.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">Избранные проекты</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Каждый проект — это работающая машина по генерации и обработке лидов.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/30 transition-colors">
                <div className="aspect-[4/3] bg-white/5 relative overflow-hidden flex items-center justify-center">
                  <span className="text-white/20 text-sm tracking-widest uppercase">[{item.image.split('/').pop()}]</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <QuizTrigger className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-full transition-all font-sans text-[15px] font-bold tracking-wide">
              Хочу такой же результат
            </QuizTrigger>
          </div>
        </div>
      </section>
    </>
  );
}