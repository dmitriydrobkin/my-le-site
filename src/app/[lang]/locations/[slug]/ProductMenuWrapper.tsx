'use client';

import { useState } from 'react';
import { BentoAdvantages } from '@/components/BentoAdvantages';
import { ProductMenuModal } from '@/components/ProductMenuModal';

export function ProductMenuWrapper() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  return (
    <>
      <BentoAdvantages onOpenProductMenu={() => setIsProductMenuOpen(true)} />
      <ProductMenuModal 
        isOpen={isProductMenuOpen} 
        onClose={() => setIsProductMenuOpen(false)} 
      />
    </>
  );
}
