/* ============================================================
   ds-utils.mjs — pure helpers for the Design System library
   ----------------------------------------------------
   Framework-agnostic, side-effect-free functions shared by the
   window.DS components. Kept as an ES module so they can be unit
   tested with `node --test` outside the browser. The browser
   build re-exposes these on window.DS.utils (see ds.jsx).
   ============================================================ */

/** Join class names: strings, arrays, and {class: condition} objects. */
export function cx(...args) {
  const out = [];
  for (const a of args) {
    if (!a) continue;
    if (typeof a === 'string' || typeof a === 'number') out.push(String(a));
    else if (Array.isArray(a)) { const r = cx(...a); if (r) out.push(r); }
    else if (typeof a === 'object') for (const k in a) if (a[k]) out.push(k);
  }
  return out.join(' ');
}

/** Format an integer as Arabic-Iraqi grouped digits. */
export function fmt(n) {
  const v = Number(n) || 0;
  return new Intl.NumberFormat('ar-IQ').format(v);
}

/** Format a fee with the IQD suffix. */
export function fmtIQD(n) {
  return fmt(n) + ' د.ع';
}

/** Sum a list of fee rows ([{amt}]). Ignores non-numeric amounts. */
export function feeTotal(rows) {
  if (!Array.isArray(rows)) return 0;
  return rows.reduce((s, r) => s + (Number(r && r.amt) || 0), 0);
}

/** Department code -> class list for DS.DeptTag. */
export function deptClass(code) {
  const c = String(code || '').toLowerCase().slice(0, 2);
  const known = { cs: 'cs', ct: 'ct', cb: 'cb', ca: 'ca' };
  return cx('e-dept', known[c] && 'e-dept--' + known[c]);
}

/** Semantic state -> badge modifier class. Falls back to neutral (''). */
export function badgeStateClass(state) {
  const map = { ok: 'e-badge--ok', warn: 'e-badge--warn', err: 'e-badge--err', info: 'e-badge--info' };
  return map[state] || '';
}

/** Semantic state -> status-dot modifier class. */
export function statusStateClass(state) {
  const map = { ok: 'e-status--ok', warn: 'e-status--warn', err: 'e-status--err', info: 'e-status--info' };
  return cx('e-status', map[state]);
}

/** Resolve a variant prop against an allow-list, returning a safe modifier. */
export function variantClass(base, value, allowed) {
  if (!value || !allowed.includes(value)) return base;
  return cx(base, base + '--' + value);
}

export default { cx, fmt, fmtIQD, feeTotal, deptClass, badgeStateClass, statusStateClass, variantClass };
