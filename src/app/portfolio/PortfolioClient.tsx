'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Filter, Image as ImageIcon } from 'lucide-react';

export type ProjectCategory = 'САЙТЫ' | 'E-COMMERCE' | 'TELEGRAM-БОТЫ' | 'WEB-ПРИЛОЖЕНИЯ';
const CATEGORIES: ('ВСЕ' | ProjectCategory)[] = ['ВСЕ', 'САЙТЫ', 'E-COMMERCE', 'TELEGRAM-БОТЫ', 'WEB-ПРИЛОЖЕНИЯ'];

export default function PortfolioClient({ initialProjects }: { initialProjects: any[] }) {
  const [activeFilter, setActiveFilter] = useState<'ВСЕ' | ProjectCategory>('ВСЕ');

  const filteredProjects = initialProjects.filter(
    (project) => activeFilter === 'ВСЕ' || project.category === activeFilter
  );

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-coral/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
            <span className="text-coral">✦</span> Избранные кейсы
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-tight text-ink leading-[1.05] mb-8 uppercase">
            Примеры <br className="hidden md:block" />
            моих <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-400">работ</span>
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed">
            Каждый проект — это инструмент для бизнеса. Изучите, как мы помогаем компаниям увеличивать продажи, автоматизировать процессы и выделяться на фоне конкурентов.
          </p>
        </div>
      </section>

      {/* 2. FILTERS */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-y border-ink/5 py-4 mb-12">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-4 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 text-ink/40 mr-2 shrink-0">
            <Filter className="w-5 h-5" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest">Фильтр:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-6 py-2.5 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-ink text-white shadow-lg' 
                  : 'bg-surface text-ink/60 hover:bg-ink/5 border border-ink/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GRID */}
      <section className="pb-24 px-6 max-w-[1400px] mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-sans text-xl text-ink/50 font-medium">Проекты в этой категории скоро появятся.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <Link 
                href={`/portfolio/${project.slug}`} 
                key={project.id} 
                className={`flex flex-col group cursor-pointer ${project.isTop === 1 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative w-full aspect-[4/3] ${project.isTop === 1 ? 'md:aspect-[2/1]' : ''} rounded-[2rem] overflow-hidden mb-6 shadow-glass border border-ink/5 bg-surface`}>
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink/20 font-bold text-2xl group-hover:scale-105 transition-transform duration-700">
                      Нет обложки
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
                      {project.tags || project.category || 'ПРОЕКТ'}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-coral transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-sm mt-auto line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-ink bg-surface border border-ink/5 group-hover:bg-coral group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Hide global scrollbar for horizontal lists */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
