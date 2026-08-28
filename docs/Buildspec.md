# Tennant & Co Accountancy — Build Specification

> Working document for implementation. Supersedes the "premium" language in
> `Architecture.md` and `Branding.md` where the two conflict — see §1.

| Item | Value |
|------|-------|
| Project | Tennant & Co Accountancy Limited website |
| Repo | `Tennant-CoAccountancy` |
| App root | `website/` (the Next.js project is **not** at repo root) |
| Stack | Next.js (App Router), TypeScript, Tailwind CSS |
| Hosting | Cloudflare Pages (free tier) |
| Status | Sprints 1–3 complete: project init, shell, Header/Footer |

---

## 1. Positioning — read this before writing any copy

The master brief and the earlier architecture/branding docs conflict. **The master
brief wins.**

The business is **not premium**. Its stated mission is "good quality accountancy
services at a reasonable price." It should read as *professional and friendly*,
never corporate, salesy, or aspirational. The single organising value is
**reliability**.

The site's job, in order:

1. Look professional
2. Create trust
3. Generate contact

Competence is demonstrated through the quality of the design and the clarity of
the information — never asserted in copy.

### Copy prohibitions (from the brief, non-negotiable)

Do not write, and remove if found:

- Cheesy or aspirational slogans of any kind
- "Unlock your potential", "take your business to the next level", and relatives
- Invented statistics, client counts, or "trusted by X businesses"
- Testimonials (none exist yet — do not invent placeholder ones with real-sounding names)
- Claims of constant availability ("always contactable", "24/7")
- Corporate jargon and buzzwords
- Any framing of the founding story as a "mumpreneur" narrative

### Copy that requires sign-off

Hero headline and subhead are **not approved**. Write a clearly-labelled
placeholder and do not treat it as final. The brief offers two example directions
for tone only:

- "Professional bookkeeping and software training for small businesses."
- "Reliable bookkeeping and software training from an ICAEW Chartered Accountant."

---

## 2. Hard constraints

### Deployment

The site deploys to **Cloudflare Pages**, not Vercel. Vercel's free Hobby plan
forbids commercial use; this is a limited company's business site.

This requires **static export**:

- `next.config.ts` → `output: 'export'`
- `images: { unoptimized: true }` (the Next.js image optimiser needs a server)
- No API routes, no server actions, no middleware, no `dynamic = 'force-dynamic'`
- Cloudflare Pages build settings: build command `npm run build`, output directory
  `out`, **root directory `website`**

Anything that assumes a Node server at runtime will build locally and fail in
production. Check this before adding any dependency.

### Contact form

Because the site is statically exported, the form cannot post to its own backend.
**Decision required** — see §8. Until it is made, build the form UI with a clearly
marked TODO for the submit handler. Do not silently no-op it.

### Out of scope — do not build

Blog, news, tax calculator, client portal, online booking system, resources
library, careers section, team pages, testimonials section, pricing page.

### Services — do not invent

Offered: **bookkeeping** (incl. MTD for ITSA), **VAT returns**, **software
training** (Xero, QuickBooks). Annual accounts preparation is a *possible future*
service — do not present it as active.

Explicitly **not** offered — do not create pages, cards, or nav entries for:
audit, personal tax returns, corporation tax returns, CIS returns.

Bookkeeping and software training are the two commercially important services and
should carry the most weight on the homepage and in the nav.

---

## 3. Design tokens

Define these once in `globals.css` as CSS custom properties, and expose them
through the Tailwind theme. No hard-coded hex values anywhere in components.

### Colour

The palette is monochrome green plus warm neutrals. One accent family only —
resist adding a second hue.

| Token | Value | Use |
|-------|-------|-----|
| `--green-900` | **TBD — extract from logo source** | Logo-matching brand green. Headings, logo, primary buttons |
| `--green-950` | Darken `--green-900` ~8% | Button hover, pressed states |
| `--green-100` | Very pale tint of the same hue | Section backgrounds, quiet panels |
| `--ink` | `#1A1A18` | Body text — a warm near-black, **not** `#000` |
| `--ink-muted` | `#5A5A54` | Secondary text, captions, labels |
| `--paper` | `#FFFFFF` | Default background |
| `--paper-alt` | `#F7F6F3` | Alternating section background |
| `--rule` | `#E3E1DC` | Hairlines, dividers, input borders |

