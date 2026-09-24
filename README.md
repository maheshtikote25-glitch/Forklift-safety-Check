# InspectPro — Forklift Inspection Checklist

A Next.js (App Router) recreation of the provided InspectPro landing page design, built with React and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's included

- **Header** — sticky nav with a "Resources" dropdown (desktop) and a full mobile menu with an accordion for Resources.
- **Hero** — headline, CTA buttons, and a live inspection-checklist card. Click a Pass/Fail/N/A pill on the card to cycle its status and watch the progress bar update.
- **Trusted by** — logo strip of example customers.
- **What is a Forklift Inspection Checklist?** — intro copy plus a callout box.
- **What's included in the checklist?** — a functional checklist table: each row has a checkbox, Pass/Fail/N/A buttons, and an optional note field.
- **Make every inspection consistent** — four feature cards.
- **How it works** — a 3-step process.
- **Built for teams that inspect equipment every day** — three audience cards.
- **FAQ** — an accordion (click a question to expand/collapse).
- **CTA band** + **Footer** with link columns.

## Structure

```
app/
  layout.js       Root layout, fonts, metadata
  page.js         Assembles all sections
  globals.css     Tailwind entry + base styles
components/
  Header.js
  Hero.js
  TrustedBy.js
  AboutChecklist.js
  ChecklistTable.js
  ConsistentSection.js
  HowItWorks.js
  BuiltForTeams.js
  FAQ.js
  CTASection.js
  Footer.js
```

## Notes on approach

- All content is plain React state (`useState`) — no backend, since the source design has no data layer specified. The checklist table and hero card are functional so the "wherever interaction is shown in the design" requirement is met.
- Colors, spacing and type scale are defined as Tailwind theme tokens in `tailwind.config.js` (`brand.*`, `status.*`, `surface.*`) so they're reused consistently instead of one-off hex values.
- Layout is mobile-first: single column by default, expanding to the multi-column desktop layout at `sm`/`lg` breakpoints, matching the provided mobile and desktop references.
- Icons are inline SVGs (no icon-font dependency) to keep the project self-contained.
