'use client';

import Link from 'next/link';
import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { FAQSection } from '@/components/FAQSection';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const SERVICES = [
  {
    id: '01/',
    title: 'Telegram Боты',
    description: 'Умные агенты для автоматизации бизнеса 24/7. Квалификация лидов, прием оплат и поддержка клиентов прямо в мессенджере.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02/',
    title: 'Лендинги',
    description: 'Одностраничные сайты с высокой конверсией для быстрого запуска продукта, сбора лидов и тестирования гипотез.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03/',
    title: 'Сайты-визитки',
    description: 'Компактное, стильное и информативное представительство вашего бизнеса в интернете для формирования сильного имиджа.',
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04/',
    title: 'Корпоративные сайты',
    description: 'Многостраничные решения для бизнеса. Инструмент для презентации компании, повышения лояльности и привлечения крупных клиентов.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '05/',
    title: 'Интернет магазин',
    description: 'Мы создаем магазины для eCommerce, которые помогают не только продавать, но и завоевывать сердца клиентов. Удобный каталог и онлайн-оплата.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  }
];

const PORTFOLIO = [
  {
    tag: 'REAL ESTATE',
    title: 'РИЕЛ: электронная площадка для...',
    description: 'Разработали комплекс решений, которые повысили продажи в три раза',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-3'
  },
  {
    tag: 'ECOMMERCE',
    title: 'Anabel Arto: лучший производитель женского белья в Украине',
    description: 'Новый уровень eCommerce для лучшего производителя женского белья в Украине',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    span: 'lg:col-span-4'
  },
  {
    tag: 'MEDIA',
    title: 'Украина.info: диджитал-платформа...',
    description: 'С нуля создали масштабную новостную платформу: веб-ресурсы, мобильное приложение и мульти-админпанель',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-3'
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
            Проектирую, разрабатываю и запускаю высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7.
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
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden">
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
          <div style={{ minWidth: paddingLeft }} className="flex-shrink-0" />

          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[420px] bg-surface rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-[380px] justify-between group relative"
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

              {/* Action Button Bottom (Round Button) */}
              <div className="relative z-10 mt-auto flex justify-start">
                <div className="w-16 h-16 rounded-full border border-ink/10 bg-white flex items-center justify-center text-ink group-hover:bg-coral group-hover:text-white group-hover:border-transparent transition-colors duration-500 shadow-sm">
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {/* Right padding explicit spacer */}
          <div style={{ minWidth: paddingLeft }} className="flex-shrink-0" />
        </div>
      </section>

      {/* 3. BENTO GRID (ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV) */}
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-16 uppercase">
            ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV?
          </h2>

          {/* Исправлена сетка для мобильных: убрана жесткая высота строк на мобильном */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
            {/* Карточка 1 - 100% фокус */}
            <div className="md:col-span-2 bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col justify-center border border-ink/5 hover:border-ink/10 transition-colors min-h-[250px]">
              <span className="text-coral font-bold font-sans text-sm tracking-widest uppercase mb-4">100% фокус на проекте</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
                Вы общаетесь напрямую с разработчиком, а не через цепочку менеджеров.
              </h3>
              <p className="mt-4 font-sans text-ink/60 font-medium max-w-lg">
                Это экономит время и исключает эффект «испорченного телефона».
              </p>
            </div>

            {/* Карточка 2 - 5 лет опыта */}
            <div className="bg-ink rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <span className="font-display text-6xl md:text-7xl font-bold text-white mb-2 block">5 лет</span>
                <span className="font-sans text-sm text-white/60 mb-4 block">в веб-дизайне и разработке</span>
                <p className="font-sans text-xs text-white/40 leading-relaxed">
                  Знаю, как сделать не просто красиво, но и технически грамотно для SEO и быстрой загрузки.
                </p>
              </div>
            </div>

            {/* Карточка 3 - 0$ хостинг */}
            <div className="bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col justify-center text-center relative overflow-hidden border border-ink/5 hover:border-ink/10 transition-colors group min-h-[250px]">
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-display text-5xl md:text-6xl font-bold text-ink mb-2 block">0 $</span>
                <span className="font-sans text-sm font-bold text-coral uppercase tracking-wider mb-4 block">в месяц за хостинг</span>
                <p className="font-sans text-sm text-ink/60 leading-relaxed">
                  Использую современные технологии Cloudflare. Ваши лендинги и боты работают стабильно без аренды серверов.
                </p>
              </div>
            </div>

            {/* Карточка 4 - CTA Акцентная */}
            <div className="md:col-span-2 bg-gradient-to-br from-coral to-cyan-500 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow min-h-[200px] md:min-h-[250px]">
              <Link href="/services/sites-and-bots" className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              <h3 className="relative z-10 font-display text-2xl md:text-3xl font-bold max-w-[200px] md:max-w-full">
                Узнать больше о продуктах
              </h3>
              <div className="relative z-10 self-end md:self-start mt-4 md:mt-0">
                <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ПРИМЕРЫ РАБОТ */}
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-surface border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase">
              Примеры работ
            </h2>
            <Link href="/portfolio" className="flex items-center gap-3 font-bold font-sans text-sm tracking-widest uppercase hover:text-coral transition-colors group">
              Смотреть все
              <span className="w-10 h-10 rounded-full border border-ink/10 bg-white flex items-center justify-center group-hover:border-coral transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 lg:gap-6">
            {PORTFOLIO.map((item, index) => (
              <Link href="#" key={index} className={`flex flex-col group cursor-pointer ${item.span}`}>
                <div className={`relative w-full aspect-[4/3] lg:aspect-auto ${index === 1 ? 'lg:h-[500px]' : 'lg:h-[400px]'} rounded-[2rem] overflow-hidden mb-4 lg:mb-8 shadow-glass border border-ink/5`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="flex justify-between items-start gap-4 h-full">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase block mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-coral transition-colors">
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

      {/* 5. ЧАСТЫЕ ВОПРОСЫ (FAQ) */}
      <FAQSection />

      {/* 5. ФИНАЛЬНЫЙ CTA БЛОК */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-ink rounded-[2rem] p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            
            {/* Фоновое 3D Изображение */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-100 pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" 
                fill 
                className="object-cover object-right" 
                alt="Abstract 3D Shape" 
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-ink via-ink/80 to-transparent" />
            </div>

            {/* Контент */}
            <div className="relative z-10 max-w-xl w-full">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide leading-tight">
                Давайте поговорим
                <br className="hidden md:block" />
                о вашем проекте
              </h2>
              <p className="font-sans text-white/50 text-xs md:text-sm font-light leading-relaxed mb-6 max-w-sm">
                Обращайтесь к нам за бесплатной консультацией, это возможность обсудить свои идеи с экспертами по диджитализации. Оставьте свой номер, мы перезвоним!
              </p>
              
              <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-4 md:px-10 md:py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-coral hover:-translate-y-1 flex items-center justify-center sm:justify-start gap-4 w-full sm:w-fit group">
                Обсудить проект
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
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
