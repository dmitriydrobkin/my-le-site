import { CITIES } from '@/data/cities';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const isUk = params.lang === 'uk';
  return {
    title: isUk ? 'Географія роботи | Розробка сайтів та Telegram ботів' : 'География работы | Разработка сайтов и Telegram ботов',
    description: isUk ? 'Список міст України, в яких я пропоную послуги зі створення сайтів, лендінгів та Telegram ботів.' : 'Список городов Украины, в которых я предлагаю услуги по созданию сайтов, лендингов и Telegram ботов.',
  };
}

export default function LocationsHubPage({ params }: { params: { lang: string } }) {
  const isUk = params.lang === 'uk';
  const linkPrefix = isUk ? '' : '/ru';

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 uppercase tracking-tight">
            {isUk ? 'Географія' : 'География'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-cyan">{isUk ? 'роботи' : 'работы'}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed">
            {isUk 
              ? 'Я працюю з усіма регіонами України. Оберіть ваше місто, щоб дізнатися детальніше про розробку сайтів та ботів спеціально для вашого бізнесу.' 
              : 'Я работаю со всеми регионами Украины. Выберите ваш город, чтобы узнать подробнее о разработке сайтов и ботов специально для вашего бизнеса.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {CITIES.map((city) => {
             // Поддержка словарей для городов
             const cityName = typeof city.name === 'object' ? (city.name as any)[params.lang] : city.name;
             
             return (
            <Link 
              key={city.slug} 
              href={`${linkPrefix}/locations/${city.slug}`}
              className="bg-white rounded-2xl p-6 border border-ink/5 hover:border-ink/10 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div>
                <span className="font-display text-xl font-bold text-ink group-hover:text-coral transition-colors">
                  {cityName}
                </span>
                <p className="font-sans text-xs text-ink/40 mt-1 uppercase tracking-wider">
                  {isUk ? 'Розробка' : 'Разработка'}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-ink/40 group-hover:bg-coral group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          )})}
        </div>

      </div>
    </div>
  );
}