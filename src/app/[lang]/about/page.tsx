import Link from 'next/link';
import { QuizTrigger } from '@/components/QuizTrigger';
import { ArrowUpRight, Code2, Rocket, HeartHandshake, Eye, Mail, Phone, MapPin } from 'lucide-react';
import { TelegramIcon } from '@/components/TelegramIcon';
import { CopyButton } from '@/components/CopyButton';
import { getDictionary } from '@/i18n/dictionaries';
import { getSiteSettings } from '@/server/functions/settings';

export const runtime = 'edge';

// SEO METADATA
export async function generateMetadata({ params, searchParams }: any) {
  const isEn = searchParams?.en === 'true';
  const isUk = params.lang === 'uk';
  
  if (isEn) {
    return {
      title: 'Dmitriy Malyshev | Web Designer & Developer | Website Creator',
      description: 'Dmitriy Malyshev — freelance web designer and full-stack developer. High-converting websites, Telegram bots, and complex web applications.',
    };
  }

  return {
    title: isUk 
      ? 'Дмитро Малишев | Веб-дизайнер та розробник | Створення сайтів' 
      : 'Дмитрий Малышев | Веб-дизайнер и разработчик | Создатель сайтов',
    description: isUk 
      ? 'Дмитро Малишев — приватний веб-дизайнер та розробник сайтів. Створення ефективних лендінгів, корпоративних сайтів та Telegram-ботів під ключ.'
      : 'Дмитрий Малышев — частный веб-дизайнер и разработчик сайтов. Создание эффективных лендингов, корпоративных сайтов и Telegram-ботов под ключ.',
  };
}

