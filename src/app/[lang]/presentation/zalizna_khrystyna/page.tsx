"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Users, PlayCircle, Star, ZoomIn } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const STAGGER: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function KhrystynaPresentation() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const styleImages = [
    { src: "/images/presentation/khrystyna/design1.jpg", title: "Дизайн №1: Класичний Експерт", desc: "Світлий, стриманий дизайн із акцентом на глибоку синю палітру. Ідеально структурує складні тарифи та кейси. Викликає відчуття стабільності, системності та надійності." },
    { src: "/images/presentation/khrystyna/design2.jpg", title: "Дизайн №2: Мінімалізм та SaaS", desc: "Ультрасучасний дизайн із чорно-білим контрастом та неоново-зеленими акцентами. Передає вайб топового B2B-агентства. Клієнт відразу розуміє, що ви працюєте з цифрами та системним трафіком." },
    { src: "/images/presentation/khrystyna/design3.jpg", title: "Дизайн №3: Елегантна Естетика", desc: "Теплі нюдові та кавові відтінки. Пряме логічне продовження вашого преміального Instagram. М'який дизайн, який продає через статус, естетику та високий рівень довіри." },
    { src: "/images/presentation/khrystyna/design4.jpg", title: "Дизайн №4: Корпоративний Консалтинг", desc: "Світлі пастельні тони з елементами скла (glassmorphism). Виглядає як сайт дорогої консалтингової B2B-компанії. Підкреслює вашу масштабність та статус стратега." },
    { src: "/images/presentation/khrystyna/design5.jpg", title: "Дизайн №5: Журнальний Бренд", desc: "Яскравий мікс електрик-синього та контрастного фону. Жорсткий фокус на вашій особистості. Велика типографіка, яка кричить про експертність і привертає максимум уваги." },
    { src: "/images/presentation/khrystyna/design6.jpg", title: "Дизайн №6: Абсолютна Прозорість", desc: "Світло-блакитні та м'ятні відтінки (естетика преміальних клінік). Створює відчуття чистоти та безпеки. Ідеально, якщо головне для ваших клієнтів — надійність їхніх бюджетів." },
    { src: "/images/presentation/khrystyna/design7.jpg", title: "Дизайн №7: Темний Преміум (Dark Mode)", desc: "Глибокий темний фон із неоновими акцентами. Виглядає максимально дорого, зухвало та інноваційно. Стиль світових digital-лідерів, що продає на дуже високі чеки." }
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-coral/20 selection:text-coral overflow-hidden font-sans text-ink">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 flex justify-center z-0 overflow-hidden">
        <div className="absolute top-[-10%] w-[800px] h-[800px] rounded-full bg-cyan/5 blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-coral/5 blur-[100px] mix-blend-multiply opacity-30 animate-blob animation-delay-200" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-20 lg:px-12 max-w-6xl">
        
        {/* Block 1: Hero */}
        <motion.section 
          initial="hidden" animate="visible" variants={STAGGER}
          className="text-center max-w-4xl mx-auto pt-10 pb-24"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-sm font-semibold tracking-wide text-ink/70 shadow-sm border border-black/5">
            <Star className="w-4 h-4 text-coral" />
            B2B Strategy & Premium Packaging
          </motion.div>
          <motion.h1 variants={FADE_UP} className="section-title mb-6 leading-tight">
            Персональна веб-концепція для <br className="hidden md:block"/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ink to-ink/60">Христини Залізної</span>
          </motion.h1>
          <motion.p variants={FADE_UP} className="section-subtitle mx-auto text-2xl mb-8 text-ink/80">
            Преміальне пакування вашої експертності для продажу послуг на високі чеки.
          </motion.p>
          <motion.p variants={FADE_UP} className="text-ink/60 leading-relaxed text-lg max-w-2xl mx-auto font-medium">
            Сайт, який працює як ваш найкращий менеджер з продажу. Ми розробили концепцію лендингу, що підкреслює ваш статус стратега, автоматизує обробку запитів та конвертує трафік у теплі заявки на VIP-супровід і менторство.
          </motion.p>
        </motion.section>

        {/* Block 2: Marketing Funnel Detailed Logic */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-16 md:py-24 relative"
        >
          <motion.div variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 tracking-tight">
              Структура сайту: Логіка високих конверсій
            </h2>
            <p className="text-ink/70 text-base md:text-lg font-medium leading-relaxed">
              Ми будуємо не просто гарну сторінку, а повноцінного автоматизованого менеджера з продажу. Кожен блок має чітку психологічну ціль — провести клієнта від зацікавленості до бажання працювати саме з вами.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative px-4 md:px-8">
            {/* Timeline Line (Left on mobile, Center on desktop) */}
            <div className="absolute left-[43px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-coral/0 via-coral/30 to-coral/0 md:-translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-24">
              {/* Step 1 (Odd: Right on mobile, Left on desktop) */}
              <motion.div variants={FADE_UP} className="relative flex w-full group">
                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-translate-x-1/2 rounded-2xl bg-white shadow-glass border border-black/5 flex items-center justify-center text-coral z-10 group-hover:scale-110 group-hover:shadow-neon-coral transition-all duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-16 md:text-right pt-2 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-coral transition-colors">1. Оффер та Позиціонування</h3>
                  <p className="text-ink/60 leading-relaxed font-medium text-sm md:text-base">
                    Формуємо сильне перше враження. Використовуємо вашу коронну фразу про «збільшення доходу в 3 рази» як головний гачок. Одразу відсікаємо нецільових клієнтів: заявляємо, що ви працюєте з цифрами, окупністю (ROI) та масштабним трафіком, а не просто робите креативи.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 (Even: Right on mobile, Right on desktop) */}
              <motion.div variants={FADE_UP} className="relative flex w-full group">
                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-translate-x-1/2 rounded-2xl bg-white shadow-glass border border-black/5 flex items-center justify-center text-cyan z-10 group-hover:scale-110 group-hover:shadow-glass-hover transition-all duration-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 pt-2 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-cyan transition-colors">2. Блок Довіри (Кейси та ROI)</h3>
                  <p className="text-ink/60 leading-relaxed font-medium text-sm md:text-base">
                    Люди купують результат. До того, як назвати ціну, ми демонструємо ваші найкращі кейси у форматі «Точка А ➔ Точка Б». Замість довгих текстів — інфографіка з цифрами: вкладений бюджет, вартість ліда (CPL), окупність. Це знімає 80% заперечень.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 (Odd: Right on mobile, Left on desktop) */}
              <motion.div variants={FADE_UP} className="relative flex w-full group">
                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-translate-x-1/2 rounded-2xl bg-white shadow-glass border border-black/5 flex items-center justify-center text-coral z-10 group-hover:scale-110 group-hover:shadow-neon-coral transition-all duration-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-16 md:text-right pt-2 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-coral transition-colors">3. Комплексний Таргет (Сходинки)</h3>
                  <p className="text-ink/60 leading-relaxed font-medium text-sm md:text-base">
                    Продаємо через «вибір без вибору». Оформлюємо послугу у вигляді 3-х тарифів. Використовуємо ефект цінового якоря: VIP-тариф з високою ціною робить середній "Оптимальний" пакет максимально привабливим. Описуємо тарифи через вигоди, а не процеси.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 (Even: Right on mobile, Right on desktop) */}
              <motion.div variants={FADE_UP} className="relative flex w-full group">
                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-translate-x-1/2 rounded-2xl bg-white shadow-glass border border-black/5 flex items-center justify-center text-ink z-10 group-hover:scale-110 transition-all duration-500">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 pt-2 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-ink transition-colors">4. Менторство та Консалтинг</h3>
                  <p className="text-ink/60 leading-relaxed font-medium text-sm md:text-base">
                    Упаковуємо ваші знання як преміальний продукт. Натискаємо на біль "зливу бюджету" при самостійних налаштуваннях. Головний тригер конверсії тут — потужні бонуси (записи зустрічей, 14 днів підтримки), щоб зняти страх клієнта залишитися наодинці з проблемами.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 (Odd: Right on mobile, Left on desktop) */}
              <motion.div variants={FADE_UP} className="relative flex w-full group">
                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-translate-x-1/2 rounded-2xl bg-ink shadow-glass border border-white/10 flex items-center justify-center text-white z-10 group-hover:scale-110 transition-all duration-500">
                  <Users className="w-6 h-6" />
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-16 md:text-right pt-2 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-ink group-hover:text-coral transition-colors">5. Екосистема Powerly (B2B Партнерство)</h3>
                  <p className="text-ink/60 leading-relaxed font-medium text-sm md:text-base">
                    Стратегічний блок для колаборацій. Запрошуємо до співпраці суміжних спеціалістів (SMM, відділи продажів, продакшени) для обміну лідами. Це розширює вашу воронку на партнерів, які продаватимуть ваші послуги за відсоток.
                  </p>
                </div>
              </motion.div>

              {/* Step 6 (Even: Right on mobile, Right on desktop) */}
              <motion.div variants={FADE_UP} className="relative flex w-full group">
                <div className="absolute left-0 md:left-1/2 w-14 h-14 md:-translate-x-1/2 rounded-2xl bg-coral shadow-neon-coral flex items-center justify-center text-white z-10 group-hover:scale-110 transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 pt-2 md:pt-0">
                  <div className="glass-panel p-6 md:p-8 rounded-3xl border-coral/20">
                    <h3 className="text-xl font-bold mb-3 tracking-tight text-ink">6. Lead-Magnet та CTA</h3>
                    <p className="text-ink/60 leading-relaxed font-medium text-sm">
                      Замість банального "Залиште заявку", ми пропонуємо цінність (напр., безкоштовний міні-аудит). Це знижує стрес від першого контакту.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Block 3: Visual Concept */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-24"
        >
          <motion.div variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">Візуальна концепція</h2>
            <p className="text-ink/60 text-lg font-medium leading-relaxed">
              Я підготував 7 різних стилів, які ідеально підійдуть для вашої ніші. Від суворого B2B-мінімалізму до естетичного журналу.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 bg-white/50 px-5 md:px-6 py-3 rounded-3xl text-sm text-ink/80 font-medium backdrop-blur-sm border border-black/5 shadow-glass text-left">
              <ZoomIn className="w-5 h-5 text-coral shrink-0" />
              <span>
                Натисніть на будь-який дизайн,<br />
                щоб збільшити
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {styleImages.map((img, idx) => (
              <motion.div 
                key={idx} variants={FADE_UP}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-glass group-hover:shadow-glass-hover transition-all duration-500 border border-black/5">
                  <Image 
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md text-ink p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowRight className="w-6 h-6 -rotate-45" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 font-display tracking-tight group-hover:text-coral transition-colors">{img.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed font-medium flex-grow">{img.desc}</p>
              </motion.div>
            ))}
          </div>

          <Lightbox
            open={lightboxIndex >= 0}
            close={() => setLightboxIndex(-1)}
            index={lightboxIndex}
            slides={styleImages.map(img => ({ src: img.src }))}
          />
        </motion.section>

        {/* Block 4: Footer CTA */}
        <motion.section 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
           className="py-16 text-center max-w-3xl mx-auto"
        >
          <div className="glass-panel p-12 md:p-16 rounded-[3rem] relative overflow-hidden border-coral/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coral/5" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10 tracking-tight">
              Який із цих стилів вам візуально ближчий?
            </h2>
            <p className="text-ink/70 text-lg mb-10 relative z-10 font-medium">
              Натисніть кнопку нижче, щоб повідомити мені свій вибір, і ми почнемо роботу!
            </p>
            <a 
              href="https://www.instagram.com/gde_malish/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-4 relative z-10 shadow-neon-coral"
            >
              Написати в Instagram
            </a>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
