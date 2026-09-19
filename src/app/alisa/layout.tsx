import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Алиса Климова · Специалист по питанию',
  description: 'Помогаю взрослым и детям выстроить здоровое питание и образ жизни без жестких ограничений и диет.',
};

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function AlisaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${manrope.variable} font-sans bg-alisa-cream text-alisa-textPrimary min-h-screen relative z-50`}>
      {children}
    </div>
  );
}
