# Apple Design System Reference

> Source: VoltAgent/awesome-design-md — `design-md/apple/DESIGN.md`
> Use when drawing inspiration from Apple's web design language.

---

## 1. Visual Theme & Atmosphere

Photography-first presentation: "UI recedes so the product can speak." Minimal chrome. Full-bleed tiles alternate between light and dark canvases. Museum gallery feel — each section owns approximately one viewport.

**Mood words:** Restraint · Precision · Silence · Premium · Clean · Confident

---

## 2. Color Palette

| Token | Value | Role |
|---|---|---|
| Canvas Light | `#ffffff` | White tile background |
| Canvas Parchment | `#f5f5f7` | Off-white alternating tile |
| Canvas Dark | `#1d1d1f` | Near-black tile background |
| Canvas Black | `#000000` | Navigation background |
| Text Primary | `#1d1d1f` | All body copy on light |
| Text Secondary | `#6e6e73` | Secondary / meta |
| Action Blue | `#0066cc` | **The only interactive color** |
| System Red | `#ff3b30` | Destructive actions only |

**Rules:**
- ONE interactive color (Action Blue) — no secondary chromatic accents
- No decorative gradients
- All depth from color transitions and backdrop-blur, not from color variety

---

## 3. Typography

**Typefaces:** SF Pro Display + SF Pro Text (system fallback: `-apple-system, BlinkMacSystemFont, 'Helvetica Neue'`)

| Scale | Size | Weight | Tracking |
|---|---|---|---|
| Display XXL | 80px | 600 | −0.025em |
| Display XL | 64px | 600 | −0.020em |
| Display L | 48px | 600 | −0.015em |
| Title | 32px | 600 | −0.010em |
| Headline | 24px | 600 | 0 |
| Body | **17px** (not 16px) | 400 | 0 |
| Callout | 15px | 400 | 0 |
| Caption | 12px | 400 | 0 |

**Key rules:**
- Body copy is 17px, not 16px — this matters for Apple's optical feel
- Weight ladder: 300 / 400 / 600 / 700 — **skip 500**
- Negative letter-spacing at display sizes creates the signature "Apple tight" look
- No positive tracking anywhere except all-caps labels

---

## 4. Component Styling

### Navigation (Sticky Nav)
- Background: `rgba(0,0,0,0.8)` + `backdrop-filter: blur(20px) saturate(180%)`
- Logo: white Apple mark (center on mobile, left on desktop)
- Nav links: 14px, #f5f5f7, 500 weight
- CTA button: pill shape (border-radius: 9999px), Action Blue fill

### Buttons
- **Primary:** pill, Action Blue fill, white label, 8px vertical / 14px horizontal padding
- **Secondary:** pill, transparent, Action Blue outline + label
- **Ghost/Link:** Action Blue text, no background

### Tiles / Cards
- Corner radius: 18–20px on marketing tiles (none on full-bleed sections)
- One drop-shadow level only — reserved for product renders on surface
- Light surface: `#ffffff` or `#f5f5f7`; dark surface: `#1d1d1f` or `#2d2d2f`

### Product Renders
- Floating on white or near-white background
- Single drop shadow: `0 40px 80px rgba(0,0,0,0.12)` — never on text elements

---

## 5. Layout Principles

- Content locks at **1440px max-width**
- 8px base spacing unit
- Section padding: ~80px vertical (desktop), 40–48px (mobile)
- Breakpoints: 1440px / 1068px / 834px / 640px / 419px
- Grid reflows from multi-column → single column at breakpoints

---

## 6. Depth & Elevation

- **One drop shadow in the system** — product renders only
- All other depth via: color tile contrast, `backdrop-filter: blur()`, spacing
- Never stack multiple box-shadows on UI components (only products)

---

## 7. Do's and Don'ts

**Do:**
- Anchor every screen to one hero product image
- Use full-bleed alternating dark/light tiles
- Keep Action Blue as the sole interactive color
- Let whitespace be the primary design element
- Use tight display tracking at large sizes

**Don't:**
- Add decorative gradients or blobs
- Use multiple accent colors
- Use weight 500 (skip from 400 to 600)
- Add heavy borders to cards
- Center long paragraphs of body text

---

## 8. Agent Prompt Guide

```
Quick color reference:
  Canvas: #ffffff / #f5f5f7 / #1d1d1f / #000000
  Text: #1d1d1f / #6e6e73 / #f5f5f7
  Interactive: #0066cc (ONE color only)

Key phrases to use in prompts:
  "Apple-style minimal chrome"
  "photography-first, UI recedes"
  "alternating light/dark full-bleed tiles"
  "SF Pro tight display tracking"
  "single Action Blue interactive color"
  "17px body, weight 400/600 only"
```
