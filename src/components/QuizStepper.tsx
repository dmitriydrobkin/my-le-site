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
    id: 'niche',
    question: 'В какой нише работает ваш бизнес?',
    type: 'choice',
    options: ['Услуги (салоны, ремонт и т.д.)', 'E-commerce / Товары', 'Инфобизнес / Обучение', 'B2B / Сложные продажи', 'Другое'],
  },
  {
    id: 'needs',
    question: 'Какая автоматизация вам нужна?',
    type: 'choice',
    options: ['Только сайт (лендинг/корпоративный)', 'Только Telegram-бот', 'Сайт + Бот (Единая система)'],
  },
  {
    id: 'budget',
    question: 'На какой бюджет вы рассчитываете?',
    type: 'choice',
    options: ['до $500 (Базовый)', '$500 - $1,500 (Оптимальный)', 'от $1,500 (Премиум)'],
  },
  {
    id: 'contact',
    question: 'Куда отправить расчет стоимости?',
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
    let estimatedCost = 'от $1,500';
    if (answers['needs'] === 'Только сайт (лендинг/корпоративный)') estimatedCost = 'от $800';
    if (answers['needs'] === 'Только Telegram-бот') estimatedCost = 'от $500';

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-3xl p-12 text-center max-w-lg mx-auto relative z-10"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_0_rgba(74,222,128,0.3)]">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="font-display text-3xl font-bold text-ink mb-2">Оценка готова!</h3>
        <p className="font-sans text-ink/60 mb-6 font-medium">Предварительная стоимость вашего проекта:</p>
        <div className="font-display text-5xl font-bold text-coral mb-8 drop-shadow-[0_0_15px_rgba(255,77,77,0.3)]">{estimatedCost}</div>
        <p className="font-sans text-ink/50 text-sm leading-relaxed">
          Я уже получил вашу заявку и скоро свяжусь с вами по указанным контактам, чтобы уточнить детали и дать точную смету.
        </p>
      </motion.div>
    );
  }

  const step = STEPS[currentStep];

  return (
    <div className="glass-panel rounded-3xl p-8 max-w-2xl mx-auto overflow-hidden relative shadow-[0_20px_60px_rgba(17,17,17,0.1)]">
      {/* Progress */}
      <div className="absolute top-0 left-0 w-full h-1 bg-ink/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-coral to-cyan"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      <div className="mt-4 mb-8">
        <span className="font-sans text-xs font-bold text-coral tracking-widest uppercase">Шаг {currentStep + 1} из {STEPS.length}</span>
        <h3 className="font-display text-3xl font-bold text-ink mt-3">{step?.question}</h3>
        {step?.type === 'contact' && (
          <p className="font-sans text-ink/60 mt-3 text-sm font-medium">Оставьте контакт, чтобы увидеть предварительную оценку стоимости.</p>
        )}
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
            {step?.type === 'choice' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                {step?.options?.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(step?.id || '', opt)}
                    className={cn(
                      "text-left p-5 rounded-2xl border transition-all duration-300 font-semibold text-[15px]",
                      answers[step?.id || ''] === opt 
                        ? "bg-coral/10 border-coral text-coral shadow-[0_0_20px_0_rgba(255,77,77,0.2)]" 
                        : "bg-surface border-ink/5 text-ink/70 hover:bg-white hover:border-ink/10 hover:shadow-glass hover:text-ink hover:-translate-y-0.5"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {step?.type === 'text' && (
              <textarea
                rows={4}
                value={answers[step?.id || ''] || ''}
                onChange={e => handleChange(step?.id || '', e.target.value)}
                placeholder="Напишите здесь..."
                className="font-sans w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors resize-none shadow-inner"
              />
            )}

            {step?.type === 'contact' && (
              <form id="quiz-form" onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div>
                  <label className="block text-sm font-bold text-ink/80 mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={answers['name'] || ''}
                    onChange={e => handleChange('name', e.target.value)}
                    className="w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all shadow-inner"
                    placeholder="Александр"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink/80 mb-2">Email или Telegram *</label>
                  <input
                    required
                    type="text"
                    value={answers['contactInfo'] || ''}
                    onChange={e => handleChange('contactInfo', e.target.value)}
                    className="w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all shadow-inner"
                    placeholder="@username или почта"
                  />
                </div>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0 || isSubmitting}
          className="p-3 text-ink/40 hover:text-coral disabled:opacity-0 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {step?.type === 'contact' ? (
          <button
            form="quiz-form"
            type="submit"
            disabled={isSubmitting || !answers['name'] || !answers['contactInfo']}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-coral disabled:hover:shadow-none"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Получить расчет'}
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={cn(
              "btn-primary flex items-center gap-2 transition-all",
              step?.type === 'text' || answers[step?.id || '']
                ? ""
                : "opacity-50 pointer-events-none bg-ink/10 text-ink/40 border-none shadow-none"
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
