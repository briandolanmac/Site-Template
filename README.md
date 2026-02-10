# Infinite Energy Next.js Site

This project converts the static Infinite Energy homepage into a Next.js App Router site and adds Tailwind v4 theme switching based on the theme colors example.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Setup Notes

- Node.js 18+ is recommended.
- Themes are applied via `data-theme` on the document and CSS variables in `src/app/globals.css`.

## Features

### Themes

Theme switching is handled via `next-themes` and the buttons near the top of the page.

Available themes:
- Light
- Dark
- Sunburst Red
- Sky Blue
- Solar Flare Gold
- Solar Panel Green
- June Bud

Theme definitions live in [src/app/globals.css](src/app/globals.css). Theme buttons live in [src/app/components/theme-buttons.tsx](src/app/components/theme-buttons.tsx).

Theme palettes (key tokens):
- Light: slate #0f1f24, teal #0d5c5f, aqua #2cb5ba, amber #f5a623, bg #ffffff
- Dark: slate #111827, teal #4dd0db, aqua #06b6d4, amber #fbbf24, bg #111827
- Sunburst Red: slate #3b0d0d, teal #d62828, aqua #f77f00, amber #fcbf49, bg #fff5e6
- Sky Blue: slate #0b3c5d, teal #2a6f97, aqua #87ceeb, amber #ffd166, bg #f0f9ff
- Solar Flare Gold: slate #3b2a0a, teal #b7791f, aqua #daa520, amber #f59e0b, bg #fff8e1
- Solar Panel Green: slate #0f2a13, teal #2f7a1f, aqua #4dbd33, amber #a3e635, bg #f2fff0
- June Bud: slate #2f3b16, teal #6b7f2a, aqua #bcc95f, amber #e9c46a, bg #fbffe6

### Data-Driven Components

Most home page sections read their content from JSON files in [src/app/data/home](src/app/data/home). Each section JSON supports an `enabled` flag to hide/show that component.

Examples:
- [src/app/data/home/HeroSection.json](src/app/data/home/HeroSection.json)
- [src/app/data/home/ServicesSection.json](src/app/data/home/ServicesSection.json)

### Home Page Setup and Configuration

The home page is assembled in [src/app/components/home/HomePage.tsx](src/app/components/home/HomePage.tsx) and controlled by [src/app/data/home/HomePage.json](src/app/data/home/HomePage.json).

- `sections` toggles allow you to enable/disable each section at a high level.
- `order` controls the rendering order of main sections.

If a section is disabled in its own JSON or in `HomePage.json`, it will not render.

## Notes

- Theme switching is handled via `next-themes` and the buttons near the top of the page.
- Static assets from the original site live under `public/images` and `public/videos`.
