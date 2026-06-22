import Image from 'next/image';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/i18n/dictionaries';

export function FinalCTA({ lang }: { lang: string }) {
  const dict = getDictionary(lang) || getDictionary('uk');
  return (
    <section className="pt-2 pb-12 lg:pt-4 lg:pb-16 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-ink rounded-[2rem] p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          
          {/* Фоновое 3D Изображение */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-100 pointer-events-none">
            <Image 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" 
              fill 
              className="object-cover object-right" 
              alt="Abstract 3D Shape" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          </div>

          {/* Контент */}
          <div className="relative z-10 max-w-xl w-full">
            <h2 
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide leading-tight"
              dangerouslySetInnerHTML={{ __html: dict?.finalCta?.title || '' }}
            />
            <p className="font-sans text-white/50 text-xs md:text-sm font-light leading-relaxed mb-6 max-w-sm">
              {dict?.finalCta?.description}
            </p>
            
            <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-4 md:px-10 md:py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-neon-coral hover:-translate-y-1 flex items-center justify-center sm:justify-start gap-4 w-full sm:w-fit group">
              {dict?.finalCta?.btn}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
