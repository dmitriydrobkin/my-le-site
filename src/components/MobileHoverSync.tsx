'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MobileHoverSync() {
  const pathname = usePathname();

  useEffect(() => {
    // Работает только на мобилках
    if (window.innerWidth >= 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-mobile-hover', 'true');
          } else {
            entry.target.removeAttribute('data-mobile-hover');
          }
        });
      },
      { threshold: 0.6 }
    );

    // Наблюдаем за всеми элементами, которые имеют группу или карточками
    const elements = document.querySelectorAll('.group');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
