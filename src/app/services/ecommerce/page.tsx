'use client';

import Link from 'next/link';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, CheckCircle, Store, Box, Smartphone, ServerOff, Frown, Database, DollarSign, MousePointerClick, Send, Zap } from 'lucide-react';
import { TelegramIcon } from '@/components/TelegramIcon';

export default function EcommercePage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-32 pb-24 lg:py-0 w-full">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-emerald-500/10 via-teal-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-600 font-bold font-sans text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Быстрый e-commerce
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase">
            Быстрый <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">интернет-магазин</span> <br className="hidden md:block" />
            с приемом заказов
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-8">
            Продавайте товары без сложных регистраций, брошенных корзин и громоздких админ-панелей. Клиент оформляет заказ в 1 клик, а вы получаете готовую заявку с деталями прямо в свой Telegram. Идеально для крафтовых брендов и локального бизнеса.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              Хочу такой магазин
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/portfolio" className="flex items-center gap-3 text-ink font-bold hover:text-rose-600 transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-rose-500/30 transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              Посмотреть примеры
            </Link>
          </div>
        </div>
      </section>

      {/* 2. БОЛЬ КЛИЕНТА (Почему классика теряет деньги) */}
      <section className="py-12 lg:py-24 bg-surface border-y border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            
            <div className="lg:w-1/3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/10 bg-white font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/50">
                <span className="text-red-500">✕</span> Проблема
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink uppercase leading-tight mb-4">
                Почему классические магазины теряют деньги?
              </h2>
              <p className="font-sans text-ink/50 leading-relaxed font-medium">
                Громоздкие админки, дорогие сервера и сложная регистрация убивают конверсию на каждом этапе.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Point 1 */}
              <div className="bg-white rounded-[2rem] p-8 border border-ink/5">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                  <Frown className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">Сложная регистрация</h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed">
                  До 70% пользователей бросают корзину, если их заставляют создавать личный кабинет, придумывать пароль и подтверждать email перед покупкой.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-white rounded-[2rem] p-8 border border-ink/5">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">Тяжелая админка</h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed">
                  Вам приходится часами разбираться, как добавить один товар или найти информацию о заказе в громоздкой CMS-системе из 2000-х.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-white rounded-[2rem] p-8 border border-ink/5">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">Дорогое обслуживание</h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed">
                  Классические магазины с базами данных требуют покупки мощных серверов, защиты от взломов плагинов и постоянной оплаты техподдержки.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ЧТО ПОЛУЧАЕТ ВАШ БИЗНЕС (BENTO GRID) */}
      <section className="py-12 lg:py-24 bg-white border-b border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight">
              Что получает <br/>ваш бизнес
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-rose-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-white border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Store className="w-8 h-8 text-ink/40 group-hover:text-rose-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Удобная витрина
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Понятный каталог с категориями и быстрыми фильтрами. Клиент мгновенно находит то, что ему нужно.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-orange-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-white border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Box className="w-8 h-8 text-ink/40 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Продающие карточки
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Сочные фотогалереи, подробное описание, вариации (размеры/цвета) и четкая цена. Никакого визуального мусора.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-red-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-white border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-8 h-8 text-ink/40 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Mobile First дизайн
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Свыше 80% покупок делается с телефона. Ваш магазин будет выглядеть и работать как дорогое мобильное приложение.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-surface rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-coral/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-white border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ServerOff className="w-8 h-8 text-ink/40 group-hover:text-coral transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Нет абонентской платы
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Полное отсутствие абонентской платы за содержание тяжелого сервера или аренду "коробочных" платформ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. НАШЕ РЕШЕНИЕ (АКЦЕНТНЫЙ БЛОК) */}
      <section className="py-16 lg:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-5/12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              <span className="text-rose-400">✦</span> Наше решение
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Быстрые <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400">продажи.</span>
            </h2>
            <p className="font-sans text-lg text-white/60 font-light leading-relaxed mb-6">
              Забудьте слово «каталог» и брошенные корзины. Мы создаем инструмент, который устраняет трение между желанием клиента и вашей кассой.
            </p>
          </div>

          <div className="lg:w-7/12 flex flex-col gap-10">
            {/* Tech Point 1 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <MousePointerClick className="w-8 h-8 text-rose-400" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Покупка в 1 клик</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Клиент выбирает товар, вводит номер телефона или имя — всё. Никаких утомительных регистраций. Конверсия во вменяемые заявки взлетает в разы.
                  </p>
               </div>
            </div>

            {/* Tech Point 2 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <TelegramIcon className="w-8 h-8 text-blue-400" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Моментальное уведомление в Telegram</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Специальный бот присылает вам аккуратное сообщение: <br/>
                    <span className="inline-block mt-3 p-3 bg-white/5 rounded-xl border border-white/10 font-mono text-sm text-white/80">
                      📦 <strong>Новый заказ!</strong><br/>
                      Товар: Кроссовки Nike<br/>
                      Размер: 42<br/>
                      Клиент: Алексей<br/>
                      Тел: +380...
                    </span>
                    <br/>
                    <span className="inline-block mt-3">Вы просто звоните и подтверждаете сделку.</span>
                  </p>
               </div>
            </div>
            
            {/* Tech Point 3 */}
            <div className="flex gap-6 items-start">
               <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                 <Zap className="w-8 h-8 text-yellow-400" />
               </div>
               <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Мгновенная загрузка витрины</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    Магазин работает на современной облачной архитектуре. Изображения оптимизируются на лету, а товары открываются без задержек.
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
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
                Запустите онлайн-продажи <br/>без лишних сложностей
              </h2>
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                Переведите торговлю из Instagram-директа в удобный, автоматизированный магазин, который будет сам собирать и систематизировать заказы для вас.
              </p>
              
              <QuizTrigger className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
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
                      <div className="font-bold font-display text-xl text-ink">В 3 раза</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Выше конверсия</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <TelegramIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">Без админок</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Всё в Telegram</div>
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
