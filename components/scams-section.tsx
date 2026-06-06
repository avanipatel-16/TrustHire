import {
  CreditCard,
  Mail,
  Send,
  TrendingUp,
  Globe,
  FileQuestion,
} from 'lucide-react'

const scams = [
  {
    icon: CreditCard,
    title: 'Registration Fee Scams',
    example: 'Pay ₹999 to activate your internship.',
  },
  {
    icon: Mail,
    title: 'Personal Email Recruiters',
    example: 'Gmail and Yahoo addresses pretending to be HR.',
  },
  {
    icon: Send,
    title: 'Telegram-Only Jobs',
    example: 'Contact only through Telegram or WhatsApp.',
  },
  {
    icon: TrendingUp,
    title: 'Unrealistic Salaries',
    example: '₹50,000/week with no experience.',
  },
  {
    icon: Globe,
    title: 'Fake Company Websites',
    example: 'No verifiable company information.',
  },
  {
    icon: FileQuestion,
    title: 'Vague Job Descriptions',
    example: 'Simple online work with flexible hours.',
  },
]

export function ScamsSection() {
  return (
    <section id="scams" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Threat intelligence</p>
        <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Scams we catch
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          TrustHire AI is trained on thousands of real fraudulent listings to
          flag the tactics scammers use against students and fresh graduates.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {scams.map((scam) => {
          const Icon = scam.icon
          return (
            <article
              key={scam.title}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {scam.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{scam.example}&rdquo;
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
