import React from 'react';

/**
 * SaveBadge — autosave status indicator (`.rs-savebadge`). Four states
 * with matching color + animation (saving pulses the dot).
 */
export function SaveBadge({ status = 'idle', className = '', children, ...rest }) {
  const cls = [
    'rs-savebadge',
    status === 'saved' && 'is-saved',
    status === 'saving' && 'is-saving',
    status === 'error' && 'is-error',
    className,
  ].filter(Boolean).join(' ');
  const label = children ?? {
    idle: 'لم يُحفظ بعد',
    saving: 'جاري الحفظ…',
    saved: 'تم الحفظ',
    error: 'تعذّر الحفظ',
  }[status];
  return (
    <span className={cls} {...rest}>
      <span className="rs-savebadge__dot" />
      {label}
    </span>
  );
}
