'use client'

import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import HowItWorks from '@/components/sections/how-it-works'
import KeyFeatures from '@/components/sections/key-features'
import WhoItsFor from '@/components/sections/who-its-for'
import ForSchools from '@/components/sections/for-schools'
import PricingOverview from '@/components/sections/pricing-overview'
import ProductTour from '@/components/sections/product-tour'
import SecurityEthics from '@/components/sections/security-ethics'
import CallToAction from '@/components/sections/call-to-action'
import ContactSection from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Page() {
  return (
    <main className="overflow-hidden bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <WhoItsFor />
      <ForSchools />
      <PricingOverview />
      <ProductTour />
      <SecurityEthics />
      <CallToAction />
      <ContactSection />
      <Footer />
    </main>
  )
}
