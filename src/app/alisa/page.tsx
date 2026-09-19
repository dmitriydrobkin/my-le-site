'use client';
import React, { useEffect, useState } from 'react';
import './styles.css';

export default function AlisaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('adults');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/*  STICKY NAVBAR  */}
      <header className="nav-glass sticky top-0 z-50 w-full transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <a
            href="#home"
            className="text-olive font-serif text-2xl font-medium tracking-[0.08em] transition-opacity hover:opacity-85"
          >
            АЛИСА КЛИМОВА
          </a>
          <nav className="text-olive/80 hidden items-center space-x-10 text-[15px] font-medium md:flex">
            <a href="#about" className="hover:text-terracotta transition-colors">
              Обо мне
            </a>
            <a href="#consultations" className="hover:text-terracotta transition-colors">
              Консультации
            </a>
            <a href="#products" className="hover:text-terracotta transition-colors">
              Продукты
            </a>
            <a href="#articles" className="hover:text-terracotta transition-colors">
              Блог
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#booking" className="btn-primary hidden px-6 py-2.5 text-sm sm:flex">
              Записаться
            </a>
            <button
              id="mobileMenuBtn"
              className="z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
            >
              <span className="line1 bg-olive h-[2px] w-6 origin-center transition-transform duration-300"></span>
              <span className="line2 bg-olive h-[2px] w-6 transition-opacity duration-300"></span>
              <span className="line3 bg-olive h-[2px] w-6 origin-center transition-transform duration-300"></span>
            </button>
          </div>
        </div>
        <div
          id="mobileMenu"
          className="bg-cream/98 pointer-events-none fixed inset-0 z-40 flex flex-col items-center justify-center opacity-0 backdrop-blur-xl transition-all duration-300"
        >
          <nav className="text-olive flex flex-col items-center space-y-8 font-serif text-2xl">
            <a href="#about" className="mobile-link hover:text-terracotta transition-colors">
              Обо мне
            </a>
            <a
              href="#consultations"
              className="mobile-link hover:text-terracotta transition-colors"
            >
              Консультации
            </a>
            <a href="#products" className="mobile-link hover:text-terracotta transition-colors">
              Продукты
            </a>
            <a href="#articles" className="mobile-link hover:text-terracotta transition-colors">
              Блог
            </a>
            <a href="#booking" className="mobile-link btn-primary mt-4 font-sans text-base">
              Записаться
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  1. HERO — Минималистичный, крупный, с акцентной цитатой  */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section
          id="home"
          className="mx-auto w-full max-w-[1200px] px-5 pb-[40px] pt-[60px] md:px-8 md:pb-[60px] md:pt-[100px]"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="reveal flex flex-col justify-center lg:col-span-7">
              <span className="overline-text mb-6 block text-[12px] md:text-[13px]">
                Специалист по питанию и комплексному подходу к здоровью
              </span>
              <h1 className="mb-6 text-[36px] leading-[1.12] sm:text-[48px] lg:text-[56px]">
                Помогаю взрослым и&nbsp;детям выстроить питание, которое работает{' '}
                <em className="text-terracotta not-italic">в&nbsp;реальной жизни</em>
              </h1>
              <p className="text-textSecondary mb-8 max-w-xl text-[17px] font-light leading-[1.7]">
                Не диета на 21 день. Не универсальный протокол. А&nbsp;системный разбор вашей
                ситуации: питание, сон, стресс, активность — чтобы найти баланс, который можно
                поддерживать долго.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#booking" className="btn-primary">
                  Записаться на консультацию
                </a>
                <a href="#products" className="btn-secondary">
                  Программы и гайды
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-2 flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative w-full max-w-[400px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] shadow-[0_16px_48px_rgba(74,85,68,0.12)]">
                  <img
                    src="/alisa/images/551354495_18288018301261361_6287444496406407310_n.jpg"
                    alt="Алиса Климова"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
                <div className="glass-badge absolute -bottom-5 left-4 right-4 max-w-[280px] p-4 shadow-[0_12px_32px_rgba(74,85,68,0.15)] sm:-left-4 sm:right-auto">
                  <div className="flex items-start gap-3">
                    <div className="bg-terracotta mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <p className="text-olive font-sans text-[13px] font-medium leading-snug">
                        ТОП-10 Нутрициологов России
                      </p>
                      <p className="text-textSecondary mt-0.5 font-sans text-[11px] tracking-wide">
                        Life Organics Awards 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  TRUST STRIP — Бегущая строка доверия                      */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section className="border-borderLight w-full overflow-hidden border-y bg-white/60 py-5">
          <div className="marquee-track flex whitespace-nowrap">
            <div className="text-olive/60 flex items-center gap-12 px-6 text-[14px] font-medium tracking-wide">
              <span>С 2019 года · Индивидуальная работа</span>
              <span className="text-terracotta/30">✦</span>
              <span>ТОП-10 Нутрициологов России 2023</span>
              <span className="text-terracotta/30">✦</span>
              <span>Выпускница МИИН</span>
              <span className="text-terracotta/30">✦</span>
              <span>Член АНКЗ</span>
              <span className="text-terracotta/30">✦</span>
              <span>60 000+ подписчиков</span>
              <span className="text-terracotta/30">✦</span>
              <span>Автор курса «Прикорм вместе»</span>
              <span className="text-terracotta/30">✦</span>
              <span>Автор книги рецептов</span>
              <span className="text-terracotta/30">✦</span>
            </div>
            <div className="text-olive/60 flex items-center gap-12 px-6 text-[14px] font-medium tracking-wide">
              <span>С 2019 года · Индивидуальная работа</span>
              <span className="text-terracotta/30">✦</span>
              <span>ТОП-10 Нутрициологов России 2023</span>
              <span className="text-terracotta/30">✦</span>
              <span>Выпускница МИИН</span>
              <span className="text-terracotta/30">✦</span>
              <span>Член АНКЗ</span>
              <span className="text-terracotta/30">✦</span>
              <span>60 000+ подписчиков</span>
              <span className="text-terracotta/30">✦</span>
              <span>Автор курса «Прикорм вместе»</span>
              <span className="text-terracotta/30">✦</span>
              <span>Автор книги рецептов</span>
              <span className="text-terracotta/30">✦</span>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  2. «УЗНАЁТЕ СЕБЯ?» — Бенто-грид, не 3 одинаковых карточки  */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section className="w-full py-[80px] md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="reveal mx-auto mb-[56px] max-w-2xl text-center">
              <h2 className="mb-4 text-[32px] leading-[1.15] md:text-[44px]">Узнаёте себя?</h2>
              <p className="text-textSecondary text-[17px] font-light">
                Вам ко мне, если хотите решить свой запрос системно — без давления и универсальных
                протоколов.
              </p>
            </div>

            {/*  Bento Grid: 2 больших + 1 акцент  */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/*  Взрослые — крупная карточка  */}
              <div className="bento-item reveal reveal-delay-1 lg:row-span-2">
                <div className="aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-[240px]">
                  <img
                    src="/alisa/images/75244397_694545621046656_5298872380536389632_n.jpg"
                    alt="Здоровое питание"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
                <div className="p-6 md:p-7">
                  <span className="badge-sm badge-terracotta mb-4">Взрослые</span>
                  <h3 className="mb-3 text-[22px]">Питание, энергия и вес</h3>
                  <ul className="text-textSecondary mb-6 space-y-2.5 text-[14px] font-light">
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> Перепробовали диеты — ничего
                      не работает надолго
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> По анализам «всё в норме»,
                      но сил нет
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> Хотите разобраться с весом
                      без жёстких ограничений
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> Беспокоит кожа, пищеварение
                      или сон
                    </li>
                  </ul>
                  <a href="#consultations" className="btn-link">
                    Подробнее →
                  </a>
                </div>
              </div>

              {/*  Дети  */}
              <div className="bento-item reveal reveal-delay-2">
                <div className="p-6 md:p-7">
                  <span className="badge-sm badge-olive mb-4">Дети и прикорм</span>
                  <h3 className="mb-3 text-[22px]">Здоровый рацион с первых лет</h3>
                  <ul className="text-textSecondary space-y-2 text-[14px] font-light">
                    <li className="flex gap-2.5">
                      <span className="text-olive mt-0.5">→</span> Ребёнок — малоежка или ест только
                      2–3 продукта
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-olive mt-0.5">→</span> Часто болеет, быстро устаёт
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-olive mt-0.5">→</span> Начинаете прикорм и хотите всё
                      сделать правильно
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Беременность  */}
              <div className="bento-item reveal reveal-delay-3">
                <div className="p-6 md:p-7">
                  <span className="badge-sm badge-terracotta mb-4">Беременность и семья</span>
                  <h3 className="mb-3 text-[22px]">Ресурс мамы и малыша</h3>
                  <ul className="text-textSecondary space-y-2 text-[14px] font-light">
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> Планируете или ждёте малыша
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> Кормите грудью — ваш ресурс
                      на нуле
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-terracotta mt-0.5">→</span> Устали готовить всем
                      отдельно
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Акцентный CTA  */}
              <div className="bg-olive reveal reveal-delay-4 flex flex-col items-center justify-between gap-6 rounded-[20px] p-7 md:flex-row md:p-8 lg:col-span-2">
                <div>
                  <p className="text-cream font-serif text-[18px] leading-snug md:text-[20px]">
                    Не уверены, подойдёт ли вам формат?
                  </p>
                  <p className="text-cream/70 mt-1 text-[14px] font-light">
                    Опишите свою ситуацию — я помогу определиться.
                  </p>
                </div>
                <a href="#booking" className="btn-primary bg-terracotta shrink-0">
                  Оставить заявку →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  3. ОБО МНЕ — Компактная история + аккордеон                */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section id="about" className="bg-creamDark w-full py-[80px] md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="mb-[80px] grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/*  Фото с декором  */}
              <div className="reveal lg:col-span-5">
                <div className="relative">
                  <img
                    src="/alisa/images/photo_2024-11-23_08-.jpg"
                    alt="Алиса"
                    className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
                    style={{ objectPosition: 'top center' }}
                  />
                  <div className="absolute -bottom-6 -right-3 max-w-[300px] rounded-[16px] bg-white p-5 shadow-lg md:-right-6">
                    <p className="text-olive font-serif text-[20px] italic leading-[1.3]">
                      «Забота о здоровье не должна быть постоянной борьбой с собой»
                    </p>
                  </div>
                </div>
              </div>

              {/*  Текст  */}
              <div className="reveal reveal-delay-1 lg:col-span-7">
                <h2 className="mb-6 text-[32px] leading-[1.15] md:text-[44px]">Мой путь</h2>
                <div className="text-textPrimary mb-8 space-y-4 text-[16px] font-light leading-[1.75]">
                  <p>
                    Много лет у меня практически не было сил и энергии — апатия, мало мотивации,
                    постоянная борьба с весом через диеты и голодовки. Это привело к нарушению
                    пищевого поведения и проблемам с циклом.
                  </p>
                  <p>
                    Около 6 лет я работала маркетологом, затем создала свой бизнес. Из личного
                    интереса начала изучать составы косметики и косметическую химию, затем —
                    физиологию и базовые показатели крови. Это обучение «для себя» полностью
                    изменило мою профессиональную траекторию.
                  </p>
                </div>

                {/*  Блоки-карточки вместо аккордеонов (Tilda: TX17 или CO24)  */}
                <div className="space-y-4">
                  <div className="border-borderLight/50 rounded-[16px] border bg-white p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-terracotta/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                        <span className="text-terracotta text-[14px] font-semibold">→</span>
                      </div>
                      <h4 className="text-olive font-serif text-[18px]">Мой опыт</h4>
                    </div>
                    <p className="text-textSecondary text-[14px] font-light leading-[1.7]">
                      Были выраженные проблемы с пищеварением, разные схемы лечения без результата.
                      С циклом предлагали гормональную коррекцию. Мне хотелось не просто убирать
                      проявления, а разобраться, какие факторы вообще влияют на моё состояние. Я
                      постоянно продолжаю учиться и не работаю по одному готовому протоколу для
                      всех.
                    </p>
                  </div>
                  <div className="border-borderLight/50 rounded-[16px] border bg-white p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-olive/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                        <span className="text-olive text-[14px] font-semibold">✿</span>
                      </div>
                      <h4 className="text-olive font-serif text-[18px]">Детское направление</h4>
                    </div>
                    <p className="text-textSecondary text-[14px] font-light leading-[1.7]">
                      После рождения дочери для меня открылось отдельное огромное направление. Я
                      увидела, насколько многое можно заложить в первые годы жизни ребёнка — и
                      насколько сложно родителю понять, что делать. Отсюда вырос курс «Прикорм
                      вместе» — от начала прикорма до трёх лет.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  Миссия: два направления — визуально разный дизайн  */}
            <div className="mb-[80px] grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="reveal rounded-[20px] bg-white p-8 md:p-10">
                <div className="bg-terracotta/10 mb-5 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-terracotta text-[20px]">♀</span>
                </div>
                <h3 className="mb-3 text-[24px]">Для взрослых</h3>
                <p className="text-textSecondary text-[15px] font-light leading-[1.7]">
                  Помочь разобраться со своим самочувствием, питанием и образом жизни, увидеть
                  взаимосвязи и выстроить систему заботы о себе, которую реально можно поддерживать
                  в обычной жизни.
                </p>
              </div>
              <div className="bg-olive text-cream reveal reveal-delay-1 rounded-[20px] p-8 md:p-10">
                <div className="bg-cream/15 mb-5 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-cream text-[20px]">✿</span>
                </div>
                <h3 className="text-cream mb-3 text-[24px]">Для родителей</h3>
                <p className="text-cream/80 text-[15px] font-light leading-[1.7]">
                  Дать понятные знания и инструменты, чтобы с первых лет жизни ребёнка заложить базу
                  разнообразного питания и здорового пищевого поведения.
                </p>
              </div>
            </div>

            {/*  Принципы — горизонтальные карточки с иконками (Tilda: FT01/CO25)  */}
            <h2 className="reveal mb-[48px] text-center text-[32px] leading-[1.15] md:text-[44px]">
              Как я работаю
            </h2>
            <div className="reveal grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border-borderLight/50 rounded-[20px] border bg-white p-7">
                <div className="bg-terracotta/10 mb-4 flex h-12 w-12 items-center justify-center rounded-[12px]">
                  <svg
                    className="text-terracotta h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-olive mb-2 font-serif text-[20px]">Комплексный взгляд</h4>
                <p className="text-textSecondary text-[14px] font-light leading-[1.7]">
                  Смотрю на здоровье целиком: питание, сон, стресс, активность. Невозможно
                  разобраться, глядя только на рацион.
                </p>
              </div>
              <div className="border-borderLight/50 rounded-[20px] border bg-white p-7">
                <div className="bg-olive/10 mb-4 flex h-12 w-12 items-center justify-center rounded-[12px]">
                  <svg
                    className="text-olive h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-olive mb-2 font-serif text-[20px]">Для реальной жизни</h4>
                <p className="text-textSecondary text-[14px] font-light leading-[1.7]">
                  Рекомендации, которые можно соблюдать с вашим режимом, семьёй и ресурсом. Без
                  идеализма и чувства вины.
                </p>
              </div>
              <div className="border-borderLight/50 rounded-[20px] border bg-white p-7">
                <div className="bg-terracotta/10 mb-4 flex h-12 w-12 items-center justify-center rounded-[12px]">
                  <svg
                    className="text-terracotta h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-olive mb-2 font-serif text-[20px]">Без запретов</h4>
                <p className="text-textSecondary text-[14px] font-light leading-[1.7]">
                  Не делю еду на «можно» и «нельзя». Выстраиваем баланс с местом для удовольствия от
                  еды.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  4. КОНСУЛЬТАЦИИ — Табовый интерфейс                        */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section id="consultations" className="w-full py-[80px] md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="reveal mx-auto mb-[48px] max-w-3xl text-center">
              <h2 className="mb-4 text-[32px] leading-[1.12] md:text-[48px]">
                Персональная работа
              </h2>
              <p className="text-textSecondary text-[17px] font-light">
                Каждая консультация — глубокое погружение в вашу ситуацию, а не стандартная схема.
              </p>
            </div>

            {/*  Tabs  */}
            <div className="reveal mb-10 flex flex-wrap justify-center gap-2">
              <button className="tab-btn active" data-tab="adults">
                Взрослые
              </button>
              <button className="tab-btn" data-tab="kids">
                Дети
              </button>
              <button className="tab-btn" data-tab="mama">
                Мама + Малыш
              </button>
              <button className="tab-btn" data-tab="pregnancy">
                Беременность
              </button>
            </div>

            {/*  Tab Panels  */}
            <div className="reveal">
              {/*  Взрослые  */}
              <div id="tab-adults" className="tab-panel active">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
                  <div className="bento-item p-8 md:p-10 lg:col-span-3">
                    <span className="badge-sm badge-terracotta mb-5">Для вас</span>
                    <p className="text-textPrimary mb-6 text-[17px] font-medium">
                      Если вы хотите разобраться со своим питанием, самочувствием или весом —
                      системно, а не через очередную диету.
                    </p>
                    <p className="text-olive mb-3 text-[14px] font-semibold uppercase tracking-wider">
                      С какими запросами работаю:
                    </p>
                    <div className="text-textSecondary mb-8 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] font-light sm:grid-cols-2">
                      <span>→ Питание и пищеварение</span>
                      <span>→ Энергия и хроническая усталость</span>
                      <span>→ Состояние кожи, волос, ногтей</span>
                      <span>→ Вес и пищевые привычки</span>
                      <span>→ Подбор витаминов и добавок</span>
                      <span>→ Подготовка к беременности</span>
                    </div>
                    <a href="#booking" className="btn-primary">
                      Записаться в предзапись →
                    </a>
                  </div>
                  <div className="bg-creamDark rounded-[20px] p-7 lg:col-span-2">
                    <h4 className="mb-4 text-[20px]">Что входит</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">1</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Подробная анкета до консультации
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">2</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Анализ рациона и образа жизни
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">3</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Видеоконсультация (60–90 мин)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">4</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Персональные рекомендации
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">5</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Сопровождение после консультации
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Дети  */}
              <div id="tab-kids" className="tab-panel">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
                  <div className="bento-item p-8 md:p-10 lg:col-span-3">
                    <span className="badge-sm badge-olive mb-5">Для родителей</span>
                    <p className="text-textPrimary mb-6 text-[17px] font-medium">
                      Выстроить здоровое питание ребёнка — от прикорма до школьного возраста.
                    </p>
                    <p className="text-olive mb-3 text-[14px] font-semibold uppercase tracking-wider">
                      С какими запросами работаю:
                    </p>
                    <div className="text-textSecondary mb-8 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] font-light sm:grid-cols-2">
                      <span>→ Разнообразный рацион ребёнка</span>
                      <span>→ Малоежки и избирательность</span>
                      <span>→ Утомляемость и концентрация</span>
                      <span>→ ОРВИ каждые 2 недели</span>
                      <span>→ Питание при спортивных нагрузках</span>
                      <span>→ Особенности роста и развития</span>
                    </div>
                    <a href="#booking" className="btn-primary">
                      Записаться в предзапись →
                    </a>
                  </div>
                  <div className="bg-creamDark rounded-[20px] p-7 lg:col-span-2">
                    <h4 className="mb-4 text-[20px]">Что входит</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">1</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Подробная анкета (заполняет родитель)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">2</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Анализ рациона ребёнка и режима дня
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">3</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Видеоконсультация (60–90 мин)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">4</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Персональные рекомендации по питанию и добавкам
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">5</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Сопровождение после консультации
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Мама + Малыш  */}
              <div id="tab-mama" className="tab-panel">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
                  <div className="bento-item p-8 md:p-10 lg:col-span-3">
                    <span className="badge-sm badge-terracotta mb-5">
                      Два запроса — одна работа
                    </span>
                    <p className="text-textPrimary mb-6 text-[17px] font-medium">
                      Для мам на грудном вскармливании, которые хотят позаботиться и о себе, и о
                      малыше.
                    </p>
                    <div className="text-textSecondary mb-8 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] font-light sm:grid-cols-2">
                      <span>
                        <strong className="text-textPrimary">Мама:</strong> Питание, энергия,
                        витамины
                      </span>
                      <span>
                        <strong className="text-textPrimary">Малыш:</strong> Рацион, колики, сон
                      </span>
                      <span>Восстановление после родов</span>
                      <span>Развитие и общее состояние</span>
                    </div>
                    <a href="#booking" className="btn-primary">
                      Записаться в предзапись →
                    </a>
                  </div>
                  <div className="bg-creamDark rounded-[20px] p-7 lg:col-span-2">
                    <h4 className="mb-4 text-[20px]">Что входит</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">1</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Анкета на маму и на ребёнка
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">2</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Анализ рациона и образа жизни обоих
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">3</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Видеоконсультация (90 минут)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">4</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Персональные рекомендации для мамы и малыша
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">5</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Сопровождение после консультации
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Беременность  */}
              <div id="tab-pregnancy" className="tab-panel">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
                  <div className="bento-item p-8 md:p-10 lg:col-span-3">
                    <span className="badge-sm badge-olive mb-5">Комплексное сопровождение</span>
                    <p className="text-textPrimary mb-6 text-[17px] font-medium">
                      Для женщин, которые хотят поддержать себя и ребёнка на разных этапах
                      беременности.
                    </p>
                    <div className="text-textSecondary mb-8 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] font-light sm:grid-cols-2">
                      <span>→ Питание на разных триместрах</span>
                      <span>→ Поддержка при токсикозе и отёках</span>
                      <span>→ Подбор витаминов с учётом срока</span>
                      <span>→ Подготовка к родам</span>
                    </div>
                    <a href="#booking" className="btn-primary">
                      Записаться в предзапись →
                    </a>
                  </div>
                  <div className="bg-creamDark rounded-[20px] p-7 lg:col-span-2">
                    <h4 className="mb-4 text-[20px]">Что входит</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">1</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Подробная анкета и анализ рациона
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">2</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Видеоконсультация (90 минут)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">3</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Персональные рекомендации на текущий этап
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">4</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Расширенное сопровождение
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-olive/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="text-olive text-sm font-semibold">5</span>
                        </div>
                        <p className="text-textSecondary text-[14px] font-light">
                          Бонус: созвон по послеродовому восстановлению
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Как проходит работа — Иконки + стрелки (Tilda: CO14/ST02)  */}
            <div className="reveal mt-[80px]">
              <h3 className="mb-10 text-center text-[28px] md:text-[36px]">Как проходит работа</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border-borderLight/50 rounded-[16px] border bg-white p-6 text-center">
                  <div className="bg-creamDark mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <svg
                      className="text-terracotta h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-olive mb-1 font-serif text-[17px]">Предзапись</h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    3–4 клиента в месяц. Оставьте заявку — я свяжусь.
                  </p>
                </div>
                <div className="border-borderLight/50 rounded-[16px] border bg-white p-6 text-center">
                  <div className="bg-creamDark mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <svg
                      className="text-olive h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-olive mb-1 font-serif text-[17px]">Анкета</h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    Заполняете подробную анкету в удобном темпе.
                  </p>
                </div>
                <div className="border-borderLight/50 rounded-[16px] border bg-white p-6 text-center">
                  <div className="bg-creamDark mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <svg
                      className="text-terracotta h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-olive mb-1 font-serif text-[17px]">Консультация</h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    Видеосозвон 60–90 минут с глубоким разбором.
                  </p>
                </div>
                <div className="border-borderLight/50 rounded-[16px] border bg-white p-6 text-center">
                  <div className="bg-creamDark mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <svg
                      className="text-olive h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-olive mb-1 font-serif text-[17px]">Сопровождение</h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    Остаюсь на связи: поддержка, корректировка.
                  </p>
                </div>
              </div>
            </div>

            {/*  Акцентный блок  */}
            <div className="bg-olive reveal mt-[60px] rounded-[24px] p-8 text-center md:p-12">
              <h3 className="text-cream mb-4 text-[24px] md:text-[36px]">
                Почему всего 3–4 клиента в месяц?
              </h3>
              <p className="text-cream/85 mx-auto max-w-2xl text-[16px] font-light leading-[1.7]">
                Это не конвейер. Перед встречей я подробно изучаю вашу анкету. Во время консультации
                мы глубоко разбираем ситуацию. После — готовлю развёрнутые рекомендации и остаюсь на
                связи. Каждый клиент получает максимальную глубину и внимание.
              </p>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  5. ПРОДУКТЫ — Визуальная иерархия                          */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section id="products" className="bg-creamDark w-full py-[80px] md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="reveal mb-[56px] text-center">
              <h2 className="mb-4 text-[32px] leading-[1.12] md:text-[48px]">
                Программы и материалы
              </h2>
              <p className="text-textSecondary text-[17px] font-light">
                Для тех, кто хочет начать прямо сейчас, в&nbsp;своём темпе.
              </p>
            </div>

            {/*  ХИТЫ — Два больших блока  */}
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/*  Прикорм  */}
              <div className="bento-item reveal reveal-delay-1">
                <div className="h-[240px] overflow-hidden">
                  <img
                    src="/alisa/images/course_prikorm.png"
                    alt="Прикорм вместе"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="badge-sm badge-olive">Флагманский курс</span>
                    <span className="badge-sm bg-cream text-textPrimary border-borderLight/50 border">
                      4 900 ₽
                    </span>
                  </div>
                  <h3 className="mb-3 text-[26px]">Прикорм вместе</h3>
                  <p className="text-textSecondary mb-5 text-[15px] font-light leading-[1.6]">
                    Пошаговая система от первого кусочка до общего стола (6 мес — 3 года).
                    Бессрочный доступ, живые Q&A эфиры.
                  </p>
                  <a
                    href="https://alisaklim.tilda.ws/prikorm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Подробнее о курсе →
                  </a>
                </div>
              </div>
              {/*  Меню  */}
              <div className="bento-item reveal reveal-delay-2">
                <div className="h-[240px] overflow-hidden">
                  <img
                    src="/alisa/images/course_menu.png"
                    alt="Меню для семьи"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="badge-sm badge-terracotta">Готовые рационы</span>
                    <span className="badge-sm bg-cream text-textPrimary border-borderLight/50 border">
                      2 190 ₽/мес
                    </span>
                  </div>
                  <h3 className="mb-3 text-[26px]">Меню для ребёнка и семьи</h3>
                  <p className="text-textSecondary mb-5 text-[15px] font-light leading-[1.6]">
                    4 недели завтраков, обедов, перекусов и ужинов. Обновляется по сезону. Доступ
                    через Telegram.
                  </p>
                  <a
                    href="https://alisaklim.tilda.ws/menu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Подробнее о проекте →
                  </a>
                </div>
              </div>
            </div>

            {/*  Мини-продукты — компактная горизонтальная полоска  */}
            <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="https://alisaklim.tilda.ws/sadik"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-item group flex flex-col justify-between p-5"
              >
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="text-olive font-serif text-[18px] leading-tight">
                      Эфир «Садик»
                    </h4>
                    <span className="text-terracotta whitespace-nowrap text-[13px] font-medium">
                      590 ₽
                    </span>
                  </div>
                  <p className="text-textSecondary mb-4 text-[13px] font-light">
                    Адаптация к садику: питание, иммунитет, добавки по возрастам.
                  </p>
                </div>
                <span className="text-olive group-hover:text-terracotta text-[13px] font-medium transition-colors">
                  Купить →
                </span>
              </a>
              <a href="#" className="bento-item group flex flex-col justify-between p-5">
                <div>
                  <h4 className="text-olive mb-2 font-serif text-[18px] leading-tight">
                    Книга рецептов
                  </h4>
                  <p className="text-textSecondary mb-4 text-[13px] font-light">
                    53 проверенных блюда из моей реальной кухни. Для детей и взрослых.
                  </p>
                </div>
                <span className="text-olive group-hover:text-terracotta text-[13px] font-medium transition-colors">
                  Подробнее →
                </span>
              </a>
              <a
                href="https://alisaklim.tilda.ws/omega3"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-item group flex flex-col justify-between p-5"
              >
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="text-olive font-serif text-[18px] leading-tight">
                      Гайд Омега-3
                    </h4>
                    <span className="text-terracotta whitespace-nowrap text-[13px] font-medium">
                      590 ₽
                    </span>
                  </div>
                  <p className="text-textSecondary mb-4 text-[13px] font-light">
                    Формы, дозировки, бренды — для взрослых и детей.
                  </p>
                </div>
                <span className="text-olive group-hover:text-terracotta text-[13px] font-medium transition-colors">
                  Купить →
                </span>
              </a>
              <a
                href="https://alisaklim.tilda.ws/protein"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-item group flex flex-col justify-between p-5"
              >
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="text-olive font-serif text-[18px] leading-tight">
                      Гайд Протеин
                    </h4>
                    <span className="text-terracotta whitespace-nowrap text-[13px] font-medium">
                      590 ₽
                    </span>
                  </div>
                  <p className="text-textSecondary mb-4 text-[13px] font-light">
                    Виды протеинов, коллаген, рецепты и проверенные бренды.
                  </p>
                </div>
                <span className="text-olive group-hover:text-terracotta text-[13px] font-medium transition-colors">
                  Купить →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  6. ОТЗЫВЫ — Социальное доказательство                      */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section className="w-full py-[80px] md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <h2 className="reveal mb-[48px] text-center text-[32px] leading-[1.15] md:text-[44px]">
              Что говорят клиенты
            </h2>
            <div className="reveal grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="testimonial-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-olive/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-olive font-semibold">А</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium">Анна</p>
                    <p className="text-textMuted text-[12px]">Консультация для взрослых</p>
                  </div>
                </div>
                <p className="text-textSecondary text-[14px] font-light italic leading-[1.7]">
                  «Впервые после консультации у меня не было ощущения, что мне дали невыполнимый
                  список. Всё было про мою реальную жизнь, мой ритм, мои ограничения. Через 2 месяца
                  — энергия вернулась.»
                </p>
              </div>
              <div className="testimonial-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-terracotta/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-terracotta font-semibold">М</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium">Мария</p>
                    <p className="text-textMuted text-[12px]">Курс «Прикорм вместе»</p>
                  </div>
                </div>
                <p className="text-textSecondary text-[14px] font-light italic leading-[1.7]">
                  «Мы начали прикорм с этим курсом и ни разу не пожалели. Дочка в 1.5 года ест
                  практически всё. Самое ценное — я перестала тревожиться за каждый приём пищи.»
                </p>
              </div>
              <div className="testimonial-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-olive/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-olive font-semibold">Е</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium">Екатерина</p>
                    <p className="text-textMuted text-[12px]">Проект «Меню»</p>
                  </div>
                </div>
                <p className="text-textSecondary text-[14px] font-light italic leading-[1.7]">
                  «Готовое меню на каждый день — это то, что спасло мои вечера. Больше не ломаю
                  голову "что приготовить". Ребёнок ест с удовольствием, а я готовлю одно на всех.»
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  7. БЛОГ                                                     */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section id="articles" className="bg-creamDark w-full py-[80px] md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="reveal mb-[48px] flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-[32px] leading-[1.15] md:text-[44px]">База знаний</h2>
                <p className="text-textSecondary max-w-lg text-[16px] font-light">
                  Разбираю сложные темы простым языком. Только то, что можно применить.
                </p>
              </div>
              <a
                href="https://instagram.com/alisa__klim"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary shrink-0"
              >
                Все статьи в Instagram →
              </a>
            </div>

            <div className="reveal mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="bento-item card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/alisa/images/article_prikorm.png"
                    alt="Прикорм"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-terracotta mb-2 block text-[11px] font-semibold uppercase tracking-wider">
                    Прикорм
                  </span>
                  <h4 className="text-olive mb-2 font-serif text-[19px]">
                    С чего начинать прикорм: пошаговый гид
                  </h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    Основные принципы безопасного введения прикорма.
                  </p>
                </div>
              </div>
              <div className="bento-item card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/alisa/images/article_energy.jpg"
                    alt="Энергия"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-olive mb-2 block text-[11px] font-semibold uppercase tracking-wider">
                    Взрослые
                  </span>
                  <h4 className="text-olive mb-2 font-serif text-[19px]">
                    Почему по анализам всё в норме, а сил нет?
                  </h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    Неочевидные причины хронической усталости.
                  </p>
                </div>
              </div>
              <div className="bento-item card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/alisa/images/article_omega.png"
                    alt="Омега-3"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-terracotta mb-2 block text-[11px] font-semibold uppercase tracking-wider">
                    Добавки
                  </span>
                  <h4 className="text-olive mb-2 font-serif text-[19px]">
                    Омега-3 для детей: нужен ли?
                  </h4>
                  <p className="text-textSecondary text-[13px] font-light">
                    Разбираем мифы о постоянном приёме.
                  </p>
                </div>
              </div>
            </div>

            {/*  Соцсети — компактная полоска  */}
            <div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row">
              <span className="text-textSecondary text-[14px] font-light">
                Больше в моих блогах:
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://instagram.com/alisa__klim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-borderLight text-olive hover:border-terracotta hover:text-terracotta rounded-full border bg-white px-5 py-2.5 text-[13px] font-medium transition-colors"
                >
                  Instagram* (Основной)
                </a>
                <a
                  href="https://t.me/klim_alisa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-borderLight text-olive hover:border-terracotta hover:text-terracotta rounded-full border bg-white px-5 py-2.5 text-[13px] font-medium transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-borderLight text-olive hover:border-terracotta hover:text-terracotta rounded-full border bg-white px-5 py-2.5 text-[13px] font-medium transition-colors"
                >
                  ВКонтакте
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*  ═══════════════════════════════════════════════════════════  */}
        {/*  8. ФОРМА ПРЕДЗАПИСИ                                        */}
        {/*  ═══════════════════════════════════════════════════════════  */}
        <section id="booking" className="w-full py-[80px] md:py-[100px]">
          <div
            id="bookingFormContainer"
            className="reveal mx-auto max-w-[720px] px-5 transition-all duration-500 md:px-8"
          >
            <div className="border-borderLight/50 rounded-[24px] border bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-12">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-[28px] leading-[1.2] md:text-[40px]">
                  Хотите разобраться системно?
                </h2>
                <p className="text-textSecondary text-[15px] font-light">
                  Оставьте заявку — я свяжусь, когда появится место.
                </p>
              </div>

              <form id="bookingForm" className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-textPrimary mb-1.5 block text-[13px] font-medium">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      className="border-borderLight focus:border-olive bg-cream/50 w-full rounded-[10px] border px-4 py-3 transition-colors focus:outline-none"
                      placeholder="Имя"
                    />
                  </div>
                  <div>
                    <label className="text-textPrimary mb-1.5 block text-[13px] font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="border-borderLight focus:border-olive bg-cream/50 w-full rounded-[10px] border px-4 py-3 transition-colors focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-textPrimary mb-1.5 block text-[13px] font-medium">
                      Способ связи
                    </label>
                    <select className="border-borderLight focus:border-olive bg-cream/50 w-full rounded-[10px] border px-4 py-3 transition-colors focus:outline-none">
                      <option>Telegram</option>
                      <option>WhatsApp</option>
                      <option>E-mail</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-textPrimary mb-1.5 block text-[13px] font-medium">
                      Контакт
                    </label>
                    <input
                      type="text"
                      className="border-borderLight focus:border-olive bg-cream/50 w-full rounded-[10px] border px-4 py-3 transition-colors focus:outline-none"
                      placeholder="@username или номер"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-textPrimary mb-1.5 block text-[13px] font-medium">
                    Формат
                  </label>
                  <select className="border-borderLight focus:border-olive bg-cream/50 w-full rounded-[10px] border px-4 py-3 transition-colors focus:outline-none">
                    <option>Консультация для взрослых</option>
                    <option>Консультация для детей</option>
                    <option>Мама + Малыш</option>
                    <option>Сопровождение беременности</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-primary mt-2 w-full cursor-pointer text-center"
                >
                  Оставить заявку
                </button>
                <p className="text-textMuted text-center text-[11px]">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/*  FOOTER  */}
      <footer className="bg-footerBg text-cream border-oliveLight/30 border-t py-12">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <a
                href="#"
                className="text-cream mb-4 inline-block font-serif text-2xl font-medium tracking-[0.08em]"
              >
                АЛИСА КЛИМОВА
              </a>
              <p className="text-cream/70 mt-2 max-w-sm text-[14px] font-light">
                Специалист по питанию и комплексному подходу к здоровью.
              </p>
            </div>
            <div>
              <h5 className="text-cream mb-4 font-serif text-lg">Навигация</h5>
              <ul className="text-cream/70 space-y-3 text-[14px] font-light">
                <li>
                  <a href="#about" className="hover:text-terracotta transition-colors">
                    Обо мне
                  </a>
                </li>
                <li>
                  <a href="#consultations" className="hover:text-terracotta transition-colors">
                    Консультации
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-terracotta transition-colors">
                    Продукты
                  </a>
                </li>
                <li>
                  <a href="#articles" className="hover:text-terracotta transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-cream mb-4 font-serif text-lg">Соцсети</h5>
              <ul className="text-cream/70 space-y-3 text-[14px] font-light">
                <li>
                  <a
                    href="https://instagram.com/alisa__klim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors"
                  >
                    Instagram*
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/klim_alisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors"
                  >
                    ВКонтакте
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-cream/10 border-t pt-8">
            <div className="bg-cream/5 border-terracotta mb-6 rounded-lg border-l-4 p-4 md:p-5">
              <p className="text-cream/70 text-[12px] font-light leading-relaxed">
                <strong>Дисклеймер:</strong> Консультации, рекомендации и материалы не являются
                медицинской помощью, диагностикой или лечением заболеваний и не заменяют
                консультацию врача.
              </p>
            </div>
            <div className="text-cream/50 flex flex-col items-center justify-between gap-4 text-[12px] md:flex-row">
              <p>© 2026 Алиса Климова. Все права защищены.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-cream transition-colors">
                  Договор оферты
                </a>
                <a href="#" className="hover:text-cream transition-colors">
                  Политика конфиденциальности
                </a>
              </div>
            </div>
            <p className="text-cream/30 mt-4 text-center text-[11px] md:text-left">
              *Instagram принадлежит компании Meta, признанной экстремистской организацией и
              запрещенной в РФ.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
