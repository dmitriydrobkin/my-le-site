'use client';

import { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Copy, Trash2, Edit2, Plus, Image as ImageIcon, X } from 'lucide-react';
import { saveProjectAction, toggleProjectVisibilityAction, duplicateProjectAction, deleteProjectAction } from '@/server/actions/projects';

export default function PortfolioManager({ initialProjects }: { initialProjects: any[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [results, setResults] = useState<{label: string, value: string}[]>([]);

  const editingProject = editingId ? initialProjects.find(p => p.id === editingId) : null;

  useEffect(() => {
    if (editingProject && editingProject.resultsJson) {
      try {
        setResults(typeof editingProject.resultsJson === 'string' ? JSON.parse(editingProject.resultsJson) : editingProject.resultsJson);
      } catch(e) { setResults([]); }
    } else {
      setResults([]);
    }
  }, [editingProject]);

  async function handleSubmit(formData: FormData) {
    if (editingId) formData.append('id', editingId);
    
    // Добавляем результаты в JSON
    formData.append('resultsJson', JSON.stringify(results));

    await saveProjectAction(formData);
    setEditingId(null);
    setResults([]);
    formRef.current?.reset();
  }

  const addResult = () => setResults([...results, { label: '', value: '' }]);
  const updateResult = (index: number, field: 'label'|'value', val: string) => {
    const newResults = results.map((r, i) => i === index ? { ...r, [field]: val } : r);
    setResults(newResults);
  };
  const removeResult = (index: number) => setResults(results.filter((_, i) => i !== index));

  return (
    <div className="space-y-8">
      {/* Форма добавления / редактирования */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-ink/5 shadow-sm">
        <h3 className="font-display text-2xl font-bold text-ink mb-6">
          {editingProject ? 'Редактировать проект' : 'Добавить новый проект'}
        </h3>
        
        <form ref={formRef} action={handleSubmit} encType="multipart/form-data" className="space-y-6">
          {/* Базовые данные */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Название проекта *</label>
              <input required name="title" defaultValue={editingProject?.title || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="Название" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">URL / Slug (оставьте пустым для авто)</label>
              <input name="slug" defaultValue={editingProject?.slug || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="my-project-slug" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Категория</label>
              <select name="category" defaultValue={editingProject?.category || 'САЙТЫ'} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors">
                <option value="САЙТЫ">САЙТЫ</option>
                <option value="E-COMMERCE">E-COMMERCE</option>
                <option value="TELEGRAM-БОТЫ">TELEGRAM-БОТЫ</option>
                <option value="WEB-ПРИЛОЖЕНИЯ">WEB-ПРИЛОЖЕНИЯ</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Клиент</label>
              <input name="clientName" defaultValue={editingProject?.clientName || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="Название компании" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Сроки</label>
              <input name="timeline" defaultValue={editingProject?.timeline || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="Например: 2 месяца" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Внешняя ссылка на проект (кнопка)</label>
              <input name="projectLink" defaultValue={editingProject?.projectLink || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="https://" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <label className="block text-sm font-bold text-ink/80 mb-2">Короткий Тег (ярлык)</label>
               <input name="tags" defaultValue={editingProject?.tags || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="REAL ESTATE, E-COMMERCE..." />
            </div>
            <div>
               <label className="block text-sm font-bold text-ink/80 mb-2">Технологии (через запятую)</label>
               <input name="stack" defaultValue={editingProject?.stackJson ? (typeof editingProject.stackJson === 'string' ? JSON.parse(editingProject.stackJson).join(', ') : editingProject.stackJson.join(', ')) : ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="Next.js, Tailwind, 1C..." />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Краткое описание (в карточке)</label>
            <textarea rows={2} name="description" defaultValue={editingProject?.description || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors resize-none" placeholder="Кратко о проекте" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Задача</label>
              <textarea rows={4} name="challenge" defaultValue={editingProject?.challenge || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors resize-none" placeholder="С чем пришел клиент?" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Решение</label>
              <textarea rows={4} name="solution" defaultValue={editingProject?.solution || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors resize-none" placeholder="Как мы решили задачу?" />
            </div>
          </div>

          {/* Результаты работы */}
          <div className="bg-surface/50 p-6 rounded-2xl border border-ink/5">
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-bold text-ink/80">Результаты работы (Цифры)</label>
              <button type="button" onClick={addResult} className="text-xs font-bold bg-white border border-ink/10 px-3 py-1.5 rounded-full hover:border-coral hover:text-coral transition-colors flex items-center gap-1">
                <Plus className="w-3 h-3" /> Добавить
              </button>
            </div>
            {results.length === 0 && <p className="text-xs text-ink/40 font-medium">Нет результатов. Добавьте первую цифру.</p>}
            <div className="space-y-3">
              {results.map((res, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-1">
                    <input value={res.label} onChange={e => updateResult(i, 'label', e.target.value)} placeholder="Описание (напр. Конверсия)" className="w-full p-3 text-sm bg-white border border-ink/10 rounded-xl focus:outline-none focus:border-coral" />
                  </div>
                  <div className="flex-1">
                    <input value={res.value} onChange={e => updateResult(i, 'value', e.target.value)} placeholder="Значение (напр. +45%)" className="w-full p-3 text-sm bg-white border border-ink/10 rounded-xl focus:outline-none focus:border-coral" />
                  </div>
                  <button type="button" onClick={() => removeResult(i)} className="p-3 text-ink/30 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Обложка проекта (Картинка)</label>
            <div className="flex flex-col gap-3">
              {editingProject?.imageUrl && (
                <div className="relative w-32 h-24 rounded-xl overflow-hidden border border-ink/10">
                  <img src={editingProject.imageUrl} alt="cover" className="w-full h-full object-cover" />
                </div>
              )}
              <input type="file" name="imageFile" accept="image/*" className="w-full p-4 bg-surface border border-ink/10 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-coral/10 file:text-coral hover:file:bg-coral/20 cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="px-8 py-4 bg-coral text-white font-bold rounded-full hover:bg-coral/90 transition-colors flex items-center gap-2">
              {editingProject ? <Edit2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {editingProject ? 'Сохранить изменения' : 'Добавить проект'}
            </button>
            {editingProject && (
              <button type="button" onClick={() => { setEditingId(null); setResults([]); formRef.current?.reset(); }} className="px-8 py-4 bg-surface text-ink font-bold rounded-full hover:bg-ink/5 transition-colors">
                Отмена
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Список проектов */}
      <div className="bg-white rounded-[2rem] border border-ink/5 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface/50 border-b border-ink/5 text-ink/60 font-sans text-sm uppercase tracking-wider">
                <th className="p-6 font-bold w-16">Фото</th>
                <th className="p-6 font-bold">Название</th>
                <th className="p-6 font-bold">Категория</th>
                <th className="p-6 font-bold">Дата</th>
                <th className="p-6 font-bold text-right">Действия</th>
              </tr>
            </thead>
            <tbody>
              {initialProjects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-ink/40 font-medium">Нет проектов. Добавьте первый проект выше.</td>
                </tr>
              ) : (
                initialProjects.map((project) => (
                  <tr key={project.id} className={`border-b border-ink/5 hover:bg-surface/30 transition-colors ${project.isHidden ? 'opacity-50 bg-surface/50' : ''}`}>
                    <td className="p-6">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface flex items-center justify-center border border-ink/10 relative">
                        {project.imageUrl ? (
                          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="w-5 h-5 text-ink/30" />
                        )}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="font-bold text-ink mb-1 flex items-center gap-2">
                        {project.title}
                        {project.isHidden === 1 && <span className="text-[10px] uppercase tracking-wider bg-ink/10 text-ink/60 px-2 py-0.5 rounded-full">Скрыт</span>}
                      </div>
                      <div className="text-sm text-ink/40 font-mono">/{project.slug}</div>
                    </td>
                    <td className="p-6">
                      <div className="text-sm font-bold text-ink/80">{project.category || '—'}</div>
                      <div className="text-xs text-ink/50 mt-1">{project.clientName || 'Без клиента'}</div>
                    </td>
                    <td className="p-6 text-sm text-ink/60 whitespace-nowrap">
                      {new Date(project.createdAt).toLocaleDateString('ru-RU')}
                    </td>
                    <td className="p-6">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => setEditingId(project.id)} className="w-10 h-10 rounded-full flex items-center justify-center text-ink/40 hover:text-coral hover:bg-coral/10 transition-colors" title="Редактировать">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => toggleProjectVisibilityAction(project.id, project.isHidden)} className="w-10 h-10 rounded-full flex items-center justify-center text-ink/40 hover:text-ink hover:bg-ink/10 transition-colors" title={project.isHidden ? "Показать" : "Скрыть"}>
                          {project.isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button onClick={() => duplicateProjectAction(project.id)} className="w-10 h-10 rounded-full flex items-center justify-center text-ink/40 hover:text-cyan hover:bg-cyan/10 transition-colors" title="Дублировать">
                          <Copy className="w-4 h-4" />
                        </button>
                        <button onClick={() => { if(confirm('Удалить проект?')) deleteProjectAction(project.id) }} className="w-10 h-10 rounded-full flex items-center justify-center text-ink/40 hover:text-red-500 hover:bg-red-500/10 transition-colors" title="Удалить">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
