import React from 'react';

/**
 * SLATag — priority selector pill (`.rs-sla`). Three levels: standard,
 * urgent, VIP. Active state fills with the level color (VIP = gold sheen).
 */
export function SLATag({ level = 'standard', active = false, className = '', children, ...rest }) {
  const cls = [
    'rs-sla',
    level === 'urgent' && 'rs-sla--urgent',
    level === 'standard' && 'rs-sla--standard',
    level === 'vip' && 'rs-sla--vip',
    active && 'is-active',
    className,
  ].filter(Boolean).join(' ');
  const label = children ?? { urgent: 'عاجل', standard: 'اعتيادي', vip: 'VIP' }[level];
  return (
    <button className={cls} aria-pressed={active} {...rest}>
      <span className="rs-sla__dot" />
      {label}
    </button>
  );
}
