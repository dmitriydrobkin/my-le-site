'use client';

import Link from 'next/link';
import { Instagram, Youtube, Send, Facebook, ArrowUpRight } from 'lucide-react';
import { QuizTrigger } from './QuizTrigger';

export function Footer() {
  const quickLinks = [
    { label: 'Реклама', href: '#' },
    { label: 'Разработка', href: '#' },
    { label: 'Дизайн', href: '#' },
    { label: 'Продакшн', href: '#' },
    { label: 'Супровод', href: '#' },
    { label: 'Про нас', href: '#' },
    { label: 'Отзывы', href: '#' },
    { label: 'FAQ', href: '#' },
  ];

  return (
    <footer className="bg-ink text-white pt-20 pb-10 mt-auto rounded-t-[3rem] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          {/* Column 1: Consultation Card (Col Span 4) */}
          <div className="lg:col-span-4 flex">
            <QuizTrigger className="w-full relative overflow-hidden bg-[#E5FF38] text-ink rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 shadow-lg text-left h-full min-h-[350px]">
              {/* Abstract Shape Background */}
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-cyan-400 via-blue-500 to-transparent rounded-full mix-blend-multiply opacity-80 blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              <div className="absolute -bottom-10 left-10 w-60 h-60 bg-gradient-to-tr from-emerald-400 to-transparent rounded-full mix-blend-multiply opacity-60 blur-xl pointer-events-none" />
              
              <h3 className="relative z-10 font-display text-4xl md:text-5xl font-bold leading-[1.1]">
                Получить<br />
                консультацию
              </h3>
              
              <div className="relative z-10 flex justify-end mt-10">
                <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </QuizTrigger>
          </div>

          {/* Column 2: Quick Links (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-10">
            <h4 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white opacity-50" />
              Быстрые ссылки
            </h4>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contacts (Col Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h4 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white opacity-50" />
              Контакты
            </h4>
            <div className="flex flex-col gap-6">
              <a href="tel:+380988567777" className="font-mono text-xl font-medium hover:text-coral transition-colors">
                +38 098 856 77 77
              </a>
              <a href="mailto:contact@nashe.agency" className="font-sans text-white/70 hover:text-white transition-colors">
                contact@nashe.agency
              </a>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} — MALYSHEV.DEV.</p>
          <p>Сайты и Telegram-боты, которые приносят прибыль 24/7.</p>
        </div>
      </div>
    </footer>
  );
}
