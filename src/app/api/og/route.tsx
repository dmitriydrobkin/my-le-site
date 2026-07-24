import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams, origin } = new URL(req.url);
    
    // Fallback values
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Створення висококонверсійних сайтів та ботів';

    const desc = searchParams.get('desc')?.slice(0, 150) || 'Автоматизація вашого бізнесу 24/7.';

    // Fetch fonts from the public folder using the request origin
    const [interBoldData, interRegularData] = await Promise.all([
      fetch(`${origin}/fonts/Inter-Bold.ttf`).then((res) => res.arrayBuffer()),
      fetch(`${origin}/fonts/Inter-Regular.ttf`).then((res) => res.arrayBuffer()),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#0c0a09', // tailwind surface (zinc-950)
            backgroundImage: 'radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
            fontFamily: 'Inter',
          }}
        >
          {/* Logo / Brand Name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 'auto',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'linear-gradient(to bottom right, #ff7e5f, #feb47b)',
                marginRight: '16px',
              }}
            />
            <span style={{ color: '#ffffff', fontSize: 32, fontWeight: 700 }}>Malyshev.Dev</span>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '40px',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                fontWeight: 400,
                color: '#a1a1aa', // zinc-400
                lineHeight: 1.4,
                maxWidth: '900px',
              }}
            >
              {desc}
            </p>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: 'flex',
              marginTop: 'auto',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px solid #27272a',
              paddingTop: '32px',
            }}
          >
            <span style={{ color: '#71717a', fontSize: 24, fontWeight: 400 }}>
              Розробка сайтів та Telegram-ботів
            </span>
            <span style={{ color: '#ffffff', fontSize: 24, fontWeight: 700, background: '#27272a', padding: '8px 16px', borderRadius: '8px' }}>
              Відкрити
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interBoldData,
            style: 'normal',
            weight: 700,
          },
          {
            name: 'Inter',
            data: interRegularData,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(`Error generating OG image: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
