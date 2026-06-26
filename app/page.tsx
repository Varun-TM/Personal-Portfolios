import Header from './components/Header'
import EnhancedHero from './components/EnhancedHero'
import EnhancedAbout from './components/EnhancedAbout'
import PremiumTimeline from './components/PremiumTimeline'
import EnhancedProjects from './components/EnhancedProjects'
import EnhancedSkills from './components/EnhancedSkills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { getContent } from '@/lib/content'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const content = await getContent()

  return (
    <main className="w-full bg-background text-white overflow-x-hidden">
      <Header />
      <EnhancedHero content={content.hero} />
      <EnhancedAbout content={content.about} />
      <PremiumTimeline content={content.experience} />
      <EnhancedProjects content={content.projects} />
      <EnhancedSkills content={content.skills} />
      <Achievements content={content.achievements} />
      <Education content={content.education} />
      <Contact content={content.contact} />
      <Footer />
    </main>
  )
}
