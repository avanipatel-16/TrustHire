'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, ShieldAlert, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-36 text-center md:pt-44">
      <div className="animate-rise glass mb-7 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-accent-foreground">
        <Sparkles className="size-3.5 text-primary" />
        AI-powered fraud detection for job seekers
      </div>

      <h1
        className="animate-rise text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        style={{ animationDelay: '0.05s' }}
      >
        TrustHire <span className="text-gradient">AI</span>
      </h1>

      <p
        className="animate-rise mt-6 text-balance text-xl font-medium text-foreground/80 sm:text-2xl"
        style={{ animationDelay: '0.12s' }}
      >
        Don&apos;t let your dream job become a scam.
      </p>

      <p
        className="animate-rise mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        style={{ animationDelay: '0.18s' }}
      >
        Analyze job postings, recruiter messages, internship offers, and job
        advertisements using AI-powered fraud detection.
      </p>

      <div
        className="animate-rise mt-9 flex flex-col items-center gap-3 sm:flex-row"
        style={{ animationDelay: '0.24s' }}
      >
        <Button
          nativeButton={false}
          render={<Link href="/analyze" />}
          size="lg"
          className="group rounded-full bg-primary px-7 text-base text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
        >
          Start Investigation
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>

        <Button
          nativeButton={false}
          render={<a href="#how" />}
          size="lg"
          variant="ghost"
          className="rounded-full px-7 text-base text-foreground hover:bg-foreground/5"
        >
          See how it works
        </Button>
      </div>

      <AnalyzerCard />
    </section>
  )
}

function AnalyzerCard() {
  return (
    <Link
      href="/analyze"
      className="animate-rise mt-16 block w-full max-w-3xl transition-transform hover:scale-[1.01]"
      style={{ animationDelay: '0.32s' }}
    >
      <div className="glass-strong rounded-3xl p-2">
        <div className="rounded-[1.35rem] bg-card/50 p-5 text-left sm:p-7">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="text-xs font-medium text-muted-foreground">
              Pasted job posting
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              Analyzing
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-foreground/70">
            &ldquo;Congratulations! You&apos;ve been selected for a remote data
            entry role. Pay a one-time{' '}
            <mark className="rounded bg-destructive/15 px-1 text-destructive">
              ₹999 registration fee
            </mark>{' '}
            to activate. Contact us only on{' '}
            <mark className="rounded bg-destructive/15 px-1 text-destructive">
              Telegram
            </mark>
            .&rdquo;
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="glass col-span-1 flex flex-col items-center justify-center rounded-2xl p-4">
              <span className="text-3xl font-semibold text-destructive">12</span>
              <span className="mt-1 text-xs text-muted-foreground">
                Trust Score
              </span>
            </div>

            <div className="col-span-2 flex flex-col justify-center gap-2">
              <Flag
                icon={<ShieldAlert className="size-4 text-destructive" />}
                text="Upfront payment requested"
              />
              <Flag
                icon={<ShieldAlert className="size-4 text-destructive" />}
                text="Telegram-only communication"
              />
              <Flag
                icon={<ShieldCheck className="size-4 text-primary" />}
                text="No verifiable company found"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function Flag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="glass flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-foreground/80">
      {icon}
      {text}
    </div>
  )
}