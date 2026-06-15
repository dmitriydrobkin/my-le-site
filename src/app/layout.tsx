import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/Header';
import { getSiteSettings } from '@/server/functions/settings';
import './globals.css';

// ⚡ КРИТИЧНО: Переводим весь Layout в Edge, чтобы не было конфликтов с page.tsx
export const runtime = 'edge';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings.site_title ?? 'Dmitriy | Creative Web Developer';
  const description = settings.site_description ?? 'Разработка премиальных сайтов, анимаций и сложных веб-приложений.';
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
  const brandName = settings.brand_name ?? 'D.Drobkin';
  const footerText = settings.footer_text ?? 'Digital Excellence';

  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-gray-900 bg-white">
        <Header />
        
        {/* Главный контент */}
        <main>{children}</main>

        <footer className="border-t border-gray-200 bg-gray-50 py-16 mt-24">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="font-serif text-2xl font-light">
              {brandName}<span className="text-blue-600">.</span>
            </p>
            <div className="w-16 h-px bg-blue-600 mx-auto my-6 opacity-30" />
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500">
              © {new Date().getFullYear()} — {footerText}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}