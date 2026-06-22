import React from 'react';

/**
 * Breadcrumbs — trail of links (`.rs-crumbs`). Pass items; the last one
 * renders as the bold current page. Separator is a chevron (RTL-aware).
 */
export function Breadcrumbs({ items = [], className = '' }) {
  const cls = ['rs-crumbs', className].filter(Boolean).join(' ');
  return (
    <nav className={cls} aria-label="breadcrumb">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? (
              <span className="rs-crumbs__current" aria-current="page">{it.label}</span>
            ) : (
              <a href={it.href || '#'} onClick={it.onClick}>{it.label}</a>
            )}
            {!last && <span className="rs-crumbs__sep material-symbols-outlined">chevron_left</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
