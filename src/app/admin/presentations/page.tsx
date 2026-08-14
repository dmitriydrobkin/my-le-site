import { verifyAdmin } from '@/server/functions/auth-guard';
import PresentationsList from './PresentationsList';
import fs from 'fs';
import path from 'path';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

async function getPresentations() {
  try {
    // В Cloudflare Pages нельзя использовать fs во время выполнения.
    // Поэтому мы загружаем сгенерированный JSON файл.
    // Если мы локально, мы можем попробовать динамически загрузить, но надежнее использовать import
    const data = await import('@/data/presentations.json');
    return data.default || data;
  } catch (error) {
    console.error('Error loading presentations:', error);
    return [];
  }
}

export default async function PresentationsPage() {
  await verifyAdmin();

  const presentations = await getPresentations();

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink mb-2">Презентації</h1>
          <p className="font-sans text-ink/60">
            Список всіх створених презентацій для зідзвонів. 
          </p>
        </div>
      </div>

      <PresentationsList initialPresentations={presentations} />
    </div>
  );
}
