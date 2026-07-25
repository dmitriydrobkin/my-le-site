'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone, ExternalLink, ShieldAlert } from 'lucide-react';
import { createPortal } from 'react-dom';

interface LivePreviewButtonProps {
  projectLink: string;
  label: string;
  isUk: boolean;
}

export function LivePreviewButton({ projectLink, label, isUk }: LivePreviewButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [mounted, setMounted] = useState(false);
  const [canIframe, setCanIframe] = useState<boolean | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Block body scroll when open and check iframe
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (projectLink) {
        setCanIframe(null);
        fetch(`/api/check-iframe?url=${encodeURIComponent(projectLink)}`)
          .then(res => res.json())
          .then((data: any) => setCanIframe(data.canIframe))
          .catch(() => setCanIframe(true)); // fallback
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, projectLink]);

  if (!projectLink) return null;

  const isDirectLink = projectLink.includes('t.me/') || projectLink.includes('telegram.me/');

  if (isDirectLink) {
    return (
      <a 
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border border-ink/10 hover:border-ink/30 text-ink font-bold font-sans text-sm uppercase tracking-widest transition-all hover:shadow-lg group cursor-pointer"
      >
        {label}
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    );
  }

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[99999] bg-surface flex flex-col overflow-hidden animate-in fade-in duration-300 cursor-default" style={{ cursor: 'default' }}>
      {/* Top Bar */}
      <div className="shrink-0 bg-white border-b border-ink/10 flex items-center justify-between px-4 md:px-6 py-3 shadow-sm z-10">
        <button 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 text-ink/60 hover:text-ink font-bold font-sans text-xs uppercase tracking-widest transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{isUk ? 'Назад до кейсу' : 'Назад к кейсу'}</span>
        </button>

        {/* Center Control */}
        <div className="flex flex-col items-center justify-center">
          <div className="hidden md:flex items-center gap-1 bg-surface p-1 rounded-full border border-ink/5">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${deviceMode === 'desktop' ? 'bg-white shadow-sm text-ink' : 'text-ink/40 hover:text-ink/80'}`}
              title="Desktop view"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${deviceMode === 'mobile' ? 'bg-white shadow-sm text-ink' : 'text-ink/40 hover:text-ink/80'}`}
              title="Mobile view"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
          <span className="hidden md:block text-[10px] text-ink/40 font-medium mt-1">
            {isUk ? 'В емуляторі можуть бути неточності. Краще відкрити в новій вкладці' : 'В эмуляторе могут быть неточности. Лучше открыть в новой вкладке'}
          </span>
        </div>

        <a 
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-ink/60 hover:text-ink font-bold font-sans text-xs uppercase tracking-widest transition-colors cursor-pointer"
        >
          <span className="hidden sm:inline">{isUk ? 'Відкрити в новій вкладці' : 'Открыть в новой вкладке'}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Preview Area */}
      <div className="flex-1 bg-ink/5 relative overflow-hidden flex items-center justify-center">
        {canIframe === null && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-8 h-8 border-4 border-ink/20 border-t-coral rounded-full animate-spin" />
          </div>
        )}

        {canIframe === false && (
          <div className="flex flex-col items-center justify-center text-center p-6 max-w-md animate-in zoom-in-95 duration-300">
            <ShieldAlert className="w-16 h-16 text-ink/20 mb-6" />
            <h3 className="text-xl font-display font-bold text-ink mb-2">
              {isUk ? 'Захист від вбудовування' : 'Защита от встраивания'}
            </h3>
            <p className="text-ink/60 font-sans text-sm mb-8 leading-relaxed">
              {isUk 
                ? 'Цей сайт має налаштування безпеки, які забороняють його відображення в емуляторі. Щоб побачити сайт, відкрийте його в новій вкладці.' 
                : 'Этот сайт имеет настройки безопасности, запрещающие его показ в эмуляторе. Чтобы увидеть сайт, откройте его в новой вкладке.'}
            </p>
            <a 
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-4 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3 group cursor-pointer"
            >
              {isUk ? 'Відкрити сайт' : 'Открыть сайт'}
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        )}

        {canIframe === true && (
          <div 
            className={`relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              deviceMode === 'mobile' 
                ? 'w-[375px] h-[812px] max-h-[90vh] rounded-[3rem] shadow-2xl border-[12px] border-ink/10 overflow-hidden bg-white mx-auto'
                : 'w-full h-full'
            }`}
          >
            <iframe 
              src={projectLink} 
              className="w-full h-full border-0 bg-white"
              title="Live Project Preview"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border border-ink/10 hover:border-ink/30 text-ink font-bold font-sans text-sm uppercase tracking-widest transition-all hover:shadow-lg group cursor-pointer"
      >
        {label}
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>

      {mounted && typeof document !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
}
