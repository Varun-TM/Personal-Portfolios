import Link from 'next/link'
import { listSections } from '@/lib/content'
import LogoutButton from './LogoutButton'

export const dynamic = 'force-dynamic'

const SECTION_META: Record<string, { label: string; hint: string }> = {
  hero: { label: 'Hero', hint: 'Headline, subheading, CTA, social links' },
  about: { label: 'About', hint: 'Philosophy, story, stats, values, impact' },
  experience: { label: 'Experience', hint: 'Career timeline — all roles' },
  projects: { label: 'Projects', hint: 'Case studies, metrics, architecture' },
  skills: { label: 'Skills', hint: 'Categories, tags, expertise summary' },
  achievements: { label: 'Achievements', hint: 'Counters, accomplishments, security' },
  education: { label: 'Education', hint: 'Degrees, certifications, learning' },
  contact: { label: 'Contact', hint: 'Email, phone, location, socials' },
}

export default async function AdminDashboard() {
  const sections = await listSections()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Content Manager</h1>
          <p className="text-white/50 text-sm mt-1">
            Edit any section below. Changes go live instantly — no rebuild needed.
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((section) => {
          const meta = SECTION_META[section] || { label: section, hint: 'Edit content' }
          return (
            <Link
              key={section}
              href={`/admin/edit/${section}`}
              className="block glass rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-lg capitalize">{meta.label}</h2>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Edit →
                </span>
              </div>
              <p className="text-white/50 text-sm">{meta.hint}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
