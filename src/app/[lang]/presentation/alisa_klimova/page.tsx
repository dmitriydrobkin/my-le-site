"use client";
import { motion, Variants } from 'framer-motion';
import { Target, CheckCircle2, LayoutTemplate, Settings2, Sparkles, Clock, Smartphone, Search, Database, FileText, CreditCard, ShieldCheck, ArrowRight, Home, Users, ShoppingBag, Heart, Shield, Printer, Download, FileSpreadsheet, Gift } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const STAGGER: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const siteModules = [
  { id: "home", title: "Главная страница", icon: Home, desc: "Структура первого экрана, болей ЦА и решений." },
  { id: "about", title: "Обо мне", icon: Heart, desc: "Продажа экспертности через эмпатию и твердые факты." },
  { id: "products", title: "Продукты", icon: ShoppingBag, desc: "Витрина курсов и книг, снятие барьеров." },
  { id: "consultations", title: "Консультации", icon: Users, desc: "Личная работа: от детей до беременности." },
  { id: "articles", title: "Статьи", icon: FileText, desc: "Блог как генератор продаж и доверия." },
];

export default function AlisaKlimovaProposalFull() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const params = useParams();
  const lang = params.lang || "ru";

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

        {/* 4. Фактический кошторис и финализация (План vs Факт) */}
        <motion.section id="estimate-section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6 md:space-y-8">
          <motion.div variants={FADE_UP}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 font-display text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
               <Sparkles className="w-4 h-4" /> Финальный расчет · Сдача проекта
             </div>
             <h2 className="text-2xl md:text-4xl font-black font-display flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 text-balance">
               <span className="w-10 h-10 rounded-xl bg-coral text-white flex items-center justify-center text-xl shadow-neon-coral shrink-0">4</span>
               <span>Фактический кошторис реализации (План vs Факт)</span>
             </h2>
             <p className="mt-4 text-ink/70 text-base md:text-lg text-pretty">
               Сравнение базового объема по договору и фактически реализованной экосистемы сайта с расчетом остатка к оплате.
             </p>
          </motion.div>

          <motion.div variants={FADE_UP} className="bg-white/80 backdrop-blur-xl shadow-glass rounded-[2.5rem] border border-black/5 p-6 md:p-10 space-y-8">
            
            {/* Обоснование масштабирования и скидки */}
            <div className="p-5 md:p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-sm md:text-base text-ink/80 leading-relaxed">
              <strong className="text-ink block mb-2 font-display text-base md:text-lg text-orange-600">
                💡 Масштабирование проекта и партнерская скидка:
              </strong>
              На старте в базовую смету <strong>$350</strong> закладывалось 6 разделов и общая витрина продуктов, где курсы и гайды открывались в небольших всплывающих окнах (поп-апах). 
              В процессе разработки для максимальной конверсии продаж под каждый из ваших продуктов с нуля были спроектированы и свёрстаны <strong>7 полноценных продающих лендингов</strong> (в сумме 58 кастомных блоков кода: программа, тарифы, боли, модальные окна и FAQ).
              <div className="mt-3 text-xs md:text-sm text-ink/70">
                По расценкам нашего КП одна такая страница стоит $50–$70 ($365 суммарно). В знак благодарности за доверие и для долгосрочного сотрудничества я сделал для вас <strong>скидку более 70%</strong>: каждый лендинг посчитан <strong>всего по $15 (+ $105)</strong>, добавлена подготовка к Черной пятнице (+ $5), а все 6 страниц юр. хаба, интерактивная 404 и 10 статей блога (вместо 3–5) переданы в подарок ($0).
              </div>
            </div>

            {/* Таблица План vs Факт */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base border-collapse">
                <thead>
                  <tr className="border-b border-black/10 text-xs md:text-sm uppercase tracking-wider text-ink/50">
                    <th className="py-3 px-2">Категория работ</th>
                    <th className="py-3 px-2 hidden sm:table-cell">По договору в КП ($350)</th>
                    <th className="py-3 px-2">Сделано по факту</th>
                    <th className="py-3 px-2 text-right">Стоимость</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-ink/80">
                  <tr>
                    <td className="py-4 px-2">
                      <strong className="text-ink block">Базовый сайт по КП</strong>
                      <span className="text-xs text-ink/50">Главная, Обо мне, Консультации, витрина Продуктов, Блог, Политика + Prodamus, домен, метрика</span>
                    </td>
                    <td className="py-4 px-2 text-xs md:text-sm text-ink/60 hidden sm:table-cell">6 разделов (~27 блоков)</td>
                    <td className="py-4 px-2 text-xs md:text-sm text-emerald-700 font-medium">Выполнено 100%</td>
                    <td className="py-4 px-2 text-right font-bold text-ink whitespace-nowrap">$350.00</td>
                  </tr>

                  <tr className="bg-orange-50/50">
                    <td className="py-4 px-2">
                      <strong className="text-ink block">7 продающих лендингов продуктов</strong>
                      <span className="text-xs text-orange-600 block mt-0.5">
                        /prikorm (12 бл.), /menu (9 бл.), /recipes (8 бл.), /sadik (8 бл.), /cosmetics (7 бл.), /protein (7 бл.), /omega3 (7 бл.)
                      </span>
                    </td>
                    <td className="py-4 px-2 text-xs md:text-sm text-ink/60 hidden sm:table-cell">0 страниц (планировались только поп-апы на витрине)</td>
                    <td className="py-4 px-2 text-xs md:text-sm text-orange-700 font-medium">
                      +7 полноценных лендингов (Скидка &gt;70%)
                    </td>
                    <td className="py-4 px-2 text-right whitespace-nowrap">
                      <span className="text-xs text-ink/40 line-through block sm:inline sm:mr-2">$365</span>
                      <strong className="text-orange-600 font-bold">+$105.00</strong>
                      <span className="text-[11px] text-orange-500 block font-normal">(7 × $15)</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-2">
                      <strong className="text-ink block">Подготовка сайта к Черной пятнице</strong>
                      <span className="text-xs text-purple-600 block mt-0.5">
                        Акционные плашки, баннеры на витрине, спец-тарифы для ноябрьской распродажи
                      </span>
                    </td>
                    <td className="py-4 px-2 text-xs md:text-sm text-ink/60 hidden sm:table-cell">Не входило в КП</td>
                    <td className="py-4 px-2 text-xs md:text-sm text-purple-700 font-medium">
                      Готово к запуску
                    </td>
                    <td className="py-4 px-2 text-right font-bold text-purple-600 whitespace-nowrap">
                      +$5.00
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-2">
                      <strong className="text-ink block">Юридический хаб, 404 и блог</strong>
                      <span className="text-xs text-ink/50">
                        6 юр. страниц (/privacy, /offer-products, /offer-consultations, /consent, /disclaimer, /payments), интерактивная /404 + 10 статей вместо 3-5
                      </span>
                    </td>
                    <td className="py-4 px-2 text-xs md:text-sm text-ink/60 hidden sm:table-cell">1 страница политики + 3-5 статей</td>
                    <td className="py-4 px-2 text-xs md:text-sm text-emerald-700 font-medium">
                      +6 страниц + 5 доп. статей + Schema.org
                    </td>
                    <td className="py-4 px-2 text-right font-bold text-emerald-600 whitespace-nowrap">
                      $0.00 <span className="text-xs font-normal block text-emerald-500">(Бонус)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Итоговая сводка платежа с учетом предоплаты 13 000 руб */}
            <div className="p-6 md:p-8 bg-ink text-white rounded-3xl space-y-4">
              <div className="space-y-2 text-sm md:text-base border-b border-white/10 pb-4">
                <div className="flex justify-between items-center text-white/70">
                  <span>Базовый сайт по договору в КП:</span>
                  <span className="font-semibold text-white font-mono">$350.00</span>
                </div>
                <div className="flex justify-between items-center text-white/70">
                  <span>7 отдельных продуктовых лендингов со скидкой &gt;70% (7 × $15):</span>
                  <span className="font-semibold text-orange-400 font-mono">+$105.00</span>
                </div>
                <div className="flex justify-between items-center text-white/70">
                  <span>Подготовка к Черной пятнице (Black Friday промо):</span>
                  <span className="font-semibold text-purple-400 font-mono">+$5.00</span>
                </div>
                <div className="flex justify-between items-center text-white/70">
                  <span>6 юр. страниц, интерактивная 404 и 10 статей блога:</span>
                  <span className="font-semibold text-emerald-400 font-mono">$0.00 (В подарок)</span>
                </div>
                <div className="flex justify-between items-center text-base md:text-lg font-bold pt-2">
                  <span>Итоговая фактическая стоимость сайта (21 страница):</span>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-black font-mono text-white">$460.00</span>
                    <span className="text-xs text-white/60 block font-normal">(40 876 руб. по калькулятору Альфа-Банка)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-emerald-400 pt-1">
                  <span>Внесенная вами предоплата на старте:</span>
                  <span className="font-bold font-mono text-lg">-13 000 руб.</span>
                </div>
                <div className="flex justify-between items-center text-white/60 text-xs">
                  <span>Округление к 500 руб. в меньшую сторону (скидка в вашу пользу):</span>
                  <span className="font-semibold text-emerald-400 font-mono">-376 руб.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                  <div className="text-xs md:text-sm uppercase tracking-wider font-bold text-orange-400">
                    Финальный остаток к оплате при сдаче:
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">
                    С учетом скидки &gt;70% на лендинги, вычета предоплаты 13 000 руб. и округления к 500 руб.
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-5xl font-black font-mono text-orange-400">
                    27 500 руб.
                  </div>
                  <div className="text-xs text-white/60 font-mono mt-0.5">
                    (или $310.00 в эквиваленте)
                  </div>
                </div>
              </div>
            </div>

            {/* Кнопки скачивания PDF и перехода */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <Link
                href={`/${lang}/presentation/alisa_klimova/estimate`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-orange-600/30 transition-all active:scale-95 text-center"
              >
                <FileText className="w-5 h-5" /> Открыть и скачать официальный Кошторис (PDF)
              </Link>

              <a
                href="https://t.me/gde_malish?text=Дмитрий, посмотрела финальный кошторис по сайту, всё прозрачно и супер! Давайте завершать и принимать работу."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 text-ink font-semibold rounded-2xl border border-black/10 shadow-sm transition-all text-center"
              >
                Согласовать финал в Telegram
              </a>
            </div>

          </motion.div>
        </motion.section>

        {/* 5. Перспективы масштабирования */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6">
          <motion.div variants={FADE_UP} className="p-6 md:p-10 bg-coral/5 rounded-[2.5rem] border border-coral/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-coral" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-balance">5. Перспективы масштабирования</h3>
             </div>
             <p className="text-ink/80 leading-relaxed text-base md:text-lg text-pretty">
               Выбранная архитектура на Tilda позволяет в будущем реализовать вашу идею с <strong>закрытым клубом по подписке</strong> (проект «Меню для ребёнка и семьи» с базой рецептов). 
               Мы сможем интегрировать этот функционал отдельным этапом, когда вы будете к этому готовы, не переделывая весь сайт с нуля.
             </p>
           </motion.div>
        </motion.section>

        {/* 6. Детальная структура сайта (Модули) */}
        <motion.section id="modules-section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="space-y-6">
           <motion.div variants={FADE_UP} className="mb-8">
             <h2 className="text-2xl md:text-4xl font-black font-display flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 text-balance">
               <span className="w-10 h-10 rounded-xl bg-coral text-white flex items-center justify-center text-xl shadow-neon-coral shrink-0">6</span>
               <span>Архитектура и логика сайта</span>
             </h2>
             <p className="mt-4 text-ink/70 text-base md:text-lg text-pretty">
               Я подготовил для вас интерактивную структуру страниц. Вы можете провалиться внутрь каждого модуля, чтобы посмотреть, какие блоки там будут и как мы будем вести клиента к покупке.
             </p>
           </motion.div>

           <div className="space-y-4">
             {siteModules.map((mod) => (
               <motion.div
                 key={mod.id}
                 variants={FADE_UP}
                 className="p-6 md:p-8 bg-white/70 backdrop-blur-xl shadow-glass rounded-[2rem] border border-black/5 relative group flex flex-col md:flex-row items-center md:justify-between gap-6 hover:shadow-glass-hover transition-all duration-500"
               >
                 <div className="flex items-center gap-6 w-full text-center md:text-left flex-col md:flex-row">
                   <div className="w-16 h-16 shrink-0 rounded-2xl bg-coral/10 text-coral flex items-center justify-center">
                     <mod.icon className="w-8 h-8" />
                   </div>
                   <div>
                     <h3 className="text-xl md:text-2xl font-bold font-display mb-2">{mod.title}</h3>
                     <p className="text-ink/60">{mod.desc}</p>
                   </div>
                 </div>
                 
                 <Link
                   href={`/${lang}/presentation/alisa_klimova/${mod.id}`}
                   className="w-full md:w-auto shrink-0 inline-flex items-center justify-center px-6 py-4 bg-ink text-white font-bold rounded-2xl shadow-lg hover:bg-ink/80 transition-all active:scale-95 group-hover:scale-105"
                 >
                   Смотреть логику <ArrowRight className="ml-2 w-5 h-5" />
                 </Link>
               </motion.div>
             ))}
           </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="pb-24 text-center px-4 space-y-6">
           <h3 className="text-xl md:text-3xl font-black font-display text-ink text-balance">
             Готовы завершать проект и передавать доступы? 🎉
           </h3>
           <p className="text-ink/70 text-base max-w-xl mx-auto">
             Ознакомьтесь с официальным документом сметы или сразу напишите мне в Telegram для финального согласования.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link 
               href={`/${lang}/presentation/alisa_klimova/estimate`}
               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-neon-coral text-base hover:scale-105 transition-transform w-full sm:w-auto text-center"
             >
               <FileText className="w-5 h-5" /> Скачать кошторис (PDF)
             </Link>
             <a 
               href="https://t.me/gde_malish?text=Дмитрий, посмотрела обновленную смету и сайт, всё супер, принимаю работу!" 
               target="_blank" 
               rel="noreferrer" 
               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-white font-bold rounded-2xl text-base hover:bg-ink/80 transition-all w-full sm:w-auto text-center"
             >
               Принять сайт и сдать проект
             </a>
           </div>
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
