import { ClipboardPaste, ScanSearch, ShieldCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardPaste,
    title: 'Paste',
    description:
      'Paste a job posting, recruiter email, internship description, or LinkedIn message.',
  },
  {
    number: '02',
    icon: ScanSearch,
    title: 'Analyze',
    description:
      'AI evaluates credibility signals, scam indicators, company information, and recruiter legitimacy.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Decide',
    description:
      'Receive a trust score, detected red flags, evidence, and recommendations.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">How it works</p>
        <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Three steps to clarity
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          From suspicion to certainty in seconds. No account required to run
          your first investigation.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.title} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}
              <div className="glass relative flex h-full flex-col rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-4xl font-semibold text-foreground/10">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
