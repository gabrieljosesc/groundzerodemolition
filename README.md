# Ground Zero Demolition

Marketing / informational website for **Ground Zero Demolition** — a
professional demolition and excavation contractor serving the Greater Toronto
Area and surrounding Ontario communities.

Built with **Next.js (App Router) + TypeScript**. This is a UI-only build —
there is no backend wired up yet.

## Pages

- **Home** (`/`) — hero, services overview, why-choose-us, project gallery, CTA
- **Services** (`/services`) — Demolition & Excavation detail + process steps
- **About Us** (`/about`) — company story, values, stats, service area
- **Contact Us** (`/contact`) — contact details + demo quote form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create a production build:

```bash
npm run build
npm start
```

## Where to customize content

Almost everything lives in **`lib/site.ts`**:

- Company name, tagline, description
- **Contact details** — `phone`, `email`, `address`, `hours` are currently
  **MOCK placeholders**. Replace them with the client's real details before
  launch.
- `services` — the two services (Demolition, Excavation), their copy and
  feature lists
- `images` — image URLs (currently free Unsplash photos; swap in the client's
  own demolition/excavation job photos when available)

## Notes

- Images are served from Unsplash (free to use) and configured under
  `images.remotePatterns` in `next.config.mjs`. When real job photos are
  available, drop them into `public/` and update the `images` object.
- The contact form is a front-end demo only — it does not send email yet. Hook
  it up to an email service or API route when going live.
