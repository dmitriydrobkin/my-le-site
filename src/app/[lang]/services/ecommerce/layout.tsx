import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/dictionaries';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = getDictionary(params.lang).servicesPages.ecommerce;
  
  const cleanTitle = dict.heroTitle.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim() + ' | Dmitriy';
  const cleanDesc = dict.heroDesc.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();

  return {
    title: cleanTitle,
    description: cleanDesc,
    openGraph: {
      title: cleanTitle,
      description: cleanDesc,
      images: [`/api/og?title=${encodeURIComponent(cleanTitle)}&desc=${encodeURIComponent(cleanDesc)}`],
    },
    twitter: {
      title: cleanTitle,
      description: cleanDesc,
      images: [`/api/og?title=${encodeURIComponent(cleanTitle)}&desc=${encodeURIComponent(cleanDesc)}`],
    }
  };
}

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
