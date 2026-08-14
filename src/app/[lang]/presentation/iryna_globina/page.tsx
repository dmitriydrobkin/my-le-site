import { PresentationViewer, SlideData } from '@/components/PresentationViewer';
import { Metadata } from 'next';
import { CheckCircle2, AlertCircle, ArrowRight, XCircle, Clock, MousePointerClick, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Презентація: Оптимізація воронки | Insta Bank',
  description: 'Інтерактивна презентація для Insta Bank',
};

export default async function IrynaGlobinaPresentationPage() {
  const isAdmin = await (async () => {
    try {
      const { verifyAdminSession } = await import('@/server/actions/auth');
      await verifyAdminSession();
      return true;
    } catch {
      return false;
    }
  })();

  const slides: SlideData[] = [
    // Slide 1
    {
      id: 'slide-1',
      notes: (
        <div className="space-y-4">
          <p><strong>Ірино, вітаю! Дякую за ваш час.</strong></p>
          <p>Я детально проаналізував вашу поточну воронку для проєкту «Insta Bank». Сьогодні я хочу показати вам, як ми можемо кардинально оптимізувати процес залучення клієнтів.</p>
          <p><strong>Головна мета:</strong> перетворити холодних лідів на готових клієнтів автоматично, і найголовніше — повністю звільнити ваш час від рутинних переписок і нецільових діагностик. Давайте подивимось, як це працює.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p>Спочатку давайте зафіксуємо нашу <strong>Точку А</strong>.</p>
          <p>У вас просто чудовий, преміальний продукт з чеком від $1400 до $2000. У вас глибокий експертний бекграунд — ваша дисципліна та тверді результати учнів говорять самі за себе. І у вас дуже сильний маркетинг, ви чудово розумієте болі аудиторії.</p>
          <p>Тобто фундамент — ідеальний. Проблеми з експертністю немає взагалі. Але є <strong>один технічний нюанс</strong> у самій воронці, який зараз краде ваші гроші.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p>Давайте подивимось на поточний шлях клієнта. Людина приходить з Instagram, далі переходить у Google Форму, і <strong>тільки після цього</strong> отримує обіцяний відеоурок.</p>
          <p><strong>Головний бар'єр тут — Google Форма на 21 питання.</strong></p>
          <p>Люди в інтернеті дуже ліниві. Заповнити стільки полів заради одного безкоштовного відеоуроку — це занадто великий бар'єр для холодного ліда. Вони дивляться на цю форму, закривають сторінку і йдуть.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p>Як це впливає на ваш бізнес?</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>По-перше, ми <strong>відсіюємо купу потенційних клієнтів</strong> ще на старті. Ті, хто міг би купити, просто лінуються писати есе у формі.</li>
            <li>По-друге, ви витрачаєте купу <strong>власного часу</strong> на ручний розбір цих таблиць, щоб знайти там адекватних людей.</li>
            <li>І по-третє — найгірше — це <strong>порожні зідзвони</strong>. Ви виходите на діагностику, витрачаєте годину свого часу, а в кінці чуєте: "у мене бюджет 100 доларів".</li>
          </ul>
          <p>Ваш час коштує дорого, ви не повинні проводити діагностики з тими, у кого апріорі немає грошей на ваше наставництво.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p>Як ми це вирішимо?</p>
          <p>Ми повністю прибираємо складну гугл форму і робимо процес легким, як гра.</p>
          <p>Ми впроваджуємо розумну автоматизовану Telegram-воронку. Замість мертвої таблиці у вас з'явиться <strong>розумний чат-бот</strong>, який працюватиме як ваш особистий асистент та кваліфікатор 24 на 7.</p>
          <p>Давайте детально подивимось на 3 кроки, як саме це буде працювати на практиці.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p><strong>Крок перший — ми змінюємо правила гри.</strong></p>
          <p>Людина переходить за посиланням і <strong>миттєво</strong>, без жодних довгих допитів, отримує обіцяний відеоурок "Мій блог очима клієнта".</p>
          <p>Чому це критично важливо? Це спрацьовує правило взаємного обміну. Людина одразу отримує від вас цінність. Вона ще нічого вам не дала, а ви вже вирішили її проблему. Це формує <strong>миттєву довіру і лояльність</strong>.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p><strong>Крок другий. Гейміфікація.</strong></p>
          <p>Коли людина подивилася урок і вже лояльна до вас, бот м'яко пише їй: <em>"Як тобі урок? Дай відповідь на 4 швидкі питання"</em>.</p>
          <p>І найголовніше: замість довгого тексту ми даємо їм прості <strong>кнопки</strong>.</p>
          <p>Натиснути 4 кнопки в Телеграмі займає рівно 15 секунд. Конверсія у відповідь тут у десятки разів вища, ніж у Google-формі, бо це сприймається як легка гра, а не як іспит.</p>
        </div>
      ),
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
      notes: (
        <div className="space-y-4">
          <p>І тут починається магія — <strong>крок третій</strong>. Це найголовніший слайд презентації.</p>
          <p>Бот сам аналізує відповіді користувача і <strong>автоматично розподіляє лідів</strong>.</p>
          <p>Якщо людина обирає бюджет "до 100 доларів" (червона зона), бот автоматично видає їй заохочувальний чек-лист і залишає прогріватися в каналі. <strong>Бот сам її відсіює!</strong> Ви навіть не бачите цього повідомлення і не витрачаєте свій час.</p>
          <p>АЛЕ якщо людина обирає бюджет "$500+" або "$1000+" (зелена зона), бот автоматично надсилає повідомлення: <em>"Супер, нам по дорозі"</em> і видає персональне посилання на ваш Calendly для запису на діагностику.</p>
        </div>
      ),
      content: (
        <div className="space-y-12 w-full max-w-5xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Крок 3. Розумна сегментація (Магія)</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Автоматичний <br/> розподіл лідів</h2>
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
      notes: (
        <div className="space-y-4">
          <p>Що в результаті отримує ваш проєкт?</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Більше лідів загалом</strong>, бо ми прибрали бар'єр входу у вигляді довгої форми.</li>
            <li>Ваш календар заповнений <strong>ТІЛЬКИ цільовими людьми</strong>. Ви заходите в зум і знаєте, що перед вами людина, яка готова платити $1500.</li>
            <li>Ви <strong>економите десятки годин</strong> свого часу щотижня, бо всю рутину з відбору та переписок взяв на себе бот.</li>
          </ol>
          <p>Ваша єдина задача тепер — просто відкрити календар, побачити запис і продати людині, яка вже кваліфікована.</p>
        </div>
      ),
      content: (
        <div className="space-y-12 w-full max-w-4xl">
          <div className="text-center space-y-4">
            <div className="text-coral font-display font-bold tracking-widest uppercase">Ваш результат (ROI)</div>
            <h2 className="font-display text-4xl md:text-6xl font-black">Що отримує <br/> «Insta Bank»?</h2>
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
      notes: (
        <div className="space-y-4">
          <p>Як ми можемо це реалізувати?</p>
          <p>Я пропоную формат роботи <strong>"Під ключ"</strong>. Вам не доведеться розбиратися в технічних налаштуваннях.</p>
          <p>Процес максимально комфортний для вас:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Ми разом затверджуємо логіку та тексти повідомлень.</li>
            <li>Я повністю збираю технічну частину бота.</li>
            <li>Я підключаю та налаштовую ваш Calendly для автоматичного запису.</li>
            <li>Ми тестуємо і запускаємо воронку в роботу.</li>
          </ol>
          <p>Я беру на себе <strong>всю технічну рутину</strong>. Від вас потрібно лише затвердити етапи.</p>
          <p className="text-2xl font-bold mt-6 text-coral">Як вам така ідея? Працюємо?</p>
        </div>
      ),
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

  return <PresentationViewer slides={slides} isAdmin={isAdmin} />;
}
