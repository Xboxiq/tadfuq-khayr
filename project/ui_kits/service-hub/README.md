# Service Hub — UI kit

Interactive recreation of the Tadfuq Al-Khayr officer console.

Open `index.html`. The kit boots into the login screen
(`admin / rasafa-2026`), then routes through:

- **Dashboard** (`Dashboard.jsx`) — overview tab with the four
  department deck, services-express grid, KPI stats row, activity
  feed, and usage sidebar. Topbar carries brand + team picker +
  ⌘K search + dark-mode toggle + sign-out. Sticky glass.
- **Service form** (`ServiceForm.jsx`) — subscriber + account fields,
  SLA priority selector, autosaved notes textarea, plus an
  advisory sidebar populated from `data.js`'s `getAdvisories(code)`
  and a live fee tally.

## Files

```
index.html       routing shell + script wiring
shGlobals.jsx    React hooks + Icon + DEPT_COLORS exported on window
Login.jsx        glass login card on the aurora background
Dashboard.jsx    top chrome, page head, deck, express, stats, activity
ServiceForm.jsx  form layout + advisory sidebar + fee tally
kit.css          dashboard layout (`sh-*` prefix)
login.css        login layout
form.css         service-form layout
```

Real data is loaded from the root `../../data.js` and the brand
mark from `../../assets/logo.png`. Custom icons come from
`../../ds_icons.js`; everything else is Material Symbols via the
root `../../styles.css`.

## Cutting corners

This kit is a high-fidelity recreation of the visual + interaction
language, not the full application. Authentication, autosave,
permissions, multi-screen navigation, the admin panel, branches
view, cases list, pricing rates table, advisory bank editor, and
PDF / DOCX export are all stubbed or absent — see the source repo
at <https://github.com/Xboxiq/tadfuq-khayr> for the full
implementations.
