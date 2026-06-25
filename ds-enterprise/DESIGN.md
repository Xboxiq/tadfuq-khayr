# DESIGN.md — Tadfuq Al-Khayr · Enterprise Design System

> A calm, utility-grade design system for the Rasafa electricity-distribution
> customer-service hub. Built to replace the previous busy/decorative direction
> with clear, simple, organized enterprise UX — the way real back-office tools
> (Linear, Stripe dashboard, IBM Carbon) are designed.

- **Product**: internal CS operations tool. Arabic-first, RTL. Staff users (CS, cashier, inspector, supervisor, admin).
- **Stack**: vanilla CSS + custom properties, no framework. Class prefix `.e-`.
- **Entry**: `<link rel="stylesheet" href="ds-enterprise/styles.css">`, `<html dir="rtl">`, optional `<body class="e-dark">`.
- **Preview**: open `ds-enterprise/app.html` — a working 8-screen prototype with real data.

---

## 1. Design principles
1. **Clarity over decoration.** No gradients, glass, aurora, glow, or floating docks. Flat surfaces, 1px borders, near-invisible shadows.
2. **One accent.** A single enterprise blue (`#1652f0`) for actions, links, active state. Everything else is neutral.
3. **Color = meaning.** The four department colors and the state colors (ok/warn/err/info) appear only as small tags, dots, and badges — never as large fills.
4. **Same place, every time.** Navigation is a fixed right sidebar; the page header and toolbar pattern repeat on every screen. Predictability is the feature.
5. **Data first.** Tables, KPIs, and forms are the product. Tabular figures (mono) keep numbers aligned and scannable.
6. **Quiet motion.** 120–260ms, transform/opacity only, reduced-motion honored.

## 2. Color
- Neutral ramp `--gray-0 … --gray-950` (cool). Canvas `--bg`, surfaces `--surface`, borders `--border`/`--border-strong`.
- Accent `--accent` = `#1652f0` (+ `--accent-hover`, `--accent-soft`). Brand navy `--brand-navy` used only for the logo/avatar.
- Departments: `--dept-cs/ct/cb/ca` (+ `-bg` soft). States: `--ok/warn/err/info` (+ `-bg`, `-bd`).
- Dark mode: `body.e-dark` (neutral slate `#0d1117`, never pure black).

## 3. Typography
- UI: **IBM Plex Sans Arabic** (`--font-ui`). Data/numbers: **IBM Plex Mono** (`--font-mono`).
- Scale (utility): `--fs-xs 12 / sm 13 / base 14 / md 15 / lg 17 / xl 20 / 2xl 24`. Weights 400/500/600/700.

## 4. Space / shape / elevation
- 4px spacing scale `--sp-1 … --sp-16`.
- Radius `--r-xs 4 / sm 6 (controls) / md 8 (cards) / lg 12 (modals)`; `--r-full` for dots/avatars only. **No pills on containers or buttons.**
- Elevation `--shadow-xs … lg` — ultra-subtle; borders carry structure.

## 5. Components (prefix `.e-`)
Buttons (`.e-btn` + `--primary/ghost/danger/subtle/sm/lg/block`), `.e-iconbtn`, forms (`.e-field/.e-label/.e-input/.e-select/.e-textarea/.e-inputwrap/.e-check/.e-switch/.e-form-grid`, `.is-invalid`), `.e-badge`, `.e-status` (dot pill), `.e-dept--cs/ct/cb/ca`, `.e-chip` (filters), `.e-card`, `.e-kpi`, `.e-table` (`.e-num` mono cells), `.e-tabs`, `.e-crumbs`, `.e-pager`, `.e-alert`, `.e-empty`, `.e-skel`/`.e-spinner`, `.e-menu`, `.e-modal`, `.e-tip`/`.e-divider`/`.e-progress`/`.e-avatar`.

## 6. App shell & layout (`app.css`)
- `.e-app` = content + right sidebar (`.e-side`, collapsible `.is-mini`, off-canvas < 860px).
- `.e-main` = sticky `.e-topbar` + scrolling `.e-content` (max 1440px, centered).
- Page pattern: `.e-pagehead` (title + actions) → `.e-toolbar` (search + filter chips) → content (`.e-grid--kpi/dept`, `.e-cols`, `.e-formlayout`).

## 7. Screens in the prototype (`app.html`)
- **نظرة عامة (Overview)**: 4 KPI tiles → 4 department cards → recent-cases table + priority/SLA side panel.
- **الخدمات (Services)**: search + department filter chips → services grouped by department with SLA + price.
- **الحالات (Cases)**: filter toolbar → full cases table (priority, status, fee, officer) → pagination.
- **طلب خدمة (Request form)**: breadcrumb → two columns: grouped fields + document checklist, and a sticky fee-summary card with the official-review notice.
- **الفروع / التقارير / الأجور / الإدارة**: clean empty-state stubs (structure ready).

## 8. Accessibility
RTL-first · keyboard `:focus-visible` rings · WCAG AA contrast · `prefers-reduced-motion` honored · labels above inputs, errors below · single-line nav · 56px topbar.

## 9. How this differs from the old design
| Old (busy) | New (enterprise) |
|---|---|
| Aurora background, glass panels, glow | Flat cool-gray canvas, 1px borders |
| Command dock, spotlight, morph buttons, signature footer | Fixed sidebar + predictable page header |
| Heavy gradients on big surfaces | One accent; color only for meaning |
| Decorative motion everywhere | Quiet 120–260ms transitions |
| Mixed Cairo + Jakarta + display drama | IBM Plex Sans Arabic + Mono, restrained scale |
