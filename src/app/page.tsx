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
  hero_badge: 'Автоматизированные системы привлечения',
  hero_title_1: 'САЙТЫ И ТЕЛЕГРАМ-БОТЫ,',
  hero_title_2: 'КОТОРЫЕ РАБОТАЮТ 24/7',
  hero_description: 'Пока вы отдыхаете, ваша воронка конвертирует трафик в прибыль. Мгновенный захват внимания, автоматический прогрев лидов и экономия времени ваших менеджеров.',
};

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Автосалон "Premium Auto"',
    description: 'Корпоративный сайт + бот для квалификации на тест-драйв. Увеличение конверсии на 45%.',
    image: '/portfolio/auto.jpg', 
  },
  {
    id: 2,
    title: 'Сеть кофеен "Morning Rush"',
    description: 'Интернет-магазин зерен + программа лояльности в Telegram. +30% к повторным продажам.',
    image: '/portfolio/coffee.jpg', 
  },
  {
    id: 3,
    title: 'Юридическое агентство "LexPro"',
    description: 'Высококонверсионный лендинг + бот первичной консультации. Сэкономлено 120 часов работы юристов.',
    image: '/portfolio/law.jpg', 
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
      {/* Hero Section (Profit & Automation) */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface text-ink pt-20">
        
        {/* Abstract Light Background Elements */}
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[120px] absolute -top-[10%] -left-[10%] animate-float" />
          <div className="w-[600px] h-[600px] bg-coral/10 rounded-full blur-[100px] absolute bottom-[10%] right-[10%] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* CSS-сцена поверх (3D абстракция) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <Scene />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center animate-fade-in-up flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-coral/20 bg-white/60 backdrop-blur-md shadow-glass">
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse shadow-neon-coral" />
            <span className="font-sans text-xs tracking-widest text-ink/80 font-bold uppercase">
              {settings?.hero_badge ?? DEFAULT_TEXTS.hero_badge}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-ink mb-6 leading-[1.05]">
            {settings?.hero_title_1 ?? DEFAULT_TEXTS.hero_title_1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">
              {settings?.hero_title_2 ?? DEFAULT_TEXTS.hero_title_2}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl font-sans text-lg md:text-xl font-medium leading-relaxed text-ink/60 mb-12">
            {settings?.hero_description ?? DEFAULT_TEXTS.hero_description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
            <QuizTrigger className="btn-primary w-full sm:w-auto">
              Рассчитать стоимость проекта
            </QuizTrigger>
            <Link href="#portfolio" className="btn-outline w-full sm:w-auto">
              Смотреть кейсы
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition / Features Section */}
      <section className="relative py-32 bg-white border-y border-ink/5 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Почему это работает?</h2>
            <p className="section-subtitle mx-auto">Автоматизация процессов, которая окупается с первого месяца.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
            <div className="glass-panel p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500">
              <div className="w-14 h-14 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-neon-coral">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Экономия времени</h3>
              <p className="font-sans text-ink/60 leading-relaxed font-medium">Ваши менеджеры больше не тратят часы на холодные звонки. Вы получаете только прогретых лидов, готовых к покупке.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500 delay-100">
              <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-[0_0_20px_0_rgba(0,229,255,0.3)]">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Умная экосистема</h3>
              <p className="font-sans text-ink/60 leading-relaxed font-medium">Сайт мгновенно привлекает внимание, а Телеграм-бот автоматически классифицирует и прогревает клиентов в фоне.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500 delay-200">
              <div className="w-14 h-14 rounded-2xl bg-ink/5 border border-ink/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Рост прибыли</h3>
              <p className="font-sans text-ink/60 leading-relaxed font-medium">Обработка заявок 24/7 без выходных. Ни один горячий клиент больше не уйдет к конкурентам из-за долгого ответа.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-surface text-ink relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">Избранные проекты</h2>
            <p className="section-subtitle mx-auto">Каждый кейс — это работающая машина по генерации прибыли.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="group glass-panel rounded-3xl overflow-hidden hover:shadow-glass-hover transition-all duration-500">
                <div className="aspect-[4/3] bg-ink/5 relative overflow-hidden flex items-center justify-center">
                  <span className="font-sans text-ink/30 text-xs font-bold tracking-widest uppercase">[{item.image.split('/').pop()}]</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 bg-white/50 backdrop-blur-sm border-t border-white/40">
                  <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-coral transition-colors">{item.title}</h3>
                  <p className="font-sans text-ink/60 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <QuizTrigger className="btn-primary px-10 py-4 text-base shadow-neon-coral">
              Узнать, сколько я теряю без авто-воронки
            </QuizTrigger>
          </div>
        </div>
      </section>
    </>
  );
}