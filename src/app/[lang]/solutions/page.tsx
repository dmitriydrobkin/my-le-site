import { niches } from '@/data/niches';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const runtime = 'edge';

export const metadata = {
  title: 'Отраслевые IT-решения и типы сайтов | Разработка под ключ',
  description: 'Профессиональная разработка лендингов, корпоративных сайтов и порталов для любых ниш бизнеса. Выберите свое решение.',
};

export default function SolutionsHubPage() {
  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 uppercase tracking-tight">
            Отраслевые <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">решения</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed">
            Я разрабатываю сайты под конкретные бизнес-задачи. Выберите ваш тип сайта или нишу бизнеса, чтобы узнать детали.
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {niches.map((niche) => (
            <Link 
              key={niche.slug} 
              href={`/solutions/${niche.slug}`}
              className="bg-white rounded-2xl p-6 border border-ink/5 hover:border-ink/10 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div>
                <span className="font-display text-xl font-bold text-ink group-hover:text-coral transition-colors">
                  {niche.name}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-ink/40 group-hover:bg-coral group-hover:text-white transition-colors shrink-0 ml-4">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
