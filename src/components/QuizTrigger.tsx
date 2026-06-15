'use client';

import { useQuizStore } from '@/lib/store/useQuizStore';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface QuizTriggerProps {
  children: ReactNode;
  className?: string;
}

export function QuizTrigger({ children, className }: QuizTriggerProps) {
  const openQuiz = useQuizStore((state) => state.openQuiz);

  return (
    <button onClick={openQuiz} className={cn(className)}>
      {children}
    </button>
  );
}
