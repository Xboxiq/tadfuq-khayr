Brand action button — navy/white default plus a navy→crimson gradient `primary`, used across the hub for any clickable command.

```jsx
<Button variant="primary" icon="bolt">ابدأ سريع</Button>
<Button variant="ghost" size="sm" iconEnd="arrow_back">كل الخدمات</Button>
<Button variant="danger" icon="delete">حذف</Button>
<Button busy>جاري الحفظ…</Button>
```

Variants: `default` (navy hover), `primary` (brand gradient, crimson focus ring), `ghost` (transparent), `danger` (crimson outline). Sizes `sm` / `md` / `lg`. `icon` / `iconEnd` take Material Symbols ligature names; `busy` swaps in the spinner. RTL-first — the start-icon sits on the right.
