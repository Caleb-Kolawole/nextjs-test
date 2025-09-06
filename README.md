# Caleb — Next.js Test

A small Next.js + TypeScript app demonstrating:
- Data integration from JSONPlaceholder.
- Responsive, semantic layout with Tailwind CSS.
- SEO using Next metadata
- Accessibility: run axe CLI locally.

## Run locally
1. `npm install`
2. `npm run dev` → http://localhost:3000

## Deploy
Preferred: Vercel (connect repo, deploy). Netlify also supports the Next.js App Router.

## Tests & audits
- Type check: `npm run type-check`
- Lint: `npm run lint`
- Axe accessibility (local server): `npm run audit:axe`
- Lighthouse CI: `npm run audit:lighthouse` 

## What I'd improve next
1. Add proper CMS for content editing.
2. Add unit and integration tests and Storybook for components.
3. Improve UX with animations
