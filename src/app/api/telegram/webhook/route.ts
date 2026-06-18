import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { telegramChats } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export const runtime = 'edge';

// We receive POST requests from Telegram here
export async function POST(req: Request) {
  try {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    const body: any = await req.json();

    // Check if it's a message
    if (body.message && body.message.text) {
      const text = body.message.text.trim();
      const chatId = String(body.message.chat.id);
      const chatType = body.message.chat.type;
      const chatTitle = body.message.chat.title || body.message.chat.username || body.message.chat.first_name || 'Unknown';
      
      const adminPassword = (env as any).ADMIN_PASSWORD;

      if (text.startsWith('/start_leads ')) {
        const password = text.split(' ')[1];

        if (password === adminPassword) {
          // Check if chat already exists
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

          // Reply to the chat
          await sendTelegramMessage((env as any).TELEGRAM_BOT_TOKEN, chatId, '✅ Чат успешно подключен к рассылке заявок с сайта!');
        } else {
          await sendTelegramMessage((env as any).TELEGRAM_BOT_TOKEN, chatId, '❌ Неверный пароль доступа.');
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Telegram webhook error:', error);
    // Always return 200 to Telegram so it doesn't retry infinitely
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
