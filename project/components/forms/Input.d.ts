import * as React from 'react';

/** Single-line text input with crimson focus ring and invalid state. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Apply the invalid styling (sets aria-invalid). */
  invalid?: boolean;
}

export function Input(props: InputProps): JSX.Element;
