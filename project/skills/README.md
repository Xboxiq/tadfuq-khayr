# Installed Skills & Design References

Installed from six sources. Read the relevant file before designing any surface.

## Source Index

| Source | URL | What it provides |
|---|---|---|
| **awesome-design-md** | https://github.com/VoltAgent/awesome-design-md | 73 brand DESIGN.md files — Apple, Linear, Vercel, Notion, Stripe + more |
| **open-design** | https://github.com/nexu-io/open-design | 100+ skills — frontend-design, impeccable-polish, design-md, motion |
| **designmd-supply** | https://github.com/context-dot-dev/designmd-supply | Auto-converts any live site into a DESIGN.md via Context.dev API |
| **typeui** | https://github.com/bergside/typeui | Fundamentals: UI/UX laws, typography, accessibility, spacing |
| **neuform.ai** | https://neuform.ai/ | Form & input design system (403 — check site directly) |
| **mydesignmd.com** | https://www.mydesignmd.com/ | DESIGN.md catalog & generator (403 — check site directly) |

---

## Layout

```
skills/
  fundamentals/           ← TypeUI — reasoning layer for every design decision
    ui-principles.md
    ux-principles.md
    typography.md
    accessibility.md
    spacing.md
  references/             ← awesome-design-md brand DESIGN.md files
    apple.DESIGN.md
    linear.DESIGN.md
    vercel.DESIGN.md
    notion.DESIGN.md
    stripe.DESIGN.md
  frontend-design.md      ← open-design: how to build production-grade UI
  impeccable-polish.md    ← open-design: audit & polish any existing artifact
  design-md.md            ← open-design: create/manage DESIGN.md files
```

## Usage

**Before designing any screen:**
1. Read the relevant `references/*.DESIGN.md` if you're drawing from a brand's language
2. Apply `fundamentals/ui-principles.md` for hierarchy/layout decisions
3. Apply `fundamentals/typography.md` for type choices
4. Apply `fundamentals/accessibility.md` — access wins every conflict
5. Apply `fundamentals/spacing.md` for rhythm

**When building a new interface:**
→ Use `frontend-design.md` as the operating checklist

**When auditing / polishing an existing one:**
→ Use `impeccable-polish.md` as the operating checklist

**When writing or updating a DESIGN.md:**
→ Use `design-md.md` as the template spec
