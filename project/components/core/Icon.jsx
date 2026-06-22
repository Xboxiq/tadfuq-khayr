import React from 'react';

/**
 * Icon — Material Symbols Outlined glyph wrapper (`.rs-icon`).
 * Variable-axis font: control size, fill and weight via props.
 */
export function Icon({ name, size = 'md', filled = false, bold = false, className = '', style, ...rest }) {
  const cls = [
    'rs-icon',
    size === 'sm' && 'rs-icon--sm',
    size === 'md' && 'rs-icon--md',
    size === 'lg' && 'rs-icon--lg',
    size === 'xl' && 'rs-icon--xl',
    filled && 'rs-icon--filled',
    bold && 'rs-icon--bold',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} style={style} {...rest}>{name}</span>;
}
