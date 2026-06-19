import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { telegramChats, leads } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // Отключаем кэширование Cloudflare

export async function POST(req: Request) {
  try {
    const { env } = getRequestContext();
    const db = drizzle((env as any).DB);
    const body: any = await req.json();

    if (body.message && body.message.text) {
      const text = body.message.text.trim();
      const chatId = String(body.message.chat.id);
      const chatType = body.message.chat.type;
      const chatTitle = body.message.chat.title || body.message.chat.username || body.message.chat.first_name || 'Unknown';
      
      // Надежное чтение переменных с очисткой невидимых пробелов
      const rawAdminPassword = (env as any).ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || '';
      const adminPassword = rawAdminPassword.trim();
      const botToken = ((env as any).TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN || '').trim();

      if (text.startsWith('/start_leads')) {
        // Достаем пароль из сообщения и тоже чистим его от пробелов
        const password = text.replace('/start_leads', '').trim();

        if (password === adminPassword) {
          const existingChat = await db.select().from(telegramChats).where(eq(telegramChats.id, chatId)).get();

          if (!existingChat) {
            await db.insert(telegramChats).values({
              id: chatId,
              title: chatTitle,
              type: chatType,
              isActive: true,
            }).run();
          } else {
            await db.update(telegramChats).set({ isActive: true }).where(eq(telegramChats.id, chatId)).run();
          }

          await sendTelegramMessage(botToken, chatId, '✅ Чат успешно подключен к рассылке заявок с сайта!');
        } else {
          await sendTelegramMessage(botToken, chatId, '❌ Неверный пароль доступа.');
        }
      }
    }

    if (body.callback_query) {
      const callbackQuery = body.callback_query;
      const data = callbackQuery.data; // e.g. "s:123:contacted"
      const chatId = String(callbackQuery.message?.chat?.id);
      const messageId = callbackQuery.message?.message_id;
      const botToken = ((env as any).TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN || '').trim();

      if (data && data.startsWith('s:')) {
        const parts = data.split(':');
        if (parts.length === 3) {
          const leadId = Number(parts[1]);
          const newStatus = parts[2]; // 'contacted' | 'converted' | 'rejected'

          // Обновляем статус в БД
          await db.update(leads)
            .set({ status: newStatus as any })
            .where(eq(leads.id, leadId))
            .run();

          // Определяем красивый текст статуса
          let statusText = '';
          if (newStatus === 'contacted') statusText = '📞 В работе';
          else if (newStatus === 'converted') statusText = '✅ Наш клиент';
          else if (newStatus === 'rejected') statusText = '❌ Отказ/Спам';

          const oldText = callbackQuery.message?.text || '';
          // Добавляем к старому тексту статус, если его там еще нет
          let newText = oldText;
          if (newText.includes('--- СТАТУС:')) {
            newText = newText.replace(/--- СТАТУС: .*? ---/, `--- СТАТУС: ${statusText} ---`);
          } else {
            newText = `${newText}\n\n--- СТАТУС: ${statusText} ---`;
          }

          // Редактируем сообщение (убираем кнопки или обновляем текст)
          await fetch(`https://api.telegram.org/bot${botToken}/editMessageText`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              message_id: messageId,
              text: newText,
              parse_mode: 'HTML',
              // Больше не отправляем кнопки, так как статус изменен
              reply_markup: { inline_keyboard: [] }
            })
          });

          // Отвечаем на callback_query, чтобы убрать часики в Telegram
          await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              callback_query_id: callbackQuery.id,
              text: `Статус изменен на: ${statusText}`
            })
          });
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Telegram webhook error:', error);
    return NextResponse.json({ ok: true });
  }
}

async function sendTelegramMessage(token: string, chatId: string, text: string) {
  if (!token) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });
  } catch (e) {
    console.error('Failed to send message:', e);
  }
}