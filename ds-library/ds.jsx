/* ============================================================
   ds.jsx — Tadfuq Al-Khayr Unified Component Library (window.DS)
   ----------------------------------------------------
   ONE place for every UI primitive. React-via-CDN (no build):
   reads global window.React / window.ReactDOM, attaches the
   library to window.DS. Styled exclusively by the enterprise
   tokens (.e-) + the "new soul" refinement (ds-theme.css).

   Rule of the refactor: all UI routes through these components.
   No screen re-implements a primitive; no raw f-* classes.

   Pure helpers mirror ds-utils.mjs (unit-tested with node:test).
   ============================================================ */
(function (global) {
  const React = global.React;
  const ReactDOM = global.ReactDOM;
  const { useState, useEffect, useRef, useCallback, createContext, useContext } = React;
  const h = React.createElement;

  /* ---------------- pure helpers (mirror ds-utils.mjs) ---------------- */
  function cx(...args) {
    const out = [];
    for (const a of args) {
      if (!a) continue;
      if (typeof a === 'string' || typeof a === 'number') out.push(String(a));
      else if (Array.isArray(a)) { const r = cx(...a); if (r) out.push(r); }
      else if (typeof a === 'object') for (const k in a) if (a[k]) out.push(k);
    }
    return out.join(' ');
  }
  const fmt = (n) => new Intl.NumberFormat('ar-IQ').format(Number(n) || 0);
  const fmtIQD = (n) => fmt(n) + ' د.ع';
  const feeTotal = (rows) => Array.isArray(rows) ? rows.reduce((s, r) => s + (Number(r && r.amt) || 0), 0) : 0;
  const deptClass = (code) => {
    const c = String(code || '').toLowerCase().slice(0, 2);
    const k = { cs: 'cs', ct: 'ct', cb: 'cb', ca: 'ca' };
    return cx('e-dept', k[c] && 'e-dept--' + k[c]);
  };
  const badgeStateClass = (s) => ({ ok: 'e-badge--ok', warn: 'e-badge--warn', err: 'e-badge--err', info: 'e-badge--info' }[s] || '');
  const statusStateClass = (s) => cx('e-status', { ok: 'e-status--ok', warn: 'e-status--warn', err: 'e-status--err', info: 'e-status--info' }[s]);
  const variantClass = (base, value, allowed) => (!value || !allowed.includes(value)) ? base : cx(base, base + '--' + value);

  /* ---------------- Icon ---------------- */
  function Icon({ name, className, style }) {
    return h('span', { className: cx('e-i', className), style, 'aria-hidden': true }, name);
  }

  /* ---------------- Button / IconButton ---------------- */
  function Button({ variant, size, block, icon, iconEnd, loading, disabled, children, className, ...rest }) {
    return h('button', {
      className: cx('e-btn',
        variantClass('e-btn', variant, ['primary', 'ghost', 'danger', 'subtle']).replace('e-btn ', '') && variant && 'e-btn--' + variant,
        size && 'e-btn--' + size, block && 'e-btn--block', className),
      disabled: disabled || loading, ...rest,
    },
      loading ? h(Spinner, { size: 'sm' }) : (icon ? h(Icon, { name: icon }) : null),
      children != null ? h('span', null, children) : null,
      iconEnd ? h(Icon, { name: iconEnd }) : null);
  }
  function IconButton({ icon, size, label, className, ...rest }) {
    return h('button', { className: cx('e-iconbtn', size && 'e-iconbtn--' + size, className), 'aria-label': label, ...rest },
      h(Icon, { name: icon }));
  }

  /* ---------------- Card + SectionHeader ---------------- */
  function Card({ title, sub, icon, actions, footer, hover, className, bodyClassName, children }) {
    return h('div', { className: cx('e-card', hover && 'e-card--hover', className) },
      (title || actions) && h('div', { className: 'e-card__head' },
        icon && h(Icon, { name: icon, style: { color: 'var(--text-muted)' } }),
        title && h('div', null,
          h('div', { className: 'e-card__title' }, title),
          sub && h('div', { className: 'e-card__sub' }, sub)),
        actions && h('div', { style: { marginInlineStart: 'auto', display: 'flex', gap: 'var(--sp-2)' } }, actions)),
      h('div', { className: cx('e-card__body', bodyClassName) }, children),
      footer && h('div', { className: 'e-card__foot' }, footer));
  }
  function SectionHeader({ title, sub, action }) {
    return h('div', { className: 'e-section__head' },
      h('h2', null, title),
      sub && h('span', { className: 'e-text-muted', style: { fontSize: 'var(--fs-sm)' } }, sub),
      h('span', { className: 'e-section__spacer' }),
      action);
  }

  /* ---------------- Form: Field / Input / Select / Textarea / Checkbox / Switch ---------------- */
  function Field({ label, required, optional, error, help, full, children }) {
    return h('div', { className: cx('e-field', error && 'is-invalid'), style: full ? { gridColumn: '1 / -1' } : null },
      label && h('label', { className: 'e-label' }, label,
        required && h('span', { className: 'e-label__req' }, '*'),
        optional && h('span', { className: 'e-label__opt' }, ' (اختياري)')),
      children,
      help && h('span', { className: 'e-hint' }, help),
      error && h('span', { className: 'e-error' }, h(Icon, { name: 'error' }), error));
  }
  function Input({ icon, mono, className, ...rest }) {
    const input = h('input', { className: cx('e-input', mono && 'e-input--mono', className), ...rest });
    if (!icon) return input;
    return h('div', { className: 'e-inputwrap' }, h(Icon, { name: icon }), input);
  }
  function Select({ options, className, children, ...rest }) {
    return h('select', { className: cx('e-select', className), ...rest },
      options ? options.map((o, i) => {
        const val = typeof o === 'object' ? o.value : o;
        const lab = typeof o === 'object' ? o.label : o;
        return h('option', { key: i, value: val }, lab);
      }) : children);
  }
  function Textarea({ className, ...rest }) { return h('textarea', { className: cx('e-textarea', className), ...rest }); }
  function Checkbox({ label, type, ...rest }) {
    return h('label', { className: 'e-check' }, h('input', { type: type || 'checkbox', ...rest }), label && h('span', null, label));
  }
  function Switch({ label, ...rest }) {
    return h('label', { className: 'e-switch' }, h('input', { type: 'checkbox', ...rest }), h('span', { className: 'e-switch__t' }), label && h('span', null, label));
  }
  function SearchInput({ value, onChange, placeholder, kbd, className }) {
    return h('label', { className: cx('e-search', className) },
      h(Icon, { name: 'search' }),
      h('input', { value, onChange, placeholder, 'aria-label': placeholder || 'بحث' }),
      kbd && h('span', { className: 'e-kbd' }, kbd));
  }

  /* ---------------- Badge / Status / DeptTag / Chip ---------------- */
  function Badge({ tone, icon, children, className }) {
    return h('span', { className: cx('e-badge', badgeStateClass(tone), className) }, icon && h(Icon, { name: icon }), children);
  }
  function Status({ state, children }) { return h('span', { className: statusStateClass(state) }, children); }
  function DeptTag({ section, children }) { return h('span', { className: deptClass(section) }, children); }
  function Chip({ active, onRemove, onClick, children }) {
    return h('button', { className: cx('e-chip', active && 'is-active'), onClick },
      children, onRemove && h('span', { className: 'e-chip__x', onClick: (e) => { e.stopPropagation(); onRemove(); } }, h(Icon, { name: 'close' })));
  }

  /* ---------------- StatCard (KPI) ---------------- */
  function StatCard({ label, value, unit, delta, dir }) {
    return h('div', { className: 'e-kpi' },
      h('span', { className: 'e-kpi__label' }, label),
      h('div', { className: 'e-kpi__row' },
        h('span', { className: 'e-kpi__value' }, value),
        unit && h('span', { className: 'e-kpi__unit' }, unit),
        delta && h('span', { className: cx('e-kpi__delta', dir === 'down' ? 'e-kpi__delta--down' : 'e-kpi__delta--up') },
          h(Icon, { name: dir === 'down' ? 'trending_down' : 'trending_up' }), delta)));
  }

  /* ---------------- DataTable ---------------- */
  function DataTable({ columns, rows, empty, rowKey }) {
    if (!rows || !rows.length) return empty || h(Empty, { icon: 'inbox', title: 'لا توجد بيانات' });
    return h('div', { className: 'e-tablewrap' },
      h('table', { className: 'e-table' },
        h('thead', null, h('tr', null, columns.map((c, i) =>
          h('th', { key: i, className: c.align === 'end' ? 'e-num' : null }, c.label)))),
        h('tbody', null, rows.map((r, ri) =>
          h('tr', { key: rowKey ? r[rowKey] : ri }, columns.map((c, ci) =>
            h('td', { key: ci, className: c.align === 'end' ? 'e-num' : null },
              c.render ? c.render(r) : r[c.key])))))));
  }

  /* ---------------- Tabs / SegmentedControl ---------------- */
  function Tabs({ items, value, onChange }) {
    return h('div', { className: 'e-tabs', role: 'tablist' },
      items.map((it) => h('button', {
        key: it.key, role: 'tab', 'aria-selected': value === it.key,
        className: cx('e-tab', value === it.key && 'is-active'),
        onClick: () => onChange && onChange(it.key),
      }, it.icon && h(Icon, { name: it.icon }), it.label,
        it.count != null && h('span', { className: 'e-nav__count', style: { marginInlineStart: 6 } }, it.count))));
  }
  function SegmentedControl({ options, value, onChange }) {
    return h('div', { className: 'e-tabs', style: { border: 0, gap: 'var(--sp-2)', flexWrap: 'wrap' } },
      options.map((o) => {
        const val = typeof o === 'object' ? o.value : o;
        const lab = typeof o === 'object' ? o.label : o;
        return h(Chip, { key: val, active: value === val, onClick: () => onChange && onChange(val) }, lab);
      }));
  }

  /* ---------------- Breadcrumb / Pager ---------------- */
  function Breadcrumb({ items }) {
    return h('nav', { className: 'e-crumbs', 'aria-label': 'مسار' },
      items.map((it, i) => h(React.Fragment, { key: i },
        i > 0 && h(Icon, { name: 'chevron_left', className: 'e-crumbs__sep' }),
        it.current || i === items.length - 1
          ? h('span', { className: 'e-crumbs__current' }, it.label)
          : h('a', { href: it.href || '#', onClick: it.onClick }, it.label))));
  }
  function Pager({ page, pages, onChange }) {
    const nums = [];
    for (let i = 1; i <= Math.min(pages, 5); i++) nums.push(i);
    return h('div', { className: 'e-pager' },
      h('button', { className: 'e-pager__btn', disabled: page <= 1, onClick: () => onChange(page - 1), 'aria-label': 'السابق' }, h(Icon, { name: 'chevron_right' })),
      nums.map((n) => h('button', { key: n, className: cx('e-pager__btn', n === page && 'is-active'), onClick: () => onChange(n) }, n)),
      pages > 5 && h('span', { className: 'e-text-muted', style: { padding: '0 4px' } }, '…'),
      h('button', { className: 'e-pager__btn', disabled: page >= pages, onClick: () => onChange(page + 1), 'aria-label': 'التالي' }, h(Icon, { name: 'chevron_left' })));
  }

  /* ---------------- Alert / Empty / Skeleton / Spinner ---------------- */
  function Alert({ tone, title, icon, children }) {
    const ic = icon || { ok: 'check_circle', warn: 'schedule', err: 'report', info: 'info' }[tone] || 'info';
    return h('div', { className: cx('e-alert', tone && 'e-alert--' + tone), role: tone === 'err' ? 'alert' : null },
      h('span', { className: 'e-alert__icon' }, h(Icon, { name: ic })),
      h('div', { className: 'e-alert__body' },
        title && h('div', { className: 'e-alert__title' }, title), children));
  }
  function Empty({ icon, title, text, action }) {
    return h('div', { className: 'e-empty' },
      h('span', { className: 'e-empty__icon' }, h(Icon, { name: icon || 'inbox' })),
      h('div', { className: 'e-empty__title' }, title),
      text && h('p', { className: 'e-empty__text' }, text),
      action);
  }
  function Skeleton({ w, h: hh, r }) {
    return h('div', { className: 'e-skel', style: { width: w || '100%', height: hh || '0.8em', borderRadius: r || 'var(--r-xs)' } });
  }
  function Spinner({ size }) { return h('span', { className: cx('e-spinner', size && 'e-spinner--' + size), role: 'status', 'aria-label': 'جارٍ التحميل' }); }
  function Avatar({ name, src, size }) {
    return h('span', { className: cx('e-avatar', size && 'e-avatar--' + size) }, src ? h('img', { src, alt: '' }) : (name || '').slice(0, 2));
  }
  function Progress({ value }) { return h('div', { className: 'e-progress' }, h('div', { className: 'e-progress__bar', style: { width: (value || 0) + '%' } })); }

  /* ---------------- Menu ---------------- */
  function Menu({ items, label }) {
    return h('div', { className: 'e-menu', role: 'menu' },
      label && h('div', { className: 'e-menu__label' }, label),
      items.map((it, i) => it.sep
        ? h('div', { key: i, className: 'e-menu__sep' })
        : h('button', { key: i, role: 'menuitem', className: cx('e-menu__item', it.danger && 'e-menu__item--danger'), onClick: it.onClick },
          it.icon && h(Icon, { name: it.icon }), it.label)));
  }

  /* ---------------- Modal + ConfirmDialog (portal, Esc, scrim) ---------------- */
  function Modal({ open, onClose, title, icon, footer, size, children }) {
    useEffect(() => {
      if (!open) return;
      const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }, [open, onClose]);
    if (!open) return null;
    const node = h('div', { className: 'e-scrim', onMouseDown: (e) => { if (e.target === e.currentTarget) onClose && onClose(); } },
      h('div', { className: 'e-modal', role: 'dialog', 'aria-modal': 'true', style: size === 'lg' ? { width: 'min(720px,100%)' } : null },
        (title || icon) && h('div', { className: 'e-modal__head' },
          icon && h(Icon, { name: icon, style: { color: 'var(--accent)' } }),
          h('div', { className: 'e-modal__title' }, title),
          h(IconButton, { icon: 'close', size: 'sm', label: 'إغلاق', onClick: onClose })),
        h('div', { className: 'e-modal__body' }, children),
        footer && h('div', { className: 'e-modal__foot' }, footer)));
    return ReactDOM.createPortal(node, document.body);
  }
  function ConfirmDialog({ open, title, description, confirmLabel, cancelLabel, danger, icon, onConfirm, onCancel }) {
    return h(Modal, {
      open, onClose: onCancel, title: title || 'تأكيد', icon: icon || (danger ? 'warning' : 'help'),
      footer: [
        h(Button, { key: 'c', variant: danger ? 'danger' : 'primary', onClick: onConfirm }, confirmLabel || 'تأكيد'),
        h(Button, { key: 'x', variant: 'ghost', onClick: onCancel }, cancelLabel || 'إلغاء'),
      ],
    }, h('p', { style: { color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' } }, description));
  }

  /* ---------------- Toast (context provider + hook + viewport) ---------------- */
  const ToastCtx = createContext({ push: () => {}, dismiss: () => {} });
  function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const dismiss = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);
    const push = useCallback((t) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((cur) => [...cur, { id, ...t }]);
      const dur = t.duration || 4000;
      if (dur > 0) setTimeout(() => dismiss(id), dur);
      return id;
    }, [dismiss]);
    const view = h('div', { className: 'ds-toaster', style: { position: 'fixed', insetBlockEnd: 'var(--sp-5)', insetInlineStart: 'var(--sp-5)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', zIndex: 'var(--z-toast)' } },
      toasts.map((t) => h('div', {
        key: t.id, role: 'status',
        className: 'e-alert',
        style: { boxShadow: 'var(--shadow-lg)', minWidth: 280, background: 'var(--material-thick)', backdropFilter: 'blur(var(--material-blur))', WebkitBackdropFilter: 'blur(var(--material-blur))' },
      },
        h('span', { className: 'e-alert__icon', style: { color: 'var(--' + ({ success: 'ok', error: 'err', warn: 'warn' }[t.kind] || 'info') + ')' } },
          h(Icon, { name: { success: 'check_circle', error: 'report', warn: 'warning' }[t.kind] || 'info' })),
        h('div', { className: 'e-alert__body' },
          t.title && h('div', { className: 'e-alert__title' }, t.title),
          t.body && h('div', { style: { color: 'var(--text-secondary)' } }, t.body)),
        h(IconButton, { icon: 'close', size: 'sm', label: 'إغلاق', onClick: () => dismiss(t.id) }))));
    return h(ToastCtx.Provider, { value: { push, dismiss } },
      children,
      ReactDOM.createPortal(view, document.body));
  }
  function useToast() { return useContext(ToastCtx); }

  /* ---------------- App-shell primitives (for consistent layout) ---------------- */
  function PageHead({ title, sub, actions }) {
    return h('div', { className: 'e-pagehead' },
      h('div', { className: 'e-pagehead__titles' }, h('h1', null, title), sub && h('p', { className: 'e-pagehead__sub' }, sub)),
      actions && h('div', { className: 'e-pagehead__actions' }, actions));
  }
  function Toolbar({ children }) { return h('div', { className: 'e-toolbar' }, children); }

  /* ---------------- publish ---------------- */
  global.DS = {
    utils: { cx, fmt, fmtIQD, feeTotal, deptClass, badgeStateClass, statusStateClass, variantClass },
    cx, fmt, fmtIQD,
    Icon, Button, IconButton, Card, SectionHeader,
    Field, Input, Select, Textarea, Checkbox, Switch, SearchInput,
    Badge, Status, DeptTag, Chip, StatCard,
    DataTable, Tabs, SegmentedControl, Breadcrumb, Pager,
    Alert, Empty, Skeleton, Spinner, Avatar, Progress, Menu,
    Modal, ConfirmDialog, ToastProvider, useToast,
    PageHead, Toolbar,
  };
})(window);
