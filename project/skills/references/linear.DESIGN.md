# Linear Design System Reference

> Source: VoltAgent/awesome-design-md — `design-md/linear.app/DESIGN.md`
> Use when drawing inspiration from Linear's dark, precision-engineering aesthetic.

---

## 1. Visual Theme & Atmosphere

Software-craft documentation: "dense, technical, and quietly luxurious." Dark-mode primary. Product UI screenshots dominate pages — marketing interface becomes a dark frame for the application. No decoration, no gradients, no atmospheric effects.

**Mood words:** Precision · Technical · Luxurious · Dense · Dark · Focused

---

## 2. Color Palette

| Token | Value | Role |
|---|---|---|
| Canvas | `#010102` | Deepest dark — page background |
| Surface 0 | `#010102` | Same as canvas |
| Surface 1 | `#0f1011` | Product/card background |
| Surface 2 | `#131415` | Hover lift state |
| Border | `#1e2024` | Hairline 1px borders |
| Text Primary | `#f7f8f8` | All headings and body on dark |
| Text Secondary | `#9b9ea3` | Meta, captions |
| Text Tertiary | `#6b6e76` | Disabled, hints |
| Accent / Brand | `#5e6ad2` | Lavender-blue — THE only chromatic color |
| Error | `#e57373` | |
| Success | `#5db07b` | |

**Rules:**
- **One chromatic accent** (lavender `#5e6ad2`) — appears only on: brand mark, focus rings, primary CTAs. Never decoratively.
- No second chromatic accent — ever
- No atmospheric gradients or spotlight effects
- Depth comes from the four-step surface hierarchy, not from color variety

---

## 3. Typography

| Scale | Size | Weight | Tracking |
|---|---|---|---|
| Display | 80px | 600–700 | **−3.0px** |
| Hero | 56px | 600 | −2.0px |
| Title L | 40px | 600 | −1.5px |
| Title M | 28px | 500–600 | −0.5px |
| Heading | 20px | 500 | −0.2px |
| Body | 15px | 400 | 0 |
| Small | 13px | 400 | 0 |
| Mono / Label | 12px | 500 | +0.08em |

**Key rules:**
- Display tracking scales inversely with size — **aggressive at large, none at body**
- Custom display and text families function as "one continuous voice"
- Mono for all technical labels, keys, shortcut indicators

---

## 4. Component Styling

### Navigation
- Full-width dark bar, `background: rgba(1,1,2,0.85)` + `backdrop-filter: blur(12px)`
- Lavender accent ONLY on the logo mark and CTA
- Nav links: 14px, `#f7f8f8`, 400 weight, no underline

### Buttons
- **Primary:** lavender fill (`#5e6ad2`), white label, 8px vertical / 14px horizontal, `border-radius: 6px`
- **Secondary:** `surface-1` background, 1px border (`#1e2024`), light label
- **Tertiary:** flat on canvas, text-only, lavender label

### Cards
- Background: `surface-1` (`#0f1011`)
- Corner radius: **12px**
- Border: `1px solid #1e2024` (hairline)
- Hover: lift to `surface-2` (`#131415`)
- No external drop shadow — depth is internal (color tier)

### Product UI Panels
- Background: `#0f1011` (charcoal, not pure black)
- Screenshots composited with minimal chrome
- Prefer showing real product UI over illustrations

---

## 5. Layout Principles

- Content max-width: 1100–1200px
- Section padding: 80–96px vertical (desktop), 48px (mobile)
- Grids: 2/3-column asymmetric — content-heavy left, product right
- Product screenshots take ≥ 60% of visible area

---

## 6. Depth & Elevation

Four-step surface hierarchy replaces traditional shadows:
1. `#010102` — canvas / lowest
2. `#0f1011` — cards / default elevated
3. `#131415` — hover lift
4. `#1a1b1d` — modal / highest

**No external box-shadows.** All depth is color-tier based.

---

## 7. Do's and Don'ts

**Do:**
- Use the four-surface hierarchy for depth
- Keep the lavender accent strictly for CTAs and brand marks
- Show real product UI screenshots as the hero element
- Use aggressive negative tracking at display sizes
- Use hairline 1px borders (`#1e2024`) for subtle card edges

**Don't:**
- Add a second chromatic color
- Use gradients (atmospheric, decorative, or transitional)
- Add external box-shadows to cards
- Use spotlight/glow effects
- Use display text without tight negative tracking

---

## 8. Agent Prompt Guide

```
Quick color reference:
  Canvas: #010102
  Surfaces: #0f1011 / #131415 / #1a1b1d
  Text: #f7f8f8 / #9b9ea3 / #6b6e76
  Accent: #5e6ad2 (ONE color, sparingly)

Key phrases:
  "Linear dark precision"
  "four-step surface hierarchy, no shadows"
  "aggressive negative tracking on display"
  "single lavender accent, sparingly"
  "product UI as the hero, UI as dark frame"
  "hairline 1px borders on cards"
```
