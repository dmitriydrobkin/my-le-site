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

export const runtime = 'edge';

async function getLeadsWithAnswers() {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  
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
      
      {/* ================= БЛОК 0: ЗАЯВКИ (CRM) ================= */}
      <div className="mx-auto max-w-4xl bg-gray-900 p-10 shadow-lg border border-gray-800 rounded-3xl">
        <h1 className="font-sans text-3xl mb-2 font-bold">Заявки (CRM)</h1>
        
        <div className="space-y-4">
          {leadsData.length === 0 ? (
            <p className="text-gray-500 italic">Пока нет ни одной заявки.</p>
          ) : (
            leadsData.map(lead => (
              <div key={lead.id} className="bg-black border border-gray-800 p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{lead.name}</h3>
                  <span className="text-blue-400 font-mono text-sm">{lead.status}</span>
                </div>
                <p className="text-gray-400 text-sm">{lead.contactInfo}</p>
                {lead.answers && (
                  <div className="bg-gray-950 p-3 rounded-lg text-xs text-gray-400">
                    {JSON.stringify(lead.answers)}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ================= БЛОК 1: ГЛОБАЛЬНЫЕ НАСТРОЙКИ ================= */}
      <div className="mx-auto max-w-4xl bg-gray-900 p-10 shadow-lg border border-gray-800 rounded-3xl">
        <h2 className="text-2xl font-bold mb-8">Настройки сайта</h2>
        <form action={updateSiteSettings} className="space-y-6">
          <input name="site_title" defaultValue={settings.site_title ?? ''} placeholder="SEO Title" className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <textarea name="hero_description" defaultValue={settings.hero_description ?? ''} placeholder="Description" className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <SubmitButton defaultText="Сохранить настройки" />
        </form>
      </div>

      {/* ================= БЛОК 2: КОНТЕНТ СТРАНИЦ ================= */}
      <div className="mx-auto max-w-4xl bg-gray-900 p-10 shadow-lg border border-gray-800 rounded-3xl">
        <h2 className="text-2xl font-bold mb-8">Контент страниц</h2>
        
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
          <input name="h1" defaultValue={content.h1 || ''} placeholder="H1 заголовок" className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <input name="seoTitle" defaultValue={content.seoTitle || ''} placeholder="SEO Title" className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <textarea name="description" defaultValue={content.description || ''} placeholder="Описание" className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <SubmitButton defaultText="Сохранить контент" />
        </form>
      </div>
    </div>
  );
}
