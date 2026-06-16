'use client';

import Link from 'next/link';
import { Send, ArrowUpRight } from 'lucide-react';
import { QuizTrigger } from './QuizTrigger';

// Встроенные SVG иконки для соцсетей, чтобы избежать конфликтов с lucide-react
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2.6 5.9 3.5 4.9 4.7 4.8 8.1 4.5 12 4.5 15.3 4.8c1.2.1 2.1 1.1 2.2 2.3.2 1.6.2 3.3.2 4.9s0 3.3-.2 4.9c-.1 1.2-1 2.2-2.3 2.3-3.3.3-7.2.3-10.6 0-1.2-.1-2.1-1.1-2.2-2.3-.2-1.6-.2-3.3-.2-4.9s0-3.3.2-4.9z"/>
    <path d="m10 15 5-3-5-3v6z"/>
  </svg>
);

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
    <footer className="bg-ink text-white pt-12 pb-6 mt-auto rounded-t-[3rem] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 border-b border-white/10 pb-10">
          
          {/* Column 1: Consultation Card (Col Span 4) */}
          <div className="lg:col-span-4 flex">
            <QuizTrigger className="w-full relative overflow-hidden bg-[#E5FF38] text-ink rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 shadow-lg text-left h-full min-h-[220px]">
              {/* Abstract Shape Background */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-cyan-400 via-blue-500 to-transparent rounded-full mix-blend-multiply opacity-80 blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              <div className="absolute -bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-emerald-400 to-transparent rounded-full mix-blend-multiply opacity-60 blur-xl pointer-events-none" />
              
              <h3 className="relative z-10 font-display text-3xl lg:text-4xl font-bold leading-[1.1] break-words">
                Получить<br />
                консультацию
              </h3>
              
              <div className="relative z-10 flex justify-end mt-6">
                <div className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </QuizTrigger>
          </div>

          {/* Column 2: Quick Links (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8">
            <h4 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
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
            <h4 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
              Контакты
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+380988567777" className="font-mono text-xl font-medium hover:text-coral transition-colors">
                +38 098 856 77 77
              </a>
              <a href="mailto:contact@nashe.agency" className="font-sans text-white/70 hover:text-white transition-colors">
                contact@nashe.agency
              </a>
              <div className="flex gap-3 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Send className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                  <Youtube className="w-4 h-4" />
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
