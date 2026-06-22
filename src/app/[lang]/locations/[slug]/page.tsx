import { CITIES } from '@/data/cities';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ServicesSlider } from '@/components/ServicesSlider';
import { TopPortfolio } from '@/components/TopPortfolio';
import { FinalCTA } from '@/components/FinalCTA';
import { ProductMenuWrapper } from './ProductMenuWrapper';
import { getLocalizedProjects } from '@/server/functions/getProjects';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { slug: string, lang: string } }) {
  const city = CITIES.find(c => c.slug === params.slug);
  if (!city) return { title: 'Not found' };
  
  const isUk = params.lang === 'uk';
  const cityPrep = isUk ? city.namePrepositional.uk : city.namePrepositional.ru;
  
  return {
    title: isUk 
      ? `Розробка сайтів та Telegram ботів ${cityPrep} | Malyshev.Dev` 
      : `Разработка сайтов и Telegram ботов ${cityPrep} | Malyshev.Dev`,
    description: isUk 
      ? `Професійна розробка сайтів, лендінгів, візиток та розумних Telegram ботів для бізнесу ${cityPrep}. 100% фокус на вашому проєкті.` 
      : `Профессиональная разработка сайтов, лендингов, визиток и умных Telegram ботов для бизнеса ${cityPrep}. 100% фокус на вашем проекте.`,
  };
}

export default async function CityPage({ params }: { params: { slug: string, lang: string } }) {
  const city = CITIES.find(c => c.slug === params.slug);
  if (!city) notFound();

  const isUk = params.lang === 'uk';
  const linkPrefix = isUk ? '' : '/ru';
  const cityPrep = isUk ? city.namePrepositional.uk : city.namePrepositional.ru;
  const cityGen = isUk ? city.nameGenitive.uk : city.nameGenitive.ru;

  let projectsData: any[] = [];
  try { projectsData = await getLocalizedProjects(params.lang); } catch (e) {}

  return (
    <div className="bg-white min-h-screen">
      
      <section className="relative min-h-[90vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-24 pb-24">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full bg-surface border border-ink/5 mb-8">
            <span className="font-sans text-xs font-bold tracking-widest text-ink/60 uppercase">
              {isUk ? 'ПРАЦЮЮ ПО ВСІЙ УКРАЇНІ' : 'РАБОТАЮ ПО ВСЕЙ УКРАИНЕ'}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-10 uppercase">
            {isUk ? 'DIGITAL РІШЕННЯ' : 'DIGITAL РЕШЕНИЯ'}
            <br />
            {isUk ? 'ДЛЯ БІЗНЕСУ' : 'ДЛЯ БИЗНЕСА'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">{cityGen}</span>
          </h1>
          <p className="font-sans text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-12">
            {isUk ? `Шукаєте надійного розробника ${cityPrep}? ` : `Ищете надежного разработчика ${cityPrep}? `}
            {isUk 
              ? 'Я проєктую та запускаю висококонверсійні веб-системи та Telegram-боти, які працюють на ріст вашого прибутку 24/7. Якщо вам потрібно ' 
              : 'Я проектирую и запускаю высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7. Если вам нужно '}
            <strong>{isUk ? `замовити сайт ${cityPrep}` : `заказать сайт ${cityPrep}`}</strong>
            {isUk ? ' — ви за адресою.' : ' — вы по адресу.'}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-neon-coral hover:-translate-y-1 flex items-center gap-3 group">
              {isUk ? 'Обговорити проєкт' : 'Обсудить проект'}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href={`${linkPrefix}/portfolio`} className="flex items-center gap-3 text-ink font-bold hover:text-cyan transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-cyan/30 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              {isUk ? 'Подивитися роботи' : 'Посмотреть работы'}
            </Link>
          </div>
        </div>
      </section>

      <ServicesSlider lang={params.lang} title={isUk ? `РОЗРОБКА САЙТУ ДЛЯ БІЗНЕСУ ${cityPrep.toUpperCase()}` : `РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА ${cityPrep.toUpperCase()}`} />

      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative bg-ink rounded-[2rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-coral/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 lg:w-1/3 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs font-bold text-white/50 uppercase tracking-widest mb-4 block">
                  {isUk ? 'Про мене' : 'Обо мне'}
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight" dangerouslySetInnerHTML={{ __html: isUk ? 'Ваш партнер <br/> у Digital <span class="text-coral">🤝</span>' : 'Ваш партнер <br/> в Digital <span class="text-coral">🤝</span>'}} />
              </div>
              
              <div className="hidden lg:flex items-center gap-4 mt-12">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50">
                    <span className="font-mono text-sm">&lt;/&gt;</span>
                 </div>
                 <span className="font-sans text-xs font-bold text-white/30 uppercase tracking-widest">
                   {isUk ? 'Розробник / Дизайнер' : 'Разработчик / Дизайнер'}
                 </span>
              </div>
            </div>

            <div className="relative z-10 lg:w-2/3 flex flex-col justify-center">
              <div className="space-y-6 font-sans text-white/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  {isUk 
                    ? `Хоч я і можу знаходитись в іншому місті, сучасні технології стирають усі кордони. Я успішно співпрацюю з підприємцями ${cityPrep} та по всій Україні.` 
                    : `Хоть я и могу находиться в другом городе, современные технологии стирают все границы. Я успешно сотрудничаю с предпринимателями ${cityPrep} и по всей Украине.`}
                </p>
                <p dangerouslySetInnerHTML={{ __html: isUk 
                  ? 'Мій фокус — <strong class="font-medium text-white">сучасні, швидкі сайти та розумні Telegram-боти</strong>. Малому та середньому бізнесу потрібен робочий інструмент, який завантажується за секунду та стабільно приносить заявки.'
                  : 'Мой фокус — <strong class="font-medium text-white">современные, легкие сайты и умные Telegram-боты</strong>. Малому и среднему бизнесу нужен рабочий инструмент, который загружается за секунду и стабильно приносит заявки.'
                }} />
                <p>
                  {isUk 
                    ? 'Я завжди на зв\'язку, працюю прозоро і занурююсь у проєкт так, ніби ми сидимо в одному офісі.' 
                    : 'Я всегда на связи, работаю прозрачно и погружаюсь в проект так, словно мы сидим в одном офисе.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductMenuWrapper lang={params.lang} />

      <TopPortfolio projectsData={projectsData} lang={params.lang} />

      <FinalCTA lang={params.lang} />
    </div>
  );
}