import React from 'react';

/**
 * Tabs — underline tab strip (`.rs-tabs`). Pass an array of items and the
 * active key; the active tab gets a crimson underline. Items may carry a
 * count badge.
 */
export function Tabs({ items = [], value, onChange, className = '' }) {
  const cls = ['rs-tabs', className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="tablist">
      {items.map((it) => (
        <button
          key={it.key}
          role="tab"
          aria-selected={value === it.key}
          className={`rs-tabs__item ${value === it.key ? 'is-active' : ''}`}
          onClick={() => onChange && onChange(it.key)}
        >
          {it.icon && <span className="material-symbols-outlined">{it.icon}</span>}
          {it.label}
          {it.badge != null && <span className="rs-tabs__badge">{it.badge}</span>}
        </button>
      ))}
    </div>
  );
}
