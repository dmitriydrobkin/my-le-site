'use client';

import Link from 'next/link';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, CheckCircle, Zap, ShieldCheck, Building2, Search, Layers, LayoutTemplate, Send, Globe } from 'lucide-react';

export default function CorporatePage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:h-screen flex items-center px-6 max-w-[1400px] mx-auto pt-24 lg:pt-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10 pt-16 lg:pt-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 font-bold font-sans text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Фундамент для SEO
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase">
            Современный <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">корпоративный сайт</span> <br className="hidden md:block" />
            для вашего бизнеса
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-8">
            Полноценное представительство компании в сети без лишнего визуального шума и тяжелого кода. Создаем сайты, которые вызывают доверие у клиентов, отлично индексируются в Google и превращают посетителей в реальные заявки.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              Рассчитать стоимость проекта
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
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

      {/* 2. ЗАЧЕМ ВАМ МНОГОСТРАНИЧНЫЙ САЙТ? */}
      <section className="py-12 lg:py-24 bg-white border-y border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            
            <div className="lg:w-1/3">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink uppercase leading-tight mb-6">
                Зачем вам <br className="hidden lg:block" />сайт, если есть соцсети?
              </h2>
              <p className="font-sans text-ink/50 leading-relaxed font-medium">
                Здесь мы продаем не просто страницы, а статус, абсолютное доверие ваших партнеров и прочный фундамент для органического роста.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Point 1 */}
              <div>
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">Доверие B2B и B2C</h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed">
                  Серьезные клиенты и партнеры ищут официальную информацию, реквизиты, документацию и реальные кейсы не в Instagram, а в поиске Google.
                </p>
              </div>

              {/* Point 2 */}
              <div>
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">Мощное SEO-продвижение</h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed">
                  Под каждую вашу услугу создается отдельная проработанная страница. Это позволяет постоянно получать бесплатных клиентов из поиска.
                </p>
              </div>

              {/* Point 3 */}
              <div className="md:col-span-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">Идеальное структурирование</h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-xl">
                  Вся информация о компании, миссии, детализированных услугах, прайс-листах и команде разложена по полочкам — клиенту не нужно писать вам, чтобы узнать базу.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ЧТО ВХОДИТ В РАЗРАБОТКУ (BENTO GRID) */}
      <section className="py-12 lg:py-24 bg-surface border-b border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight">
              За что вы <br/>платите?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-indigo-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <LayoutTemplate className="w-8 h-8 text-ink/40 group-hover:text-indigo-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Проектирование структуры
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Создаем грамотную архитектуру сайта: Главная, Услуги, О компании, Контакты, Блог/Кейсы — всё для удобной навигации пользователя.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-purple-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-8 h-8 text-ink/40 group-hover:text-purple-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Адаптивный UI/UX
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Стильный и продуманный дизайн. Безупречное и идеальное отображение на смартфонах, планшетах и любых компьютерах.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Search className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                SEO-Оптимизация
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Базовая внутренняя SEO-настройка: чистый валидный код, мета-теги, быстрая загрузка и семантическая верстка.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Базовая защита
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Защита от DDoS-атак и спама в формах благодаря настройке Cloudflare, бесплатный SSL-сертификат из коробки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. КАК ЭТО РАБОТАЕТ (ТЕХНИЧЕСКИЙ КОЗЫРЬ) */}
      <section className="py-16 lg:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              <span className="text-purple-400">✦</span> Технический козырь
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
              Как это <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">работает</span>
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-10">
            {/* Tech Point 1 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <Zap className="w-8 h-8 text-yellow-400" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Скорость Cloudflare</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Сайт загружается за миллисекунды. Ваши клиенты больше не уходят к конкурентам из-за долгой загрузки страниц на мобильном интернете.
                  </p>
               </div>
            </div>

            {/* Tech Point 2 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <Send className="w-8 h-8 text-blue-400 translate-x-[3px] -translate-y-[3px]" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Интеграция с Telegram</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Любая заполненная форма (заказ звонка, консультация, бриф) моментально приходит вам или вашему менеджеру прямо в личные сообщения Telegram. Никаких потерянных писем в спаме.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA БЛОК */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-surface border border-ink/5 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
                Нужен сайт, который работает на репутацию и продажи?
              </h2>
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                Напишите мне, я проанализирую вашу нишу и предложу оптимальную структуру корпоративного сайта без навязывания лишних модулей.
              </p>
              
              <QuizTrigger className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
                Обсудить проект
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
            
            {/* Дополнительный визуальный элемент или статистика */}
            <div className="relative z-10 w-full lg:w-1/3">
               <div className="bg-white rounded-[2rem] p-8 border border-ink/5 shadow-glass flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">Индексация</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Оптимизация для Google</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">Без границ</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Доверие партнеров</div>
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
