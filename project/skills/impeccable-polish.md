---
name: impeccable-design-polish
description: Audit, critique, polish, animate, and harden any existing web or HTML artifact. Use after a screen exists to make it production-ready. Removes AI tells, fixes spacing/typography, adds interaction states, and ensures accessibility.
user-invocable: true
---

> Source: nexu-io/open-design — `skills/impeccable-design-polish/SKILL.md` (Apache-2.0)

---

# Impeccable Design Polish Skill

Use after a web or HTML artifact already exists. Goal: audit, critique, polish, animate, harden, and prepare the artifact for live/share.

**Critical rule: Inspect the current HTML/CSS before editing. Never guess from the prompt alone.**

---

## Five Operating Modes

Choose the mode that matches the task:

### Mode 1 — AUDIT
Identify the highest-impact issues without fixing anything. Output a prioritized list with severity (critical / high / medium / low) and a one-sentence fix for each.

### Mode 2 — CRITIQUE
Explain *why* elements feel generic, inconsistent, or weak — not just *what* is wrong. Connects visual decisions to cognitive and brand principles.

### Mode 3 — POLISH
Directly improve the artifact. Fixes the issues found in audit/critique mode. Preserves existing content and branding.

### Mode 4 — ANIMATE
Add purposeful motion without being decorative. Every animation must serve a purpose (feedback, orientation, delight). Respect `prefers-reduced-motion`.

### Mode 5 — HARDEN
Fix responsive behavior (375 / 768 / 1024 / 1440px), accessibility (WCAG AA), keyboard navigation, and touch target sizes. No visual changes.

---

## The AI Slop Checklist (Remove These)

These are tells that the design was generated without taste or intention:

| Anti-pattern | Why it's wrong | Fix |
|---|---|---|
| Purple-to-blue gradient background blob | Decorative, no product reason | Remove; use solid color tint or white |
| Rainbow mesh gradient as hero decoration | Overused AI trope | Replace with typography-led or photo hero |
| Oversized rounded cards (radius > 20px on data cards) | Softens authority | Reduce to 8–12px for data; 16px max for marketing |
| Uniform card grid (all same size, same shadow) | No hierarchy | Vary sizes; use bento layout or emphasize one |
| Centered-everything layout | No rhythm, no flow | Introduce asymmetry; anchor a focal element |
| Equal-weight text (all headings look like body) | No scannable hierarchy | Apply real type scale |
| Gradient buttons ("gradient pill with glow") | Tries too hard | One solid fill; no gradient on interactive elements |
| Emoji as icons | Inconsistent, inaccessible | Replace with SVG icon set |
| Lorem ipsum or placeholder stats | Not real content | Use actual product copy |
| 0ms transitions | Feels broken | Use 150–360ms ease-out |
| Single heavy box-shadow | Fake depth | Use stacked small shadows or color tiers |
| Glowing border / neon accent on dark | Clubby, dated | Use subtle elevation tiers instead |
| Identical hover state across all elements | No differentiation | Vary hover by element type (lift for cards, darken for buttons) |

---

## Polish Pass Sequence

Run these in order:

1. **Type hierarchy first.** Can you scan the page in 2 seconds and know where to look? If not, adjust sizes/weights before anything else.

2. **Color simplification.** Count chromatic colors. If more than 3 (not counting neutrals), reduce. One for primary action, one for secondary accent, one for status.

3. **Spacing audit.** Inner-outer rule: does container padding exceed inner gap? Are section breaks visually obvious (≥48px)? Form labels clearly own their fields?

4. **Shadow/depth.** Replace single heavy shadows with stacked small ones. Check for nested radius math.

5. **Interaction states.** Every button has hover + active + focus + disabled. Loading state exists. Empty states designed. Error states informative.

6. **Motion.** Add `transition` to every interactive element that doesn't have one. Check `prefers-reduced-motion` compliance.

7. **Accessibility.** Contrast ≥ 4.5:1, focus rings visible, touch targets ≥ 44px, no color-only status.

8. **Content.** Replace all placeholders with real or realistic content. Real numbers, real labels, real copy.

---

## What NOT to Change

- Existing content and branding (unless explicitly directed)
- Color palette (improve contrast within it, don't replace it)
- Component/page structure (unless it's causing a usability problem)
- Intentional design decisions that are working correctly

---

## Output Format

After each mode, state:
- What changed and why (one sentence each)
- What was intentionally preserved
- Any trade-offs made

---

## Recommended Pairings

- **With `frontend-design`:** for stronger visual direction before polish
- **With `ux-principles.md`:** to validate interaction model before hardening
- **With `accessibility.md`:** for deep WCAG audit
