Generic surface that holds nearly every panel in the hub — soft navy-tinted shadow, 14px radius.

```jsx
<Card>محتوى البطاقة</Card>
<Card size="lg" interactive>بطاقة قابلة للنقر</Card>
<Card glass>لوحة زجاجية فوق الخلفية</Card>
<Card brandRim size="xl">بطاقة بحافة العلامة</Card>
```

`size` `md`/`lg`/`xl` scales padding + radius. `interactive` adds the hover-lift, `glass` makes it a translucent backdrop-blur panel, `brandRim` paints the navy→crimson→gold sweep on the top edge. Use `as` to change the tag.
