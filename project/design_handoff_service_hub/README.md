# Handoff: Service Hub — usability + UX fixes → `Xboxiq/tadfuq-khayr`

## Overview

This package contains improvements made to the **Tadfuq Al-Khayr** officer
console (the Arabic-first / RTL electricity service hub) during a design +
UX pass. The work was done on copies of the production files from
`Xboxiq/tadfuq-khayr`, so this is a **merge-back**, not a greenfield build.

The goal in Claude Code: take these files into the real repo, reconcile them
with the latest `main`, and ship. Everything here already uses the repo's own
conventions (`--f-*` tokens, Babel-in-browser `window.*` component globals,
the `final_*` file naming), so integration is mostly **drop-in + wire-up**.

## About the design files

These are **working implementations in the repo's own stack** (React via
in-browser Babel, plain CSS on the `--f-*` token system), not throwaway HTML
mockups. They run as-is in `ui_kits/service-hub/index.html`. Treat them as the
new source for the files they replace — but **diff against current `main`
first**, since the repo may have moved since these copies were taken
(snapshot ref: `2c9a5cc0c098`).

## Fidelity

**High-fidelity / production-intended.** Final colors, typography, spacing,
motion, and behavior. The design stays 100% within the existing brand system
(warm `#fafaf7` canvas, Geist / Readex Pro / Alexandria, jewel-calm OKLCH
department colors). No new visual language was introduced.

---

## What changed — file by file

### 🆕 New files (add to `ui_kits/service-hub/` or repo root for `final_*`)

