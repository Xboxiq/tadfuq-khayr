import * as React from 'react';

/** Small uppercase mono status pill with optional status dot. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. */
  tone?: 'default' | 'success' | 'warn' | 'err' | 'info' | 'crimson' | 'gold';
  /** Render a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
