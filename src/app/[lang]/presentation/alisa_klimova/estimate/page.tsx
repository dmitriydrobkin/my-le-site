"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Calendar, 
  User, 
  Globe, 
  Layers, 
  Gift, 
  Info,
  Check,
  Tag,
  Zap
} from 'lucide-react';

export default function AlisaKlimovaEstimatePage() {
  const params = useParams();
  const lang = (params?.lang as string) || "ru";

  useEffect(() => {
    // Устанавливаем заголовок документа для автоматического красивого имени PDF-файла при сохранении
    const prevTitle = document.title;
    document.title = "Кошторис_Алиса_Климова_Финал_Проекта_2026.pdf";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans py-8 md:py-12 px-3 sm:px-6 print:p-0 print:bg-white print:text-black">
      {/* Стили для идеальной печати A4 в PDF */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 8mm 10mm 8mm 10mm;
          }
          body {
            background: white !important;
            color: #0f172a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-hidden {
            display: none !important;
          }
          .print-card {
            border: 1px solid #cbd5e1 !important;
            box-shadow: none !important;
            border-radius: 10px !important;
            background: #ffffff !important;
          }
          .print-badge {
            border: 1px solid #cbd5e1 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-avoid-break {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Панель управления (скрывается при печати) */}
      <div className="max-w-4xl mx-auto mb-6 print-hidden">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <Link 
            href={`/${lang}/presentation/alisa_klimova`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-xl hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" /> Назад к презентации КП
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden sm:inline">
              Формат: <strong>A4 PDF</strong> (в окне печати выберите «Сохранить как PDF»)
            </span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Скачать в PDF / Печать
            </button>
          </div>
        </div>
      </div>

      {/* Основной лист документа (A4 формат) */}
      <main className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10 md:p-12 print-card print:border-none print:shadow-none print:p-2 space-y-7">
        
        {/* Шапка акта / сметы */}
        <header className="border-b border-slate-200 pb-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 print-badge">
                <FileText className="w-3.5 h-3.5" /> Финальный акт-кошторис выполненных работ
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Смета и финансовый отчет проекта
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Фактическая реализация веб-сайта против базового КП · Учет предоплаты и сдача проекта
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Документ</div>
              <div className="text-base font-bold text-slate-900 font-mono">№ АК-2026/01</div>
              <div className="text-xs text-slate-500 mt-1 flex items-center sm:justify-end gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> 20 ноября 2026 г.
              </div>
            </div>
          </div>

          {/* Стороны проекта */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-sm">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 print-card">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-600" /> Заказчик
              </div>
              <div className="font-bold text-slate-900">Алиса Климова</div>
              <div className="text-xs text-slate-600 mt-0.5">Холистический нутрициолог, автор образовательных программ</div>
              <div className="text-xs text-slate-400 mt-0.5">Проект: klimova-alisa.ru (Tilda Publishing)</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 print-card">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-orange-600" /> Исполнитель
              </div>
              <div className="font-bold text-slate-900">Дмитрий Малышев</div>
              <div className="text-xs text-slate-600 mt-0.5">Full-Stack Веб-разработка & Проектирование воронки</div>
              <div className="text-xs text-slate-400 mt-0.5">Портфолио: malyshev.pp.ua · Telegram: @gde_malish</div>
            </div>
          </div>
        </header>

        {/* Раздел 1: Базовый объем по КП */}
        <section className="space-y-2.5 print-avoid-break">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</span>
              Базовый объем по договору (Исходное КП)
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 print-badge">
              Выполнено 100%
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden print-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
                <tr>
                  <th className="py-2.5 px-4">Раздел / Этап</th>
                  <th className="py-2.5 px-4 hidden sm:table-cell">Плановый объем по ТЗ</th>
                  <th className="py-2.5 px-4 text-right">Сумма по КП</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-2.5 px-4">
                    <strong className="text-slate-900 block">6 базовых разделов сайта</strong>
                    <span className="text-xs text-slate-500">
                      Главная, Обо мне, Консультации, общая витрина Продуктов, Блог/Статьи (3-5 шт.), Политика конфиденциальности
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-xs text-slate-500 hidden sm:table-cell">
                    ~27 смысловых блоков, открытие описания продуктов через всплывающие поп-апы
                  </td>
                  <td className="py-2.5 px-4 text-right font-medium text-slate-900">$260.00</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4">
                    <strong className="text-slate-900 block">Техническая настройка и интеграции</strong>
                    <span className="text-xs text-slate-500">
                      Индивидуальный дизайн, адаптивная верстка (вайб-блоки), Prodamus, сквозной поиск, Яндекс.Метрика, базовое SEO
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-xs text-slate-500 hidden sm:table-cell">
                    Подключение домена, кассы, аналитики и базовых настроек
                  </td>
                  <td className="py-2.5 px-4 text-right font-medium text-slate-900">$90.00</td>
                </tr>
              </tbody>
              <tfoot className="bg-slate-50/70 border-t border-slate-200 font-semibold text-slate-900">
                <tr>
                  <td className="py-2.5 px-4" colSpan={2}>Итого базовый пакет по договору:</td>
                  <td className="py-2.5 px-4 text-right text-base font-bold text-slate-900">$350.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Раздел 2: Фактическое расширение (7 продающих лендингов) */}
        <section className="space-y-3 print-avoid-break">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              7 продающих лендингов под продукты
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-800 print-badge">
                Дружественный тариф: $15 / страница
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-200 text-xs text-orange-950 leading-relaxed print-card">
            <div className="flex gap-2">
              <Info className="w-4 h-4 text-orange-700 shrink-0 mt-0.5" />
              <div>
                <strong>Пояснение к структуре:</strong> В базовом договоре по КП в модуле «Продукты» закладывалась общая страница-витрина с кратким открытием информации во всплывающих окнах (поп-апах). 
                В процессе работы для лучшей подачи материалов и удобства покупателей под каждый из 7 продуктов были с нуля созданы отдельные полноценные посадочные страницы-лендинги (всего <strong>58 смысловых блоков</strong>). 
                Стандартная стоимость разработки отдельной страницы составляет $30–$40. В итоговом расчете все 7 страниц посчитаны по специальной дружественной ставке — <strong>по $15 за страницу (+ $105 к проекту)</strong>.
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden print-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
                <tr>
                  <th className="py-2 px-3 sm:px-4">#</th>
                  <th className="py-2 px-3 sm:px-4">Разработанный лендинг продукта</th>
                  <th className="py-2 px-3 sm:px-4 hidden sm:table-cell">Фактический объем</th>
                  <th className="py-2 px-3 sm:px-4 hidden md:table-cell text-right">Стандартный прайс</th>
                  <th className="py-2 px-3 sm:px-4 text-right">Итоговая цена</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { num: "01", name: "Курс «Прикорм вместе»", url: "/prikorm", blocks: "12 кастомных блоков (программа, тарифы, боли, FAQ)", basePrice: "$40.00", finalPrice: "$15.00" },
                  { num: "02", name: "Проект «Детское и семейное меню»", url: "/menu", blocks: "9 блоков + интерактивная галерея тарелок", basePrice: "$35.00", finalPrice: "$15.00" },
                  { num: "03", name: "«Книга рецептов»", url: "/recipes", blocks: "8 блоков + оглавление и развороты", basePrice: "$30.00", finalPrice: "$15.00" },
                  { num: "04", name: "Вебинар «Адаптация к садику»", url: "/sadik", blocks: "8 блоков (пошаговая схема, спикер, тарифы)", basePrice: "$30.00", finalPrice: "$15.00" },
                  { num: "05", name: "Гайд «Безопасная косметика»", url: "/cosmetics", blocks: "7 блоков (разбор составов, чек-листы, покупка)", basePrice: "$25.00", finalPrice: "$15.00" },
                  { num: "06", name: "Гайд «Протеин и коллаген»", url: "/protein", blocks: "7 блоков (дозировки, разбор добавок, оплата)", basePrice: "$25.00", finalPrice: "$15.00" },
                  { num: "07", name: "Гайд «Омега-3»", url: "/omega3", blocks: "7 блоков (выбор качественного препарата, дозировки)", basePrice: "$25.00", finalPrice: "$15.00" },
                ].map((item) => (
                  <tr key={item.num} className="hover:bg-slate-50/50">
                    <td className="py-2 px-3 sm:px-4 text-xs font-mono text-slate-400">{item.num}</td>
                    <td className="py-2 px-3 sm:px-4">
                      <strong className="text-slate-900 block">{item.name}</strong>
                      <span className="text-xs text-slate-400 font-mono">{item.url}</span>
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-xs text-slate-500 hidden sm:table-cell">{item.blocks}</td>
                    <td className="py-2 px-3 sm:px-4 text-right text-xs text-slate-400 line-through hidden md:table-cell">{item.basePrice}</td>
                    <td className="py-2 px-3 sm:px-4 text-right font-bold text-orange-600">{item.finalPrice}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50/70 border-t border-slate-200 font-semibold text-slate-900">
                <tr>
                  <td className="py-2.5 px-3 sm:px-4" colSpan={3}>
                    Итого за 7 отдельных продающих лендингов:
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 text-right text-xs text-slate-400 line-through hidden md:table-cell">$210.00</td>
                  <td className="py-2.5 px-3 sm:px-4 text-right text-base font-bold text-orange-600">+$105.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Раздел 3: Подготовка к Черной пятнице */}
        <section className="space-y-2.5 print-avoid-break">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-bold">3</span>
              Подготовка сайта к Черной пятнице (Black Friday)
            </h2>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 print-badge">
              Спец-настройка
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl p-3.5 bg-purple-50/30 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 print-card">
            <div className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Пакет промо-настроек под распродажу Black Friday:</strong>
                <span className="text-slate-600">
                  Интеграция акционных плашек скидок, промо-баннеров на витрине и подготовка акционных спец-тарифов на продукты для ноябрьской распродажи.
                </span>
              </div>
            </div>
            <div className="text-right shrink-0 font-bold text-purple-700 text-sm sm:text-base font-mono">
              +$5.00
            </div>
          </div>
        </section>

        {/* Раздел 4: Сопутствующие работы ($0) */}
        <section className="space-y-2.5 print-avoid-break">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">4</span>
              Сопутствующие разделы, включенные в проект без доплат
            </h2>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 print-badge">
              $0.00 (Включено)
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl p-3.5 bg-slate-50/50 text-xs print-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Полный юридический хаб (6 дополнительных страниц):</strong>
                  <p className="text-slate-500 mt-0.5">
                    Оферта на продукты, оферта на консультации, согласие на ПД, дисклеймер, оплата + интерактивная страница 404 с генератором советов.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Блог и статьи (10 экспертных лонгридов):</strong>
                  <p className="text-slate-500 mt-0.5">
                    Полный перенос и оформление всех 10 статей из ваших PDF-файлов с перелинковкой на продукты (вместо 3–5 стартовых по КП).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Глубокое SEO и Schema.org:</strong>
                  <p className="text-slate-500 mt-0.5">
                    Настройка структурированных данных, sitemap.xml, robots.txt, OpenGraph для соцсетей и высокий балл Pagespeed 90+.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Правки и сопровождение:</strong>
                  <p className="text-slate-500 mt-0.5">
                    Все дополнительные итерации правок, доработка структуры и ручная подгонка адаптивной верстки под смартфоны.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел 5: Финансовый итог и расчет по курсу */}
        <section className="space-y-3.5 print-avoid-break">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">5</span>
            Сводный финансовый расчет и учет предоплаты
          </h2>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-lg print-card print:bg-white print:text-slate-900 print:border print:border-slate-300">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>1. Базовый пакет по договору в КП:</span>
                <span className="font-semibold text-white print:text-slate-900 font-mono">$350.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>2. 7 продающих лендингов под продукты (по $15):</span>
                <span className="font-semibold text-orange-400 print:text-orange-600 font-mono">+$105.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>3. Подготовка сайта к Черной пятнице (Black Friday промо):</span>
                <span className="font-semibold text-purple-400 print:text-purple-600 font-mono">+$5.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>4. Юридический хаб (6 стр.), интерактивная 404 и 10 статей блога:</span>
                <span className="font-semibold text-emerald-400 print:text-emerald-700 font-mono">$0.00 (Включено)</span>
              </div>

              {/* Промежуточный итог */}
              <div className="pt-2.5 border-t border-slate-700 print:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm sm:text-base font-bold">
                <span>Итоговая фактическая стоимость сайта (21 страница):</span>
                <div className="text-left sm:text-right">
                  <span className="text-base sm:text-lg font-black font-mono text-white print:text-slate-900">$460.00</span>
                  <span className="text-xs text-slate-400 print:text-slate-500 block font-normal">
                    (40 876,48 руб. по курсу Альфа-Банка от 20.11.2026, 1 USD = 88,86 руб.)
                  </span>
                </div>
              </div>

              {/* Учет предоплаты 13 000 руб */}
              <div className="pt-2 border-t border-slate-800 print:border-slate-200 flex justify-between items-center text-emerald-400 print:text-emerald-700 font-medium">
                <span>Внесенная вами предоплата на старте:</span>
                <span className="font-bold font-mono text-base">-13 000 руб.</span>
              </div>

              {/* Округление в меньшую сторону */}
              <div className="flex justify-between items-center text-slate-400 print:text-slate-500 text-xs">
                <span>Округление к 500 руб. в меньшую сторону:</span>
                <span className="font-mono text-emerald-400 print:text-emerald-700 font-semibold">-376 руб.</span>
              </div>
            </div>

            {/* Финальная плашка к оплате */}
            <div className="pt-3.5 border-t-2 border-orange-500/50 print:border-orange-500 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 print:bg-orange-50 p-4 rounded-xl">
              <div className="space-y-0.5">
                <span className="text-xs uppercase tracking-wider font-bold text-orange-400 print:text-orange-700 block">
                  Финальный остаток к оплате при сдаче проекта:
                </span>
                <span className="text-xs text-slate-400 print:text-slate-600 block">
                  Согласно курсу Альфа-Банка (40 876 руб.) за вычетом предоплаты 13 000 руб. и округления к 500 руб.
                </span>
              </div>
              <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-1.5 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-orange-400 print:text-orange-600 whitespace-nowrap">
                  27 500 руб.
                </div>
                <div className="text-xs text-slate-400 print:text-slate-600 font-mono whitespace-nowrap">
                  (или эквивалент $310.00 по курсу)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел 6: Порядок оплаты и гарантии */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 print-avoid-break">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 print-card space-y-1.5">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <CreditCard className="w-4 h-4 text-orange-600" /> Способ оплаты остатка
            </div>
            <p className="leading-relaxed">
              Оплата производится рублями (27 500 руб.) с личной банковской карты РФ через удобный перевод (Сбер / Т-Банк / СБП / Альфа-Банк) либо в USDT по договоренности.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 print-card space-y-1.5">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Гарантии и передача прав
            </div>
            <p className="leading-relaxed">
              Включено 30 дней бесплатной технической поддержки, обучающая видеоинструкция по самостоятельному управлению сайтом и полная передача всех доступов и домена на ваш личный аккаунт.
            </p>
          </div>
        </section>

        {/* Подписи сторон */}
        <footer className="pt-6 border-t border-slate-200 print-avoid-break">
          <div className="grid grid-cols-2 gap-8 text-xs text-slate-600">
            <div>
              <div className="font-bold text-slate-900 mb-1">Исполнитель:</div>
              <div>Малышев Д. В.</div>
              <div className="mt-7 border-b border-slate-300 w-36"></div>
              <div className="text-[10px] text-slate-400 mt-1">подпись / дата</div>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-1">Заказчик:</div>
              <div>Климова А.</div>
              <div className="mt-7 border-b border-slate-300 w-36"></div>
              <div className="text-[10px] text-slate-400 mt-1">подпись / дата</div>
            </div>
          </div>
        </footer>

      </main>

      {/* Нижняя плавающая кнопка для печати на мобильных (скрывается при печати) */}
      <div className="fixed bottom-4 right-4 z-50 print-hidden sm:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-orange-600 text-white font-bold text-sm shadow-2xl active:scale-95"
        >
          <Printer className="w-4 h-4" /> Скачать в PDF
        </button>
      </div>
    </div>
  );
}
