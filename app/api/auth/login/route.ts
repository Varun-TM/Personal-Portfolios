import { NextRequest, NextResponse } from 'next/server'
import { checkPassword, createSession, SESSION_COOKIE } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  let password = ''
  try {
    const body = await req.json()
    password = String(body?.password ?? '')
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const token = await createSession()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  return res
}
