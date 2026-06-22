# Accessibility Principles — WCAG 2.2 Ruleset

> Source: TypeUI / bergside/typeui — `skills/fundamentals/accessibility.md`
> WCAG 2.1/2.2 standards. Accessibility overrides every other principle.

---

## 0. Agent Operating Rules

1. Accessibility is the hard constraint — it overrides brand guidelines, design system choices, and aesthetic preferences.
2. Fix contrast within the existing color family — don't introduce unrelated hues.
3. Every rule must be testable with a numerical threshold or a binary check.
4. Disabled components must still be *perceivable*, even if not operable.
5. Never suppress focus; never omit loading or disabled states.

---

## 1. Contrast Mathematics

### Relative Luminance (for manual verification)

```
L = 0.2126 × R + 0.7152 × G + 0.0722 × B
where each channel C = (C_sRGB / 255) linearized:
  C_lin = C_sRGB/255 ≤ 0.04045 ? C/12.92 : ((C+0.055)/1.055)^2.4

Contrast ratio = (L_lighter + 0.05) / (L_darker + 0.05)
```

Always verify computationally — never by visual estimation.

---

## 2. Text Contrast Minimums

| Text type | AA (minimum) | AAA (enhanced) |
|---|---|---|
| Normal text (< 18pt / < 24px, not bold) | **4.5:1** | 7:1 |
| Large text (≥ 18pt / ≥ 24px, OR bold ≥ 14pt / ≥ 18.67px) | **3:1** | 4.5:1 |
| Incidental text (disabled UI, decorative) | Exempt | — |
| Logotypes | Exempt | — |

- **Target 4.5:1 for all body copy** even when large-text threshold would allow 3:1.
- Test on the *actual* background, including gradients at the text's position.
- Avoid pure `#000` on `#fff` — causes halation. Use `#1a1a1a` on `#f9f9f9`.
- Never round contrast ratios favorably (4.48:1 ≠ 4.5:1).

---

## 3. Non-Text Contrast (3:1 Minimum)

Required for:
- UI component boundaries (input field borders, checkboxes, radio buttons)
- Focus indicators
- Icons that convey meaning (not purely decorative)
- Data visualization elements (chart lines, data points)
- State changes in toggle switches, progress bars

Disabled components: perceivable but exempt from contrast requirements — however, users must understand *why* they are disabled.

---

## 4. Color as the Sole Conveyor (SC 1.4.1)

Color alone **cannot** be the only means of conveying:
- Status (error, warning, success)
- Required fields
- Selected state
- Data categories in charts

**Always pair color with:** icon, text label, pattern, or shape change.

### Links in Body Text

- Inline links **must** have an underline (or other non-color visual distinction).
- Navigation and footer links may omit underlines if they are clearly styled as navigation.

---

## 5. Focus Visibility (SC 2.4.11 WCAG 2.2)

```css
:focus-visible {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
  /* No transition on outline — appears instantly */
}
```

Requirements:
- **≥ 2px** focus indicator thickness
- **≥ 2px** offset from the element edge  
- **≥ 3:1** contrast between focus indicator and adjacent colors
- **Appears instantly** — no `transition` on the focus ring
- Never `outline: none` without a replacement
- `:focus-visible` (not `:focus`) to avoid mouse-click outlines

---

## 6. Keyboard Accessibility (SC 2.1)

- All functionality must be operable by keyboard alone
- Tab order must match visual reading order (or be explicitly set with `tabindex`)
- No keyboard traps — user can always Tab away from any element
- Custom widgets (dropdowns, dialogs, carousels) must implement the ARIA keyboard pattern
- Arrow keys navigate within a widget (menu, listbox, tabs); Tab moves between widgets
- `Escape` always closes an overlay/dialog

### ARIA Keyboard Patterns

| Widget | Keys |
|---|---|
| Menu / Dropdown | `↑↓` navigate; `Enter` select; `Esc` close |
| Dialog / Modal | `Tab` within trap; `Esc` close; focus returns to trigger |
| Tabs | `←→` switch tabs; `Home/End` first/last |
| Combobox | `↑↓` list; `Enter` select; `Esc` close; `backspace` clears |
| Carousel | `←→` or `prev/next` buttons; autoplay pauses on focus |

---

## 7. Motion Safety (SC 2.3.3)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- No flashing content > 3 times per second
- Parallax, autoplay video, looping animations must have a pause control
- Replace `transform` animations with instant color changes under reduced-motion

---

## 8. Text Resizing (SC 1.4.4)

- Use `rem`/`em` units for all font sizes — never `px` (breaks user font-size preference)
- At 200% browser zoom: no content truncation, no horizontal scroll, text must reflow
- Containers must not have fixed heights that cut off text when font-size increases
- Form inputs must grow with their label text

---

## 9. Reflow (SC 1.4.10)

- Content must be usable at **320px viewport width** without horizontal scrolling
- Exception: content requiring two-dimensional layout (maps, data tables, complex diagrams)
- Test by zooming browser to 400% on a 1280px screen

---

## 10. Target Size (SC 2.5.8 WCAG 2.2)

- Minimum touch target: **24×24px** (SC 2.5.8 AA)
- Recommended target: **44×44px** (Apple HIG / Android guidelines)
- **8px minimum spacing** between adjacent targets
- Inline text links are exempt from size requirements, but add `:focus-visible` padding

---

## 11. Semantic HTML Structure

```html
<!-- Correct landmark structure -->
<header role="banner">
  <nav aria-label="الملاحة الرئيسية">...</nav>
</header>
<main id="main-content">
  <h1>Page title</h1>
</main>
<aside aria-label="روابط مساعدة">...</aside>
<footer role="contentinfo">...</footer>
```

- One `<h1>` per page
- Heading levels must not skip (h1 → h2, never h1 → h3)
- Lists of items must use `<ul>`/`<ol>`, not `<div>` chains
- Interactive elements must be `<button>` or `<a>`, never `<div onClick>`
- Images must have `alt` text (or `alt=""` for purely decorative)
- Form inputs must have `<label>` or `aria-label`

---

## 12. Skip Navigation

Every page with a repeated navigation block must include:

```html
<a href="#main-content" class="skip-link">تخطّى إلى المحتوى الرئيسي</a>

<!-- CSS -->
.skip-link {
  position: absolute;
  transform: translateY(-100%);
}
.skip-link:focus {
  transform: translateY(0);
}
```

---

## 13. Audit Checklist

**Text & Color:**
- [ ] All body text ≥ 4.5:1 contrast
- [ ] All large text ≥ 3:1 contrast
- [ ] All UI component borders ≥ 3:1 contrast  
- [ ] No information conveyed by color alone
- [ ] All status states (error/warn/success) have icon + text + color

**Interaction:**
- [ ] All interactive elements keyboard-operable
- [ ] Focus ring visible on every focusable element
- [ ] No keyboard traps
- [ ] Custom widgets implement ARIA keyboard patterns
- [ ] All interactive elements ≥ 44×44px touch target

**Structure:**
- [ ] Logical heading hierarchy (h1→h2→h3)
- [ ] Landmark regions present (header, main, nav, footer)
- [ ] All images have alt text
- [ ] All form inputs have labels
- [ ] Skip navigation link present

**Motion & Media:**
- [ ] `prefers-reduced-motion` implemented
- [ ] No content flashes > 3 Hz
- [ ] Autoplay video/animation has pause control
- [ ] 200% zoom test passed (no truncation, no horizontal scroll)
