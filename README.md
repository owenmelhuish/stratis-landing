# STRATIS Landing Page

## Project Overview

Multi-section landing site for STRATIS at stratis.technology. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features a full-screen animated shader background, parallax scroll architecture, glassmorphism sections, and a waitlist signup form with email integration.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19.2.3, TypeScript 5
- **Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`
- **3D/Shaders:** Three.js 0.182, @react-three/fiber 9.5, @paper-design/shaders-react 0.0.71
- **Fonts:** Geist Sans, Geist Mono, Quicksand (light body text), Playfair Display (serif italic headlines) — all via next/font/google
- **Email:** FormSubmit.co (no backend required)

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts (Geist, Quicksand, Playfair Display), metadata, dark mode
│   ├── page.tsx                # Home page — parallax layout with fixed hero + scrollable sections
│   ├── globals.css             # Tailwind config, CSS variables, animations (orbit, scroll, fade, ripple)
│   └── favicon.ico
└── components/
    ├── hero-content.tsx        # Client — logo, subtext, waitlist button, modal form with FormSubmit integration
    ├── shader-background.tsx   # Client — fixed MeshGradient (black/cyan palette), pulsing overlays
    ├── problem-section.tsx     # "Built for the Modern Marketer" — headline, quote, stats pill, CTA
    ├── solution-section.tsx    # "Introducing STRATIS" — 3 staggered feature cards with SVG diagrams
    ├── flywheel-section.tsx    # Animated circular flywheel — 4 segments with orbiting dot, descriptions
    ├── social-proof-section.tsx # Client logo grid, "The Emerging Standard", infinite-scroll testimonials
    └── ui/
        └── background-paper-shaders.tsx # Unused Three.js utilities (ShaderPlane, EnergyRing)
public/
└── stratis-logo.svg            # Brand logo (inverted white via CSS)
```

## Architecture

### Parallax Scroll Layout

The page uses a layered parallax architecture:

```
page.tsx (server component)
├── <ShaderBackground />           — fixed, z-0, full viewport animated gradient
├── <HeroContent /> wrapper        — fixed, z-10, centered, pointer-events-none
│   └── Logo + subtext + CTA      — pointer-events-auto (clickable when uncovered)
└── Scrollable content wrapper     — relative, z-20, pointer-events-none
    ├── <div h-screen />           — transparent spacer (hero visible, clickable)
    ├── Sections wrapper           — pointer-events-auto
    │   ├── <ProblemSection />
    │   ├── <SolutionSection />
    │   ├── <FlywheelSection />
    │   └── <SocialProofSection />
    ├── Gradient fade div          — h-32, fades from black/70 to transparent
    └── <div h-screen />           — transparent spacer (hero visible again, clickable)
```

**Key design decision:** The z-20 scrollable wrapper has `pointer-events-none` so the transparent spacers at the top and bottom allow clicks to pass through to the hero at z-10. The actual sections are wrapped in a `pointer-events-auto` div.

### Sections Detail

#### 1. Problem Section (`problem-section.tsx`)
- Label: "BUILT FOR THE MODERN MARKETER"
- Playfair italic headline with tonal variation (dim/bright text)
- Testimonial quote with avatar placeholder
- Stats pill: "EARLY ACCESS PILOTS UNDERWAY"
- "Learn More" CTA button
- Background: `bg-black/70 backdrop-blur-sm`

#### 2. Solution Section (`solution-section.tsx`)
- Badge: "INTRODUCING STRATIS" with pulsing cyan dot
- Headline: "Not a dashboard you open, a presence you work with."
- 3 staggered feature cards (`md:mt-12` on cards 1 & 3, card 2 raised):
  - **Unified Live Signal Layer** — SVG converging streams diagram (7 streams, cyan/white, glow filter)
  - **Always-On Intelligence** — Concentric circles with 6 animated orbiting dots (CSS orbit animations)
  - **Autonomous Market Execution** — Same streams diagram flipped via `scaleX(-1)`
- Cards use `flex flex-col` with `flex-1 min-h-8` spacers to align diagrams
- "Explore Capabilities" CTA

#### 3. Flywheel Section (`flywheel-section.tsx`)
- 4-segment circular SVG diagram: Seeing, Sensing, Reasoning, Responding
- Smooth continuous orbit via `requestAnimationFrame` (~24s per revolution)
- Active segment highlight (cyan fill) follows the orbiting dot
- Center: pulsing cyan glow with "LIVE" text
- Description text below fades in per active segment
- Diagram sizes: `w-[400px] sm:w-[560px] lg:w-[720px]`

#### 4. Social Proof Section (`social-proof-section.tsx`)
- Top: 4x2 client logo grid + "BUILT FOR THE MODERN MARKETER" label + "The Emerging Standard." headline + STRATIS body copy + "LEARN MORE" CTA
- Bottom: Two rows of infinite-scrolling testimonial cards (opposite directions, 40s cycle)
- Testimonials are brand case study results with metrics
- Each card shows handle, quote, role, and "Case Study" label

### Hero Content (`hero-content.tsx`)

Main interactive component managing all UI state:

