'use client';

import Link from 'next/link';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, CheckCircle, Code2, Zap, Rocket, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import Image from 'next/image';
import { getDictionary } from '@/i18n/dictionaries';

export default function AboutPage({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang).aboutPage;

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-32 lg:pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-coral/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
            {dict.hero.badge}
          </div>
          
          <h1 
            className="font-display text-3xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase"
            dangerouslySetInnerHTML={{ __html: dict.hero.title }}
          />
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-10">
            {dict.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              {dict.hero.btn}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
          </div>
        </div>
      </section>

      {/* 2. ПОДХОД / ЦЕННОСТИ (BENTO GRID) */}
      <section className="py-12 lg:py-24 bg-surface border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight"
              dangerouslySetInnerHTML={{ __html: dict.bento.title }}
            />
            <p className="font-sans text-ink/50 leading-relaxed font-medium max-w-sm">
              {dict.bento.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-coral/20 transition-all duration-500 group lg:col-span-2">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Code2 className="w-8 h-8 text-ink/40 group-hover:text-coral transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c1_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-lg mt-auto">
                {dict.bento.c1_desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-cyan-500/20 transition-all duration-500 group mobile-hover-card">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <HeartHandshake className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c2_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                {dict.bento.c2_desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group mobile-hover-card">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c3_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                {dict.bento.c3_desc}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group lg:col-span-2">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Rocket className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c4_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-lg mt-auto">
                {dict.bento.c4_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ОПЫТ (АКЦЕНТНЫЙ БЛОК) */}
      <section className="py-16 lg:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              {dict.experience.badge}
            </span>
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8"
              dangerouslySetInnerHTML={{ __html: dict.experience.title }}
            />
            <p className="font-sans text-lg text-white/60 font-light leading-relaxed">
              {dict.experience.desc}
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {dict.experience.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">{stat.val}</div>
                <div className="font-sans text-xs uppercase tracking-widest text-white/50 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA БЛОК ИЗ ГЛАВНОЙ СТРАНИЦЫ */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-surface border border-ink/5 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-coral/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: dict.cta.title }}
              />
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                {dict.cta.desc}
              </p>
              
              <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
                {dict.cta.btn}
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
