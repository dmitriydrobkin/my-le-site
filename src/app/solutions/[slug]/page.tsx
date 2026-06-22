import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle, Zap, Search, Globe, LayoutTemplate, ShieldCheck, Layers } from 'lucide-react';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ServicesSlider } from '@/components/ServicesSlider';
import { TopPortfolio } from '@/components/TopPortfolio';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import { ProductMenuWrapper } from '@/app/locations/[slug]/ProductMenuWrapper';
import { TelegramIcon } from '@/components/TelegramIcon';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const niche = niches.find(n => n.slug === params.slug);
  if (!niche) {
    return { title: 'Страница не найдена' };
  }

  return {
    title: niche.seoTitle,
    description: niche.seoDescription,
  };
}

export default async function NichePage({ params }: { params: { slug: string } }) {
  const niche = niches.find(n => n.slug === params.slug);
  
  if (!niche) {
    notFound();
  }

  let projectsData: any[] = [];
  try {
    const dbContext = getRequestContext().env.DB;
    const db = drizzle(dbContext);
    projectsData = await db.select().from(projects).orderBy(desc(projects.sortOrder));
  } catch (error) {
    console.error('Failed to fetch projects on niche page:', error);
  }

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION (Rich Corporate Style) */}
      <section className="relative min-h-[100vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-coral/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-50" />
        
        <div className="max-w-5xl relative z-10 pt-16 lg:pt-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 font-bold font-sans text-xs uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Отраслевое решение
          </div>
          
          <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-8 uppercase break-words">
            {niche.name} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">для вашего бизнеса</span>
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-12">
            {niche.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full max-w-full">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-6 sm:px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Рассчитать стоимость
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </QuizTrigger>
            <Link href="/portfolio" className="flex items-center gap-3 text-ink font-bold hover:text-indigo-600 transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-indigo-500/30 transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              Посмотреть примеры
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ОСОБЕННОСТИ РЕШЕНИЯ (Динамические фичи из ниши) */}
      <section className="py-12 lg:py-24 bg-surface border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-3xl leading-tight">
              Зачем вашей нише <br/><span className="text-indigo-600">продуманный сайт?</span>
            </h2>
            <p className="font-sans text-lg text-ink/50 mt-6 max-w-2xl font-medium">
              Каждый бизнес уникален. Я разрабатываю функционал, который закрывает именно ваши потребности, автоматизирует рутину и приводит целевых клиентов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {niche.features.map((feature, idx) => {
              // Динамический выбор иконок и цветов для разнообразия карточек
              const cardStyles = [
                { icon: LayoutTemplate, color: 'text-indigo-500', bg: 'bg-indigo-50', hoverBorder: 'hover:border-indigo-500/20' },
                { icon: Search, color: 'text-purple-500', bg: 'bg-purple-50', hoverBorder: 'hover:border-purple-500/20' },
                { icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50', hoverBorder: 'hover:border-emerald-500/20' },
                { icon: Layers, color: 'text-coral', bg: 'bg-orange-50', hoverBorder: 'hover:border-coral/20' }
              ];
              const style = cardStyles[idx % cardStyles.length]!;
              const Icon = style.icon;

              return (
                <div key={idx} className={`bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl transition-all duration-500 group mobile-hover-card ${style.hoverBorder}`}>
                  <div className={`w-16 h-16 rounded-full border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${style.bg}`}>
                    <Icon className={`w-8 h-8 ${style.color}`} />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-ink mb-4">
                    {feature}
                  </h3>
                  <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                    Разработка данного модуля позволит значительно повысить конверсию и удобство использования вашего сайта для конечного потребителя.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА (SPLIT + HORIZONTAL SCROLL) */}
      <ServicesSlider title={`РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА`} />

      {/* 4. ЧТО ВЫ ПОЛУЧАЕТЕ (BENTO GRID ИЗ ГЛАВНОЙ/ГОРОДОВ) */}
      <ProductMenuWrapper />

      {/* 5. КАК ЭТО РАБОТАЕТ (ТЕХНИЧЕСКИЙ КОЗЫРЬ) - Темный блок */}
      <section className="py-16 lg:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              <span className="text-purple-400">✦</span> Технический козырь
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
              Преимущества <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">платформы</span>
            </h2>
            <p className="font-sans text-white/60 leading-relaxed font-light text-lg">
              Современные технологии стирают все границы. Вы получите премиальное качество, высокую скорость загрузки и максимальную надежность инфраструктуры.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-10">
            {/* Tech Point 1 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <Zap className="w-8 h-8 text-yellow-400" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Скорость Cloudflare Edge</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Сайт загружается за миллисекунды по всему миру. Ваши клиенты больше не уходят к конкурентам из-за долгой загрузки страниц на мобильном интернете.
                  </p>
               </div>
            </div>

            {/* Tech Point 2 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <TelegramIcon className="w-8 h-8 text-blue-400" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Интеграция с Telegram</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Любая заполненная форма (заказ звонка, бронирование, бриф) моментально приходит вам прямо в личные сообщения Telegram. Никаких потерянных писем в спаме.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ПРИМЕРЫ РАБОТ */}
      <TopPortfolio projectsData={projectsData} />

      {/* 7. CTA БЛОК (Rich Corporate Style) */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-surface border border-ink/5 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight uppercase">
                Обсудим ваш <br/>проект?
              </h2>
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                Напишите мне, я проанализирую вашу задачу и предложу оптимальную структуру сайта именно для вашей сферы.
              </p>
              
              <QuizTrigger className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
                Получить консультацию
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
            
            {/* Дополнительный визуальный элемент или статистика */}
            <div className="relative z-10 w-full lg:w-1/3">
               <div className="bg-white rounded-[2rem] p-8 border border-ink/5 shadow-glass flex flex-col gap-6 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">Доверие</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Высокая конверсия</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">Индексация</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">SEO оптимизация</div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
