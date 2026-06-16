import type { Metadata } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import { Header } from '@/components/Header';
import { getSiteSettings } from '@/server/functions/settings';
import { QuizModal } from '@/components/QuizModal';
import './globals.css';

// ⚡ КРИТИЧНО: Переводим весь Layout в Edge, чтобы не было конфликтов с page.tsx
export const runtime = 'edge';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings.site_title ?? 'Dmitriy | Высококонверсионные сайты и боты';
  const description = settings.site_description ?? 'Автоматизированные воронки, сайты и Telegram-боты, которые работают 24/7 и приносят прибыль.';
  const isIndexingEnabled = settings.seo_indexing_enabled === 'true';

  return {
    title,
    description,
    robots: {
      index: isIndexingEnabled,
      follow: isIndexingEnabled,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const brandName = settings.brand_name ?? 'malyshev';
  const footerText = settings.footer_text ?? 'Automated Client Acquisition';

  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable}`}>
      <body className="font-sans text-ink bg-surface min-h-screen flex flex-col">
        <Header />
        
        {/* Главный контент */}
        <main className="flex-grow">{children}</main>

        <footer className="border-t border-ink/5 bg-surface py-12 mt-24">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="font-display text-xl font-bold tracking-tight text-ink">
              {brandName}<span className="text-coral">.</span>dev<span className="text-cyan">.</span>
            </p>
            <p className="mt-4 font-sans text-sm text-ink/60">
              Сайты и Telegram-боты, которые приносят прибыль 24/7.
            </p>
            <div className="w-12 h-px bg-coral/20 mx-auto my-6" />
            <p className="font-sans text-xs uppercase tracking-widest text-ink/40">
              © {new Date().getFullYear()} — {footerText}
            </p>
          </div>
        </footer>

        {/* Global Modal */}
        <QuizModal />
      </body>
    </html>
  );
}