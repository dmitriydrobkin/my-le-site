import os

# Step 1: Update middleware to pass x-pathname
mw_path = 'src/middleware.ts'
with open(mw_path, 'r', encoding='utf-8') as f:
    mw_content = f.read()

if 'x-pathname' not in mw_content:
    mw_content = mw_content.replace('  const { pathname } = request.nextUrl;', '''  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);''')
    mw_content = mw_content.replace('return NextResponse.next();', 'return NextResponse.next({ request: { headers: requestHeaders } });')
    mw_content = mw_content.replace('return NextResponse.rewrite(newUrl);', 'return NextResponse.rewrite(newUrl, { request: { headers: requestHeaders } });')
    
    with open(mw_path, 'w', encoding='utf-8') as f:
        f.write(mw_content)

# Step 1.2: Add generateMetadata to src/app/[lang]/layout.tsx
layout_path = 'src/app/[lang]/layout.tsx'
with open(layout_path, 'r', encoding='utf-8') as f:
    layout_content = f.read()

if 'export async function generateMetadata' not in layout_content:
    meta_import = "import { headers } from 'next/headers';\nimport type { Metadata } from 'next';\n"
    layout_content = meta_import + layout_content
    meta_fn = '''
export async function generateMetadata(): Promise<Metadata> {
  const h = headers();
  let pathname = h.get('x-pathname') || '/';
  
  if (pathname.startsWith('/ru')) {
    pathname = pathname.replace('/ru', '') || '/';
  }
  
  const basePath = pathname === '/' ? '' : pathname;
  
  return {
    alternates: {
      languages: {
        uk: `https://malyshev.dev${basePath}`,
        ru: `https://malyshev.dev/ru${basePath}`,
      }
    }
  };
}
'''
    layout_content = layout_content.replace("export const runtime = 'edge';", "export const runtime = 'edge';\n" + meta_fn)
    
    with open(layout_path, 'w', encoding='utf-8') as f:
        f.write(layout_content)

# Step 2: Rewrite sitemap.ts
sitemap_code = '''import { MetadataRoute } from 'next';
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
'''
with open('src/app/sitemap.ts', 'w', encoding='utf-8') as f:
    f.write(sitemap_code)
