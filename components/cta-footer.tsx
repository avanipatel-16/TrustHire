import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaFooter() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-16 pt-12">
      <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12">
        <div className="absolute -left-16 top-0 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 size-72 rounded-full bg-[oklch(0.78_0.12_205)]/25 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Apply with confidence, not anxiety.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Run any suspicious job posting through TrustHire AI before you reply,
            click, or pay.
          </p>

          <Button
            nativeButton={false}
            render={<Link href="/analyze" />}
            size="lg"
            className="group mt-8 rounded-full bg-primary px-8 text-base text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            Start Investigation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="size-3.5" />
          </span>
          <span className="font-medium text-foreground">TrustHire AI</span>
        </div>

        <p>
          © {new Date().getFullYear()} TrustHire AI. Built to protect job seekers.
        </p>
      </div>
    </footer>
  )
}