/**
 * Страница настроек (SEO, глобальные параметры).
 */

import { getSiteSettings } from '@/server/functions/settings';
import { updateSiteSettings } from '@/server/actions/settings';
import { getPageContent } from '@/server/functions/page-content';
import { savePageContent } from '@/server/actions/page-content';
import { SubmitButton } from '@/components/SubmitButton';
import { verifyAdmin } from '@/server/functions/auth-guard';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: { route?: string };
}) {
  await verifyAdmin();

  const settings = await getSiteSettings();
  const selectedRoute = searchParams.route || '/';
  const content = await getPageContent(selectedRoute) || {};

  const pagesList = [
    { name: 'Главная', route: '/' },
    { name: 'Корпоративные', route: '/services/corporate' },
    { name: 'Лендинги', route: '/services/landings' },
    { name: 'Интернет-магазины', route: '/services/ecommerce' },
    { name: 'Магазин в TG', route: '/services/sites-and-bots' },
    { name: 'О нас', route: '/about' },
    { name: 'Контакты', route: '/contact' },
  ];

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-ink mb-2">Настройки сайта</h1>
        <p className="font-sans text-ink/60">SEO-параметры и глобальные настройки</p>
      </div>

      {/* ================= БЛОК 1: ГЛОБАЛЬНЫЕ НАСТРОЙКИ ================= */}
      <div className="mx-auto max-w-4xl bg-surface/50 p-10 rounded-3xl border border-ink/5">
        <h2 className="font-display text-2xl font-bold mb-8 text-ink">Глобальные переменные</h2>
        
        <form 
         action={async (formData: FormData) => {
            'use server';
            
            // Создаем единый пакет данных
            const settingsData = new FormData();
            
            // Аккуратно складываем туда все настройки под правильными ключами
            settingsData.append('global_phone', formData.get('phone') as string || '');
            settingsData.append('global_email', formData.get('email') as string || '');
            settingsData.append('global_tg', formData.get('tg') as string || '');
            
            // Отправляем ровно ОДИН аргумент, как и требует TypeScript
            await updateSiteSettings(settingsData);
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Телефон (шапка/подвал)</label>
              <input name="phone" defaultValue={settings.global_phone || ''} placeholder="+7 (999) 000-00-00" className="w-full p-4 bg-white border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Email</label>
              <input name="email" defaultValue={settings.global_email || ''} placeholder="hello@company.com" className="w-full p-4 bg-white border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-ink/80 mb-2">Telegram (ссылка на аккаунт/канал)</label>
              <input name="tg" defaultValue={settings.global_tg || ''} placeholder="https://t.me/nashe_agency" className="w-full p-4 bg-white border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
            </div>
          </div>
          <div className="pt-2">
            <SubmitButton defaultText="Сохранить настройки" />
          </div>
        </form>
      </div>

      {/* ================= БЛОК 2: КОНТЕНТ СТРАНИЦ ================= */}
      <div className="mx-auto max-w-4xl bg-surface/50 p-10 rounded-3xl border border-ink/5">
        <h2 className="font-display text-2xl font-bold mb-8 text-ink">Настройки страниц (SEO)</h2>
        
        <form 
          action={async (formData: FormData) => {
            'use server';
            const data = {
              route: formData.get('route') as string,
              h1: formData.get('h1') as string,
              seoTitle: formData.get('seoTitle') as string,
              description: formData.get('description') as string,
            };
            await savePageContent(data);
          }} 
          className="space-y-6"
        >
          <div className="mb-6">
            <label className="block text-sm font-bold text-ink/80 mb-2">Выберите страницу для редактирования:</label>
            <div className="flex flex-wrap gap-2">
              {pagesList.map((page) => (
                <a 
                  key={page.route} 
                  href={`?route=${page.route}`}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    selectedRoute === page.route 
                      ? 'bg-coral text-white shadow-md' 
                      : 'bg-white text-ink/60 hover:bg-ink/5 border border-ink/5'
                  }`}
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>

          <input type="hidden" name="route" value={selectedRoute} />
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">H1 заголовок</label>
            <input name="h1" defaultValue={content.h1 || ''} placeholder="Главный заголовок страницы" className="w-full p-4 bg-white border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">SEO Title страницы</label>
            <input name="seoTitle" defaultValue={content.seoTitle || ''} placeholder="SEO Title для этой страницы" className="w-full p-4 bg-white border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Описание (Description)</label>
            <textarea rows={3} name="description" defaultValue={content.description || ''} placeholder="Описание страницы" className="w-full p-4 bg-white border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors resize-none" />
          </div>
          <div className="pt-2">
            <SubmitButton defaultText="Сохранить контент" />
          </div>
        </form>
      </div>
    </div>
  );
}
