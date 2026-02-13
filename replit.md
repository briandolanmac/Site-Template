# Infinite Energy - Next.js Website

## Overview
A Next.js 16 website for Infinite Energy, an Irish solar energy company. The site showcases solar panel installations, battery storage, EV chargers, and related services for both residential and commercial customers.

## Project Architecture
- **Framework**: Next.js 16.1.6 with React 19, TypeScript, Tailwind CSS 4
- **Build System**: Turbopack (Next.js dev server)
- **Styling**: Tailwind CSS with PostCSS
- **Theming**: next-themes for dark/light mode support

### Directory Structure
```
src/app/              - Next.js App Router pages and layout
src/app/components/   - Reusable React components
  home/               - Homepage-specific components (Navigation, Footer, sections)
  PageLayout.tsx      - Shared layout wrapper for inner pages (Navigation + Footer + client JS)
src/app/data/         - JSON data files for sections
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

## Running the Project
- **Dev**: `npx next dev --hostname 0.0.0.0 --port 5000`
- **Build**: `npm run build`
- **Start**: `npm run start`

## Recent Changes
- 2026-02-13: Color palette updated to match green-house.ie - emerald green (#009968) primary, dark navy (#112F5B) secondary, gold (#CBB492) accent, dark teal (#12222E) backgrounds
- 2026-02-12: Visual overhaul to casual/fun tone - brighter cyan/sky blue palette, coral/purple accents, rounder corners, unique colorful hero gradients per page
- 2026-02-10: Created all 14 missing pages and PageLayout component to fix 404 navigation errors
- 2026-02-10: Added scroll-triggered animations (IntersectionObserver-based) throughout homepage
- 2026-02-10: Imported from GitHub, configured for Replit environment (allowedDevOrigins, port 5000)
