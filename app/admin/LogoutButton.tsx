'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={logout}
      className="text-sm text-white/60 hover:text-error transition-colors"
    >
      Sign out
    </button>
  )
}
