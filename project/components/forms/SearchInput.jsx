import React from 'react';

/**
 * SearchInput — icon + input combo (`.rs-search`). The `hero` size is the
 * big landing-page search; default size suits topbars and panels.
 */
export function SearchInput({ hero = false, icon = 'search', className = '', ...rest }) {
  const cls = ['rs-search', hero && 'rs-search--hero', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <span className="rs-search__ico">
        <span className="material-symbols-outlined">{icon}</span>
      </span>
      <input className="rs-search__input" type="search" {...rest} />
    </div>
  );
}
