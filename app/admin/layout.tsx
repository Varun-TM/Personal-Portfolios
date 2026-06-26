import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Admin — Portfolio',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="border-b border-white/10 bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/admin" className="font-bold text-lg">
            Portfolio <span className="text-primary">Admin</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-sm text-white/60 hover:text-white"
          >
            View site ↗
          </Link>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-6 py-8">{children}</main>
    </div>
  )
}
