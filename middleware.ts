import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE, verifySession } from './lib/auth'

/**
 * Protects the admin UI and content-write APIs.
 * Public site and read endpoints are untouched.
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get(SESSION_COOKIE)?.value
  const authed = await verifySession(token)

  // Allow the login page through unconditionally
  if (pathname === '/admin/login') {
    if (authed) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
    return NextResponse.next()
  }

  // Protect admin pages
  if (pathname.startsWith('/admin')) {
    if (!authed) {
      const url = new URL('/admin/login', req.url)
      url.searchParams.set('from', pathname)
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  // Protect write APIs (mutations only). Reads (GET) stay public.
  const isWriteApi =
    pathname.startsWith('/api/content') || pathname.startsWith('/api/upload')
  if (isWriteApi && req.method !== 'GET') {
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/content/:path*', '/api/upload/:path*'],
}
