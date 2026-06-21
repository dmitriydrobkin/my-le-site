import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '@/server/db/schema';
import { eq, desc } from 'drizzle-orm';
import B2BHomePage from './HomePage';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default async function Page() {
  const { env } = getRequestContext();
  const db = drizzle((env as any).DB);
  
  // Получаем только активные проекты
  const activeProjects = await db.select()
    .from(projects)
    .where(eq(projects.isHidden, 0))
    .orderBy(desc(projects.createdAt))
    .all();

  return <B2BHomePage projectsData={activeProjects} />;
}
