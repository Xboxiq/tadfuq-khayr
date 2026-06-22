Underline tab strip for page-level navigation — crimson marker under the active tab.

```jsx
<Tabs
  value={tab}
  onChange={setTab}
  items={[
    { key: 'overview', label: 'نظرة عامة' },
    { key: 'services', label: 'الخدمات', badge: 30 },
    { key: 'cases', label: 'الحالات', icon: 'cases' },
  ]}
/>
```

Items take `key`, `label`, optional `icon` and `badge`. Controlled — track `value` yourself.
