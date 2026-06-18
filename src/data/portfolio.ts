export type ProjectCategory = 'САЙТЫ' | 'E-COMMERCE' | 'TELEGRAM-БОТЫ' | 'WEB-ПРИЛОЖЕНИЯ';

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  tag: string; // e.g. "REAL ESTATE", "MEDIA"
  shortDescription: string;
  isTop: boolean;
  coverImage: string;
  
  // Detail page info
  clientName?: string;
  timeline?: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  stack: string[];
  liveLink?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: '1',
    slug: 'anabel-arto-ecommerce',
    title: 'Anabel Arto: лучший производитель женского белья в Украине',
    category: 'E-COMMERCE',
    tag: 'E-COMMERCE',
    shortDescription: 'Новый уровень eCommerce для лучшего производителя женского белья в Украине. Полная синхронизация 1С и кастомная корзина.',
    isTop: true,
    coverImage: '/portfolio/project1.jpg',
    clientName: 'Anabel Arto',
    timeline: '3 месяца',
    challenge: 'Старый сайт не справлялся с нагрузками в период распродаж, конверсия в корзине падала из-за долгой загрузки и сложного процесса оформления заказа.',
    solution: 'Мы разработали полностью новый интернет-магазин на современной headless-архитектуре. Внедрили микросервисы для управления корзиной и интеграцию с 1С в реальном времени. Переработали UI/UX под мобильные устройства.',
    results: [
      { label: 'Рост конверсии', value: '+45%' },
      { label: 'Скорость загрузки', value: '0.8 сек' },
      { label: 'Увеличение среднего чека', value: '+15%' }
    ],
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', '1C Integration', 'Cloudflare'],
  },
  {
    id: '2',
    slug: 'riel-real-estate',
    title: 'РИЕЛ: электронная площадка для продажи недвижимости',
    category: 'САЙТЫ',
    tag: 'REAL ESTATE',
    shortDescription: 'Разработали комплекс решений, которые повысили продажи квартир в три раза за счет удобного визуального выбора.',
    isTop: false,
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    clientName: 'Корпорация РИЕЛ',
    timeline: '2 месяца',
    challenge: 'Клиентам было сложно выбрать квартиру по PDF-планировкам. Отдел продаж тратил по 40 минут на объяснение расположения объектов.',
    solution: 'Создали интерактивную 3D-карту жилых комплексов. Пользователь может выбрать дом, этаж и квартиру прямо на сайте с актуальными ценами и статусами из CRM.',
    results: [
      { label: 'Рост онлайн броней', value: 'x3' },
      { label: 'Время на сайте', value: '+210%' },
    ],
    stack: ['React', 'Three.js', 'Tailwind CSS', 'CRM API'],
  },
  {
    id: '3',
    slug: 'ukraine-info-media',
    title: 'Украина.info: масштабная диджитал-платформа',
    category: 'САЙТЫ',
    tag: 'MEDIA',
    shortDescription: 'С нуля создали масштабную новостную платформу: веб-ресурсы, мобильное приложение и мощную мульти-админпанель.',
    isTop: false,
    coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    clientName: 'Украина.info',
    timeline: '4 месяца',
    challenge: 'Необходимость создать масштабируемый новостной портал, способный выдерживать пиковые нагрузки до 100 000 посетителей одновременно без падения скорости.',
    solution: 'Архитектура на Edge-функциях Cloudflare и статическая генерация (SSG). Внедрение кастомной CMS для редакторов с возможностью мгновенной публикации.',
    results: [
      { label: 'Отказоустойчивость', value: '99.9%' },
      { label: 'Time to Interactive', value: '< 1 сек' },
    ],
    stack: ['Next.js', 'Cloudflare Pages', 'Redis', 'Tailwind CSS'],
  },
  {
    id: '4',
    slug: 'auto-service-telegram-bot',
    title: 'Telegram-бот для сети автосервисов',
    category: 'TELEGRAM-БОТЫ',
    tag: 'AUTOMATION',
    shortDescription: 'Полноценный ассистент для записи на СТО, расчета стоимости ТО и уведомлений о готовности авто.',
    isTop: true,
    coverImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
    clientName: 'AutoFix',
    timeline: '3 недели',
    challenge: 'Администраторы СТО теряли до 30% звонков в час пик. Клиенты забывали о записи на обслуживание.',
    solution: 'Разработка Telegram-бота с интеграцией в систему учета СТО. Бот позволяет выбрать услугу, удобное время, напоминает о визите и присылает фотоотчет о ремонте.',
    results: [
      { label: 'Снижение нагрузки на колл-центр', value: '-40%' },
      { label: 'Доходимость по записи', value: '98%' },
    ],
    stack: ['Node.js', 'Telegraf', 'PostgreSQL', 'Redis'],
  }
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find(p => p.slug === slug);
}
