'use client';

import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { TelegramIcon } from '@/components/TelegramIcon';

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen flex flex-col justify-center">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] h-full flex items-center px-6 max-w-[1400px] mx-auto pt-24 lg:pt-32 pb-16 w-full">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-ink/5 via-ink/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-50" />
        
        <div className="max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* TEXT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
              <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
              Связь со мной
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-tight text-ink leading-[1.05] mb-8 uppercase">
              Давайте обсудим <br className="hidden lg:block" />
              ваш проект
            </h1>
            
            <p className="font-sans text-lg lg:text-xl text-ink/60 font-medium leading-relaxed mb-10 max-w-lg">
              Я всегда открыт к новым интересным задачам. Напишите мне в любой удобный мессенджер, и мы оперативно решим ваш вопрос.
            </p>
            
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-max justify-center">
              Оставить заявку на сайте
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
          </div>

          {/* CONTACT DETAILS CARDS */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Telegram */}
            <a href="https://t.me/malyshev_dev" target="_blank" rel="noreferrer" className="bg-white rounded-[2rem] p-8 border border-ink/5 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <TelegramIcon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">Telegram</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">Самый быстрый способ связи</p>
              <div className="mt-auto font-sans font-bold text-blue-500 flex items-center gap-2">
                Написать <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Email */}
            <a href="mailto:contact@nashe.agency" className="bg-white rounded-[2rem] p-8 border border-ink/5 hover:border-coral/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">Email</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">Для подробных ТЗ и брифов</p>
              <div className="mt-auto font-sans font-bold text-coral flex items-center gap-2">
                contact@nashe.agency
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+380988567777" className="bg-white rounded-[2rem] p-8 border border-ink/5 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">Телефон</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">Для срочных вопросов</p>
              <div className="mt-auto font-sans font-bold text-emerald-500 flex items-center gap-2">
                +38 098 856 77 77
              </div>
            </a>

            {/* Location */}
            <div className="bg-white rounded-[2rem] p-8 border border-ink/5 hover:border-purple-500/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">Локация</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">Работаю со всем миром (Remote)</p>
              <div className="mt-auto font-sans font-bold text-purple-500 flex items-center gap-2">
                Online
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
