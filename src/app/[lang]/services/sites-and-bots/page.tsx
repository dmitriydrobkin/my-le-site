'use client';

import Link from 'next/link';
import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, Clock, Bot, TrendingUp, Blocks, CheckCircle, Zap } from 'lucide-react';
import { getDictionary } from '@/i18n/dictionaries';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Автосалон "Premium Auto"',
    description: 'Корпоративный сайт + бот для квалификации на тест-драйв. Увеличение конверсии на 45%.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', 
    tag: 'АВТОБИЗНЕС'
  },
  {
    id: 2,
    title: 'Сеть кофеен "Morning Rush"',
    description: 'Интернет-магазин зерен + программа лояльности в Telegram. +30% к повторным продажам.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800', 
    tag: 'E-COMMERCE'
  },
  {
    id: 3,
    title: 'Юридическое агентство "LexPro"',
    description: 'Высококонверсионный лендинг + бот первичной консультации. Сэкономлено 120 часов работы юристов.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', 
    tag: 'B2B УСЛУГИ'
  }
];

export default function SitesAndBotsPage({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang).servicesPages.sitesAndBots;

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-32 pb-24 lg:pt-40 lg:pb-24 w-full">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-cyan-400/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-60 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-coral/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-50" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 font-bold font-sans text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            {dict.heroBadge}
          </div>
          
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase"
            dangerouslySetInnerHTML={{ __html: dict.heroTitle }}
          />
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-3xl font-medium leading-relaxed mb-8">
            {dict.heroDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              {dict.btnCalc}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href={`/${params.lang}#portfolio`} className="flex items-center gap-3 text-ink font-bold hover:text-cyan-600 transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-cyan-500/30 transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              {dict.btnPortfolio}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ПОЧЕМУ ЭТО РАБОТАЕТ (WHY SECTION) */}
      <section className="py-12 lg:py-24 bg-surface border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight"
              dangerouslySetInnerHTML={{ __html: dict.whyTitle }}
            />
            <p className="font-sans text-ink/50 leading-relaxed font-medium max-w-sm">
              {dict.whyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />, hoverColor: 'hover:border-cyan-500/20' },
              { icon: <Bot className="w-8 h-8 text-ink/40 group-hover:text-coral transition-colors" />, hoverColor: 'hover:border-coral/20' },
              { icon: <TrendingUp className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />, hoverColor: 'hover:border-emerald-500/20' },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl ${item.hoverColor} transition-all duration-500 group mobile-hover-card`}>
                <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-4">
                  {dict.whyPoints[idx]?.title}
                </h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                  {dict.whyPoints[idx]?.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <section className="py-12 lg:py-24 bg-white border-b border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight"
              dangerouslySetInnerHTML={{ __html: dict.bentoTitle }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Blocks className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors" />, hoverColor: 'hover:border-blue-500/20' },
              { icon: <Zap className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />, hoverColor: 'hover:border-cyan-500/20' },
              { icon: <Bot className="w-8 h-8 text-ink/40 group-hover:text-purple-500 transition-colors" />, hoverColor: 'hover:border-purple-500/20' },
              { icon: <CheckCircle className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />, hoverColor: 'hover:border-emerald-500/20' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-surface rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl ${item.hoverColor} transition-all duration-500 group mobile-hover-card`}>
                <div className="w-16 h-16 rounded-full bg-white border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-4">
                  {dict.bentoPoints[idx]?.title}
                </h3>
                <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                  {dict.bentoPoints[idx]?.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. КИЛЛЕР-ФИЧА (АКЦЕНТНЫЙ БЛОК) */}
      <section className="py-16 lg:py-20 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              {dict.techBadge}
            </span>
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
              dangerouslySetInnerHTML={{ __html: dict.techTitle }}
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-10">
            {dict.techPoints.map((point, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  {idx === 0 ? <Zap className="w-8 h-8 text-cyan-400" /> : <Blocks className="w-8 h-8 text-purple-400" />}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">{point.title}</h3>
                  <p className="font-sans text-white/60 leading-relaxed font-light">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ИЗБРАННЫЕ ПРОЕКТЫ (PORTFOLIO GRID) - Not translated statically as they might be dynamic, but left as is */}
      <section id="portfolio" className="py-16 lg:py-24 bg-white border-b border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase max-w-2xl leading-tight">
              {params.lang === 'ru' ? 'Избранные проекты' : 'Вибрані проєкти'}
            </h2>
            <p className="font-sans text-ink/50 leading-relaxed font-medium max-w-sm">
              {params.lang === 'ru' ? 'Каждый кейс — это не просто красивый код, а полноценная работающая машина по генерации прибыли.' : 'Кожен кейс — це не просто гарний код, а повноцінна працююча машина з генерації прибутку.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <Link href="#" key={item.id} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-glass border border-ink/5">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="flex justify-between items-start gap-4 h-full px-2">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase block mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-coral transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-sm mt-auto">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-ink bg-white border border-ink/10 group-hover:bg-coral group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA БЛОК */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-surface border border-ink/5 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: dict.ctaTitle }}
              />
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                {dict.ctaDesc}
              </p>
              
              <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
                {dict.ctaBtn}
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
            
            <div className="relative z-10 w-full lg:w-1/3">
               <div className="bg-white rounded-[2rem] p-8 border border-ink/5 shadow-glass flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">{dict.ctaStat1Title}</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">{dict.ctaStat1Desc}</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-ink/5" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold font-display text-xl text-ink">{dict.ctaStat2Title}</div>
                      <div className="text-xs font-sans text-ink/50 uppercase tracking-widest font-bold">{dict.ctaStat2Desc}</div>
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