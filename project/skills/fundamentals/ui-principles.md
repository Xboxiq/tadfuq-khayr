# UI Principles — Reasoning Layer

> Source: TypeUI / bergside/typeui — `skills/fundamentals/ui-principles.md`
> Apply alongside any design system. Design system tokens define *what*; these principles define *why* and *how*.

---

## 0. Agent Operating Rules

1. **Load design system first.** Tokens (colors, type, spacing, radii, shadows) are the source of truth for concrete values. Apply them before these principles.
2. **Use these as the reasoning layer.** When the system says which token to use, these principles explain why it works and what structural rules must hold.
3. **When the system is silent, these principles decide.** Any decision not covered by tokens falls back here.
4. **Never contradict the design system.** Flag conflicts for human review; the design system wins.
5. **Mandatory component rules (always apply):**
   - Badges are inline and content-sized, never fixed-width
   - Inputs need visible contrast on same-hue backgrounds
   - Nested border-radius = `outer - padding` (never same as outer)
   - Input + button in a row must share the same height
   - Icon optical insets must be balanced, not pixel-perfect
   - Native `<select>` needs a custom caret arrow
   - Button labels never wrap to two lines
   - Adjacent buttons must match in height (not necessarily width)
   - Mockups and illustrations must be premium, not clip-art
   - Icons must be real SVGs or an icon font — never emoji

---

## 1. Constraints

- Start with the feature, not the shell. Design within platform conventions.
- If you're designing for a known platform (iOS, Android, web), match its affordance vocabulary first.
- Avoid decoration that serves no informational or interactive purpose.

---

## 2. Hierarchy & Emphasis

**Rules:**
- Size, weight, contrast, spacing, and color each carry hierarchy weight — combine at most two or three per element.
- Squint test: the primary action must be obvious at arm's length with blurred vision.
- Button hierarchy is strict: one primary per screen area, one secondary, optional tertiary. Never two primaries side-by-side.
- Text hierarchy: display → title → body → label → caption must be visually obvious without reading the words.
- Reserve strongest contrast for the most important element; muted contrast for supporting elements.

**Conflict resolution:** If two elements fight for attention, reduce one — never amplify both.

---

## 3. Layout

**Core rules:**
- Don't fill the whole screen. Whitespace is not wasted space; it creates grouping and focus.
- Grids are tools, not rules. Break the grid when content demands it; keep it otherwise.
- Five canonical layouts: single-column (mobile default), two-column (sidebar + content), card grid, bento (varied size), full-bleed hero.
- Hard grids (strict columns) vs soft grids (proximity-based alignment) — choose per content type.
- Spacing rhythm: every tier of spacing should be visually distinct. Minimum three tiers per layout.
- Proximity groups: related elements sit close; unrelated ones sit far. Never use borders as a substitute for spacing.

**The inner-outer rule:** Padding around a group must always exceed spacing within the group.

---

## 4. Typography

- Line length: 45–75 characters for comfortable reading. Use `max-width` or `ch` units.
- Line-height: inverse relationship with font-size. Large display → tight (1.0–1.15); body → loose (1.5–1.7).
- Baseline alignment: when mixing type sizes in a row, align to the text baseline, not the container top.
- Letter-spacing: tighten at display sizes (−0.03em to −0.05em); never loosen at body size.
- Case effects: ALL CAPS is a label, not body text. Use sparingly, never at ≥18px.
- Mobile minimum: 16px for primary body; 14px for support; nothing smaller except badges/micro.
- Form fields: label weight > field value weight (label is the anchor).

---

## 5. Color

- Color hierarchy: strongest/most saturated color for the primary action only.
- Text on a colored background: shift text to a color within the same hue family for warmth.
- WCAG AA minimum: 4.5:1 for text; 3:1 for large text (≥24px / ≥18pt) and UI components.
- Never rely on color alone to convey meaning — pair with icon, label, or pattern.
- Avoid true `#000` on `#fff`: causes halation. Use `#111` / `#1a1a1a` on `#fafafa`.
- One chromatic accent per design unless you have explicit multi-accent system tokens.

---

## 6. Depth & Polish

- Consistent light source: all shadows come from the same direction (default: top, slightly above center).
- Elevation conveys meaning: higher elevation = more urgent / modal / interactive.
- Prefer space and shadow over borders for separation.
- Nested radius math: `inner-radius = outer-radius − padding`. Never identical inner/outer.
- Accent borders: a 2–3px colored border on a card is fine for status; never as a decorative flourish.
- Empty states must be designed, not left as blank whitespace. Every empty state = icon + title + line + optional CTA.
- Skeleton screens > spinners for content that loads in sections.
- Light-catching top edge: a 0.5–1px inset highlight at the top of elevated cards creates premium depth.

---

## 7. Interaction & Controls

**Cognitive principles:**
- Fitts's Law: make targets as large as the space allows; targets closer to cursor are faster.
- Hick's Law: fewer choices = faster decisions. Collapse secondary options.
- Miller's Law: working memory holds ~7 ±2 items. Never show more in one decision.
- Gestalt: elements that look similar are perceived as a group.

**Form design:**
- Single-column forms (never two-column for primary forms).
- Bordered fields, not just underlines.
- Label above the field, never inside as placeholder (placeholder disappears on type).
- Inline validation on blur (not on keystroke, not on submit-only).
- Group related fields visually with section headings and spacing.

**Table alignment:**
- Text columns: left-aligned.
- Number columns: right-aligned, use `font-variant-numeric: tabular-nums`.
- Status/icon columns: center-aligned.

**Feedback on every action:** Every button click, form submit, or async operation must produce visible feedback (loading state, success, or error). Silent actions erode trust.

---

## 8. Responsive & Adaptive

- Mobile-first: design for 375px first, then expand.
- Content drives breakpoints — not arbitrary widths.
- Components respond to their container, not the viewport when possible.
- Touch targets: minimum 44×44px with 8px spacing between them.
- Hover is not guaranteed on touch devices. Never hide critical affordances behind hover alone.
- Test at 200% browser zoom for text reflow.
- Flexible media: images and videos must scale fluidly, never overflow their containers.

---

## 9. Seven Core Principles (Priority Order)

1. **Hierarchy** — visual weight tells the user where to look first
2. **Progressive disclosure** — reveal complexity only as needed
3. **Consistency** — one pattern per problem, internal and external
4. **Contrast** — reserve maximum contrast for primary action
5. **Accessibility** — WCAG AA minimum, always
6. **Proximity** — related elements group; unrelated elements separate
7. **Alignment** — shared grid; consistent direction per zone

**Conflict resolution:** Accessibility > Usability > Performance > Constraints > Hierarchy > Aesthetics
