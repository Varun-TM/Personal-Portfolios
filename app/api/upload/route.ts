import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads')
const ALLOWED = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif']
const MAX_BYTES = 8 * 1024 * 1024 // 8MB

function sanitize(name: string): string {
  const ext = path.extname(name).toLowerCase()
  const base = path
    .basename(name, ext)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
  return `${base || 'image'}-${Date.now()}${ext}`
}

/** Upload an image to the public/uploads volume (auth-gated by middleware). */
export async function POST(req: NextRequest) {
  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const file = form.get('file')
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const ext = path.extname(file.name).toLowerCase()
  if (!ALLOWED.includes(ext)) {
    return NextResponse.json(
      { error: `Unsupported type. Allowed: ${ALLOWED.join(', ')}` },
      { status: 400 }
    )
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File too large (max 8MB)' }, { status: 400 })
  }

  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true })
    const filename = sanitize(file.name)
    const bytes = Buffer.from(await file.arrayBuffer())
    await fs.writeFile(path.join(UPLOAD_DIR, filename), bytes)
    return NextResponse.json({ ok: true, url: `/uploads/${filename}` })
  } catch (err) {
    console.error('[upload] failed:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
