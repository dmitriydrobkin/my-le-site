import { MetadataRoute } from 'next';
import { CITIES } from '@/data/cities';
import { niches } from '@/data/niches';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://malyshev.dev';
  
  const staticPaths = [
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
    '/locations',
    '/solutions',
    '/privacy'
  ];

  const routes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  const cityRoutes = CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const nicheRoutes = niches.map((niche) => ({
    url: `${baseUrl}/solutions/${niche.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const allRoutes = [...routes, ...cityRoutes, ...nicheRoutes];
  const ruRoutes = allRoutes.map(route => ({
    ...route,
    url: route.url.replace(baseUrl, `${baseUrl}/ru`),
  }));

  return [...allRoutes, ...ruRoutes];
}
