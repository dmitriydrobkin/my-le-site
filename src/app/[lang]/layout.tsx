import { headers } from 'next/headers';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Preloader } from '@/components/Preloader';
import { QuizModal } from '@/components/QuizModal';
import { ConditionalFooter } from '@/components/ConditionalFooter';
import { getSiteSettings } from '@/server/functions/settings';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  const h = headers();
  let pathname = h.get('x-pathname') || '/';
  
  if (pathname.startsWith('/ru')) {
    pathname = pathname.replace('/ru', '') || '/';
  }
  
  const basePath = pathname === '/' ? '' : pathname;
  
  return {
    alternates: {
      languages: {
        uk: `https://malyshev.dev`,
        ru: `https://malyshev.dev/ru`,
      }
    }
  };
}


export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const settings = await getSiteSettings();

  return (
    <>
      <Preloader />
      <Header lang={params.lang} />
      <main className="flex-grow">{children}</main>
      <ConditionalFooter settings={settings} lang={params.lang} />
      <QuizModal lang={params.lang || 'uk'} />
    </>
  );
}
