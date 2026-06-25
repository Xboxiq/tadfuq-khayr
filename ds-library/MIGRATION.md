# Migration Map — Scattered UI → Unified `window.DS` Component Library

**App:** Tadfuq Al-Khayr (تدفّق الخير) — React 18 via CDN + Babel standalone (no build step), Arabic / RTL, CSS classes prefixed `f-` / `fui-` / `adm-` / `lg-` / `ff-` / `fb-` / `hub-` / `sp-`.

**Scope of this analysis (READ-ONLY):** `final.jsx`, `final_globals.jsx`, `final_ui.jsx`, `final_services.jsx`, `final_form.jsx`, `final_cases.jsx`, `final_branches.jsx`, `final_admin.jsx`, `final_login.jsx`, `final_spotlight.jsx`, `final_print.jsx` + companion `final*.css`. No source files were modified.

**Target convention:** every primitive is published on `window.DS` (same global-attach pattern the app already uses, e.g. `final_ui.jsx` does `window.ToastProvider = ...`). DS components keep the `--f-*` design tokens and RTL/`dir="rtl"` behavior so the migration is purely structural.

**The core problem:** there is exactly **one** good shared layer today (`final_ui.jsx` → Toast/Skeleton/EmptyState/ConfirmDialog/validation, attached to `window.*`). Everything else is re-invented per screen. `final_admin.jsx` (102 KB) and `final_login.jsx` each ship their own Modal, form-field, password-strength and table implementations that duplicate primitives elsewhere.

---

## 1 + 2. Summary Table — Legacy → DS component → props → files → count

> Counts are occurrences of the class/symbol across the JSX files (rough usage weight), gathered via grep.

