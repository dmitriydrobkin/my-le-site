'use client';

import { useState } from 'react';
import { saveCategoryAction, deleteCategoryAction } from '@/server/actions/categories';

export default function CategoryManager({ initialCategories }: { initialCategories: any[] }) {
  const [categories, setCategories] = useState(initialCategories);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSave(formData: FormData) {
    setIsLoading(true);
    try {
      await saveCategoryAction(formData);
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert('Ошибка при сохранении');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Удалить категорию? Проекты с этой категорией могут перестать отображаться корректно!')) return;
    setIsLoading(true);
    try {
      await deleteCategoryAction(id);
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert('Ошибка при удалении');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
        <h2 className="text-xl font-bold mb-4">{isEditing ? 'Редактировать' : 'Добавить'} категорию</h2>
        <form action={handleSave} className="grid grid-cols-1 gap-4">
          <input type="hidden" name="id" value={isEditing === 'new' ? '' : isEditing || ''} />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-ink/50 mb-1">Название (RU)</label>
              <input name="nameRu" required defaultValue={isEditing && isEditing !== 'new' ? categories.find(c => c.id === isEditing)?.nameRu : ''} className="w-full p-2 border rounded-xl" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-ink/50 mb-1">Название (UA)</label>
              <input name="nameUk" required defaultValue={isEditing && isEditing !== 'new' ? categories.find(c => c.id === isEditing)?.nameUk : ''} className="w-full p-2 border rounded-xl" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-ink/50 mb-1">Slug (URL-ярлык)</label>
              <input name="slug" required defaultValue={isEditing && isEditing !== 'new' ? categories.find(c => c.id === isEditing)?.slug : ''} className="w-full p-2 border rounded-xl" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-ink/50 mb-1">Порядок сортировки</label>
              <input name="sortOrder" type="number" defaultValue={isEditing && isEditing !== 'new' ? categories.find(c => c.id === isEditing)?.sortOrder : '0'} className="w-full p-2 border rounded-xl" />
            </div>
          </div>
          <div className="flex gap-4">
            <button type="submit" disabled={isLoading} className="px-6 py-2 bg-coral text-white rounded-xl font-bold">
              {isLoading ? 'Сохранение...' : 'Сохранить'}
            </button>
            {isEditing && (
              <button type="button" onClick={() => setIsEditing(null)} className="px-6 py-2 bg-ink/5 text-ink rounded-xl font-bold">
                Отмена
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl border border-ink/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-ink/5 text-xs uppercase text-ink/50">
            <tr>
              <th className="p-4">Сорт</th>
              <th className="p-4">Название (RU)</th>
              <th className="p-4">Название (UA)</th>
              <th className="p-4">Slug</th>
              <th className="p-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t border-ink/5">
                <td className="p-4 font-mono">{cat.sortOrder}</td>
                <td className="p-4 font-bold">{cat.nameRu}</td>
                <td className="p-4">{cat.nameUk}</td>
                <td className="p-4 font-mono text-sm text-ink/60">{cat.slug}</td>
                <td className="p-4 flex gap-2">
                  <button onClick={() => setIsEditing(cat.id)} className="text-blue-500 hover:underline text-sm font-bold">Изменить</button>
                  <button onClick={() => handleDelete(cat.id)} className="text-red-500 hover:underline text-sm font-bold">Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {categories.length === 0 && (
          <div className="p-8 text-center text-ink/50">Нет категорий</div>
        )}
      </div>
    </div>
  );
}
