'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Filter, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export type ProjectCategory = 'САЙТЫ' | 'E-COMMERCE' | 'TELEGRAM-БОТЫ' | 'WEB-ПРИЛОЖЕНИЯ';

export default function PortfolioClient({ initialProjects, lang }: { initialProjects: any[], lang: string }) {
  const isUk = lang === 'uk';
  const linkPrefix = isUk ? '' : '/ru';
  const ALL_TAB = isUk ? 'ВСІ' : 'ВСЕ';
  const CATEGORIES: (string | ProjectCategory)[] = [ALL_TAB, 'САЙТЫ', 'E-COMMERCE', 'TELEGRAM-БОТЫ', 'WEB-ПРИЛОЖЕНИЯ'];

  const displayCategory = (cat: string | ProjectCategory) => {
    if (cat === ALL_TAB) return ALL_TAB;
    if (cat === 'САЙТЫ') return isUk ? 'САЙТИ' : 'САЙТЫ';
    if (cat === 'TELEGRAM-БОТЫ') return isUk ? 'TELEGRAM-БОТИ' : 'TELEGRAM-БОТЫ';
    if (cat === 'WEB-ПРИЛОЖЕНИЯ') return isUk ? 'WEB-ДОДАТКИ' : 'WEB-ПРИЛОЖЕНИЯ';
    return cat;
  };
  
  const [activeFilter, setActiveFilter] = useState<string | ProjectCategory>(ALL_TAB);

  const filteredProjects = initialProjects.filter(
    (project) => activeFilter === ALL_TAB || project.category === activeFilter
  );

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-coral/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
            <span className="text-coral">✦</span> {isUk ? 'Обрані кейси' : 'Избранные кейсы'}
          </div>
          
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-ink leading-[1.05] mb-8 uppercase break-words">
            {isUk ? 'Приклади' : 'Примеры'} <br className="hidden md:block" />
            {isUk ? 'моїх' : 'моих'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-400">{isUk ? 'робіт' : 'работ'}</span>
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-8">
            {isUk 
              ? 'Кожен проєкт — це інструмент для бізнесу. Дізнайтеся, як я допомагаю компаніям збільшувати продажі, автоматизувати процеси та виділятися на тлі конкурентів.' 
              : 'Каждый проект — это инструмент для бизнеса. Изучите, как я помогаю компаниям увеличивать продажи, автоматизировать процессы и выделяться на фоне конкурентов.'}
          </p>

          <a 
            href="https://www.behance.net/dima_malyshev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-6 py-4 bg-[#1769ff]/10 text-[#1769ff] hover:bg-[#1769ff] hover:text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.226-2.477-2.226-1.465 0-2.274.891-2.488 2.226zm-9.392-6v10h-6.648v-10h6.648zm1.611-2.333h-8.259v14.666h8.775c3.275 0 5.485-1.393 5.485-4.103 0-1.898-1.077-3.21-2.529-3.712 1.137-.478 2.106-1.536 2.106-3.176 0-2.738-2.311-3.675-5.578-3.675zm-5.61 2.66h2.955c1.472 0 2.226.549 2.226 1.573 0 1.059-.791 1.549-2.226 1.549h-2.955v-3.122zm0 8.01v-3.411h3.197c1.688 0 2.453.642 2.453 1.705 0 1.096-.867 1.706-2.453 1.706h-3.197z"/>
            </svg>
            {isUk ? 'Мої концепти та дизайн на Behance' : 'Мои концепты и дизайн на Behance'}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="border-y border-ink/5 py-4 mb-12">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-4 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 text-ink/40 mr-2 shrink-0">
            <Filter className="w-5 h-5" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest">{isUk ? 'Фільтр:' : 'Фильтр:'}</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-6 py-2.5 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat ? 'bg-ink text-white shadow-lg' : 'bg-surface text-ink/60 hover:bg-ink/5 border border-ink/5'
              }`}
            >
              {displayCategory(cat)}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6 max-w-[1400px] mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-sans text-xl text-ink/50 font-medium">{isUk ? 'Проєкти у цій категорії скоро з\'являться.' : 'Проекты в этой категории скоро появятся.'}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
            {filteredProjects.map((project, index) => {
              const displayTitle = isUk ? (project.titleUk || project.title) : project.title;
              const displayDescription = isUk ? (project.descriptionUk || project.description) : project.description;
              
              return (
              <Link href={`${linkPrefix}/portfolio/${project.slug}`} key={project.id} className={`flex flex-col group cursor-pointer ${project.isTop === 1 ? 'md:col-span-2' : ''}`}>
                <div className={`relative w-full aspect-[4/3] ${project.isTop === 1 ? 'md:aspect-[2/1]' : ''} rounded-[2rem] overflow-hidden mb-6 shadow-glass border border-ink/5 bg-surface`}>
                  {project.imageUrl ? (
                    <Image fill unoptimized src={project.imageUrl} alt={displayTitle} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink/20 font-bold text-2xl group-hover:scale-105 transition-transform duration-700">
                      {isUk ? 'Немає обкладинки' : 'Нет обложки'}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                  
                  {project.isTop === 1 && (
                    <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-coral text-white font-bold font-sans text-xs uppercase tracking-widest shadow-lg">
                      Top Project
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase block mb-3">
                      {project.tags || displayCategory(project.category) || (isUk ? 'ПРОЄКТ' : 'ПРОЕКТ')}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-coral transition-colors line-clamp-2">
                      {displayTitle}
                    </h3>
                    <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-sm mt-auto line-clamp-3">
                      {displayDescription}
                    </p>
                  </div>
                  
                  <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-ink bg-surface border border-ink/5 group-hover:bg-coral group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            )})}
          </div>
        )}
      </section>

      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`}} />
    </div>
  );
}