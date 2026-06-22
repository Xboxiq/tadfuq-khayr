import React from 'react';

/**
 * IconButton — square, icon-only control (`.rs-iconbtn`).
 * Soft navy tint by default, crimson tint on hover, gold focus ring.
 */
export function IconButton({ icon, size = 'md', bare = false, label, className = '', children, ...rest }) {
  const cls = [
    'rs-iconbtn',
    size === 'sm' && 'rs-iconbtn--sm',
    size === 'lg' && 'rs-iconbtn--lg',
    bare && 'rs-iconbtn--bare',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {icon ? <span className="material-symbols-outlined">{icon}</span> : children}
    </button>
  );
}
