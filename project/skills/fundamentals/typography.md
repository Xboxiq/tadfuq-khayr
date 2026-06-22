# Typography Principles — Reasoning Layer

> Source: TypeUI / bergside/typeui — `skills/fundamentals/typography-principles.md`
> Six pillars: foundations, hierarchy & scale, readability, accessibility, responsive, brand & tone.

---

## 0. Non-Negotiables (Apply Always)

- Body text minimum: **16px** primary, **14px** support. Sub-14px only for badges and micro-components.
- Display headings: `line-height: 1` to `1.15` and `margin-bottom: 32px` before body paragraph.
- Button labels: **never underlined** in any state (underline = link in human mental models).
- Mobile baseline: design for **360px** width; never assume larger.
- Pick one modular ratio per project; never mix type scales.
- **Accessibility over aesthetics:** if a font size, color, or weight fails WCAG, fix the type, not the rule.

---

## 1. Foundations

### Typeface Selection

| Role | Properties | When |
|---|---|---|
| Display / hero | High contrast, distinctive | Headings ≥32px |
| Body / prose | High x-height, open apertures | Paragraphs, forms, UI |
| Mono | Fixed-width, clear `0/O/l/1` | Code, IDs, numbers |
| Arabic / RTL | Designed for Arabic, not transliterated | Any Arabic content |

### Loading Strategy

- Declare `font-display: swap` on all `@font-face` — never `block` beyond 100ms.
- Preconnect to font CDN: `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`.
- Self-host critical weights (400, 500, 700) for performance.
- Subset Arabic fonts to the Unicode range you actually use.

### Weight Ladder

Standard ladder: 300 / 400 / 500 / 600 / 700 / 800. Skip 500 for an "Apple-tight" feel. Never use more than three weights on one surface.

---

## 2. Hierarchy & Scale

### Modular Scale (pick one ratio)

| Ratio | Name | Use |
|---|---|---|
| 1.067 | Minor second | Dense UI, data-heavy |
| 1.125 | Major second | Body-forward, editorial |
| 1.250 | Major third | Marketing, landing pages |
| 1.333 | Perfect fourth | Display-forward hero |
| 1.414 | Augmented fourth | Large-format, poster |

### Semantic Heading Roles

| Level | Visual role | Typical size |
|---|---|---|
| `h1` / display | Page identity, hero | 48–80px |
| `h2` / title | Section start | 28–40px |
| `h3` / subtitle | Sub-section | 20–28px |
| `h4` / label-header | Card title, group label | 16–20px |
| Body | Prose, list items | 15–17px |
| Caption | Supporting metadata | 12–14px |
| Micro | Badge, tag | 10–12px |

**Always match HTML heading level to semantic meaning, not visual size.** Use CSS to control visual size independently.

---

## 3. Readability & Legibility

### Line Length (Measure)

- 45–75 characters per line for comfortable reading.
- Use `max-width: 65ch` on prose containers.
- Wider columns (80–100ch) are acceptable for data tables and code.
- Never full-width prose on screens ≥1200px.

### Line Height

- Display (≥40px): `1.0–1.15`
- Title (24–40px): `1.15–1.35`
- Body (15–20px): `1.5–1.7`
- Caption (≤14px): `1.4–1.6` (smaller size needs relatively more leading)

### Letter Spacing

| Size | Tracking |
|---|---|
| ≥60px display | −0.04em to −0.06em |
| 40–60px | −0.02em to −0.04em |
| 28–40px | −0.01em to −0.02em |
| 16–28px | 0 to −0.01em |
| ≤14px (label) | 0 to +0.04em |
| ALL CAPS label | +0.06em to +0.12em |

**Never add positive tracking to body text.** Positive tracking belongs only on small ALL-CAPS labels.

### Arabic Typography

- Arabic fonts render at a slightly larger optical size — reduce `font-size` by ~1–2px compared to Latin equivalent.
- Line height for Arabic: add ~10–15% more than Latin equivalent (ascenders/descenders need room).
- Kashida (tatweel) for Arabic text justification — never use `text-align: justify` alone.
- Use `font-feature-settings: "kern" 1, "liga" 1, "calt" 1` for Arabic opentype features.

---

## 4. Accessibility

- WCAG AA: normal text ≥ 4.5:1 contrast; large text (≥24px / bold ≥18.67px) ≥ 3:1.
- WCAG AAA: normal text ≥ 7:1 (target for primary body copy when possible).
- Never use color alone to convey meaning — pair with icon, pattern, or text.
- Test at 200% browser zoom: text must reflow, not overflow or truncate.
- Use `rem`/`em` units — never `px` for font sizes that should scale with user preferences.
- Don't use `user-select: none` on readable content — users copy to paste into translators.

---

## 5. Responsive Typography

### Fluid Type

```css
/* Fluid clamp: min-size at 375px, max-size at 1440px */
font-size: clamp(1rem, 0.5rem + 2vw, 1.25rem);
```

Use `clamp()` for display sizes; use fixed `rem` steps for body.

### Breakpoint Steps

| Viewport | Body | Title | Display |
|---|---|---|---|
| 375px (mobile) | 15–16px | 24px | 32px |
| 768px (tablet) | 16px | 28px | 48px |
| 1024px (desktop) | 16–17px | 32px | 60px |
| 1440px (wide) | 16–17px | 36px | 72–80px |

---

## 6. Brand & Tone

- **Serif = authority, tradition, luxury.** Use for government, law, finance with gravitas.
- **Geometric sans = modern, technical, clean.** Geist, Inter, IBM Plex Sans.
- **Humanist sans = warm, accessible, friendly.** Readex Pro, Rubik, Source Sans.
- **Mono = technical precision, data, code.**
- **Arabic-first:** when RTL is primary, choose the Arabic face first and match Latin to its optical weight and character.
- Emotional voice lives in the display typeface. Body type should be neutral and invisible.
- One display family per brand. Mixing display faces is almost always wrong.

### Pairing Rules

- Pair geometric sans (body) with geometric display — or contrast with a serif display.
- Pair humanist sans with a humanist display — or contrast with a geometric.
- Never pair two serifs, two geometric sans, or two humanists at the same visual weight.
- For Arabic + Latin: pair by optical weight and x-height, not by historical category.
