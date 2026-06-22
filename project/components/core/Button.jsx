import React from 'react';

/**
 * Button — the primary action control for the Tadfuq Al-Khayr hub.
 * Wraps the `.rs-btn` recipe: navy-on-white default, brand-gradient
 * primary, ghost and danger variants, three sizes, async busy state.
 */
export function Button({
  variant = 'default',
  size = 'md',
  icon,
  iconEnd,
  busy = false,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'rs-btn',
    variant === 'primary' && 'rs-btn--primary',
    variant === 'ghost' && 'rs-btn--ghost',
    variant === 'danger' && 'rs-btn--danger',
    size === 'sm' && 'rs-btn--sm',
    size === 'lg' && 'rs-btn--lg',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      aria-busy={busy || undefined}
      {...rest}
    >
      {icon && (
        <span className="rs-btn__ico">
          <span className="material-symbols-outlined">{icon}</span>
        </span>
      )}
      {children && <span>{children}</span>}
      {iconEnd && (
        <span className="rs-btn__ico">
          <span className="material-symbols-outlined">{iconEnd}</span>
        </span>
      )}
    </button>
  );
}
