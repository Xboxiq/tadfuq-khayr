# Stripe Design System Reference

> Source: VoltAgent/awesome-design-md — `design-md/stripe/DESIGN.md`
> Use when drawing inspiration from Stripe's financial-infrastructure premium aesthetic.

---

## 1. Visual Theme & Atmosphere

Financial infrastructure brand with premium editorial feel. The signature gradient mesh (cream, sherbet, lavender, indigo, pink) dominates the upper third of every marketing page. Thin-weight (300) typography is the distinctive brand signature. Tabular figures everywhere numbers appear.

**Mood words:** Premium · Financial · Editorial · Serious · Bold gradient · Thin type

---

## 2. Color Palette

| Token | Value | Role |
|---|---|---|
| Deep Navy | `#0d253d` | Primary text, dark surfaces |
| Electric Indigo | `#533afd` | **Primary CTA — the ONE filled interactive color** |
| Canvas | `#f6f9fc` | Near-white page background |
| Surface | `#ffffff` | Card backgrounds |
| Text Ink | `#0d253d` | Primary text (navy, not black) |
| Text Secondary | `#425466` | Body, secondary |
| Text Tertiary | `#8898aa` | Meta, captions |
| Ruby | `#e5484d` | Error / destructive |
| Magenta | `#e01fb5` | Gradient accent (not standalone) |
| Warm Lemon | `#f7db6a` | Gradient accent (not standalone) |
| Sherbet | `#ffa270` | Gradient accent (not standalone) |
| Success | `#228847` | |

**Gradient mesh (upper-third hero only):**
```css
background: linear-gradient(
  135deg,
  #ffecd2 0%,    /* cream */
  #ffa270 25%,   /* sherbet */
  #c4a9ff 50%,   /* lavender */
  #533afd 75%,   /* indigo */
  #e01fb5 100%   /* ruby pink */
);
```

**Rules:**
- One filled CTA color (Electric Indigo) per marketing band
- Gradient colors (ruby, magenta, lemon, sherbet) appear ONLY inside the gradient mesh — never as standalone accents
- The gradient occupies the upper third; everything below is clean white/near-white

---

## 3. Typography

**Typefaces:** Sohne (Stripe's custom typeface; substitute: `'Inter'` or `'Helvetica Neue'`)

| Scale | Size | Weight | Tracking |
|---|---|---|---|
| Display XXL | 56px | **300** | **−1.4px** |
| Display XL | 48px | 300 | −1.0px |
| Display L | 40px | 300 | −0.8px |
| Title | 32px | 400 | −0.5px |
| Heading | 24px | 500 | −0.3px |
| Body | 17px | 400 | 0 |
| Small | 14px | 400 | 0 |
| Micro-cap | 10px | 500 | +0.12em uppercase |

**Key rules:**
- **Weight 300 at display sizes is the brand signature.** This is distinctive and must be preserved.
- Sohne (or closest substitute) only — avoid geometric sans that looks too clean/Swiss
- Numeric content: `font-variant-numeric: tabular-nums; font-feature-settings: "tnum"` always
- `ss01` stylistic set enabled globally when Sohne is available
- Negative tracking scales inversely with size (same direction as Apple/Linear but at lighter weight)

---

## 4. Component Styling

### Buttons
- **Primary:** Electric Indigo fill (`#533afd`), white label, **pill shape** (`border-radius: 9999px`), 10px vertical / 24px horizontal
- **Secondary:** white fill, 1px border (`#e0e0ef`), navy label
- **Ghost:** transparent, navy label, subtle hover
- Icon in button: always 16px, same color as label

### Cards
- Background: `#ffffff`, subtle border `1px solid #e8ecf0`, `border-radius: 8px`
- Shadow: `0 2px 5px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` (stacked small)
- Dashboard mockup cards: composited product UI with deeper shadow (level 3)
- No border-radius > 12px except pills

### Navigation
- Sticky, `background: rgba(255,255,255,0.95)`, `backdrop-filter: blur(20px)`
- Logo left (indigo wordmark), links center, CTA right (pill button)
- 14px / 400 weight nav links in navy

---

## 5. Layout Principles

- Max content width: 1140px
- Section vertical padding: 80–100px (desktop), 40–60px (mobile)
- Breakpoints: 375 / 600 / 840 / 1080 / 1440px
- Asymmetric grids common: 60/40 text-to-visual splits

---

## 6. Depth & Elevation

| Level | Shadow | Use |
|---|---|---|
| 1 | `0 1px 3px rgba(0,0,0,0.06)` | Default cards |
| 2 | `0 2px 6px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)` | Hovered cards |
| 3 | `0 8px 20px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)` | Product mockups |
| 4 | `0 20px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)` | Modal |

---

## 7. Do's and Don'ts

**Do:**
- Use weight 300 for display headlines (this is the brand signature)
- Apply `tabular-nums` to every piece of numeric content
- Keep Electric Indigo as the ONLY filled interactive color
- Reserve the gradient mesh for the hero/upper-third only
- Use pill buttons for primary CTAs (only CTA shape)
- Use `ss01` for Sohne's distinctive alternates

**Don't:**
- Use gradient colors (sherbet, magenta, lavender) as standalone component accents
- Use a bold (700+) display headline
- Mix pill and rectangular buttons on the same surface
- Apply the mesh gradient below the hero section
- Omit tabular figures on any numerical content

---

## 8. Agent Prompt Guide

```
Quick color reference:
  Canvas: #f6f9fc
  Text: #0d253d / #425466 / #8898aa
  CTA: #533afd (ONE color, pill shape)
  Gradient: sherbet+lavender+indigo+pink (hero third only)

Key phrases:
  "Stripe financial-premium"
  "weight 300 display as brand signature"
  "Electric Indigo pill CTA only"
  "gradient mesh upper third only, not components"
  "tabular-nums on ALL numeric content"
  "stacked small shadows, no single heavy drop"
```
