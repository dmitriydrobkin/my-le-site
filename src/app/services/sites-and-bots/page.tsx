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
  hero_badge: 'Автоматизированные системы привлечения клиентов',
  hero_title_1: 'САЙТЫ И TG-БОТЫ,',
  hero_title_2: 'КОТОРЫЕ РАБОТАЮТ 24/7',
  hero_description: 'Пока вы отдыхаете, ваша воронка конвертирует трафик в прибыль. Мгновенный захват внимания, автоматический прогрев лидов и экономия времени ваших менеджеров.',
};

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Автосалон "Premium Auto"',
    description: 'Корпоративный сайт + бот для квалификации на тест-драйв. Увеличение конверсии на 45%.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', 
  },
  {
    id: 2,
    title: 'Сеть кофеен "Morning Rush"',
    description: 'Интернет-магазин зерен + программа лояльности в Telegram. +30% к повторным продажам.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800', 
  },
  {
    id: 3,
    title: 'Юридическое агентство "LexPro"',
    description: 'Высококонверсионный лендинг + бот первичной консультации. Сэкономлено 120 часов работы юристов.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', 
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
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-surface text-ink pt-32 pb-20">
        
        {/* Abstract Light Background Elements */}
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[120px] absolute -top-[10%] -left-[10%] animate-float" />
          <div className="w-[600px] h-[600px] bg-coral/10 rounded-full blur-[100px] absolute bottom-[10%] right-[10%] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* CSS-сцена поверх (3D абстракция) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <Scene />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-fade-in-up flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-10 rounded-full border border-coral/20 bg-white/60 backdrop-blur-md shadow-glass">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse shadow-neon-coral" />
            <span className="font-sans text-[11px] tracking-widest text-ink/80 font-bold uppercase">
              {settings?.hero_badge ?? DEFAULT_TEXTS.hero_badge}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-ink mb-8 leading-[1.1]">
            {settings?.hero_title_1 ?? DEFAULT_TEXTS.hero_title_1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan drop-shadow-sm">
              {settings?.hero_title_2 ?? DEFAULT_TEXTS.hero_title_2}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl font-sans text-lg font-medium leading-relaxed text-ink/60 mb-14">
            {settings?.hero_description ?? DEFAULT_TEXTS.hero_description}
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row w-full sm:w-auto">
            <QuizTrigger className="btn-primary w-full sm:w-auto text-base px-10 py-4 shadow-neon-coral">
              Рассчитать стоимость проекта
            </QuizTrigger>
            <Link href="#portfolio" className="btn-outline w-full sm:w-auto text-base px-10 py-4 border-ink/20 hover:bg-white">
              Смотреть кейсы
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition / Features Section */}
      <section id="how-it-works" className="relative py-32 bg-white border-y border-ink/5 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="section-title">Почему это работает?</h2>
            <p className="section-subtitle mx-auto">Синергия сайта и мессенджера дает максимальный результат с первого месяца.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
            <div className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-glass">
              <div className="w-14 h-14 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-neon-coral">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Экономия времени</h3>
              <p className="font-sans text-ink/60 leading-relaxed font-medium">Ваши менеджеры больше не тратят часы на холодные звонки. Вы получаете только прогретых лидов, готовых к покупке.</p>
            </div>
            <div className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 delay-100 shadow-sm hover:shadow-glass">
              <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-[0_0_20px_0_rgba(0,229,255,0.3)]">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Умная экосистема</h3>
              <p className="font-sans text-ink/60 leading-relaxed font-medium">Сайт мгновенно привлекает внимание, а Телеграм-бот автоматически классифицирует и прогревает клиентов в фоне.</p>
            </div>
            <div className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 delay-200 shadow-sm hover:shadow-glass">
              <div className="w-14 h-14 rounded-2xl bg-ink/5 border border-ink/10 flex items-center justify-center mb-8 mx-auto lg:mx-0">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Рост прибыли</h3>
              <p className="font-sans text-ink/60 leading-relaxed font-medium">Обработка заявок 24/7 без выходных. Ни один горячий клиент больше не уйдет к конкурентам из-за долгого ответа.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="relative py-32 bg-surface text-ink overflow-hidden border-b border-ink/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="section-title mb-6">Бесшовная интеграция с вашим бизнесом</h2>
              <p className="section-subtitle mx-auto lg:mx-0 mb-10">Связываем лендинги, квизы и ботов напрямую с вашей любимой CRM, системами оплаты и аналитикой.</p>
              
              <ul className="space-y-6 font-sans text-ink/80 text-lg font-medium text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coral/10 text-coral flex items-center justify-center">✓</span>
                  Выгрузка лидов в AmoCRM, Bitrix24
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan/10 text-cyan-600 flex items-center justify-center">✓</span>
                  Оплата прямо в Telegram (Stripe, ЮKassa)
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ink/10 text-ink flex items-center justify-center">✓</span>
                  Сквозная аналитика трафика
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center aspect-square gap-4 hover:shadow-neon-coral transition-shadow duration-300">
                <div className="text-4xl">📱</div>
                <span className="font-display font-bold text-ink">Telegram</span>
              </div>
              <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center aspect-square gap-4 hover:shadow-[0_0_20px_0_rgba(0,229,255,0.4)] transition-shadow duration-300 mt-8">
                <div className="text-4xl">📊</div>
                <span className="font-display font-bold text-ink">AmoCRM</span>
              </div>
              <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center aspect-square gap-4 hover:shadow-glass transition-shadow duration-300 -mt-8">
                <div className="text-4xl">💳</div>
                <span className="font-display font-bold text-ink">Stripe</span>
              </div>
              <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center aspect-square gap-4 hover:shadow-glass transition-shadow duration-300">
                <div className="text-4xl">🤖</div>
                <span className="font-display font-bold text-ink">AI Agents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white text-ink relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">Избранные проекты</h2>
            <p className="section-subtitle mx-auto">Каждый кейс — это работающая машина по генерации прибыли.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="group glass-panel rounded-[2rem] overflow-hidden hover:shadow-glass-hover transition-all duration-500 hover:-translate-y-2 border border-ink/5">
                <div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 bg-white backdrop-blur-sm relative z-10 border-t border-ink/5">
                  <h3 className="font-display text-xl font-bold text-ink mb-3 group-hover:text-coral transition-colors">{item.title}</h3>
                  <p className="font-sans text-ink/60 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <QuizTrigger className="btn-primary px-12 py-5 text-lg shadow-neon-coral">
              Узнать, сколько я теряю без авто-воронки
            </QuizTrigger>
          </div>
        </div>
      </section>
    </>
  );
}