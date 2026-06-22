# Tadfuq Al-Khayr — Design System

The brand and component system behind **منصة كهرباء الرصافة** (Rasafa
Electricity Platform), an Arabic-first internal console for officers at
the **Tadfuq Al-Khayr** service hub of Iraq's General Company for
Electricity Distribution — Rasafa branch (Baghdad). Officers receive
subscribers at the counter, search the service catalogue, fill the
right form, attach the official advisories, and collect fees, all in
one RTL surface called the *Command Shell*.

Four "departments" — `CS` Subscriptions, `CB` Billing, `CT` Technical,
`CA` Reports & Complaints — own the catalogue. Every screen, badge,
chart slice, and chip honors that taxonomy with a fixed section color.

## Source

This system was extracted from a working production codebase:

- **GitHub:** <https://github.com/Xboxiq/tadfuq-khayr> — full app source,
  including `ds/` (the original token + component CSS), the dashboard
  screen (`final.jsx`), login (`final_login.jsx`), service form
  (`final_form.jsx`), admin panel, branches, cases, and the official
  pricing / advisories data (`data.js`). Read the repo to extend the
  system with details that were trimmed for this kit.
- **Brand mark:** `assets/logo.png` — the navy ring around the crimson
  **TEC** wordmark (General Company for Electricity Distribution).

## Content fundamentals

The voice is the voice of a careful, formal civil servant. It speaks
to the officer, not the subscriber.

- **Language:** Arabic, written right-to-left. `dir="rtl"` is the
  default on `<html>`; `dir="ltr"` is opt-in for pages that need it.
  Latin-script numerals and codes mix freely (`84 طلب`, `CS0001`,
  `TQ-2026-08-1417`) — never converted to Eastern Arabic numerals in UI.
- **Address:** *informal-respectful* second person — "أستاذ رامز"
  (*ustadh* + first name) in greetings, plain second person elsewhere
  ("ابدأ من القسم"). Never `سيدي / حضرتك`; never English.
- **Imperative for actions:** verbs are bare imperatives: `ابدأ سريع`,
  `افتح القسم`, `تصدير`, `حفظ كمسودة`. Don't pad with `قم بـ` or `يرجى`.
- **Status copy is terse:** `فحص ميداني`, `بانتظار الدفع`, `موافقة مدير`,
  `قيد التنفيذ`. Two to three words max, no period.
- **Advisories are structured.** Five fixed types — `danger` (سلامة),
  `review` (تدقيق ومراجعة), `scale` (قابل للتوسع), `tip` (نصيحة),
  `faq` (سؤال متكرر) — each with a fixed icon and tone. Body copy is
  one or two sentences, present tense, written as a rule:
  > "تدقيق سند الملكية (الطابو) وكتاب التأييد إلزامي قبل قبول الطلب."
- **No emoji.** The product never uses emoji as icons. Use Material
  Symbols or the `tdq-*` SVG set.
- **Numbers and money.** Money is always in Iraqi dinars,
  `Intl.NumberFormat('ar-IQ')` + `د.ع` suffix
  (`135,000 د.ع`). Time spans say `يوم` / `أيام`, `ساعتين`, `أمس`.
- **The signature footer** credits "**Designed & Developed** — Hussein Ali ·
  Baghdad — Iraq" with a 1pt rule punctuated by a small diamond. Keep
  it on every shell page; it's part of the product identity.

## Visual foundations

**Palette — three layers.**

1. **Brand primitives** (identity, fixed)
   - **Navy** `#232350`, **Crimson** `#c1121f`, **Gold** `#f4c430`
     — the TEC ring + wordmark. Used for the brand mark, hero
     surfaces, and the signature `--brand-grad` (navy → crimson)
     primary button. Gold is a ceremonial accent only — the rim on
     the brand mark, VIP/SLA sheens — never body color.
2. **iOS system palette** (semantic accents)
   - `--sys-blue / green / indigo / orange / pink / purple / red /
     teal / mint / yellow` follow Apple HIG values exactly. Semantic
     state (`--ok / warn / err / info`) maps to system green / orange
     / red / blue — not to brand colors. Reach for these for badges,
     status pills, and accent surfaces; never for identity.
