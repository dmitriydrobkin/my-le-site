"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  Calendar, 
  User, 
  Globe, 
  Zap,
  Info
} from 'lucide-react';

export default function AlisaKlimovaEstimatePage() {
  const params = useParams();
  const lang = (params?.lang as string) || "ru";

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Кошторис_Алиса_Климова_Финал_2026.pdf";
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
      <main className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10 md:p-12 print-card print:border-none print:shadow-none print:p-2 space-y-6">
        
        {/* Шапка сметы */}
        <header className="border-b border-slate-200 pb-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 print-badge">
                <FileText className="w-3.5 h-3.5" /> Смета и отчет по разработке сайта
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Финальная смета проекта
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Фактическая структура веб-сайта, учет предоплаты и сдача проекта
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="text-xs text-slate-500 flex items-center sm:justify-end gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-orange-600" /> 20 ноября 2026 г.
              </div>
              <div className="text-xs text-slate-400 mt-0.5">klimova-alisa.ru</div>
            </div>
          </div>

          {/* Стороны проекта */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-sm">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 print-card">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-600" /> Заказчик
              </div>
              <div className="font-bold text-slate-900">Алиса Климова</div>
              <div className="text-xs text-slate-500">Холистический нутрициолог, автор курсов и книг</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 print-card">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-orange-600" /> Разработчик
              </div>
              <div className="font-bold text-slate-900">Дмитрий Малышев</div>
              <div className="text-xs text-slate-500">Веб-разработка & Проектирование сайтов (Telegram: @gde_malish)</div>
            </div>
          </div>
        </header>

        {/* Раздел 1: Базовый объем по КП */}
        <section className="space-y-2 print-avoid-break">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
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
                  <th className="py-2 px-4">Раздел / Этап</th>
                  <th className="py-2 px-4 hidden sm:table-cell">Плановый объем по ТЗ</th>
                  <th className="py-2 px-4 text-right">Сумма по КП</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-2.5 px-4">
                    <strong className="text-slate-900 block">6 основных разделов сайта</strong>
                    <span className="text-xs text-slate-500">
                      Главная, Обо мне, Консультации, витрина Продуктов, Блог со статьями, Политика конфиденциальности
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

        {/* Раздел 2: 7 продуктовых страниц (компактный блок) */}
        <section className="space-y-2.5 print-avoid-break">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              7 посадочных страниц под продукты
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 print-badge w-fit">
              Тариф: $15 / страница
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 print-card space-y-3">
            <p className="text-xs text-slate-600 leading-relaxed">
              В исходном договоре по КП в модуле «Продукты» планировалась общая витрина с кратким открытием описания во всплывающих окнах (поп-апах). Для лучшей подачи материалов и удобства покупателей под каждый из 7 продуктов созданы отдельные полноценные страницы (всего 58 блоков):
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                { name: "Курс «Прикорм вместе»", url: "/prikorm", bl: "12 бл." },
                { name: "«Семейное меню»", url: "/menu", bl: "9 бл." },
                { name: "«Книга рецептов»", url: "/recipes", bl: "8 бл." },
                { name: "Вебинар «Садик»", url: "/sadik", bl: "8 бл." },
                { name: "Гайд «Косметика»", url: "/cosmetics", bl: "7 бл." },
                { name: "Гайд «Протеин»", url: "/protein", bl: "7 бл." },
                { name: "Гайд «Омега-3»", url: "/omega3", bl: "7 бл." },
                { name: "Витрина каталога", url: "/products", bl: "База" },
              ].map((item, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white border border-slate-200/80">
                  <div className="font-semibold text-slate-900 truncate">{item.name}</div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono mt-0.5">
                    <span>{item.url}</span>
                    <span className="text-orange-600 font-sans font-medium">{item.bl}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs font-semibold text-slate-900">
              <span>Итого 7 отдельных страниц (вместо стандартных $30–$35 / стр.):</span>
              <span className="text-sm font-bold text-orange-600 font-mono">+$105.00 (7 × $15)</span>
            </div>
          </div>
        </section>

        {/* Раздел 3: Подготовка к Черной пятнице */}
        <section className="space-y-2 print-avoid-break">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-bold">3</span>
              Подготовка сайта к Черной пятнице (Black Friday)
            </h2>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 print-badge">
              Спец-настройка
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl p-3 bg-purple-50/30 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 print-card">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="text-slate-700">
                Интеграция акционных плашек скидок, промо-баннеров на витрине и подготовка акционных спец-тарифов
              </span>
            </div>
            <div className="text-right shrink-0 font-bold text-purple-700 text-sm font-mono">
              +$5.00
            </div>
          </div>
        </section>

        {/* Раздел 4: Сопутствующие разделы */}
        <section className="space-y-2 print-avoid-break">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">4</span>
              Сопутствующие разделы сайта
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 print-badge">
              $0.00 (Включено в проект)
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl p-3 bg-slate-50/50 text-xs print-card">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Юридический хаб:</strong>
                  <span className="text-slate-500">Оферты на продукты и консультации, согласие на ПД, дисклеймер, страница 404</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Добавление статей:</strong>
                  <span className="text-slate-500">Верстка и публикация статей блога с перелинковкой на продукты</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Настройка базового SEO:</strong>
                  <span className="text-slate-500">Метатеги, sitemap.xml, robots.txt и мобильная адаптация</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел 5: Финансовый итог и расчет по курсу */}
        <section className="space-y-3 print-avoid-break">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">5</span>
            Сводный финансовый расчет и учет предоплаты
          </h2>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-3.5 shadow-lg print-card print:bg-white print:text-slate-900 print:border print:border-slate-300">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>1. Базовый сайт по договору в КП:</span>
                <span className="font-semibold text-white print:text-slate-900 font-mono">$350.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>2. 7 продуктовых страниц (по $15):</span>
                <span className="font-semibold text-orange-400 print:text-orange-600 font-mono">+$105.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>3. Подготовка сайта к Черной пятнице:</span>
                <span className="font-semibold text-purple-400 print:text-purple-600 font-mono">+$5.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-600">
                <span>4. Юридический хаб, статьи и базовое SEO:</span>
                <span className="font-semibold text-emerald-400 print:text-emerald-700 font-mono">$0.00 (Включено)</span>
              </div>

              {/* Промежуточный итог */}
              <div className="pt-2 border-t border-slate-700 print:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm sm:text-base font-bold">
                <span>Итоговая стоимость проекта (21 страница):</span>
                <div className="text-left sm:text-right">
                  <span className="text-base sm:text-lg font-black font-mono text-white print:text-slate-900">$460.00</span>
                  <span className="text-xs text-slate-400 print:text-slate-500 block font-normal">
                    (38 500 руб. согласно курсу Альфа-Банка на кредитную, 1 USD = 83,7 руб.)
                  </span>
                </div>
              </div>

              {/* Учет предоплаты 13 000 руб */}
              <div className="pt-1.5 border-t border-slate-800 print:border-slate-200 flex justify-between items-center text-emerald-400 print:text-emerald-700 font-medium">
                <span>Внесенная вами предоплата на старте:</span>
                <span className="font-bold font-mono text-base">-13 000 руб.</span>
              </div>
            </div>

            {/* Финальная плашка к оплате */}
            <div className="pt-3 border-t-2 border-orange-500/50 print:border-orange-500 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 print:bg-orange-50 p-3.5 rounded-xl">
              <div className="space-y-0.5">
                <span className="text-xs uppercase tracking-wider font-bold text-orange-400 print:text-orange-700 block">
                  Финальный остаток к оплате при сдаче проекта:
                </span>
                <span className="text-xs text-slate-400 print:text-slate-600 block">
                  Согласно расчету по курсу Альфа-Банка (38 500 руб.) за вычетом предоплаты 13 000 руб.
                </span>
              </div>
              <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-1 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-orange-400 print:text-orange-600 whitespace-nowrap">
                  25 500 руб.
                </div>
                <div className="text-xs text-slate-400 print:text-slate-600 font-mono whitespace-nowrap">
                  (или эквивалент $305.00 по курсу)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел 6: Порядок оплаты и гарантии */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 print-avoid-break">
          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 print-card space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <CreditCard className="w-4 h-4 text-orange-600" /> Способ оплаты остатка
            </div>
            <p className="leading-relaxed">
              Оплата производится рублями (25 500 руб.) с личной карты РФ через удобный перевод (Сбер / Т-Банк / СБП / Альфа-Банк) либо в USDT по договоренности.
            </p>
          </div>

          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 print-card space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Гарантии и передача прав
            </div>
            <p className="leading-relaxed">
              Включено 30 дней бесплатной технической поддержки, видеоинструкция по самостоятельному управлению сайтом и полная передача всех доступов и домена.
            </p>
          </div>
        </section>

        {/* Завершающая строка вместо подписей */}
        <div className="pt-3 border-t border-slate-200 text-center text-xs text-slate-500 print-avoid-break">
          Сайт klimova-alisa.ru полностью готов к работе · Разработчик: Дмитрий Малышев (@gde_malish)
        </div>

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
