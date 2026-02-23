'use client'

import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import TheProblem from '@/components/sections/the-problem'
import TheSolution from '@/components/sections/the-solution'
import HowItWorks from '@/components/sections/how-it-works'
import KeyFeatures from '@/components/sections/key-features'
import WhyTullyDifferent from '@/components/sections/why-tully-different'
import WhoItsFor from '@/components/sections/who-its-for'
import StudentsGain from '@/components/sections/students-gain'
import ForSchools from '@/components/sections/for-schools'
import SecurityEthics from '@/components/sections/security-ethics'
import BetaInvitation from '@/components/sections/beta-invitation'
import CallToAction from '@/components/sections/call-to-action'
import Footer from '@/components/sections/footer'

export default function Page() {
  return (
    <main className="overflow-hidden bg-white dark:bg-[#0b111a]">
      <Header />
      <Hero />
      <TheProblem />
      <TheSolution />
      <HowItWorks />
      <KeyFeatures />
      <WhyTullyDifferent />
      <WhoItsFor />
      <StudentsGain />
      <ForSchools />
      <SecurityEthics />
      <BetaInvitation />
      <CallToAction />
      <Footer />
    </main>
  )
}
