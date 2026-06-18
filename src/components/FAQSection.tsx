'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, CheckCircle2, Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { captureLeadAction } from '@/server/actions/leads';

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
  // ⚡ ИСПРАВЛЕНИЕ ЗДЕСЬ: добавили ?. и ?? null, чтобы удовлетворить строгий TypeScript
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);
  const [phone, setPhone] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', 'Аноним (FAQ Форма)');
      formData.append('contactInfo', phone);
      formData.append('answers', JSON.stringify({ source: 'FAQ Section' }));
      
      const result = await captureLeadAction(formData);
      
      if (result.success) {
        setIsSuccess(true);
        setPhone('');
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert(result.error || 'Произошла ошибка при отправке');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Заголовок для мобильных, чтобы он оставался сверху, а форма уходила вниз */}
        <div className="lg:hidden mb-12">
          <h2 className="font-display text-5xl font-bold uppercase text-ink leading-[0.9] mb-6">
            Частые
            <br />
            вопросы
          </h2>
          <p className="font-sans text-ink/60 font-medium max-w-sm">
            Наши эксперты подберут самое эффективное решение для вашего бизнеса
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Левая часть - Заголовки и форма */}
          <div className="lg:w-1/3 flex flex-col order-2 lg:order-1">
            <div className="hidden lg:block">
              <h2 className="font-display text-[4rem] font-bold uppercase text-ink leading-[0.9] mb-6">
                Частые
                <br />
                вопросы
              </h2>
              <p className="font-sans text-ink/60 mb-12 font-medium max-w-sm">
                Наши эксперты подберут самое эффективное решение для вашего бизнеса
              </p>
            </div>
            
            <form className="hidden lg:flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="relative flex flex-col border border-ink/20 rounded-[1.5rem] bg-white focus-within:border-ink focus-within:ring-1 focus-within:ring-ink transition-all group py-2 px-1">
                <span className="text-[10px] text-ink/40 uppercase font-bold tracking-wider mb-0.5 px-4 pt-1">Номер телефона *</span>
                <div className="px-4 pb-1">
                  <PhoneInput
                    international
                    defaultCountry="UA"
                    value={phone}
                    onChange={setPhone}
                    className="custom-phone-input"
                    placeholder="XX XXX XX XX"
                    required
                  />
                </div>
                <style dangerouslySetInnerHTML={{__html: `
                  .custom-phone-input {
                    display: flex;
                    align-items: center;
                    width: 100%;
                  }
                  .custom-phone-input .PhoneInputCountry {
                    margin-right: 12px;
                    padding-right: 12px;
                    border-right: 1px solid rgba(0,0,0,0.1);
                  }
                  .custom-phone-input input {
                    flex: 1;
                    outline: none;
                    border: none;
                    background: transparent;
                    font-weight: bold;
                    color: inherit;
                  }
                  .custom-phone-input input::placeholder {
                    color: rgba(0,0,0,0.2);
                  }
                  .custom-phone-input .PhoneInputCountryIcon {
                    width: 24px;
                    height: 16px;
                  }
                  .custom-phone-input .PhoneInputCountrySelectArrow {
                    margin-left: 6px;
                    width: 8px;
                    height: 8px;
                    opacity: 0.5;
                  }
                `}} />
              </div>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-emerald-500/10 text-emerald-600 rounded-[1.5rem] py-4 px-6 font-bold font-sans text-sm text-center flex items-center justify-center gap-2 mt-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Заявка успешно отправлена!
                  </motion.div>
                ) : (
                  <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="submit" 
                    disabled={isSubmitting || !phone}
                    className="bg-coral hover:bg-coral/90 text-white rounded-[1.5rem] py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-coral hover:-translate-y-1 w-full mt-2 flex justify-center items-center gap-2 disabled:opacity-50 disabled:hover:-translate-y-0 disabled:shadow-none"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Заказать консультацию'}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Правая часть - Аккордеон */}
          <div className="lg:w-2/3 flex flex-col order-1 lg:order-2">
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