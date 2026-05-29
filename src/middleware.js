import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // Check if host starts with www.
  if (host && host.startsWith('www.')) {
    const newHost = host.slice(4); // Remove 'www.'
    url.host = newHost;
    url.protocol = 'https:'; // Enforce HTTPS
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Limit the middleware to run only on page routes (excluding static files, api, etc.)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.png, og-image.png, etc (public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
