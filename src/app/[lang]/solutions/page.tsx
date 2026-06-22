import { niches } from '@/data/niches';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const isUk = params.lang === 'uk';
  return {
    title: isUk ? 'Галузеві IT-рішення та типи сайтів | Розробка під ключ' : 'Отраслевые IT-решения и типы сайтов | Разработка под ключ',
    description: isUk ? 'Професійна розробка лендінгів, корпоративних сайтів для будь-яких ніш бізнесу. Оберіть своє рішення.' : 'Профессиональная разработка лендингов, корпоративных сайтов и порталов для любых ниш бизнеса. Выберите свое решение.',
  };
}

export default function SolutionsHubPage({ params }: { params: { lang: string } }) {
  const isUk = params.lang === 'uk';
  const linkPrefix = isUk ? '' : '/ru';

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 uppercase tracking-tight">
            {isUk ? 'Галузеві' : 'Отраслевые'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">{isUk ? 'рішення' : 'решения'}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed">
            {isUk 
              ? 'Я розробляю сайти під конкретні бізнес-завдання. Оберіть ваш тип сайту або нішу бізнесу, щоб дізнатися деталі.' 
              : 'Я разрабатываю сайты под конкретные бизнес-задачи. Выберите ваш тип сайта или нишу бизнеса, чтобы узнать детали.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {niches.map((niche) => {
            // Поддержка как старого строкового формата, так и нового объекта с переводами
            const nicheName = typeof niche.name === 'object' ? (niche.name as any)[params.lang] : niche.name;
            
            return (
            <Link 
              key={niche.slug} 
              href={`${linkPrefix}/solutions/${niche.slug}`}
              className="bg-white rounded-2xl p-6 border border-ink/5 hover:border-ink/10 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div>
                <span className="font-display text-xl font-bold text-ink group-hover:text-coral transition-colors">
                  {nicheName}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-ink/40 group-hover:bg-coral group-hover:text-white transition-colors shrink-0 ml-4">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          )})}
        </div>

      </div>
    </div>
  );
}