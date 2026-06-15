/**
 * Главная страница портфолио / корпоративного сайта.
 * Серверный компонент.
 */

import Link from 'next/link';
import { getSiteSettings } from '@/server/functions/settings';

export const runtime = 'edge';

// Стандартные тексты (Fallback), если в базе данных пусто
const DEFAULT_TEXTS = {
  hero_badge: 'Creative Developer',
  hero_title_1: 'Создаю сайты, которые',
  hero_title_italic: 'продают',
  hero_description: 'Премиальный дизайн, 3D-анимации и надежная архитектура. Выводим ваш бизнес на новый уровень.',
};

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <>
      {/* Главный экран (Hero) */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gray-900 text-white">
        {/* Здесь позже ИИ добавит летящий 3D-объект или сложный фон */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-80" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-blue-400">
            {settings.hero_badge ?? DEFAULT_TEXTS.hero_badge}
          </p>
          <h1 className="mt-6 font-serif text-5xl font-light leading-tight md:text-7xl lg:text-8xl">
            {settings.hero_title_1 ?? DEFAULT_TEXTS.hero_title_1}
            <br />
            <span className="italic text-blue-500">
              {settings.hero_title_italic ?? DEFAULT_TEXTS.hero_title_italic}
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-lg font-sans text-base font-light leading-relaxed text-gray-300">
            {settings.hero_description ?? DEFAULT_TEXTS.hero_description}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Кнопка запуска квиза (сделаем позже) */}
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-sans text-sm uppercase tracking-wider">
              Рассчитать стоимость
            </button>
            <Link href="#portfolio" className="px-8 py-4 border border-gray-600 hover:border-blue-400 text-white rounded transition-colors font-sans text-sm uppercase tracking-wider">
              Смотреть работы
            </Link>
          </div>
        </div>
      </section>

      {/* Заглушка для секции с услугами / портфолио */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32 lg:px-8 text-center">
        <h2 className="font-serif text-4xl mb-4">Мои проекты</h2>
        <p className="text-gray-500">Здесь скоро появятся ваши лучшие работы...</p>
      </section>
    </>
  );
}