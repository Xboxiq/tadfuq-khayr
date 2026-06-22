Breadcrumb trail. The final item is the bold current page; the rest are links separated by a chevron.

```jsx
<Breadcrumbs items={[
  { label: 'الرئيسية', href: '#' },
  { label: 'الخدمات', onClick: goServices },
  { label: 'عمل اشتراك جديد' },
]} />
```

RTL-aware separator. Wire `onClick` for in-app routing.
