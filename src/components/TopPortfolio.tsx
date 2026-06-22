import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function TopPortfolio({ projectsData }: { projectsData: any[] }) {
  const topProjects = projectsData.filter(p => p.isTop === 1).slice(0, 3);
  const spans = ['lg:col-span-3', 'lg:col-span-4', 'lg:col-span-3'];

  return (
    <section className="pt-12 pb-2 lg:pt-16 lg:pb-2 bg-surface border-t border-ink/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink uppercase">
            Примеры работ
          </h2>
          <Link href="/portfolio" className="flex items-center gap-3 font-bold font-sans text-sm tracking-widest uppercase hover:text-coral transition-colors group">
            Смотреть все
            <span className="w-10 h-10 rounded-full border border-ink/10 bg-white flex items-center justify-center group-hover:border-coral transition-colors shadow-sm">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 lg:gap-6">
          {topProjects.map((item, index) => (
            <Link href={`/portfolio/${item.slug}`} key={item.id} className={`flex flex-col group cursor-pointer ${spans[index] || 'lg:col-span-3'}`}>
              <div className={`relative w-full aspect-[4/3] lg:aspect-auto ${index === 1 ? 'lg:h-[500px]' : 'lg:h-[400px]'} rounded-[2rem] overflow-hidden mb-4 lg:mb-8 shadow-glass border border-ink/5`}>
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-surface/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-ink/20 font-bold text-2xl">
                    Нет фото
                  </div>
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="flex justify-between items-start gap-4 h-full">
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold tracking-widest text-ink/40 uppercase block mb-3">
                    {item.tags || 'ПРОЕКТ'}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-coral transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-sm mt-auto line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-ink bg-white border border-ink/10 group-hover:bg-coral group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
