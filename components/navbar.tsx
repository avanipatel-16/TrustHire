import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 pl-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-4" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            TrustHire AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link href="/#scams" className="transition-colors hover:text-foreground">
            Scams We Catch
          </Link>

          <Link href="/#how" className="transition-colors hover:text-foreground">
            How It Works
          </Link>

          <Link href="/dashboard" className="transition-colors hover:text-foreground">
            Trust Report
          </Link>
        </div>

        <Button
          nativeButton={false}
          render={<Link href="/analyze" />}
          size="sm"
          className="rounded-full bg-primary px-5 text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
        >
          Start Investigation
        </Button>
      </nav>
    </header>
  )
}