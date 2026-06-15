'use client';

import { useState, useEffect } from 'react';
import Scene from './Scene';

export default function SceneWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Включаем сцену только после того, как React успешно "смонтировал" страницу в браузере
    setMounted(true);
  }, []);

  if (!mounted) {
    // Пока грузимся — показываем черный фон, чтобы не было мерцания
    return <div className="absolute inset-0 -z-10 h-full w-full bg-black"></div>;
  }

  return <Scene />;
}