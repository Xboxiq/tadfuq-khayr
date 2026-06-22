import React from 'react';

/**
 * Field — label + control + hint/error wrapper (`.rs-field`). Compose
 * any control (Input, Textarea, Select) as children.
 */
export function Field({ label, required = false, hint, error, htmlFor, className = '', children, ...rest }) {
  const cls = ['rs-field', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {label && (
        <label className={`rs-field__lbl ${required ? 'rs-field__lbl-required' : ''}`} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {children}
      {error ? (
        <span className="rs-field__err">{error}</span>
      ) : hint ? (
        <span className="rs-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}
