# Tadfuq Server — Foundation (Phase 1 placeholder)

This directory is the **planned home** for the backend API that will eventually
replace the in-browser `localStorage`-based engine in `final_db.js` and
`final_auth.js`.

The frontend was deliberately built against an abstraction
(`window.DB`, `window.Auth`) so swapping to this backend later requires
**only one adapter file**, not a frontend rewrite.

## Status

| Component | Status |
|---|---|
| Database schema (Prisma) | ✓ drafted in `prisma/schema.prisma` |
| API surface (OpenAPI-style contract) | ✓ drafted in `API.md` |
| Express + middleware code | ⏳ Phase 2 |
| Argon2id password hashing | ⏳ Phase 2 |
| JWT + refresh rotation | ⏳ Phase 2 |
| LibreOffice headless print | ⏳ Phase 2 |
| Docker image | ⏳ Phase 2 |
| Deploy target | TBD (Render / Oracle Cloud Free / self-hosted) |

## Architecture (planned)

```
Browser
  ├─ window.Auth.* (frontend interface)        ◀──┐
  ├─ window.DB.*   (frontend interface)        ◀──┤
  │                                                │
  └─ fetch('/api/...') ──────────────────┐         │
                                          ▼         │
                                   Express server   │
                                          │         │
                              ┌───────────┼─────────┘
                              │           │
                       Argon2id pw    Prisma ORM
                              │           │
                              │           ▼
                              │      PostgreSQL
                              │           ▲
                              │           │
                              └─→ JWT + refresh ─→ DB.sessions
```

## Migration plan

1. Build Express skeleton with `/auth/*` endpoints (login, logout,
   refresh, change-password, forgot-password, reset-password).
2. Implement RBAC middleware (`requirePermission('user.create')`).
3. Port each `window.DB.<collection>.*` method to a REST endpoint:
   - `GET    /api/users`        → list
   - `POST   /api/users`        → create  (requires `user.create`)
   - `PATCH  /api/users/:id`    → update  (requires `user.update`)
   - `DELETE /api/users/:id`    → remove  (requires `user.delete`)
   - … same for roles, permissions, branches, departments, tips, services, audit.
4. Add a new frontend adapter (`final_db_remote.js`) that implements
   `window.DB` against `fetch()` instead of `localStorage`. Toggle via
   build flag.
5. Move sessions / password resets / sensitive logs to server-only.
6. Add `/api/print` endpoint (LibreOffice headless) for the DOCX → PDF
   pipeline.
7. Deploy Docker image. CORS-allow the frontend domain.

## Why not now?

The user explicitly asked for a foundation, not a full server. The
priority for Phase 1 is the login + RBAC UI inside the existing client
app. The backend implementation is Phase 2.
