import React from 'react';

/**
 * Card — the generic surface (`.rs-card`). Supports size steps, an
 * interactive hover-lift, a translucent glass treatment, and a
 * brand-sweep top rim.
 */
export function Card({
  size = 'md',
  interactive = false,
  glass = false,
  brandRim = false,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'rs-card',
    size === 'lg' && 'rs-card--lg',
    size === 'xl' && 'rs-card--xl',
    interactive && 'rs-card--interactive',
    glass && 'rs-card--glass',
    brandRim && 'rs-card--brand-rim',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
