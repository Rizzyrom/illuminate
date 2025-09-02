import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Always allow admin routes (TinaCMS admin interface)
  if (pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow maintenance page itself
  if (pathname === '/maintenance') {
    return NextResponse.next();
  }

  // Allow static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check maintenance mode via environment variable (set by deployment or manual config)
  const maintenanceEnabled = process.env.MAINTENANCE_MODE === 'true';
  
  if (maintenanceEnabled) {
    // Check if user is authenticated admin (TinaCMS session cookies)
    const hasAdminCookie = request.cookies.has('tina.admin') || 
                          request.cookies.has('tina-admin') ||
                          request.cookies.has('tinacms-auth') ||
                          request.headers.get('authorization');
    
    if (!hasAdminCookie) {
      // Redirect public visitors to maintenance page
      return NextResponse.redirect(new URL('/maintenance', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};