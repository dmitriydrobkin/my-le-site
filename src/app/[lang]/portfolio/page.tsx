import { getLocalizedProjects } from '@/server/functions/getProjects';
import PortfolioClient from './PortfolioClient';

export const runtime = 'edge';
export const dynamic = 'force-dynamic'; 

export default async function PortfolioPage({ params }: { params: { lang: string } }) {
  const allProjects = await getLocalizedProjects(params.lang);

  return <PortfolioClient initialProjects={allProjects} lang={params.lang} />;
}
