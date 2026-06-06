import type { Metadata } from 'next'
import { FloatingGradients } from '@/components/floating-gradients'
import { Navbar } from '@/components/navbar'
import { AnalyzeForm } from '@/components/analyze-form'
import { Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analyze a Job Posting — TrustHire AI',
  description:
    'Paste a job posting, recruiter message, or internship offer and let TrustHire AI detect scam signals.',
}

export default function AnalyzePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingGradients />
      <Navbar />
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-36 text-center md:pt-44">
        <div className="animate-rise glass mb-7 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-accent-foreground">
          <Sparkles className="size-3.5 text-primary" />
          Step 1 · Paste
        </div>
        <h1 className="animate-rise text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Investigate the <span className="text-gradient">opportunity</span>
        </h1>
        <p
          className="animate-rise mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: '0.05s' }}
        >
          Drop in any job posting, recruiter email, or internship description.
          Our AI checks credibility signals and scam indicators in seconds.
        </p>
        <div className="mt-12 w-full">
          <AnalyzeForm />
        </div>
      </section>
    </main>
  )
}
