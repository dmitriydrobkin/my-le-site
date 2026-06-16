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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Плавающая шапка (Островки) */}
      <header className="fixed top-6 inset-x-0 z-50 pointer-events-none px-4 sm:px-8 flex justify-between items-start max-w-7xl mx-auto">
        
        {/* Левый островок - Логотип */}
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center h-14 px-6 bg-white/80 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transition-transform hover:scale-105"
        >
          <span className="font-display text-lg font-bold text-ink">
            malyshev<span className="text-coral">.</span>dev<span className="text-cyan">.</span>
          </span>
        </Link>

        {/* Правый островок - Кнопка Меню */}
        <button 
          onClick={toggleMenu}
          className="pointer-events-auto flex items-center gap-3 h-14 px-6 bg-white/80 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 transition-all hover:bg-white hover:scale-105 group"
        >
          <span className="font-sans text-sm font-bold text-ink hidden sm:block group-hover:text-coral transition-colors">
            Меню
          </span>
          <div className="bg-ink text-white p-1.5 rounded-full group-hover:bg-coral transition-colors">
            <Menu className="w-4 h-4" />
          </div>
        </button>
      </header>

      {/* Полноэкранное оверлей меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
              <span className="font-display text-xl font-bold text-ink">
                malyshev<span className="text-coral">.</span>dev<span className="text-cyan">.</span>
              </span>
              <button 
                onClick={toggleMenu}
                className="p-3 bg-white border border-ink/10 rounded-full text-ink hover:text-coral hover:border-coral/30 hover:shadow-neon-coral transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              <Link href="#portfolio" onClick={toggleMenu} className="font-display text-4xl sm:text-6xl font-bold text-ink hover:text-coral transition-colors">
                Кейсы
              </Link>
              <Link href="#how-it-works" onClick={toggleMenu} className="font-display text-4xl sm:text-6xl font-bold text-ink hover:text-coral transition-colors">
                Как мы работаем
              </Link>
              <Link href="#integrations" onClick={toggleMenu} className="font-display text-4xl sm:text-6xl font-bold text-ink hover:text-coral transition-colors">
                Интеграции
              </Link>
              
              <div className="mt-12">
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Написать в Telegram
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
