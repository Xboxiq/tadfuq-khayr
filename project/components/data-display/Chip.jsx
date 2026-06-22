import React from 'react';

/**
 * Chip — filter / input chip (`.rs-chip`). Pill-shaped, toggles to a
 * filled active state. Pass a department code to color the active fill.
 */
export function Chip({ active = false, section, icon, className = '', children, ...rest }) {
  const cls = [
    'rs-chip',
    section && `rs-chip--${section}`,
    active && 'is-active',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-pressed={active} {...rest}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
}
