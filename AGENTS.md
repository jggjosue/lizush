<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

**Lizush Architect Studio** is a portfolio/showcase website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

- **Core Stack**: Next.js 16.2.4, React 19.2.4, TypeScript 5, Tailwind CSS 4
- **Architecture**: Multi-page portfolio with server and client components
- **Styling**: Tailwind CSS with custom color palette (earth tones: `#5b3f2e`, `#f6f0e7`, etc.)
- **Build System**: Next.js with ESLint 9 for code quality

## Development Workflow

### Starting Development
```bash
npm run dev
```
Runs the dev server at `http://localhost:3000`.

### Building for Production
```bash
npm run build
npm start
```

### Code Quality
```bash
npm run lint
```
Uses ESLint with Next.js core-web-vitals and TypeScript configurations.

## Project Structure

```
app/
  layout.tsx          # Root layout with metadata and global styles
  page.tsx            # Homepage with hero, services, materials section
  globals.css         # Tailwind imports and custom CSS
  components/
    OrigenSection.tsx      # Studio origin/about section
    ServiceMenu.tsx        # Navigation menu (Arquitectura, Interiorismo, Visualización)
    SiteFooter.tsx         # Footer with contact and social links
    PosterSection.tsx      # (Component stub for poster sections)
  [route]/
    page.tsx          # Subpages: iglesia-nayarit, maternidad, por-que-elegirnos, residencial
```

## Component Patterns

### Client Components (with State)
Use `"use client"` at the top for interactive components:
- **page.tsx** (root): Manages `heroLoaded` and `posterLoaded` state for image fade-in animations
- **iglesia-nayarit/page.tsx**: Same state pattern for gallery transitions

### Server Components
Default for static content sections:
- **OrigenSection**, **SiteFooter**, **ServiceMenu**: Prefer server-side rendering no special interactive state

### Image Optimization
All images from `public/img/` are imported as static assets and rendered using `next/image`:
```tsx
import hero20 from "../public/img/20.png";
<Image src={hero20} alt="..." fill placeholder="blur" />
```
- Always use `placeholder="blur"` for loading states
- Set `priority` on hero images to improve LCP
- Use `onLoadingComplete` callback for fade-in animations

## Styling & Theme

### Tailwind Configuration
- PostCSS configured with `@tailwindcss/postcss` v4
- Global styles in `app/globals.css`
- Custom color palette hardcoded in Tailwind classes (no theme config overrides needed)

### Color System
Key palette colors throughout the site:
- Text: `#5b3f2e`, `#4b3b33`, `#8b6b55`
- Background: `#f6f0e7`, `#f8f3ea`, `#f2ece2`
- Accents: `#7b5b3d`, `#855e3b`

### Typography
- Primary font: Serif (`font-serif`) for all headings
- Secondary: Geist Sans/Mono from `next/font/google`
- Line spacing: generous on headings (`tracking-[0.3em]` common)

## Key Features

1. **Multi-route Portfolio**: Home page showcases featured project (Iglesia Nayarit) with separate detail pages
2. **Gallery Grids**: 2/4-column layouts using CSS Grid for project galleries
3. **Hero Sections**: Full-bleed background images with gradient overlays
4. **Responsive Design**: Mobile-first Tailwind classes (`md:` breakpoint)
5. **No External Data**: All content is hardcoded in components (no API/CMS integration currently)

## Important Conventions

1. **Path Alias**: Import from workspace root using `@/` (configured in `tsconfig.json`)
2. **Image Imports**: Prefer static imports for images over URL strings for optimization
3. **Component Location**: Shared components go in `app/components/`; page-specific logic stays in route folders
4. **SEO Metadata**: Use `export const metadata` in server-side layouts and pages
5. **Accessibility**: All navigation links include proper `href` values; images have descriptive `alt` text

## Build Output

Final build creates `.next/` directory. Optimize image sizes by monitoring:
- Image preloading in browser DevTools
- Next.js Image Optimization logs during build
