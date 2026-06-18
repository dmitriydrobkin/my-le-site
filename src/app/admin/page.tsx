/**
 * Главная страница панели администратора.
 * Управляет глобальными настройками, SEO и лидами.
 */

import { getSiteSettings } from '@/server/functions/settings';
import { updateSiteSettings } from '@/server/actions/settings';
import { getPageContent } from '@/server/functions/page-content';
import { savePageContent } from '@/server/actions/page-content';
import { SubmitButton } from '@/components/SubmitButton';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { leads, quizAnswers } from '@/server/db/schema';
import { desc } from 'drizzle-orm';
import { verifyAdmin } from '@/server/functions/auth-guard';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

async function getLeadsWithAnswers() {
  const { env } = getRequestContext();
  const db = drizzle((env as any).DB);
  
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
  // ⚡ ЗАПУСКАЕМ НАДЕЖНУЮ ПРОВЕРКУ ПАРОЛЯ И СЕССИИ
  await verifyAdmin();

  const settings = await getSiteSettings();
  const selectedRoute = searchParams.route || '/';
  const content = await getPageContent(selectedRoute) || {};
  const leadsData = await getLeadsWithAnswers();

  return (
    <div className="space-y-12 pb-16 pt-8">
      
      {/* ================= БЛОК 0: ЗАЯВКИ (CRM) ================= */}
      <div className="mx-auto max-w-4xl glass-panel p-10 rounded-3xl">
        <h1 className="font-display text-3xl mb-8 font-bold text-ink">Заявки (CRM)</h1>
        
        <div className="space-y-4">
          {leadsData.length === 0 ? (
            <p className="text-ink/60 italic">Пока нет ни одной заявки.</p>
          ) : (
            leadsData.map(lead => (
              <div key={lead.id} className="bg-white/50 border border-ink/10 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-glass transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{lead.name}</h3>
                    <p className="text-ink/60 font-medium text-sm mt-1">{lead.contactInfo}</p>
                  </div>
                  <span className="bg-cyan/10 text-cyan-600 px-3 py-1 rounded-full font-sans text-xs font-bold uppercase tracking-wider">
                    {lead.status}
                  </span>
                </div>
                {lead.answers && (
                  <div className="bg-surface border border-ink/5 p-4 rounded-xl text-sm text-ink/70">
                    <pre className="whitespace-pre-wrap font-sans text-xs">
                      {JSON.stringify(lead.answers, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ================= БЛОК 1: ГЛОБАЛЬНЫЕ НАСТРОЙКИ ================= */}
      <div className="mx-auto max-w-4xl glass-panel p-10 rounded-3xl">
        <h2 className="font-display text-2xl font-bold mb-8 text-ink">Настройки сайта</h2>
        <form action={updateSiteSettings} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Название сайта (SEO Title)</label>
            <input name="site_title" defaultValue={settings.site_title ?? ''} placeholder="Dmitriy | Автоматизация бизнеса" className="w-full p-4 bg-surface border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Общее описание (Meta Description)</label>
            <textarea rows={3} name="hero_description" defaultValue={settings.hero_description ?? ''} placeholder="Сайты и Телеграм-боты под ключ" className="w-full p-4 bg-surface border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors resize-none" />
          </div>
          <div className="pt-2">
            <SubmitButton defaultText="Сохранить настройки" />
          </div>
        </form>
      </div>

      {/* ================= БЛОК 2: КОНТЕНТ СТРАНИЦ ================= */}
      <div className="mx-auto max-w-4xl glass-panel p-10 rounded-3xl">
        <h2 className="font-display text-2xl font-bold mb-8 text-ink">Контент страниц</h2>
        
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
          <input type="hidden" name="route" value={selectedRoute} />
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">H1 заголовок</label>
            <input name="h1" defaultValue={content.h1 || ''} placeholder="Главный заголовок страницы" className="w-full p-4 bg-surface border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">SEO Title страницы</label>
            <input name="seoTitle" defaultValue={content.seoTitle || ''} placeholder="SEO Title для этой страницы" className="w-full p-4 bg-surface border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Описание (Description)</label>
            <textarea rows={3} name="description" defaultValue={content.description || ''} placeholder="Описание страницы" className="w-full p-4 bg-surface border border-ink/10 rounded-2xl text-ink focus:outline-none focus:border-coral transition-colors resize-none" />
          </div>
          <div className="pt-2">
            <SubmitButton defaultText="Сохранить контент" />
          </div>
        </form>
      </div>
    </div>
  );
}