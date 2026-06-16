'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const FAQS = [
  {
    id: '01',
    question: 'Что нужно понимать, заказывая разработку проекта?',
    answer: 'Создание сайта или Telegram-бота — это инвестиция в автоматизацию вашего бизнеса. Работая с нами, вы получаете премиальное качество архитектуры и дизайна, которое выделяет вас среди конкурентов. Мы берем на себя полное погружение в ваши процессы, поэтому вам не придется тратить время на микроменеджмент. Для старта достаточно оставить заявку, и мы обсудим детали на бесплатной консультации.',
  },
  {
    id: '02',
    question: 'Что означает разработка «под ключ»?',
    answer: 'Это полный цикл создания цифрового продукта. Мы начинаем с бизнес-аналитики и проектирования UX-прототипа, чтобы вы сразу понимали, как будет работать система. Затем наша команда разрабатывает уникальный дизайн, пишет чистый код, интегрирует необходимые сервисы (CRM, платежные системы) и проводит глубокое тестирование. На выходе вы получаете полностью готовый к запуску и приносящий прибыль инструмент.',
  },
  {
    id: '03',
    question: 'Сколько времени занимает процесс разработки?',
    answer: 'Сроки напрямую зависят от масштабов проекта. Разработка стильного лендинга или простого бота занимает от 2 до 4 недель. Полноценный интернет-магазин или корпоративный портал потребует от 1,5 до 3 месяцев кропотливой работы. Точные сроки мы всегда фиксируем в договоре после составления технического задания.',
  },
  {
    id: '04',
    question: 'Как формируется стоимость проекта?',
    answer: 'Цена складывается из трех ключевых факторов: тип продукта (одностраничный сайт обойдется значительно дешевле сложного e-commerce решения), уровень эксклюзивности дизайна и объем функционала (интеграция сложных API, личные кабинеты, нестандартные анимации). Мы всегда предлагаем оптимальные решения под ваш бюджет без потери в качестве.',
  }
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Левая часть - Заголовки и форма */}
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="font-display text-5xl lg:text-[4rem] font-bold uppercase text-ink leading-[0.9] mb-6">
              Частые
              <br />
              вопросы
            </h2>
            <p className="font-sans text-ink/60 mb-12 font-medium max-w-sm">
              Наши эксперты подберут самое эффективное решение для вашего бизнеса
            </p>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex items-center border border-ink/20 rounded-[1.5rem] bg-white focus-within:border-ink focus-within:ring-1 focus-within:ring-ink transition-all overflow-hidden group">
                <div className="flex items-center gap-2 pl-6 pr-4 py-4 border-r border-ink/10 cursor-pointer bg-surface/50 group-hover:bg-surface transition-colors">
                  <span className="text-xl">🇺🇦</span>
                  <span className="text-[10px] text-ink/40">▼</span>
                </div>
                <div className="flex flex-col px-5 py-2 w-full bg-white">
                  <span className="text-[10px] text-ink/40 uppercase font-bold tracking-wider mb-0.5">Номер телефона *</span>
                  <div className="flex items-center">
                    <span className="text-ink font-bold mr-1.5">+380</span>
                    <input 
                      type="tel" 
                      placeholder="XX XXX XX XX" 
                      className="w-full outline-none text-ink font-bold placeholder-ink/20 bg-transparent" 
                      required 
                    />
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                className="bg-coral hover:bg-coral/90 text-white rounded-[1.5rem] py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-coral hover:-translate-y-1 w-full mt-2 flex justify-center"
              >
                Заказать консультацию
              </button>
            </form>
          </div>

          {/* Правая часть - Аккордеон */}
          <div className="lg:w-2/3 flex flex-col">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div 
                  key={faq.id} 
                  className="border-t border-ink/10 first:border-none"
                >
                  <button 
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center gap-6 py-8 text-left group"
                  >
                    <span className="font-mono text-sm font-bold text-ink/30 w-6 shrink-0 mt-1 self-start">
                      {faq.id}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink group-hover:text-coral transition-colors flex-1 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-coral text-white rotate-180' : 'bg-surface text-ink group-hover:bg-ink group-hover:text-white'}`}>
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-12 md:pl-12 text-ink/60 font-sans font-medium leading-relaxed max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-ink/10" />
          </div>

        </div>
      </div>
    </section>
  );
}