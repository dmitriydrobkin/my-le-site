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
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          setTimeout(() => {
            setExpandedCards(prev => {
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }, 1000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.service-card-observer').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('resize', calculatePadding);
      observer.disconnect();
    };
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
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink leading-[1.1] max-w-2xl uppercase break-words">
            {title || dict?.servicesSlider?.defaultTitle}
          </h2>
          <div className="flex flex-col items-start xl:items-end gap-8 xl:max-w-md">
            <p className="font-sans text-ink/50 leading-relaxed font-medium xl:text-right">
              {dict?.servicesSlider?.subtitle}
            </p>
            {/* Sliders Navigation */}
            <div className="flex gap-4">
              <button onClick={scrollLeft} aria-label="Прокрутити вліво" className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={scrollRight} aria-label="Прокрутити вправо" className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
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
            data-index={index}
            className="service-card-observer snap-start flex-shrink-0 w-[85vw] sm:w-[420px] bg-surface rounded-[2.5rem] p-8 lg:p-10 flex flex-col min-h-[380px] h-auto justify-between group relative mobile-hover-card"
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

            {/* Action Button Bottom (Expanding Pill on In-View) */}
            <div className="relative z-10 mt-auto flex justify-start">
              {(() => {
                const isExpanded = expandedCards.has(index);
                const pillClass = `relative overflow-hidden rounded-full border transition-all duration-500 ease-out flex items-center p-1.5 h-16 ${
                  isExpanded ? 'w-full border-transparent justify-between' : 'w-16 border-ink/10 bg-white justify-center'
                }`;
                const bgClass = `absolute inset-0 z-0 bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ease-in-out pointer-events-none ${
                  isExpanded ? 'opacity-100' : 'opacity-0'
                }`;
                const textClass = `relative z-10 text-white font-bold font-sans tracking-wide whitespace-nowrap overflow-hidden transition-all duration-500 ${
                  isExpanded ? 'opacity-100 max-w-[120px] ml-5' : 'opacity-0 max-w-0 ml-0'
                }`;
                const iconContainerClass = `relative z-10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors duration-500 shadow-sm ${
                  isExpanded ? 'bg-white text-ink' : 'text-ink bg-white'
                }`;
                const iconClass = `w-5 h-5 transition-transform ${isExpanded ? 'rotate-45' : ''}`;

                const content = (
                  <>
                    <div className={bgClass} />
                    <span className={textClass}>{dict?.common?.moreInfo}</span>
                    <div className={iconContainerClass}>
                      <ArrowUpRight className={iconClass} />
                    </div>
                  </>
                );

                return service.href ? (
                  <Link href={service.href} className={pillClass}>
                    {content}
                  </Link>
                ) : (
                  <div className={pillClass}>
                    {content}
                  </div>
                );
              })()}
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
