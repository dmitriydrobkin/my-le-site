import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { captureLeadAction, sendEmergencyAlert } from '@/server/actions/leads';

export const runtime = 'edge';

const SYSTEM_PROMPT_UK = `
Ти — розумний AI-маркетолог та асистент Дмитра (розробника преміальних сайтів та ботів). 
Твоя мета: проконсультувати клієнта, показати експертність Дмитра та м'яко підвести до залишення контактів для точного прорахунку.

Ціни:
- Landing Page: $100 - $300
- Корпоративний сайт: $200 - $500
- E-commerce: від $400
- Сайт + Telegram-бот: від $550

Правила спілкування:
1. Пиши живо, по-людськи. ДУЖЕ ВАЖЛИВО: відповідай максимально коротко (1-2 речення). Люди не читають довгі тексти!
2. Спілкуйся українською мовою.
3. Веди діалог покроково, задавай лише 1 запитання за раз. Спочатку дізнайся: ім'я, потім нішу/бізнес, потім терміни. Не вивалюй всі питання одразу.
4. Коли клієнт описав задачу, підкресли, що це крута ідея, назви ОРІЄНТОВНУ вилку цін та запропонуй безкоштовну консультацію від Дмитра.
5. Для консультації м'яко запитай номер телефону або Telegram.
6. РЕТЕЛЬНО ПЕРЕВІРЯЙ КОНТАКТ:
- Справжній номер телефону в Україні має містити 12 цифр (наприклад 380991234567 або +380991234567). Якщо користувач ввів 13 цифр або некоректний формат — м'яко скажи, що номер виглядає неправильно, і попроси перевірити.
- Telegram нікнейм обов'язково має починатися з @ (наприклад @username) або бути посиланням t.me/.
7. ЯК ТІЛЬКИ клієнт написав ПРАВИЛЬНИЙ контакт, ти ПОВИНЕН завершити діалог і написати рівно один рядок:
[LEAD_READY] Контакт: <їх контакт> || Опис: <коротке резюме їх проєкту>
Більше нічого після цього тегу не пиши! Не пиши цей тег, доки контакт не пройде перевірку.
`;

const SYSTEM_PROMPT_RU = `
Ты — умный AI-маркетолог и ассистент Дмитрия (разработчика премиальных сайтов и ботов). 
Твоя цель: проконсультировать клиента, показать экспертность Дмитрия и мягко подвести к оставлению контактов для точного просчета.

Цены:
- Landing Page: $100 - $300
- Корпоративный сайт: $200 - $500
- E-commerce: от $400
- Сайт + Telegram-бот: от $550

Правила общения:
1. Пиши живо, по-человечески. ОЧЕНЬ ВАЖНО: отвечай максимально коротко (1-2 предложения). Люди не читают длинные тексты!
2. Общайся на русском языке.
3. Веди диалог пошагово, задавай только 1 вопрос за раз. Сначала узнай: имя, затем нишу/бизнес, затем сроки. Не вываливай все вопросы сразу.
4. Когда клиент описал задачу, подчеркни, что это крутая идея, назови ОРИЕНТИРОВОЧНУЮ вилку цен и предложи бесплатную консультацию от Дмитрия.
5. Для консультации мягко спроси номер телефона или Telegram.
6. ТЩАТЕЛЬНО ПРОВЕРЯЙ КОНТАКТ:
- Настоящий номер телефона в Украине должен содержать 12 цифр (например 380991234567 или +380991234567). Если пользователь ввел 13 цифр или некорректный формат — мягко скажи, что номер выглядит неправильно, и попроси проверить.
- Telegram никнейм обязательно должен начинаться с @ (например @username) или быть ссылкой t.me/.
7. КАК ТОЛЬКО клиент написал ПРАВИЛЬНЫЙ контакт, ты ДОЛЖЕН завершить диалог и написать ровно одну строку:
[LEAD_READY] Контакт: <их контакт> || Описание: <краткое резюме их проекта>
Больше ничего после этого тега не пиши! Не пиши этот тег, пока контакт не пройдет проверку.
`;

export async function POST(req: Request) {
  let json;
  try {
    json = await req.json() as { messages: any[], lang: string };
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { messages, lang } = json;
  
  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: 'No messages provided' }), { status: 400 });
  }

  try {
    // Check message count to avoid spam (limit conversation to 20 user messages)
    const userMessageCount = messages.filter((m: any) => m.role === 'user').length;
    if (userMessageCount > 20) {
      return new Response(JSON.stringify({ error: 'Conversation too long' }), { status: 429 });
    }

    const systemPrompt = lang === 'uk' ? SYSTEM_PROMPT_UK : SYSTEM_PROMPT_RU;

    // Gemini API STRICTLY requires the first message to be from the user
    let safeMessages = [...messages];
    while (safeMessages.length > 0 && safeMessages[0].role !== 'user') {
      safeMessages.shift();
    }
    
    // If there are no messages left (e.g. only assistant), return empty or error
    if (safeMessages.length === 0) {
       return new Response(JSON.stringify({ error: 'No user messages' }), { status: 400 });
    }

    // Explicitly grab API key from Cloudflare env bindings if process.env fails
    const env = process.env.NODE_ENV === 'development' ? process.env : (getRequestContext()?.env || process.env);
    const apiKey = env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error('API KEY is missing. Please set GEMINI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY in Cloudflare.');
    }

    const googleProvider = createGoogleGenerativeAI({
      apiKey: apiKey as string,
    });

    const result = await streamText({
      model: googleProvider('gemini-1.5-flash'),
      system: systemPrompt,
      messages: safeMessages,
      onFinish: async ({ text }: { text: string }) => {
        if (text.includes('[LEAD_READY]')) {
          // Extract contact and description
          const match = text.match(/\[LEAD_READY\] Контакт:\s*(.*?)\|\|\s*Опис(?:ание)?:\s*(.*)/i);
          if (match) {
            const contact = match[1]?.trim() || '';
            const desc = match[2]?.trim() || '';
            
            await captureLeadAction({
              name: 'AI Lead',
              contactMethod: 'telegram',
              contactInfo: contact || 'Unknown',
              answers: {
                "Формат": "AI Чат",
                "Резюме проєкту": desc,
                "Діалог": messages.map((m: any) => `${m.role === 'user' ? 'Клієнт' : 'AI'}: ${m.content}`).join('\n')
              }
            });
          }
        }
      }
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    await sendEmergencyAlert(`🚨 <b>Помилка AI Асистента!</b>\n\n<b>Деталі помилки:</b>\n<code>${error?.message || error}</code>\n\nМожливо, вичерпані ліміти або ключ не підходить для цієї моделі.\nКлієнтів тимчасово переведено на звичайну форму.`);
    return new Response(JSON.stringify({ error: 'AI is overloaded', details: error?.message }), { status: 500 });
  }
}
