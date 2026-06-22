---
name: frontend-design
description: Build production-grade frontend interfaces with strong visual direction, polished typography, considered layout, and working HTML/CSS/JS or framework code. Use when designing UI/UX, web design, landing pages, dashboards, or React component design.
user-invocable: true
---

> Source: nexu-io/open-design — `skills/frontend-design/SKILL.md` (Apache-2.0)

---

# Frontend Design Skill

## When to Invoke

Activate this skill when the task involves:
- Frontend design, UI/UX design, web design
- Production UI, landing pages, dashboards
- React component design, HTML/CSS implementation
- Visual direction choices for a new surface
- Styling a component that has no existing design system guidance

---

## 6-Step Operating Workflow

### Step 1 — Understand the Brief

Before choosing any aesthetic, identify:
- **Audience:** developer, end-user, executive, student, admin?
- **Job to be done:** decision support, task completion, discovery, reading?
- **Domain:** fintech, health, education, productivity, government?
- **Tone:** serious, playful, minimal, rich, technical, warm?
- **Technical constraints:** framework, browser targets, RTL support, accessibility level, token system?

If the project has an existing design system, treat it as the brand contract — it overrides generic aesthetic choices.

### Step 2 — Choose ONE Aesthetic Direction

Commit to a specific direction. Never default to:
- "Clean and minimal with a purple/blue gradient" (AI slop #1)
- "A modern dark mode with glowing accents" (AI slop #2)
- Interchangeable SaaS layouts (white cards, blue buttons, no hierarchy)

Good directions to commit to:
- **Editorial warmth** — warm canvas, serif or humanist sans, generous whitespace
- **Technical precision** — mono type, tight grid, hairline dividers, dark or off-white
- **Institutional authority** — serif display, muted palette, formal density
- **Consumer delight** — illustration, color, animation, round corners, pastel tints
- **Dense operational** — tabular data, tight spacing, maximum information density
- **Glass premium** — translucent surfaces, blur, soft-tinted shadows

When a design system is present: apply its direction, not a generic one.

### Step 3 — Design Real Interfaces

The output must include:
- **Actual controls** with proper interactive states (not just default)
- **State variations:** loading, empty, error, success
- **Navigation:** where does the user come from/go next?
- **Responsive behavior:** mobile at minimum
- **Real content:** actual labels, reasonable numbers, real copy (no "lorem ipsum")

### Step 4 — Build Production-Grade Code

Standards:
- Semantic HTML (`<button>`, `<nav>`, `<main>`, `<h1>–<h6>`, `<label>`)
- CSS custom properties for every color, size, and spacing value used more than once
- Keyboard accessibility: focus states, `aria-*`, keyboard-operable controls
- No `<div onClick>` — only `<button>` or `<a>` for interactive elements
- Mobile-first CSS
- Follow existing repository conventions if present

### Step 5 — Refine Visual Craft

Before calling done, apply:
- **Typography:** Is the type scale obvious? (display ≠ title ≠ body ≠ label)
- **Color:** Is the hierarchy clear? (primary CTA is the most visually heavy element)
- **Spacing:** Inner-outer rule holds? (container padding > inner gap)
- **Depth:** Are shadows or color tiers communicating elevation correctly?
- **Motion:** Does every hover/active state exist with appropriate timing?

### Step 6 — Self-Review

Check against the "AI slop" list before delivery:
- [ ] No purple/blue gradient blobs as background decoration
- [ ] No emoji used as icons
- [ ] No all-same-size card grid with no hierarchy
- [ ] No centered-everything with no rhythm
- [ ] No placeholder stats ("1,234 users", "98% uptime" as decoration)
- [ ] No instant transitions (0ms)
- [ ] Type scale is visually obvious (not just different CSS classes with similar sizes)
- [ ] Primary action is the heaviest-weighted element

---

## Design System Integration

When a design system exists:
1. Read its token file first (`styles.css`, `tokens/*.css`, or equivalent)
2. Use its spacing, color, and radius tokens
3. Use its component classes/primitives, don't re-implement
4. Apply its interaction patterns (hover, focus, press)
5. Match its typography scale

These skill rules **enhance** a compliant design — they never override the system.

---

## Conflict Resolution

If this skill and the design system conflict: **design system wins.**
If this skill and accessibility conflict: **accessibility wins.**
If this skill and usability conflict: **usability wins.**
