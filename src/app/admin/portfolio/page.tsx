import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import { verifyAdmin } from '@/server/functions/auth-guard';
import PortfolioManager from '../PortfolioManager';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default async function AdminPortfolio() {
  await verifyAdmin();

  const { env } = getRequestContext();
  const db = drizzle((env as any).DB);
  
  const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt)).all();

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink mb-2">Управление портфолио</h1>
          <p className="font-sans text-ink/60">
            Добавление, редактирование и скрытие проектов.
          </p>
        </div>
      </div>

      <PortfolioManager initialProjects={allProjects} />
    </div>
  );
}
