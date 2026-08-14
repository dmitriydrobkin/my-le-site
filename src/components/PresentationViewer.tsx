'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SlideData {
  id: string;
  content: ReactNode;
}

interface PresentationViewerProps {
  slides: SlideData[];
}

export function PresentationViewer({ slides }: PresentationViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, slides.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    if (e.targetTouches.length > 0) {
      setTouchStart(e.targetTouches[0]?.clientX ?? null);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches.length > 0) {
      setTouchEnd(e.targetTouches[0]?.clientX ?? null);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      };
    },
  };

  return (
    <div 
      className="relative w-full h-[100dvh] overflow-hidden bg-surface text-ink flex flex-col selection:bg-coral/20"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/5 z-50">
        <motion.div 
          className="h-full bg-coral"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-16"
          >
            <div className="w-full max-w-5xl max-h-full overflow-y-auto py-24 scrollbar-hide flex items-center justify-center">
              {slides[currentIndex]?.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 md:bottom-10 left-0 w-full flex items-center justify-between px-6 md:px-12 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`p-3 md:p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-glass transition-all duration-300
              ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:-translate-x-1 hover:bg-coral hover:text-white hover:shadow-neon-coral active:scale-95'}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        
        <div className="font-display text-sm md:text-base font-bold tracking-[0.2em] text-ink/30 uppercase pointer-events-auto">
          {currentIndex + 1} / {slides.length}
        </div>

        <div className="pointer-events-auto">
          <button
            onClick={goToNext}
            disabled={currentIndex === slides.length - 1}
            className={`p-3 md:p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-glass transition-all duration-300
              ${currentIndex === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:translate-x-1 hover:bg-coral hover:text-white hover:shadow-neon-coral active:scale-95'}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
