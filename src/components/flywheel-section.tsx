"use client"

import { useState, useEffect, useRef } from "react"

const segments = [
  {
    label: "Seeing",
    description: "Connecting performance data with live third-party market, consumer, and competitive signals into a single, continuously updating view.",
  },
  {
    label: "Sensing",
    description: "Continuously interpreting incoming signals to understand shifts in market context, demand, and behavior as they happen.",
  },
  {
    label: "Reasoning",
    description: "Detecting patterns and relationships across signals to generate actionable recommendations in the moment.",
  },
  {
    label: "Responding",
    description: "Executing decisions in market autonomously — adjusting strategy, reallocating spend, and responding on platform within defined guardrails and approval logic.",
  },
]

export default function FlywheelSection() {
  const [rotation, setRotation] = useState(0)
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const speed = 0.015 // degrees per ms (~24s per full rotation)

    function animate(time: number) {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current
        setRotation((prev) => (prev + delta * speed) % 360)
      }
      lastTimeRef.current = time
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  const centerX = 200
  const centerY = 200
  const outerRadius = 170
  const innerRadius = 95

  // Label positions at 45°, 135°, 225°, 315° (center of each quadrant)
  const labelAngles = [0, 90, 180, 270]

  function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  // Which segment is the dot currently in
  const activeIndex = Math.floor(((rotation % 360) / 360) * 4) % 4

  // Dot position on the outer edge
  const dotPos = polarToCartesian(centerX, centerY, outerRadius + 10, rotation)

  return (
    <section className="relative bg-black/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center">
          {/* Headline */}
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="italic text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-center mb-6"
          >
            <span className="text-white/40">The Engine of </span>
            <span className="text-white">Compounding Performance</span>
          </h2>

          {/* Subtext */}
          <p className="text-white/50 text-base sm:text-lg text-center max-w-2xl mx-auto font-[var(--font-quicksand)] font-light leading-relaxed mb-4 sm:mb-6">
            STRATIS is an always-on system that turns real-time signals into intelligent action. Creating sustained performance over time.
          </p>
          <div className="relative w-[400px] h-[400px] sm:w-[560px] sm:h-[560px] lg:w-[720px] lg:h-[720px]">
            {/* Data stream noodles — behind the diagram */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <defs>
                <radialGradient id="streamFade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(72,255,255,0)" />
                  <stop offset="40%" stopColor="rgba(72,255,255,0)" />
                  <stop offset="70%" stopColor="rgba(72,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(72,255,255,0.12)" />
                </radialGradient>
                <mask id="streamMask">
                  <rect width="400" height="400" fill="url(#streamFade)" />
                </mask>
              </defs>
              <g mask="url(#streamMask)">
                {[
                  { d: "M 10,80 C 60,90 120,140 200,200", delay: "0s", dur: "3.5s" },
                  { d: "M 50,10 C 80,60 150,110 200,200", delay: "1s", dur: "3s" },
                  { d: "M 350,30 C 320,80 260,130 200,200", delay: "1.8s", dur: "3.2s" },
                  { d: "M 390,150 C 340,160 270,170 200,200", delay: "0.5s", dur: "3.4s" },
                  { d: "M 380,340 C 330,310 270,260 200,200", delay: "2.5s", dur: "3s" },
                  { d: "M 60,370 C 90,320 140,260 200,200", delay: "1.4s", dur: "3.6s" },
                ].map((stream, i) => (
                  <path
                    key={`stream-${i}`}
                    d={stream.d}
                    fill="none"
                    stroke="rgba(72,255,255,0.15)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="animate-stream-pulse"
                    style={{
                      animationDelay: stream.delay,
                      animationDuration: stream.dur,
                    }}
                  />
                ))}
              </g>
            </svg>

            {/* Main flywheel diagram */}
            <svg
              viewBox="0 0 400 400"
              className="relative w-full h-full"
              fill="none"
            >
              <defs>
                <filter id="segmentGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="centerPulse" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer ring — clean circle borders, no angled dividers */}
              <circle
                cx={centerX}
                cy={centerY}
                r={outerRadius}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              <circle
                cx={centerX}
                cy={centerY}
                r={innerRadius}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />

              {/* Subtle ring fill between inner and outer */}
              <circle
                cx={centerX}
                cy={centerY}
                r={(outerRadius + innerRadius) / 2}
                fill="none"
                stroke="rgba(255,255,255,0.02)"
                strokeWidth={outerRadius - innerRadius}
              />

              {/* Quadrant divider lines — thin, subtle curves along the ring */}
              {[0, 90, 180, 270].map((angle) => {
                const inner = polarToCartesian(centerX, centerY, innerRadius, angle)
                const outer = polarToCartesian(centerX, centerY, outerRadius, angle)
                return (
                  <line
                    key={angle}
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                )
              })}

              {/* Active segment arc highlight */}
              {(() => {
                const startAngle = activeIndex * 90
                const endAngle = startAngle + 90
                const outerStart = polarToCartesian(centerX, centerY, outerRadius, startAngle)
                const outerEnd = polarToCartesian(centerX, centerY, outerRadius, endAngle)
                const innerEnd = polarToCartesian(centerX, centerY, innerRadius, endAngle)
                const innerStart = polarToCartesian(centerX, centerY, innerRadius, startAngle)
                const path = [
                  `M ${outerStart.x} ${outerStart.y}`,
                  `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
                  `L ${innerEnd.x} ${innerEnd.y}`,
                  `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}`,
                  "Z",
                ].join(" ")
                return (
                  <path
                    d={path}
                    fill="rgba(72,255,255,0.06)"
                    stroke="none"
                    filter="url(#segmentGlow)"
                  />
                )
              })()}

              {/* Segment labels */}
              {segments.map((seg, i) => {
                const midAngle = labelAngles[i] + 45
                const labelPos = polarToCartesian(
                  centerX,
                  centerY,
                  (outerRadius + innerRadius) / 2,
                  midAngle
                )
                const isActive = i === activeIndex

                return (
                  <text
                    key={i}
                    x={labelPos.x}
                    y={labelPos.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isActive ? "rgba(72,255,255,0.9)" : "rgba(255,255,255,0.4)"}
                    fontSize="8"
                    fontWeight="300"
                    letterSpacing="2.5"
                    className="transition-colors duration-500"
                    style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                  >
                    {seg.label}
                  </text>
                )
              })}

              {/* Inner decorative ring */}
              <circle
                cx={centerX}
                cy={centerY}
                r={innerRadius - 12}
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              />

              {/* Center pulsing glow */}
              <circle
                cx={centerX}
                cy={centerY}
                r={48}
                fill="rgba(72,255,255,0.06)"
                filter="url(#centerPulse)"
                className="animate-pulse"
                style={{ animationDuration: "3s" }}
              />

              {/* Center circles */}
              <circle
                cx={centerX}
                cy={centerY}
                r={40}
                fill="rgba(72,255,255,0.05)"
                stroke="rgba(72,255,255,0.2)"
                strokeWidth="1"
              />
              <circle
                cx={centerX}
                cy={centerY}
                r={30}
                fill="rgba(72,255,255,0.04)"
                stroke="rgba(72,255,255,0.12)"
                strokeWidth="1"
              />

              {/* Center text */}
              <text
                x={centerX}
                y={centerY + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(72,255,255,0.9)"
                fontSize="11"
                fontWeight="500"
                letterSpacing="3"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                LIVE
              </text>

              {/* Continuously orbiting dot */}
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r="4"
                fill="rgba(72,255,255,0.9)"
                filter="url(#dotGlow)"
              />
            </svg>
          </div>

          {/* Active segment description */}
          <div className="h-20 sm:h-16 flex items-start justify-center max-w-lg text-center mt-10">
            <p
              key={activeIndex}
              className="text-white/50 text-sm sm:text-base font-[var(--font-quicksand)] font-light leading-relaxed animate-fade-in"
            >
              <span className="text-cyan-400 font-medium">{segments[activeIndex].label}: </span>
              {segments[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
