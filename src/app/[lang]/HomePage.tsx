'use client';

import Link from 'next/link';
import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ProductMenuModal } from '@/components/ProductMenuModal';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { ServicesSlider } from '@/components/ServicesSlider';
import { BentoAdvantages } from '@/components/BentoAdvantages';
import { TopPortfolio } from '@/components/TopPortfolio';
import { FinalCTA } from '@/components/FinalCTA';

import { getDictionary } from '@/i18n/dictionaries';

export default function B2BHomePage({ projectsData, lang }: { projectsData: any[], lang: string }) {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const dict = getDictionary(lang) || getDictionary('uk');

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Centered full height) */}
      <section className="relative min-h-[100vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-24 pb-24">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-ink leading-[1.05] mb-10">
            {(dict?.hero?.title || '').split(/БИЗНЕСА|БІЗНЕСУ/)[0]}
            <br />
            {lang === 'ru' ? (
              <>ДЛЯ <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">БИЗНЕСА</span></>
            ) : (
              <>ДЛЯ <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">БІЗНЕСУ</span></>
            )}
          </h1>
          <p className="font-sans text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-12">
            {dict?.hero?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-neon-coral hover:-translate-y-1 flex items-center gap-3 group">
              {dict?.hero?.primaryBtn}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href={`${lang === 'ru' ? '/ru' : ''}/services/sites-and-bots`} className="flex items-center gap-3 text-ink font-bold hover:text-cyan transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-cyan/30 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              {dict?.hero?.secondaryBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА (SPLIT + HORIZONTAL SCROLL) */}
      <ServicesSlider lang={lang} />

      {/* 2.5 ОБО МНЕ */}
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative bg-ink rounded-[2rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 overflow-hidden shadow-2xl">
            {/* Декоративные фоновые элементы */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-coral/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Левая часть: Акцентный заголовок */}
            <div className="relative z-10 lg:w-1/3 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs font-bold text-white/50 uppercase tracking-widest mb-4 block">{dict?.about?.badge}</span>
                <h2 
                  className="font-display text-4xl md:text-5xl font-bold text-white leading-tight"
                  dangerouslySetInnerHTML={{ __html: dict?.about?.title || '' }}
                />
              </div>
              
              <div className="hidden lg:flex items-center gap-4 mt-12">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50">
                    <span className="font-mono text-sm">&lt;/&gt;</span>
                 </div>
                 <span className="font-sans text-xs font-bold text-white/30 uppercase tracking-widest">
                   {dict?.about?.role}
                 </span>
              </div>
            </div>

            {/* Правая часть: текст */}
            <div className="relative z-10 lg:w-2/3 flex flex-col justify-center">
              <div className="space-y-6 font-sans text-white/70 text-base md:text-lg leading-relaxed font-light">
                <p dangerouslySetInnerHTML={{ __html: (dict?.about?.p1 || '').replace('специализация — создание современных, легких сайтов и умных Telegram-ботов', '<strong class="font-medium text-white">специализация — создание современных, легких сайтов и умных Telegram-ботов</strong>').replace('спеціалізація — створення сучасних, швидких сайтів та розумних Telegram-ботів', '<strong class="font-medium text-white">спеціалізація — створення сучасних, швидких сайтів та розумних Telegram-ботів</strong>') }} />
                <p>{dict?.about?.p2}</p>
                <p>{dict?.about?.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <BentoAdvantages lang={lang} onOpenProductMenu={() => setIsProductMenuOpen(true)} />

      {/* 4. ПРИМЕРЫ РАБОТ */}
      <TopPortfolio projectsData={projectsData} lang={lang} />

      {/* 5. ФИНАЛЬНЫЙ CTA БЛОК */}
      <FinalCTA lang={lang} />
      
      {/* Hide global scrollbar for horizontal lists */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      <ProductMenuModal 
        isOpen={isProductMenuOpen} 
        onClose={() => setIsProductMenuOpen(false)} 
      />
    </div>
  );
}