export default async function AboutPage({ params, searchParams }: { params: { lang: string }, searchParams: any }) {
  const isEn = searchParams?.en === 'true';
  const isUk = params.lang === 'uk';
  
  const ruUkDict = getDictionary(params.lang).aboutPage;
  const ruUkContact = getDictionary(params.lang).contactPage;
  
  const settings = await getSiteSettings();
  const phone = settings.global_phone || '+38 098 856 77 77';
  const email = settings.global_email || 'contact@nashe.agency';
  const tg = settings.global_tg || 'https://t.me/malyshev_dev';

  const enDict = {
    hero: {
      badge: 'About Me',
      title: 'Hi, <br/>I\'m Dmitriy Malyshev <span class="text-coral">👋</span>',
      desc: 'I am a freelance web designer and full-stack developer. My core specialization is creating fast, modern websites and smart Telegram bots. I build digital products that actually bring results without unnecessary enterprise bloat.',
      btn: 'Discuss Project'
    },
    bento: {
      title: 'WHY CHOOSE ME?',
      desc: 'I combine modern UI/UX design with robust technical development.',
      c1_title: '100% Direct Focus',
      c1_text: 'You communicate directly with the developer, no middleman managers.',
      c2_title: '5 Years',
      c2_text: 'Of experience in web design and development. I know how to make it fast and SEO friendly.',
      c3_title: '$0 Hosting',
      c3_text: 'I use modern serverless stack (Cloudflare). Your landings and bots work without monthly server costs.',
      c4_title: 'Fast Delivery',
      c4_text: 'I launch MVP projects in days, not months. Quick iterations and high quality code.'
    },
    experience: {
      badge: 'Experience',
      title: 'Numbers speak <br/>louder than words',
      desc: 'Over the years, I have helped dozens of businesses establish a strong online presence and automate their sales processes.',
      stats: [
        { val: '50+', label: 'Projects' },
        { val: '5', label: 'Years' },
        { val: '100%', label: 'Dedication' },
        { val: '24/7', label: 'Support' }
      ]
    },
    cta: {
      title: 'Let\'s talk <br/> about your project',
      desc: 'Leave a request for a free consultation. We will discuss your idea and I will calculate the exact cost of implementation.',
      btn: 'Start Project'
    }
  };

  const enContact = {
    badge: 'Contacts',
    title: 'Get in touch',
    desc: 'Ready to start? Contact me via any convenient method.',
    btn: 'Leave Request',
    tgTitle: 'Telegram',
    tgDesc: 'Fastest way to get a reply',
    tgLink: 'Message me',
    emailTitle: 'Email',
    emailDesc: 'For detailed project briefs',
    phoneTitle: 'Phone',
    phoneDesc: 'Call me directly',
    locTitle: 'Location',
    locDesc: 'Available worldwide',
    locVal: 'Remote / Ukraine'
  };

  const dict: any = isEn ? enDict : ruUkDict;
  const contact: any = isEn ? enContact : ruUkContact;

  return (
    <div className="bg-white min-h-screen">
      {/* HIDDEN SEO KEYWORDS BLOCK */}
      <div className="sr-only">
        <h1>Дмитрий Малышев — Веб-дизайнер, веб-разработчик, создатель сайтов.</h1>
        <h2>Дмитро Малишев — Веб-дизайнер, веб-розробник, розробка сайтів під ключ.</h2>
        <h3>Dmitriy Malyshev — Web Designer, Web Developer, Website Creator.</h3>
        <p>I am Dmitriy Malyshev, a freelance web designer and developer creating high-converting websites and Telegram bots.</p>
        <p>Я Дмитрий Малышев, веб-дизайнер и создатель сайтов. Делаю сайты и телеграм боты.</p>
        <p>Я Дмитро Малишев, веб-дизайнер та творець сайтів. Розробляю сайти та телеграм боти.</p>
      </div>

      {/* LANGUAGE TOGGLE */}
      <div className="fixed top-24 right-6 z-50 flex gap-2">
        <Link 
          href="?en=false" 
          className={`px-4 py-2 rounded-full text-xs font-bold font-sans tracking-widest transition-all ${!isEn ? 'bg-ink text-white' : 'bg-surface text-ink hover:bg-ink/10'}`}
        >
          {isUk ? 'УКР/РУС' : 'РУС/УКР'}
        </Link>
        <Link 
          href="?en=true" 
          className={`px-4 py-2 rounded-full text-xs font-bold font-sans tracking-widest transition-all ${isEn ? 'bg-ink text-white' : 'bg-surface text-ink hover:bg-ink/10'}`}
        >
          ENG
        </Link>
      </div>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] h-full flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-32 lg:pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-coral/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />
        
        <div className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
            {dict.hero.badge}
          </div>
          
          <h2 
            className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-bold tracking-tight text-ink leading-[1.05] mb-6 uppercase break-words"
            dangerouslySetInnerHTML={{ __html: dict.hero.title }}
          />
          
          <p className="font-sans text-lg lg:text-xl text-ink/60 max-w-2xl font-medium leading-relaxed mb-10">
            {dict.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <QuizTrigger className="bg-ink hover:bg-ink/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-wide transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group w-full sm:w-auto justify-center">
              {dict.hero.btn}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </QuizTrigger>
          </div>
        </div>
      </section>

      {/* 2. ПОДХОД / ЦЕННОСТИ (BENTO GRID) */}
      <section className="py-12 lg:py-24 bg-surface border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 
              className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-ink uppercase max-w-2xl leading-tight break-words"
              dangerouslySetInnerHTML={{ __html: dict.bento.title }}
            />
            <p className="font-sans text-ink/50 leading-relaxed font-medium max-w-sm">
              {dict.bento.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-coral/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Code2 className="w-8 h-8 text-ink/40 group-hover:text-coral transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c1_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-lg mt-auto">
                {dict.bento.c1_text }
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-cyan-500/20 transition-all duration-500 group mobile-hover-card">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <HeartHandshake className="w-8 h-8 text-ink/40 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c2_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                {dict.bento.c2_text }
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group mobile-hover-card">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-8 h-8 text-ink/40 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c3_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed mt-auto">
                {dict.bento.c3_text }
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col border border-ink/5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Rocket className="w-8 h-8 text-ink/40 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                {dict.bento.c4_title}
              </h3>
              <p className="font-sans text-sm text-ink/60 font-medium leading-relaxed max-w-lg mt-auto">
                {dict.bento.c4_text  }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ОПЫТ (АКЦЕНТНЫЙ БЛОК) */}
      <section className="py-16 lg:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col xl:flex-row gap-12 lg:gap-16 xl:gap-24 items-center">
          <div className="xl:w-1/2 w-full">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 font-bold font-sans text-xs uppercase tracking-widest mb-6 text-white/70">
              {dict.experience.badge}
            </span>
            <h2 
              className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.05] mb-8 break-words"
              dangerouslySetInnerHTML={{ __html: dict.experience.title }}
            />
            <p className="font-sans text-lg text-white/60 font-light leading-relaxed">
              {dict.experience.desc}
            </p>
          </div>

          <div className="xl:w-1/2 w-full grid grid-cols-2 gap-6">
            {dict.experience.stats.map((stat: any, idx: number) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-2 break-words">{stat.val}</div>
                <div className="font-sans text-xs uppercase tracking-widest text-white/50 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. КОНТАКТЫ (ИНТЕГРИРОВАННЫЙ БЛОК) */}
      <section className="py-16 lg:py-24 bg-white border-b border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink/10 bg-surface font-bold font-sans text-xs uppercase tracking-widest mb-6 text-ink/70">
            <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
            {contact.badge}
          </div>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-ink leading-[1.05] mb-12 uppercase break-words">
            {contact.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Telegram */}
            <a href={tg} target="_blank" rel="noreferrer" className="bg-surface rounded-[2rem] p-8 border border-ink/5 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <TelegramIcon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">{contact.tgTitle}</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">{contact.tgDesc}</p>
              <div className="mt-auto w-full font-sans font-bold text-blue-500 flex items-center justify-between gap-2">
                <span className="truncate flex items-center gap-2">{contact.tgLink} <ArrowUpRight className="w-4 h-4 shrink-0" /></span>
                <CopyButton text={tg} />
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${email}`} className="bg-surface rounded-[2rem] p-8 border border-ink/5 hover:border-coral/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">{contact.emailTitle}</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">{contact.emailDesc}</p>
              <div className="mt-auto w-full font-sans font-bold text-coral flex items-center justify-between gap-2">
                <span className="truncate" title={email}>{email}</span>
                <CopyButton text={email} />
              </div>
            </a>

            {/* Phone */}
            <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="bg-surface rounded-[2rem] p-8 border border-ink/5 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">{contact.phoneTitle}</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">{contact.phoneDesc}</p>
              <div className="mt-auto w-full font-sans font-bold text-emerald-500 flex items-center justify-between gap-2">
                <span className="truncate" title={phone}>{phone}</span>
                <CopyButton text={phone} />
              </div>
            </a>

            {/* Location */}
            <div className="bg-surface rounded-[2rem] p-8 border border-ink/5 hover:border-purple-500/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">{contact.locTitle}</h3>
              <p className="font-sans text-ink/60 font-medium mb-4">{contact.locDesc}</p>
              <div className="mt-auto font-sans font-bold text-purple-500 flex items-center gap-2">
                {contact.locVal}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA БЛОК ИЗ ГЛАВНОЙ СТРАНИЦЫ */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-surface border border-ink/5 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col xl:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-coral/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl w-full">
              <h2 
                className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-ink mb-6 leading-tight break-words"
                dangerouslySetInnerHTML={{ __html: dict.cta.title }}
              />
              <p className="font-sans text-lg text-ink/60 font-medium leading-relaxed mb-10">
                {dict.cta.desc}
              </p>
              
              <QuizTrigger className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-5 font-bold font-sans tracking-widest text-sm uppercase transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-4 group">
                {dict.cta.btn}
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </QuizTrigger>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
