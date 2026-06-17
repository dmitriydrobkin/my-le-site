'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокируем скролл страницы когда открыто меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Скрываем меню в админке
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const menuItems = [
    { label: 'Главная', href: '/' },
    { 
      label: 'Услуги', 
      subItems: [
        { label: 'Лендинги', href: '/services/landings' },
        { label: 'Telegram-боты', href: '/services/telegram-bots' },
        { label: 'Интернет-магазины', href: '/services/ecommerce' },
        { label: 'Корпоративные сайты', href: '/services/corporate' },
        { label: 'Магазин + Бот', href: '/services/sites-and-bots' },
        { label: 'Сайты-визитки', href: '/services/business-cards' },
      ]
    },
    { label: 'Обо мне', href: '/about' },
    { label: 'Портфолио', href: '/portfolio' },
    { label: 'Контакты', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Логотип */}
          <Link 
            href="/"
            className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-glass rounded-full px-8 py-4 font-display font-bold text-ink tracking-tight flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-neon-cyan"></div>
            malyshev.dev.
          </Link>

          {/* Кнопка Меню */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-glass rounded-full w-14 h-14 sm:w-auto sm:h-auto sm:px-8 sm:py-4 flex items-center justify-center sm:gap-4 text-ink font-bold transition-transform hover:scale-105 group"
          >
            <span className="hidden sm:block">Меню</span>
            {/* Иконка для ПК (внутри черного кружка) */}
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-ink items-center justify-center text-white group-hover:bg-coral transition-colors">
              <Menu className="w-4 h-4" />
            </div>
            {/* Иконка для мобилок (просто иконка) */}
            <Menu className="w-6 h-6 sm:hidden group-hover:text-coral transition-colors" />
          </button>
        </div>
      </header>

      {/* Оверлей Меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-screen py-24 px-6 flex flex-col justify-center items-center relative">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <nav className="flex flex-col gap-6 md:gap-8 text-center w-full max-w-lg">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.href ? (
                      <Link 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-display text-3xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors relative group inline-block"
                      >
                        {item.label}
                        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </Link>
                    ) : (
                      <div className="flex flex-col items-center bg-white/5 rounded-[2rem] p-6 md:p-8 border border-white/10">
                        <div className="font-sans text-xs md:text-sm font-bold text-white/40 mb-6 cursor-default tracking-widest uppercase">
                          {item.label}
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                          {item.subItems?.map((sub) => (
                            <Link 
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="font-sans text-xl md:text-2xl font-medium text-white/90 hover:text-cyan-400 transition-colors relative group inline-block"
                            >
                              {sub.label}
                              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
