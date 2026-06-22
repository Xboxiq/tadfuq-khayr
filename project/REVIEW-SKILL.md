---
name: tadfuq-al-khayr-design-review
description: Use this skill to REVIEW a screen, component, or pull request against the Tadfuq Al-Khayr design system before it ships. It checks that new UI routes through the library (components/ + ds/tokens) instead of re-rolling one-off markup, that tokens are used instead of literal values, that brand/RTL/a11y/anti-slop rules hold, and it produces a pass/fail report with specific fixes. Invoke it after building or editing any UI in this system, or when auditing existing screens for drift.
user-invocable: true
---

# Design System Review

A gate, not a vibe-check. Run this against any new or changed UI and
produce a written verdict. The job is to catch **drift** — UI that
re-implements something the library already provides, hard-codes a value
that should be a token, or quietly breaks brand / RTL / accessibility /
anti-slop rules.

Read `README.md` (the brand + foundations guide) and `SKILL.md` (the
build skill, incl. the Anti-slop checklist) first — this review enforces
exactly those rules. Run `check_design_system` to get the live inventory
(namespace, components, tokens, cards) you are reviewing against.

## How to run a review

1. **Scope it.** Identify every file the change touches and every screen
   it renders. List the components and tokens it *should* have reused.
2. **Walk the checklist below**, section by section. For each item record
   PASS / FAIL / N/A and, on FAIL, the exact file + line and the fix.
3. **Probe the running UI**, don't just read code: load the page, click
   the real path (login → screen → action), tab through with the keyboard,
   toggle light/dark, resize to 375 / 768 / 1024 / 1440. A review that
   never opened the page is not a review.
4. **Write the verdict** in the format at the bottom. Block on any
   ❌ in "Library routing", "Tokens", or "Accessibility" — those are hard
   gates. Everything else is a tracked follow-up.

## 1. Library routing (HARD GATE)

> New UI must go *through* the library, not around it.

- [ ] Every button is the `Button` component (or `.rs-btn` recipe) — no
      bespoke `<button>` with one-off padding/radius/color.
- [ ] Every surface/panel is `Card` (or `.rs-card`) — not a raw `<div>`
      with a hand-written border + shadow + radius.
- [ ] Inputs use `Input` / `Field` / `SearchInput` / `Textarea`; status
      uses `Tag` / `SaveBadge`; department identity uses `SectionBadge` /
      `Chip section=…`; priority uses `SLATag`; nav uses `Tabs` /
      `Breadcrumbs`. Icons use `Icon` (Material Symbols) or the `tdq-*` set.
- [ ] No component re-implements one that already exists. If a needed
      variant is missing, the fix is to **extend the library component**
      (new prop/variant + its `.d.ts` + `.prompt.md` + card), never to
      fork a copy inline.
- [ ] Consuming HTML mounts via `window.<Namespace>` from `_ds_bundle.js`
      — it does not `<script src>` a `.jsx` directly.

> The faithful product recreation in `ui_kits/service-hub/` (`final_*`)
> is the documented exception: it intentionally mirrors production markup.
> Review it for brand/a11y/anti-slop, NOT for library routing.

## 2. Tokens, not literals (HARD GATE)

- [ ] No raw hex/rgb/oklch in component or screen code — colors come from
      `--brand-*`, `--c-CS|CB|CT|CA`, `--ok|warn|err|info`, `--neutral-*`,
      surface/text tiers. (Exception: the print-form hairlines `--line`.)
- [ ] Spacing is `--s1..s12`; radii are the `--radius-*` ladder; shadows
      are `--elevation-*` / `--shadow-*`; type is the HIG scale
      (`--fs-body`, `--fs-title2`, …) with `--font-cmd|display|mono`.
- [ ] Glass uses the 3-tier system (`--glass-thin|regular|thick` +
      `--glass-blur-*`) — no hand-rolled translucent rgba + blur.
- [ ] A new value that recurs ≥3× is promoted to a token, not copy-pasted.

## 3. Brand & content

- [ ] The four department colors are never substituted or recolored.
- [ ] Gold is accent-only (rims, VIP/SLA), never a body color.
- [ ] Arabic-first, `dir="rtl"`; Latin numerals/codes kept LTR-legible.
- [ ] Copy follows the voice in README (bare imperatives, terse status,
      no `قم بـ`/`يرجى`, no emoji as icons, dinars via `Intl` + `د.ع`).

## 4. Accessibility (HARD GATE)

- [ ] Text contrast ≥ 4.5:1 in BOTH light and dark.
- [ ] Visible focus ring on every interactive element (`--ring*`), never
      the suppressed default with no replacement.
- [ ] Hit targets ≥ 44px on touch surfaces; `cursor: pointer` on clickables.
- [ ] Keyboard path works end-to-end (tab order, Enter/Escape, focus trap
      in dialogs); `aria-*`/labels on icon-only controls.
- [ ] `prefers-reduced-motion` honored at the rule level.

## 5. Responsive & RTL

- [ ] Lays out cleanly at 375 / 768 / 1024 / 1440px — no clipping, no
      horizontal scroll, no overlap.
- [ ] Logical properties (`inset-inline`, `padding-inline`) not L/R;
      chevrons/arrows mirror correctly in RTL.

## 6. Anti-slop (see SKILL.md)

- [ ] No AI purple→pink gradients / rainbow mesh as decoration.
- [ ] Clear hierarchy + a focal point per section; not a flat uniform grid.
- [ ] Purposeful motion only (180–360ms spring, 80ms press); nothing
      bounces or loops decoratively.
- [ ] Real content — no lorem, no filler stats, no icon+number slop.

## 7. Health of the system itself

- [ ] `check_design_system` reports **no issues** and a synced manifest.
- [ ] Every component still has its `.d.ts` + `.prompt.md` + a `@dsCard`
      thumbnail that renders at its declared viewport.
- [ ] No orphaned `.jsx` (missing `.d.ts`), no duplicate component names,
      no card loading a raw `.jsx`.

## Verdict format

```
DESIGN REVIEW — <screen/component> — <date>
Result: PASS | CHANGES REQUESTED | BLOCKED

Hard gates:
  Library routing ... ✅ / ❌  <one line>
  Tokens .......... ✅ / ❌  <one line>
  Accessibility ... ✅ / ❌  <one line>

Findings (file:line → fix):
  1. ❌ <path:line> — <what's wrong> → <specific fix>
  2. ⚠️ <path:line> — <follow-up, non-blocking>
  ...

Verified live:
  - paths clicked, breakpoints checked, light/dark, keyboard

Follow-ups (tracked, non-blocking):
  - ...
```

Block the change on any ❌ in a hard-gate section. Approve only when all
three hard gates pass and every other ❌ is resolved or explicitly
deferred with an owner.
