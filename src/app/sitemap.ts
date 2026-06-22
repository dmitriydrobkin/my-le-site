import { MetadataRoute } from 'next';
import { CITIES } from '@/data/cities';
import { niches } from '@/data/niches';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://malyshev.dev'; // Укажите реальный домен сайта
  
  // Базовые страницы
  const routes = [
    '',
    '/portfolio',
    '/services/telegram-bots',
    '/services/landings',
    '/services/business-cards',
    '/services/corporate',
    '/services/ecommerce',
    '/services/sites-and-bots',
    '/about',
    '/contact',
    '/locations'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Страницы городов для SEO
  const cityRoutes = CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  // Страницы ниш и категорий
  const nicheRoutes = niches.map((niche) => ({
    url: `${baseUrl}/solutions/${niche.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...cityRoutes, ...nicheRoutes];
}
