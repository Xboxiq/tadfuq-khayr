Autosave status pill — lives in the form header so officers know their work is safe.

```jsx
<SaveBadge status="saved" />
<SaveBadge status="saving" />
<SaveBadge status="error" />
```

States: `idle`, `saving` (pulsing blue dot), `saved` (green), `error` (solid crimson). Defaults to Arabic labels; pass children to override.
