'use client';

import { useChat } from 'ai/react';
import { useState, useEffect, useRef } from 'react';
import { Send, Loader2, RefreshCcw, Bot, User, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIChatProps {
  lang?: string;
  onFallback?: () => void;
}

export function AIChat({ lang = 'uk', onFallback }: AIChatProps) {
  const isUk = lang === 'uk';
  const initialMsg = isUk 
    ? "Привіт! 👋 Я AI-асистент Дмитра. Опишіть коротко, який сайт чи бот вам потрібен, і я зроблю попередній прорахунок. Або просто залиште контакт і Дмитро зв'яжеться з вами."
    : "Привет! 👋 Я AI-ассистент Дмитрия. Опишите коротко, какой сайт или бот вам нужен, и я сделаю предварительный просчет. Или просто оставьте контакт и Дмитрий свяжется с вами.";

  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    body: { lang },
    initialMessages: [
      {
        id: 'initial',
        role: 'assistant',
        content: initialMsg,
      }
    ],
    onError: (err: any) => {
      console.error(err);
      setHasError(true);
    },
    onFinish: (message: any) => {
      if (message.content.includes('[LEAD_READY]')) {
        setIsSuccess(true);
      }
    }
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // If a lead was captured, we shouldn't show the hidden tag to the user
  const displayMessages = messages.map((m: any) => {
    if (m.role === 'assistant' && m.content.includes('[LEAD_READY]')) {
      return { ...m, content: isUk ? 'Дякую! Вашу інформацію передано Дмитру. Він скоро зв\'яжеться з вами.' : 'Спасибо! Ваша информация передана Дмитрию. Он скоро свяжется с вами.' };
    }
    return m;
  });

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20"
        >
          <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>
        <h3 className="font-display text-2xl font-bold text-ink mb-4">
          {isUk ? 'Заявку прийнято!' : 'Заявка принята!'}
        </h3>
        <p className="font-sans text-ink/60 font-medium leading-relaxed max-w-sm">
          {isUk ? 'Дмитро вже отримав деталі вашого проєкту і скоро напише вам.' : 'Дмитрий уже получил детали вашего проекта и скоро напишет вам.'}
        </p>
      </div>
    );
  }

  if (hasError || error) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]">
        <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mb-6 text-rose-500">
          <Bot className="w-8 h-8" />
        </div>
        <h3 className="font-display text-xl font-bold text-ink mb-4">
          {isUk ? 'AI тимчасово перевантажений' : 'AI временно перегружен'}
        </h3>
        <p className="font-sans text-sm text-ink/60 mb-8 max-w-xs mx-auto">
          {isUk 
            ? 'Через велику кількість запитів штучний інтелект відпочиває. Будь ласка, скористайтеся звичайною формою.' 
            : 'Из-за большого количества запросов искусственный интеллект отдыхает. Пожалуйста, воспользуйтесь обычной формой.'}
        </p>
        <button
          onClick={onFallback}
          className="bg-ink text-white font-bold font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-coral transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCcw className="w-4 h-4" />
          {isUk ? 'Заповнити форму' : 'Заполнить форму'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[500px] max-h-[80vh] w-full bg-white rounded-2xl overflow-hidden relative">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence initial={false}>
          {displayMessages.map((m: any) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-white ${m.role === 'user' ? 'bg-ink' : 'bg-coral'}`}>
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`px-4 py-3 rounded-2xl max-w-[80%] font-sans text-sm leading-relaxed ${
                m.role === 'user' ? 'bg-surface text-ink rounded-tr-sm border border-ink/5' : 'bg-coral/10 text-ink rounded-tl-sm'
              }`}>
                {m.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-white bg-coral">
                <Bot className="w-4 h-4" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-coral/10 text-ink rounded-tl-sm flex items-center">
                <Loader2 className="w-4 h-4 animate-spin text-coral" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-surface border-t border-ink/5">
        <div className="relative flex items-center">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={isUk ? 'Напишіть повідомлення...' : 'Напишите сообщение...'}
            disabled={isLoading || hasError}
            className="w-full bg-white border border-ink/10 rounded-full py-4 pl-6 pr-14 outline-none focus:border-coral transition-colors font-sans text-sm disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || hasError}
            className="absolute right-2 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center hover:bg-coral transition-colors disabled:opacity-50 disabled:hover:bg-ink"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
