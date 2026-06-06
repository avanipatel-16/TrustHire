export function FloatingGradients() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />

      {/* floating blur orbs */}
      <div className="animate-float-slow absolute -left-32 top-[-10%] h-[480px] w-[480px] rounded-full bg-[oklch(0.7_0.14_245)]/40 blur-[120px]" />
      <div className="animate-float-slower absolute right-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-[oklch(0.78_0.12_205)]/40 blur-[130px]" />
      <div className="animate-float-slow absolute bottom-[-15%] left-[20%] h-[460px] w-[460px] rounded-full bg-[oklch(0.74_0.13_225)]/35 blur-[120px]" />
      <div className="animate-float-slower absolute bottom-[10%] right-[15%] h-[360px] w-[360px] rounded-full bg-[oklch(0.82_0.1_190)]/35 blur-[110px]" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.3 0.05 250) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.3 0.05 250) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
