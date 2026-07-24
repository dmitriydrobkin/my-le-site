'use client';

import { useState } from 'react';
import { Bot, X, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuizStore } from '@/lib/store/useQuizStore';
import { AIChat } from './AIChat';

export function FloatingAIAssistant({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const openQuiz = useQuizStore((state) => state.openQuiz);

  // Open the global quiz modal as fallback
  const handleFallback = () => {
    setIsOpen(false);
    openQuiz();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[350px] max-w-[calc(100vw-2rem)] z-[100] shadow-2xl rounded-2xl border border-ink/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ink text-white p-4 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-coral/20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-white/60 text-xs font-sans">
                      {lang === 'uk' ? 'На зв\'язку' : 'На связи'}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="relative p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Chat Body */}
            <AIChat lang={lang} onFallback={handleFallback} />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={lang === 'uk' ? 'Відкрити AI Асистент' : 'Открыть AI Ассистент'}
        className={`fixed ${isOpen ? 'bottom-4' : 'bottom-6'} right-4 sm:right-6 z-[100] w-14 h-14 bg-ink text-white rounded-full shadow-xl shadow-ink/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-coral rounded-full border-2 border-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
