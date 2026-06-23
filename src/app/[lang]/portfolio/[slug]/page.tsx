import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { QuizTrigger } from '@/components/QuizTrigger';
import { getLocalizedProjects } from '@/server/functions/getProjects';

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

export default async function ProjectDetailPage({ params }: { params: { slug: string, lang: string } }) {
  const isUk = params.lang === 'uk';

  const projects = await getLocalizedProjects(params.lang);
  const project = projects.find((p: any) => p.slug === params.slug);

  if (!project) notFound();

  const displayTitle = isUk ? (project.titleUk || project.title) : project.title;
  const displayDescription = isUk ? (project.descriptionUk || project.description) : project.description;
  const displayChallenge = isUk ? (project.challengeUk || project.challenge) : project.challenge;
  const displaySolution = isUk ? (project.solutionUk || project.solution) : project.solution;

  let stack: string[] = [];
  try { stack = typeof project.stackJson === 'string' ? JSON.parse(project.stackJson) : project.stackJson; } catch (e) {}

  let results: {label: string, value: string}[] = [];
  try { results = typeof project.resultsJson === 'string' ? JSON.parse(project.resultsJson) : project.resultsJson; } catch (e) {}

  const absoluteLink = project.projectLink ? (
    project.projectLink.startsWith('http') || project.projectLink.startsWith('/') 
      ? project.projectLink 
      : `https://${project.projectLink}`
  ) : '';

  const t = {
    back: isUk ? 'Всі проєкти' : 'Вернуться в портфолио',
    client: isUk ? 'Клієнт' : 'Клиент',
    timeline: isUk ? 'Терміни' : 'Сроки',
    tech: isUk ? 'Технології' : 'Технологии',
    challenge: isUk ? 'Задача' : 'Задача',
    solution: isUk ? 'Рішення' : 'Решение',
    resultsTitle: isUk ? 'Результати роботи' : 'Результаты работы',
    viewProject: isUk ? 'Подивитися проєкт' : 'Посмотреть проект',
    noCover: isUk ? 'Немає обкладинки' : 'Нет обложки',
    ctaTitle: isUk ? 'Хочете такий самий результат?' : 'Хотите такой же результат?',
    ctaDesc: isUk ? 'Залиште заявку, і ми обговоримо ваш проєкт. Я підберу ідеальне рішення для вашого бізнесу та розрахую вартість реалізації.' : 'Оставьте заявку, и мы обсудим ваш проект. Я подберу идеальное решение для вашего бизнеса и рассчитаю стоимость реализации.',
    ctaBtn: isUk ? 'Залишити заявку' : 'Оставить заявку',
    projectFallback: isUk ? 'ПРОЄКТ' : 'ПРОЕКТ',
    categories: {
      'САЙТЫ': isUk ? 'САЙТИ' : 'САЙТЫ',
      'E-COMMERCE': 'E-COMMERCE',
      'TELEGRAM-БОТЫ': isUk ? 'TELEGRAM-БОТИ' : 'TELEGRAM-БОТЫ',
      'WEB-ПРИЛОЖЕНИЯ': isUk ? 'WEB-ДОДАТКИ' : 'WEB-ПРИЛОЖЕНИЯ',
    }
  };

  const displayCategory = t.categories[project.category as keyof typeof t.categories] || project.tags || t.projectFallback;

  return (
    <div className="bg-surface min-h-screen pb-24">
      {/* 1. HERO & COVER */}
      <section className="bg-white rounded-b-[3rem] overflow-hidden shadow-sm relative pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-ink/5 via-ink/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-50" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <Link 
            href={`${params.lang === 'uk' ? '' : '/ru'}/portfolio`} 
            className="inline-flex items-center gap-2 text-ink/50 hover:text-ink font-bold font-sans text-xs uppercase tracking-widest transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.back}
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                {displayCategory}
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
                {displayTitle}
              </h1>
              
              <p className="font-sans text-lg lg:text-xl text-ink/60 font-medium leading-relaxed">
                {displayDescription}
              </p>
            </div>
            
            {absoluteLink && (
              <a 
                href={absoluteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border border-ink/10 hover:border-ink/30 text-ink font-bold font-sans text-sm uppercase tracking-widest transition-all hover:shadow-lg group"
              >
                {t.viewProject}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
          
          {/* Main Image Cover */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-[2rem] overflow-hidden border border-ink/5 shadow-glass bg-surface/50">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={displayTitle}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-ink/20 font-bold text-3xl">
                {t.noCover}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROJECT DETAILS (BENTO) */}
      <section className="pt-24 px-6 max-w-[1200px] mx-auto">
        
        {/* Meta Info Row */}
        {(project.clientName || project.timeline || stack.length > 0) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {project.clientName && (
              <div className="bg-white rounded-2xl p-6 border border-ink/5 flex flex-col justify-center">
                <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase mb-2">{t.client}</span>
                <span className="font-display text-xl font-bold text-ink">{project.clientName}</span>
              </div>
            )}
            {project.timeline && (
              <div className="bg-white rounded-2xl p-6 border border-ink/5 flex flex-col justify-center">
                <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase mb-2">{t.timeline}</span>
                <span className="font-display text-xl font-bold text-ink">{project.timeline}</span>
              </div>
            )}
            {stack.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-ink/5 flex flex-col justify-center md:col-span-2">
                <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase mb-3">{t.tech}</span>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-surface text-ink/70 rounded-md text-xs font-bold font-sans border border-ink/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Challenge & Solution */}
        {(displayChallenge || displaySolution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16">
            {displayChallenge && (
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-ink/5 shadow-sm">
                <h3 className="font-display text-3xl font-bold text-ink mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center text-lg">!</span>
                  {t.challenge}
                </h3>
                <p className="font-sans text-ink/60 font-medium leading-relaxed text-lg whitespace-pre-wrap">
                  {displayChallenge}
                </p>
              </div>
            )}
            
            {displaySolution && (
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-ink/5 shadow-sm">
                <h3 className="font-display text-3xl font-bold text-ink mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg">✓</span>
                  {t.solution}
                </h3>
                <p className="font-sans text-ink/60 font-medium leading-relaxed text-lg whitespace-pre-wrap">
                  {displaySolution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-ink text-white rounded-[2rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-coral/20 to-transparent mix-blend-overlay" />
            <h3 className="relative z-10 font-display text-3xl font-bold mb-10">{t.resultsTitle}</h3>
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {results.map((res: {label: string, value: string}, i: number) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-3">
                    {res.value}
                  </span>
                  <span className="font-sans text-sm uppercase tracking-widest font-bold text-white/50">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA - Хотите такой же результат? */}
        <div className="bg-gradient-to-br from-white to-surface border border-ink/5 rounded-[3rem] p-10 lg:p-16 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-6">
            {t.ctaTitle}
          </h2>
          <p className="font-sans text-lg text-ink/60 font-medium mb-10 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
            {t.ctaBtn}
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </QuizTrigger>
        </div>

      </section>
    </div>
  );
}
