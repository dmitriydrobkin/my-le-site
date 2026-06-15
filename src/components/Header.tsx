'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  // ⚡️ Скрываем главное меню сайта внутри панели управления
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Логотип */}
        <Link href="/" className="font-serif text-3xl font-medium tracking-tight text-gray-900">
          D.Drobkin<span className="text-blue-600">.</span>
        </Link>

        {/* Навигация */}
        <nav className="hidden space-x-8 md:flex font-sans text-xs uppercase tracking-widest text-gray-500">
          <Link href="/#portfolio" className="transition-colors hover:text-blue-600">Портфолио</Link>
          <Link href="/#services" className="transition-colors hover:text-blue-600">Услуги</Link>
          <Link href="/#contacts" className="transition-colors hover:text-blue-600">Контакты</Link>
        </nav>

        {/* Кнопка призыва к действию (Call to Action) */}
        <div className="hidden md:block">
          <Link href="/#contacts" className="px-6 py-2.5 text-xs font-sans uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">
            Обсудить проект
          </Link>
        </div>
        
      </div>
    </header>
  );
}
