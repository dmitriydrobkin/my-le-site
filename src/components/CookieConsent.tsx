'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent({ lang }: { lang: string }) {
  const [show, setShow] = useState(false);
  const isUk = lang === 'uk';

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly and aggressively
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-[100] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-white p-5 rounded-2xl shadow-2xl border border-ink/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-coral/10 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="flex gap-4 items-start relative z-10">
          <div className="text-2xl mt-1">🍪</div>
          <div className="flex-1">
            <p className="font-sans text-sm text-ink/70 font-medium leading-relaxed mb-4">
              {isUk 
                ? 'Ми використовуємо файли cookie для покращення роботи сайту та аналітики. Продовжуючи користуватися сайтом, ви погоджуєтесь з ' 
                : 'Мы используем файлы cookie для улучшения работы сайта и аналитики. Продолжая пользоваться сайтом, вы соглашаетесь с '}
              <Link href={isUk ? '/privacy' : '/ru/privacy'} className="underline text-ink hover:text-coral transition-colors font-bold">
                {isUk ? 'Політикою конфіденційності' : 'Политикой конфиденциальности'}
              </Link>.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={acceptCookies}
                className="flex-1 bg-ink text-white font-bold font-sans text-xs uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-coral transition-colors shadow-sm"
              >
                {isUk ? 'Зрозуміло' : 'Понятно'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
