# DESIGN.md — Tadfuq Al-Khayr

> Single-file design system in the [Google Stitch `DESIGN.md`](https://stitch.withgoogle.com/docs/design-md/format/)
> format. Drop this into a project and tell a coding/design agent
> *"build UI that matches DESIGN.md"* to get pixel-consistent screens.
>
> **What this documents:** the shipping product look of **Tadfuq Al-Khayr**
> — the Arabic-first (RTL) electricity service hub for the General Company
> for Electricity Distribution, Rasafa branch (Baghdad). Philosophy:
> *"the warmth of Rasafa + the discipline of Vercel."*
>
> **Source of truth:** the live CSS custom properties live under the `--f-*`
> namespace in `ui_kits/service-hub/final.css`. A parallel Apple-Pro token
> layer (`--brand-*`, `--neutral-*`, IBM Plex) ships in `ds/tokens/*` for the
> reusable component library — see "Implementation map" at the end.

---

## 1. Visual Theme & Atmosphere

- **Mood:** calm, official, document-flavored. A careful civil-servant
  interface, not a flashy consumer app. It should read as *ordered and
  trustworthy* on purpose.
- **Philosophy:** warm off-white canvas + restrained jewel accents +
  refined typography + purposeful motion. Signature color is reserved for
  meaning (departments, status), never decoration.
- **Density:** medium-low. Generous gutters (24px), comfortable card
  padding (20–26px), one clear focal element per section.
- **Atmosphere:** two faint tinted radial pools behind everything (cobalt
  top-right, bronze bottom-left) read as a quiet aurora — the only ambient
  effect. Optional film-grain overlay (~2.5% opacity) adds richness.
- **RTL-first:** Arabic is the primary language; layout flows right-to-left.
  Latin numerals and service codes (`CS0001`, `TQ-2026-08-1417`) stay LTR.

---

## 2. Color Palette & Roles

### Canvas & ink (light)

| Semantic | Hex | Role |
|---|---|---|
| `bg` | `#fafaf7` | App background — warm off-white |
| `bg-2` | `#f4f3ee` | Recessed background, code chips |
| `surface` | `#ffffff` | Cards, panels |
| `surface-2` | `#f7f6f1` | Hover fills, footers |
| `surface-3` | `#efedde` | Inactive pills, tracks |
| `border` | `#e7e5dc` | Default hairline |
| `border-2` | `#d6d2c5` | Focused / selected outline |
| `ink` | `#161513` | Primary text — warm near-black |
| `ink-2` | `#4a4940` | Secondary text |
| `ink-3` | `#8a8478` | Tertiary text, captions, meta |

### Signature accents (muted, never loud)

| Semantic | Hex | Role |
|---|---|---|
| `navy` | `#1e2a4d` | **Primary** brand / actions |
| `navy-soft` | `#28366e` | Gradient partner for navy |
| `gold` | `#b8861b` | Accent only — rims, VIP/SLA sheen, dividers |
| `gold-soft` | `#ddbb5d` | Gradient highlight |
| `crimson` | `#8f1d28` | Emphasis, secondary accent |
| `crimson-soft` | `#c54a55` | Hover / highlight |

> Primary CTA is **ink-on-white inverting to navy on hover** (`--f-btn--primary`
> = `background:#161513`), not a saturated brand fill. Gold is *accent-only*.

### Semantic state

| Semantic | Hex | Role |
|---|---|---|
| `ok` | `#3a7a55` | Success / active (muted forest) |
| `warn` | `#b87918` | Pending / caution (amber) |
| `err` | `#b03a3a` | Error / overdue / urgent |

### Department colors (FIXED — jewel-calm OKLCH)

Each of the four departments owns one color, 1:1, never substituted.
Uniform OKLCH lightness keeps them harmonious.

| Code | Dept (AR) | OKLCH | Reads as |
|---|---|---|---|
| `CS` | الاشتراكات (Subscriptions) | `oklch(0.52 0.105 259)` | cobalt |
| `CT` | الفنية (Technical) | `oklch(0.57 0.090 72)` | caramel bronze |
| `CB` | الفواتير (Billing) | `oklch(0.56 0.085 192)` | sea teal |
| `CA` | الشكاوى (Reports) | `oklch(0.54 0.095 12)` | rosewood |

### Dark mode (`.f-body.dark`)

Warm navy-charcoal, never OLED black. Department colors brighten one notch
to hold contrast.

| Semantic | Hex |
|---|---|
| `bg` | `#131720` |
| `bg-2` | `#1a1f2a` |
| `surface` | `#1e2330` |
| `surface-2` | `#252b39` |
| `border` | `#313847` |
| `ink` | `#f1efe6` |
| `ink-2` | `#cdcabf` |
| `ink-3` | `#9a958a` |
| `cs / ct / cb / ca` | `oklch(0.78 0.085 259)` / `oklch(0.80 0.080 78)` / `oklch(0.80 0.075 192)` / `oklch(0.78 0.080 12)` |

---

## 3. Typography Rules

| Role | Family | Usage |
|---|---|---|
| Display | **Alexandria** (500–800) | Big headings, page titles, stat numerals, spotlight |
| Arabic body | **Readex Pro** (300–700) | All Arabic UI — body, forms, buttons, table cells |
| Latin / sans | **Geist** (400–800) | Latin labels, numbers, brand wordmark |
| Mono | **Geist Mono** (400–600) | Codes, IDs, status caps, kbd, captions |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&family=Readex+Pro:wght@300;400;500;600;700&family=Alexandria:wght@500;600;700;800&display=swap
```

### Hierarchy

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| Page title (h1) | `clamp(1.7rem, 2.6vw, 2.2rem)` | 700 | −0.025em | Greeting, page head |
| Section title (h2) | `1.06rem` | 700 | −0.015em | Section headers |
| Card title (h3) | `0.98rem` | 700 | −0.015em | Card heads |
| Stat numeral | `1.85rem` | 700 | −0.025em | KPI values (Geist) |
| Body | `0.92–1rem` | 400–500 | normal | Paragraphs, rows |
| Caption / meta | `0.7–0.78rem` | 500–600 | 0.02–0.04em | Mono labels, timestamps |

- Base line-height `1.6` (Arabic needs room); titles tighten to `1.15–1.25`.
- Feature settings `"ss01","cv01"`, global letter-spacing `−0.005em`.
- Status caps (`URGENT`, `RS-014`) are mono, uppercase, wide-tracked.
- Never convert Latin numerals to Eastern Arabic numerals in UI.

---

## 4. Component Stylings

### Buttons (`.f-btn`)
- **Default:** white surface, 1px `border`, `ink` text, pill (`999px`),
  `9px 16px`, `shadow-sm`. Hover: `translateY(-1px)`, `surface-2`, `border-2`.
- **Primary:** `background:ink`, `surface` text. Hover → `background:navy`.
  Press drops the lift in 80ms.
- **Ghost:** transparent, no shadow, `ink-2`. Hover: `surface-2` fill.
- **Sizes:** default; `--sm` = `6px 12px / 0.8rem`. Icons 16px.

### Cards (`.f-card`, `.f-dept`, `.f-deck__panel`)
- White surface, `border` hairline, radius **20px** (`--f-r-lg`), `shadow-sm`.
- Department cards: `--d-c` tinted top stripe / radial corner wash; hover
  lifts `−3px`, border picks up 35% of the dept color, shadow steps up.
- Signature **expanding deck**: four panels in a row; the active one grows
  (`flex: 2.7`) with a 620ms spring, revealing full details — others collapse
  to name + count.

### Inputs (`.f-input`, fields)
- White, 1px `border`, radius **12px**, `10px 14px`. Focus: `border-2` +
  soft ring, no default browser outline. Invalid: crimson border + helper.

### Status & tags
- **Tag/pill:** mono caps, dept- or state-tinted, `color-mix(... 10–12%)`
  fill + matching 22% border. Optional leading status dot.
- **SLA / priority:** standard (blue) · urgent (crimson) · VIP (gold sheen).

### Navigation
- **Top chrome:** sticky glass bar (`blur(22px)`, `bg 86% alpha`), brand
  mark + team pill + ⌘K search + icon buttons + avatar menu.
- **Tabs:** text tabs with a 2px `ink` underline on the active item.
- **Breadcrumbs:** chevron-separated, last crumb bold (RTL-mirrored chevron).

### Spotlight / feature card
- Full-bleed dept-gradient panel, white text, glass icon tile, frosted
  chips, white CTA, auto-rotating progress bar.

---

## 5. Layout Principles

- **Container:** max-width `1480px`, centered, page padding `32px 24px 60px`.
- **Spacing scale (4px base):** `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64`.
- **Rhythm:** page section gap `26px`; grid gap `12–16px`; card padding
  `20–26px`; page gutter `24px`.
- **Grids:** department deck = 4 across (flex, expanding); services express =
  4 across; stats = 4 across (single bordered strip); activity + sidebar =
  `1.55fr / 1fr` two-column.
- **Whitespace philosophy:** let one element lead each section; avoid uniform
  walls of equal-weight cards. Editorial calm over density.
- **Sticky chrome:** top bar floats; content scrolls beneath.

---

## 6. Depth & Elevation

Soft, layered, **warm-tinted** shadows — never heavy black.

| Token | Value | Use |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(22,21,19,.04)` | Hairline lift (chips, express rows) |
| `shadow-sm` | `xs + inset 0 1px 0 rgba(255,255,255,.7)` | Cards at rest (light-catching top edge) |
| `shadow` | `0 1px 2px + 0 12px 28px -16px rgba(22,21,19,.12)` | Hover / open panel |
| `shadow-md` | `0 1px 2px + 0 24px 56px -20px rgba(22,21,19,.16)` | Floating (menus, spotlight) |

- **Surface hierarchy:** `bg` → `surface` (cards) → glass (sticky chrome) →
  `shadow-md` floats (dropdowns, dialogs).
- Dark mode swaps to deeper black alphas; glass dims so the aurora reads through.
- Optional taste layer adds a `rgba(255,255,255,.65)` inner top edge for a
  premium light-catch.

---

## 7. Do's and Don'ts

**Do**
- Reach for the four department colors before any other accent.
- Use `ink`-based primary buttons; reserve gold for rims / VIP / dividers.
- Keep motion purposeful: 180–360ms spring hover (1–3px lift), 80ms press.
- Honor `prefers-reduced-motion`; show visible focus rings.
- Keep Arabic RTL with logical properties; mirror chevrons/arrows.
- Write terse imperative copy (`ابدأ سريع`, `تصدير`); dinars via `Intl` + `د.ع`.

**Don't**
- Don't substitute or recolor a department's color.
- Don't use gold as a body/text color, or as a large fill.
- Don't ship AI purple→pink gradients, rainbow mesh, or neon on white.
- Don't use emoji as icons — Material Symbols Outlined or the `tdq-*` SVG set.
- Don't stamp uniform same-size cards with no hierarchy or focal point.
- Don't convert Latin numerals to Eastern Arabic numerals in the UI.
- Don't use the raw browser focus outline with no replacement.

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `≥ 1100px` | Full layout: 4-col decks/stats, two-col bottom |
| `1000–1100px` | Decks & stats → 2-col; express → 2-col |
| `900px` | Department deck switches from horizontal expand to vertical stack |
| `≤ 800px` | Tips ticker collapses rail; sidebars stack under main |
| `≤ 600px` | All grids → single column |

- **Touch targets** ≥ 44px; `cursor:pointer` on every clickable.
- Sticky top bar wraps its controls; search drops its min-width.
- Tab strips scroll horizontally (no wrap, hidden scrollbar).

---

## 9. Agent Prompt Guide

**Quick color reference**
```
Canvas    #fafaf7   Surface  #ffffff   Ink      #161513
Primary   #1e2a4d (navy)   Gold #b8861b (accent only)   Crimson #8f1d28
OK #3a7a55   Warn #b87918   Err #b03a3a
CS cobalt · CT bronze · CB teal · CA rosewood (OKLCH, fixed per dept)
Fonts: Alexandria (display) · Readex Pro (Arabic) · Geist (Latin) · Geist Mono
Radii 8/12/16/20/26 · Shadows warm-tinted · Spring cubic-bezier(.32,.72,0,1)
```

**Ready-to-use prompts**
- *"Build an Arabic RTL dashboard section that matches DESIGN.md: warm
  off-white canvas, white cards (20px radius, warm soft shadow), Alexandria
  section title with a mono `01` index, jewel-calm department accents, an
  ink primary button. Light + dark."*
- *"Create a service card per DESIGN.md: white surface, dept-tinted top
  stripe using the CS cobalt color, Readex Pro title, mono code chip, SLA
  pill, hover lift −3px with spring motion. No emoji icons."*
- *"Make a KPI stat strip: single bordered white panel, four cells split by
  hairlines, Geist 1.85rem numerals, dept-tinted mini icon + sparkline,
  green delta. Respect prefers-reduced-motion."*

---

## Implementation map (this repo)

| Need | Where |
|---|---|
| Product look (`--f-*`) | `ui_kits/service-hub/final*.css` |
| Component library (Apple-Pro tokens `--brand-*`, IBM Plex) | `ds/tokens/*` + `components/*` |
| Live component bundle | `_ds_bundle.js` → `window.<Namespace>` |
| Prose brand guide | `README.md` |
| Build skill (+ anti-slop) | `SKILL.md` |
| Pre-ship review gate | `REVIEW-SKILL.md` |
| Visual catalog | `preview.html` / `preview-dark.html` |

> Note: the project carries **two** intentional token systems — the warm
> `--f-*` product system (documented above, authoritative for "how it
> looks") and an Apple-Pro `--brand-*` layer powering the reusable
> components. When generating *new* product-matching UI, follow this file.
