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

export default function Home() {
  return (
    <main className="w-full bg-background text-white overflow-x-hidden">
      <Header />
      <EnhancedHero />
      <EnhancedAbout />
      <PremiumTimeline />
      <EnhancedProjects />
      <EnhancedSkills />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
