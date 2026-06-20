# Tadfuq API Contract (foundation)

All endpoints return JSON. Authentication via `Authorization: Bearer <access_token>`
header. Refresh token lives in `HttpOnly Secure SameSite=Strict` cookie.

All mutations are logged to `AuditLog` automatically by middleware.

## Auth

| Method | Path                       | Permission       | Notes |
|--------|----------------------------|------------------|-------|
| POST   | `/auth/login`              | —                | `{username, password}` → `{accessToken, user, mustChangePassword}` + sets refresh cookie |
| POST   | `/auth/refresh`            | (cookie)         | Rotates refresh; revokes old; detects reuse → invalidates all sessions |
| POST   | `/auth/logout`             | authenticated    | Revokes current refresh |
| POST   | `/auth/change-password`    | authenticated    | `{currentPassword, newPassword}` |
| POST   | `/auth/forgot-password`    | —                | `{email}` → emails reset link (Resend or SMTP) |
| POST   | `/auth/reset-password`     | (token)          | `{token, newPassword}` |
| GET    | `/auth/me`                 | authenticated    | Current user + permissions |
| GET    | `/auth/sessions`           | authenticated    | List own sessions; supports force-logout-other |

Rate limits:
- `/auth/login`: 10/min per IP, 3/min per user
- `/auth/forgot-password`: 3/hour per email

## Users

| Method | Path                       | Permission             |
|--------|----------------------------|-----------------------|
| GET    | `/users`                   | `user.read`           |
| GET    | `/users/:id`               | `user.read`           |
| POST   | `/users`                   | `user.create`         |
| PATCH  | `/users/:id`               | `user.update`         |
| DELETE | `/users/:id`               | `user.delete`         |
| POST   | `/users/:id/disable`       | `user.disable`        |
| POST   | `/users/:id/enable`        | `user.disable`        |
| POST   | `/users/:id/reset-password`| `user.reset_password` |
| POST   | `/users/:id/force-logout`  | `user.force_logout`   |
| GET    | `/users/:id/audit`         | `user.read` + `audit.read` |

## Roles & Permissions

| Method | Path                       | Permission     |
|--------|----------------------------|---------------|
| GET    | `/permissions`             | `role.read`   |
| GET    | `/roles`                   | `role.read`   |
| POST   | `/roles`                   | `role.manage` |
| PATCH  | `/roles/:id`               | `role.manage` |
| DELETE | `/roles/:id`               | `role.manage` (system roles rejected) |
| PUT    | `/roles/:id/permissions`   | `role.manage` |

## Branches & Departments

| Method | Path                       | Permission       |
|--------|----------------------------|-----------------|
| GET    | `/branches`                | authenticated   |
| POST   | `/branches`                | `branch.manage` |
| PATCH  | `/branches/:id`            | `branch.manage` |
| DELETE | `/branches/:id`            | `branch.manage` |
| GET    | `/departments`             | authenticated   |
| POST   | `/departments`             | `branch.manage` |
| PATCH  | `/departments/:id`         | `branch.manage` |

## Requests (forms)

| Method | Path                       | Permission        | Scope |
|--------|----------------------------|------------------|-------|
| GET    | `/requests`                | `request.read`   | Filtered by branch/dept per user |
| POST   | `/requests`                | `request.create` | branchId/deptId default to user's |
| PATCH  | `/requests/:id`            | `request.update` | scope-checked |
| DELETE | `/requests/:id`            | `request.delete` | scope-checked |
| POST   | `/requests/:id/approve`    | `request.approve`| scope-checked |
| POST   | `/requests/:id/reject`     | `request.reject` | scope-checked |
| POST   | `/requests/:id/assign`     | `request.assign` | scope-checked |
| POST   | `/requests/:id/print`      | `request.print`  | scope-checked, returns PDF |

## Print Service

| Method | Path                       | Permission       |
|--------|----------------------------|-----------------|
| POST   | `/print/docx`              | `request.print` |

Body: `{ code, data }` → returns `application/pdf`
Pipeline: docxtemplater(template, data) → libreoffice headless → PDF.
Cached for 5 minutes by `hash(code + sortedJson(data))`.

## Audit

| Method | Path                       | Permission     |
|--------|----------------------------|---------------|
| GET    | `/audit`                   | `audit.read`  |
| GET    | `/audit/export.csv`        | `audit.export`|

## Settings

| Method | Path                       | Permission         |
|--------|----------------------------|-------------------|
| GET    | `/settings`                | `settings.read`   |
| PATCH  | `/settings`                | `settings.manage` |

## Reports

| Method | Path                       | Permission       |
|--------|----------------------------|-----------------|
| GET    | `/reports/summary`         | `reports.view`  |
| GET    | `/reports/sla`             | `reports.view`  |
| GET    | `/reports/export.xlsx`     | `reports.export`|

## Errors

Standard shape:
```json
{ "error": "FORBIDDEN", "message": "ليس لديك صلاحية لهذا الإجراء" }
```

Common codes:
- `UNAUTHENTICATED` (401)
- `FORBIDDEN` (403)
- `NOT_FOUND` (404)
- `VALIDATION_ERROR` (422) — includes `details: [...]`
- `RATE_LIMITED` (429) — includes `retryAfter` (seconds)
- `LOCKED` (423) — account locked, includes `retryAfter`
- `INTERNAL` (500)
