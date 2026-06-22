import { staticPagesDictUk, staticPagesDictRu } from './dictionaries.static';

export type Dictionary = {
  header: {
    portfolio: string;
    services: string;
    contact: string;
    getStarted: string;
    lang: string;
    home: string;
    about: string;
  };
  footer: {
    brandName: string;
    description: string;
    rights: string;
    consultation: string;
    quickLinksTitle: string;
    contactsTitle: string;
    links: {
      landing: string;
      businessCard: string;
      corporate: string;
      ecommerce: string;
      tgBots: string;
      portfolio: string;
      about: string;
      solutions: string;
      locations: string;
    }
  };
  faq: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    placeholder: string;
    success: string;
    buttonText: string;
    loading: string;
    anonLabel: string;
    errorMsg: string;
    items: {
      id: string;
      question: string;
      answer: string;
    }[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  about: {
    badge: string;
    title: string;
    role: string;
    p1: string;
    p2: string;
    p3: string;
  };
  bento: {
    title: string;
    c1_badge: string;
    c1_title: string;
    c1_text: string;
    c2_title: string;
    c2_badge: string;
    c2_text: string;
    c3_title: string;
    c3_badge: string;
    c3_text: string;
    c4_title: string;
  };
  servicesSlider: {
    defaultTitle: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      gradient: string;
      href: string;
    }>;
  };
  finalCta: {
    title: string;
    description: string;
    btn: string;
  };
  common: {
    orderSite: string;
    moreInfo: string;
    portfolio: string;
  };
  productMenu: {
    popularTypes: string;
    industrySolutions: string;
    notFound: string;
    leaveRequest: string;
    allSolutions: string;
  };
  quiz: {
    step: string;
    outOf: string;
    contactDesc: string;
    customOption: string;
    customPlaceholder: string;
    textPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    btnNext: string;
    btnSubmit: string;
    successTitle: string;
    successSubtitle: string;
    successDesc: string;
    errorMsg: string;
    fromPrefix: string;
    steps: {
      niche: { question: string; options: string[] };
      needs: { question: string; options: string[] };
      budget: { question: string; options: string[] };
      contact: { question: string };
    };
  };
} & typeof staticPagesDictUk;

