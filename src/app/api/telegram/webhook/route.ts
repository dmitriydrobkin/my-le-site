import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { telegramChats } from '@/server/db/schema';
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