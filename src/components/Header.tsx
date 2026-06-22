'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { getDictionary } from '@/i18n/dictionaries';

export function Header({ lang }: { lang: string }) {
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

  const dict = getDictionary(lang);
  const linkPrefix = lang === 'ru' ? '/ru' : '';

  const menuItems = [
    { label: dict.header.home, href: `${linkPrefix}/` },
    { 
      label: dict.header.services, 
      subItems: [
        { label: dict.footer.links.landing, href: `${linkPrefix}/services/landings` },
        { label: dict.footer.links.businessCard, href: `${linkPrefix}/services/business-cards` },
        { label: dict.footer.links.corporate, href: `${linkPrefix}/services/corporate` },
        { label: dict.footer.links.ecommerce, href: `${linkPrefix}/services/ecommerce` },
        { label: 'Магазин + TG Бот', href: `${linkPrefix}/services/sites-and-bots` },
        { label: dict.footer.links.tgBots, href: `${linkPrefix}/services/telegram-bots` },
      ]
    },
    { label: dict.header.about, href: `${linkPrefix}/about` },
    { label: dict.header.portfolio, href: `${linkPrefix}/portfolio` },
    { label: dict.header.contact, href: `${linkPrefix}/contact` },
  ];

  // Language switcher logic
  const switchLangHref = lang === 'ru' ? pathname.replace(/^\/ru/, '') || '/' : `/ru${pathname === '/' ? '' : pathname}`;

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Логотип */}
          <Link 
            href={`${linkPrefix}/`}
            className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-glass rounded-full px-8 py-4 font-display font-bold text-ink tracking-tight flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-neon-cyan"></div>
            malyshev.dev.
          </Link>

          {/* Кнопка Меню */}
          <div className="pointer-events-auto flex items-center gap-2">


            <button 
              onClick={() => setIsMenuOpen(true)}
              className="bg-white/80 backdrop-blur-md shadow-glass rounded-full w-14 h-14 sm:w-auto sm:h-auto sm:px-8 sm:py-4 flex items-center justify-center sm:gap-4 text-ink font-bold transition-transform hover:scale-105 group"
            >
              <span className="hidden sm:block">{lang === 'uk' ? 'Меню' : 'Меню'}</span>
            {/* Иконка для ПК (внутри черного кружка) */}
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-ink items-center justify-center text-white group-hover:bg-coral transition-colors">
              <Menu className="w-4 h-4" />
            </div>
            {/* Иконка для мобилок (просто иконка) */}
            <Menu className="w-6 h-6 sm:hidden group-hover:text-coral transition-colors" />
          </button>
          </div>
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
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.05 }}
                  className="mt-8 flex justify-center"
                >
                  <Link 
                    href={switchLangHref}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-6 py-3 font-display font-bold text-white text-sm transition-all uppercase tracking-widest"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {lang === 'uk' ? 'UA' : 'RU'}
                    <span className="opacity-50 mx-2">|</span>
                    <span className="opacity-50 hover:opacity-100 transition-opacity">{lang === 'uk' ? 'RU' : 'UA'}</span>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