| File | Purpose |
|---|---|
| `new_files/final_primitives.jsx` | **Core fix.** Defines components the app referenced but never loaded: `ErrorBoundary`, `ToastProvider` + `useToast`, `ConfirmDialog`, `ValidationSummary`, `FieldError`, `EmptyState`, and the `Validate` / `validateForm` helpers. All exported to `window.*`. |
| `new_files/final_primitives.css` | Styles for the above — toasts, confirm dialog, validation summary, error boundary, empty state, **and the new form wizard** (stepper, sticky nav, review list, submit result panels). |
| `new_files/final_taste.css` | Additive “taste layer” — editorial section numbering, tabular numerals, light-catching depth, refined hover/motion, **notifications popover styles (#3)**, and **topbar density rules (#6)**. Scoped under `.f-body.taste` so it is fully reversible (drop the `taste` class to disable). |

### ✏️ Changed files (replace after diffing)

| File | What changed |
|---|---|
| `changed_files/final_form.jsx` | **Rewritten into a stepped wizard** — see "Form" below. Real-time (blur) validation, required markers, per-step gating, submit → submitting → success/error states, review step. |
| `changed_files/final_print.jsx` | `OfficialPaper` now renders the **schema-driven HTML paper** (`OriginalPaper`) as the reliable preview + `window.print()` source; the filled `.docx` became an optional progressive enhancement (it 403s when the repo/templates aren't reachable). No more error-state when the binary is unavailable. |
| `changed_files/final_print.css` | Print rules for the HTML paper inside `.of-docx-host`; `.of-fidelity` badge. |
| `changed_files/final_spotlight.jsx` | Command palette hardening: **global Escape** (works without input focus) + **focus trap** + the `esc` pill is now a real close `<button>`. |
| `changed_files/final.jsx` | Added `NotificationsBell` (real popover + empty state, #3); wrapped the app root in `window.ErrorBoundary`; removed the dev-only floating “compare designs” button (#4). ⌘K wiring was already present. |
| `changed_files/data.js` | `fmt` switched to `Intl.NumberFormat('ar-IQ-u-nu-latn')` so **all numerals are Western** (was mixing Eastern-Arabic and Western, #4). |

> ⚠️ **`final.jsx` and `data.js` are large, central files.** Do not blind-copy.
> Apply the specific changes listed above onto current `main` (they're small
> and localized): `NotificationsBell` + its topbar mount, the `ErrorBoundary`
> wrap at `ReactDOM.createRoot`, the compare-button removal, and the one-line
> `fmt` locale change.

---

## Load order (critical)

`final_primitives.jsx` **must load before** any page component that uses its
globals (`final_form.jsx`, `final.jsx`, …). In `index.html` it is loaded right
after the React/Babel tags and before `final_globals.jsx`. Also add the two new
stylesheets:

```html
<link rel="stylesheet" href="./final_primitives.css" />
<link rel="stylesheet" href="./final_taste.css" />   <!-- last; reversible via .f-body.taste -->
...
<script type="text/babel" data-presets="react" src="./final_primitives.jsx"></script>
<!-- then final_globals.jsx, final_form.jsx, final.jsx, etc. -->
```

The app root must be wrapped:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <window.ErrorBoundary>
    <window.ToastProvider><App /></window.ToastProvider>
  </window.ErrorBoundary>
);
```

---

## The Form (the headline change)

**Before:** one long scroll; submit silently threw because `FieldError`,
`Validate`, and `validateForm` were undefined → the whole app white-screened on
every service form.

**After — a stepped wizard (`FormPage` in `final_form.jsx`):**

- **Steps:** one per schema section + a final **review** step. Progress stepper
  is clickable for visited steps; numbers turn into checks when a step validates.
- **Real-time validation:** on **blur** per field (`validateField`), with errors
  cleared as the user corrects. Rules: `Validate.required`, `Validate.phoneIQ`
  (`07XXXXXXXXX` / `+9647XXXXXXXXX`), `Validate.digits` for national-ID / numeric.
- **Required markers:** red `*` on required fields (`REQUIRED_KEYS` =
  `name, phone, nid, subId`, plus any `f.required`). `aria-required`,
  `aria-invalid`, `aria-describedby` all wired.
- **Autofill / keyboard friendly:** `ffA11y()` sets `autocomplete`
  (name/tel/email), `inputmode` (numeric/tel), `type`, and `enterkeyhint` per
  field key.
- **Step gating:** “التالي” (Next) runs `validateStep`; if invalid it blocks,
  shows a toast, and scrolls to the first error. “تقديم الطلب” (Submit) validates
  **all** steps, jumps to the first bad one if needed.
- **Submit states:** `idle → submitting` (spinner button) `→ success | error`.
  Success screen shows a generated reference id (`TQ-YYYY-NNNNN`), expected SLA,
  branch, and three actions (print / track cases / new request). Error screen
  offers retry. `submitRequest()` is a stubbed promise — **replace with the real
  API call** in the codebase.
- **Sticky nav** (prev / progress bar / next-or-submit) and a **sticky fee
  panel** that live-computes fees from the schema.

### State variables (FormPage)
`tab` ('pro'|'orig'), `form` (+ localStorage autosave), `errors`, `showErrors`,
`step`, `visited`, `submitState` ('idle'|'submitting'|'success'|'error'),
`submitMsg`, `refId`, `attachments`, `docFiles`, `confirmReset`.

---

## UX audit fixes included

| # | Issue | Fix |
|---|---|---|
| 1 | Official-form tab errored (docx 403) | Render HTML paper reliably; docx = optional enhancement |
| 2 | Command palette: weak close / no focus trap | Global Esc + focus trap + clickable `esc` |
| 3 | Notifications bell was dead | Real popover, seeded items, “mark all read” → empty state |
| 4 | Mixed Eastern/Western numerals; dev compare button | Unified to Western via `fmt`; removed compare button |
| 5 | Account-lockout feedback | Already present in `final_login.jsx` — no change needed |
| 6 | Topbar cramped ≤1100px | Search shrinks, team pill → avatar, log button hidden |

Earlier rounds (already part of these files): the form crash fix (#1 of the
first audit), the `ErrorBoundary`, and toast feedback on submit.

---

## Design tokens (unchanged — for reference)

Full system is in `reference/DESIGN.md`. Key values:

```
Canvas #fafaf7 · Surface #ffffff · Ink #161513
Primary navy #1e2a4d · Gold #b8861b (accent only) · Crimson #8f1d28
OK #3a7a55 · Warn #b87918 · Err #b03a3a
Departments (fixed, OKLCH): CS cobalt · CT bronze · CB teal · CA rosewood
Fonts: Alexandria (display) · Readex Pro (Arabic) · Geist (Latin) · Geist Mono
Radii 8/12/16/20/26 · warm-tinted shadows · spring cubic-bezier(.32,.72,0,1)
```

## Assets

No new binary assets. Icons are **Material Symbols Outlined** (loaded from
Google Fonts in `index.html`) plus the repo's existing custom `tdq-*` SVG set
(`ds_icons.js`). The brand mark is the existing `assets/logo.png`.

## Verification done here

Walked the full path live in-browser: login → force-password-change →
dashboard → services → **service form wizard** (blur validation, step gating,
all 5 steps) → submit → success screen (`TQ-2026-…`). Notifications popover,
command-palette Esc/⌘K, and the official-form HTML paper all confirmed working.

`submitRequest()`, the docx template fetch, and the print server are **stubs /
external** — wire them to the real backend in the codebase.

## Files in this bundle

```
new_files/        final_primitives.jsx, final_primitives.css, final_taste.css
changed_files/    final_form.jsx, final_print.jsx, final_print.css,
                  final_spotlight.jsx, final.jsx, data.js
reference/        index.html (load order + wiring), DESIGN.md (full token system)
```
