import { SignJWT, jwtVerify } from 'jose'

/**
 * Minimal password-based auth, database-free.
 *
 * - ADMIN_PASSWORD: the single admin password (env var)
 * - AUTH_SECRET: secret used to sign the session cookie (env var)
 *
 * A signed JWT is stored in an httpOnly cookie. Verification works in both
 * the Edge middleware and Node route handlers because jose uses Web Crypto.
 */

export const SESSION_COOKIE = 'admin_session'
const SESSION_TTL = '7d'

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 16) {
    throw new Error('AUTH_SECRET is not set or too short (min 16 chars)')
  }
  return new TextEncoder().encode(secret)
}

/** Constant-time-ish password check against the env credential. */
export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || ''
  if (!expected) return false
  if (input.length !== expected.length) return false
  let mismatch = 0
  for (let i = 0; i < expected.length; i++) {
    mismatch |= input.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return mismatch === 0
}

/** Create a signed session token. */
export async function createSession(): Promise<string> {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(SESSION_TTL)
    .sign(getSecret())
}

/** Verify a session token. Returns true if valid and not expired. */
export async function verifySession(token: string | undefined): Promise<boolean> {
  if (!token) return false
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload.role === 'admin'
  } catch {
    return false
  }
}
