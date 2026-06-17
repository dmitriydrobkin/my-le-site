'use client';

import Link from 'next/link';
import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, CheckCircle2, Zap, LayoutPanelLeft, ShieldCheck, Send } from 'lucide-react';

export default function LandingsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:h-screen flex items-center px-6 max-w-[1400px] mx-auto pt-24 lg:pt-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-coral/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-coral/20 bg-coral/5 text-coral font-bold font-sans text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            Быстрый старт продаж
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase">
            Разработка <br className="hidden md:block" />
            лендингов с <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-[#ff5a36]">высокой конверсией</span>
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-8">
            Одностраничный сайт, который быстро запускается, моментально загружается и превращает посетителей в клиентов. Идеально для старта продаж, рекламы конкретной услуги или тестирования новой ниши.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              Заказать лендинг
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/portfolio" className="flex items-center gap-3 text-ink font-bold hover:text-coral transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-coral/30 transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              Посмотреть примеры
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ЧТО ВХОДИТ В СТОИМОСТЬ (BENTO GRID) */}
      <section className="py-12 lg:py-24 bg-surface border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight">
              Что входит в разработку?
            </h2>
            <p className="font-sans text-ink/50 leading-relaxed font-medium max-w-sm">
              Мы создаем не просто красивую картинку, а полноценный инструмент для генерации заявок под ключ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-coral/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <LayoutPanelLeft className="w-8 h-8 text-ink/40 group-hover:text-coral transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Анализ и смыслы
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Глубокий анализ вашей услуги и целевой аудитории. Правильная упаковка смыслов, которая закрывает боли клиента.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-cyan-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Современный UI/UX
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Продуманный, чистый и стильный дизайн. Идеальное отображение и удобство использования как с телефона, так и с ПК.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Send className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors translate-x-[2px] -translate-y-[2px]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Заявки в Telegram
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Подключение надежных форм обратной связи. Каждая заявка или звонок моментально прилетает вам прямо в Telegram.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Мощный хостинг
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Размещение на сверхбыстрых серверах Cloudflare. 0$/мес за хостинг, абсолютная безопасность и стабильность работы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. КИЛЛЕР-ФИЧА (АКЦЕНТНЫЙ БЛОК) */}
      <section className="py-16 lg:py-20 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              <span className="text-coral">✦</span> Главная фишка
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Никаких <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-[#ff5a36]">тяжелых движков.</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl border-l-2 border-coral pl-6">
              Ваш лендинг будет загружаться <strong className="font-bold text-white">за доли секунды</strong>, сохраняя рекламный бюджет и удерживая внимание клиентов с первой же секунды.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA БЛОК */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-surface to-white border border-ink/5 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-coral/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Готовы запустить <br/>
                ваш лендинг?
              </h2>
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                Оставьте заявку, и мы обсудим ваш проект. Я подскажу, как лучше упаковать вашу услугу, и предложу оптимальное решение под ваш бюджет.
              </p>
              
              <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-coral hover:-translate-y-1 inline-flex items-center gap-4 group">
                Обсудить проект
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
            
            {/* Дополнительный визуальный элемент или статистика */}
            <div className="relative z-10 w-full lg:w-1/3">
               <div className="bg-white rounded-[2rem] p-8 border border-ink/5 shadow-glass flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">От 7 дней</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Сроки разработки</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">100 / 100</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Google PageSpeed</div>
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
