'use client';

import { useState, useEffect, useCallback, ReactNode, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize, Minimize, MonitorSmartphone, Presentation } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export interface SlideData {
  id: string;
  content: ReactNode;
  notes?: ReactNode;
}

interface PresentationViewerProps {
  slides: SlideData[];
  isAdmin?: boolean;
}

function ViewerInner({ slides, isAdmin = false }: PresentationViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const searchParams = useSearchParams();
  const isPresenter = searchParams.get('presenter') === 'true';

  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    channelRef.current = new BroadcastChannel('presentation-sync');
    channelRef.current.onmessage = (event) => {
      if (event.data.type === 'SYNC_SLIDE') {
        const newIndex = event.data.index;
        if (newIndex !== currentIndex) {
          setDirection(newIndex > currentIndex ? 1 : -1);
          setCurrentIndex(newIndex);
        }
      }
    };
    return () => {
      channelRef.current?.close();
    };
  }, [currentIndex]);

  const changeSlide = useCallback((newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    channelRef.current?.postMessage({ type: 'SYNC_SLIDE', index: newIndex });
  }, [currentIndex]);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error attempting to enable fullscreen:", err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      changeSlide(currentIndex + 1);
    }
  }, [currentIndex, slides.length, changeSlide]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      changeSlide(currentIndex - 1);
    }
  }, [currentIndex, changeSlide]);

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

  const openPresenter = () => {
    window.open(window.location.pathname + '?presenter=true', 'PresenterWindow', 'width=1000,height=700,menubar=no,toolbar=no');
  };

  if (isPresenter) {
    if (!isAdmin) {
      return (
        <div className="w-full h-[100dvh] flex items-center justify-center bg-surface text-ink text-center p-8">
           <div className="max-w-md p-8 md:p-12 bg-white shadow-glass rounded-3xl border border-black/5 relative">
             <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Presentation className="w-8 h-8" />
             </div>
             <h2 className="text-3xl font-bold font-display mb-4 text-ink">Доступ обмежено</h2>
             <p className="text-lg text-ink/70 mb-8 font-medium">Ой, ви не авторизовані як адміністратор. Вам доступна лише звичайна версія презентації.</p>
             <button 
               onClick={() => { window.location.href = window.location.pathname; }} 
               className="w-full px-6 py-4 bg-coral text-white font-bold rounded-xl shadow-neon-coral hover:-translate-y-1 transition-all mb-4"
             >
               Дивитись звичайну версію
             </button>
             <button 
               onClick={() => { window.location.href = '/admin'; }} 
               className="w-full px-6 py-4 bg-surface-100 text-ink/60 font-bold rounded-xl hover:bg-surface-200 transition-colors"
             >
               Авторизуватись
             </button>
           </div>
        </div>
      );
    }

    return (
      <div ref={containerRef} className="w-full h-[100dvh] bg-surface flex flex-col lg:flex-row text-ink overflow-hidden">
        {/* Presenter Sidebar */}
        <div className="w-full lg:w-1/2 bg-white border-r border-black/5 p-6 md:p-8 lg:p-12 flex flex-col h-full shadow-2xl z-10">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-coral">
              <Presentation className="w-6 h-6" />
              <span className="font-display font-bold uppercase tracking-widest text-sm">Presenter View</span>
            </div>
            <button
              onClick={toggleFullscreen}
              className="p-3 rounded-full bg-surface-100 shadow-sm transition-all duration-300 hover:bg-coral hover:text-white active:scale-95 text-ink/70"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-black mb-8">Слайд {currentIndex + 1}</h2>
          
          <div className="flex-1 overflow-y-auto pr-2 lg:pr-4 custom-scrollbar flex flex-col">
            {slides[currentIndex]?.notes ? (
              <div className="text-[clamp(1.1rem,2.5vh,2.5rem)] font-medium leading-[1.5] text-ink/90 p-6 lg:p-10 bg-surface-100 rounded-3xl border-l-4 border-coral shadow-inner flex-1 flex flex-col justify-center">
                {slides[currentIndex].notes}
              </div>
            ) : (
              <div className="text-lg italic opacity-50 text-center mt-10 flex-1 flex items-center justify-center">Немає нотаток до цього слайду.</div>
            )}
          </div>
          
          <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-black/5">
            <button onClick={goToPrev} disabled={currentIndex === 0} className="p-5 lg:p-6 rounded-2xl bg-surface-100 hover:bg-coral hover:text-white transition-colors disabled:opacity-50">
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
            <div className="font-bold text-2xl lg:text-3xl">{currentIndex + 1} <span className="text-ink/40">/ {slides.length}</span></div>
            <button onClick={goToNext} disabled={currentIndex === slides.length - 1} className="p-5 lg:p-6 rounded-2xl bg-surface-100 hover:bg-coral hover:text-white transition-colors disabled:opacity-50">
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="flex-1 bg-surface-100 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-8 left-8 text-sm font-bold text-ink/40 uppercase tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            Live Preview
          </div>
          <div className="w-full max-w-4xl aspect-[16/9] bg-white shadow-glass rounded-3xl overflow-hidden flex items-center justify-center scale-90 xl:scale-100 border border-black/10 relative">
             <div className="absolute inset-0 pointer-events-none z-50 shadow-inner"></div>
             <div className="w-full h-full overflow-y-auto py-12 px-8 flex items-center justify-center pointer-events-none">
               {slides[currentIndex]?.content}
             </div>
          </div>
        </div>
      </div>
    );
  }

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
      ref={containerRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-surface text-ink flex flex-col selection:bg-coral/20"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Controls */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] flex items-center gap-3">
        <button
          onClick={openPresenter}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-glass transition-all duration-300 hover:bg-coral hover:text-white hover:shadow-neon-coral active:scale-95 text-ink/70"
          title="Відкрити нотатки для спікера"
        >
          <MonitorSmartphone className="w-5 h-5" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-glass transition-all duration-300 hover:bg-coral hover:text-white hover:shadow-neon-coral active:scale-95 text-ink/70"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
      </div>

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

export function PresentationViewer(props: PresentationViewerProps) {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center bg-surface">Завантаження презентації...</div>}>
      <ViewerInner {...props} />
    </Suspense>
  );
}
