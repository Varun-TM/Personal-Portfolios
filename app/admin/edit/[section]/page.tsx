import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSection } from '@/lib/content'
import AdminEditor from '../../AdminEditor'

export const dynamic = 'force-dynamic'

export default async function EditSectionPage({
  params,
}: {
  params: { section: string }
}) {
  const data = await getSection(params.section)
  if (data === undefined) notFound()

  return (
    <div>
      <Link href="/admin" className="text-sm text-white/50 hover:text-white">
        ← Back to dashboard
      </Link>
      <h1 className="text-2xl font-bold mt-2 mb-8 capitalize">
        Edit: {params.section}
      </h1>
      <AdminEditor section={params.section} initial={data} />
    </div>
  )
}
