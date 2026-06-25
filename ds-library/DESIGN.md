# Tadfuq Design System

The single, authoritative design system for Tadfuq Al-Khayr. **One token source, one primitive library, one document.** This is the foundation layer — no screen-level or feature work belongs here.

> Status: **Foundation v1.** Token source + primitive library + governance are complete and verified (100% token coverage, guard clean, 14 tests passing). Screen migration is a separate, later phase.

---

## 1. Architecture (load order is load-bearing)

```
ds-library/
├── tokens.css      ← THE single source of truth (colors, type, space, radius,
│                     shadow, motion, z, semantic aliases, light + dark)
├── base.css        ← reset · fonts · RTL defaults · icon font · a11y
├── primitives.css  ← the component library (CSS), namespace .e-
├── layout.css      ← app shell + page scaffolding primitives, .e-
├── styles.css      ← single entry: @imports the four above, in order
├── ds.jsx          ← window.DS — React wrappers over the primitives (no build)
├── ds-utils.mjs    ← pure helpers (unit-tested)
├── tools/ds-guard.mjs  ← no-bypass linter
└── tests/          ← node:test (utils + jsdom DOM + app mount)
```

**Consume the system with one line:** `<link rel="stylesheet" href="ds-library/styles.css">` then use `.e-*` classes or `window.DS` components. Dark mode: add `dark` / `e-dark` to `<body>` (or `[data-theme="dark"]`).

**Retired (do not use, not part of the system):**
- `ds/` (v1 tokens — Cairo, `#232350` navy, hex departments) — **deprecated**.
- `ds-enterprise/` + `ds-theme.css` (cool enterprise palette) — **removed**.

There is now exactly **one** color system, **one** type system, **one** primitive namespace.

---

## 2. Token reference (everything lives in `tokens.css`)

### Color
- **Brand primitives:** `--f-navy #1e2a4d`, `--f-gold #b8861b`, `--f-crimson #8f1d28` (+ `-soft`). Muted jewel — never loud.
- **Departments (OKLCH, uniform lightness):** `--f-cs` cobalt · `--f-ct` bronze · `--f-cb` sea-teal · `--f-ca` rosewood.
- **Neutral ramp:** `--f-n-0 … --f-n-950` (warm). `--gray-*` aliased to it for legacy refs.
- **Semantic (what components read):** `--bg --surface --surface-sunk --surface-hover --surface-active --text --text-secondary --text-muted --text-on-accent --border --border-strong --accent --accent-hover --accent-soft --link`.
- **State:** `--ok --warn --err --info` each with `-bg` / `-bd`.
- **Department semantic:** `--dept-cs/ct/cb/ca` (+ `-bg`).
- **One accent rule:** `--accent` (navy) is the only interactive accent. Departments/state are for tags, dots, and status only — never large fills.

### Typography
- Families: `--font-ui` Readex Pro (Arabic-first UI) · `--font-display` Alexandria (headings) · `--font-latin` Geist · `--font-mono` Geist Mono (numbers/IDs). **Two families + mono** — the Cairo/Jakarta stack is retired.
- Scale: `--fs-2xs 11 · xs 12 · sm 13 · base 14 · md 15 · lg 17 · xl 22 · 2xl 28 · 3xl 36`.
- Weights `--fw-regular/medium/semibold/bold`; line-heights `--lh-tight/normal/relaxed`; `--tracking-tight/-caps`.
- Role tokens: `--text-display/-title/-heading/-body/-caption`.

### Spacing · Radius · Elevation · Motion · Layout
- **Spacing:** 4px base, `--sp-1 … --sp-12`. No magic numbers in components.
- **Radius:** `--r-xs 6 · sm 8 · md 16 · lg 20 · xl 26 · full`.
- **Elevation:** `--shadow-xs…lg` (warm, soft, layered) + semantic roles `--elev-card/-raised/-popover/-modal`.
- **Focus:** `--focus-ring`, `--focus-ring-err`.
- **Motion:** `--ease --ease-out --spring`; `--dur-fast 120 · dur 200 · dur-slow 300`; `--t-colors`.
- **Control sizing:** `--control-h-sm 30 · -h 38 · -lg 46`.
- **Layout:** `--sidebar-w --topbar-h --content-max 1320`; breakpoints sm640/md768/lg1024/xl1280.
- **Z-index:** `--z-sticky/-sidebar/-overlay/-modal/-toast/-tooltip`.

