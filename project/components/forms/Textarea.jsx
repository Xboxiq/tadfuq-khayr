import React from 'react';

/** Textarea — multi-line notes control (`.rs-textarea`). */
export function Textarea({ className = '', ...rest }) {
  const cls = ['rs-textarea', className].filter(Boolean).join(' ');
  return <textarea className={cls} {...rest} />;
}
