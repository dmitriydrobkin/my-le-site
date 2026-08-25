import { Metadata } from 'next';
import {
  Stethoscope, LayoutTemplate, CheckCircle2, ShieldCheck,
  FormInput, PhoneCall, List, ChevronRight, Check,
  Sparkles, Globe, Users, MessageSquare, Calendar,
  ArrowRight, Microscope, Heart, FileText
} from 'lucide-react';
import localFont from 'next/font/local';

const mont = localFont({
  src: [
    { path: './font/Mont-Light.woff2', weight: '300', style: 'normal' },
    { path: './font/Mont-Regular.woff2', weight: '400', style: 'normal' },
    { path: './font/Mont-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './font/Mont-Bold.woff2', weight: '700', style: 'normal' },
    { path: './font/Mont-Heavy.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-mont',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Комерційна пропозиція | Isodērme × Le Site',
  description: 'Структура та варіанти лендінгу для клініки Isodērme',
};

/* ── Isoderme Brand Tokens ─────────────────────────────────── */
const ISO = {
  milk:      '#F6F1EB',
  black:     '#100E0D',
  burgundy:  '#5C1F29',
  chocolate: '#4A281F',
  beige:     '#CBB8A6',
} as const;

export default async function IsodermePresentationPage() {
  const isAdmin = await (async () => {
    try {
      const { verifyAdminSession } = await import('@/server/actions/auth');
      await verifyAdminSession();
      return true;
    } catch { return false; }
  })();

  /* ── Theme injection (scoped to .iso namespace) ──────────── */
  const themeCSS = `
    <style>
      .iso { font-family: var(--font-mont), 'Montserrat', system-ui, sans-serif; }
      .iso * { font-family: inherit; }

      .iso-bg   { background-color: ${ISO.milk}; }
      .iso-fg   { color: ${ISO.black}; }
      .iso-burg { color: ${ISO.burgundy}; }
      .iso-choc { color: ${ISO.chocolate}; }
      .iso-beig { color: ${ISO.beige}; }

      .iso-bg-burg { background-color: ${ISO.burgundy}; }
      .iso-bg-choc { background-color: ${ISO.chocolate}; }
      .iso-bg-beig { background-color: ${ISO.beige}; }
      .iso-bg-blk  { background-color: ${ISO.black}; }

      .iso-card {
        background: #FFFFFF;
        border: 1px solid ${ISO.beige}40;
        transition: all 400ms cubic-bezier(.16,1,.3,1);
      }
      .iso-card:hover {
        box-shadow: 0 12px 40px ${ISO.chocolate}10;
        transform: translateY(-4px);
      }
      
      .iso-card-active {
        background: ${ISO.milk};
        border: 2px solid ${ISO.burgundy};
        position: relative;
      }
      .iso-card-active::before {
        content: "Рекомендуємо";
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: ${ISO.burgundy};
        color: ${ISO.milk};
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        padding: 4px 12px;
        border-radius: 4px;
        text-transform: uppercase;
      }

      .iso-accent-line {
        width: 48px; height: 2px;
        background: ${ISO.burgundy};
        display: block;
      }

      .iso-tag {
        display: inline-block;
        padding: 6px 16px;
        border: 1px solid ${ISO.burgundy}40;
        color: ${ISO.burgundy};
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .iso-btn {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 16px 32px;
        background: ${ISO.burgundy};
        color: ${ISO.milk};
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        transition: all 300ms;
        border-radius: 4px;
      }
      .iso-btn:hover {
        background: ${ISO.black};
      }
      
      .iso-input {
        width: 100%;
        padding: 16px 20px;
        background: transparent;
        border: 1px solid ${ISO.beige}80;
        border-radius: 4px;
        font-size: 15px;
        color: ${ISO.black};
        transition: all 300ms;
      }
      .iso-input:focus {
        outline: none;
        border-color: ${ISO.burgundy};
        background: #FFFFFF;
      }
      .iso-input::placeholder {
        color: ${ISO.black}50;
      }
    </style>
  `;

  const variants = [
    {
      name: 'Візитка',
      tag: 'Швидкий старт',
      priceLevel: '$',
      idealFor: 'Швидкий запуск реклами, базове представлення в мережі (MVP).',
      benefit: 'Клієнт знаходить вас, бачить статус і може зв\'язатись. Мінімум витрат часу.',
      features: [
        'Одна сторінка (Landing)',
        'Логотип та філософія',
        'Стислий перелік послуг',
        'Кнопка переходу в месенджер',
        'Блок контактів (графік, адреса)',
        'Без адмін-панелі'
      ]
    },
    {
      name: 'Лендінг',
      tag: 'Повноцінний продаж',
      priceLevel: '$$',
      idealFor: 'Активна генерація лідів, детальна презентація послуг та команди.',
      benefit: 'Збір заявок безпосередньо на сайті, вища конверсія завдяки розкриттю експертності.',
      active: true, // Recommended
      features: [
        'Розширена структура',
        'Лід-форма "Записатись"',
        'Інтеграція сповіщень у Telegram',
        'Детальні картки послуг',
        'Блок команди фахівців',
        'Проста адмін-панель'
      ]
    },
    {
      name: 'Corporate',
      tag: 'Міні-багатосторінковик',
      priceLevel: '$$$',
      idealFor: 'Статусне позиціонування, SEO-просування в Google.',
      benefit: 'Окрема сторінка для кожної послуги. Сайт сприймається як велика клініка.',
      features: [
        'Багатосторінкова структура',
        'Окремий каталог послуг',
        'SEO-база для кожної сторінки',
        'Сторінка "Про клініку"',
        'Зручна навігація (Header)',
        'Повна адмін-панель'
      ]
    },
    {
      name: 'Квіз',
      tag: 'Інтерактивна заявка',
      priceLevel: '$$$',
      idealFor: 'Складні послуги, сегментація пацієнтів ще до візиту.',
      benefit: 'Лікар отримує вже підготовлену заявку з анамнезом. Високе залучення пацієнта.',
      features: [
        'Повноцінний лендінг',
        'Вбудована система опитування',
        'Логіка гіллястих питань',
        'Збір анамнезу/проблеми',
        'Лід-форма наприкінці квізу',
        'Адмінка результатів'
      ]
    }
  ];

  return (
    <div className={`${mont.variable} iso iso-bg min-h-screen w-full flex flex-col`}>
      <div dangerouslySetInnerHTML={{ __html: themeCSS }} />

      {/* ── 01. HERO SECTION ──────────────────────────── */}
      <section className="relative w-full pt-24 pb-32 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <span className="iso-accent-line mx-auto" />
          
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="iso-tag">Комерційна пропозиція</span>
              {isAdmin && <span className="iso-tag" style={{ borderColor: ISO.black, color: ISO.black }}>Admin View</span>}
            </div>
            
            <h1 className="iso-fg leading-[0.95] tracking-[-0.04em] uppercase" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 900 }}>
              Isod<span style={{ fontStyle: 'normal' }}>ē</span>rme
            </h1>
          </div>

          <p className="iso-choc max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, letterSpacing: '0.04em' }}>
            Ми вивчили ваш гайдлайн. «Не beauty clinic. Медична точність зустрічається з людським розумінням». Цей лендінг демонструє, як ваша філософія працюватиме в інтернеті.
          </p>

          <div className="pt-8 flex justify-center">
            <a href="#variants" className="iso-btn">
              Дивитись варіанти структури <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. MARKET ANALYSIS / PILLARS ─────────────── */}
      <section className="w-full py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase iso-burg mb-4 block">Наш підхід</span>
            <h2 className="iso-fg uppercase tracking-[-0.03em] leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900 }}>
              Що ми інтегруємо<br/>в архітектуру
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-8 h-8 iso-burg" />,
                title: 'Наукова строгість',
                desc: 'Структуроване меню, фокус на протоколах лікування. Ніяких «рожевих обіцянок» — тільки факти.',
              },
              {
                icon: <Sparkles className="w-8 h-8 iso-burg" />,
                title: 'Преміальна естетика',
                desc: 'Плавний скрол, просторий мінімалізм. Строгий шрифт Mont та фірмові кольори. Сайт дихає.',
              },
              {
                icon: <Heart className="w-8 h-8 iso-burg" />,
                title: 'Орієнтир на пацієнта',
                desc: 'Чітка навігація. Мінімум кліків до запису. Пацієнт не губиться в термінах, а бачить рішення.',
              },
            ].map((item, i) => (
              <div key={i} className="p-10 border border-[#CBB8A6]40 rounded-lg flex flex-col gap-6" style={{ background: ISO.milk }}>
                {item.icon}
                <div>
                  <h3 className="iso-fg text-xl font-bold mb-3">{item.title}</h3>
                  <p className="iso-choc text-[15px] font-light leading-relaxed opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. UNIFIED VARIANTS COMPARISON ───────────── */}
      <section id="variants" className="w-full py-24 px-6 md:px-12 iso-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center flex flex-col items-center">
            <span className="iso-accent-line mb-8" />
            <h2 className="iso-fg uppercase tracking-[-0.03em] leading-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900 }}>
              4 варіанти реалізації
            </h2>
            <p className="iso-choc text-lg font-light max-w-2xl">
              Від найпростішого MVP до багатофункціональної системи залучення лідів. Порівняйте та оберіть те, що потрібно бізнесу саме зараз.
            </p>
          </div>

          {/* Comparative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {variants.map((v, i) => (
              <div key={i} className={`p-8 flex flex-col ${v.active ? 'iso-card-active' : 'iso-card rounded-lg'}`}>
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase iso-burg border border-[#5C1F29]40 px-3 py-1 rounded-full">
                      {v.tag}
                    </span>
                    {/* <span className="iso-choc font-bold text-sm">{v.priceLevel}</span> */}
                  </div>
                  <h3 className="iso-fg text-2xl font-black uppercase tracking-[-0.02em]">{v.name}</h3>
                </div>

                <div className="mb-8 flex-1">
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase iso-beig mb-3">Вигода для клініки</h4>
                  <p className="iso-fg text-[14px] font-medium leading-relaxed mb-6">
                    {v.benefit}
                  </p>

                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase iso-beig mb-3">Що всередині</h4>
                  <ul className="space-y-3 mb-6">
                    {v.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <Check className="w-4 h-4 iso-burg shrink-0 mt-[2px]" />
                        <span className="iso-choc text-[13px] font-light leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase iso-beig mb-3">Для кого ідеально</h4>
                  <p className="iso-choc text-[13px] font-light leading-relaxed opacity-80">
                    {v.idealFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. NEXT STEPS / CONTACT FORM ─────────────── */}
      <section className="w-full py-24 bg-white px-6 md:px-12 border-t border-[#CBB8A6]40">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#100E0D] text-[#F6F1EB] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-6">
              <h2 className="uppercase tracking-[-0.03em] leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>
                Готові <span className="iso-burg">почати?</span>
              </h2>
              <p className="text-[15px] font-light opacity-80 leading-relaxed max-w-sm">
                Якщо ви визначилися з варіантом, залиште контакти. Ми складемо точний кошторис та таймлайн розробки.
              </p>
            </div>

            <div className="flex-1 w-full bg-[#F6F1EB] p-8 rounded-xl">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase iso-choc mb-2">Обраний варіант</label>
                  <select className="iso-input bg-transparent cursor-pointer">
                    <option>Варіант 1: Візитка</option>
                    <option>Варіант 2: Розширений лендінг</option>
                    <option>Варіант 3: Багатосторінковий</option>
                    <option>Варіант 4: Квіз</option>
                    <option>Ще не визначились, потрібна порада</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase iso-choc mb-2">Контактний телефон / Telegram</label>
                  <input type="text" placeholder="+38 (000) 000-00-00" className="iso-input" />
                </div>
                <button type="button" className="iso-btn w-full justify-center mt-2">
                  Обговорити проект
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="w-full py-8 text-center iso-bg border-t border-[#CBB8A6]30">
        <p className="iso-beig" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Le Site Studio © 2026 · Commercial Proposal
        </p>
      </footer>

    </div>
  );
}
