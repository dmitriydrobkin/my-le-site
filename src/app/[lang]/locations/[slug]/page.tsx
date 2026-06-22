import { CITIES } from '@/data/cities';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ServicesSlider } from '@/components/ServicesSlider';
import { BentoAdvantages } from '@/components/BentoAdvantages';
import { TopPortfolio } from '@/components/TopPortfolio';
import { FinalCTA } from '@/components/FinalCTA';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import { ProductMenuWrapper } from './ProductMenuWrapper';
import { getLocalizedProjects } from '@/server/functions/getProjects';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const city = CITIES.find(c => c.slug === params.slug);
  if (!city) {
    return {
      title: 'Город не найден',
    };
  }

  return {
    title: `Разработка сайтов и Telegram ботов ${city.namePrepositional} | Malyshev.Dev`,
    description: `Профессиональная разработка сайтов, лендингов, визиток и умных Telegram ботов для бизнеса ${city.namePrepositional}. 100% фокус на вашем проекте и современные решения.`,
  };
}

export default async function CityPage({ params }: { params: { slug: string, lang: string } }) {
  const city = CITIES.find(c => c.slug === params.slug);
  
  if (!city) {
    notFound();
  }

  let projectsData: any[] = [];
  try {
    projectsData = await getLocalizedProjects(params.lang);
  } catch (error) {
    console.error('Failed to fetch projects on city page:', error);
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-24 pb-24">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full bg-surface border border-ink/5 mb-8">
            <span className="font-sans text-xs font-bold tracking-widest text-ink/60 uppercase">
              РАБОТАЮ ПО ВСЕЙ УКРАИНЕ
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-10">
            DIGITAL РЕШЕНИЯ
            <br />
            ДЛЯ БИЗНЕСА <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan uppercase">{city.nameGenitive}</span>
          </h1>
          <p className="font-sans text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-12">
            Ищете надежного разработчика {city.namePrepositional}? Я проектирую и запускаю высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7. Если вам нужно <strong>заказать сайт {city.namePrepositional}</strong> — вы по адресу.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-neon-coral hover:-translate-y-1 flex items-center gap-3 group">
              Обсудить проект
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/portfolio" className="flex items-center gap-3 text-ink font-bold hover:text-cyan transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-cyan/30 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              Посмотреть работы
            </Link>
          </div>
        </div>
      </section>

      {/* 2. РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА (SPLIT + HORIZONTAL SCROLL) */}
      <ServicesSlider lang={params.lang} title={`РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА ${city.namePrepositional.toUpperCase()}`} />

      {/* 2.5 ОБО МНЕ (Адаптация) */}
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative bg-ink rounded-[2rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 overflow-hidden shadow-2xl">
            {/* Декоративные фоновые элементы */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-coral/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Левая часть: Акцентный заголовок */}
            <div className="relative z-10 lg:w-1/3 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs font-bold text-white/50 uppercase tracking-widest mb-4 block">Обо мне</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ваш партнер <br/>
                  в Digital <span className="text-coral">🤝</span>
                </h2>
              </div>
              
              <div className="hidden lg:flex items-center gap-4 mt-12">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50">
                    <span className="font-mono text-sm">&lt;/&gt;</span>
                 </div>
                 <span className="font-sans text-xs font-bold text-white/30 uppercase tracking-widest">
                   Разработчик / Дизайнер
                 </span>
              </div>
            </div>

            {/* Правая часть: текст */}
            <div className="relative z-10 lg:w-2/3 flex flex-col justify-center">
              <div className="space-y-6 font-sans text-white/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Хоть я и могу находиться в другом городе, современные технологии стирают все границы. Я успешно сотрудничаю с предпринимателями {city.namePrepositional} и по всей Украине.
                </p>
                <p>
                  Мой фокус — <strong className="font-medium text-white">современные, легкие сайты и умные Telegram-боты</strong>. Малому и среднему бизнесу нужен рабочий инструмент, который загружается за секунду и стабильно приносит заявки.
                </p>
                <p>
                  Я всегда на связи, работаю прозрачно и погружаюсь в проект так, словно мы сидим в одном офисе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <ProductMenuWrapper lang={params.lang} />

      {/* 4. ПРИМЕРЫ РАБОТ */}
      <TopPortfolio projectsData={projectsData} lang={params.lang} />

      {/* 5. ФИНАЛЬНЫЙ CTA БЛОК */}
      <FinalCTA lang={params.lang} />
      
    </div>
  );
}
