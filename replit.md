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
src/app/          - Next.js App Router pages and components
src/app/components/ - Reusable React components
src/app/data/     - Data files
public/           - Static assets (images, videos, SVGs)
```

## Running the Project
- **Dev**: `npx next dev --hostname 0.0.0.0 --port 5000`
- **Build**: `npm run build`
- **Start**: `npm run start`

## Recent Changes
- 2026-02-10: Imported from GitHub, configured for Replit environment (allowedDevOrigins, port 5000)
