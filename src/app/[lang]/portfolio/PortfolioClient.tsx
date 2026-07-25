'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Filter, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export type ProjectCategory = 'САЙТЫ' | 'E-COMMERCE' | 'TELEGRAM-БОТЫ' | 'WEB-ПРИЛОЖЕНИЯ';

export default function PortfolioClient({ initialProjects, categories, lang }: { initialProjects: any[], categories: any[], lang: string }) {
  const isUk = lang === 'uk';
  const linkPrefix = isUk ? '' : '/ru';
  const ALL_TAB = isUk ? 'ВСІ' : 'ВСЕ';
  
  const [activeFilter, setActiveFilter] = useState<string>(ALL_TAB);

  const filteredProjects = initialProjects.filter(
    (project) => activeFilter === ALL_TAB || project.categoryId === activeFilter || project.category === activeFilter
  );

  const displayCategory = (idOrCategory: string) => {
    if (idOrCategory === ALL_TAB) return ALL_TAB;
    const cat = categories.find(c => c.id === idOrCategory || c.slug === idOrCategory);
    if (cat) {
      return isUk ? cat.nameUk : cat.nameRu;
    }
    // Fallback for old projects
    if (idOrCategory === 'САЙТЫ') return isUk ? 'САЙТИ' : 'САЙТЫ';
    if (idOrCategory === 'TELEGRAM-БОТЫ') return isUk ? 'TELEGRAM-БОТИ' : 'TELEGRAM-БОТЫ';
    if (idOrCategory === 'WEB-ПРИЛОЖЕНИЯ') return isUk ? 'WEB-ДОДАТКИ' : 'WEB-ПРИЛОЖЕНИЯ';
    return idOrCategory;
  };

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
              <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/>
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
          <button
            onClick={() => setActiveFilter(ALL_TAB)}
            className={`shrink-0 px-6 py-2.5 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
              activeFilter === ALL_TAB ? 'bg-ink text-white shadow-lg' : 'bg-surface text-ink/60 hover:bg-ink/5 border border-ink/5'
            }`}
          >
            {ALL_TAB}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`shrink-0 px-6 py-2.5 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat.id ? 'bg-ink text-white shadow-lg' : 'bg-surface text-ink/60 hover:bg-ink/5 border border-ink/5'
              }`}
            >
              {isUk ? cat.nameUk : cat.nameRu}
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
          <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
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
                      {project.tags || displayCategory(project.categoryId) || displayCategory(project.category) || (isUk ? 'ПРОЄКТ' : 'ПРОЕКТ')}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-4 group-hover:text-coral transition-colors line-clamp-2">
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