const uk: Dictionary = {
  header: {
    portfolio: 'Портфоліо',
    services: 'Послуги',
    contact: 'Контакти',
    getStarted: 'Обговорити проект',
    lang: 'RU',
    home: 'Головна',
    about: 'Про мене',
  },
  footer: {
    brandName: 'Dmitriy M.',
    description: 'Сайти та Telegram-боти, які приносять прибуток 24/7.',
    rights: 'Всі права захищені.',
    consultation: 'Отримати<br />консультацію',
    quickLinksTitle: 'Швидкі посилання',
    contactsTitle: 'Контакти',
    links: {
      landing: 'Лендінг',
      businessCard: 'Сайт-візитка',
      corporate: 'Корпоративний',
      ecommerce: 'Магазин',
      tgBots: 'TG-боти',
      portfolio: 'Портфоліо',
      about: 'Про мене',
      solutions: 'Галузеві рішення',
      locations: 'Географія',
    }
  },
  faq: {
    title: 'Часті<br/>питання',
    subtitle: 'Наші експерти підберуть найефективніше рішення для вашого бізнесу',
    phoneLabel: 'Номер телефону *',
    placeholder: 'XX XXX XX XX',
    success: 'Заявку успішно відправлено!',
    buttonText: 'Замовити консультацію',
    loading: 'Відправка...',
    anonLabel: 'Анонім (FAQ Форма)',
    errorMsg: 'Сталася помилка під час відправлення',
    items: [
      {
        id: '01',
        question: 'Що потрібно розуміти, замовляючи розробку проєкту?',
        answer: 'Створення сайту або Telegram-бота — це інвестиція в автоматизацію вашого бізнесу. Працюючи з нами, ви отримуєте преміальну якість архітектури та дизайну, яка виділяє вас серед конкурентів. Ми беремо на себе повне занурення у ваші процеси, тому вам не доведеться витрачати час на мікроменеджмент. Для старту достатньо залишити заявку, і ми обговоримо деталі на безкоштовній консультації.'
      },
      {
        id: '02',
        question: 'Що означає розробка «під ключ»?',
        answer: 'Це повний цикл створення цифрового продукту. Ми починаємо з бізнес-аналітики та проектування UX-прототипу, щоб ви відразу розуміли, як працюватиме система. Потім наша команда розробляє унікальний дизайн, пише чистий код, інтегрує необхідні сервіси (CRM, платіжні системи) та проводить глибоке тестування. На виході ви отримуєте повністю готовий до запуску інструмент.'
      },
      {
        id: '03',
        question: 'Скільки часу займає процес розробки?',
        answer: 'Терміни безпосередньо залежать від масштабів проєкту. Розробка стильного лендінгу або простого бота займає від 2 до 4 тижнів. Повноцінний інтернет-магазин або корпоративний портал потребує від 1,5 до 3 місяців кропіткої роботи. Точні терміни ми завжди фіксуємо в договорі після складання технічного завдання.'
      },
      {
        id: '04',
        question: 'Як формується вартість проєкту?',
        answer: 'Ціна складається з трьох ключових факторів: тип продукту (односторінковий сайт обійдеться значно дешевше складного e-commerce рішення), рівень ексклюзивності дизайну та обсяг функціоналу (інтеграція складних API, особисті кабінети, нестандартні анімації). Ми завжди пропонуємо оптимальні рішення під ваш бюджет без втрати якості.'
      }
    ]
  },
  hero: {
    badge: 'Студія веб-розробки',
    title: 'DIGITAL РІШЕННЯ ДЛЯ БІЗНЕСУ',
    subtitle: 'Проєктую, розробляю та запускаю високонверсійні веб-системи та Telegram-боти, які працюють на ріст вашого прибутку 24/7.',
    primaryBtn: 'Обговорити проєкт',
    secondaryBtn: 'Готові рішення',
  },
  about: {
    badge: 'Про мене',
    title: 'Привіт, <br/>я Дмитро <span className="text-coral">👋</span>',
    role: 'Розробник / Дизайнер',
    p1: 'Я приватний веб-дизайнер та розробник. Моя головна спеціалізація — створення сучасних, швидких сайтів та розумних Telegram-ботів.',
    p2: 'Я не прихильник переускладнення. Малому та середньому бізнесу не потрібні важкі корпоративні портали, які робляться півроку. Бізнесу потрібен робочий інструмент, який завантажується за секунду, зрозуміло розповідає про послугу та стабільно приносить заявки.',
    p3: 'Саме такі продукти я і створюю, використовуючи передовий стек технологій.',
  },
  bento: {
    title: 'ЧОМУ ВАРТО ОБРАТИ MALYSHEV.DEV?',
    c1_badge: '100% фокус на проєкті',
    c1_title: 'Ви спілкуєтесь безпосередньо з розробником, а не через ланцюжок менеджерів.',
    c1_text: 'Це економить час та виключає ефект «зіпсованого телефону».',
    c2_title: '5 років',
    c2_badge: 'у веб-дизайні та розробці',
    c2_text: 'Знаю, як зробити не просто гарно, а й технічно грамотно для SEO та швидкого завантаження.',
    c3_title: '0 $',
    c3_badge: 'на місяць за хостинг',
    c3_text: 'Використовую сучасні технології Cloudflare. Ваші лендінги та боти працюють стабільно без оренди серверів.',
    c4_title: 'Дізнатися більше про продукти',
  },
  servicesSlider: {
    defaultTitle: 'РОЗРОБКА САЙТУ ДЛЯ БІЗНЕСУ',
    subtitle: 'Сьогодні бізнесу важливо бути там, де його клієнти – у digital-середовищі. Розробка сайту допомагає вибудовувати комунікацію, підвищувати довіру до бренду, підтримувати продажі та спрощувати взаємодію.',
    items: [
      {
        id: '01/',
        title: 'Telegram Боти',
        description: 'Розумні агенти для автоматизації бізнесу 24/7. Кваліфікація лідів, прийом оплат та підтримка клієнтів прямо в месенджері.',
        gradient: 'from-blue-500 to-cyan-400',
        href: '/services/telegram-bots',
      },
      {
        id: '02/',
        title: 'Лендінги',
        description: 'Односторінкові сайти з високою конверсією для швидкого запуску продукту, збору лідів та тестування гіпотез.',
        gradient: 'from-coral to-orange-400',
        href: '/services/landings',
      },
      {
        id: '03/',
        title: 'Сайти-візитки',
        description: 'Компактне, стильне та інформативне представництво вашого бізнесу в інтернеті для формування сильного іміджу.',
        gradient: 'from-emerald-400 to-teal-400',
        href: '/services/business-cards',
      },
      {
        id: '04/',
        title: 'Корпоративні сайти',
        description: 'Багатосторінкові рішення для бізнесу. Інструмент для презентації компанії, підвищення лояльності та залучення великих клієнтів.',
        gradient: 'from-indigo-500 to-purple-500',
        href: '/services/corporate',
      },
      {
        id: '05/',
        title: 'Інтернет магазин',
        description: 'Створюю потужні магазини для eCommerce, які допомагають не лише продавати, але й завойовувати серця клієнтів. Зручний каталог та онлайн-оплата.',
        gradient: 'from-rose-400 to-red-500',
        href: '/services/ecommerce',
      }
    ],
  },
  finalCta: {
    title: 'Давайте поговоримо <br className="hidden md:block" /> про ваш проєкт',
    description: 'Залиште заявку на безкоштовну консультацію. Це чудова можливість обговорити вашу ідею, підібрати оптимальний формат та розрахувати вартість. Я зв\'яжуся з вами найближчим часом!',
    btn: 'Обговорити проєкт',
  },
  common: {
    orderSite: 'Замовити сайт',
    moreInfo: 'Детальніше',
    portfolio: 'Портфоліо',
  },
  productMenu: {
    popularTypes: 'Популярні типи сайтів',
    industrySolutions: 'Галузеві рішення для бізнесу',
    notFound: 'Не знайшли потрібний варіант?',
    leaveRequest: 'Залишити заявку',
    allSolutions: 'Всі рішення',
  },
  quiz: {
    step: 'Крок',
    outOf: 'з',
    contactDesc: 'Залиште контакт, щоб побачити попередню оцінку вартості.',
    customOption: 'Свій варіант',
    customPlaceholder: 'Напишіть ваш варіант...',
    textPlaceholder: 'Напишіть тут...',
    nameLabel: 'Ваше ім\'я *',
    namePlaceholder: 'Олександр',
    contactLabel: 'Email або Telegram *',
    contactPlaceholder: '@username або пошта',
    btnNext: 'Далі',
    btnSubmit: 'Отримати розрахунок',
    successTitle: 'Оцінка готова!',
    successSubtitle: 'Попередня вартість вашого проєкту:',
    successDesc: 'Я вже отримав вашу заявку і скоро зв\'яжусь з вами за вказаними контактами, щоб уточнити деталі та надати точний кошторис.',
    errorMsg: 'Сталася помилка під час відправлення',
    fromPrefix: 'від $',
    steps: {
      niche: {
        question: 'В якій ніші працює ваш бізнес?',
        options: ['Послуги (салони, ремонт тощо)', 'E-commerce / Товари', 'Інфобізнес / Навчання', 'B2B / Складні продажі', 'Інше']
      },
      needs: {
        question: 'Що саме вам потрібно розробити?',
        options: ['Лендінг', 'Корпоративний сайт', 'Інтернет-магазин', 'Telegram-бот', 'Сайт + Бот']
      },
      budget: {
        question: 'На який бюджет ви розраховуєте?',
        options: ['Мінімальний (до $200)', 'Середній (до $500)', 'Свій варіант']
      },
      contact: {
        question: 'Куди надіслати розрахунок вартості?'
      }
    }
  },
  ...staticPagesDictUk,
};

