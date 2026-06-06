export type RiskLevel = 'High Risk' | 'Caution' | 'Likely Safe'

export type RedFlag = {
  icon:
    | 'CreditCard'
    | 'Mail'
    | 'CircleDollarSign'
    | 'Globe'
    | 'Send'
    | 'FileQuestion'
  label: string
}

export type AnalysisResult = {
  score: number
  riskLevel: RiskLevel
  recommendation: string
  detail: string
  redFlags: RedFlag[]
  excerpt: string
}

type Rule = {
  test: RegExp
  weight: number
  flag: RedFlag
}

const RULES: Rule[] = [
  {
    test: /(registration|activation|security|processing)\s*fee|pay\s*(₹|rs|inr|\$)?\s*\d/i,
    weight: 26,
    flag: { icon: 'CreditCard', label: 'Upfront / registration fee requested' },
  },
  {
    test: /@(gmail|yahoo|outlook|hotmail|rediffmail)\./i,
    weight: 18,
    flag: { icon: 'Mail', label: 'Personal email recruiter (not company domain)' },
  },
  {
    test: /telegram|whatsapp/i,
    weight: 20,
    flag: { icon: 'Send', label: 'Telegram / WhatsApp-only communication' },
  },
  {
    test: /(₹|rs|inr|\$)\s*\d{2,3}[,.]?\d{3}\s*(\/|per)?\s*(week|day)|50,?000\s*\/?\s*week/i,
    weight: 22,
    flag: { icon: 'CircleDollarSign', label: 'Unrealistic salary for the role' },
  },
  {
    test: /no\s*(experience|skills?|qualification)/i,
    weight: 10,
    flag: { icon: 'CircleDollarSign', label: 'High pay with no experience required' },
  },
  {
    test: /(simple|easy)\s*(online|data\s*entry)\s*work|flexible\s*hours|work\s*from\s*home/i,
    weight: 12,
    flag: { icon: 'FileQuestion', label: 'Vague job description' },
  },
  {
    test: /selected|congratulations|shortlisted/i,
    weight: 8,
    flag: { icon: 'FileQuestion', label: 'Selected without applying / interview' },
  },
]

export const SAMPLE_POSTING = `Congratulations! You've been selected for a remote Data Entry role at a top MNC.
Salary: ₹50,000/week, no experience required, flexible hours.
Pay a one-time ₹999 registration fee to activate your offer letter.
Contact HR only on Telegram: @hr_recruit_fast
Email: hiring.team2024@gmail.com`

export function analyzeJob(text: string): AnalysisResult {
  const input = text.trim()
  const matched: RedFlag[] = []
  let risk = 0

  if (input.length > 0) {
    for (const rule of RULES) {
      if (rule.test.test(input)) {
        risk += rule.weight
        if (!matched.some((m) => m.label === rule.flag.label)) {
          matched.push(rule.flag)
        }
      }
    }
    // missing company / website signal
    if (!/\b(www\.|https?:\/\/|\.com|\.in|\.org)\b/i.test(input)) {
      risk += 14
      matched.push({
        icon: 'Globe',
        label: 'No verifiable company website or information',
      })
    }
  }

  const score = Math.max(4, Math.min(98, 100 - risk))

  let riskLevel: RiskLevel
  let recommendation: string
  let detail: string

  if (score < 40) {
    riskLevel = 'High Risk'
    recommendation = 'Avoid this opportunity.'
    detail =
      'Multiple high-severity scam indicators were detected. Do not pay any fees or share personal documents with this recruiter.'
  } else if (score < 70) {
    riskLevel = 'Caution'
    recommendation = 'Proceed carefully.'
    detail =
      'Some warning signs were found. Verify the company independently and never send money before confirming legitimacy.'
  } else {
    riskLevel = 'Likely Safe'
    recommendation = 'Looks legitimate.'
    detail =
      'No major scam indicators were detected. Still confirm details through official company channels before sharing sensitive data.'
  }

  return {
    score,
    riskLevel,
    recommendation,
    detail,
    redFlags: matched,
    excerpt: input.slice(0, 280),
  }
}

const STORAGE_KEY = 'trusthire:last-analysis'

export function saveAnalysis(result: AnalysisResult) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result))
  }
}

export function loadAnalysis(): AnalysisResult | null {
  if (typeof window === 'undefined') return null
  const raw = sessionStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as AnalysisResult
  } catch {
    return null
  }
}
