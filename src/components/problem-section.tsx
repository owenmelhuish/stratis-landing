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
            The modern marketing team doesn&apos;t operate in a single channel.{" "}
          </span>
          <span className="text-white/50">
            They manage siloed ecosystems, fragmented data, and constant change. Signals compound. Context shifts.
          </span>
          <span className="text-white font-bold">
            {" "}The market moves faster than teams can keep up.
          </span>
        </h2>

        {/* Supporting paragraph */}
        <p
          style={{ fontFamily: "var(--font-playfair)" }}
          className="italic text-4xl sm:text-5xl lg:text-6xl leading-[1.15] max-w-4xl text-white/50 mb-16"
        >
          <span className="text-white font-bold">Imagine giving marketers their own Mission Control:</span> a central command center that connects every data signal surrounding a brand, interpreting market shifts in real time, surfacing emerging opportunities, and activating instantly in market. Turning fragmented information into an intelligent, connected ecosystem.
        </p>

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
