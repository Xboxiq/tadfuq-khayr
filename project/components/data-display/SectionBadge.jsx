import React from 'react';

/**
 * SectionBadge — the CS / CB / CT / CA department square (`.rs-secbadge`).
 * Background is fixed per-department so a badge always reads as its section.
 */
export function SectionBadge({ section, className = '', children, ...rest }) {
  const cls = [
    'rs-secbadge',
    section === 'CS' && 'rs-secbadge--CS',
    section === 'CB' && 'rs-secbadge--CB',
    section === 'CT' && 'rs-secbadge--CT',
    section === 'CA' && 'rs-secbadge--CA',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children ?? section}</span>;
}
