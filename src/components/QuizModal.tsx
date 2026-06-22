'use client';

import { useQuizStore } from '@/lib/store/useQuizStore';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import QuizStepper from './QuizStepper';
import { useEffect } from 'react';

export function QuizModal({ lang }: { lang?: string }) {
  const isOpen = useQuizStore((state) => state.isOpen);
  const closeQuiz = useQuizStore((state) => state.closeQuiz);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-16 pb-4 sm:p-6 overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuiz}
            className="fixed inset-0 bg-ink/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl my-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeQuiz}
              className="absolute -top-12 right-0 sm:-right-12 sm:-top-4 p-2 text-ink/60 hover:text-coral transition-colors bg-white/80 shadow-glass rounded-full border border-ink/10 z-20"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Reuse existing QuizStepper */}
            <QuizStepper />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
