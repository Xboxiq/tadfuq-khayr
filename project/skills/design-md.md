---
name: design-md
description: Create, update, or audit a DESIGN.md file — the single source of truth for design direction, tokens, and visual rules, readable by any AI agent. Use when starting a new project's design system documentation, porting a brand to DESIGN.md format, or updating existing design docs.
user-invocable: true
---

> Source: nexu-io/open-design — `skills/design-md/SKILL.md` (Apache-2.0)
> Originally curated from Google Labs' Stitch project.

---

# design-md Skill

## What is a DESIGN.md?

A single markdown file that captures the complete design system for a product or brand so any AI agent can generate on-brand UI without access to Figma, a design tool, or a human designer.

A good DESIGN.md replaces "build me a button" with "build me a button that matches DESIGN.md" — and the result requires minimal revision.

---

## The 9 Standard Sections

Every DESIGN.md must include all nine sections, in this order:

### 1. Visual Theme & Atmosphere
- 2–3 sentence mood statement ("warm government authority + Vercel discipline")
- Mood words list (5–8 adjectives)
- What this design is NOT (the anti-patterns to avoid)

### 2. Color Palette & Roles
- Table with: Token | Value (hex) | Role
- Brand colors (primary, secondary, accent)
- Canvas/surface colors (background tiers)
- Text hierarchy colors
- Semantic colors (success, warning, error, info)
- Dark mode variants (if applicable)
- Rules section: what each color is and isn't for

### 3. Typography Rules
- Typeface table: Family | Role | Weights | Source
- Type scale table: Name | Size | Weight | Tracking | Line-height
- Arabic/RTL specifics if applicable
- Pairing rules (what goes with what)
- Non-negotiable type rules (e.g., "button labels never underlined")

### 4. Component Stylings
- Navigation (sticky behavior, background, link style)
- Buttons (primary / secondary / ghost; shape, padding, radius)
- Cards (background, border, shadow, radius; hover state)
- Inputs/Forms (label position, border style, error/focus states)
- Tags/Badges (shape, color, size)
- Any brand-specific components (expanding deck, spotlight, etc.)

### 5. Layout Principles
- Max content width
- Section padding (desktop + mobile)
- Grid system (columns, gutter)
- Breakpoints table

### 6. Depth & Elevation
- Shadow system (named levels with CSS values)
- How elevation is communicated (shadows, color tiers, or both)
- Backdrop-filter usage rules

### 7. Do's and Don'ts
- 5–8 "Do:" rules specific to this brand
- 5–8 "Don't:" rules — what to avoid
- Anti-patterns that break the brand

### 8. Responsive Behavior
- How elements adapt at each breakpoint
- Typography scale at mobile vs. desktop
- Grid collapse behavior
- Component-specific responsive rules (nav collapse, card stacking, etc.)

### 9. Agent Prompt Guide
- Quick color reference (copy-paste ready)
- 5–8 key phrases for prompting
- One-shot prompt template for new surfaces

---

## Writing Rules

- **Implementation-first order:** foundations before components
- **Measurable constraints:** use tokens, states, and numerical thresholds — not subjective words
- **Must vs. should:** mandatory rules say "must"; suggestions say "should"
- **Testable rules:** every rule must have a pass/fail state (no vague recommendations)
- **Under 500 lines** when feasible — focus on what an AI agent cannot infer from convention
- **Semantic tokens over raw values:** `--c-primary` not `#0066cc` in component rules
- **Complete state definitions:** default, hover, focus-visible, active, disabled, loading, error

---

## Quality Gates

A DESIGN.md is complete when:
- [ ] All 9 sections present
- [ ] Every component has states (default / hover / focus / disabled minimum)
- [ ] Contrast ratios explicitly stated (not "good contrast")
- [ ] Shadow levels have CSS values, not descriptions
- [ ] Type scale has pixel sizes and weights (not "large / medium / small")
- [ ] Agent Prompt Guide has copy-paste ready hex values
- [ ] No vague adjectives without concrete anchors ("warm" must specify a hex or OKLCH value)
- [ ] Dark mode documented if the product has it

---

## designmd-supply Integration

For any public website, you can auto-generate a DESIGN.md draft using:
**https://github.com/context-dot-dev/designmd-supply**

The tool:
1. Extracts brand identity, design tokens, and a hero screenshot
2. Composes them using four parallel Context.dev API calls
3. Outputs a structured DESIGN.md in the 9-section format

Use the output as a starting point; always review and refine manually.

---

## awesome-design-md Reference Library

**https://github.com/VoltAgent/awesome-design-md** — 73 brand DESIGN.md files ready to reference.

Key brands available (see `skills/references/`):
- `apple.DESIGN.md` — photography-first, single accent, tight display tracking
- `linear.DESIGN.md` — dark precision, four-surface hierarchy, single lavender accent
- `vercel.DESIGN.md` — stark b&w, mesh gradient hero only, Geist typeface system
- `notion.DESIGN.md` — illustration-rich, purple CTA, pastel card tints
- `stripe.DESIGN.md` — weight-300 display, indigo pill CTA, gradient upper-third

When working on a brand with a similar aesthetic, read the matching reference first.
