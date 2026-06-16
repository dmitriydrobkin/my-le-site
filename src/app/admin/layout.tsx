import Link from 'next/link';

export const runtime = 'edge';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface text-ink font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-white/80 backdrop-blur-md shadow-glass">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-16 items-center">
            <nav className="flex items-center space-x-8">
              <Link
                href="/admin"
                className="text-sm font-bold tracking-wide text-ink/70 transition-colors hover:text-coral"
              >
                Настройки страниц
              </Link>
              <Link
                href="/admin/catalog"
                className="text-sm font-bold tracking-wide text-ink/70 transition-colors hover:text-coral"
              >
                Каталог
              </Link>
              <Link
                href="/admin/stats"
                className="text-sm font-bold tracking-wide text-ink/70 transition-colors hover:text-coral"
              >
                Статистика
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