3. **Apple Pro neutrals** (systemGray ladder)
   - `--neutral-50` → `--neutral-900` follows the iOS systemGray
     scale — warmer and calmer than slate. The legacy `--gray-*`
     aliases stay in place so existing `rs-*` components keep
     compiling. Backgrounds use `--neutral-50`; cards sit on pure
     `#ffffff`.

**Department colors are fixed.** Blue / teal / amber / red map 1:1
to `CS / CB / CT / CA`. Always reach for `--c-CS` etc. through
`SectionBadge`, `Chip section=“…”`, or the `{ '--d-c':
DEPT_COLORS[section] }` pattern. Never substitute another color for
a department.

**Surface & text tiers (HIG names).** Reach for surfaces and text
by intent, not by hex: `--surface-primary` (cards), `--surface-
secondary` (the canvas itself), `--surface-tertiary` (cards on
cards), `--surface-grouped` (settings rows), `--surface-elevated`
(translucent floats). Text is `--text-primary / secondary /
tertiary / quaternary` — the same four-tier ladder iOS uses. Both
ladders flip cleanly in dark mode.

**Typography — four families on the IBM Plex stack.**
- `--font-cmd` **IBM Plex Sans Arabic** — primary Arabic UI (body,
  forms, buttons, table cells). Rounded terminals, refined skeleton,
  the closest Apple-spirit family with proper Arabic coverage.
- `--font-display` **IBM Plex Sans** — Latin display, big numerals,
  the dashboard hero, large titles. Matched metrics with the Arabic
  variant so mixed-script titles align.
- `--font-mono` **IBM Plex Mono** — IDs, codes, status caps
  (`URGENT`, `TQ-2026-08-1417`), small tag pills.
- `--font-form` **Arimo** (self-hosted, Arial-metric-compatible) —
  printed Word sheets. Self-hosting guarantees the printed layout
  matches Word's Arial measurements on every machine. Eight weights /
  italics are bundled under `fonts/Arimo-*.ttf`.

The scale follows the **Apple HIG Dynamic Type** names so a designer
reaching for "the body size" gets the same answer they would in SF
Symbols specs: `--fs-caption2 / caption1 / footnote / subheadline /
callout / body / headline / title3 / title2 / title1 / large-title /
display / hero`. Legacy `--fs-xs..4xl` aliases stay mapped so existing
components compile unchanged. Letter-spacing follows the HIG cadence
— `--tracking-display` (-0.025em) on large titles, tightening
incrementally down to `--tracking-normal` for body.

**Spacing & rhythm.** A 4px base, but the top end is generous:
`--s1` 4 → `--s12` 96, plus legacy `s16/s20/s24`. Page gutters are
24px (was 22); section gap is 32–40px; inside a card 20–24px. The
overall density is lower than v1 — Apple Pro feel.

**Corner radii — the Apple Pro ladder.** `--radius-xs 6px` (tag,
status pill) → `--radius-sm 10px` (input, small chip) → `--radius
14px` (button, default card) → `--radius-md 18px` (form-row card)
→ `--radius-lg 22px` (section card, dock) → `--radius-xl 28px`
(hero, large surfaces) → `--radius-2xl 36px` (signature panels) →
`--radius-pill 999px`. Bigger across every step than v1, with a
softer curve.

**Shadows — HIG elevation, multi-layer.** Two parallel ladders:
`--elevation-1..5` (HIG-style, neutral two-shadow stacks — a tight
contact shadow + a wide ambient halo) and the legacy `--shadow-xs..
lg` aliases that point at the same values. Cards read like real
depth on white surfaces; brand glows (`--glow-crimson`, `--glow-
navy`, `--glow-gold`, `--glow-blue`) are used sparingly on command
surfaces.

**Liquid Glass — the command-shell signature.** Three thickness
tiers:
- `--glass-thin` (~55%) — light context chrome (tabs, dock
  background).
