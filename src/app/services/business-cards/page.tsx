'use client';

import Link from 'next/link';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, CheckCircle, Zap, LayoutPanelLeft, ShieldCheck, User, ListCollapse, Share2, Smartphone } from 'lucide-react';

export default function BusinessCardsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:h-screen flex items-center px-6 max-w-[1400px] mx-auto pt-24 lg:pt-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-400/10 via-teal-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 font-bold font-sans text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Ваше лицо в интернете
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase">
            Сайт-визитка для <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">специалиста</span> или <br className="hidden md:block" />
            малого бизнеса
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-8">
            Лаконичный и стильный сайт из 1-5 экранов. Идеальная, современная альтернатива Taplink, которая формирует доверие, закрывает возражения и позволяет клиентам мгновенно связаться с вами.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              Создать визитку
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/portfolio" className="flex items-center gap-3 text-ink font-bold hover:text-emerald-600 transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-emerald-500/30 transition-colors shadow-sm">
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
              Минимум воды, максимум пользы. Мы упаковываем вашу экспертность в стильный цифровой продукт.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <User className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Презентация себя
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Блок «Обо мне/О компании», в котором мы четко раскрываем ваш опыт, ценности и ключевые преимущества для клиента.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-teal-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ListCollapse className="w-8 h-8 text-ink/40 group-hover:text-teal-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Понятный прайс-лист
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Структурированный список услуг или товаров. Клиент сразу понимает, что вы предлагаете и сколько это стоит.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Share2 className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Связь в один клик
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Прямые ссылки на ваши мессенджеры (Telegram, WhatsApp) и социальные сети. Никаких сложных форм — только быстрый контакт.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-cyan-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Мобильная адаптация
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                Ваша визитка будет выглядеть безупречно на любом смартфоне. Удобная навигация пальцем и читабельные шрифты.
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
              <span className="text-emerald-400">✦</span> Главная фишка
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Разработка <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">за пару дней.</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-400 pl-6">
              Вы получаете полностью готовый, мощный инструмент для презентации себя, который <strong className="font-bold text-white">не требует сложного технического обслуживания</strong> и работает 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA БЛОК ИЗ ГЛАВНОЙ СТРАНИЦЫ */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-surface to-white border border-ink/5 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Готовы создать <br/>
                свою визитку?
              </h2>
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                Свяжитесь со мной, мы обсудим ваши задачи, подберем стилистику и уже через пару дней у вас будет крутое цифровое представительство.
              </p>
              
              <QuizTrigger className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-cyan hover:-translate-y-1 inline-flex items-center gap-4 group">
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
                      <div className="font-bold font-display text-xl text-ink">От 3 дней</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Сроки запуска</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">Taplink</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">Убийца сервисов</div>
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
