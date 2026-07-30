# Fixxir Landing Page

Marketing site for Fixxir, a device repair business in Ikeja, Lagos. It exists to do
four things: establish the brand, build interest in the repair app in development,
bring in repair customers, and drive responses to the customer survey.

## Stack

- **Next.js 16** (App Router, TypeScript, statically prerendered)
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` under `@theme`
- **Motion** for scroll reveals and the app mockup animation

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — run before every commit
npm start        # serve the production build
```

## Editing the content

**Almost every word, price and phone number on the page lives in one file:
`src/lib/site.ts`.** Change it there and the whole page updates. You should not need
to touch the components for routine copy changes.

That file also controls a few behaviours:

| What                | How                                                                |
| ------------------- | ------------------------------------------------------------------ |
| Hide pricing        | Set `prices` to an empty array                                     |
| Hide testimonials   | Set `testimonials` to an empty array                               |
| Show social links   | Set the handles in `socials` to full URLs (they're `null` by default) |
| Change survey link  | `business.surveyUrl`                                               |
| WhatsApp deep links | `business.whatsapp` plus the messages in `cta`                     |

### Before going live

Search `src/lib/site.ts` for `PLACEHOLDER`. Three blocks are invented and must be
replaced with real figures:

1. `stats` — devices repaired, rating, turnaround time
2. `prices` — starting prices per repair type
3. `testimonials` — real customer quotes

Also set `business.url` to the live domain, since it feeds the Open Graph tags,
sitemap and structured data.

## Conversion paths

Every call to action leads to one of three destinations, by design:

1. **WhatsApp** (`wa.me`) for bookings, quotes and business enquiries — the primary
   money action, with pre-filled messages per context
2. **The Google Form survey** for app research, which also captures email addresses
   and therefore doubles as the launch waitlist
3. **Phone** for people who'd rather call

## SEO

The page ships `LocalBusiness` and `FAQPage` structured data, a generated Open Graph
image (`src/app/opengraph-image.tsx`), a sitemap, robots rules and a web manifest.

## Scripts

`scripts/` holds browser-based checks run against a local server. They use the
system Chrome install rather than a downloaded browser.

```bash
node scripts/shot.mjs         # screenshots at four widths, checks menu/FAQ/overflow
node scripts/overflow.mjs     # finds elements overflowing a 320px viewport
node scripts/scrollcheck.mjs  # confirms no horizontal scroll is possible
node scripts/icons.mjs        # regenerates favicons from logo/
```

Set `URL` to point them at a different server, e.g. `URL=http://localhost:3100 node
scripts/shot.mjs`.
