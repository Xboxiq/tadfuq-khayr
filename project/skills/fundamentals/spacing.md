# Spacing Principles — Reasoning Layer

> Source: TypeUI / bergside/typeui — `skills/fundamentals/spacing-principles.md`
> Universal whitespace, proximity, and rhythm rules for AI agents and designers.

---

## 0. Agent Operating Rules

1. **Load the design system first.** Design system spacing tokens define the concrete values. Apply them; use these principles to decide *which tier* belongs *where*.
2. **The inner-outer rule is non-negotiable:** padding around a group must exceed spacing within the group.
3. **Use `gap` on flex/grid parents** instead of chaining margins on children.
4. **Preserve spacing tier ratios on mobile** — don't proportionally shrink all gaps. Tighten only where layout demands it.
5. **Minimum three distinct spacing tiers** in every layout for scannable hierarchy.

---

## 1. The 4-Point Grid

All spacing values are multiples of 4px:

| px | rem | Role | Use |
|---|---|---|---|
| 4 | 0.25rem | **Micro** | Icon gap, badge padding, tight label-to-icon |
| 8 | 0.5rem | **Tight** | Inline elements, tag padding, list item gap |
| 12 | 0.75rem | **Cozy** | Button padding (vertical), form group gap |
| 16 | 1rem | **Default** | Paragraph margin, card padding, standard gap |
| 20 | 1.25rem | **Relaxed** | Section padding small, list with headers |
| 24 | 1.5rem | **Medium** | Card grid gap, sidebar padding |
| 32 | 2rem | **Loose** | Section heading bottom margin, modal padding |
| 48 | 3rem | **Spacious** | Between major sections on mobile |
| 64 | 4rem | **Section** | Between major sections on tablet |
| 96 | 6rem | **Page** | Between major sections on desktop |
| 128+ | 8rem+ | **Hero** | Full-bleed hero vertical padding |

---

## 2. Spacing by Relationship

### Form Fields

```
[Label]            ← 4–8px below label
[_________________]  ← Field
                   ← 16–24px to next label
[Next Label]
```

- Label → field: **4–8px** (tight — shows ownership)
- Field → next label: **16–24px** (loose — breaks grouping)
- Between field groups/sections: **32–48px**

### Card Anatomy

```
+--[padding: 20–24px]---+
|  [Title]              |
|  [8px gap]            |
|  [Body text]          |
|  [16px gap]           |
|  [Action]             |
+-----------------------+
```

- Card padding: 20–24px (mobile), 24–32px (desktop)
- Between card title and body: **8px**
- Between body and card action: **16–20px**
- Between cards in a grid: **16–24px**

### Typography Spacing

- Heading immediately followed by paragraph: `margin-bottom: 32px` on the heading
- Paragraph to paragraph: `margin-bottom: 16px`
- List item to list item: `gap: 8px` (tight content) or `12px` (comfortable)
- Section heading to content below: **24–32px**

---

## 3. Inner-Outer Rule (Non-Negotiable)

The padding inside a group container must always be larger than the spacing between items inside it:

```css
/* ✓ CORRECT — items inside are closer than the container edge */
.card {
  padding: 24px;        /* outer */
}
.card > * + * {
  margin-top: 12px;     /* inner — LESS than padding */
}

/* ✗ WRONG — items inside are farther apart than the container edge */
.card {
  padding: 8px;
  gap: 24px;            /* inner > outer — breaks grouping perception */
}
```

---

## 4. Responsive Spacing

### Mobile Reductions

| Desktop | Mobile | Token |
|---|---|---|
| 96px section gap | 48px | halved |
| 64px | 32px | halved |
| 32px | 24px | -25% |
| 24px | 16px | -33% |
| 16px | 12–16px | minimal reduction |
| 8px and below | keep | never reduce micro |

### Rule: Preserve Ratios, Not Values

If desktop uses 96/48/24px for section/card/element spacing, mobile should use 48/24/12px — the same 4:2:1 ratio, at half scale.

---

## 5. Common Patterns

### Navigation Bar

```
[8–12px vertical] [Logo] [32–48px] [Nav links: 24px apart] [CTA] [8–12px vertical]
```

### Page Layout

```
[96px top] [Hero] [64–96px] [Section] [64–96px] [Section] [96px bottom]
```

### Modal / Dialog

```
[24–32px padding]
[Title 20–24px]
[16–20px gap]
[Body text]
[24px gap]
[Actions row: 8px between buttons]
[24–32px padding]
```

### Data Table

```
[16px row padding vertical] [cells: 12px horizontal] [16px between header and first row]
```

---

## 6. Spacing Anti-Patterns

**Never do these:**
- `margin: auto` for vertical centering in scrollable content
- Different spacing values between visually identical element types (inconsistency)
- Borders as substitutes for spacing (use space, not lines, for grouping)
- Full-width spacing tokens (8px column gap at desktop) — increase with viewport width
- Fixed `px` heights on containers — let content define height, use `min-height`
- Chaining `margin-bottom` on every child — use `gap` on the parent instead
- Zero spacing between sections — always separate content blocks with ≥32px

**Always do:**
- `gap` on flex/grid parents for child spacing
- `padding` on the container for inner breathing room
- Consistent use of the 4-point grid
- At least three visually distinct spacing tiers per screen
- More space between section headings and content than within content

---

## 7. Spacing Audit Checklist

- [ ] All spacing values are multiples of 4px
- [ ] Inner spacing < outer container padding (inner-outer rule holds)
- [ ] At least 3 distinct spacing tiers visible in the layout
- [ ] Form labels are clearly owned by their fields (4–8px gap)
- [ ] Section-level gaps ≥ 48px (mobile) / 64px (desktop)
- [ ] `gap` used on flex/grid parents (not margin chaining)
- [ ] Touch targets have ≥ 8px clearance between them
- [ ] No border used as a substitute for spatial grouping
