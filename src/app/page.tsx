'use client';

import Link from 'next/link';
import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const SERVICES = [
  {
    id: '01/',
    title: 'Интернет магазин',
    description: 'Мы создаем магазины для eCommerce, которые помогают не только продавать, но и завоевывать сердца клиентов. Удобный каталог...',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02/',
    title: 'Корпоративные сайты',
    description: 'Не стоит недооценивать корпоративные сайты - это все еще лучший инструмент презентации компании в диджитале. Покажите свои...',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03/',
    title: 'Интернет портал',
    description: 'Автоматизируйте рутинные рабочие процессы, упростите бизнес и дайте своим сотрудникам новые инструменты. Интернет...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04/',
    title: 'Каталог',
    description: 'Мы создаем сайты-каталоги для бизнеса, чтобы вы могли в режиме реального времени обновлять свой ассортимент и представлять...',
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '05/',
    title: 'Telegram Боты',
    description: 'Умные агенты для автоматизации бизнеса 24/7. Квалификация лидов, прием оплат и поддержка клиентов прямо в мессенджере.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  }
];

export default function B2BHomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Minimal 70% / Accent 30%) */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 max-w-[1400px] mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-ink leading-[1.05] mb-10">
            DIGITAL РЕШЕНИЯ
            <br />
            ДЛЯ <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">БИЗНЕСА</span>
          </h1>
          <p className="font-sans text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-12">
            Проектируем, разрабатываем и запускаем высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7.
          </p>
          <div className="flex items-center gap-6">
            <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-neon-coral hover:-translate-y-1 flex items-center gap-3 group">
              Обсудить проект
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/services/sites-and-bots" className="hidden sm:flex items-center gap-3 text-ink font-bold hover:text-cyan transition-colors">
              <span className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center bg-surface">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              Готовые решения
            </Link>
          </div>
        </div>
      </section>

      {/* 2. РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА (SPLIT + HORIZONTAL SCROLL) */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-16">
          {/* Header Split */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-ink leading-[1.1] max-w-2xl uppercase">
              РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА
            </h2>
            <div className="flex flex-col items-start lg:items-end gap-8 lg:max-w-md">
              <p className="font-sans text-ink/50 leading-relaxed font-medium">
                Сегодня бизнесу важно быть там, где его клиенты – в digital-среде. Разработка сайта помогает выстраивать коммуникацию, повышать доверие к бренду, поддерживать продажи и упрощать взаимодействие.
              </p>
              {/* Sliders Navigation */}
              <div className="flex gap-4">
                <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Inject left padding equivalent to the container margin for alignment */}
          <div className="min-w-[calc((100vw-1400px)/2)] flex-shrink-0 hidden xl:block" />

          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[400px] bg-surface rounded-[2rem] p-8 flex flex-col h-[450px] justify-between group relative overflow-hidden transition-all duration-500 hover:shadow-glass"
            >
              {/* Background image reveal on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
              </div>

              {/* Content Top */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-6 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                
                <div className="flex gap-4">
                  <span className="font-mono text-sm font-bold text-ink/40 group-hover:text-white/60 transition-colors duration-500">
                    {service.id}
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-ink/60 font-medium group-hover:text-white/80 transition-colors duration-500 line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button Bottom */}
              <div className="relative z-10 mt-auto">
                <div className="w-16 h-16 rounded-full border border-ink/10 flex items-center justify-center bg-white text-ink group-hover:bg-gradient-to-r group-hover:from-coral group-hover:to-cyan group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:scale-110 shadow-sm">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}

          {/* Right padding */}
          <div className="min-w-[6px] flex-shrink-0" />
        </div>
      </section>

      {/* 3. BENTO GRID (ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV) */}
      <section className="py-24 lg:py-32 bg-white border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-16 uppercase">
            ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Карточка 1 - Светлая (Широкая) */}
            <div className="md:col-span-2 bg-surface rounded-[2rem] p-10 flex flex-col justify-center">
              <span className="text-coral font-bold font-sans text-sm tracking-widest uppercase mb-4">Наш подход</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                Мы не просто пишем код, мы строим архитектуру ваших будущих продаж.
              </h3>
            </div>

            {/* Карточка 2 - Темная (Инвертированная) */}
            <div className="bg-ink rounded-[2rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="font-display text-7xl font-bold text-white mb-2 block">275+</span>
                <span className="font-sans text-sm text-white/60">успешно запущенных проектов</span>
              </div>
            </div>

            {/* Карточка 3 - Темная (Иконка кода) */}
            <div className="bg-ink rounded-[2rem] p-10 flex flex-col items-center justify-center group">
              <div className="text-white text-6xl group-hover:text-cyan transition-colors duration-500 font-mono">
                &lt; / &gt;
              </div>
            </div>

            {/* Карточка 4 - Светлая (Акцент) */}
            <div className="bg-surface rounded-[2rem] p-10 flex flex-col justify-center border border-ink/5">
              <p className="font-sans text-ink/70 font-medium leading-relaxed">
                Чистый код, прозрачные процессы и соблюдение сроков. Каждая строка кода работает на ваш результат.
              </p>
            </div>

            {/* Карточка 5 - CTA Акцентная */}
            <div className="bg-gradient-to-br from-coral to-cyan rounded-[2rem] p-10 flex flex-col justify-center text-white relative overflow-hidden group cursor-pointer">
              <Link href="/services/sites-and-bots" className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              <h3 className="relative z-10 font-display text-3xl font-bold mb-4">
                Узнать больше о наших продуктах
              </h3>
              <ArrowUpRight className="relative z-10 w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. СТЕК ТЕХНОЛОГИЙ */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
            <h2 className="font-display text-4xl font-bold text-ink">Стек технологий</h2>
            <p className="font-sans text-ink/50 font-medium max-w-md">
              Мы используем передовые инструменты, чтобы ваши проекты работали молниеносно, безопасно и стабильно.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Tags (Tabs styling) */}
            <div className="px-6 py-3 rounded-full bg-ink text-white font-bold font-sans text-sm">Next.js</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink transition-colors cursor-pointer">React</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink transition-colors cursor-pointer">TypeScript</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink transition-colors cursor-pointer">Cloudflare D1</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink transition-colors cursor-pointer">Tailwind CSS</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink transition-colors cursor-pointer">Framer Motion</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink transition-colors cursor-pointer">Telegram API</div>
          </div>
        </div>
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
