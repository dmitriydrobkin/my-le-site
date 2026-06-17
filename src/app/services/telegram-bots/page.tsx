'use client';

import Link from 'next/link';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, CheckCircle, Zap, GitFork, MessageSquare, CloudCog, ArrowLeftRight } from 'lucide-react';

export default function TelegramBotsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:h-screen flex items-center px-6 max-w-[1400px] mx-auto pt-24 lg:pt-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 font-bold font-sans text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Автоматизация рутины
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase">
            Разработка <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Telegram-ботов</span> <br className="hidden md:block" />
            для бизнеса
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-8">
            Создаю надежных умных агентов: от компактных ботов-визиток и агрегаторов заявок до кастомных решений со сложной логикой. Ваш цифровой сотрудник, который работает 24/7 без выходных.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              Заказать бота
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/portfolio" className="flex items-center gap-3 text-ink font-bold hover:text-cyan-600 transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-cyan-500/30 transition-colors shadow-sm">
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
              Что может ваш бот?
            </h2>
            <p className="font-sans text-ink/50 leading-relaxed font-medium max-w-sm">
              Индивидуальное проектирование архитектуры, чтобы бот точно решал задачи именно вашего бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <GitFork className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Проектирование логики
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Детальная проработка маршрутов пользователя (Customer Journey). Бот проведет клиента за руку до нужного вам целевого действия.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-cyan-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Боты-визитки
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Идеально для первого контакта: красиво расскажут о вашей компании, автоматически выдадут прайс и закроют частые вопросы (FAQ).
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-teal-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ArrowLeftRight className="w-8 h-8 text-ink/40 group-hover:text-teal-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Агрегаторы заявок
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Связка вашего сайта и CRM с Telegram. Вы и ваши менеджеры получаете новые лиды и уведомления моментально прямо в мессенджер.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <CloudCog className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Бессерверная база
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Разработка на передовой Serverless архитектуре (worker.js). Максимальная скорость, стабильность и независимость от тяжелых серверов.
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
              <span className="text-cyan-400">✦</span> Главная фишка
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Сила Cloudflare <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Workers.</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl border-l-2 border-cyan-400 pl-6 mb-6">
              Ваш бот не «упадет» от наплыва пользователей и реагирует мгновенно благодаря запуску кода на границах сети по всему миру.
            </p>
            <p className="font-sans text-lg md:text-xl text-white/80 font-bold leading-relaxed max-w-2xl">
              Самое главное: <span className="text-cyan-400">Вам не нужно платить абонентскую плату за выделенный сервер</span> на старте или тестировании проекта. Бот просто работает. Бесплатно.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA БЛОК ИЗ ГЛАВНОЙ СТРАНИЦЫ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-surface to-white border border-ink/5 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Готовы делегировать <br/>
                задачи боту?
              </h2>
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                Расскажите, какую часть рутины вы хотите автоматизировать. Я предложу оптимальную логику бота и реализую ее в кратчайшие сроки.
              </p>
              
              <QuizTrigger className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-cyan hover:-translate-y-1 inline-flex items-center gap-4 group">
                Обсудить логику
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
                      <div className="font-bold font-display text-xl text-ink">99.9%</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Uptime бота</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">0 $/мес</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Оплата за сервер</div>
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
