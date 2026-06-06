'use client'

import { useEffect, useState } from 'react'
import type { RiskLevel } from '@/lib/mock-analysis'

const SIZE = 280
const STROKE = 14
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const RISK_STYLES: Record<
  RiskLevel,
  { from: string; to: string; halo: string; badge: string; text: string }
> = {
  'High Risk': {
    from: 'oklch(0.7 0.2 25)',
    to: 'oklch(0.62 0.21 15)',
    halo: 'bg-destructive/30',
    badge: 'bg-destructive/12 text-destructive',
    text: 'text-destructive',
  },
  Caution: {
    from: 'oklch(0.82 0.15 75)',
    to: 'oklch(0.72 0.16 60)',
    halo: 'bg-amber-400/30',
    badge: 'bg-amber-500/15 text-amber-600',
    text: 'text-amber-600',
  },
  'Likely Safe': {
    from: 'oklch(0.78 0.15 160)',
    to: 'oklch(0.68 0.15 175)',
    halo: 'bg-emerald-400/30',
    badge: 'bg-emerald-500/15 text-emerald-600',
    text: 'text-emerald-600',
  },
}

export function TrustSphere({
  score,
  riskLevel,
}: {
  score: number
  riskLevel: RiskLevel
}) {
  const [progress, setProgress] = useState(0)
  const [display, setDisplay] = useState(0)
  const styles = RISK_STYLES[riskLevel]

  useEffect(() => {
    const t = setTimeout(() => setProgress(score), 250)

    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start - 250) / duration, 1)
      if (p > 0) {
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(Math.round(eased * score))
      }
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [score])

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <div className="relative flex items-center justify-center">
      {/* pulsing halo */}
      <div
        className={`animate-pulse-ring absolute size-[300px] rounded-full blur-2xl ${styles.halo}`}
      />

      {/* glass sphere */}
      <div
        className="glass-strong animate-bob relative flex items-center justify-center rounded-full"
        style={{ width: SIZE + 56, height: SIZE + 56 }}
      >
        {/* glossy 3d highlight */}
        <div className="pointer-events-none absolute inset-2 rounded-full bg-gradient-to-b from-white/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-1/4 top-[12%] h-12 w-20 -rotate-12 rounded-full bg-white/60 blur-md" />

        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90"
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="color-mix(in oklch, var(--foreground) 8%, transparent)"
            strokeWidth={STROKE}
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="url(#riskGradient)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)' }}
          />
          <defs>
            <linearGradient id="riskGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={styles.from} />
              <stop offset="100%" stopColor={styles.to} />
            </linearGradient>
          </defs>
        </svg>

        {/* center content */}
        <div className="absolute flex flex-col items-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trust Score
          </span>
          <span className="mt-1 text-7xl font-semibold tracking-tight text-foreground tabular-nums">
            {display}%
          </span>
          <span
            className={`mt-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${styles.badge}`}
          >
            {riskLevel}
          </span>
        </div>
      </div>
    </div>
  )
}
