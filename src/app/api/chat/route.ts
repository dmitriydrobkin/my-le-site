import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { captureLeadAction, sendEmergencyAlert } from '@/server/actions/leads';

export const runtime = 'edge';

const SYSTEM_PROMPT_UK = `
Ти — розумний AI-асистент Дмитра (розробника сайтів та ботів). 
Твоя мета: дізнатися, що потрібно клієнту, та взяти його контактні дані.
Ціни для орієнтиру:
- Landing Page (Лендінг): від $400
- Корпоративний сайт: від $700
- E-commerce (Інтернет-магазин): від $1500
- Telegram-боти: від $300
Правила:
1. Пиши коротко, без зайвої води. 1-2 речення на повідомлення. Будь привітним.
2. Спілкуйся українською мовою.
3. Спочатку запитай нішу та базовий функціонал, якщо клієнт ще не сказав.
4. Потім скажи приблизну ціну і обов'язково запитай Telegram або телефон для зв'язку.
5. Як тільки користувач напише свій номер, @username, або email, ти ПОВИНЕН завершити діалог і написати у відповіді рівно один рядок:
[LEAD_READY] Контакт: <їх контакт> || Опис: <коротке резюме їх проєкту>
Більше нічого після цього тегу не пиши. Не пиши [LEAD_READY] доки не отримаєш контакт.
`;

const SYSTEM_PROMPT_RU = `
Ты — умный AI-ассистент Дмитрия (разработчика сайтов и ботов). 
Твоя цель: узнать, что нужно клиенту, и взять его контактные данные.
Цены для ориентира:
- Landing Page (Лендинг): от $400
- Корпоративный сайт: от $700
- E-commerce (Интернет-магазин): от $1500
- Telegram-боты: от $300
Правила:
1. Пиши коротко, без лишней воды. 1-2 предложения на сообщение. Будь приветлив.
2. Общайся на русском языке.
3. Сначала спроси нишу и базовый функционал, если клиент еще не сказал.
4. Затем скажи примерную цену и обязательно спроси Telegram или телефон для связи.
5. Как только пользователь напишет свой номер, @username, или email, ты ДОЛЖЕН завершить диалог и написать в ответ ровно одну строку:
[LEAD_READY] Контакт: <их контакт> || Описание: <краткое резюме проекта>
Больше ничего после этого тега не пиши. Не пиши [LEAD_READY] пока не получишь контакт.
`;

export async function POST(req: Request) {
  try {
    const json = await req.json() as { messages: any[], lang: string };
    const { messages, lang } = json;
    
    // Check message count to avoid spam (limit conversation to 10 user messages)
    const userMessageCount = messages.filter((m: any) => m.role === 'user').length;
    if (userMessageCount > 10) {
      return new Response(JSON.stringify({ error: 'Conversation too long' }), { status: 429 });
    }

    const systemPrompt = lang === 'uk' ? SYSTEM_PROMPT_UK : SYSTEM_PROMPT_RU;

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages,
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
    await sendEmergencyAlert('🚨 <b>Помилка AI Асистента!</b>\nМожливо, вичерпані ліміти Gemini API (500/day, 15/min).\nКлієнтів тимчасово переведено на звичайну форму.');
    return new Response(JSON.stringify({ error: 'AI is overloaded' }), { status: 500 });
  }
}
