import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getSection, saveSection } from '@/lib/content'

export const runtime = 'nodejs'

/** Read a section (public). */
export async function GET(
  _req: NextRequest,
  { params }: { params: { section: string } }
) {
  const data = await getSection(params.section)
  if (data === undefined) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 })
  }
  return NextResponse.json(data)
}

/** Update a section (auth-gated by middleware). */
export async function PUT(
  req: NextRequest,
  { params }: { params: { section: string } }
) {
  let value: any
  try {
    value = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  try {
    await saveSection(params.section, value)
    // Refresh the public site so edits show immediately
    revalidatePath('/')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[content] save failed:', err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
