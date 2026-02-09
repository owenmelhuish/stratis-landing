# STRATIS Landing Page

## Project Overview

Single-page landing site for STRATIS built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features a full-screen animated shader background with a glassmorphism waitlist signup form.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19.2.3, TypeScript 5
- **Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`
- **3D/Shaders:** Three.js 0.182, @react-three/fiber 9.5, @paper-design/shaders-react 0.0.71
- **Fonts:** Geist Sans, Geist Mono, Quicksand (loaded via next/font/google)

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata ("STRATIS - Join the Waitlist"), dark mode
│   ├── page.tsx            # Home page — renders ShaderBackground + HeroContent
│   ├── globals.css         # Tailwind config, CSS variables (OKLCH colors), ripple animation
│   └── favicon.ico
└── components/
    ├── hero-content.tsx    # Client component — logo, waitlist button, modal form, all state
    ├── shader-background.tsx # Client component — MeshGradient (black/cyan palette), pulsing overlays
    └── ui/
        └── background-paper-shaders.tsx # Unused Three.js utilities (ShaderPlane, EnergyRing)
public/
└── stratis-logo.svg        # Brand logo (inverted white via CSS)
```

## Architecture

```
page.tsx (server component)
└── <main> full-screen container
    ├── <ShaderBackground />   — absolute, fills viewport, animated gradient
    └── <HeroContent />        — absolute overlay, z-10, centered
        ├── Logo + "Apply For The Waitlist" button (opacity-10, visible on hover)
        └── Modal form (fixed overlay, z-50, shown on button click)
```

### Key Component: `hero-content.tsx`

This is the main interactive component. It manages all UI state:

- **`isOpen`** — controls whether the modal is mounted in the DOM
- **`isVisible`** — triggers CSS opacity/scale transitions one frame after mount (via `requestAnimationFrame`)
- **Form fields:** `name`, `company`, `email`

**Animation flow:**
1. Click button -> `isOpen = true` (mounts modal at opacity-0, scale-95)
2. Next frame -> `isVisible = true` (transitions to opacity-100, scale-100 over 300ms)
3. Simultaneously, the logo+button wrapper transitions to opacity-0
4. Close (X, backdrop click, or submit) -> `isVisible = false` (fade out), then after 300ms `isOpen = false` (unmount)

**Hover behavior:** The logo+button wrapper starts at `opacity-10` and uses Tailwind's `has-[:hover]:opacity-100` to become fully visible when the user hovers over the button area.

### Key Component: `shader-background.tsx`

Full-screen MeshGradient shader with colors `[black, black, dark blue, cyan]` at speed 1.0. Three pulsing radial gradient overlays animate on top at staggered intervals (2-4s cycles).

## Styling Patterns

- **Glassmorphism:** `bg-white/10 backdrop-blur-xl border border-white/20` (button), `backdrop-blur-2xl` (modal)
- **Text:** Quicksand light (font-weight 300), white with alpha (`text-white/90`, `placeholder-white/40`)
- **Inputs:** `bg-white/5 border-white/15 rounded-xl`, focus state brightens border to `white/40`
- **Buttons:** `rounded-full`, glow on hover (`shadow-[0_0_30px_rgba(255,255,255,0.08)]`), `active:scale-95`
- **Ripple effect:** `.hvr-ripple-out` class in globals.css — radial gradient pulse animation on hover via `::before` pseudo-element

## Current Status

### Done
- Full-screen shader background with animated gradients
- Responsive logo (140px / 180px / 220px breakpoints)
- Glassmorphism waitlist button with ripple hover effect
- Modal form with fade-in/fade-out + scale animation
- Form fields: Name (required), Company (optional), Email (required)
- Logo+button fade out when form opens, fade back in on close
- Backdrop click and X button to dismiss
- Form validation (HTML5 required attributes)

### TODO
- **Email/submission integration** — `handleSubmit` in `hero-content.tsx` (around line 25) currently just closes the modal. Needs: API route, email service (Resend, SendGrid, etc.), success/error feedback.
- **Waitlist data persistence** — no database yet. Consider Supabase, PlanetScale, or simple webhook to a spreadsheet.
- **Success/error states** — no toast or confirmation message after submit.
- **Rate limiting** — no protection against spam submissions.
- **Analytics** — no tracking on page views or form submissions.
- **SEO/OG tags** — metadata exists in layout.tsx but no Open Graph images or detailed meta tags.
- **`background-paper-shaders.tsx`** — contains ShaderPlane and EnergyRing components that are not currently used. Can be removed or integrated later.

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
