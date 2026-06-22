import * as React from 'react';

/** Form field wrapper: label (+required mark), control slot, hint or error. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field label text. */
  label?: React.ReactNode;
  /** Append the required asterisk. */
  required?: boolean;
  /** Helper text shown below the control (hidden when `error` is set). */
  hint?: React.ReactNode;
  /** Error text — replaces the hint and shows the warning glyph. */
  error?: React.ReactNode;
  /** `for` attribute linking the label to the control. */
  htmlFor?: string;
  /** The control (Input, Textarea, Select…). */
  children?: React.ReactNode;
}

export function Field(props: FieldProps): JSX.Element;
