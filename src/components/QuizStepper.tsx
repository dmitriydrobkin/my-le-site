'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { captureLeadAction } from '@/server/actions/leads';
import { cn } from '@/lib/utils';

type Step = {
  id: string;
  question: string;
  options?: string[];
  type: 'choice' | 'text' | 'contact';
};

const STEPS: Step[] = [
  {
    id: 'projectType',
    question: 'Какой тип проекта вам нужен?',
    type: 'choice',
    options: ['Landing Page', 'Корпоративный сайт', 'Интернет-магазин', 'Web-приложение (SaaS)'],
  },
  {
    id: 'budget',
    question: 'Какой у вас ориентировочный бюджет?',
    type: 'choice',
    options: ['Менее $1,000', '$1,000 - $3,000', '$3,000 - $10,000', 'Более $10,000'],
  },
  {
    id: 'details',
    question: 'Кратко опишите задачу (по желанию)',
    type: 'text',
  },
  {
    id: 'contact',
    question: 'Как с вами связаться?',
    type: 'contact',
  },
];

export default function QuizStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(c => c + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(c => c - 1);
    }
  };

  const handleSelect = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setTimeout(handleNext, 300); // Автопереход после выбора
  };

  const handleChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('name', answers['name'] || 'Аноним');
    formData.append('contactInfo', answers['contactInfo'] || '');
    formData.append('estimatedBudget', answers['budget'] || '');
    
    // Остальные ответы сохраняем в JSON
    const quizData = { ...answers };
    delete quizData.name;
    delete quizData.contactInfo;
    delete quizData.budget;
    formData.append('answers', JSON.stringify(quizData));

    const result = await captureLeadAction(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert(result.error || 'Произошла ошибка при отправке');
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center max-w-lg mx-auto"
      >
        <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-white mb-4">Спасибо за заявку!</h3>
        <p className="text-gray-400">Я свяжусь с вами в ближайшее время для обсуждения деталей проекта.</p>
      </motion.div>
    );
  }

  const step = STEPS[currentStep];

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto overflow-hidden relative">
      {/* Progress */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      <div className="mt-4 mb-8">
        <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">Шаг {currentStep + 1} из {STEPS.length}</span>
        <h3 className="text-3xl font-bold text-white mt-2">{step.question}</h3>
      </div>

      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step.type === 'choice' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {step.options?.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(step.id, opt)}
                    className={cn(
                      "text-left p-4 rounded-xl border transition-all duration-200",
                      answers[step.id] === opt 
                        ? "bg-blue-500/20 border-blue-500 text-white" 
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {step.type === 'text' && (
              <textarea
                rows={4}
                value={answers[step.id] || ''}
                onChange={e => handleChange(step.id, e.target.value)}
                placeholder="Напишите здесь..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            )}

            {step.type === 'contact' && (
              <form id="quiz-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={answers['name'] || ''}
                    onChange={e => handleChange('name', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email или Telegram *</label>
                  <input
                    required
                    type="text"
                    value={answers['contactInfo'] || ''}
                    onChange={e => handleChange('contactInfo', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="@username или email@example.com"
                  />
                </div>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0 || isSubmitting}
          className="p-3 text-gray-400 hover:text-white disabled:opacity-0 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {step.type === 'contact' ? (
          <button
            form="quiz-form"
            type="submit"
            disabled={isSubmitting || !answers['name'] || !answers['contactInfo']}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Отправить'}
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={cn(
              "flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all",
              step.type === 'text' || answers[step.id]
                ? "bg-white text-black hover:scale-105"
                : "bg-white/10 text-gray-500 cursor-not-allowed"
            )}
          >
            Далее
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
