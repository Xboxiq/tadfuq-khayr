---
name: tadfuq-al-khayr-design
description: Use this skill to generate well-branded interfaces and assets for Tadfuq Al-Khayr — the Arabic-first (RTL) electricity service hub of Iraq's General Company for Electricity Distribution (Rasafa branch, Baghdad), either for production or throwaway prototypes / mocks. Contains design guidelines, a three-layer palette (brand navy + crimson + gold; iOS system palette; Apple Pro neutrals), four-department color taxonomy (CS / CB / CT / CA), Apple HIG Dynamic Type scale on the IBM Plex family (Plex Sans Arabic + Plex Sans + Plex Mono) plus self-hosted Arimo for print, deep Liquid Glass surfaces, full Light + Dark modes, the TEC brand mark, Material Symbols + custom tdq-* iconography, reusable UI components, and a Service Hub UI kit (login → dashboard → services → Word-faithful print form).
user-invocable: true
---

Read `README.md` first — it is the brand guide and the manifest. Then explore:

- `styles.css` (root) is the single CSS entry — everything cascades from
  it. `@import` it once and the entire token closure (colors, type,
  spacing, shadows, glass, motion) plus the `rs-*` component
  stylesheets become available.
- `ds_icons.js` registers the custom `tdq-*` SVG sprite; for everything
  else use Material Symbols Outlined (loaded by `styles.css`).
- `data.js` carries the sections, services, pricing tables, and
  advisories — copy / reference it whenever you need real product copy.
- `components/<group>/<Name>.jsx` are the React primitives. Read the
  sibling `<Name>.prompt.md` for usage examples and `<Name>.d.ts` for
  the props contract. Class names use the `rs-` prefix; you can also
  use those classes directly in plain HTML.
- `ui_kits/service-hub/` is the fully interactive officer console
  (login → dashboard → all services → Word-faithful print form). Use
  it as the reference for any larger surface — the layout grammar
  (command shell, deep Liquid Glass topbar / login card / print
  toolbar, department deck, services express, KPI strip, activity
  feed, services hybrid hero + grid, live Word preview) lives there.
- `guidelines/*.card.html` are the small specimen cards covering
  colors, type, spacing, glass, logo, and iconography.

If creating visual artifacts (slides, mocks, throwaway prototypes,
etc.), copy assets out and create static HTML files for the user to
view. Pages must declare `<html lang="ar" dir="rtl">` unless the
content is Latin-only. Reach for the four department colors
(`--c-CS`, `--c-CB`, `--c-CT`, `--c-CA`) before any other accent; reach
for the navy → crimson `--brand-grad` for primary actions; reserve gold
for VIP / ceremonial accents only. For semantic state (success / warn /
error / info) reach for the iOS system colors via `--ok / warn / err /
info` — not brand colors. Use surface + text tiers by intent
(`--surface-primary / secondary / tertiary`, `--text-primary /
secondary / tertiary / quaternary`) rather than raw hex. Reach for the
Apple HIG Dynamic Type names (`--fs-body`, `--fs-title2`,
`--fs-large-title`, …) rather than legacy `--fs-xs..4xl` aliases.
Glass surfaces must use the three-tier system (`--glass-thin /
regular / thick` + `--glass-blur-*`) — never roll your own translucent
rgba. Always honor both Light and Dark modes (`body.dark` flips every
token cleanly). Never use emoji as icons. Never swap the four
department colors.

## Installed Skills & Reference Library

Six external skill sources are now installed in `skills/`. Read them before designing.

### Fundamentals (TypeUI — bergside/typeui)
Applied as a reasoning layer on top of the brand tokens:
- `skills/fundamentals/ui-principles.md` — hierarchy, layout, color, depth, 9 core principles
- `skills/fundamentals/ux-principles.md` — 30 UX laws, control state contract, form rules, RTL interaction
- `skills/fundamentals/typography.md` — 6 pillars: foundations, scale, readability, a11y, responsive, brand
- `skills/fundamentals/accessibility.md` — WCAG 2.2 ruleset; access wins every conflict
- `skills/fundamentals/spacing.md` — 4pt grid, inner-outer rule, relationship spacing, anti-patterns

