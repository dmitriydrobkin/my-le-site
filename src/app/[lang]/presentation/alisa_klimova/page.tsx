"use client";
import { motion, Variants } from 'framer-motion';
import { Target, CheckCircle2, LayoutTemplate, Settings2, Sparkles, Clock, Smartphone, Search, Database, FileText, CreditCard, ShieldCheck } from 'lucide-react';
import React from 'react';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const STAGGER: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AlisaKlimovaProposalFull() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="min-h-[100dvh] bg-surface selection:bg-coral/20 font-sans text-ink overflow-x-hidden">
      {/* Background Blobs */}
      <div className="pointer-events-none fixed inset-0 flex justify-center z-0 overflow-hidden">
        <div className="absolute top-[-10%] w-[800px] h-[800px] rounded-full bg-orange-300/10 blur-[120px] opacity-60 animate-blob" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-coral/5 blur-[120px] opacity-50 animate-blob animation-delay-2000" />
      </div>

      <main className="relative z-10 container mx-auto px-4 md:px-5 py-12 md:py-20 max-w-4xl space-y-20 md:space-y-24">
        
        {/* Header / Hero */}
        <motion.section initial="hidden" animate="visible" variants={STAGGER} className="text-center pt-8">
          <motion.div variants={FADE_UP} className="inline-block px-5 py-2 rounded-full bg-orange-500/10 text-orange-600 font-display text-xs md:text-sm font-bold tracking-widest uppercase mb-6 border border-orange-500/20 shadow-glass">
            Специально для Алисы Климовой
          </motion.div>
          <motion.h1 variants={FADE_UP} className="font-display text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-balance">
            Разработка персонального <br className="hidden md:block" />
            <span className="text-coral">сайта эксперта</span>
          </motion.h1>
          <motion.div variants={FADE_UP} className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium text-ink/60 mb-8">
            <span className="px-3 md:px-4 py-2 bg-white rounded-xl shadow-sm border border-black/5">👤 Клиент: <strong>Алиса Климова</strong></span>
            <span className="px-3 md:px-4 py-2 bg-white rounded-xl shadow-sm border border-black/5">💻 Платформа: <strong>Tilda Publishing</strong></span>
          </motion.div>
          <motion.p variants={FADE_UP} className="text-base md:text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Данный документ закрепляет все договоренности, техническое задание и этапы работы. Мы создадим сайт в теплой, экспертной и современной стилистике (эстетика Pinterest). 
            Живой дизайн без перегруженности текстом, агрессивных продаж и «медицинской стерильности».
          </motion.p>
        </motion.section>

        {/* 0. Мудборд */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-8">
          <motion.div variants={FADE_UP} className="text-center px-4">
             <h2 className="text-2xl md:text-3xl font-black font-display text-ink mb-4 text-balance">Визуальная концепция</h2>
             <p className="text-ink/70 text-base md:text-lg max-w-2xl mx-auto text-pretty">
               Примерная стилистика, на которую мы будем опираться (теплые тона, воздух, эстетика Pinterest, отсутствие «больничной стерильности»).
             </p>
          </motion.div>
          
          <motion.div variants={FADE_UP} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "/images/moodboard/moodboard-1.jpg",
              "/images/moodboard/moodboard-2.jpeg",
              "/images/moodboard/moodboard-3.jpeg",
              "/images/moodboard/moodboard-4.jpg"
            ].map((img, i) => (
              <div 
                key={i} 
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-glass border border-white/50 relative group cursor-zoom-in"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt="Moodboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm text-ink px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                    <Search className="w-4 h-4" /> Увеличить
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 1. Объем работ */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6 md:space-y-8">
          <motion.div variants={FADE_UP}>
             <h2 className="text-2xl md:text-4xl font-black font-display flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 text-balance">
               <span className="w-10 h-10 rounded-xl bg-coral text-white flex items-center justify-center text-xl shadow-neon-coral shrink-0">1</span>
               <span>Объем работ (Что входит в стоимость)</span>
             </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div variants={FADE_UP} className="p-6 md:p-8 bg-white/70 backdrop-blur-xl shadow-glass rounded-[2rem] border border-white/50">
              <h3 className="text-lg md:text-xl font-bold font-display mb-6 flex items-center gap-3 text-balance">
                <FileText className="text-coral w-6 h-6 shrink-0" /> Структура разделов
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Главная", desc: "Позиционирование, направления, социальные доказательства и отзывы." },
                  { title: "Обо мне", desc: "Ваш опыт, подход и принципы работы." },
                  { title: "Консультации", desc: "С разделением по форматам (взрослые, дети, беременность и т.д.)." },
                  { title: "Продукты", desc: "Удобная витрина для продажи книг, эфиров и гайдов." },
                  { title: "Статьи", desc: "Блог: настройка функционала + загрузка первых 3-5 статей." },
                  { title: "Контакты", desc: "Формы связи, ссылки на соцсети, юридические реквизиты." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-ink/80 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink">{item.title}:</strong> <span className="text-pretty">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={FADE_UP} className="p-6 md:p-8 bg-white/70 backdrop-blur-xl shadow-glass rounded-[2rem] border border-white/50">
              <h3 className="text-lg md:text-xl font-bold font-display mb-6 flex items-center gap-3 text-balance">
                <Settings2 className="text-coral w-6 h-6 shrink-0" /> Техническая настройка
              </h3>
              <ul className="space-y-4">
                {[
                  "Индивидуальный дизайн в Zero Block (никаких готовых шаблонов для основных экранов).",
                  "Мобильная и компьютерная адаптация.",
                  "Интеграция платежной системы PRODAMUS.",
                  "Настройка сквозного поиска по сайту и категориям.",
                  "Подключение домена, установка Яндекс.Метрики и базовые SEO-настройки.",
                  "Защита от спама и настройка Политики конфиденциальности."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-ink/80 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* 2. Этапы работы */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6 md:space-y-8">
          <motion.div variants={FADE_UP}>
             <h2 className="text-2xl md:text-4xl font-black font-display flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 text-balance">
               <span className="w-10 h-10 rounded-xl bg-coral text-white flex items-center justify-center text-xl shadow-neon-coral shrink-0">2</span>
               <span>Этапы работы (Пошаговое согласование)</span>
             </h2>
             <p className="mt-4 text-ink/70 text-base md:text-lg text-pretty">Мы работаем по жесткой системе, чтобы вы не получили «кота в мешке» и контролировали каждый шаг.</p>
          </motion.div>

          <div className="space-y-4 relative before:absolute before:inset-y-4 before:left-[1.35rem] md:before:left-8 before:w-0.5 before:bg-coral/20">
            {[
              { step: "01", title: "Брифование и анализ", price: "$20", desc: "Погружение в проект, анализ ваших конкурентов, выявление ключевых смыслов и болей аудитории." },
              { step: "02", title: "Проектирование структуры", price: "$40", desc: "Сборка архитектуры сайта, продумывание пользовательского пути (UX) и логики разделов." },
              { step: "03", title: "Разработка прототипа", price: "$30", desc: "Создание черно-белого скелета страниц (wireframes). Утверждаем расположение всех элементов." },
              { step: "04", title: "Визуальная концепция", price: "$20", desc: "Сбор мудборда, генерация ИИ-референсов в эстетике Pinterest для поиска идеального стиля." },
              { step: "05", title: "Дизайн Главной страницы", price: "$70", desc: "Отрисовка Главной с нуля в Zero Block. Заложено три круга правок для доведения визуала до идеала." },
              { step: "06", title: "Дизайн внутренних страниц", price: "$50", desc: "Перенос утвержденного стиля на страницы «Обо мне», «Консультации», «Продукты» и «Статьи»." },
              { step: "07", title: "Адаптивная верстка", price: "$40", desc: "Ручная подгонка каждого блока под экраны смартфонов и планшетов, чтобы сайт смотрелся безупречно." },
              { step: "08", title: "Технические интеграции", price: "$50", desc: "Подключение домена, настройка онлайн-кассы PRODAMUS, защита от спама и настройка поиска." },
              { step: "09", title: "SEO, Аналитика и Запуск", price: "$30", desc: "Базовая SEO-оптимизация, подключение Яндекс.Метрики, тестирование всех форм и передача прав." },
            ].map((item, index) => (
              <motion.div variants={FADE_UP} key={index} className="relative pl-14 pr-5 py-5 md:pl-24 md:pr-8 md:py-8 bg-white shadow-glass hover:shadow-glass-hover transition-shadow rounded-[2rem] border border-black/5 group">
                <div className="absolute left-2 md:left-4 top-6 md:top-1/2 md:-translate-y-1/2 w-7 h-7 md:w-9 md:h-9 bg-coral text-white font-bold font-display rounded-full flex items-center justify-center shadow-[0_0_0_6px_rgba(255,77,77,0.1)] group-hover:scale-110 transition-transform text-xs md:text-base">
                  {item.step}
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 md:gap-4">
                  <h4 className="text-lg md:text-xl font-bold font-display text-ink text-balance">{item.title}</h4>
                  <span className="self-start px-3 py-1 bg-coral/10 text-coral font-bold rounded-lg text-xs md:text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-ink/70 leading-relaxed text-sm md:text-base text-pretty">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. Бюджет и сроки */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6 md:space-y-8">
          <motion.div variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            <div className="p-6 md:p-10 bg-ink text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-coral/20 rounded-full blur-[60px]"></div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-6 md:mb-8 flex items-center gap-3 relative z-10 text-balance">
                <CreditCard className="w-6 h-6 text-coral shrink-0" /> Бюджет и расчеты
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 border-b border-white/10 pb-4">
                  <span className="text-white/60">Итоговая стоимость:</span>
                  <span className="text-3xl md:text-4xl font-black font-display">$350</span>
                </div>
                <div className="space-y-3 text-sm md:text-base text-white/80">
                  <p className="flex justify-between"><span>Предоплата (старт):</span> <strong>50% ($175)</strong></p>
                  <p className="flex justify-between"><span>Финальная оплата (сдача):</span> <strong>50% ($175)</strong></p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs md:text-sm text-white/60 leading-relaxed mt-4 text-pretty">
                  <strong>Способ:</strong> Оплата рублями с личной карты РФ через безопасную P2P-сделку (перевод по актуальному курсу на день оплаты).
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 bg-white shadow-glass rounded-[2rem] border border-black/5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-6 md:mb-8 flex items-center gap-3 text-ink text-balance">
                  <ShieldCheck className="w-6 h-6 text-coral shrink-0" /> Поддержка и гарантии
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ink mb-1 text-base">Полные права на сайт</strong>
                      <span className="text-ink/70 text-sm text-pretty">Домен и хостинг оформляются на вас. Все доступы передаются вам, никакой привязки к аккаунту разработчика.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Smartphone className="w-6 h-6 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ink mb-1 text-base">Обучение</strong>
                      <span className="text-ink/70 text-sm text-pretty">Запись подробной видеоинструкции, как вам самостоятельно менять цены, тексты и добавлять новые статьи без помощи программиста.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-8 p-4 bg-green-50 rounded-xl border border-green-100 text-xs md:text-sm text-green-800 font-medium text-pretty">
                <strong>Гарантия:</strong> 30 дней бесплатной технической поддержки и оперативного исправления любых ошибок после запуска.
              </div>
            </div>

          </motion.div>
        </motion.section>

        {/* 4. Перспективы масштабирования */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6">
           <motion.div variants={FADE_UP} className="p-6 md:p-10 bg-coral/5 rounded-[2.5rem] border border-coral/10">
             <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                 <Database className="w-6 h-6 text-coral" />
               </div>
               <h3 className="text-xl md:text-2xl font-bold font-display text-balance">Перспективы масштабирования</h3>
             </div>
             <p className="text-ink/80 leading-relaxed text-base md:text-lg text-pretty">
               Выбранная архитектура на Tilda позволяет в будущем реализовать вашу идею с <strong>закрытым клубом по подписке</strong> (проект «Меню для ребёнка и семьи» с базой рецептов). 
               Мы сможем интегрировать этот функционал отдельным этапом, когда вы будете к этому готовы, не переделывая весь сайт с нуля.
             </p>
           </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="pb-24 text-center px-4">
           <h3 className="text-xl md:text-2xl font-bold font-display mb-6 md:mb-8 text-ink text-balance">Если всё корректно — жму руку и можем начинать работу! 😉</h3>
           <a href="https://t.me/gde_malish?text=Дмитрий, посмотрела КП, всё супер, давайте начинать!" target="_blank" rel="noreferrer" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-coral text-white font-bold rounded-2xl shadow-neon-coral text-base md:text-lg hover:scale-105 transition-transform w-full sm:w-auto text-center">
             Утвердить КП и начать работу
           </a>
        </motion.section>

      </main>

      {/* Lightbox / Fullscreen Image Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 w-10 h-10 flex items-center justify-center rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Moodboard Fullscreen" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}
