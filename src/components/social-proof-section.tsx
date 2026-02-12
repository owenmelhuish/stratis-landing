"use client"

const categories = [
  {
    label: "Agencies",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        {/* Two overlapping rings — collaboration */}
        <circle cx="18" cy="24" r="14" stroke="white" strokeWidth="1" />
        <circle cx="30" cy="24" r="14" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: "Enterprise",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        {/* Concentric circles — scale */}
        <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="24" r="4" fill="white" />
      </svg>
    ),
  },
  {
    label: "Media",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        {/* Stacked circles — multi-channel */}
        <circle cx="24" cy="14" r="10" stroke="white" strokeWidth="1" />
        <circle cx="16" cy="32" r="10" stroke="white" strokeWidth="1" />
        <circle cx="32" cy="32" r="10" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: "Creative",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        {/* Pen nib / bezier — design tool */}
        <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="16" r="5" stroke="white" strokeWidth="1" />
        <circle cx="16" cy="34" r="3" stroke="white" strokeWidth="1" />
        <circle cx="32" cy="34" r="3" stroke="white" strokeWidth="1" />
        <line x1="20" y1="19" x2="16" y2="31" stroke="white" strokeWidth="1" />
        <line x1="28" y1="19" x2="32" y2="31" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: "PR",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        {/* Broadcast/signal rings — public reach */}
        <circle cx="24" cy="30" r="5" fill="white" />
        <path d="M 14 22 A 14 14 0 0 1 34 22" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M 8 16 A 22 22 0 0 1 40 16" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M 3 10 A 29 29 0 0 1 45 10" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Strategy",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        {/* Crosshair/target — precision */}
        <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="1" />
        <line x1="24" y1="2" x2="24" y2="14" stroke="white" strokeWidth="1" />
        <line x1="24" y1="34" x2="24" y2="46" stroke="white" strokeWidth="1" />
        <line x1="2" y1="24" x2="14" y2="24" stroke="white" strokeWidth="1" />
        <line x1="34" y1="24" x2="46" y2="24" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function SocialProofSection() {
  return (
    <section className="relative bg-black/70 backdrop-blur-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20">
        {/* Top section — visionary + stats */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-14 sm:mb-18">
          {/* Category grid */}
          <div className="relative w-full lg:w-[45%] flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex flex-col items-center justify-center aspect-square p-6 gap-3"
                >
                  <div className="opacity-30">{cat.icon}</div>
                  <span className="text-white/70 text-xs tracking-[0.2em] uppercase font-[var(--font-quicksand)] font-light">
                    {cat.label}
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
    </section>
  )
}