const ru: Dictionary = {
  header: {
    portfolio: 'Портфолио',
    services: 'Услуги',
    contact: 'Контакты',
    getStarted: 'Обсудить проект',
    lang: 'UA',
    home: 'Главная',
    about: 'Обо мне',
  },
  footer: {
    brandName: 'Dmitriy M.',
    description: 'Сайты и Telegram-боты, которые приносят прибыль 24/7.',
    rights: 'Все права защищены.',
    consultation: 'Получить<br />консультацию',
    quickLinksTitle: 'Быстрые ссылки',
    contactsTitle: 'Контакты',
    links: {
      landing: 'Лендинг',
      businessCard: 'Сайт-визитка',
      corporate: 'Корпоративный',
      ecommerce: 'Магазин',
      tgBots: 'TG-боты',
      portfolio: 'Портфолио',
      about: 'Обо мне',
      solutions: 'Отраслевые решения',
      locations: 'География',
    }
  },
  faq: {
    title: 'Частые<br/>вопросы',
    subtitle: 'Наши эксперты подберут самое эффективное решение для вашего бизнеса',
    phoneLabel: 'Номер телефона *',
    placeholder: 'XX XXX XX XX',
    success: 'Заявка успешно отправлена!',
    buttonText: 'Заказать консультацию',
    loading: 'Отправка...',
    anonLabel: 'Аноним (FAQ Форма)',
    errorMsg: 'Произошла ошибка при отправке',
    items: [
      {
        id: '01',
        question: 'Что нужно понимать, заказывая разработку проекта?',
        answer: 'Создание сайта или Telegram-бота — это инвестиция в автоматизацию вашего бизнеса. Работая с нами, вы получаете премиальное качество архитектуры и дизайна, которое выделяет вас среди конкурентів. Мы берем на себя полное погружение в ваши процессы, поэтому вам не придется тратить время на микроменеджмент. Для старта достаточно оставить заявку, и мы обсудим детали на бесплатной консультации.'
      },
      {
        id: '02',
        question: 'Что означает разработка «под ключ»?',
        answer: 'Это полный цикл создания цифрового продукта. Мы начинаем с бизнес-аналитики и проектирования UX-прототипа, чтобы вы сразу понимали, как будет работать система. Затем наша команда разрабатывает уникальный дизайн, пишет чистый код, интегрирует необходимые сервисы (CRM, платежные системы) и проводит глубокое тестирование. На выходе вы получаете полностью готовый к запуску инструмент.'
      },
      {
        id: '03',
        question: 'Сколько времени занимает процесс разработки?',
        answer: 'Сроки напрямую зависят от масштабов проекта. Разработка стильного лендинга или простого бота занимает от 2 до 4 недель. Полноценный интернет-магазин или корпоративный портал потребует от 1,5 до 3 месяцев кропотливой работы. Точные сроки мы всегда фиксируем в договоре после составления технического задания.'
      },
      {
        id: '04',
        question: 'Как формируется стоимость проекта?',
        answer: 'Цена складывается из трех ключевых факторов: тип продукта (одностраничный сайт обойдется значительно дешевле сложного e-commerce решения), уровень эксклюзивности дизайна и объем функционала (интеграция сложных API, личные кабинеты, нестандартные анимации). Мы всегда предлагаем оптимальные решения под ваш бюджет без потери в качестве.'
      }
    ]
  },
  hero: {
    badge: 'Студия веб-разработки',
    title: 'DIGITAL РЕШЕНИЯ ДЛЯ БИЗНЕСА',
    subtitle: 'Проектирую, разрабатываю и запускаю высококонверсионные веб-системы и Telegram-боты, которые работают на рост вашей прибыли 24/7.',
    primaryBtn: 'Обсудить проект',
    secondaryBtn: 'Готовые решения',
  },
  about: {
    badge: 'Обо мне',
    title: 'Привет, <br/>я Дмитрий <span className="text-coral">👋</span>',
    role: 'Разработчик / Дизайнер',
    p1: 'Я частный веб-дизайнер и разработчик. Моя главная специализация — создание современных, легких сайтов и умных Telegram-ботов.',
    p2: 'Я не сторонник переусложнения. Малому и среднему бизнесу не нужны тяжелые корпоративные порталы, которые делаются полгода. Бизнесу нужен рабочий инструмент, который загружается за секунду, понятно рассказывает об услуге и стабильно приносит заявки.',
    p3: 'Именно такие продукты я и собираю, используя передовой стек технологий.',
  },
  bento: {
    title: 'ПОЧЕМУ ВЫБРАТЬ MALYSHEV.DEV?',
    c1_badge: '100% фокус на проекте',
    c1_title: 'Вы общаетесь напрямую с разработчиком, а не через цепочку менеджеров.',
    c1_text: 'Это экономит время и исключает эффект «испорченного телефона».',
    c2_title: '5 лет',
    c2_badge: 'в веб-дизайне и разработке',
    c2_text: 'Знаю, как сделать не просто красиво, но и технически грамотно для SEO и быстрой загрузки.',
    c3_title: '0 $',
    c3_badge: 'в месяц за хостинг',
    c3_text: 'Использую современные технологии Cloudflare. Ваши лендинги и боты работают стабильно без аренды серверов.',
    c4_title: 'Узнать больше о продуктах',
  },
  servicesSlider: {
    defaultTitle: 'РАЗРАБОТКА САЙТА ДЛЯ БИЗНЕСА',
    subtitle: 'Сегодня бизнесу важно быть там, где его клиенты – в digital-среде. Разработка сайта помогает выстраивать коммуникацию, повышать доверие к бренду, поддерживать продажи и упрощать взаимодействие.',
    items: [
      {
        id: '01/',
        title: 'Telegram Боты',
        description: 'Умные агенты для автоматизации бизнеса 24/7. Квалификация лидов, прием оплат и поддержка клиентов прямо в мессенджере.',
        gradient: 'from-blue-500 to-cyan-400',
        href: '/services/telegram-bots',
      },
      {
        id: '02/',
        title: 'Лендинги',
        description: 'Одностраничные сайты с высокой конверсией для быстрого запуска продукта, сбора лидов и тестирования гипотез.',
        gradient: 'from-coral to-orange-400',
        href: '/services/landings',
      },
      {
        id: '03/',
        title: 'Сайты-визитки',
        description: 'Компактное, стильное и информативное представительство вашего бизнеса в интернете для формирования сильного имиджа.',
        gradient: 'from-emerald-400 to-teal-400',
        href: '/services/business-cards',
      },
      {
        id: '04/',
        title: 'Корпоративные сайты',
        description: 'Многостраничные решения для бизнеса. Инструмент для презентации компании, повышения лояльности и привлечения крупных клиентов.',
        gradient: 'from-indigo-500 to-purple-500',
        href: '/services/corporate',
      },
      {
        id: '05/',
        title: 'Интернет магазин',
        description: 'Создаю мощные магазины для eCommerce, которые помогают не только продавать, но и завоевывать сердца клиентов. Удобный каталог и онлайн-оплата.',
        gradient: 'from-rose-400 to-red-500',
        href: '/services/ecommerce',
      }
    ],
  },
  finalCta: {
    title: 'Давайте поговорим <br className="hidden md:block" /> о вашем проекте',
    description: 'Оставьте заявку на бесплатную консультацию. Это отличная возможность обсудить вашу идею, подобрать оптимальный формат и рассчитать стоимость. Я свяжусь с вами в ближайшее время!',
    btn: 'Обсудить проект',
  },
  common: {
    orderSite: 'Заказать сайт',
    moreInfo: 'Подробнее',
    portfolio: 'Портфолио',
  },
  productMenu: {
    popularTypes: 'Популярные типы сайтов',
    industrySolutions: 'Отраслевые решения для бизнеса',
    notFound: 'Не нашли нужный вариант?',
    leaveRequest: 'Оставьте заявку',
    allSolutions: 'Все решения',
  },
  quiz: {
    step: 'Шаг',
    outOf: 'из',
    contactDesc: 'Оставьте контакт, чтобы увидеть предварительную оценку стоимости.',
    customOption: 'Свой вариант',
    customPlaceholder: 'Напишите ваш вариант...',
    textPlaceholder: 'Напишите здесь...',
    nameLabel: 'Ваше имя *',
    namePlaceholder: 'Александр',
    contactLabel: 'Email или Telegram *',
    contactPlaceholder: '@username или почта',
    btnNext: 'Далее',
    btnSubmit: 'Получить расчет',
    successTitle: 'Оценка готова!',
    successSubtitle: 'Предварительная стоимость вашего проекта:',
    successDesc: 'Я уже получил вашу заявку и скоро свяжусь с вами по указанным контактам, чтобы уточнить детали и дать точную смету.',
    errorMsg: 'Произошла ошибка при отправке',
    fromPrefix: 'от $',
    steps: {
      niche: {
        question: 'В какой нише работает ваш бизнес?',
        options: ['Услуги (салоны, ремонт и т.д.)', 'E-commerce / Товары', 'Инфобизнес / Обучение', 'B2B / Сложные продажи', 'Другое']
      },
      needs: {
        question: 'Что именно вам нужно разработать?',
        options: ['Лендинг', 'Корпоративный сайт', 'Интернет-магазин', 'Telegram-бот', 'Сайт + Бот']
      },
      budget: {
        question: 'На какой бюджет вы рассчитываете?',
        options: ['Минимальный (до $200)', 'Средний (до $500)', 'Свой вариант']
      },
      contact: {
        question: 'Куда отправить расчет стоимости?'
      }
    }
  },
  ...staticPagesDictRu,
};

export function getDictionary(lang: string): Dictionary {
  return lang === 'ru' ? ru : uk;
}
