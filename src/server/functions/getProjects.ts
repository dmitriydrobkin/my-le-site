import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '@/server/db/schema';
import { eq, desc } from 'drizzle-orm';

export type LocalizedProject = typeof projects.$inferSelect;

export async function getLocalizedProjects(lang: string): Promise<LocalizedProject[]> {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  
  const rawProjects = await db.select()
    .from(projects)
    .where(eq(projects.isHidden, 0))
    .orderBy(desc(projects.sortOrder))
    .all();

  return rawProjects.map((p) => localizeProject(p, lang));
}

export function localizeProject(project: typeof projects.$inferSelect, lang: string): LocalizedProject {
  return {
    ...project,
    title: lang === 'uk' ? (project.titleUk || project.title) : project.title,
    description: lang === 'uk' ? (project.descriptionUk || project.description) : project.description,
    challenge: lang === 'uk' ? (project.challengeUk || project.challenge) : project.challenge,
    solution: lang === 'uk' ? (project.solutionUk || project.solution) : project.solution,
  };
}
