'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowUpRight } from 'lucide-react';
import { createPortal } from 'react-dom';

const PRODUCTS = [
  { label: 'Лендинги', href: '/services/landings' },
  { label: 'Сайты-визитки', href: '/services/business-cards' },
  { label: 'Корпоративные сайты', href: '/services/corporate' },
  { label: 'Интернет-магазины', href: '/services/ecommerce' },
  { label: 'Магазин + TG Бот', href: '/services/sites-and-bots' },
  { label: 'Telegram-боты', href: '/services/telegram-bots' },
];

export function ProductMenuModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-surface rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col animate-fade-in-up border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors z-10 shadow-sm hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2 pr-12">
          Выберите продукт
        </h3>
        <p className="font-sans text-sm text-ink/60 font-medium mb-8">
          Куда бы вы хотели перейти?
        </p>

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
    </div>,
    document.body
  );
}
