'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowUpRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import { getDictionary } from '@/i18n/dictionaries';
import { niches } from '@/data/niches';

export function ProductMenuModal({ isOpen, onClose, lang }: { isOpen: boolean; onClose: () => void; lang: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Блокируем скролл когда модалка открыта
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const dict = getDictionary(lang)?.productMenu;
  const footerDict = getDictionary(lang)?.footer?.links;
  const linkPrefix = lang === 'uk' ? '' : '/ru';

  const PRODUCTS = [
    { label: footerDict?.landing || 'Лендинг', href: `${linkPrefix}/services/landings` },
    { label: footerDict?.businessCard || 'Сайт-визитка', href: `${linkPrefix}/services/business-cards` },
    { label: footerDict?.corporate || 'Корпоративный сайт', href: `${linkPrefix}/services/corporate` },
    { label: footerDict?.ecommerce || 'Интернет-магазин', href: `${linkPrefix}/services/ecommerce` },
    { label: 'Магазин + TG Бот', href: `${linkPrefix}/services/sites-and-bots` },
    { label: footerDict?.tgBots || 'Telegram-боты', href: `${linkPrefix}/services/telegram-bots` },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-surface rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col animate-fade-in-up border border-white/10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors z-10 shadow-sm hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-ink mb-6 pr-12">
              {dict?.popularTypes}
            </h3>
            <div className="flex flex-col gap-3">
              {PRODUCTS.map((product) => (
                <Link 
                  key={product.label}
                  href={product.href}
                  onClick={onClose}
                  className="group relative overflow-hidden bg-white rounded-2xl p-5 border border-ink/5 hover:border-coral/30 hover:shadow-lg transition-all flex items-center justify-between"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <span className="relative z-10 font-sans font-bold text-ink group-hover:text-coral transition-colors">
                    {product.label}
                  </span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-surface flex items-center justify-center text-ink/40 group-hover:bg-coral group-hover:text-white transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-2xl font-bold text-ink mb-6">
              {dict?.industrySolutions}
            </h3>
            <div className="flex flex-col gap-3">
              {niches.slice(0, 5).map((niche) => {
                const nicheName = typeof niche.name === 'object' ? (niche.name as any)[lang as 'uk' | 'ru'] : niche.name;
                return (
                <Link 
                  key={niche.slug}
                  href={`${linkPrefix}/solutions/${niche.slug}`}
                  onClick={onClose}
                  className="group relative overflow-hidden bg-white rounded-2xl p-4 border border-ink/5 hover:border-coral/30 hover:shadow-lg transition-all flex items-center justify-between"
                >
                  <span className="relative z-10 font-sans font-medium text-ink/80 group-hover:text-coral transition-colors">
                    {nicheName}
                  </span>
                  <div className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-ink/30 group-hover:text-coral transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              )})}
              
              <Link
                href={`${linkPrefix}/solutions`}
                onClick={onClose}
                className="mt-2 text-coral font-bold font-sans text-sm tracking-widest uppercase hover:text-ink transition-colors flex items-center gap-2"
              >
                {dict?.allSolutions} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="mt-8 p-6 bg-coral/5 rounded-2xl border border-coral/10">
              <p className="font-sans text-ink/70 font-medium mb-3">{dict?.notFound}</p>
              <Link
                href={`${linkPrefix}/contact`}
                onClick={onClose}
                className="inline-flex items-center gap-2 text-coral font-bold hover:text-ink transition-colors uppercase tracking-widest text-sm"
              >
                {dict?.leaveRequest} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
