'use client';

import Link from 'next/link';
import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const SERVICES = [
  {
    id: '01/',
    title: 'Лендинги',
    description: 'Одностраничные сайты с высокой конверсией для быстрого запуска продукта, сбора лидов и тестирования гипотез.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02/',
    title: 'Сайты-визитки',
    description: 'Компактное, стильное и информативное представительство вашего бизнеса в интернете для формирования сильного имиджа.',
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03/',
    title: 'Корпоративные сайты',
    description: 'Многостраничные решения для бизнеса. Инструмент для презентации компании, повышения лояльности и привлечения крупных клиентов.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04/',
    title: 'Интернет магазин',
    description: 'Мы создаем магазины для eCommerce, которые помогают не только продавать, но и завоевывать сердца клиентов. Удобный каталог и онлайн-оплата.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
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
  const [paddingLeft, setPaddingLeft] = useState(24);

  // Динамически высчитываем отступ слева, чтобы слайдер был в одной линии с контейнером (max-w 1400 + px-6)
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
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Centered full height) */}
      <section className="relative min-h-screen flex items-center px-6 max-w-[1400px] mx-auto pt-24">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-ink leading-[1.05] mb-10">
            DIGITAL РЕШЕНИЯ
            <br />
            ДЛЯ <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">БИЗНЕСА</span>
          </h1>
          <p className="font-sans text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-12">
            Проектируем, разрабатываем и запускаем высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-neon-coral hover:-translate-y-1 flex items-center gap-3 group">
              Обсудить проект
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
            <Link href="/services/sites-and-bots" className="flex items-center gap-3 text-ink font-bold hover:text-cyan transition-colors group">
              <span className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center bg-surface group-hover:border-cyan/30 transition-colors">
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
              <p className="font-sans text-ink/50 leading-relaxed font-medium lg:text-right">
                Сегодня бизнесу важно быть там, где его клиенты – в digital-среде. Разработка сайта помогает выстраивать коммуникацию, повышать доверие к бренду, поддерживать продажи и упрощать взаимодействие.
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
          <div style={{ minWidth: paddingLeft - 24 }} className="flex-shrink-0" />

          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[420px] bg-surface rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-[480px] justify-between group relative"
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
                  <p className="font-sans text-sm leading-relaxed text-ink/60 font-medium line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button Bottom (Expanding Pill on Hover) */}
              <div className="relative z-10 mt-auto flex justify-start">
                <div className="relative overflow-hidden rounded-full border border-ink/10 bg-white transition-all duration-500 ease-out flex items-center justify-center group-hover:justify-between p-1.5 w-24 h-16 group-hover:w-full group-hover:border-transparent">
                  {/* Background Image inside the expanded pill */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none">
                    <Image src={service.image} fill className="object-cover" alt="" />
                    <div className="absolute inset-0 bg-ink/40" />
                  </div>
                  
                  {/* Hover text */}
                  <span className="relative z-10 opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto text-white font-bold font-sans tracking-wide group-hover:ml-6 whitespace-nowrap overflow-hidden transition-all duration-500">
                    Подробнее
                  </span>
                  
                  {/* The round arrow button */}
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-ink bg-white group-hover:bg-coral group-hover:text-white transition-colors duration-500 shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Right padding explicit spacer */}
          <div style={{ minWidth: paddingLeft - 24 }} className="flex-shrink-0" />
        </div>
      </section>        </div>
      </section>

      {/* 3. BENTO GRID (ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV) */}
      <section className="py-24 lg:py-32 bg-white border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-16 uppercase">
            ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Карточка 1 - Светлая (Широкая) */}
            <div className="md:col-span-2 bg-surface rounded-[2rem] p-10 flex flex-col justify-center border border-ink/5 hover:border-ink/10 transition-colors">
              <span className="text-coral font-bold font-sans text-sm tracking-widest uppercase mb-4">Наш подход</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                Мы не просто пишем код, мы строим архитектуру ваших будущих продаж.
              </h3>
            </div>

            {/* Карточка 2 - Темная (Инвертированная) */}
            <div className="bg-ink rounded-[2rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <span className="font-display text-7xl font-bold text-white mb-2 block">275+</span>
                <span className="font-sans text-sm text-white/60">успешно запущенных проектов</span>
              </div>
            </div>

            {/* Карточка 3 - Темная (Иконка кода) */}
            <div className="bg-ink rounded-[2rem] p-10 flex flex-col items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="text-white text-6xl group-hover:text-cyan-400 transition-colors duration-500 font-mono relative z-10">
                &lt; / &gt;
              </div>
            </div>

            {/* Карточка 4 - Светлая (Акцент) */}
            <div className="bg-surface rounded-[2rem] p-10 flex flex-col justify-center border border-ink/5 hover:border-ink/10 transition-colors">
              <p className="font-sans text-ink/70 font-medium leading-relaxed">
                Чистый код, прозрачные процессы и соблюдение сроков. Каждая строка кода работает на ваш результат.
              </p>
            </div>

            {/* Карточка 5 - CTA Акцентная */}
            <div className="bg-gradient-to-br from-coral to-cyan-500 rounded-[2rem] p-10 flex flex-col justify-center text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services/sites-and-bots" className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
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
            <p className="font-sans text-ink/50 font-medium max-w-md lg:text-right">
              Мы используем передовые инструменты, чтобы ваши проекты работали молниеносно, безопасно и стабильно.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 rounded-full bg-ink text-white font-bold font-sans text-sm shadow-md">Next.js</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink hover:bg-white transition-colors cursor-pointer bg-transparent">React</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink hover:bg-white transition-colors cursor-pointer bg-transparent">TypeScript</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink hover:bg-white transition-colors cursor-pointer bg-transparent">Cloudflare D1</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink hover:bg-white transition-colors cursor-pointer bg-transparent">Tailwind CSS</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink hover:bg-white transition-colors cursor-pointer bg-transparent">Framer Motion</div>
            <div className="px-6 py-3 rounded-full border border-ink/20 text-ink font-bold font-sans text-sm hover:border-ink hover:bg-white transition-colors cursor-pointer bg-transparent">Telegram API</div>
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
