'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, ArrowRight, ClipboardPaste, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { analyzeJob, saveAnalysis, SAMPLE_POSTING } from '@/lib/mock-analysis'

const STAGES = [
  'Reading the posting',
  'Checking recruiter legitimacy',
  'Scanning for scam indicators',
  'Calculating trust score',
]

export function AnalyzeForm() {
  const router = useRouter()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState(0)

  async function handleAnalyze() {
    if (!text.trim() || loading) return
    setLoading(true)

    for (let i = 0; i < STAGES.length; i++) {
      setStage(i)
      await new Promise((r) => setTimeout(r, 550))
    }

    const result = analyzeJob(text)
    saveAnalysis(result)
    router.push('/dashboard')
  }

  async function pasteSample() {
    setText(SAMPLE_POSTING)
  }

  return (
    <div className="animate-rise w-full max-w-3xl" style={{ animationDelay: '0.1s' }}>
      <div className="glass-strong rounded-3xl p-2">
        <div className="rounded-[1.35rem] bg-card/50 p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="text-xs font-medium text-muted-foreground">
              Paste job posting, recruiter message, or internship offer
            </span>
            <button
              type="button"
              onClick={pasteSample}
              className="flex items-center gap-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-70"
            >
              <ClipboardPaste className="size-3.5" />
              Try a sample
            </button>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
            rows={9}
            placeholder="e.g. Congratulations! You've been selected for a remote data entry role. Pay a ₹999 registration fee to activate. Contact us on Telegram..."
            className="mt-4 w-full resize-none rounded-2xl bg-transparent text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/60 disabled:opacity-60"
          />

          <div className="mt-4 flex flex-col items-center gap-3 border-t border-border/60 pt-4 sm:flex-row sm:justify-between">
            <span className="text-xs text-muted-foreground">
              {text.trim().length} characters · mock analysis
            </span>
            <Button
              onClick={handleAnalyze}
              disabled={!text.trim() || loading}
              size="lg"
              className="group w-full rounded-full bg-primary px-7 text-base text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] disabled:opacity-50 sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  {STAGES[stage]}
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  Analyze
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </Button>
          </div>

          {loading && (
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-foreground/10">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${((stage + 1) / STAGES.length) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
