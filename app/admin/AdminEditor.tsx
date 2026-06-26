'use client'

import { useState } from 'react'
import { iconNames } from '@/lib/icons'

type Json = any

function isImageKey(key: string, value: Json): boolean {
  const k = key.toLowerCase()
  if (k.includes('image') || k === 'img' || k.includes('photo') || k.includes('avatar')) {
    return true
  }
  if (typeof value === 'string') {
    return /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(value)
  }
  return false
}

function isIconKey(key: string): boolean {
  return key.toLowerCase() === 'icon'
}

function prettyLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim()
}

/** Build a blank value matching the shape of an existing template. */
function blankLike(template: Json): Json {
  if (Array.isArray(template)) return template.length ? [blankLike(template[0])] : ['']
  if (template && typeof template === 'object') {
    const o: Json = {}
    for (const k of Object.keys(template)) o[k] = blankLike(template[k])
    return o
  }
  if (typeof template === 'number') return 0
  if (typeof template === 'boolean') return false
  return ''
}

function ImageField({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState('')

  async function handleUpload(file: File) {
    setUploading(true)
    setErr('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      onChange(data.url)
    } catch (e: any) {
      setErr(e.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/uploads/your-image.png"
          className="flex-1 px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none"
        />
        <label className="px-3 py-2 rounded bg-primary/20 border border-primary/40 text-primary text-sm font-medium cursor-pointer hover:bg-primary/30 whitespace-nowrap">
          {uploading ? 'Uploading…' : 'Upload'}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handleUpload(f)
            }}
          />
        </label>
      </div>
      {err && <p className="text-error text-xs">{err}</p>}
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={value}
          alt="preview"
          className="h-24 rounded border border-white/10 object-contain bg-black/20"
        />
      )}
    </div>
  )
}

function Field({
  fieldKey,
  value,
  onChange,
}: {
  fieldKey: string
  value: Json
  onChange: (v: Json) => void
}) {
  // Image fields
  if (typeof value === 'string' && isImageKey(fieldKey, value)) {
    return <ImageField value={value} onChange={onChange} />
  }

  // Icon picker
  if (typeof value === 'string' && isIconKey(fieldKey)) {
    // Emoji icons (experience) stay as free text; named icons get a dropdown
    const isNamed = iconNames.includes(value)
    if (isNamed || /^[A-Z]/.test(value)) {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none"
        >
          {!iconNames.includes(value) && <option value={value}>{value}</option>}
          {iconNames.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      )
    }
    // emoji / free text
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none"
      />
    )
  }

  // String
  if (typeof value === 'string') {
    const long = value.length > 60 || value.includes('\n')
    return long ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={Math.min(8, Math.max(3, Math.ceil(value.length / 60)))}
        className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none resize-y"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none"
      />
    )
  }

  // Number
  if (typeof value === 'number') {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        className="w-40 px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none"
      />
    )
  }

  // Boolean
  if (typeof value === 'boolean') {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 accent-primary"
      />
    )
  }

  // Array
  if (Array.isArray(value)) {
    return (
      <div className="space-y-3 pl-3 border-l-2 border-primary/20">
        {value.map((item, i) => (
          <div key={i} className="flex gap-2 items-start">
            <div className="flex-1">
              <Field
                fieldKey={fieldKey}
                value={item}
                onChange={(v) => {
                  const next = [...value]
                  next[i] = v
                  onChange(next)
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => onChange(value.filter((_, idx) => idx !== i))}
              className="px-2 py-1 rounded bg-error/20 border border-error/40 text-error text-xs hover:bg-error/30 mt-1"
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...value, blankLike(value[0] ?? '')])}
          className="px-3 py-1.5 rounded bg-primary/20 border border-primary/40 text-primary text-xs font-medium hover:bg-primary/30"
        >
          + Add item
        </button>
      </div>
    )
  }

  // Object
  if (value && typeof value === 'object') {
    return (
      <div className="space-y-4 p-4 rounded-lg bg-white/[0.02] border border-white/10">
        {Object.keys(value).map((k) => (
          <div key={k}>
            <label className="block text-xs font-semibold text-white/60 mb-1.5">
              {prettyLabel(k)}
            </label>
            <Field
              fieldKey={k}
              value={value[k]}
              onChange={(v) => onChange({ ...value, [k]: v })}
            />
          </div>
        ))}
      </div>
    )
  }

  // null / undefined fallback
  return (
    <input
      type="text"
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white focus:border-primary/50 focus:outline-none"
    />
  )
}

export default function AdminEditor({
  section,
  initial,
}: {
  section: string
  initial: Json
}) {
  const [data, setData] = useState<Json>(initial)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  async function save() {
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch(`/api/content/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json()
      if (!res.ok) throw new Error(body.error || 'Save failed')
      setMessage({ type: 'ok', text: 'Saved! The live site has been updated.' })
    } catch (e: any) {
      setMessage({ type: 'err', text: e.message })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <Field fieldKey={section} value={data} onChange={setData} />

      <div className="sticky bottom-0 -mx-6 px-6 py-4 bg-background/95 backdrop-blur border-t border-white/10 flex items-center gap-4">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save changes'}
        </button>
        {message && (
          <span className={message.type === 'ok' ? 'text-success text-sm' : 'text-error text-sm'}>
            {message.text}
          </span>
        )}
      </div>
    </div>
  )
}
