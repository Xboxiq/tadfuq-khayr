# DESIGN.md — Rasafa Service Hub · Design System v2

> AI-readable spec for the v2 design system. Lives beside v1 (`ds/`) for
> side-by-side comparison. v2 is a **disciplined evolution** of v1's identity —
> same navy + crimson + gold, executed with real tonal ramps, one type voice,
> restrained "instrument-panel" glass, and a single signature element.

- **Product**: internal service / case-management hub (dashboards, tables, forms). Arabic-first, RTL.
- **Stack**: vanilla CSS + custom properties. No framework. Class prefix `.v2-` (utilities `.u-`).
- **Entry**: `@import "ds-v2/styles.css";` then add `dir="rtl"` to `<html>` and optional `class="dark"` to `<body>`.

---

## 1. Identity

| Axis | Decision |
|---|---|
| Spirit | Bold evolution of v1, not a clone or a different brand |
| Accent | **Crimson is the only accent** — every primary action. Locked across the whole UI |
| Gold | Ceremonial only (honors, seals, the Meridian terminus). Never a default accent |
| Neutrals | Navy-tinted cool grays (`--ink-*`) so plain surfaces still read as the brand |
| Signature | **The Meridian** — a navy → crimson → gold sweep used as a thin rule under page headers, the active-nav rib, tab indicator, and progress fill |

---

## 2. Color tokens

Brand ramps (50–900) anchored on the v1 values:

- Navy: `--navy-50 … --navy-950`, anchor `--navy-700 #232350`, deepest `--navy-900 #15153a`
- Crimson: `--red-50 … --red-900`, anchor `--red-500 #c1121f`, hot `--red-400 #e0313c`
- Gold: `--gold #f4c430` (+ `--gold-soft`, `--gold-deep`)
- Neutral ink: `--ink-0 … --ink-950` (navy-tinted)

Semantic aliases (theme-aware, light + `body.dark`):
`--bg --surface --surface-2 --surface-3 --surface-sunk --text --text-soft --text-faint --border --border-strong --accent --accent-hover --accent-quiet --link`

Departments (consistent 1:1 mapping, AA on light):
`--c-CS` blue (اشتراكات) · `--c-CB` teal (مالية) · `--c-CT` amber (فني) · `--c-CA` crimson (شكاوى)

State: `--ok --warn --err --info` (+ `*-soft` tints).

Signature gradients: `--brand-grad`, `--brand-grad-soft`, `--brand-sweep` (Meridian), `--brand-line`.

---

## 3. Typography

- `--font-ui` → **Readex Pro** — entire UI, Arabic + Latin + numerals (one voice)
- `--font-data` → **JetBrains Mono** — IDs, reference numbers, tabular figures, codes
- `--font-form` → **Arial** — printed official sheets only (do not change)

Scale (fluid clamps on display): `--fs-2xs 11px … --fs-base 15px … --fs-4xl ~4.2rem`.
Weights 300–700. Emphasis inside a heading = bold of the **same** family — never a second face.
Arabic body never takes positive tracking; `--tracking-caps` is reserved for short Latin micro-labels.

---

## 4. Space, shape, elevation, motion

- **Space**: 4px base, `--sp-1 … --sp-12`.
- **Radius (shape lock)**: inputs `--r-sm 10`, buttons `--r-md 12`, cards `--r-lg 16`, shells/modals `--r-xl 22`, pills `--r-full`. Printed forms = 0.
- **Elevation**: `--shadow-xs … --shadow-xl`, all **navy-tinted** (never pure black on light). Double-bezel via `--bezel-top / --bezel-rim / --bezel-recess`.
- **Focus**: `--ring` (crimson), `--ring-navy`, `--ring-err`, `--ring-gold`.
- **Motion**: `--ease-out-quint` (signature), durations `--dur-fast 140 / --dur-base 220 / --dur-slow 320 / --dur-exit 160`. Only `transform`/`opacity` animate. `prefers-reduced-motion` collapses all.

---

## 5. Components (class reference)

| Module | Classes |
|---|---|
| `core.css` | `.v2-btn` (`--primary/brand/outline/ghost/danger`, `--sm/lg/pill/block`, `.v2-btn__dot`), `.v2-iconbtn`, `.v2-card` (`--meridian/interactive`), `.v2-bezel`+`__core`, `.v2-panel`, `.v2-badge`, `.v2-dot`, `.v2-dept--CS/CB/CT/CA`, `.v2-chip`, `.v2-stat`, `.v2-table`, `.v2-kbd`, `.v2-avatar`, `.v2-progress`, `.v2-segmented`, `.v2-tip`, `.v2-eyebrow`, `.v2-section-head` |
| `navigation.css` | `.v2-rail` (+`.is-mini`), `.v2-navitem`, `.v2-topbar`, `.v2-dock`, `.v2-tabs`/`.v2-tab`, `.v2-crumbs`, `.v2-pager` |
| `forms.css` | `.v2-field` (`.is-invalid/.is-valid`), `.v2-label`, `.v2-input`, `.v2-textarea`, `.v2-select`, `.v2-inputgroup`, `.v2-check`, `.v2-switch`, `.v2-form-grid` |
| `feedback.css` | `.v2-skel*`, `.v2-spinner`, `.v2-empty`, `.v2-errstate`, `.v2-alert`, `.v2-banner`, `.v2-toast`/`.v2-toaster`, `.v2-scrim`/`.v2-modal` |
| `menus.css` | `.v2-menu`, `.v2-popover`, `.v2-cmdk` (⌘K), `.v2-drawer` |
| `data.css` | `.v2-list`, `.v2-detail`, `.v2-timeline`, `.v2-stepper`/`.v2-step`, `.v2-accordion`, `.v2-slider`, `.v2-dropzone`/`.v2-file`, `.v2-bars`/`.v2-spark`, `.v2-cal` |
| `layout.css` | `.v2-shell`, `.v2-content`, `.v2-pagehead`, `.v2-section`, `.v2-toolbar`, `.v2-grid`, `.v2-bento`, `.v2-stack`/`.v2-cluster`/`.v2-spread` |
| `utilities.css` | `.u-*` text/size/weight/layout/spacing helpers + `.u-text-meridian`, `.u-rise` |
| `print.css` | ink-economical print rules; strips chrome, flattens shell, plain-rules the Meridian |

---

## 6. Interaction states (always implement the full cycle)

Loading (shape-matched skeletons, not just a spinner) → Empty (an invitation to act) →
Error (says what happened + how to recover) → Success. Transient feedback via toasts; confirmation via modal.

## 7. Accessibility floor

RTL-first · keyboard `:focus-visible` rings · WCAG AA contrast (text, placeholders, buttons, departments) ·
`prefers-reduced-motion` and `prefers-reduced-transparency` honored · labels above inputs, errors below · single-line nav, 64px topbar.

## 8. Responsive

Breakpoints 640 / 768 / 1024 / 1280. Content cap `--content-max 1320px`. Grids collapse to single column ≤768px;
the rail goes off-canvas (slides from inline-end) ≤1024px. Bento cells reset spans on mobile.

## 9. Compare with v1

Open `ds-v2/showcase.html` and `ds/showcase.html` side by side. Same identity, evolved: one type voice
(Readex Pro vs Cairo+Jakarta), real tonal ramps vs ad-hoc mixes, restrained glass vs heavier blur,
the Meridian as a consistent recurring signature, and a complete state/overlay/data layer.