| Legacy pattern | DS component | Key props | Appears in (files) | ~Count |
|---|---|---|---|---|
| `f-btn` (+ `--primary` `--ghost` `--sm` `--lg` / `fui-btn-danger` / `f-btn--danger`) | `DS.Button` | `variant('primary'\|'ghost'\|'danger')`, `size('sm'\|'md'\|'lg')`, `icon`, `iconEnd`, `loading`, `disabled`, `onClick` | admin 39, final 5, ui 3, form 3, services 2, print 2, cases 1 | **85** |
| `f-card` + `f-card__head/__title/__sub/__foot` | `DS.Card` (slots `header`/`footer` or `DS.Card.Header`,`.Title`,`.Sub`,`.Footer`) | `title`, `subtitle`, `icon`, `footer`, `children` | final 13, services 13, form 12, cases 3 | **41** |
| `f-h2` + `f-h2__main/__title/__icon/__sub` (section header) | `DS.SectionHeader` | `title`, `subtitle`, `icon`, `action` (right-side button slot) | final, services, cases, form, branches | **44** |
| `Icon` component (`final_globals.jsx`) **+ raw `material-symbols-outlined` spans** | `DS.Icon` | `name`, `size` | `<Icon>` everywhere (233); **raw spans: login 19, globals 1** | **253** |
| `ToastProvider` / `useToast` / `fui-toast*` (`final_ui.jsx`) | `DS.ToastProvider` + `DS.useToast` | `push({kind,title,body,duration,action})`, `dismiss(id)` | useToast in form, print, admin, cases | **14 + provider** |
| `ConfirmDialog` / `fui-modal*` (`final_ui.jsx`) | `DS.ConfirmDialog` (built on `DS.Modal`) | `open`, `title`, `description`, `confirmLabel`, `cancelLabel`, `danger`, `icon`, `onConfirm`, `onCancel` | ui (def), form (reset), admin | **11** |
| `Skeleton` / `SkeletonCard` / `SkeletonRow` / `fui-skel*` | `DS.Skeleton` (+ `DS.Skeleton.Card`, `.Row`) | `w`, `h`, `r`, `lines` | ui (def), consumers | **18** |
| `EmptyState` / `fui-empty` **+ ad-hoc empties** `fs-empty`,`hub-empty`,`fb-empty`,`adm-empty`(9),`sp-empty` | `DS.EmptyState` | `icon`, `title`, `body`, `action{label,onClick,icon}` | ui (def 4) + services, branches, admin, spotlight | **4 + ~14 ad-hoc** |
| Validation: `Validate`,`validateForm`,`FieldError`,`FieldHelp`,`ValidationSummary` (`final_ui.jsx`) | `DS.validators`, `DS.useFormValidation`, `DS.FieldError`, `DS.ValidationSummary` | `rules`, `errors`, `max` | ui (def), form (consumer) | shared |
| `f-tab` (top nav) / `ff-tab` (form pro/orig) / `hub-mode__btn` (view mode) / `adm-side__btn` (admin vertical) | `DS.Tabs` | `items[{key,label,icon,count}]`, `value`, `onChange`, `orientation('horizontal'\|'vertical')`, `variant('underline'\|'pill'\|'rail')` | final 3–7, form 3, services 3, admin 7 | **~16** |
| `ff-seg` / `ff-seg__opt` (segmented choices in form) | `DS.SegmentedControl` | `options`, `value`, `onChange`, `wrap` | form (classification, urgency, reason, class-change) | **16** |
| `fc-chip` (cases + pricing filter) | `DS.FilterChip` / `DS.ChipBar` | `label`, `count`, `active`, `onClick` | cases, pricing | **4** (+ dynamic) |
| Status/pills: `adm-pill` (`--ok/--info/--warn/--off`), `f-feed__status`, `fc-row__*` status, `fs-card__urgent`, `fb-card__badge`, `fb-card__load` | `DS.Badge` / `DS.Status` | `tone('ok'\|'info'\|'warn'\|'err'\|'neutral')`, `icon`, `label`, `dot` | admin 15, final, cases, services, branches | **~30** |
| Dept color tags: `f-deck__chip`/`f-deck__code`, `hub-pass__dept`, `fb-card__svc`, `sp-row__ico` color, `DEPT_COLORS` map | `DS.DeptTag` | `section('CS'\|'CT'\|'CB'\|'CA')`, `size`, `variant('chip'\|'code'\|'dot')` | final, services, branches, spotlight | **many** |
| Search inputs: `f-search`, `fs-pill`, `fs-search`, `fb-search`, `adm-search`, `sp-input` (**6 distinct implementations**) | `DS.SearchInput` | `value`, `onChange`, `placeholder`, `count`, `onClear`, `kbd` | final, services, branches, admin, pricing, spotlight | **6 variants** |
| Form fields: `FF_Field`/`ff-field` (text/textarea/select/date/number), login `lg-field` (26), admin `adm-field`/`adm-form` (39), admin read-only `Field` | `DS.Field` wrapping `DS.Input` / `DS.Select` / `DS.Textarea` / `DS.DateInput` | `label`, `value`, `onChange`, `error`, `help`, `unit`, `mono`, `full`, `type`, `options` | form, login, admin | **ff 8 / lg 26 / adm 39** |
| Modals/overlays: `adm-modal` (admin `Modal` + 5 wrappers), `lg-modal` (login Forgot), `fui-modal` (ConfirmDialog), `sp-panel` (spotlight) | `DS.Modal` | `open`, `onClose`, `icon`, `title`, `sub`, `footer`, `size`, `danger`, `children` | admin, login, ui, spotlight | **~20** |
| Tables: `adm-tbl` (users/audit/roles, 20), `fr-table` (pricing), `PaperFieldRows` (print paper) | `DS.Table` (+ `DS.DataTable` for sort/bulk) | `columns`, `rows`, `renderCell`, `onRowClick`, `selectable`, `empty` | admin, cases/pricing, print | **~20** |
| `adm-toggle` (`Toggle` component, admin) | `DS.Switch` | `on`, `onChange`, `label` | admin | **2** |
| Stat / KPI cards: `f-stat` (overview, 4), `fb-kpi` (branches, 16), `adm-statcard` (admin, 4) | `DS.StatCard` | `icon`, `label`, `value`, `unit`, `delta`, `sub`, `color`, `spark` | final, branches, admin | **~24** |
| Avatars: `f-avatar`/`f-umenu__avatar`, `adm-side__user-avatar`/`adm-userav`, `fb-card__avatar` | `DS.Avatar` | `name`/`initial`, `size`, `badge` | final, admin, branches | **~8** |
| Dropdown menu: `f-usermenu`/`f-umenu` (UserMenu) | `DS.Menu` | `trigger`, `items[{icon,label,onClick,danger}]`, `align` | final | **1 (heavy)** |
| Drawer: `adm-drawer` (UserDrawer) | `DS.Drawer` | `open`, `onClose`, `side`, `title`, `children` | admin | **12** |
| `PasswordStrength` — **defined twice** (`final_login.jsx:385`, `final_admin.jsx:1296`) | `DS.PasswordStrength` | `password` | login, admin | **2 defs** |
| Spotlight overlay (`sp-*`, ⌘K) | keep as-is **or** `DS.CommandPalette` | `open`, `onClose`, `sources`, `onSelect` | spotlight, final (mounts it) | **1** |
| Steps / timeline: `fd-steps`/`fd-step` (service detail), `fc-timeline`/`fc-stage` (cases) | `DS.Steps` | `steps[{icon,label,sub}]`, `current`, `orientation` | services, cases | **2** |
| Meter/usage bars + sparkline: `f-spark`, `f-usage`, `fr-row__bar` | `DS.MeterBar` + `DS.Sparkline` | `value`, `max`, `color`, `values[]` | final, pricing | **3** (low leverage) |

