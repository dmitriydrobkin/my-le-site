'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { FAQSection } from './FAQSection';

export function ConditionalFooter({ settings, lang }: { settings?: any, lang: string }) {
  const pathname = usePathname();
  
  // Если мы в админке или на странице презентации, не показываем футер и частые вопросы
  if (pathname.startsWith('/admin') || pathname.includes('/presentation/')) {
    return null;
  }

  return (
    <>
      <FAQSection lang={lang} />
      <Footer settings={settings} lang={lang} />
    </>
  );
}
