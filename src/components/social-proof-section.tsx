"use client"

const testimonials = [
  {
    handle: "Global CPG Brand",
    quote: "34% reduction in wasted ad spend within 90 days by reallocating budget in real time based on live competitive signals.",
    role: "Paid Media",
  },
  {
    handle: "Series B SaaS",
    quote: "Detected a competitor pricing shift 6 hours before the market reacted — repositioned campaign messaging and captured 2.4x lead volume.",
    role: "Growth Marketing",
  },
  {
    handle: "Luxury Retail Group",
    quote: "Unified 11 siloed data sources into a single intelligence layer. Time to insight dropped from 5 days to under 20 minutes.",
    role: "Brand Strategy",
  },
  {
    handle: "DTC Fitness Brand",
    quote: "Autonomous budget reallocation drove 41% improvement in ROAS across Meta and Google within the first quarter.",
    role: "Performance",
  },
  {
    handle: "Enterprise Fintech",
    quote: "STRATIS identified an emerging audience segment 3 weeks before internal analytics flagged it — resulted in a new product launch.",
    role: "Market Intelligence",
  },
  {
    handle: "Regional Healthcare",
    quote: "Reduced campaign response time from 48 hours to real-time. Patient acquisition cost dropped 28% in 60 days.",
    role: "Digital Acquisition",
  },
]

// Duplicate for seamless infinite scroll
const row1 = [...testimonials, ...testimonials]
const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)]

export default function SocialProofSection() {
  return (
    <section className="relative bg-black/70 backdrop-blur-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
        {/* Top section — visionary + stats */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-14 sm:mb-18">
          {/* Client logo grid */}
          <div className="relative w-full lg:w-[45%] flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {[
                "Global CPG",
                "Enterprise SaaS",
                "Luxury Retail",
                "DTC Brand",
                "Fintech",
                "Healthcare",
                "Media Group",
                "Consumer Tech",
              ].map((client) => (
                <div
                  key={client}
                  className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center aspect-[2/1]"
                >
                  <span className="text-white/25 text-xs tracking-[0.15em] uppercase font-[var(--font-quicksand)] font-light">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-white/40 text-xs tracking-[0.25em] uppercase font-[var(--font-quicksand)] font-light">
                BUILT FOR THE MODERN MARKETER
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="italic text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8"
            >
              <span className="text-white/35">The </span>
              <span className="text-white">Emerging Standard.</span>
            </h2>

            {/* Body copy */}
            <div className="space-y-4 mb-8">
              <p className="text-white/60 text-sm sm:text-base font-[var(--font-quicksand)] font-light leading-relaxed">
                Across high-velocity organizations, the expectations of marketing intelligence are changing. As complexity increases, leading teams are adopting systems that operate continuously — unifying signals, detecting opportunity, and responding in real time.
              </p>
              <p className="text-white/60 text-sm sm:text-base font-[var(--font-quicksand)] font-light leading-relaxed">
                This shift enables stronger brand performance, reduced latency, and the ability to capitalize on moments that would otherwise pass unnoticed. STRATIS was not built to meet this new standard, STRATIS is the new standard.
              </p>
            </div>

            {/* CTA button */}
            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 bg-white/5
                  text-white/70 text-xs tracking-[0.2em] uppercase font-[var(--font-quicksand)] font-light
                  cursor-pointer transition-all duration-300
                  hover:bg-white/10 hover:border-white/25
                  active:scale-95"
              >
                LEARN MORE
                <span className="text-cyan-400 text-[8px]">●</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial carousel — full width, no container padding */}
      <div className="space-y-5 pb-24 sm:pb-32">
        {/* Row 1 — scrolls left */}
        <div className="relative">
          <div className="flex gap-5 animate-scroll-left">
            {row1.map((t, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[340px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex-shrink-0" />
                  <span className="text-white/70 text-sm font-medium">{t.handle}</span>
                </div>
                <p className="text-white/50 text-sm font-[var(--font-quicksand)] font-light leading-relaxed mb-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-medium">{t.role}</span>
                  <span className="text-white/25 text-[10px] tracking-wider">Case Study</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="flex gap-5 animate-scroll-right">
            {row2.map((t, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[340px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex-shrink-0" />
                  <span className="text-white/70 text-sm font-medium">{t.handle}</span>
                </div>
                <p className="text-white/50 text-sm font-[var(--font-quicksand)] font-light leading-relaxed mb-5">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-medium">{t.role}</span>
                  <span className="text-white/25 text-[10px] tracking-wider">Case Study</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
