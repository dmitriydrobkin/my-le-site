export function StructuredData({ lang }: { lang: string }) {
  const isUk = lang === 'uk';
  const description = isUk 
    ? "Розробка сайтів та Telegram-ботів для бізнесу" 
    : "Разработка сайтов и Telegram-ботов для бизнеса";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://malyshev.dev/#person",
      "name": "Dmitriy Malyshev",
      "alternateName": ["Дмитрий Малышев", "Дмитро Малишев"],
      "jobTitle": [
        "Web Designer", 
        "Web Developer",
        "Веб-дизайнер",
        "Розробник",
        "Создатель сайтов"
      ],
      "url": "https://malyshev.dev",
      "sameAs": [
        "https://t.me/malyshev_dev"
      ],
      "knowsAbout": ["Web Design", "Web Development", "Telegram Bots", "Next.js", "React"]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://malyshev.dev/#organization",
      "name": "Malyshev.Dev",
      "description": description,
      "url": "https://malyshev.dev",
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "Ukraine"
      },
      "founder": {
        "@id": "https://malyshev.dev/#person"
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