---

## 3. "Collapse these duplicates" — genuine one-offs that must become a single DS component

1. **Modal — 4 parallel implementations → `DS.Modal`.**
   - `final_admin.jsx:42` local `Modal` (`adm-modal`) — itself re-wrapped 5× by `ServiceModal`, `TipModal`, `UserModal`, `PasswordResetModal`, `RoleCreateModal`.
   - `final_ui.jsx` `ConfirmDialog` (`fui-modal`).
   - `final_login.jsx` `ForgotPasswordModal` (`lg-modal`).
   - `final_spotlight.jsx` `SpotlightOverlay` (`sp-panel` veil — same overlay mechanics).
   All hand-roll the same veil + Esc-to-close + `dir="rtl"` sheet. Collapse to one `DS.Modal`; rebuild `DS.ConfirmDialog` and the admin entity modals on top of it.

2. **`PasswordStrength` — literally defined twice** (`final_login.jsx:385` and `final_admin.jsx:1296`) with the same scoring logic → single `DS.PasswordStrength`.

3. **Form field — 3 implementations → `DS.Field` + inputs.**
   - `FF_Field` (`final_form.jsx`, `ff-field`) — the richest (text/textarea/select/date/number + error slot).
   - `lg-field` (`final_login.jsx`) — icon-prefixed inputs, 26 usages, all inlined.
   - `adm-field`/`adm-form` (`final_admin.jsx`, 39 usages) + read-only `Field` (`final_admin.jsx:1186`).
   One `DS.Field` shell + `DS.Input`/`DS.Select`/`DS.Textarea`/`DS.DateInput` should absorb all three.

4. **Icon — two ways to render the same Material symbol.** `Icon` (`final_globals.jsx`) is used 233×, but `final_login.jsx` hand-writes `<span className="material-symbols-outlined">` **19×** instead. Collapse all raw spans onto `DS.Icon`.

5. **Empty state — `EmptyState` exists but is ignored 5×.** Ad-hoc empties `fs-empty` (services), `hub-empty` (services), `fb-empty` (branches), `adm-empty` (admin, 9×), `sp-empty` (spotlight) all reinvent it → `DS.EmptyState`.