**The green must be sampled from the vector logo, not eyedropped from the PNG** —
PNG compression shifts colour values slightly, and a near-miss next to the logo is
more visible than a large difference.

Pure black is prohibited as a text colour. Against a deep green it looks cheap;
the warm near-black is what reads as considered.

### Typography

Load via `next/font` (self-hosted, no external requests, no layout shift).

| Role | Face | Notes |
|------|------|-------|
| Display / headings | **Source Serif 4** | Transitional serif, a close relative of the logo's letterforms. Weights 400 and 600 only |
| Body / UI | **Inter** | Weights 400, 500, 600 |

Rationale: the serif carries the traditional-accountancy credibility already
established by the logo; the sans keeps body copy clean and modern. Serif alone
reads stuffy; sans alone reads like every other small-business template.

Note: Inter is the safe, ubiquitous choice. If it reads too anonymous once on
screen, **IBM Plex Sans** or **Public Sans** are the alternates to try — both have
more character while staying sober. Flag this for a look rather than deciding it
in code.

Type scale (1.25 ratio, fluid via `clamp()`):

```
display   48 → 64px   Source Serif 4 600, line-height 1.1, letter-spacing -0.02em
h1        36 → 48px   Source Serif 4 600, line-height 1.15
h2        28 → 36px   Source Serif 4 600, line-height 1.2
h3        20 → 24px   Source Serif 4 600, line-height 1.3
body-lg   18 → 20px   Inter 400, line-height 1.6
body      16 → 17px   Inter 400, line-height 1.65
small     14px        Inter 400, line-height 1.5
label     13px        Inter 500, letter-spacing 0.06em, uppercase
```

Body copy max width: **68 characters**. Long unbroken measures are one of the most
reliable tells of an amateur site.

### Spacing

Use a 4px base scale only: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

Vertical section rhythm: 96px desktop / 64px mobile between major sections. Apply
it consistently — whitespace only reads as premium when it is systematic. Ad-hoc
spacing is what makes generous whitespace look accidental instead of intentional.

Content max width 1200px; text-heavy blocks narrower.

### Motion

"Minimal animation", defined concretely:

- Fade-and-rise on scroll-in for major sections, 200ms, once only
- Colour/opacity transitions on hover and focus, 150ms
- Nothing that moves on its own, no parallax, no carousels, no counters
- Respect `prefers-reduced-motion: reduce` — disable all of the above

### Logo assets

The repo currently has only `logo_basic.png`.

- Obtain **SVG** versions — the PNG will look soft on high-DPI screens
- Two lockups needed: full horizontal (desktop header, footer) and shield-only or
  shield + "TENNANT & CO" (mobile header, ~6:1 aspect is unusable at phone width)
- Shield alone becomes the favicon and the social sharing image mark
- Never re-colour, stretch, or add effects to the mark

---

## 4. Pages

Nav: Home · Services · About · Contact · FAQs

### `/` — Home

1. **Hero** — what the business does, who it helps, primary CTA "Book a free
   consultation". Copy is placeholder pending approval. No stock photography, no
   hero image of people shaking hands. Consider type-led with generous space.
2. **Services summary** — three cards: Bookkeeping, VAT Returns, Software
   Training. Bookkeeping and Software Training visually weighted above VAT.
3. **Why clients choose Tennant & Co** — four pillars: Reliable, Attention to
   Detail, Flexible, Approachable. One short factual sentence each. No icons that
   look like clip-art; consider none at all.
4. **About Tiffany preview** — short, links to the About page. Professional
   photograph once available.
5. **Contact CTA** — free 30-minute consultation, with email and phone visible.

### `/services`

One page covering all three services — not separate pages per service; the site
is deliberately small. Each section: what it is, who it's for, what's included.

Bookkeeping covers sole traders, partnerships, limited companies, LLPs, landlords,
and includes MTD for ITSA bookkeeping and submissions.

Software training covers Xero and QuickBooks and must **not** be treated as an
afterthought — it is one of the two priority services.

Pricing: indicative "from" rates only, stated quietly within the relevant section
rather than as a pricing table or dedicated page — bookkeeping from £35/hour,
software training from £100/hour.

### `/about`

Tiffany's professional background: 9 years' experience, career from 2017, AAT then
ACA, qualified as an ICAEW Chartered Accountant in 2022, Assistant Manager
September 2022, Manager May 2024, then founded Tennant & Co.

