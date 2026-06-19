'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { FAQSection } from './FAQSection';

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Если мы в админке, не показываем футер и частые вопросы
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <FAQSection />
      <Footer />
    </>
  );
}
