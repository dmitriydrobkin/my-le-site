import { PresentationViewer, SlideData } from '@/components/PresentationViewer';
import { Metadata } from 'next';
import { CheckCircle2, AlertCircle, ArrowRight, XCircle, Clock, MousePointerClick, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Презентація: Оптимізація воронки | Insta Bank',
  description: 'Інтерактивна презентація для Insta Bank',
};

export default function IrynaGlobinaPresentationPage() {
  const slides: SlideData[] = [
    // Slide 1
    {
      id: 'slide-1',
      content: (
        <div className="text-center space-y-8">
          <div className="inline-block px-5 py-2 rounded-full bg-coral/10 text-coral font-display text-sm font-bold tracking-widest uppercase mb-4 shadow-glass">
            Спецпроєкт для Insta Bank
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            Оптимізація воронки <br className="hidden md:block"/>
            <span className="text-coral relative inline-block">
              залучення
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-coral/20 rounded-full blur-sm"></span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-ink/70 max-w-3xl mx-auto leading-relaxed mt-8 font-medium">
            Як перетворити лідів на клієнтів автоматично та звільнити ваш час від рутинних діагностик.
          </p>
        </div>
      )
    },
    // Slide 2
    {
      id: 'slide-2',
      content: (
        <div className="space-y-12 md:space-y-16 w-full max-w-5xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Точка А</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Що ми маємо зараз?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Zap className="w-8 h-8"/>, title: 'Преміальний продукт', desc: 'Чеки $1400 - $2000' },
              { icon: <ShieldCheck className="w-8 h-8"/>, title: 'Експертний бекграунд', desc: 'Дисципліна + результат' },
              { icon: <CheckCircle2 className="w-8 h-8"/>, title: 'Сильний маркетинг', desc: 'Глибоке розуміння болей цільової аудиторії' }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[2rem] bg-white shadow-glass hover:shadow-glass-hover transition-all duration-500 border border-black/5 group">
                <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center text-coral mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-ink/60 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 3
    {
      id: 'slide-3',
      content: (
        <div className="space-y-12 w-full max-w-4xl text-center">
          <div className="space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Вузьке горлечко</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Де ми втрачаємо гроші?</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-display font-bold text-ink/50 bg-white p-8 rounded-[2rem] shadow-glass border border-black/5">
            <span className="text-ink">Instagram</span>
            <ArrowRight className="text-coral w-8 h-8 hidden md:block" />
            <ArrowRight className="text-coral w-8 h-8 rotate-90 md:hidden" />
            <span className="text-coral px-4 py-2 bg-coral/10 rounded-xl relative">
              Google Форма
              <span className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg animate-bounce">!</span>
            </span>
            <ArrowRight className="text-coral w-8 h-8 hidden md:block" />
            <ArrowRight className="text-coral w-8 h-8 rotate-90 md:hidden" />
            <span className="text-ink">Відеоурок</span>
          </div>

          <div className="inline-flex items-center gap-4 p-6 bg-red-50 text-red-600 rounded-2xl font-medium text-lg border border-red-100 shadow-sm mx-auto">
            <AlertCircle className="w-8 h-8 shrink-0" />
            <p className="text-left text-xl"><strong>Бар'єр:</strong> 21 питання в анкеті</p>
          </div>
        </div>
      )
    },
    // Slide 4
    {
      id: 'slide-4',
      content: (
        <div className="space-y-12 w-full max-w-4xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Наслідки для бізнесу</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Як це б'є по конверсії та вашому часу?</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { title: 'Відсів потенційних клієнтів', desc: 'ще на старті, через лінь писати великі відповіді.' },
              { title: 'Витрата вашого часу', desc: 'на ручний пошук платоспроможних лідів у Google Таблицях.' },
              { title: 'Порожні зідзвони', desc: 'з нецільовими людьми, чий бюджет "до $100".' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 md:p-8 bg-white rounded-3xl shadow-glass border border-black/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xl">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-display">{item.title}</h3>
                  <p className="text-ink/60 text-lg mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 5
    {
      id: 'slide-5',
      content: (
        <div className="text-center space-y-10 w-full max-w-3xl">
          <div className="space-y-4">
            <div className="text-cyan-600 font-display font-bold tracking-widest uppercase">Точка Б (Рішення)</div>
            <h2 className="font-display text-5xl md:text-7xl font-black">Автоматизована <br/><span className="text-coral">Telegram-воронка</span></h2>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-coral/5 blur-3xl rounded-full"></div>
            <div className="relative p-10 md:p-14 bg-white/50 backdrop-blur-md rounded-[3rem] shadow-glass border border-white/20">
              <p className="text-2xl md:text-3xl text-ink/80 leading-relaxed font-medium">
                Впроваджуємо розумного чат-бота, який працює як ваш <strong className="text-ink">особистий асистент-кваліфікатор 24/7</strong>.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6
    {
      id: 'slide-6',
      content: (
        <div className="space-y-12 w-full max-w-4xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Крок 1. Миттєва довіра</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Видача лід-магніту за 1 секунду</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-12 bg-white rounded-[2rem] shadow-glass border border-black/5 space-y-8">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-center">
                Клієнт переходить за посиланням і <strong className="text-coral">миттєво отримує відеоурок</strong> <em>"Мій блог очима клієнта"</em>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-xl text-ink/70 font-medium">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" /> Без допитів
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" /> Миттєва лояльність
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 7
    {
      id: 'slide-7',
      content: (
        <div className="space-y-12 w-full max-w-4xl text-center">
          <div className="space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Крок 2. Гейміфікована кваліфікація</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">4 питання замість 21</h2>
          </div>
          
          <p className="text-2xl text-ink/70 font-medium">
            Бот запитує: <br/><em className="text-ink">"Як тобі урок? Дай відповідь на 4 швидкі питання"</em>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {[
              { q: 'Ваша ніша?' },
              { q: 'Поточний дохід?', badge: 'Кнопки' },
              { q: 'Головна мета?' },
              { q: 'Бюджет на розвиток?', badge: 'від $100 до $1000+' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-coral/30 transition-colors">
                <span className="font-bold text-xl flex items-center gap-4">
                  <span className="text-coral/50 font-display">{i+1}.</span> {item.q}
                </span>
                {item.badge && (
                  <span className="px-3 py-1 bg-surface-100 text-ink/50 text-sm font-bold uppercase tracking-wider rounded-lg">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 8
    {
      id: 'slide-8',
      content: (
        <div className="space-y-12 w-full max-w-5xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Крок 3. Розумна сегментація (Магія)</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Автоматичний розподіл лідів</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 bg-white rounded-[2rem] shadow-glass border border-red-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-2xl mb-6">
                🔴
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Бюджет до $100</h3>
              <p className="text-ink/70 text-lg leading-relaxed">
                Бот автоматично видає чек-лист і залишає прогріватися в каналі. <br/><strong className="text-ink">Ви не витрачаєте свій час.</strong>
              </p>
            </div>
            
            <div className="p-8 md:p-10 bg-white rounded-[2rem] shadow-glass border border-green-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center font-bold text-2xl mb-6">
                🟢
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Бюджет $500+</h3>
              <p className="text-ink/70 text-lg leading-relaxed">
                Бот автоматично запрошує на діагностику і видає персональне посилання на <strong className="text-coral">Calendly</strong>.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 9
    {
      id: 'slide-9',
      content: (
        <div className="space-y-12 w-full max-w-4xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Ваш результат (ROI)</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Що отримує «Insta Bank»?</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: '📈', text: 'Більше лідів (завдяки легкому входу в бота).' },
              { icon: '📅', text: 'Календар заповнений ТІЛЬКИ цільовими людьми (готовими платити).', highlight: true },
              { icon: '⏳', text: 'Економія десятків годин вашого часу щотижня.' }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-6 p-6 md:p-8 rounded-[2rem] border transition-all ${item.highlight ? 'bg-coral text-white border-coral shadow-neon-coral scale-[1.02]' : 'bg-white border-black/5 shadow-glass'}`}>
                <div className="text-4xl">{item.icon}</div>
                <p className={`text-xl md:text-2xl font-medium ${item.highlight ? 'text-white' : 'text-ink'}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 10
    {
      id: 'slide-10',
      content: (
        <div className="space-y-12 w-full max-w-4xl text-center">
          <div className="space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Реалізація "Під Ключ"</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Як ми це впровадимо?</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left mt-12">
            {[
              { step: '01', title: 'Затвердження', desc: 'логіки та текстів' },
              { step: '02', title: 'Технічна збірка', desc: 'бота та інтеграція кнопок' },
              { step: '03', title: 'Підключення', desc: 'Calendly для авто-запису' },
              { step: '04', title: 'Запуск', desc: 'Тестування та реліз' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl shadow-glass border border-black/5 relative pt-12">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-coral text-white font-display font-bold flex items-center justify-center rounded-xl shadow-neon-coral">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-ink/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return <PresentationViewer slides={slides} />;
}
