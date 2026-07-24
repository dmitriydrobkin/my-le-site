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
    <div className="fixed bottom-24 md:bottom-4 left-4 right-4 md:right-auto z-[100] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-white px-4 py-3 rounded-full md:rounded-full rounded-2xl shadow-lg border border-ink/5 flex items-center justify-between md:justify-start gap-3">
        <div className="text-xl leading-none hidden sm:block">🍪</div>
        <p className="font-sans text-xs text-ink/70 font-medium">
          {isUk 
            ? 'Ми використовуємо кукі. ' 
            : 'Мы используем куки. '}
          <Link href={isUk ? '/privacy' : '/ru/privacy'} className="underline hover:text-coral transition-colors">
            {isUk ? 'Детальніше' : 'Детальнее'}
          </Link>
        </p>
        <button 
          onClick={acceptCookies}
          className="bg-ink text-white font-bold font-sans text-xs uppercase tracking-widest px-3 py-1.5 rounded-full hover:bg-coral transition-colors shadow-sm whitespace-nowrap ml-2"
        >
          {isUk ? 'Окі докі' : 'Оки доки'}
        </button>
      </div>
    </div>
  );
}
