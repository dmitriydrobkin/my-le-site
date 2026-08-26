import { Metadata } from 'next';
import {
  Check, Sparkles, ArrowRight, Microscope, Heart,
  Minus
} from 'lucide-react';
import localFont from 'next/font/local';
import Image from 'next/image';

// @ts-expect-error
import LogoIsoderme from './LOGO_ISODERME.svg';
// @ts-expect-error
import LogoShattics from './shattics_logo.svg';

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
  title: 'Презентація структури сайту | Isodērme',
  description: 'Варіанти структури та архітектури сайту для клініки Isodērme',
};

/* ── Isoderme Brand Tokens ─────────────────────────────────── */
const ISO = {
  milk:      '#F6F1EB',
  black:     '#100E0D',
  burgundy:  '#5C1F29',
  chocolate: '#4A281F',
  beige:     '#CBB8A6',
} as const;

export default function IsodermePresentationPage() {
  const isAdmin = false;

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
      price: '$250',
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
      price: '$600',
      idealFor: 'Активна генерація лідів, детальна презентація послуг та команди.',
      benefit: 'Збір заявок безпосередньо на сайті, вища конверсія завдяки розкриттю експертності.',
      active: true, // Recommended
      features: [
        'Розширена структура',
        'Лід-форма "Записатись"',
        'Інтеграція сповіщень у Telegram',
        'Детальні картки послуг',
        'Блок команди фахівців',
        'Сторінка з відгуками'
      ]
    },
    {
      name: 'Corporate',
      tag: 'Міні-багатосторінковик',
      price: '$1200',
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
      price: '$900',
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
      <section className="relative w-full pt-12 pb-48 md:pb-64 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden min-h-[95vh] md:min-h-screen">
        
        {/* Shattics Watermark */}
        <div className="absolute inset-x-0 bottom-[-3%] md:bottom-[-5%] flex justify-center pointer-events-none z-0">
          <Image src={LogoShattics} alt="shattics" className="w-[115%] md:w-[120%] h-auto md:min-w-[1200px] max-w-none opacity-80 object-contain" />
        </div>

        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="iso-tag">Презентація структури сайту</span>
            </div>
            
            <div className="flex justify-center px-4">
              <Image src={LogoIsoderme} alt="Isoderme" className="w-full max-w-[700px] h-auto" />
            </div>
          </div>

          <div className="space-y-4 px-4 relative z-10">
            <p className="iso-choc mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, letterSpacing: '0.02em', maxWidth: '640px' }}>
              <span className="font-bold">shattics</span> розробив для Isodērme фірмовий стиль, айдентику та філософію бренду.
            </p>
            <p className="iso-choc mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, letterSpacing: '0.02em', maxWidth: '640px' }}>
              Наступний крок —&nbsp;цифрова присутність, яка відповідає тому ж рівню.
            </p>
          </div>

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

                <div className="mt-6 pt-6 border-t" style={{ borderColor: `${ISO.beige}40` }}>
                  <span className="block text-[11px] font-bold tracking-[0.2em] uppercase iso-beig mb-1">Вартість</span>
                  <div className="iso-choc text-3xl font-bold tracking-[-0.02em] opacity-90">
                    {v.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. ПОРІВНЯЛЬНА ТАБЛИЦЯ ─────────────────── */}
      <section className="w-full py-24 bg-white px-6 md:px-12 border-t" style={{ borderColor: `${ISO.beige}40` }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center flex flex-col items-center">
            <span className="iso-accent-line mb-8" />
            <h2 className="iso-fg uppercase tracking-[-0.03em] leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>
              Порівняння варіантів
            </h2>
            <p className="iso-choc text-lg font-light max-w-2xl">
              Ключові відмінності між структурами — оберіть формат, який найкраще відповідає цілям клініки
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" style={{ minWidth: '640px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${ISO.burgundy}` }}>
                  <th className="py-5 px-5 iso-fg text-[12px] font-bold uppercase tracking-[0.15em]" style={{ width: '22%' }}>Функціонал</th>
                  {variants.map((v, i) => (
                    <th key={i} className={`py-5 px-5 text-center text-[12px] font-bold uppercase tracking-[0.15em] ${v.active ? 'iso-burg' : 'iso-fg'}`}>
                      {v.name}
                      {v.active && <span className="block text-[9px] mt-1 font-bold" style={{ color: ISO.burgundy, letterSpacing: '0.2em' }}>★ РЕКОМЕНДУЄМО</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {[
                  { label: 'Кількість сторінок', vals: ['1', '1', '5–8', '1 + квіз'] },
                  { label: 'Лід-форма / запис', vals: ['—', '✓', '✓', '✓'] },
                  { label: 'Telegram-сповіщення', vals: ['—', '✓', '✓', '✓'] },
                  { label: 'SEO-оптимізація', vals: ['базова', 'базова', 'розширена', 'базова'] },
                  { label: 'Каталог послуг', vals: ['стислий', 'детальний', 'окремі сторінки', 'детальний'] },
                  { label: 'Блок команди', vals: ['—', '✓', '✓', '✓'] },
                  { label: 'Інтерактивний квіз', vals: ['—', '—', '—', '✓'] },
                  { label: 'Збір анамнезу', vals: ['—', '—', '—', '✓'] },
                  { label: 'Адмін-панель', vals: ['—', '—', '✓', '✓'] },
                  { label: 'Окремі сторінки послуг', vals: ['—', '—', '✓', '—'] },
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: `1px solid ${ISO.beige}40` }}>
                    <td className="py-4 px-5 iso-choc font-medium text-[13px]">{row.label}</td>
                    {row.vals.map((val, vi) => (
                      <td key={vi} className="py-4 px-5 text-center">
                        {val === '✓' ? (
                          <Check className="w-5 h-5 mx-auto" style={{ color: ISO.burgundy }} />
                        ) : val === '—' ? (
                          <Minus className="w-4 h-4 mx-auto opacity-20" />
                        ) : (
                          <span className="iso-fg text-[13px] font-medium">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center">
            <p className="iso-choc text-[15px] font-light leading-relaxed max-w-xl mx-auto">
              Кожен варіант можна адаптувати під ваші конкретні потреби. Ми обговоримо деталі та підберемо оптимальне рішення.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
