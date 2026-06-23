'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { captureLeadAction } from '@/server/actions/leads';
import { cn } from '@/lib/utils';
import { getDictionary } from '@/i18n/dictionaries';

type Step = {
  id: string;
  question: string;
  options?: string[];
  type: 'choice' | 'text' | 'contact';
};

export default function QuizStepper({ lang }: { lang: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dict = getDictionary(lang)?.quiz || getDictionary('uk').quiz;

  const STEPS: Step[] = [
    {
      id: 'niche',
      question: dict.steps.niche.question,
      type: 'choice',
      options: dict.steps.niche.options,
    },
    {
      id: 'needs',
      question: dict.steps.needs.question,
      type: 'choice',
      options: dict.steps.needs.options,
    },
    {
      id: 'budget',
      question: dict.steps.budget.question,
      type: 'choice',
      options: dict.steps.budget.options,
    },
    {
      id: 'contact',
      question: dict.steps.contact.question,
      type: 'contact',
    },
  ];

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
    if (value !== dict.customOption) {
      setTimeout(handleNext, 300); // Автопереход после выбора
    }
  };

  const handleChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('name', answers['name'] || (lang === 'uk' ? 'Анонім' : 'Аноним'));
    formData.append('contactInfo', answers['contactInfo'] || '');
    const budget = answers['budget'] === dict.customOption ? answers['budget_custom'] : answers['budget'];
    formData.append('estimatedBudget', budget || '');
    
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
      alert(result.error || dict.errorMsg);
    }
  };

  if (isSuccess) {
    let estimatedCost = `${dict.fromPrefix}100`;
    if (answers['needs'] === dict.steps.needs.options[0]) estimatedCost = `${dict.fromPrefix}100`;
    if (answers['needs'] === dict.steps.needs.options[1]) estimatedCost = `${dict.fromPrefix}200`;
    if (answers['needs'] === dict.steps.needs.options[2]) estimatedCost = `${dict.fromPrefix}250`;
    if (answers['needs'] === dict.steps.needs.options[3]) estimatedCost = `${dict.fromPrefix}50`;
    if (answers['needs'] === dict.steps.needs.options[4]) estimatedCost = `${dict.fromPrefix}200`;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-3xl p-12 text-center max-w-lg mx-auto relative z-10"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_0_rgba(74,222,128,0.3)]">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="font-display text-3xl font-bold text-ink mb-2">{dict.successTitle}</h3>
        <p className="font-sans text-ink/60 mb-6 font-medium">{dict.successSubtitle}</p>
        <div className="font-display text-5xl font-bold text-coral mb-8 drop-shadow-[0_0_15px_rgba(255,77,77,0.3)]">{estimatedCost}</div>
        <p className="font-sans text-ink/50 text-sm leading-relaxed">
          {dict.successDesc}
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
        <span className="font-sans text-xs font-bold text-coral tracking-widest uppercase">{dict.step} {currentStep + 1} {dict.outOf} {STEPS.length}</span>
        <h3 className="font-display text-3xl font-bold text-ink mt-3">{step?.question}</h3>
        {step?.type === 'contact' && (
          <p className="font-sans text-ink/60 mt-3 text-sm font-medium">{dict.contactDesc}</p>
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
                {answers[step?.id || ''] === dict.customOption && (
                  <input
                    type="text"
                    value={answers[`${step?.id}_custom`] || ''}
                    onChange={e => handleChange(`${step?.id}_custom`, e.target.value)}
                    placeholder={dict.customPlaceholder}
                    className="col-span-1 sm:col-span-2 mt-2 w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all shadow-inner"
                    autoFocus
                  />
                )}
              </div>
            )}

            {step?.type === 'text' && (
              <textarea
                rows={4}
                value={answers[step?.id || ''] || ''}
                onChange={e => handleChange(step?.id || '', e.target.value)}
                placeholder={dict.textPlaceholder}
                className="font-sans w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors resize-none shadow-inner"
              />
            )}

            {step?.type === 'contact' && (
              <form id="quiz-form" onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div>
                  <label className="block text-sm font-bold text-ink/80 mb-2">{dict.nameLabel}</label>
                  <input
                    required
                    type="text"
                    value={answers['name'] || ''}
                    onChange={e => handleChange('name', e.target.value)}
                    className="w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all shadow-inner"
                    placeholder={dict.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink/80 mb-2">{dict.contactLabel}</label>
                  <input
                    required
                    type="text"
                    value={answers['contactInfo'] || ''}
                    onChange={e => handleChange('contactInfo', e.target.value)}
                    className="w-full bg-surface border border-ink/10 rounded-2xl p-5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all shadow-inner"
                    placeholder={dict.contactPlaceholder}
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
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : dict.btnSubmit}
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
            {dict.btnNext}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
