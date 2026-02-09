"use client"

export default function ProblemSection() {
  return (
    <section className="relative bg-black/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Section label */}
        <div className="mb-8">
          <span className="text-white/40 text-xs tracking-[0.25em] uppercase font-[var(--font-quicksand)] font-light">
            <span className="text-white/50 mr-2">◆</span>
            BUILT FOR THE MODERN MARKETER
          </span>
        </div>

        {/* Main headline */}
        <h2
          style={{ fontFamily: "var(--font-playfair)" }}
          className="italic text-4xl sm:text-5xl lg:text-6xl leading-[1.15] max-w-4xl mb-20 sm:mb-28"
        >
          <span className="text-white/80">
            The modern marketing team doesn&apos;t operate in a single channel —{" "}
          </span>
          <span className="text-white/50">
            they manage siloed ecosystems, fragmented data, and constant change. Signals compound. Context shifts.
          </span>
          <span className="text-white font-bold">
            {" "}The market moves faster than teams can keep up.
          </span>
        </h2>

        {/* Testimonial row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          {/* Portrait photo */}
          <div className="w-64 h-72 sm:w-72 sm:h-80 flex-shrink-0 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/5 to-black">
            <div className="w-full h-full bg-gradient-to-b from-gray-600/30 via-gray-800/40 to-black" />
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-center pt-4">
            <span className="text-white/20 text-4xl font-serif leading-none mb-4">&#x201C;</span>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg font-[var(--font-quicksand)] font-light">
              &quot;I&apos;m constantly piecing together signals from different tools, yet I never quite trust that I&apos;m seeing the full picture. Most of my time is spent chasing data, not understanding it — and by the time it makes sense, the market has already shifted again.&quot;
            </p>
          </div>
        </div>

        {/* Bottom row: stat pill + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5">
            <span className="text-white/50 text-xs tracking-[0.15em] uppercase font-[var(--font-quicksand)] font-light">
              EARLY ACCESS PILOTS UNDERWAY
            </span>
            <span className="text-white/40 text-sm ml-1">→</span>
          </div>

          <button
            type="button"
            className="px-8 py-3 rounded-full border border-cyan-400/40 bg-transparent
              text-white/90 text-sm tracking-widest font-[var(--font-quicksand)] font-light
              cursor-pointer transition-all duration-300
              hover:border-cyan-400/70 hover:shadow-[0_0_20px_rgba(72,255,255,0.1)]
              active:scale-95"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
