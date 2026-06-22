'use client';

import { ArrowUpRight } from 'lucide-react';

export function BentoAdvantages({ onOpenProductMenu }: { onOpenProductMenu: () => void }) {
  return (
    <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-16 uppercase">
          ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV?
        </h2>

        {/* Исправлена сетка для мобильных: убрана жесткая высота строк на мобильном */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
          {/* Карточка 1 - 100% фокус */}
          <div className="md:col-span-2 bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col justify-center border border-ink/5 hover:border-ink/10 transition-colors min-h-[250px]">
            <span className="text-coral font-bold font-sans text-xs tracking-widest uppercase mb-3">100% фокус на проекте</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink leading-snug mb-3 max-w-2xl">
              Вы общаетесь напрямую с разработчиком, а не через цепочку менеджеров.
            </h3>
            <p className="font-sans text-sm md:text-base text-ink/60 font-medium">
              Это экономит время и исключает эффект «испорченного телефона».
            </p>
          </div>

          {/* Карточка 2 - 5 лет опыта */}
          <div className="bg-ink rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <span className="font-display text-5xl md:text-6xl font-bold text-white mb-2 block">5 лет</span>
              <span className="font-sans text-xs text-white/60 mb-3 block uppercase tracking-wider">в веб-дизайне и разработке</span>
              <p className="font-sans text-[11px] md:text-xs text-white/40 leading-relaxed max-w-[200px] mx-auto">
                Знаю, как сделать не просто красиво, но и технически грамотно для SEO и быстрой загрузки.
              </p>
            </div>
          </div>

          {/* Карточка 3 - 0$ хостинг */}
          <div className="bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col justify-center text-center relative overflow-hidden border border-ink/5 hover:border-ink/10 transition-colors group min-h-[250px]">
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl font-bold text-ink mb-2 block">0 $</span>
              <span className="font-sans text-xs font-bold text-coral uppercase tracking-wider mb-3 block">в месяц за хостинг</span>
              <p className="font-sans text-[11px] md:text-xs text-ink/60 leading-relaxed max-w-[220px] mx-auto">
                Использую современные технологии Cloudflare. Ваши лендинги и боты работают стабильно без аренды серверов.
              </p>
            </div>
          </div>

          {/* Карточка 4 - CTA Акцентная */}
          <div 
            onClick={onOpenProductMenu}
            className="md:col-span-2 bg-gradient-to-br from-coral to-cyan-500 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow min-h-[200px] md:min-h-[250px]"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
            <h3 className="relative z-10 font-display text-2xl md:text-3xl font-bold max-w-[200px] md:max-w-full">
              Узнать больше о продуктах
            </h3>
            <div className="relative z-10 self-end md:self-start mt-4 md:mt-0">
              <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
