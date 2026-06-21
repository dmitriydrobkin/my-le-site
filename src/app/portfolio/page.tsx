import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '@/server/db/schema';
import { desc, eq } from 'drizzle-orm';
import PortfolioClient from './PortfolioClient';

export const runtime = 'edge';
// We don't cache portfolio page entirely if we want dynamic DB updates immediately
export const dynamic = 'force-dynamic'; 

export default async function PortfolioPage() {
  const { env } = getRequestContext();
  const db = drizzle((env as any).DB);
  
  const allProjects = await db.select()
    .from(projects)
    .where(eq(projects.isHidden, 0))
    .orderBy(desc(projects.sortOrder), desc(projects.createdAt))
    .all();

  return <PortfolioClient initialProjects={allProjects} />;
}
