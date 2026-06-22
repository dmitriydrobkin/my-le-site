import { Header } from '@/components/Header';
import { Preloader } from '@/components/Preloader';
import { QuizModal } from '@/components/QuizModal';
import { ConditionalFooter } from '@/components/ConditionalFooter';
import { getSiteSettings } from '@/server/functions/settings';

export const runtime = 'edge';

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
      <QuizModal lang={params.lang} />
    </>
  );
}
