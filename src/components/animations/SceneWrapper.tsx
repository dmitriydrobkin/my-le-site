'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Отключаем SSR на уровне сборщика Next.js
const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black -z-10" />
});

export default function SceneWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ждем успешной гидратации React
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-black -z-10" />;

  return <Scene />;
}