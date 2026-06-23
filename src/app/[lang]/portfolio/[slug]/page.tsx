import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, Calendar, User } from 'lucide-react';
import { getLocalizedProjects } from '@/server/functions/getProjects';
import { FinalCTA } from '@/components/FinalCTA';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { slug: string, lang: string } }) {
  const projects = await getLocalizedProjects(params.lang);
  const project = projects.find((p: any) => p.slug === params.slug);
  if (!project) return { title: 'Not found' };
  
  const isUk = params.lang === 'uk';
  const title = isUk ? (project.titleUk || project.title) : project.title;
  const desc = isUk ? (project.descriptionUk || project.description) : project.description;

  return { title: `${title} | Malyshev.Dev`, description: desc };
}

export default async function ProjectSlugPage({ params }: { params: { slug: string, lang: string } }) {
  const isUk = params.lang === 'uk';
  const linkPrefix = isUk ? '' : '/ru';

  const projects = await getLocalizedProjects(params.lang);
  const project = projects.find((p: any) => p.slug === params.slug);

  if (!project) notFound();

  // Логика фоллбэков: если нет укр перевода, показываем русский
  const displayTitle = isUk ? (project.titleUk || project.title) : project.title;
  const displayDescription = isUk ? (project.descriptionUk || project.description) : project.description;
  const displayChallenge = isUk ? (project.challengeUk || project.challenge) : project.challenge;
  const displaySolution = isUk ? (project.solutionUk || project.solution) : project.solution;

  let stack: string[] = [];
  try { stack = typeof project.stackJson === 'string' ? JSON.parse(project.stackJson) : project.stackJson; } catch (e) {}

  let results: {label: string, value: string}[] = [];
  try { results = typeof project.resultsJson === 'string' ? JSON.parse(project.resultsJson) : project.resultsJson; } catch (e) {}

  // Локализация хардкода
  const t = {
    back: isUk ? 'Всі проєкти' : 'Все проекты',
    client: isUk ? 'Клієнт' : 'Клиент',
    timeline: isUk ? 'Терміни' : 'Сроки',
    tech: isUk ? 'Технології' : 'Технологии',
    challenge: isUk ? 'Задача' : 'Задача',
    solution: isUk ? 'Рішення' : 'Решение',
    resultsTitle: isUk ? 'Результати' : 'Результаты',
    viewProject: isUk ? 'Подивитися проєкт' : 'Посмотреть проект',
    categories: {
      'САЙТЫ': isUk ? 'САЙТИ' : 'САЙТЫ',
      'E-COMMERCE': 'E-COMMERCE',
      'TELEGRAM-БОТЫ': isUk ? 'TELEGRAM-БОТИ' : 'TELEGRAM-БОТЫ',
      'WEB-ПРИЛОЖЕНИЯ': isUk ? 'WEB-ДОДАТКИ' : 'WEB-ПРИЛОЖЕНИЯ',
    }
  };

  const displayCategory = t.categories[project.category as keyof typeof t.categories] || project.category;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Навигация назад */}
        <Link href={`${linkPrefix}/portfolio`} className="inline-flex items-center gap-2 text-ink/40 hover:text-coral font-bold font-sans text-xs uppercase tracking-widest transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> {t.back}
        </Link>

        {/* Заголовок */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
            {displayCategory}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink leading-tight mb-6">
            {displayTitle}
          </h1>
          <p className="font-sans text-xl text-ink/60 leading-relaxed max-w-2xl">
            {displayDescription}
          </p>
        </div>

        {/* Обложка */}
        {project.imageUrl && (
          <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] overflow-hidden mb-16 shadow-glass border border-ink/5 bg-surface">
            <img src={project.imageUrl} alt={displayTitle} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Контент проекта */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
          
          {/* Сайдбар с деталями */}
          <div className="lg:col-span-1 space-y-8">
            {project.clientName && (
              <div>
                <span className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest block mb-2">{t.client}</span>
                <div className="font-sans text-lg font-medium text-ink flex items-center gap-2">
                  <User className="w-5 h-5 text-coral" /> {project.clientName}
                </div>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest block mb-2">{t.timeline}</span>
                <div className="font-sans text-lg font-medium text-ink flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-coral" /> {project.timeline}
                </div>
              </div>
            )}
            {stack.length > 0 && (
              <div>
                <span className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest block mb-4">{t.tech}</span>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech: string) => (
                    <span key={tech} className="px-4 py-2 bg-surface border border-ink/5 rounded-full font-sans text-sm font-medium text-ink/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.projectLink && (
              <div className="pt-6">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-3 px-8 py-4 bg-ink text-white font-bold rounded-full hover:bg-coral transition-colors group">
                  {t.viewProject}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            )}
          </div>

          {/* Описание задачи и решения */}
          <div className="lg:col-span-2 space-y-12">
            {displayChallenge && (
              <div>
                <h2 className="font-display text-3xl font-bold text-ink mb-6 flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-coral" /> {t.challenge}
                </h2>
                <div className="font-sans text-lg text-ink/70 leading-relaxed whitespace-pre-wrap">
                  {displayChallenge}
                </div>
              </div>
            )}
            
            {displaySolution && (
              <div>
                <h2 className="font-display text-3xl font-bold text-ink mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-cyan-500" /> {t.solution}
                </h2>
                <div className="font-sans text-lg text-ink/70 leading-relaxed whitespace-pre-wrap">
                  {displaySolution}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Результаты (Если есть) */}
        {results.length > 0 && (
          <div className="bg-ink rounded-[2rem] p-8 md:p-16 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 relative z-10">{t.resultsTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              {results.map((res: any, i: number) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan mb-4">
                    {res.value}
                  </div>
                  <div className="font-sans text-white/70 font-medium leading-relaxed">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <FinalCTA lang={params.lang} />
    </div>
  );
}