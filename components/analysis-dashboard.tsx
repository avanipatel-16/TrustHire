'use client'

import {
  AlertTriangle,
  Mail,
  CircleDollarSign,
  Globe,
  CreditCard,
  Send,
  FileQuestion,
  ShieldAlert,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'
import Link from 'next/link'
import { TrustSphere } from '@/components/trust-sphere'
import { Button } from '@/components/ui/button'
import type { AnalysisResult, RedFlag } from '@/lib/mock-analysis'

const ICONS = {
  CreditCard,
  Mail,
  CircleDollarSign,
  Globe,
  Send,
  FileQuestion,
} as const

const POSITIONS = [
  { pos: 'left-0 top-[6%] md:-left-10', bob: 'animate-bob', delay: '0.1s' },
  { pos: 'right-0 top-[12%] md:-right-8', bob: 'animate-bob-alt', delay: '0.25s' },
  { pos: 'left-0 bottom-[14%] md:-left-12', bob: 'animate-bob-alt', delay: '0.4s' },
  { pos: 'right-0 bottom-[8%] md:-right-10', bob: 'animate-bob', delay: '0.55s' },
]

export function AnalysisDashboard({ result }: { result: AnalysisResult }) {
  const { score, riskLevel, recommendation, detail, redFlags } = result
  const isSafe = riskLevel === 'Likely Safe'
  const floating = redFlags.slice(0, 4)

  const accentLine = isSafe
    ? 'via-emerald-400/40'
    : riskLevel === 'Caution'
      ? 'via-amber-400/40'
      : 'via-destructive/40'

  return (
    <section
      id="trust"
      className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 md:py-32"
    >
      <div className="animate-rise mb-16 text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          {isSafe ? (
            <ShieldCheck className="size-3.5 text-emerald-600" />
          ) : (
            <ShieldAlert className="size-3.5 text-destructive" />
          )}
          Analysis Complete
        </span>

        <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Your <span className="text-gradient">Trust Report</span>
        </h2>

        <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
          We analyzed this opportunity across credibility, recruiter, and
          compensation signals.
        </p>
      </div>

      <div className="relative flex w-full max-w-3xl items-center justify-center py-8">
        <TrustSphere score={score} riskLevel={riskLevel} />

        {floating.map((flag, i) => {
          const Icon = ICONS[flag.icon]
          const p = POSITIONS[i]

          return (
            <div
              key={flag.label}
              className={`absolute ${p.pos} max-w-[44%] md:max-w-none`}
            >
              <div
                className={`glass animate-pop-in ${p.bob} flex items-center gap-2.5 rounded-2xl px-4 py-3`}
                style={{ animationDelay: p.delay }}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-destructive/12 text-destructive">
                  <Icon className="size-4" />
                </span>

                <span className="text-sm font-medium leading-tight text-foreground">
                  {flag.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className="animate-rise mt-12 w-full max-w-3xl"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="glass rounded-3xl p-6 md:p-8">
          <div className="mb-5 flex items-center gap-2">
            <AlertTriangle className="size-4 text-destructive" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Detected Red Flags
            </h3>

            <span className="ml-auto rounded-full bg-destructive/12 px-2.5 py-0.5 text-xs font-semibold text-destructive">
              {redFlags.length} found
            </span>
          </div>

          {redFlags.length === 0 ? (
            <p className="flex items-center gap-2 rounded-2xl bg-emerald-500/[0.08] px-4 py-3 text-sm text-foreground">
              <ShieldCheck className="size-4 text-emerald-600" />
              No scam indicators detected in this posting.
            </p>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {redFlags.map((flag: RedFlag) => {
                const Icon = ICONS[flag.icon]

                return (
                  <li
                    key={flag.label}
                    className="flex items-center gap-3 rounded-2xl bg-destructive/[0.06] px-4 py-3"
                  >
                    <Icon className="size-4 shrink-0 text-destructive" />
                    <span className="text-sm text-foreground">
                      {flag.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div
        className="animate-rise mt-6 w-full max-w-3xl"
        style={{ animationDelay: '0.35s' }}
      >
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center">
          <div
            className={`pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent to-transparent ${accentLine}`}
          />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Recommendation
          </span>

          <p className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {recommendation}
          </p>

          <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {detail}
          </p>

          <Button
            nativeButton={false}
            render={<Link href="/analyze" />}
            variant="ghost"
            className="mt-6 rounded-full px-6 text-foreground hover:bg-foreground/5"
          >
            <RotateCcw className="size-4" />
            Analyze another posting
          </Button>
        </div>
      </div>
    </section>
  )
}