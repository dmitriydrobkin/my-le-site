'use client';

import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

import { getDictionary } from '@/i18n/dictionaries';

export function ServicesSlider({ title, lang }: { title?: string, lang: string }) {
  const dict = getDictionary(lang) || getDictionary('uk');
  const SERVICES = dict?.servicesSlider?.items || [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paddingLeft, setPaddingLeft] = useState(24);

  useEffect(() => {
    const calculatePadding = () => {
      const windowWidth = window.innerWidth;
      const maxWidth = 1400;
      if (windowWidth > maxWidth) {
        setPaddingLeft((windowWidth - maxWidth) / 2 + 24);
      } else {
        setPaddingLeft(24);
      }
    };
    
    calculatePadding();
    window.addEventListener('resize', calculatePadding);
    return () => window.removeEventListener('resize', calculatePadding);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        {/* Header Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-ink leading-[1.1] max-w-2xl uppercase">
            {title || dict?.servicesSlider?.defaultTitle}
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-8 lg:max-w-md">
            <p className="font-sans text-ink/50 leading-relaxed font-medium lg:text-right">
              {dict?.servicesSlider?.subtitle}
            </p>
            {/* Sliders Navigation */}
            <div className="flex gap-4">
              <button onClick={scrollLeft} className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={scrollRight} className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {/* Explicit spacer element to align the first card perfectly without using paddingLeft on the flex container, which can cause scrolling bugs */}
        <div style={{ minWidth: paddingLeft }} className="flex-shrink-0" />

        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="snap-start flex-shrink-0 w-[85vw] sm:w-[420px] bg-surface rounded-[2.5rem] p-8 lg:p-10 flex flex-col min-h-[380px] h-auto justify-between group relative mobile-hover-card"
          >
            {/* Content Top */}
            <div className="relative z-10 flex flex-col">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-8">
                {service.title}
              </h3>
              
              <div className="flex gap-6">
                <span className="font-mono text-sm font-bold text-ink/40 shrink-0 mt-1">
                  {service.id}
                </span>
                <p className="font-sans text-sm leading-relaxed text-ink/60 font-medium">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Action Button Bottom (Expanding Pill on Hover) */}
            <div className="relative z-10 mt-auto flex justify-start">
              {service.href ? (
                <Link href={service.href} className="relative overflow-hidden rounded-full border border-ink/10 bg-white transition-all duration-500 ease-out flex items-center justify-center group-hover:justify-between p-1.5 w-16 h-16 group-hover:w-full group-hover:border-transparent">
                  {/* Background Gradient inside the expanded pill */}
                  <div className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ease-in-out pointer-events-none`} />
                  
                  {/* Hover text */}
                  <span className="relative z-10 opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[120px] text-white font-bold font-sans tracking-wide group-hover:ml-5 whitespace-nowrap overflow-hidden transition-all duration-500">
                    {dict?.common?.moreInfo}
                  </span>
                  
                  {/* The round arrow button */}
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-ink bg-white group-hover:bg-white group-hover:text-ink transition-colors duration-500 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </Link>
              ) : (
                <div className="relative overflow-hidden rounded-full border border-ink/10 bg-white transition-all duration-500 ease-out flex items-center justify-center group-hover:justify-between p-1.5 w-16 h-16 group-hover:w-full group-hover:border-transparent">
                  <div className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ease-in-out pointer-events-none`} />
                  <span className="relative z-10 opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[120px] text-white font-bold font-sans tracking-wide group-hover:ml-5 whitespace-nowrap overflow-hidden transition-all duration-500">
                    {dict?.common?.moreInfo}
                  </span>
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-ink bg-white group-hover:bg-white group-hover:text-ink transition-colors duration-500 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Right padding explicit spacer */}
        <div style={{ minWidth: paddingLeft }} className="flex-shrink-0" />
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