6. **Search input — 6 implementations → `DS.SearchInput`:** `f-search` (top chrome), `fs-pill` (services), `fs-search` (pricing), `fb-search` (branches), `adm-search` (admin), `sp-input` (spotlight). All are "icon + input + optional count/clear/kbd".

7. **Status/pill badges → `DS.Badge`/`DS.Status`:** `adm-pill*` (admin), `f-feed__status` (overview activity), `fs-card__urgent` (services), `fb-card__badge`/`fb-card__load` (branches), case priority colors (`final_cases.jsx`). Same "tinted label/dot" idea repeated.

8. **Stat/KPI cards → `DS.StatCard`:** `f-stat` (overview), `fb-kpi` (branches), `adm-statcard` (admin) are three takes on the same icon+value+label tile.

9. **Tabs/segmented → `DS.Tabs` + `DS.SegmentedControl`:** `f-tab`, `ff-tab`, `hub-mode__btn`, `adm-side__btn`, and `ff-seg` are five selection-strip variants.

---

## 4. Prioritized migration order (max leverage first)

1. **Foundation primitives (no UI change, unblocks everything):** `DS.Icon`, `DS.Button`, `DS.Card`, `DS.SectionHeader`. These alone cover **f-btn (85) + f-card (41) + f-h2 (44) + Icon (253)** = the bulk of the surface. Promote the already-shared `final_ui.jsx` pieces (`ToastProvider`, `useToast`, `Skeleton`, `EmptyState`, `ConfirmDialog`, validators) into `DS.*` aliases on day one — they are de-facto the library already.
2. **`final.jsx` shell + overview** (TopChrome, PageHead, SectionHeaders, Stats, Activity, Sidebar). Migrating the shell proves `DS.Button`/`DS.Card`/`DS.SectionHeader`/`DS.StatCard`/`DS.Menu` (UserMenu) end-to-end and every screen renders inside it.
3. **`final_services.jsx`** (ServicesPage, ServiceDetailPage) — highest f-card density (13) + `DS.SearchInput`, `DS.DeptTag`, `DS.Steps`, `DS.EmptyState`.
4. **`final_cases.jsx` + pricing + guide** — `DS.FilterChip`, `DS.Steps`/timeline, `DS.Table` (pricing), `DS.Card`.
5. **`final_branches.jsx`** — `DS.StatCard` (fb-kpi), `DS.SearchInput`, `DS.DeptTag`, `DS.EmptyState`, `DS.Badge`.
6. **`final_login.jsx`** — `DS.Field`/`DS.Input`, `DS.Icon` (kill 19 raw spans), `DS.Modal` (Forgot), `DS.PasswordStrength`. Self-contained, low blast radius, retires a whole duplicate set.
7. **`final_form.jsx`** (schema-driven) — `DS.Field` family + `DS.SegmentedControl`. High value but riskier (see §5) — do after `DS.Field` is proven on login/admin.
8. **`final_admin.jsx`** (largest, 102 KB) — `DS.Modal`, `DS.Table`/`DS.DataTable`, `DS.Field`, `DS.Drawer`, `DS.Switch`, `DS.Tabs` (vertical), `DS.PasswordStrength`. Migrate tab-by-tab (Overview → Services → Tips → Users → Roles → Settings → Audit). Biggest cleanup, do once primitives are battle-tested.
9. **Last / optional:** `final_spotlight.jsx` (`DS.CommandPalette` or keep), `final_print.jsx` official-paper views, decorative one-offs (`f-ticker`, `f-spot`, `f-deck`, `hub-pass` coverflow, `f-spark`).

---

## 5. Risks / hard cases

