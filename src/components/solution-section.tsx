"use client"

export default function SolutionSection() {
  return (
    <section className="relative bg-black/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Section badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" style={{ animationDuration: "2.5s" }} />
              <span className="relative w-2 h-2 rounded-full bg-cyan-400" />
            </span>
            <span className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-[var(--font-quicksand)] font-light">
              INTRODUCING STRATIS
            </span>
          </span>
        </div>

        {/* Main headline */}
        <h2
          style={{ fontFamily: "var(--font-playfair)" }}
          className="italic text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-center mb-8"
        >
          <span className="text-white/40">Not a dashboard you open, </span>
          <span className="text-white">a presence you work with.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white/50 text-base sm:text-lg text-center max-w-2xl mx-auto font-[var(--font-quicksand)] font-light leading-relaxed mb-20 sm:mb-28">
          Marketing intelligence, made perpetual. Always seeing, always sensing,
          always reasoning, always responding to the world around your brand.
        </p>

        {/* Feature cards — staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 sm:mb-28">
          {/* Card 1 — Unified Live Signal Layer */}
          <div className="md:mt-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden flex flex-col">
            <h3 className="text-white text-lg font-medium mb-1">Unified Live Signal Layer</h3>
            <p className="text-white/70 text-sm italic font-[var(--font-quicksand)] font-light mb-3">
              All signals. One continuously updating view.
            </p>
            <p className="text-white/50 text-sm font-[var(--font-quicksand)] font-light leading-relaxed">
              STRATIS unifies performance data with live third-party market, consumer, and competitive signals into a single, always-current intelligence layer around your brand.
            </p>
            <div className="flex-1 min-h-8" />
            {/* Converging streams diagram */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 pt-6 pb-2 overflow-hidden">
              <svg viewBox="0 0 300 150" fill="none" className="w-full h-auto">
                <defs>
                  <filter id="ribbonGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Glow layer */}
                <g filter="url(#ribbonGlow)" opacity="0.25">
                  <path d="M-10,10 C50,8 90,50 140,45 C180,40 200,72 220,75" stroke="rgba(72,255,255,0.6)" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M-10,55 C60,60 80,30 130,45 C175,58 200,70 220,75" stroke="rgba(255,255,255,0.4)" strokeWidth="10" strokeLinecap="round" fill="none" />
                  <path d="M-10,95 C60,90 110,110 155,95 C185,85 205,78 220,75" stroke="rgba(72,255,255,0.5)" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M-10,140 C50,135 100,105 155,100 C190,94 208,80 220,75" stroke="rgba(255,255,255,0.3)" strokeWidth="10" strokeLinecap="round" fill="none" />
                </g>

                {/* Streams converging to a point */}
                <path d="M-10,10 C50,8 90,50 140,45 C180,40 200,72 220,75" stroke="rgba(72,255,255,0.45)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M-10,32 C40,35 70,65 120,55 C165,46 195,70 220,75" stroke="rgba(255,255,255,0.18)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M-10,55 C60,60 80,30 130,45 C175,58 200,70 220,75" stroke="rgba(72,255,255,0.35)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M-10,75 C50,78 100,60 150,65 C185,69 205,73 220,75" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M-10,95 C60,90 110,110 155,95 C185,85 205,78 220,75" stroke="rgba(72,255,255,0.4)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M-10,118 C45,115 95,90 145,88 C180,86 205,78 220,75" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M-10,140 C50,135 100,105 155,100 C190,94 208,80 220,75" stroke="rgba(72,255,255,0.3)" strokeWidth="7" strokeLinecap="round" fill="none" />

                {/* Unified single stream out -->  */}
                <line x1="220" y1="75" x2="310" y2="75" stroke="rgba(72,255,255,0.6)" strokeWidth="4" strokeLinecap="round" />

                {/* Arrowhead */}
                <polygon points="310,75 300,68 300,82" fill="rgba(72,255,255,0.6)" />

                {/* Convergence point glow */}
                <circle cx="220" cy="75" r="5" fill="rgba(72,255,255,0.25)" filter="url(#ribbonGlow)" />
                <circle cx="220" cy="75" r="2.5" fill="rgba(255,255,255,0.6)" />
              </svg>
            </div>
          </div>

          {/* Card 2 — Always-On Intelligence (raised) */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 pb-0 overflow-hidden">
            <h3 className="text-white text-lg font-semibold mb-1">Always-On Intelligence</h3>
            <p className="text-white/70 text-sm italic font-[var(--font-quicksand)] font-light mb-3">
              Insight that doesn&apos;t wait for reports.
            </p>
            <p className="text-white/50 text-sm font-[var(--font-quicksand)] font-light leading-relaxed mb-8">
              STRATIS continuously monitors incoming signals, identifying patterns, anomalies, and emerging opportunities in real time — before they become obvious, and before the moment passes.
            </p>
            {/* Mock intelligence UI */}
            <div className="flex flex-col items-center py-6">
              <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="absolute inset-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white/50">
                    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
                    <path d="M16 4V10" stroke="currentColor" strokeWidth="1" />
                    <path d="M16 22V28" stroke="currentColor" strokeWidth="1" />
                    <path d="M4 16H10" stroke="currentColor" strokeWidth="1" />
                    <path d="M22 16H28" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                {/* Outer orbiting dots */}
                <div className="absolute inset-0 animate-orbit-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/60" />
                </div>
                <div className="absolute inset-0 animate-orbit-12-reverse">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                </div>
                <div className="absolute inset-0 animate-orbit-10" style={{ animationDelay: "-3s" }}>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
                </div>
                {/* Inner orbiting dots */}
                <div className="absolute inset-3 animate-orbit-10" style={{ animationDelay: "-1s" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <div className="absolute inset-3 animate-orbit-8" style={{ animationDelay: "-5s" }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <div className="absolute inset-3 animate-orbit-12-reverse" style={{ animationDelay: "-4s" }}>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">MONITORING ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Card 3 — Autonomous Market Execution */}
          <div className="md:mt-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden flex flex-col">
            <h3 className="text-white text-lg font-medium mb-1">Autonomous Market Execution</h3>
            <p className="text-white/70 text-sm italic font-[var(--font-quicksand)] font-light mb-3">
              From insight to action, without delay.
            </p>
            <p className="text-white/50 text-sm font-[var(--font-quicksand)] font-light leading-relaxed">
              STRATIS can execute decisions directly in market — adjusting strategy, reallocating spend, and responding on platform autonomously, governed by human guidance.
            </p>
            <div className="flex-1 min-h-8" />
            {/* Diverging streams diagram (flipped) */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 pt-6 pb-2 overflow-hidden">
              <svg viewBox="0 0 300 150" fill="none" className="w-full h-auto" style={{ transform: "scaleX(-1)" }}>
                <defs>
                  <filter id="ribbonGlow2" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Glow layer */}
                <g filter="url(#ribbonGlow2)" opacity="0.25">
                  <path d="M-10,10 C50,8 90,50 140,45 C180,40 200,72 220,75" stroke="rgba(72,255,255,0.6)" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M-10,55 C60,60 80,30 130,45 C175,58 200,70 220,75" stroke="rgba(255,255,255,0.4)" strokeWidth="10" strokeLinecap="round" fill="none" />
                  <path d="M-10,95 C60,90 110,110 155,95 C185,85 205,78 220,75" stroke="rgba(72,255,255,0.5)" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M-10,140 C50,135 100,105 155,100 C190,94 208,80 220,75" stroke="rgba(255,255,255,0.3)" strokeWidth="10" strokeLinecap="round" fill="none" />
                </g>

                {/* Streams diverging from a point */}
                <path d="M-10,10 C50,8 90,50 140,45 C180,40 200,72 220,75" stroke="rgba(72,255,255,0.45)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M-10,32 C40,35 70,65 120,55 C165,46 195,70 220,75" stroke="rgba(255,255,255,0.18)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M-10,55 C60,60 80,30 130,45 C175,58 200,70 220,75" stroke="rgba(72,255,255,0.35)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M-10,75 C50,78 100,60 150,65 C185,69 205,73 220,75" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M-10,95 C60,90 110,110 155,95 C185,85 205,78 220,75" stroke="rgba(72,255,255,0.4)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M-10,118 C45,115 95,90 145,88 C180,86 205,78 220,75" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M-10,140 C50,135 100,105 155,100 C190,94 208,80 220,75" stroke="rgba(72,255,255,0.3)" strokeWidth="7" strokeLinecap="round" fill="none" />

                {/* Unified single stream */}
                <line x1="220" y1="75" x2="310" y2="75" stroke="rgba(72,255,255,0.6)" strokeWidth="4" strokeLinecap="round" />
                <polygon points="310,75 300,68 300,82" fill="rgba(72,255,255,0.6)" />

                {/* Convergence point glow */}
                <circle cx="220" cy="75" r="5" fill="rgba(72,255,255,0.25)" filter="url(#ribbonGlow2)" />
                <circle cx="220" cy="75" r="2.5" fill="rgba(255,255,255,0.6)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 bg-white/5
              text-white/80 text-sm tracking-wider font-[var(--font-quicksand)] font-light
              cursor-pointer transition-all duration-300
              hover:bg-white/10 hover:border-white/25
              active:scale-95"
          >
            Explore Capabilities
            <span className="text-white/50">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