Founding reason: wanting flexibility to work around family while continuing to
deliver high-quality work — stated once, factually, framed around the more
personal service that flexibility allows. Not a sentimental narrative.

Professional photograph. No team section — there is no wider team.

### `/contact`

Contact form, email, phone. WhatsApp optional. Free 30-minute consultation as the
headline offer. No booking system.

Form fields: name, email, phone (optional), business type (sole trader /
partnership / limited company / landlord / other), message. Keep it short — every
extra field costs enquiries.

### `/faq`

Plain accordion. Candidate questions to draft for approval: what MTD for ITSA
means and who it affects, whether clients need to be local, which software is
supported, what the free consultation involves, how pricing works, what's needed
to get started.

Answers must be genuinely useful and jargon-free. Do not use the FAQ as an SEO
keyword dump.

---

## 5. Components

Build small and reuse. Header and Footer already exist and should be reviewed
against these tokens rather than rewritten from scratch.

`Header` (sticky, logo swaps at breakpoint, mobile menu) · `Footer` (legal details
per §7) · `Button` (primary / secondary) · `ServiceCard` · `ValuePillar` ·
`SectionHeading` · `Accordion` · `ContactForm` · `Container` · `Section`

---

## 6. SEO

Geographic focus: Buckinghamshire, Hertfordshire, Bedfordshire. Nationwide clients
accepted — do not imply a hard local restriction.

Service topics: bookkeeping, software training, Xero training, QuickBooks training.

Keyword placement must be natural. **Copy quality outranks keyword density** — the
brief is explicit that keyword stuffing is unacceptable. Location terms belong in
page titles, meta descriptions, and one or two natural sentences, not sprinkled
through body copy.

Required: unique `<title>` and meta description per page, Open Graph tags,
`sitemap.xml`, `robots.txt`, `LocalBusiness` / `AccountingService` structured data,
semantic headings with exactly one `<h1>` per page, descriptive `alt` text.

---

## 7. Compliance — needs checking, not guessing

A UK limited company must display certain details on its website. The footer
should carry the registered company name (Tennant & Co Accountancy Limited),
company registration number, and registered office address.

Also required or likely required:

- Privacy policy (UK GDPR) — mandatory given the contact form collects personal data
- Cookie notice if any analytics are added; if no cookies are set, none is needed —
  prefer a cookieless analytics option and avoid the banner entirely
- ICAEW has rules about how firms describe themselves and about professional
  indemnity insurance disclosure. **Tiffany must confirm the correct wording** —
  do not draft ICAEW-regulated descriptions speculatively

Flag these for the client rather than inventing text.

---

## 8. Open decisions — blocking

| # | Decision | Blocks |
|---|----------|--------|
| 1 | Exact brand green hex, from vector source | All design tokens |
| 2 | SVG logo assets, full + compact lockups | Header, favicon |
| 3 | Contact form handling — third-party form service vs Cloudflare Pages Function | Contact page |
| 4 | Hero headline and subhead (Tiffany's approval) | Homepage |
| 5 | Company number and registered office address | Footer |
| 6 | Professional photograph of Tiffany | About page |
| 7 | Analytics — yes/no, and which | Cookie policy |

Items 1–3 block real work. The rest can proceed with clearly-marked placeholders.

---

## 9. Suggested sprint order

- **Sprint 4** — Design tokens in `globals.css` and Tailwind theme; typography
  loaded via `next/font`; Header and Footer brought onto the token system
- **Sprint 5** — Shared components and page shells for all five routes
- **Sprint 6** — Homepage in full, with placeholder hero copy
- **Sprint 7** — Services, About, FAQ
- **Sprint 8** — Contact page and form handling
- **Sprint 9** — SEO, metadata, structured data, accessibility pass
- **Sprint 10** — Static export verification and Cloudflare Pages deployment
- **Sprint 11** — Domain cutover from GoDaddy

## 10. Definition of done, per page

- Renders correctly at 375px, 768px, 1440px
- Keyboard navigable with visible focus states
- Colour contrast meets WCAG AA
- One `<h1>`, semantic heading order
- No hard-coded colours or font sizes outside the token system
- No console errors or warnings
- `npm run build` succeeds with `output: 'export'`
- `prefers-reduced-motion` respected