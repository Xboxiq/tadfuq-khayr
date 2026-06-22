# Notion Design System Reference

> Source: VoltAgent/awesome-design-md — `design-md/notion/DESIGN.md`
> Use when drawing inspiration from Notion's illustration-rich, confident workspace brand.

---

## 1. Visual Theme & Atmosphere

"The all-in-one workspace through a confident, illustration-rich brand voice." Deep navy hero with decorative sticky-note elements and mesh wire illustrations. The signature purple CTA is the visual anchor. Pastel card tints create warmth without noise.

**Mood words:** Confident · Warm · Illustration-rich · Structured · Inviting · Friendly

---

## 2. Color Palette

| Token | Value | Role |
|---|---|---|
| Navy Hero | `#191919` or `#1e1e2e` | Hero section background |
| Canvas | `#ffffff` | Main page background |
| Purple CTA | `#6940f2` (approx) | **The signature primary CTA** |
| Purple Dark | `#4d30b5` | Hover state of CTA |
| Text Ink | `#1e1e1e` | Primary text |
| Text Secondary | `#9b9b9b` | Meta, captions |
| Peach | `#ffcaaa` | Pastel card tint |
| Rose | `#ffa3af` | Pastel card tint |
| Mint | `#aef0d1` | Pastel card tint |
| Lavender | `#c4b3ff` | Pastel card tint |
| Sky | `#b6d8ff` | Pastel card tint |
| Yellow | `#ffe785` | Pastel highlight card (high emphasis) |
| Cream | `#fff9e6` | Pastel card tint |

**Rules:**
- Purple CTA is the one filled action color; never replace with blue/red
- Pastel tints are for cards only, never backgrounds or text
- Yellow reserved for HIGH-emphasis content sections
- Navy only in the hero band, not in the content body

---

## 3. Typography

**Typeface:** Notion Sans (Inter-based custom cut) — the exclusive typeface

| Scale | Size | Weight | Tracking |
|---|---|---|---|
| Hero Display | 80px | 700 | −0.04em |
| Display L | 64px | 700 | −0.03em |
| Display M | 48px | 700 | −0.02em |
| Title L | 36px | 600 | −0.01em |
| Title M | 28px | 600 | 0 |
| Heading | 20px | 600 | 0 |
| Body | 16px | 400 | 0 |
| Small | 14px | 400 | 0 |
| Button | **14px** | **500** | 0 |
| Micro Label | 11px | 500 | +0.06em uppercase |

**Key rules:**
- Hero type scales from 36px (mobile) to 80px (desktop)
- Negative tracking only at display sizes
- Button labels: 14px / 500 weight (intentionally lighter than headings)
- ALL-CAPS micro labels at 11px + +0.06em tracking

---

## 4. Component Styling

### Buttons
- **Primary:** purple fill, white label, **8px rounded rectangles** (NOT pills)
- **Dark:** black fill, white label
- **Secondary:** outlined, purple border + label
- **Ghost:** no border, purple text
- **Link:** no background, no border, purple text, underline on hover
- Corner radius: **8px** (never pill, never more than 12px)

### Cards
- Default: white fill, `1px solid #e5e5e5`, **12px radius**
- Tinted: pastel fill (peach/rose/mint/lavender/sky/cream), no border
- High-emphasis: yellow fill, no border
- Featured/pricing: purple border `2px solid #6940f2`
- Shadow: level 1–2 only (subtle)

### Navigation
- White sticky bar, `1px solid #e5e5e5` bottom border, 16px vertical padding
- Logo left, links center, sign-in + CTA right
- No backdrop-filter on nav (stays white)

### Pricing (4 columns)
- Horizontal 4-tier layout on desktop → single column on mobile
- Featured tier: purple border, purple CTA
- Dense feature comparison table below pricing cards

---

## 5. Layout Principles

- Max-width: 1280px
- Section padding: 64–96px vertical (desktop), 32–48px (mobile)
- 8px base grid
- Breakpoints: 480 / 768 / 1024 / 1280px
- Hero: full-bleed navy background, content centered at 960px

---

## 6. Depth & Elevation (4 Levels)

| Level | Token | Use |
|---|---|---|
| 0 | none | Flat on canvas |
| 1 | `0 1px 4px rgba(0,0,0,0.08)` | Default cards |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | Hovered cards |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | Workspace mockup |
| 4 | `0 16px 48px rgba(0,0,0,0.16)` | Modal |

---

## 7. Do's and Don'ts

**Do:**
- Use the purple CTA consistently as the ONE filled action
- Use pastel card tints for feature cards (variety without noise)
- Reserve yellow for the single highest-emphasis section
- Use illustrations and decorative sticky elements in the hero
- Keep 8px corner radius on buttons (NOT pills)

**Don't:**
- Use pills for buttons (Notion uses rectangles, 8px radius)
- Use the pastel tints as backgrounds for full sections
- Add purple to non-action UI elements
- Use any typeface other than Notion Sans / Inter
- Use decorative gradients (not in Notion's vocabulary)

---

## 8. Agent Prompt Guide

```
Quick color reference:
  Canvas: #ffffff
  Hero: #191919 (navy)
  CTA: #6940f2 (purple — primary only)
  Pastels: peach/rose/mint/lavender/sky/yellow/cream (cards only)
  Text: #1e1e1e / #9b9b9b

Key phrases:
  "Notion workspace confidence"
  "illustration-rich hero, decorative stickies"
  "purple primary CTA, 8px radius (not pills)"
  "pastel card tints for feature variety"
  "Inter/Notion Sans, 14px/500 buttons"
  "4-column pricing, featured with purple border"
```
