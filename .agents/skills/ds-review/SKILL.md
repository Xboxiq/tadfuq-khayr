---
name: ds-review
description: Mechanical PR review for Tadfuq Al-Khayr UI — enforce window.DS routing, enterprise token discipline (.e-/var(--...)), a11y, states, and quiet motion.
---

# DS Review

Run this on any PR that adds or changes UI. The rule under review: **all UI routes through `window.DS`**, styled only by enterprise tokens (`ds-enterprise/tokens.css`, prefix `.e-`). No hand-rolled one-offs, no raw `f-*` legacy classes, no inline hex/px that bypass tokens.

Review in order. Each item is PASS or FAIL. Any FAIL = CHANGES REQUESTED.

## 1. No-bypass
- [ ] No raw legacy classes: zero `className="f-..."` / `class="f-..."` / template-literal `f-*` in changed files.
- [ ] No ad-hoc primitives: no bare `<button>`, `<input>`, `<select>`, `<textarea>`, `<table>`, `<dialog>` rendering UI — use `DS.Button`, `DS.Input`, `DS.Select`, `DS.Textarea`, `DS.Table`, `DS.Modal`.
- [ ] No duplicated one-offs: a new component that re-implements an existing DS primitive (card, badge, menu, modal, KPI, empty/skeleton) must be deleted and replaced by the DS component.
- [ ] New shared UI lands in the DS library and is exported on `window.DS` — not defined inline in a screen file.

## 2. Token discipline
- [ ] No inline colors: no `#hex`, `rgb(`, `rgba(`, `hsl(` literals in JSX `style=` or CSS. Use `var(--...)` (e.g. `--accent`, `--text`, `--surface`, `--border`).
- [ ] No magic numbers: spacing uses `var(--sp-*)`, radius `var(--r-*)`, shadow `var(--shadow-*)`, type `var(--fs-*)`. No raw `px`/`rem` for these.
- [ ] One accent only: actions/links/active use `var(--accent)` family (`--accent`, `--accent-hover`, `--accent-soft`). No second brand color as an accent.
- [ ] Department colors (`--dept-cs/ct/cb/ca` + `-bg`) and state colors (`--ok/warn/err/info` + `-bg`/`-bd`) appear only as small tags, dots, badges — never as large fills or backgrounds of cards/panels.
- [ ] No gradients, glass, glow, aurora. Flat surfaces, 1px borders, `--shadow-*` only.

## 3. Component API consistency
- [ ] Variants via props, not class soup: `<DS.Button variant="primary" size="sm">` — not `className="primary sm block"`.
- [ ] Inputs are controlled: `value` + `onChange` (or documented uncontrolled). No reading from the DOM.
- [ ] Labels above inputs, errors below; every field has an associated `DS.Label`/`htmlFor`.
- [ ] Keyboard + focus: interactive elements are focusable and show `:focus-visible` ring (`--focus-ring`).
- [ ] ARIA: modals (`role="dialog"` + `aria-modal` + focus trap + Esc), menus (`role="menu"`, `aria-haspopup`, `aria-expanded`), icon-only buttons have `aria-label`.
- [ ] RTL-safe: use logical properties (`margin-inline`, `inset-inline`, `padding-inline`) — no hard-coded `left`/`right`. Renders correctly under `dir="rtl"`.

## 4. States (no happy-path-only)
Every interactive surface that loads or submits data must implement all of:
- [ ] **Loading** — `DS.Spinner` / `DS.Skeleton` (`.e-skel`/`.e-spinner`), not a frozen blank.
- [ ] **Empty** — `DS.Empty` (`.e-empty`) with a clear message.
- [ ] **Error** — `DS.Alert` (`.e-alert`) / invalid field state (`.is-invalid`), recoverable.
- [ ] Happy path (data) — present and correct.

## 5. Motion
- [ ] Animate `transform`/`opacity` only — no animating `width`/`height`/`top`/`left`/`color`.
- [ ] Duration in token range (`--dur-fast` 120ms … `--dur-slow` 260ms), eased with `--ease`/`--ease-out`.
- [ ] `@media (prefers-reduced-motion: reduce)` honored (transitions disabled/shortened).

## Detection commands

Run from repo root. Treat any hit in changed files as a finding.

```bash
# 1. Raw legacy f- classes (className / class / template literals)
rg -n "className=\"f-|class=\"f-|\`[^\`]*\bf-[a-z]" --glob '*.{js,jsx,html}'

# 2. Bare HTML primitives that should be DS components
rg -n "<(button|input|select|textarea|dialog|table)\b" --glob '*.{js,jsx}'

# 3. Inline hex / rgb / hsl colors (JSX style + CSS), excluding tokens.css
rg -n "#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(" --glob '*.{js,jsx,css}' -g '!**/tokens.css'

# 4. style= with raw px (magic numbers bypassing tokens)
rg -n "style=\{\{[^}]*[0-9]+(px|rem)" --glob '*.{js,jsx}'

# 5. Raw px/rem in CSS for spacing/radius/shadow (review hits; tokens use var())
rg -n "(margin|padding|gap|border-radius|box-shadow)\s*:\s*[^v;]*[0-9]+(px|rem)" --glob '*.css' -g '!**/tokens.css'

# 6. Hard-coded physical sides (RTL risk)
rg -n "\b(left|right)\s*:" --glob '*.css' -g '!**/tokens.css'

# 7. Reduced-motion present where transitions/animations are added
rg -n "prefers-reduced-motion" --glob '*.css'

# 8. Confirm UI routes through window.DS (expect matches in changed UI)
rg -n "window\.DS|DS\.[A-Z]" --glob '*.{js,jsx}'
```

`rg` not available: replace with `grep -rnE "<pattern>" --include='*.jsx' .`

## Verdict format

End every review with one block:

```
VERDICT: PASS | CHANGES REQUESTED
Section: <1 No-bypass | 2 Tokens | 3 API | 4 States | 5 Motion>
- <file:line> — <what violates the rule> — <required fix>
```

PASS only when sections 1–5 are all clear. Otherwise CHANGES REQUESTED with one bullet per finding.

### Example

```
VERDICT: CHANGES REQUESTED
1 No-bypass:
- final_cases.jsx:43 — `<button className="f-btn f-btn--primary">` — replace with `<DS.Button variant="primary">`.
2 Tokens:
- final_form.jsx:485 — inline `style={{ gap:14 }}` — use `var(--sp-4)` via DS layout prop.
4 States:
- CasesTable — no empty/error state, only renders rows — add `DS.Empty` + `DS.Alert`.
```
