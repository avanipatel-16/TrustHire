'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FloatingGradients } from '@/components/floating-gradients'
import { Navbar } from '@/components/navbar'
import { AnalysisDashboard } from '@/components/analysis-dashboard'
import { Button } from '@/components/ui/button'
import {
  analyzeJob,
  loadAnalysis,
  SAMPLE_POSTING,
  type AnalysisResult,
} from '@/lib/mock-analysis'

export default function DashboardPage() {
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = loadAnalysis()
    setResult(stored ?? analyzeJob(SAMPLE_POSTING))
    setReady(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingGradients />
      <Navbar />

      <div className="pt-20">
        {ready && result ? (
          <AnalysisDashboard result={result} />
        ) : (
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="glass animate-bob size-16 rounded-full" />
          </div>
        )}
      </div>

      {ready && (
        <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2">
          <Button
            nativeButton={false}
            render={<Link href="/analyze" />}
            variant="ghost"
            className="pointer-events-auto rounded-full text-xs text-muted-foreground hover:bg-foreground/5"
          >
            Run a new analysis
          </Button>
        </div>
      )}
    </main>
  )
}