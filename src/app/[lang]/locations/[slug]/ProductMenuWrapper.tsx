'use client';

import { useState } from 'react';
import { BentoAdvantages } from '@/components/BentoAdvantages';
import { ProductMenuModal } from '@/components/ProductMenuModal';

export function ProductMenuWrapper({ lang }: { lang: string }) {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  return (
    <>
      <BentoAdvantages lang={lang} onOpenProductMenu={() => setIsProductMenuOpen(true)} />
      <ProductMenuModal 
        isOpen={isProductMenuOpen} 
        onClose={() => setIsProductMenuOpen(false)} 
        lang={lang}
      />
    </>
  );
}
