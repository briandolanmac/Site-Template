# Green-House Renewables - Next.js Website

## Overview
A Next.js 16 website for Green-House Renewables, an Irish solar energy company. The site showcases solar panel installations, battery storage, EV chargers, and related services for both residential and commercial customers.

## Project Architecture
- **Framework**: Next.js 16.1.6 with React 19, TypeScript, Tailwind CSS 4
- **Build System**: Turbopack (Next.js dev server)
- **Styling**: Tailwind CSS with PostCSS
- **Theming**: next-themes for dark/light mode support
- **Admin Panel**: Password-protected admin at `/admin` for editing JSON content files

### Directory Structure
```
src/app/              - Next.js App Router pages and layout
src/app/admin/        - Admin panel (page.tsx, layout.tsx, admin.css)
src/app/api/admin/    - Admin API routes (data read/write)
src/app/components/   - Reusable React components
  home/               - Homepage-specific components (Navigation, Footer, sections)
  PageLayout.tsx      - Shared layout wrapper for inner pages (Navigation + Footer + client JS)
src/app/data/home/    - JSON data files for homepage sections (17 files)
src/app/data/pages/   - JSON data files for inner pages (Solar Panels, Battery Storage, EV Chargers)
src/app/[route]/      - Individual page routes (about, solar-panels, contact, etc.)
public/               - Static assets (images, videos, SVGs)
```

### Pages
- `/` - Homepage with hero, services, impact stats, testimonials, FAQ
- `/about` - Company story, team, values
- `/solar-panels` - Residential solar PV systems
- `/battery-storage` - Home battery storage solutions
- `/commercial-solar` - Commercial solar solutions
- `/ev-chargers` - EV charger installation
- `/grants` - SEAI grants information
- `/finance` - Finance Ireland partnership
- `/funding-options` - Business funding/SSAP grants
- `/projects` - Portfolio/case studies
- `/contact` - Contact form and info
- `/quote-builder` - Free quote request form
- `/testimonials` - Customer reviews
- `/privacy-policy` - Privacy policy
- `/cookies` - Cookie policy
- `/admin` - Admin panel (password protected)

### Admin Panel
- **URL**: `/admin`
- **Password**: Set via ADMIN_PASSWORD environment variable
- **API**: `/api/admin/data` (GET to read, PUT to write JSON files)
- **Features**: Section-by-section editing, smart field types (text/textarea/toggle/arrays), search, save individual or all modified sections

## Running the Project
- **Dev**: `npx next dev --hostname 0.0.0.0 --port 5000`
- **Build**: `npm run build`
- **Start**: `npm run start`

## CSS Color System
- All section titles use `var(--text-primary)` (adapts to light/dark theme)
- All section eyebrows use `var(--teal)` for brand green
- All section subtitles use `var(--text-secondary)`
- Sections on dark backgrounds add class `section-on-dark` to auto-switch: eyebrow → gold, title → white, subtitle → white/80%
- Brand color utility classes: `.text-brand` (teal), `.text-brand-dark`, `.text-brand-muted`, `.text-brand-accent` (gold)
- Inner pages use `.page-eyebrow` and `.page-title` for consistent typography
- No hardcoded hex colors in text — all flow from CSS variables defined in :root

## SEO System
- **SEO Data**: `src/app/data/seo.json` — centralized SEO config with per-page meta info, structured data, business info, and service definitions. Editable via admin panel.
- **Meta Tags**: All pages use `generatePageMetadata()` from `src/app/components/SeoHead.tsx` — pulls title, description, keywords, OG tags, canonical URLs from seo.json
- **Structured Data**: `src/app/components/StructuredData.tsx` (client component) — renders JSON-LD schemas (LocalBusiness, WebSite, Service, FAQ, Review, BreadcrumbList) based on page type
- **Sitemap**: `src/app/sitemap.ts` — auto-generated from seo.json pages with priority/changeFrequency
- **Robots**: `src/app/robots.ts` — blocks /admin and /api/, points to sitemap
- **Image Optimization**: Hero image uses next/image with priority loading; service card images use next/image; inner page images use loading="lazy"

## Content Management
- **All page content** is stored in JSON files under `src/app/data/` and editable via the admin panel
- **Homepage sections**: 17 JSON files in `src/app/data/home/` (Hero, Services, FAQ, Testimonials, etc.)
- **Inner pages**: 13 JSON files in `src/app/data/pages/` (About, Solar Panels, Battery Storage, EV Chargers, Commercial Solar, Grants, Finance, Funding Options, Contact, Testimonials, Quote Builder, Privacy Policy, Cookies)
- **Site Settings**: `src/app/data/home/SiteSettings.json` — includes VoltFlo Calculator URL used by all quote CTAs
- **VoltFlo URL**: Centralized via `src/app/lib/siteSettings.ts` → `getVoltfloUrl()` — all "Get a Quote" buttons use this
- **Admin panel**: 32 total editable sections registered in SECTION_LABELS/SECTION_ORDER (admin/page.tsx + AdminSidebar.tsx) and VALID_FILES (API route)

## Recent Changes
- 2026-02-18: All remaining pages converted to JSON data files (Commercial Solar, Grants, Finance, Funding Options, Contact, Testimonials, Quote Builder, Privacy Policy, Cookies) — 32 total admin-editable sections
- 2026-02-17: Comprehensive SEO implementation — structured data, meta tags, sitemap.xml, robots.txt, canonical URLs, OG/Twitter cards, internal linking, image optimization via next/image
- 2026-02-17: Refactored CSS to remove all hardcoded title/eyebrow colors; unified typography via CSS variables and section-on-dark modifier
- 2026-02-16: Added JSON data files and admin editing for Solar Panels, Battery Storage, and EV Chargers pages
- 2026-02-16: Added admin panel at /admin for editing JSON data files, password-protected via ADMIN_PASSWORD env var
- 2026-02-16: Fixed remaining cyan focus rings to emerald green, improved hero text contrast
- 2026-02-13: Color palette updated to match green-house.ie - emerald green (#009968) primary, dark navy (#112F5B) secondary, gold (#CBB492) accent, dark teal (#12222E) backgrounds
- 2026-02-12: Visual overhaul to casual/fun tone - brighter cyan/sky blue palette, coral/purple accents, rounder corners, unique colorful hero gradients per page
- 2026-02-10: Created all 14 missing pages and PageLayout component to fix 404 navigation errors
- 2026-02-10: Added scroll-triggered animations (IntersectionObserver-based) throughout homepage
- 2026-02-10: Imported from GitHub, configured for Replit environment (allowedDevOrigins, port 5000)

## User Preferences
- Brand: Green-House Renewables (green-house.ie)
- Contact: +353 1 207 0006, info@green-house.ie, Deansgrange Business Park Blackrock Dublin
