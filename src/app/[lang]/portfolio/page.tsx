import { getLocalizedProjects } from '@/server/functions/getProjects';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { categories } from '@/server/db/schema';
import PortfolioClient from './PortfolioClient';

export const runtime = 'edge';
export const revalidate = 3600; 

export default async function PortfolioPage({ params }: { params: { lang: string } }) {
  const { env } = getRequestContext();
  const db = drizzle((env as any).DB);
  
  const allProjects = await getLocalizedProjects(params.lang);
  const allCategories = await db.select().from(categories).orderBy(categories.sortOrder).all();

  return <PortfolioClient initialProjects={allProjects} categories={allCategories} lang={params.lang} />;
}