- `--glass-regular` (~72%) — default. Topbar, side rail, cards on
  aurora.
- `--glass-thick` (~86%) — floating overlays (modals, command
  palette, login card).

Each tier pairs with a tuned `backdrop-filter` recipe
(`--glass-blur-thin/regular/thick`: blur 20–40px with saturate
170–190%), the hairline rim `--glass-border`, a specular
top-highlight (`--glass-specular`), and a soft refractive sheen on
hero glass panels. Drop shadows are tuned for translucency
(`--glass-shadow` / `--glass-shadow-lg`). Use glass only for
floating/sticky chrome — body content stays solid on
`--surface-primary`. The aurora glows that sit under glass
(`--bg-glow-navy / crimson / gold / blue / indigo`) drift slowly on
the login screen and the print toolbar.

**Cards.** White, 14–28px radius, 1px `--separator` hairline,
`--elevation-2` baseline, padding 20–40px. Three optional
treatments: `interactive` (hover-lifts 2–3px to `--elevation-3`),
`glass` (the command-shell recipe), and `brand-rim` (3px navy → red
→ gold sweep along the top edge — reserved for hero panels). Section
cards use a `--d-c`–tinted top stripe.

**Borders.** `--separator` (HIG opaque separator at 16% alpha) is
the default hairline; `--separator-fine` (8%) for inner divisions;
`--border-strong` (24%) for focused field outlines. Both adapt to
dark mode automatically.

**Focus rings — three flavors.**
- `--ring` (crimson, 4px) on primary actions and inputs.
- `--ring-navy` on neutral buttons, secondary nav, tabs.
- `--ring-gold` on the icon button — the one outlined affordance.
- `--ring-blue` on iOS-system-blue affordances.
Never the default browser outline.

**Motion.** Four durations (`140 / 220 / 380 / 600ms`) and four
eases — `--ease`, `--ease-out`, `--ease-spring`, `--ease-elegant`
(the polish-layer default). Hover lifts cards 2–3px in 220ms with
`--ease-elegant`; pressed states drop back in 80ms. Aurora glows
behind glass surfaces drift on a 32–44s cycle — calm, never
distracting. Every animation is wrapped in `@media
(prefers-reduced-motion: reduce)`. The system never bounces.

**Hover & press.**
- **Buttons:** translateY(-1px) + warmer border / brighter fill.
  Primary uses `filter: brightness(1.06)` + a deepened drop shadow.
  Press drops the translate in 80ms.
- **Cards:** translateY(-2..-3px), shadow steps up one level,
  border picks up a 30–45% tint of the relevant color.
- **Chips & tags:** color + border shift to a warmer tone; active
  state fills solid (navy default, department-tinted when
  `section=…`).
- **Icon buttons:** soft navy tint → crimson tint on hover, gold
  focus ring.

**Transparency & blur.** Reserved for chrome — never for body text
or interior card panels. Use the glass tokens (`--glass-thin /
regular / thick` + `--glass-blur-*`); don't roll your own translucent
rgba.

**Imagery vibe.** Warm, official, document-flavored. Photos appear
only as subscriber avatars; everything else is iconography over
solid surfaces. Decorative illustrations are out of vocabulary —
the brand looks ordered and bureaucratic on purpose. The aurora
glows provide the only "atmosphere."

**Layout rules.**
- Container max-width `--maxw` 1280px; pages center inside it.
- Topbar is sticky 12px from the viewport edge (it floats, glass).
- Side rail collapses to 76px and expands to 272px on hover.
- Dock is bottom-centered, pill-shaped, glass.
- Page gutter 24px; section gap 32–40px; grid gap 16–20px between
  cards.
- RTL is the default; flip with `<html dir="ltr">` per page.

**Dark mode — HIG style, calm not OLED.** Surfaces follow the iOS
elevated-surface model: `#000000` canvas, `#1C1C1E` primary cards,
`#2C2C2E` tertiary. Text uses the four-tier white-with-alpha ladder.
iOS dark system colors swap in for the semantic palette. Department
colors brighten one notch so they keep contrast on dark. Glass tiers
use lower alpha so the aurora still registers through them. Shadows
deepen, focus rings strengthen.

