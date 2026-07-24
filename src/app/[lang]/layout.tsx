import { headers } from 'next/headers';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Preloader } from '@/components/Preloader';
import { QuizModal } from '@/components/QuizModal';
import { ConditionalFooter } from '@/components/ConditionalFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { FloatingAIAssistant } from '@/components/FloatingAIAssistant';
import { getSiteSettings } from '@/server/functions/settings';
import { StructuredData } from '@/components/StructuredData';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const h = headers();
  let pathname = h.get('x-pathname') || '/';
  
  if (pathname.startsWith('/ru')) {
    pathname = pathname.replace('/ru', '') || '/';
  }
  
  const basePath = pathname === '/' ? '' : pathname;
  
  const settings = await getSiteSettings();
  const isUk = params.lang === 'uk';
  const defaultTitle = isUk ? 'Створення сайтів та Telegram-ботів під ключ | Розробка висококонверсійних воронок' : 'Создание сайтов и Telegram-ботов под ключ | Разработка высококонверсионных воронок';
  const defaultDesc = isUk ? 'Професійна розробка лендінгів, корпоративних сайтів, інтернет-магазинів та Telegram-ботів. Сучасний дизайн, SEO оптимізація та інтеграція з CRM.' : 'Профессиональная разработка лендингов, корпоративных сайтов, интернет-магазинов и Telegram-ботов. Современный дизайн, SEO оптимизация и интеграция с CRM.';
  
  const title = settings.site_title || defaultTitle;
  const description = settings.site_description || defaultDesc;
  
  return {
    metadataBase: new URL('https://malyshev.dev'),
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://malyshev.dev${isUk ? '' : '/ru'}${basePath}`,
      images: [`/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`],
    },
    alternates: {
      canonical: `https://malyshev.dev${isUk ? '' : '/ru'}${basePath}`,
      languages: {
        uk: `https://malyshev.dev${basePath}`,
        ru: `https://malyshev.dev/ru${basePath}`,
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
      <StructuredData lang={params.lang || 'uk'} />
      <CookieConsent lang={params.lang || 'uk'} />
      <FloatingAIAssistant lang={params.lang || 'uk'} />
    </>
  );
}
