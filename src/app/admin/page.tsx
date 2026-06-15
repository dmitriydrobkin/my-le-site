/**
 * Главная страница панели администратора.
 * Позволяет управлять глобальными настройками SEO, контентом и заявками (лидами).
 */

import { getSiteSettings } from '@/server/functions/settings';
import { updateSiteSettings } from '@/server/actions/settings';
import { getPageContent } from '@/server/functions/page-content';
import { savePageContent } from '@/server/actions/page-content';
import { SubmitButton } from '@/components/SubmitButton';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { leads, quizAnswers } from '@/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export const runtime = 'edge';

async function getLeadsWithAnswers() {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  
  // В реальном проекте лучше использовать relations, но можно и 2 запроса
  const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt)).all();
  const allAnswers = await db.select().from(quizAnswers).all();
  
  return allLeads.map(lead => ({
    ...lead,
    answers: allAnswers.find(a => a.leadId === lead.id)?.answersJson || null
  }));
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { route?: string };
}) {
  const settings = await getSiteSettings();
  const selectedRoute = searchParams.route || '/';
  const content = await getPageContent(selectedRoute) || {};
  const leadsData = await getLeadsWithAnswers();

  return (
    <div className="min-h-screen bg-black py-16 text-white space-y-12 px-4">
      
      {/* ================= БЛОК 0: ЗАЯВКИ (LEADS) ================= */}
      <div className="mx-auto max-w-4xl bg-gray-900 p-10 shadow-lg border border-gray-800 rounded-3xl">
        <h1 className="font-sans text-3xl mb-2 font-bold">Заявки (CRM)</h1>
        <p className="font-sans text-sm text-gray-400 mb-8">
          Последние обращения с сайта и результаты квизов.
        </p>
        
        <div className="space-y-4">
          {leadsData.length === 0 ? (
            <p className="text-gray-500 italic">Пока нет ни одной заявки.</p>
          ) : (
            leadsData.map(lead => (
              <div key={lead.id} className="bg-black border border-gray-800 p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{lead.name}</h3>
                    <p className="text-blue-400 text-sm mt-1">{lead.contactInfo}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {lead.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                  <div>
                    <span className="text-gray-500 block mb-1">Бюджет:</span>
                    <span className="text-gray-200">{lead.estimatedBudget || 'Не указан'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Дата:</span>
                    <span className="text-gray-200">{new Date(lead.createdAt).toLocaleString('ru-RU')}</span>
                  </div>
                </div>

                {lead.answers && Object.keys(lead.answers as any).length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <span className="text-gray-500 block mb-2 text-sm">Ответы квиза:</span>
                    <div className="bg-gray-900 p-4 rounded-xl text-xs font-mono text-gray-300 overflow-x-auto">
                      <pre>{JSON.stringify(lead.answers, null, 2)}</pre>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ================= БЛОК 1: ГЛОБАЛЬНЫЕ НАСТРОЙКИ ================= */}
      <div className="mx-auto max-w-4xl bg-gray-900 p-10 shadow-lg border border-gray-800 rounded-3xl">
        <h2 className="font-sans text-3xl mb-2 font-bold">Глобальные настройки сайта</h2>
        <p className="font-sans text-sm text-gray-400 mb-8">
          Базовые параметры SEO, тексты главной страницы и индексация.
        </p>
        
        <form action={updateSiteSettings} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">
                Название сайта (SEO Title)
              </label>
              <input 
                type="text" 
                name="site_title" 
                defaultValue={settings.site_title ?? 'Creative Portfolio'} 
                className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">
                Бейдж главной страницы
              </label>
              <input 
                type="text" 
                name="hero_badge" 
                defaultValue={settings.hero_badge ?? 'Lead Creative Developer'} 
                className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">
              Глобальное описание (SEO Description)
            </label>
            <textarea 
              name="site_description" 
              defaultValue={settings.site_description ?? ''} 
              rows={2}
              className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500 resize-none"
            />
          </div>

          <div className="border-t border-gray-800 my-6" />
          <h3 className="font-sans text-xl mb-4 font-bold">Тексты на главном экране</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">Заголовок 1</label>
              <input 
                type="text" 
                name="hero_title_1" 
                defaultValue={settings.hero_title_1 ?? 'Создаю сайты, которые'} 
                className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">Заголовок 2 (курсив)</label>
              <input 
                type="text" 
                name="hero_title_italic" 
                defaultValue={settings.hero_title_italic ?? 'приносят прибыль'} 
                className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">Описание под заголовком</label>
            <textarea 
              name="hero_description" 
              defaultValue={settings.hero_description ?? 'Премиальный дизайн, WebGL-анимации и надежная Cloudflare Edge архитектура.'} 
              rows={2}
              className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500 resize-none"
            />
          </div>

          <div className="border-t border-gray-800 my-6" />

          <div className="flex items-start gap-4">
            <input 
              type="checkbox" 
              name="seo_indexing_enabled" 
              id="seo_indexing_enabled"
              defaultChecked={settings.seo_indexing_enabled === 'true'}
              className="mt-1 h-5 w-5 accent-blue-500"
            />
            <label htmlFor="seo_indexing_enabled" className="text-sm font-sans leading-relaxed">
              <strong>Разрешить индексацию поисковиками</strong><br/>
              <span className="text-gray-500">Если выключено, сайт будет скрыт от Google и Яндекс.</span>
            </label>
          </div>

          <SubmitButton defaultText="Сохранить настройки" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 mt-8" />
        </form>
      </div>

      {/* ================= БЛОК 2: КОНТЕНТ КОНКРЕТНЫХ СТРАНИЦ ================= */}
      <div className="mx-auto max-w-4xl bg-gray-900 p-10 shadow-lg border border-gray-800 rounded-3xl">
        <h2 className="font-sans text-3xl mb-2 font-bold">Контент страниц</h2>
        <p className="font-sans text-sm text-gray-400 mb-8">
          Управление текстами и заголовками для каждого раздела сайта.
        </p>

        <form method="GET" className="flex items-end gap-4 mb-8 bg-black p-6 rounded-2xl border border-gray-800">
          <div className="flex-1">
            <label htmlFor="routeSelect" className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">
              Выберите страницу
            </label>
            <select
              id="routeSelect"
              name="route"
              defaultValue={selectedRoute}
              className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-gray-900 font-sans text-sm outline-none transition-colors focus:border-blue-500"
            >
              <option value="/">Главная (/)</option>
              <option value="/catalog">Каталог (/catalog)</option>
              <option value="/about">О нас (/about)</option>
            </select>
          </div>
          <button type="submit" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-xl h-[46px] transition-colors font-bold">
            Выбрать
          </button>
        </form>

        <div className="border-t border-gray-800 my-8" />

        <form action={savePageContent} className="space-y-6">
          <input type="hidden" name="pageRoute" value={selectedRoute} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">Главный заголовок (H1)</label>
              <input
                type="text"
                name="h1"
                defaultValue={content.h1 || ''}
                className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">SEO Title страницы</label>
              <input
                type="text"
                name="seoTitle"
                defaultValue={content.seoTitle || ''}
                className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-widest text-gray-400 mb-2">Текстовое описание</label>
            <textarea
              name="description"
              defaultValue={content.description || ''}
              rows={4}
              className="w-full border border-gray-700 rounded-xl px-4 py-3 bg-black font-sans text-sm outline-none transition-colors focus:border-blue-500 resize-none"
            />
          </div>

          <SubmitButton defaultText={`Сохранить контент`} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-4" />
        </form>
      </div>
    </div>
  );
}