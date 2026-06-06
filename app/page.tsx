import { FloatingGradients } from '@/components/floating-gradients'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ScamsSection } from '@/components/scams-section'
import { HowItWorks } from '@/components/how-it-works'
import { CtaFooter } from '@/components/cta-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingGradients />
      <Navbar />
      <Hero />
      <ScamsSection />
      <HowItWorks />
      <CtaFooter />
    </main>
  )
}
