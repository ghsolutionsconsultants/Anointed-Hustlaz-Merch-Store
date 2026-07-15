# AnointedHustlaz — STS Clothing

Custom e-commerce for the AnointedHustlaz / STS Clothing streetwear brand. Zara-grade,
image-led, monochrome + sunflower-gold.

## Structure
- `storefront/` — Next.js 16 (App Router, TS) + Tailwind v4 storefront. **Built (Phase A).**
  Currently runs on mock product data (`storefront/src/lib/mock-products.ts`).
- `backend/` — Medusa v2 commerce engine (cart, orders, inventory, Peach Payments). **Phase B — not yet built.**

## Run the storefront
```bash
cd storefront
npm install   # first time only
npm run dev   # http://localhost:3000  (this repo's other tooling uses port 3007)
```

## Roadmap
Phase A — presentable frontend (done) → Phase B — Medusa + Neon Postgres + real data →
Phase C — Peach Payments (custom Medusa payment provider). Full plan:
`~/.claude/plans/create-plan-and-show-staged-ladybug.md`.

## Notes
- Currency ZAR; market South Africa first. Payments via **Peach Payments** (Stripe can't pay out to SA).
- All imagery is placeholder (Unsplash) — swap for Sean's own photography in Phase B.
