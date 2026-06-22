Field wrapper — label, control slot, and a hint that swaps to an error line.

```jsx
<Field label="اسم المشترك" required htmlFor="name" hint="كما في سند الملكية">
  <Input id="name" />
</Field>

<Field label="رقم الحساب" error="رقم غير صحيح">
  <Input invalid />
</Field>
```

`required` adds the crimson asterisk. `error` replaces `hint` and prepends the ⚠ glyph. Wraps any control as children.
