# UX & Interaction Principles — Reasoning Layer

> Source: TypeUI / bergside/typeui — `skills/fundamentals/ux-principles.md`
> Covers cognitive laws, 30 UX laws, button/control state contracts, and form/feedback behavior.

---

## 0. Agent Operating Rules

1. Treat each law as a constraint, not a suggestion.
2. Always consider the whole list — many failures come from over-applying one law (e.g., aggressive minimalism violating Tesler's Law).
3. Prefer subtraction before addition. Check Occam's Razor, Hick's Law, and Cognitive Load first.
4. Never invent novelty for its own sake. Familiarity (Jakob's Law) beats cleverness for primary flows.
5. Justify every deviation: which law, why, and what compensating control protects the user.
6. Apply the Universal Checklist (§5) to every screen before declaring done.
7. Accessibility wins every conflict with aesthetics or novelty.

---

## 1. The 30 UX Laws

| # | Law | One-line rule |
|---|---|---|
| 1 | **Fitts's Law** | Make targets large; nearby targets are faster to reach |
| 2 | **Hick's Law** | More options = slower decisions; collapse secondary choices |
| 3 | **Miller's Law** | Working memory: ~7±2 items max per decision |
| 4 | **Jakob's Law** | Users expect your UI to work like sites they already know |
| 5 | **Gestalt Similarity** | Elements that look alike are perceived as a group |
| 6 | **Gestalt Proximity** | Elements that are close together are perceived as related |
| 7 | **Gestalt Continuity** | Eyes follow lines and curves — use this for flow |
| 8 | **Gestalt Closure** | The brain completes incomplete shapes; use for icons |
| 9 | **Gestalt Figure-Ground** | Users distinguish foreground from background — don't make them work for it |
| 10 | **Law of Common Fate** | Elements moving together are perceived as a group |
| 11 | **Aesthetic-Usability** | Beautiful UI is perceived as easier to use |
| 12 | **Von Restorff** | The odd-one-out is remembered — use for critical actions |
| 13 | **Serial Position** | First and last items in a list are remembered best |
| 14 | **Doherty Threshold** | Responses ≤ 400ms feel immediate; > 1s needs a loader |
| 15 | **Tesler's Law** | Complexity never disappears — you absorb it or push it to the user |
| 16 | **Occam's Razor** | Given equal functionality, the simpler design wins |
| 17 | **Parkinson's Law** | Work expands to fill time; interfaces should be time-bounded |
| 18 | **Cognitive Load** | Reduce extraneous load; every element must earn its place |
| 19 | **Choice Overload** | Too many options at one point degrades decision quality |
| 20 | **Mental Models** | Users act on their model of the world, not yours — match the model |
| 21 | **Goal-Gradient** | Users accelerate toward a goal as they approach it — show progress |
| 22 | **Zeigarnik Effect** | Incomplete tasks stay in memory — use for re-engagement |
| 23 | **Fogg's Behavior** | Behavior = Motivation × Ability × Trigger — all three must align |
| 24 | **Peak-End Rule** | Users judge experiences by peak moments and endings, not averages |
| 25 | **Recognition > Recall** | Show options; don't require memorized commands |
| 26 | **Feedback Loop** | Every action needs a visible response within 100ms |
| 27 | **Error Prevention** | Better to prevent errors than provide good error messages |
| 28 | **Reversibility** | Make actions undoable wherever possible |
| 29 | **Confirmation Bias** | Users ignore information that contradicts their expectation |
| 30 | **Progressive Disclosure** | Reveal complexity only when the user is ready for it |

---

## 2. Button & Control State Contract

Every interactive element must have all five base states wired. Shipping only `default` is incomplete.

### Five Core States

| State | Trigger | Visual change |
|---|---|---|
| **Default** | No interaction | Base style |
| **Hover** | Mouse over | Lightness/color shift or lift |
| **Active** | Mouse/touch down | Slight shrink or darken |
| **Focus-visible** | Keyboard tab | 2–3px ring, ≥3:1 contrast, never removed |
| **Disabled** | Prop or logic | Reduced opacity (0.38–0.5), no pointer, tooltip explaining why |

### Four Functional States

| State | When | What to show |
|---|---|---|
| **Loading** | Async operation in progress | Spinner or pulsing text; button disabled to prevent re-submit |
| **Success** | Operation completed | Checkmark, brief green flash, or success message |
| **Error** | Operation failed | Red tint, error message inline, offer retry |
| **Selected/Toggled** | Toggle on | Filled/inverted state; `aria-pressed` or `aria-checked` |

### Timing Budgets

- Hover: 100–150ms ease-out
- Active (press): 80–120ms ease-in
- Focus: instant (no transition — users need immediate feedback)
- Loading → result: no artificial delay; show result as soon as ready

### Hover Techniques

**H1 – Fill Darken:** `background` darkens 8–12%  
**H2 – Elevation Lift:** `translateY(-1px)` + deeper shadow  
**H3 – Border Appear:** `1px border` fades in  
**H4 – Underline Reveal:** `text-decoration` animates from left  
**H5 – Icon Shift:** icon nudges 2px in the action direction  
**H6 – Color Shift:** hue rotates 10–15°  
**H7 – Opacity Reduce:** container fades to 0.8  
**H8 – Scale Up:** `scale(1.02–1.04)` on the card  
**H9 – Background Tint:** subtle color wash (5–10% opacity)  
**H10 – Chevron Appear:** `→` or `›` fades in at end of label  
**H11 – Glow:** `box-shadow` with colored blur (use sparingly)  
**H12 – Text Color:** foreground shifts to accent

---

## 3. Form Design Contract

- **Single column.** Two-column forms cause scanning errors for sequential entry.
- **Label above field, always.** Placeholder text disappears on focus — it cannot replace a label.
- **Bordered fields.** Bottom-border-only loses affordance on same-color backgrounds.
- **Validate on blur.** Not on every keystroke (annoying) and not only on submit (too late).
- **Error messages below the field,** not above. Users read down.
- **Required fields: mark all required** with `*` explained once at top, or mark all optional.
- **Destructive actions:** always require an explicit confirmation step. Never auto-execute delete.
- **Submit button:** label matches the action ("Save changes", not "OK"). Disable during submission.

---

## 4. Feedback on Every Action

| Action type | Expected feedback |
|---|---|
| Button click | Hover → active state (80–120ms) |
| Form submit | Loading state → success or error state |
| File upload | Progress indicator (bytes or %) |
| Delete | Confirmation dialog OR immediate undo toast |
| Background save | Subtle auto-save indicator ("Saved ✓") |
| Navigation | Page/route transition (instant or slide/fade) |
| Async data load | Skeleton screens, not just spinners |

Silent actions — clicks that do nothing visually — destroy trust faster than errors.

---

## 5. Universal Pre-Ship Checklist

- [ ] Every button has all 5 base states + relevant functional states
- [ ] Focus ring visible in keyboard navigation (≥2px, ≥3:1 contrast)
- [ ] Disabled elements include a tooltip explaining why
- [ ] Loading state prevents duplicate submission
- [ ] Touch targets ≥44×44px, ≥8px spacing between them
- [ ] No action is silent — every click produces feedback ≤400ms
- [ ] Error messages are specific ("Phone must be 07XXXXXXXXX") not generic ("Invalid input")
- [ ] Destructive actions are reversible or require confirmation
- [ ] `aria-label`, `role`, `aria-expanded`, `aria-invalid` wired on custom controls
- [ ] `prefers-reduced-motion` replaces transforms with instant color changes

---

## 6. RTL-Specific Interaction Rules

- Arrow icons must flip in RTL (chevron pointing right → left; forward → backward logically)
- `dir="rtl"` on `<html>` is the entry point; use logical CSS properties (`margin-inline-start` not `margin-left`)
- Toasts and notifications anchor to the logical start (right in RTL)
- Progress bars fill from right to left in RTL
- Tab order follows visual reading direction (right → left in RTL)
- Drag/swipe gestures should also reverse: swipe right to delete (in RTL UI)