## Iconography

The hub uses **two** icon systems side by side.

1. **Material Symbols Outlined** (Google) — the workhorse. Pulled
   in via the variable-axis Google Fonts URL, controlled with the
   `FILL`, `wght`, `GRAD`, `opsz` axes. Used everywhere a service,
   action, status, or empty state needs an icon. Use the
   `.material-symbols-outlined` class or the `<Icon name="…" />`
   wrapper; pass a ligature name like `bolt`, `receipt_long`,
   `electrical_services`, `report`, `payments`, `warning`,
   `arrow_back`. Size via `--rs-icon-opsz` and the `sm/md/lg/xl`
   step classes; flip to solid via `--rs-icon-fill` or `filled`.
2. **`tdq-*` custom SVG set** — 14 brand-drawn icons for the
   electricity-service vocabulary (meter, pole, cable, plug, tower,
   gauge, fees, stamp, case, form, …). 24×24, 1.75 stroke, round
   caps. Defined in `ds_icons.js`, which injects a single inline
   `<symbol>` sprite on load; reference with
   `<svg class="ds-ico"><use href="#tdq-meter" /></svg>`.
   Use these on hero / brand surfaces, not in dense tables.

**No emoji, no PNG icons.** Never paste a Unicode arrow as
decoration — use the Material Symbols glyph.

## Index

```
styles.css                 ← the one entry consumers link
ds/
  styles.css               (original repo entry; styles.css at root re-exports its closure)
  tokens/  fonts / colors / typography / spacing / shadows / glass / motion / base
  core.css                 (buttons, chips, tags, badges, cards, sla, savebadge)
  navigation.css           (topbar, rail, dock, tabs, crumbs)
  forms.css                (input, field, search, textarea)
ds_icons.js                custom 'tdq-*' SVG sprite + JS mount()
data.js                    sections, services, pricing, recent cases, advisories
assets/
  logo.png                 brand mark

components/
  core/                    Button, IconButton, Icon, Card
  data-display/            Tag, SectionBadge, Chip, SLATag, SaveBadge
  forms/                   Input, Field, SearchInput, Textarea
  navigation/              Tabs, Breadcrumbs
                           — each component is a {Name.jsx, Name.d.ts,
                             Name.prompt.md} trio with one card HTML
                             per directory.

guidelines/                Foundation specimen cards (Colors, Type,
                           Spacing, Brand) — small @dsCard pages that
                           populate the Design System tab.

ui_kits/
  service-hub/             Interactive recreation of the officer console
                           — login → dashboard → all services (hybrid
                           hero + grid) → print form (live Word preview
                           via docxtemplater + docx-preview). Run from
                           ui_kits/service-hub/index.html.

fonts/
  Arimo-{Regular,Italic,Medium,MediumItalic,SemiBold,SemiBoldItalic,
         Bold,BoldItalic}.ttf  self-hosted print form face

SKILL.md                   Skill manifest for Claude Code consumers.
DESIGN.md                  Single-file design system in the Google Stitch
                           DESIGN.md format (9 sections) — hand to any AI
                           agent to generate matching product UI.
preview.html               Stitch-style visual catalog (swatches, type,
                           buttons, cards) with a light/dark toggle.
REVIEW-SKILL.md            Design-system review gate — run before shipping
                           any UI to catch library/token/a11y/anti-slop drift.
```

## Using the system

Link the single root stylesheet, then mount any component from the
namespace exposed by the compiled `_ds_bundle.js`:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, SectionBadge } = window.TadfuqAlKhayrDesignSystem_640d84;
</script>
```

For raw HTML / non-React work, the same classes are available
directly: `rs-btn rs-btn--primary`, `rs-card rs-card--brand-rim`,
`rs-tag rs-tag--success`, etc. Component classes use the `rs-`
prefix; layout classes specific to the UI kit use `sh-`.
