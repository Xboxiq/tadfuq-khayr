import React from 'react';

/**
 * Input — single-line text input (`.rs-input`). Crimson focus ring,
 * invalid + readonly states baked in.
 */
export function Input({ invalid = false, className = '', ...rest }) {
  const cls = ['rs-input', className].filter(Boolean).join(' ');
  return <input className={cls} aria-invalid={invalid || undefined} {...rest} />;
}
