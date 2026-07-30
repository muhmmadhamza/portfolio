# Premium Developer Portfolio

A production-ready, senior-engineer-grade portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui**-style components.

## ✨ Features

- Apple / Vercel / Linear-inspired minimal design with glassmorphism accents
- Full dark / light mode (system-aware, no flash of unstyled theme)
- Command menu (`⌘K` / `Ctrl+K`) for quick navigation
- Scroll progress bar, back-to-top button, active-section highlighting in the navbar
- Fully animated with Framer Motion — scroll reveals, staggered entrances, hover micro-interactions
- 10 complete sections: Hero, About, Tech Stack, Featured Projects (with case-study dialogs), Experience timeline, Services, Testimonials, GitHub Stats, Contact form, Footer
- Working contact form (`/api/contact`) with Zod validation, rate limiting, and optional [Resend](https://resend.com) email delivery
- Full SEO: metadata, OpenGraph, Twitter Cards, JSON-LD structured data (Person + WebSite), dynamic `sitemap.xml` and `robots.txt`
- Dynamically generated favicon, Apple touch icon, and OG image (`app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`) — no binary asset files needed
- Accessible: skip-to-content link, semantic markup, focus states, `prefers-reduced-motion` support
- Mobile-first, responsive down to 320px

## 🧱 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, RSC-first) |
| UI Library | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-based `@theme`, no `tailwind.config.js`) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Components | shadcn/ui pattern (Radix primitives + CVA) |
| Forms | react-hook-form + Zod |
| Command menu | cmdk |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY` — optional. If set, the contact form sends real emails via [Resend](https://resend.com). If omitted, submissions are simply logged server-side (useful for local dev).
- `NEXT_PUBLIC_SITE_URL` — your production domain, used for canonical URLs, sitemap, and structured data.

## ✏️ Customization

All content lives in `/data` — no need to touch component code to update copy:

| File | Controls |
|---|---|
| `data/site-config.ts` | Name, title, tagline, social links, nav items, SEO keywords |
| `data/projects.ts` | Featured projects, images, tags, features, challenges, links |
| `data/tech-stack.ts` | Tech stack cards + proficiency by category |
| `data/experience.ts` | Experience timeline entries |
| `data/services.ts` | Services offered + testimonials |

Replace project images with your own (Unsplash URLs are used as placeholders) and update `avatar` URLs in testimonials with real headshots (or your clients' with permission).

To swap your GitHub username for the stats section, update `siteConfig.links.github` — the GitHub Stats section derives the username from that URL automatically.

Add a real `resume.pdf` to `/public/resume.pdf` — the "Resume" buttons already link to `siteConfig.links.resume`.

### Theming

All design tokens (colors, radius, fonts) are defined as CSS variables in `app/globals.css` under `:root` and `.dark`. Colors use OKLCH for perceptually consistent light/dark variants — adjust the `--accent` value to change the entire site's accent color in one place.

## 📦 Project Structure

```
app/
  api/contact/route.ts   # Contact form handler (Zod + rate limit + Resend)
  icon.tsx                # Dynamic favicon
  apple-icon.tsx          # Dynamic Apple touch icon
  opengraph-image.tsx     # Dynamic OG image
  sitemap.ts / robots.ts  # Dynamic SEO files
  layout.tsx / page.tsx
components/
  layout/                 # Navbar, Footer, ThemeToggle, CommandMenu, etc.
  sections/               # Hero, About, Projects, Experience, Services, ...
  ui/                     # shadcn-style primitives (Button, Card, Dialog, ...)
data/                     # All editable content
hooks/                    # useScrollProgress, useActiveSection
lib/utils.ts              # `cn()` class merge helper
```

## 🏗️ Build & Deploy

```bash
npm run build
npm run start
```

Deploys cleanly to [Vercel](https://vercel.com) with zero configuration. Remember to set `RESEND_API_KEY` and `NEXT_PUBLIC_SITE_URL` in your deployment's environment variables.

## ✅ Performance & Quality Checklist

- Server Components by default; `"use client"` only where interactivity (motion, forms, theme) requires it
- `next/image` for all raster images with responsive `sizes`
- `optimizePackageImports` enabled for `lucide-react` and `framer-motion`
- Long-cache headers for static assets
- Semantic HTML, labeled form fields, visible focus rings, reduced-motion media query respected