---

## 3. Primitive library (namespace `.e-`, mirrored by `window.DS`)

Buttons (`.e-btn` + `--primary/ghost/danger/subtle/sm/lg/block`) · `.e-iconbtn` · Forms (`.e-field/.e-label/.e-input/.e-select/.e-textarea/.e-inputwrap/.e-check/.e-switch/.e-form-grid`, `.is-invalid`) · `.e-badge` · `.e-status` · `.e-dept--cs/ct/cb/ca` (+ `-rail`) · `.e-chip` · `.e-card` (`--hover`) · `.e-kpi` · `.e-table`/`.e-tablewrap` · `.e-tabs/.e-tab` · `.e-crumbs` · `.e-pager` · `.e-alert--ok/warn/err/info` · `.e-empty` · `.e-skel`/`.e-spinner` · `.e-menu` · `.e-scrim/.e-modal` · `.e-tip` · `.e-divider` · `.e-progress` · `.e-avatar`.

Shell/scaffold (`layout.css`): `.e-app/.e-side/.e-nav/.e-topbar/.e-content/.e-pagehead/.e-section/.e-toolbar/.e-grid/.e-cols/.e-deptcard/.e-srv/.e-formlayout`.

React: `window.DS.{Button, IconButton, Card, Field, Input, Select, Textarea, Checkbox, Switch, SearchInput, Badge, Status, DeptTag, Chip, StatCard, DataTable, Tabs, SegmentedControl, Breadcrumb, Pager, Alert, Empty, Skeleton, Spinner, Avatar, Progress, Menu, Modal, ConfirmDialog, ToastProvider, useToast, PageHead, Toolbar}`.

---

## 4. Governance (how the single system stays single)

1. **No raw values in components.** Color/space/radius/shadow/type/motion come from tokens only. Enforced by `ds-review` skill + `tools/ds-guard.mjs`.
2. **No new prefixes.** `f-/adm-/lg-/ff-/fb-/hub-/sp-` are frozen. New UI uses `.e-` / `window.DS`.
3. **One primitive per concept.** No re-implementing a button/modal/field/table per screen.
4. **Token coverage gate.** Every `var()` in base/primitives/layout must resolve in `tokens.css` (CI checks this).
5. **PR review** runs the `ds-review` checklist (no-bypass, token discipline, a11y, states, motion).

---

## 5. Migration map (for the later screen phase — not done here)

Legacy → system (full table in `MIGRATION.md`): `f-btn → .e-btn/DS.Button` · `f-card → .e-card/DS.Card` · `adm-modal/lg-modal/fui-modal/sp-panel → DS.Modal` · `ff-field/lg-field/adm-field → DS.Field` · `f-stat/fb-kpi/adm-statcard → .e-kpi/DS.StatCard` · `f-tab/ff-tab/adm-side → DS.Tabs` · 6 search inputs → `DS.SearchInput` · 5 empty states → `DS.Empty` · `adm-tbl/fr-table → .e-table/DS.DataTable`.

**Order (next phase):** shell+overview → services → cases → branches → login → form → admin (tab-by-tab). No screen work until this foundation is approved.

---

## 6. Verification (this phase)
- Single token source: ✓ `tokens.css` only; `ds/` deprecated, `ds-enterprise/` removed.
- Token coverage: ✓ 100% (96 used / all defined).
- Single primitive library: ✓ `.e-` (CSS) + `window.DS` (React).
- Guard: ✓ clean. Tests: ✓ 14/14. Braces: ✓ balanced.
- Preview: `index.html` (component gallery) renders on the single entry.
