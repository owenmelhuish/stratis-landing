"use client"

const dataSignals = [
  { lines: ["Live Platform", "Analytics"], y: 55 },
  { lines: ["Historical", "Data"], y: 118 },
  { lines: ["Industry", "Trends"], y: 181 },
  { lines: ["Competitive", "Monitoring"], y: 244 },
  { lines: ["Social", "Listening"], y: 307 },
  { lines: ["First Party", "Brand Data"], y: 370 },
]

const actionOutputs = [
  { lines: ["In-Platform Media", "Execution"], y: 120, h: 58 },
  { lines: ["Creative", "Execution"], y: 235, h: 50 },
  { lines: ["Live Full Ecosystem", "Dashboard +", "Reporting"], y: 350, h: 68 },
]

const connectionPaths = [
  // Data signals → Intelligence tower
  "M 138 77 L 198 77",
  "M 138 140 L 198 140",
  "M 138 203 L 198 203",
  "M 138 266 L 198 266",
  "M 138 329 L 198 329",
  "M 138 392 L 198 392",
  // Intelligence → Insight
  "M 358 240 L 420 240",
  // Insight → Human Approval
  "M 575 228 L 605 228 L 605 210 L 640 210",
  // Insight → Human Feedback
  "M 575 252 L 605 252 L 605 325 L 640 325",
  // Human Approval → In-Platform Media
  "M 775 210 L 808 210 L 808 149 L 840 149",
  // Human Approval → Creative Execution
  "M 775 210 L 808 210 L 808 260 L 840 260",
  // Human Feedback → Dashboard
  "M 775 325 L 808 325 L 808 384 L 840 384",
]

const flowDots = [
  // Data → Intelligence (staggered)
  { path: "M 138 77 L 198 77", dur: "2.5s", begin: "0s" },
  { path: "M 138 140 L 198 140", dur: "2.5s", begin: "0.4s" },
  { path: "M 138 203 L 198 203", dur: "2.5s", begin: "0.8s" },
  { path: "M 138 266 L 198 266", dur: "2.5s", begin: "1.2s" },
  { path: "M 138 329 L 198 329", dur: "2.5s", begin: "1.6s" },
  { path: "M 138 392 L 198 392", dur: "2.5s", begin: "2.0s" },
  // Intelligence → Insight
  { path: "M 358 240 L 420 240", dur: "2.8s", begin: "0.6s" },
  // Insight → Human boxes
  { path: "M 575 228 L 605 228 L 605 210 L 640 210", dur: "2.5s", begin: "1.2s" },
  { path: "M 575 252 L 605 252 L 605 325 L 640 325", dur: "2.5s", begin: "1.8s" },
  // Human → Actions
  { path: "M 775 210 L 808 210 L 808 149 L 840 149", dur: "2.8s", begin: "0.2s" },
  { path: "M 775 210 L 808 210 L 808 260 L 840 260", dur: "2.8s", begin: "1.0s" },
  { path: "M 775 325 L 808 325 L 808 384 L 840 384", dur: "2.8s", begin: "1.6s" },
]

