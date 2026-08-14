'use client';

import { useState } from 'react';
import { Search, Presentation, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PresentationsList({ initialPresentations }: { initialPresentations: string[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = initialPresentations.filter(slug => 
    slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-[2rem] p-4 shadow-glass border border-ink/5 flex items-center gap-4">
        <Search className="text-ink/40 w-6 h-6 ml-2" />
        <input 
          type="text" 
          placeholder="Пошук за ніком / URL (наприклад: iryna_globina)"
          className="flex-1 bg-transparent border-none outline-none font-medium text-lg placeholder:text-ink/30"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* List */}
      <div className="bg-white rounded-[2rem] shadow-glass border border-ink/5 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-ink/50 font-medium">
            Презентації не знайдено
          </div>
        ) : (
          <div className="divide-y divide-ink/5">
            {filtered.map(slug => (
              <div key={slug} className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-50 transition-colors">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                    <Presentation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl font-display">{slug}</h3>
                    <p className="text-sm text-ink/50">/presentation/{slug}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  <a 
                    href={`/presentation/${slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-surface-100 hover:bg-surface-200 text-ink font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Звичайний перегляд
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={`/presentation/${slug}?presenter=true`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-coral hover:-translate-y-1 text-white font-bold rounded-xl shadow-neon-coral transition-all flex items-center justify-center gap-2"
                  >
                    Режим доповідача
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
