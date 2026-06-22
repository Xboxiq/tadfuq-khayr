// =============================================================
// FINAL — shared UI primitives (faithful to the --f-* system)
// Provides components the production app defines elsewhere:
//   • ErrorBoundary   — stops one bad component white-screening the app
//   • ToastProvider   — real toast feedback (success/error/warn/info)
//   • useToast        — push toasts from any screen
//   • ConfirmDialog   — accessible confirm modal (focus-trap, Esc)
//   • ValidationSummary — lists form errors, jumps to the field
// All RTL-first, token-driven, reduced-motion aware.
// =============================================================
(function () {
  const { useState, useEffect, useRef, useCallback } = React;

  /* ---------------- ErrorBoundary ---------------- */
  class ErrorBoundary extends React.Component {
    constructor(p) { super(p); this.state = { err: null }; }
    static getDerivedStateFromError(err) { return { err }; }
    componentDidCatch(err, info) { console.error('[caught by ErrorBoundary]', err, info); }
    render() {
      if (!this.state.err) return this.props.children;
      return React.createElement('div', { className: 'f-errboundary', role: 'alert', dir: 'rtl' },
        React.createElement('div', { className: 'f-errboundary__card' },
          React.createElement('span', { className: 'f-errboundary__ico material-symbols-outlined' }, 'error'),
          React.createElement('h2', null, 'حدث خطأ غير متوقع'),
          React.createElement('p', null, 'تعذّر عرض هذا القسم. تم حفظ بياناتك المدخلة تلقائياً ويمكنك المتابعة.'),
          React.createElement('pre', { className: 'f-errboundary__detail' }, String(this.state.err && this.state.err.message || this.state.err)),
          React.createElement('div', { className: 'f-errboundary__actions' },
            React.createElement('button', { className: 'f-btn f-btn--primary', onClick: () => this.setState({ err: null }) },
              React.createElement('span', { className: 'material-symbols-outlined' }, 'refresh'), ' إعادة المحاولة'),
            React.createElement('button', { className: 'f-btn', onClick: () => location.reload() }, 'تحديث الصفحة')
          )
        )
      );
    }
  }

  /* ---------------- Toasts ---------------- */
  const ToastCtx = React.createContext({ push: () => {} });
  const ICONS = { success: 'check_circle', error: 'error', warn: 'warning', info: 'info' };

  function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const remove = useCallback((id) => setToasts(ts => ts.filter(t => t.id !== id)), []);
    const push = useCallback((t) => {
      const id = Math.random().toString(36).slice(2);
      const toast = { id, kind: t.kind || 'info', title: t.title || '', body: t.body || '', action: t.action || null };
      setToasts(ts => [...ts, toast]);
      const ttl = t.kind === 'error' ? 7000 : 4500;
      setTimeout(() => remove(id), ttl);
      return id;
    }, [remove]);

    return React.createElement(ToastCtx.Provider, { value: { push } },
      children,
      React.createElement('div', { className: 'f-toasts', role: 'region', 'aria-live': 'polite', 'aria-label': 'تنبيهات' },
        toasts.map(t =>
          React.createElement('div', { key: t.id, className: `f-toast f-toast--${t.kind}`, role: t.kind === 'error' ? 'alert' : 'status' },
            React.createElement('span', { className: 'f-toast__ico material-symbols-outlined' }, ICONS[t.kind] || 'info'),
            React.createElement('div', { className: 'f-toast__main' },
              t.title && React.createElement('div', { className: 'f-toast__title' }, t.title),
              t.body && React.createElement('div', { className: 'f-toast__body' }, t.body),
              t.action && React.createElement('button', {
                className: 'f-toast__action',
                onClick: () => { t.action.onClick && t.action.onClick(); remove(t.id); }
              }, t.action.label)
            ),
            React.createElement('button', { className: 'f-toast__close', 'aria-label': 'إغلاق', onClick: () => remove(t.id) },
              React.createElement('span', { className: 'material-symbols-outlined' }, 'close'))
          )
        )
      )
    );
  }
  const useToast = () => React.useContext(ToastCtx);

  /* ---------------- ConfirmDialog ---------------- */
  function ConfirmDialog({ open, danger, icon, title, description, confirmLabel, cancelLabel, onConfirm, onCancel }) {
    const cardRef = useRef(null);
    const prevFocus = useRef(null);

    useEffect(() => {
      if (!open) return;
      prevFocus.current = document.activeElement;
      const card = cardRef.current;
      const focusables = card ? card.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])') : [];
      focusables[focusables.length - 1] && focusables[focusables.length - 1].focus(); // default to safe (cancel)
      const onKey = (e) => {
        if (e.key === 'Escape') { e.preventDefault(); onCancel && onCancel(); }
        if (e.key === 'Tab' && focusables.length) {
          const first = focusables[0], last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('keydown', onKey);
        prevFocus.current && prevFocus.current.focus && prevFocus.current.focus();
      };
    }, [open, onCancel]);

    if (!open) return null;
    return React.createElement('div', { className: 'f-confirm', dir: 'rtl', onMouseDown: (e) => { if (e.target === e.currentTarget) onCancel && onCancel(); } },
      React.createElement('div', {
        className: `f-confirm__card ${danger ? 'is-danger' : ''}`, ref: cardRef,
        role: 'alertdialog', 'aria-modal': 'true', 'aria-labelledby': 'f-confirm-t', 'aria-describedby': 'f-confirm-d'
      },
        React.createElement('span', { className: 'f-confirm__ico material-symbols-outlined' }, icon || (danger ? 'warning' : 'help')),
        React.createElement('h3', { id: 'f-confirm-t', className: 'f-confirm__title' }, title),
        description && React.createElement('p', { id: 'f-confirm-d', className: 'f-confirm__desc' }, description),
        React.createElement('div', { className: 'f-confirm__actions' },
          React.createElement('button', { className: `f-btn ${danger ? 'f-btn--danger' : 'f-btn--primary'}`, onClick: onConfirm }, confirmLabel || 'تأكيد'),
          React.createElement('button', { className: 'f-btn', onClick: onCancel }, cancelLabel || 'إلغاء')
        )
      )
    );
  }

  /* ---------------- ValidationSummary ---------------- */
  function ValidationSummary({ errors }) {
    const keys = Object.keys(errors || {});
    if (!keys.length) return null;
    const jump = (k) => {
      const el = document.querySelector(`[data-fk="${k}"]`);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); const inp = el.querySelector('input,select,textarea'); inp && inp.focus(); }
    };
    return React.createElement('div', { className: 'f-valsum', role: 'alert', dir: 'rtl' },
      React.createElement('div', { className: 'f-valsum__head' },
        React.createElement('span', { className: 'material-symbols-outlined' }, 'error'),
        `${keys.length} حقل بحاجة إلى مراجعة قبل الإرسال`
      ),
      React.createElement('ul', { className: 'f-valsum__list' },
        keys.map(k => React.createElement('li', { key: k },
          React.createElement('button', { type: 'button', onClick: () => jump(k) },
            React.createElement('span', { className: 'material-symbols-outlined' }, 'arrow_back'),
            errors[k])
        ))
      )
    );
  }

  Object.assign(window, { ErrorBoundary, ToastProvider, useToast, ConfirmDialog, ValidationSummary, FieldError });

  /* ---------------- Validation helpers ---------------- */
  // Each validator returns '' when valid, or an Arabic error message.
  const Validate = {
    required: (v) => (v == null || String(v).trim() === '') ? 'هذا الحقل مطلوب' : '',
    phoneIQ: (v) => {
      if (!v) return '';
      const digits = String(v).replace(/[\s-]/g, '');
      return /^(?:07\d{9}|\+9647\d{9})$/.test(digits) ? '' : 'رقم هاتف عراقي غير صحيح (مثال: 07XXXXXXXXX)';
    },
    digits: (v) => {
      if (v == null || v === '') return '';
      return /^\d+$/.test(String(v).trim()) ? '' : 'يُسمح بالأرقام فقط';
    },
    minLen: (n) => (v) => (v && String(v).trim().length < n) ? `يجب ألا يقل عن ${n} أحرف` : '',
  };

  // Run a rules map { fieldKey: [validatorFn, ...] } against form values.
  // Returns { fieldKey: firstErrorMessage } for every failing field.
  function validateForm(form, rules) {
    const errs = {};
    Object.keys(rules || {}).forEach((k) => {
      const fns = rules[k] || [];
      for (const fn of fns) {
        const msg = fn(form ? form[k] : undefined);
        if (msg) { errs[k] = msg; break; }
      }
    });
    return errs;
  }
  Object.assign(window, { Validate, validateForm });

  /* ---------------- FieldError ---------------- */
  function FieldError({ msg, id }) {
    if (!msg) return null;
    return React.createElement('span', { className: 'ff-err', role: 'alert', id },
      React.createElement('span', { className: 'material-symbols-outlined' }, 'error'),
      msg
    );
  }

  /* ---------------- EmptyState ---------------- */
  // Standard "nothing here" block: icon + title + line + optional action.
  // Use for filtered lists that return zero, or not-yet-populated views.
  function EmptyState({ icon, title, body, actionLabel, onAction, compact }) {
    return React.createElement('div', { className: `f-empty ${compact ? 'is-compact' : ''}`, role: 'status' },
      React.createElement('span', { className: 'f-empty__ico material-symbols-outlined' }, icon || 'inbox'),
      title && React.createElement('div', { className: 'f-empty__title' }, title),
      body && React.createElement('p', { className: 'f-empty__body' }, body),
      actionLabel && React.createElement('button', { className: 'f-btn f-btn--sm', onClick: onAction }, actionLabel)
    );
  }

  Object.assign(window, { FieldError, EmptyState });
})();
