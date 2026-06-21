'use client';

import { useState, useRef } from 'react';
import { Eye, EyeOff, Copy, Trash2, Edit2, Plus, Image as ImageIcon } from 'lucide-react';
import { saveProjectAction, toggleProjectVisibilityAction, duplicateProjectAction, deleteProjectAction } from '@/server/actions/projects';
import Image from 'next/image';

export default function PortfolioManager({ initialProjects }: { initialProjects: any[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const editingProject = editingId ? initialProjects.find(p => p.id === editingId) : null;

  async function handleSubmit(formData: FormData) {
    if (editingId) formData.append('id', editingId);
    await saveProjectAction(formData);
    setEditingId(null);
    formRef.current?.reset();
  }

  return (
    <div className="space-y-8">
      {/* Форма добавления / редактирования */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-ink/5 shadow-sm">
        <h3 className="font-display text-2xl font-bold text-ink mb-6">
          {editingProject ? 'Редактировать проект' : 'Добавить новый проект'}
        </h3>
        
        <form ref={formRef} action={handleSubmit} encType="multipart/form-data" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Название проекта *</label>
              <input required name="title" defaultValue={editingProject?.title || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="Например: Разработка Telegram-бота..." />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink/80 mb-2">Ссылка на проект</label>
              <input name="projectLink" defaultValue={editingProject?.projectLink || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="https://" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Описание</label>
            <textarea rows={3} name="description" defaultValue={editingProject?.description || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors resize-none" placeholder="Кратко о проекте" />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink/80 mb-2">Теги (через запятую)</label>
            <input name="tags" defaultValue={editingProject?.tags || ''} className="w-full p-4 bg-surface border border-ink/10 rounded-2xl focus:border-coral outline-none transition-colors" placeholder="Telegram-бот, React, AI..." />
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

          <div className="flex gap-4 pt-2">
            <button type="submit" className="px-8 py-4 bg-coral text-white font-bold rounded-full hover:bg-coral/90 transition-colors flex items-center gap-2">
              {editingProject ? <Edit2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {editingProject ? 'Сохранить изменения' : 'Добавить проект'}
            </button>
            {editingProject && (
              <button type="button" onClick={() => { setEditingId(null); formRef.current?.reset(); }} className="px-8 py-4 bg-surface text-ink font-bold rounded-full hover:bg-ink/5 transition-colors">
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
                <th className="p-6 font-bold">Теги</th>
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
                      {project.projectLink && <a href={project.projectLink} target="_blank" rel="noreferrer" className="text-sm text-cyan hover:underline">{project.projectLink}</a>}
                    </td>
                    <td className="p-6">
                      <div className="text-sm text-ink/60 font-medium">{project.tags || '—'}</div>
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
