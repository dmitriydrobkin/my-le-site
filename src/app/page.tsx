import { getPageContent } from '@/server/functions/page-content';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent('/');
  return {
    title: content?.seoTitle || content?.h1 || 'DIGITAL РЕШЕНИЯ ДЛЯ БИЗНЕСА',
    description: content?.description || 'Проектирую, разрабатываю и запускаю высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7.',
  };
}

export default async function Page() {
  const content = await getPageContent('/');
  return <HomeClient content={content} />;
}
