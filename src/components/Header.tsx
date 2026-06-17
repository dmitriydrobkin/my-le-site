'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Скрываем меню в админке
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'Обо мне', href: '/about' },
    { label: 'Разработка сайтов + боты', href: '/services/sites-and-bots' },
    { label: 'Корпоративные сайты', href: '/services/corporate' },
    { label: 'E-commerce решения', href: '/services/ecommerce' },
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
            className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-glass rounded-full px-8 py-4 flex items-center gap-4 text-ink font-bold transition-transform hover:scale-105 group"
          >
            <span>Меню</span>
            <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-white group-hover:bg-coral transition-colors">
              <Menu className="w-4 h-4" />
            </div>
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
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-6 text-center">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-4xl md:text-5xl font-bold text-white hover:text-cyan-400 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
