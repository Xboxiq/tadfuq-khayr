# Vercel Design System Reference

> Source: VoltAgent/awesome-design-md — `design-md/vercel/DESIGN.md`
> Use when drawing inspiration from Vercel's developer-platform minimalist aesthetic.

---

## 1. Visual Theme & Atmosphere

"A stark black-and-ink duet on near-white canvas, broken at hero scale by a multi-color mesh gradient." Engineer-focused minimalism. Geist typeface as the total voice. The mesh gradient is the *only* decoration — it appears once at hero scale, never miniaturized.

**Mood words:** Stark · Minimal · Technical · Confident · Black+White · Engineered

---

## 2. Color Palette

| Token | Value | Role |
|---|---|---|
| Canvas | `#ffffff` | White — page background |
| Canvas Soft | `#fafafa` | Near-white, slightly warmer |
| Canvas Soft 2 | `#f2f2f2` | Section divider tint |
| Ink | `#000000` | Primary text + CTA fill |
| Ink Soft | `#171717` | Near-black body text |
| Ink Secondary | `#888888` | Meta, captions |
| Cyan | `#50e3c2` | Gradient pair 1 (hero only) |
| Violet | `#7928ca` | Gradient pair 2 (hero only) |
| Highlight Pink | `#ff0080` | Gradient pair 3 (hero only) |
| Success | `#0070f3` | Also link/active |
| Error | `#ff0000` | |
| Warning | `#f5a623` | |

**Gradient mesh (hero only):**
```css
background: linear-gradient(135deg, #50e3c2, #7928ca, #ff0080, #0070f3);
```
Never use this at card or component scale. Never use individual gradient colors as accents.

**Rules:**
- Near-black + white is the entire color system for UI
- Gradient is ONE decorative element, hero scale only
- No chromatic accents in navigation, cards, or components
- Brand accents (cyan, violet, pink) appear only inside the gradient mesh

---

## 3. Typography

**Typefaces:** Geist (narrative/display) + Geist Mono (labels/code/technical)

| Scale | Size | Weight | Tracking |
|---|---|---|---|
| Display 2XL | 72px | 700 | **−2.4px** |
| Display XL | 56px | 700 | −2.0px |
| Display L | 40px | 700 | −1.5px |
| Title | 28px | 600 | −0.8px |
| Heading | 20px | 600 | −0.3px |
| Body | 16px | 400 | 0 |
| Small | 14px | 400 | 0 |
| Mono Label | 13px | 500 | +0.04em (Geist Mono) |
| Micro | 11px | 500 | +0.08em |

**Key rules:**
- Geist carries all narrative and display text
- Geist Mono carries all technical identifiers, timestamps, shortcut keys, version numbers
- Aggressive negative tracking at display — creates the distinctly "engineered voice"

---

## 4. Component Styling

### Navigation
- `background: rgba(255,255,255,0.8)` + `backdrop-filter: blur(12px)` (sticky)
- Simple: logo left, links center, CTA right
- CTA: black fill, white label, pill shape, 14px Geist 500

### Buttons
- **Primary (Marketing):** black fill, white label, 8px vertical / 20px horizontal, `border-radius: 8px`
- **Secondary:** white fill, 1px black border, black label
- **Ghost/Nav:** no background, black text, appears on hover

### Cards (5 types)
- **Marketing card:** `#fafafa` background, `1px solid #eaeaea` border, 12px radius
- **Soft card:** `rgba(0,0,0,0.04)` background, no border
- **Template card:** white, external drop shadow (stacked small shadows), 8px radius
- **Pricing card:** white, 1px border; featured: black fill, white text
- **Showcase band:** alternating dark/light full sections

### Shadow Ladder (5 levels, stacked small offsets)
```css
--shadow-1: 0 1px 2px rgba(0,0,0,0.08);
--shadow-2: 0 2px 4px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04);
--shadow-3: 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04);
--shadow-4: 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04);
--shadow-5: 0 16px 32px rgba(0,0,0,0.10), 0 32px 64px rgba(0,0,0,0.06);
```
**Never single heavy drops.** Always stacked small offsets + inset hairline border.

---

## 5. Layout Principles

- Max content width: 1200px
- Section padding: 96px vertical (desktop), 48px (mobile)
- 5 breakpoints: 375 / 640 / 768 / 1024 / 1440px
- Grid: 12-column at desktop; fluid at mobile
- Grids and imagery maintain proportions fluidly — no hard reframe at breakpoints

---

## 6. Depth & Elevation

- Five-level shadow ladder (stacked small offsets, not single drops)
- Plus inset hairline borders: `box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06)`
- Cards sit slightly above canvas via shadow level 2–3
- Modals at level 5
- No color-based elevation (contrast tiles for sections, not elevation)

---

## 7. Do's and Don'ts

**Do:**
- Use stacked small shadows for depth (never single heavy drops)
- Reserve the mesh gradient for hero scale ONLY
- Use Geist Mono for every technical identifier
- Keep the palette to near-white + near-black + gradient colors strictly in the gradient
- Use aggressive negative tracking at display sizes

**Don't:**
- Use the gradient colors (cyan, violet, pink) as standalone accents
- Add color to navigation or component elements beyond black/white
- Miniaturize the mesh gradient to card scale
- Use border-radius > 12px on marketing cards (pills are for CTAs only)
- Mix Geist with any other Latin typeface

---

## 8. Agent Prompt Guide

```
Quick color reference:
  Canvas: #ffffff / #fafafa
  Text: #000000 / #171717 / #888888
  Accent: NONE (black/white only in components)
  Gradient: #50e3c2 + #7928ca + #ff0080 (hero only)

Key phrases:
  "Vercel developer-platform minimal"
  "stark black-and-white, no chromatic accents in UI"
  "mesh gradient hero only, never at component scale"
  "Geist + Geist Mono as the total voice"
  "stacked small shadow offsets, never single heavy drop"
  "engineered negative tracking at display size"
```