- **`isOpen`** — controls whether the modal is mounted
- **`isVisible`** — triggers CSS opacity/scale transitions one frame after mount
- **`submitting`** — loading state during form submission
- **Form fields:** `name`, `company`, `email`

**Hero elements:**
- STRATIS logo (responsive: 140px / 180px / 220px)
- Subtext: "The Intelligent OS"
- "Apply For The Waitlist" CTA button with ripple hover effect

**Animation flow:**
1. Click button -> `isOpen = true` (mounts modal at opacity-0, scale-95)
2. Next frame -> `isVisible = true` (transitions to opacity-100, scale-100 over 300ms)
3. Logo+button wrapper transitions to opacity-0
4. Close -> `isVisible = false` (fade out), then after 300ms `isOpen = false` (unmount)

**Hover behavior:** Logo+button starts at `opacity-10`, uses `has-[:hover]:opacity-100` on hover.

### Shader Background (`shader-background.tsx`)

Fixed full-screen MeshGradient with colors `[black, black, dark blue, cyan]` at speed 1.0. Three pulsing radial gradient overlays at staggered intervals (2-4s cycles).

## Styling Patterns

- **Glassmorphism sections:** `bg-black/70 backdrop-blur-sm` (lets shader bleed through)
- **Glassmorphism cards:** `bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl`
- **Serif headlines:** Playfair Display italic via `style={{ fontFamily: "var(--font-playfair)" }}` (Tailwind arbitrary values don't reliably resolve CSS variable fonts)
- **Body text:** Quicksand light (font-weight 300), `text-white/50` to `text-white/60`
- **Labels:** `text-xs tracking-[0.25em] uppercase`, `text-white/40`
- **Buttons:** `rounded-full border border-white/15 bg-white/5`, hover brightens
- **Accent color:** Cyan (`text-cyan-400`, `rgba(72,255,255,...)`)
- **Ripple effect:** `.hvr-ripple-out` — radial gradient pulse animation via `::before`

## CSS Animations (globals.css)

| Class | Purpose |
|---|---|
| `.hvr-ripple-out` | Radial gradient pulse on hover (hero CTA) |
| `.animate-fade-in` | Fade in + translateY for flywheel descriptions |
| `.animate-scroll-left` | Infinite horizontal scroll left, 40s (testimonials row 1) |
| `.animate-scroll-right` | Infinite horizontal scroll right, 40s (testimonials row 2) |
| `.animate-orbit-8` | 8s circular orbit (solution card dots) |
| `.animate-orbit-10` | 10s circular orbit (solution card dots) |
| `.animate-orbit-12-reverse` | 12s reverse circular orbit (solution card dots) |

## Email Integration

Waitlist form submissions are sent via **FormSubmit.co** (AJAX mode):

- **Primary recipient:** owen@stratis.technology
- **CC:** kyle@stratis.technology
- **Subject:** "New Waitlist Submission: {name}"
- **Fields sent:** name, email, company

**Setup note:** The first submission triggers a confirmation email from FormSubmit to owen@stratis.technology. Click the confirmation link to activate. After that, all submissions flow automatically.

No backend API route, no packages, no API keys required.

## Current Status

### Done
- Full parallax scroll landing page with shader background
- Hero section with logo, subtext ("The Intelligent OS"), and waitlist CTA
- 4 content sections with glassmorphism styling
- Animated SVG diagrams (converging streams, orbiting dots, flywheel)
- Infinite-scroll testimonial carousel
- Waitlist form with email integration (FormSubmit.co)
- Interactive hero (hover/click) works at top and bottom of page
- Responsive design across all breakpoints

### TODO
- **Waitlist data persistence** — no database. Consider Supabase or webhook to spreadsheet.
- **Success/error states** — no toast or confirmation message after form submit.
- **Rate limiting** — no protection against spam submissions.
- **Analytics** — no tracking on page views or form submissions.
- **SEO/OG tags** — metadata exists in layout.tsx but no Open Graph images or detailed meta tags.
- **Client logos** — logo grid currently shows placeholder text, needs real logo assets.
- **`background-paper-shaders.tsx`** — unused Three.js components. Can be removed.

## Deployment

- **Hosting:** Vercel (auto-deploys from GitHub)
- **Repository:** github.com/owenmelhuish/stratis-landing
- **Custom Domain:** stratis.technology (DNS via GoDaddy)
- **Vercel URL:** stratis-landing.vercel.app

### Deployment Workflow

```
Local code change → git push to main → Vercel auto-deploys → live on stratis.technology
```

Every push to the `main` branch triggers an automatic production deployment on Vercel. No manual deployment steps are needed.

### DNS Configuration (GoDaddy → Vercel)

| Type | Name | Value |
|------|------|-------|
| A | @ | 216.198.79.1 |
| CNAME | www | cname.vercel-dns.com |

## Development

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint
```

## Config Files

| File | Purpose |
|---|---|
| `next.config.ts` | Minimal — no custom config yet |
| `tsconfig.json` | Strict mode, `@/*` path alias to `./src/*` |
| `postcss.config.mjs` | `@tailwindcss/postcss` plugin |
| `eslint.config.mjs` | core-web-vitals + typescript rules |
