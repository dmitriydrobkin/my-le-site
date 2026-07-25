import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ canIframe: false });
  }

  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MalyshevBot/1.0)',
      },
      // Short timeout to avoid hanging
      signal: AbortSignal.timeout(3000),
    });

    const xFrameOptions = response.headers.get('x-frame-options');
    const csp = response.headers.get('content-security-policy');

    let canIframe = true;

    if (xFrameOptions) {
      const xfo = xFrameOptions.toLowerCase();
      if (xfo.includes('deny') || xfo.includes('sameorigin')) {
        canIframe = false;
      }
    }

    if (csp) {
      const cspLower = csp.toLowerCase();
      if (cspLower.includes("frame-ancestors 'none'") || cspLower.includes("frame-ancestors 'self'")) {
        canIframe = false;
      }
    }

    return NextResponse.json({ canIframe });
  } catch (error) {
    // If we get a network error, timeout, or block, we assume we CAN iframe it,
    // so we don't accidentally block sites that just block our bot/HEAD requests.
    return NextResponse.json({ canIframe: true });
  }
}
