# Solar Path - Next.js Website

## Overview
A Next.js 16 website for Solar Path (solarpath.ie), an Irish solar panel installer based in Cork. The site showcases solar PV installations for homes, farms, and businesses, plus battery storage and EV chargers. Features a modern dark navy (#0B1D3A) and orange/amber (#F5A623, #E8930C) color scheme.

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
src/app/data/pages/   - JSON data files for inner pages (Solar Panels, Battery Storage, EV Chargers, About)
src/app/[route]/      - Individual page routes (about, solar-panels, contact, etc.)
public/               - Static assets (images, videos, SVGs)
```

### Pages
- `/` - Homepage with hero, services, impact stats, testimonials, FAQ
- `/about` - Company mission, team, values
- `/solar-panels` - Residential solar PV systems
- `/battery-storage` - Home battery storage solutions
- `/commercial-solar` - Commercial solar solutions
- `/ev-chargers` - EV charger installation
- `/grants` - SEAI grants information
- `/finance` - Finance options
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

## Recent Changes
- 2026-02-16: Complete rebranding from Green-House Renewables to Solar Path - all JSON data files, page content, contact info, logos, social links, and metadata updated
- 2026-02-16: Color scheme: dark navy (#0B1D3A) primary, orange/amber (#F5A623, #E8930C) accents
- 2026-02-16: Added JSON data files and admin editing for Solar Panels, Battery Storage, and EV Chargers pages
- 2026-02-16: Added admin panel at /admin for editing JSON data files
- 2026-02-10: Created all pages and PageLayout component
- 2026-02-10: Added scroll-triggered animations throughout homepage
- 2026-02-10: Imported from GitHub, configured for Replit environment

## User Preferences
- Brand: Solar Path (solarpath.ie)
- Contact: 087 259 1114, sales@solarpath.ie, 82 South Mall Cork T12 E3TT
- Social: Facebook (solarpathire), Instagram (solarpath.ireland)
- Team: Ken Hegarty (CEO), John Dennehy (Director), Jose Alfaro, Neil Brown, David Walsh, Bryan O Sullivan
- Design: Dark navy (#0B1D3A) primary, orange (#F5A623, #E8930C) accents
