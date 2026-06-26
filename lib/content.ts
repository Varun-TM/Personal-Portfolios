import 'server-only'
import { promises as fs } from 'fs'
import path from 'path'

/**
 * Flat-file content store (no database).
 *
 * - Default content is baked into the image at content/seed.json
 * - Live content lives in DATA_DIR/content.json which is a mounted Docker
 *   volume so edits persist across container restarts and image rebuilds.
 * - On first read, if the live file does not exist yet, the seed is copied in.
 */

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data')
const CONTENT_FILE = path.join(DATA_DIR, 'content.json')
const SEED_FILE = path.join(process.cwd(), 'content', 'seed.json')

export type Content = Record<string, any>

async function readSeed(): Promise<Content> {
  const raw = await fs.readFile(SEED_FILE, 'utf-8')
  return JSON.parse(raw)
}

async function ensureContentFile(): Promise<void> {
  try {
    await fs.access(CONTENT_FILE)
  } catch {
    // Live file missing -> seed it
    const seed = await readSeed()
    await fs.mkdir(DATA_DIR, { recursive: true })
    await fs.writeFile(CONTENT_FILE, JSON.stringify(seed, null, 2), 'utf-8')
  }
}

/** Read the full content object. Falls back to seed if anything goes wrong. */
export async function getContent(): Promise<Content> {
  try {
    await ensureContentFile()
    const raw = await fs.readFile(CONTENT_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    console.error('[content] read failed, using seed:', err)
    try {
      return await readSeed()
    } catch {
      return {}
    }
  }
}

/** Read a single top-level section (hero, about, experience, ...). */
export async function getSection<T = any>(section: string): Promise<T | undefined> {
  const content = await getContent()
  return content[section] as T | undefined
}

/** Overwrite a single top-level section and persist to disk. */
export async function saveSection(section: string, value: any): Promise<Content> {
  const content = await getContent()
  content[section] = value
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), 'utf-8')
  return content
}

/** List the editable section keys (derived from seed so the admin stays in sync). */
export async function listSections(): Promise<string[]> {
  const content = await getContent()
  return Object.keys(content)
}
