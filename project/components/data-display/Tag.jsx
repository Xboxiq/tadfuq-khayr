import React from 'react';

/**
 * Tag — small caps status pill (`.rs-tag`). Mono, uppercase, with an
 * optional leading status dot. Tones map to the semantic + brand colors.
 */
export function Tag({ tone = 'default', dot = false, className = '', children, ...rest }) {
  const cls = [
    'rs-tag',
    tone === 'success' && 'rs-tag--success',
    tone === 'warn' && 'rs-tag--warn',
    tone === 'err' && 'rs-tag--err',
    tone === 'info' && 'rs-tag--info',
    tone === 'crimson' && 'rs-tag--crimson',
    tone === 'gold' && 'rs-tag--gold',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="rs-tag__dot" />}
      {children}
    </span>
  );
}