export default function ExchangeSection() {
  return (
    <section className="relative bg-black/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 pt-2 sm:pt-4 lg:pt-6 pb-24 sm:pb-32 lg:pb-40">
        {/* Top area — label, headline, body */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20 mb-20 sm:mb-28">
          <div className="flex-1">
            {/* Numbered label */}
            <div className="mb-6">
              <span className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase font-[var(--font-quicksand)] font-light">
                HUMAN IN THE LOOP
              </span>
            </div>

            {/* Large headline */}
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="italic text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
            >
              <span className="text-white/35">Governed by </span>
              <span className="text-white">human judgement.</span>
            </h2>
          </div>

          {/* Right body copy */}
          <div className="lg:max-w-xs lg:pt-16">
            <p className="text-white/50 text-sm sm:text-base font-[var(--font-quicksand)] font-light leading-relaxed">
              Real-time intelligence drives recommendations. Human oversight approves direction and refines learning.
            </p>
          </div>
        </div>

        {/* Large feature card — flow diagram */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
          <div className="p-6 sm:p-10 overflow-x-auto">
            <svg
              viewBox="0 0 1100 450"
              className="w-full h-auto min-w-[700px]"
              fill="none"
            >
              <defs>
                <filter id="flowDotGlow" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="towerGlow" x="-15%" y="-5%" width="130%" height="110%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ── Header labels ── */}
              <text x="72" y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" letterSpacing="1.5" style={{ fontFamily: "var(--font-quicksand)" }}>
                Data Signal
              </text>
              <line x1="130" y1="17" x2="165" y2="17" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <text x="278" y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" letterSpacing="1.5" style={{ fontFamily: "var(--font-quicksand)" }}>
                Data Intelligence
              </text>
              <line x1="352" y1="17" x2="387" y2="17" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <text x="497" y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" letterSpacing="1.5" style={{ fontFamily: "var(--font-quicksand)" }}>
                Real Time Opportunity
              </text>
              <line x1="590" y1="17" x2="620" y2="17" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <text x="707" y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" letterSpacing="1.5" style={{ fontFamily: "var(--font-quicksand)" }}>
                Human in-the-Loop
              </text>
              <line x1="790" y1="17" x2="870" y2="17" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <text x="940" y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" letterSpacing="1.5" style={{ fontFamily: "var(--font-quicksand)" }}>
                Action
              </text>

              {/* ── Data Signal boxes ── */}
              {dataSignals.map((s, i) => (
                <g key={`sig-${i}`}>
                  <rect
                    x={10} y={s.y} width={128} height={44} rx={6}
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth={1}
                  />
                  <text
                    x={74} y={s.y + 17}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.85)"
                    fontSize="9"
                    fontWeight="400"
                    style={{ fontFamily: "var(--font-quicksand)" }}
                  >
                    {s.lines.map((line, j) => (
                      <tspan key={j} x={74} dy={j === 0 ? 0 : 13}>{line}</tspan>
                    ))}
                  </text>
                </g>
              ))}

              {/* ── Intelligence Tower ── */}
              {/* Glow layer */}
              <rect
                x={198} y={45} width={160} height={370} rx={12}
                fill="rgba(72,255,255,0.06)"
                filter="url(#towerGlow)"
              />
              {/* Main tower */}
              <rect
                x={198} y={45} width={160} height={370} rx={12}
                fill="rgba(72,255,255,0.15)"
                stroke="rgba(72,255,255,0.45)"
                strokeWidth={1}
              />
              <text
                x={278} y={222}
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="11"
                fontWeight="500"
                style={{ fontFamily: "var(--font-quicksand)" }}
              >
                <tspan x={278} dy={0}>Always-On</tspan>
                <tspan x={278} dy={16}>Market Intelligence</tspan>
                <tspan x={278} dy={16}>Monitoring</tspan>
              </text>

              {/* ── Insight Box ── */}
              <rect
                x={420} y={210} width={155} height={60} rx={6}
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1}
              />
              <text
                x={497} y={234}
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="10"
                style={{ fontFamily: "var(--font-quicksand)" }}
              >
                <tspan x={497} dy={0}>Real Time</tspan>
                <tspan x={497} dy={14}>Performance Insight</tspan>
              </text>

              {/* ── Human Approval ── */}
              <rect
                x={640} y={187} width={135} height={46} rx={6}
                fill="rgba(34,197,94,0.7)"
                stroke="rgba(34,197,94,0.9)"
                strokeWidth={1}
              />
              <text
                x={707} y={215}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="10"
                fontWeight="500"
                style={{ fontFamily: "var(--font-quicksand)" }}
              >
                Human Approval
              </text>

              {/* ── Human Feedback ── */}
              <rect
                x={640} y={302} width={135} height={46} rx={6}
                fill="rgba(34,197,94,0.7)"
                stroke="rgba(34,197,94,0.9)"
                strokeWidth={1}
              />
              <text
                x={707} y={330}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="10"
                fontWeight="500"
                style={{ fontFamily: "var(--font-quicksand)" }}
              >
                Human Feedback
              </text>

              {/* ── Action Boxes ── */}
              {actionOutputs.map((a, i) => (
                <g key={`act-${i}`}>
                  <rect
                    x={840} y={a.y} width={210} height={a.h} rx={6}
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(72,255,255,0.3)"
                    strokeWidth={1}
                  />
                  <text
                    x={945}
                    y={a.y + (a.lines.length <= 2 ? a.h / 2 - 5 : a.h / 2 - 12)}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.85)"
                    fontSize="10"
                    style={{ fontFamily: "var(--font-quicksand)" }}
                  >
                    {a.lines.map((line, j) => (
                      <tspan key={j} x={945} dy={j === 0 ? 0 : 14}>{line}</tspan>
                    ))}
                  </text>
                </g>
              ))}

              {/* ── Connection lines ── */}
              {connectionPaths.map((d, i) => (
                <path
                  key={`conn-${i}`}
                  d={d}
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth={1}
                />
              ))}

              {/* ── Animated flow dots ── */}
              {flowDots.map((dot, i) => (
                <circle
                  key={`fdot-${i}`}
                  r="2.5"
                  fill="rgba(72,255,255,0.9)"
                  filter="url(#flowDotGlow)"
                >
                  <animateMotion
                    path={dot.path}
                    dur={dot.dur}
                    begin={dot.begin}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.15;0.7;1"
                    dur={dot.dur}
                    begin={dot.begin}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