### Brand Reference DESIGN.md Files (awesome-design-md — VoltAgent)
73 brands available upstream; 5 installed locally for this project's reference aesthetics:
- `skills/references/apple.DESIGN.md` — photography-first, single Action Blue, SF Pro tight tracking
- `skills/references/linear.DESIGN.md` — dark precision, four-surface hierarchy, single lavender accent
- `skills/references/vercel.DESIGN.md` — stark b&w, Geist+Geist Mono, mesh gradient hero only
- `skills/references/notion.DESIGN.md` — illustration-rich, purple CTA, pastel card tints, 8px radius
- `skills/references/stripe.DESIGN.md` — weight-300 display, indigo pill CTA, tabular-nums everywhere

### Operating Skills (open-design — nexu-io)
- `skills/frontend-design.md` — 6-step workflow for building production-grade UI
- `skills/impeccable-polish.md` — audit/critique/polish/animate/harden any existing artifact
- `skills/design-md.md` — create/update DESIGN.md files in the 9-section standard format

### Additional Sources (check directly)
- **designmd-supply** (context-dot-dev) — auto-converts any live site to DESIGN.md via Context.dev API
- **neuform.ai** — form & input design system
- **mydesignmd.com** — DESIGN.md catalog & generator

---

## Anti-slop & pre-delivery checklist

Taste rules to keep output premium, not generic. Apply to every screen
before calling it done.

**Anti-slop — never ship these:**
- AI purple/indigo→pink gradients, or rainbow mesh blobs as "decoration"
- Emoji used as UI icons (use Material Symbols or the `tdq-*` set)
- Cards that are all the same: identical radius + 1px gray border +
  drop shadow, stamped in a uniform grid with no hierarchy
- Centered-everything layouts with no asymmetry, rhythm, or focal point
- Walls of equal-weight text; every heading the same size as the body
- Stock "lorem" filler, fake stats, or icon+number cards that say nothing
- Default browser focus outlines, no hover states, instant (0ms) transitions
- Pure `#000` on `#fff`; harsh neon on white; contrast below 4.5:1

**Taste moves — reach for these:**
- One clear focal element per section; vary card size/emphasis (bento, not grid)
- A real type scale — display vs. title vs. body must be obviously different
  (Alexandria/Readex display sizes, tight tracking on large headings)
- Warm calm canvas (`--f-bg`), jewel-calm OKLCH dept colors, gold only as accent
- Layered depth: soft multi-shadow + a 1px light-catching top edge, not one flat box-shadow
- Purposeful motion: 180–360ms `--f-spring` hover lifts (1–3px), 80ms press, scroll reveals — never bounce, never loop decoratively
- Honor `prefers-reduced-motion`; visible keyboard focus rings (`--ring*`)

**Pre-delivery checklist (tick all):**
- [ ] No emoji as icons; SVG/Material Symbols only
- [ ] `cursor: pointer` on every clickable element
- [ ] Hover + press states with smooth 150–360ms transitions
- [ ] Text contrast ≥ 4.5:1 in both light and dark
- [ ] Visible focus states for keyboard nav
- [ ] `prefers-reduced-motion` respected at the rule level
- [ ] Responsive at 375 / 768 / 1024 / 1440px
- [ ] RTL correct (logical properties, mirrored chevrons)
- [ ] Real content — no lorem, no filler stats
- [ ] Clear visual hierarchy — a viewer's eye knows where to land first

If working on production code, you can copy assets, lift the `rs-*`
recipes, and read the guidelines here to become an expert in designing
with this brand.

If the user invokes this skill without any other guidance, ask them
what they want to build or design, ask a couple of clarifying questions
(target screen vs. component vs. slide; which department; Arabic-only
or bilingual; light or dark), and act as an expert designer who outputs
HTML artifacts *or* production code, depending on the need.