- **Schema-driven form (`final_form.jsx`) is the hardest.** `FF_Field` + `FF_Rows`/`FF_Classification`/`FF_ClassChange`/`FF_ReasonSeg`/`FF_Urgency`/`FF_Documents` render from `window.SERVICE_FORMS[code]` (in `final_forms_data.js`) and feed `computeFees()` (10+ fee `kind`s: `fixed`, `inspection_plus_meter`, `reconnect`, `installment`, `temp_daily`, `cable_length`, …). `DS.Field` must preserve `data-fk` attributes (used for scroll-to-first-error in `submit()`), autosave-to-localStorage timing, and per-document file attach (`FF_Documents` builds `docFiles` merged into the unified attachment stream). Migrate the *field shell* first; leave fee/section orchestration in place.
- **Two-view "professional vs official paper" coupling.** `final_form.jsx` renders `<window.OfficialPaper>` (Word/docx flow) and `OriginalPaper`/`PaperFieldRows` (HTML paper table). `final_print.jsx` `OfficialPaper` depends on external globals `window.renderFilledDocx/printFilledDocx/downloadFilledDocx`. The print/paper tables (`PaperFieldRows`, doc checklist with `☑/☐`) are **print-fidelity-critical** — `DS.Table` for screen must not be force-fit onto the official paper; keep a dedicated `DS.PrintDocument` and verify `@media print` (`final_print.css`, `no-print`, `of-*` classes) byte-for-byte.
- **Admin RBAC tables + permission gating.** `final_admin.jsx` `adm-tbl` (users/roles/audit) is wired to `window.Auth.can(...)` permission checks, `useStore`/`useAuthState` subscriptions, bulk actions, `UserDrawer`, and role permission matrices (`adm-permblock`/`adm-permcat`/`adm-permitem`). `DS.DataTable` must accept per-row/per-action permission predicates and not flatten the role-matrix editor into a generic grid.
- **RTL + Arabic numerals everywhere.** All sheets are `dir="rtl"`; icons/arrows are mirrored (`arrow_back` means "forward" in flow). DS components must default to logical properties (`margin-inline-*`) and not hardcode left/right. Search/number inputs flip `dir="ltr"` selectively (phone, GPS, mahalla numbers, `f.mono`) — `DS.Input` needs a `dir` escape hatch.
- **No build / global-scope coupling.** Each Babel `<script>` has its own scope and communicates only through `window.*` (`Object.assign(window, {...})`). `window.DS` must be defined/attached **before** consumer scripts run, and the load order in `index.html` matters — `DS` core must come right after `final_globals.jsx`. Components still cannot use ES modules or JSX fragments that Babel-standalone can't parse.
- **Toast provider is a context, not a global call.** `useToast` returns `{push}` from React context (mounted once in `final.jsx`'s root render). Code paths that call it defensively (`window.useToast && window.useToast()` in `final_print.jsx`) must keep working; `DS.useToast` must stay a no-op-safe hook when no provider is mounted.
- **Spotlight / ⌘K is half-shell, half-data.** `SpotlightOverlay` reaches into `window.SERVICES`/`window.SECTION_MAP` and the app's `nav()`. If promoted to `DS.CommandPalette`, keep data sources injectable rather than hardcoded, otherwise leave it app-local.

---

### Appendix — where each legacy primitive currently lives (definitions)
- Shared/ready: `final_ui.jsx` (Toast, Skeleton, EmptyState, ConfirmDialog, validators), `final_globals.jsx` (`Icon`, `DEPT_COLORS`).
- Per-screen reinventions: `final_admin.jsx` (`Modal`, `Toggle`, `Field`, `PasswordStrength`, `adm-tbl`, `adm-pill`, `adm-field`), `final_login.jsx` (`lg-field`, `lg-modal`, `PasswordStrength`, 19 raw icon spans), `final_form.jsx` (`FF_Field`, `ff-seg`), `final_services.jsx` (`fs-pill`/`fs-search`, `hub-pass`), `final_branches.jsx` (`fb-kpi`, `fb-search`, `fb-card`), `final_cases.jsx` (`fc-chip`, `fc-timeline`).
