import * as React from 'react';

/** Autosave status indicator for long forms. */
export interface SaveBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Current save state. `saving` pulses the dot. */
  status?: 'idle' | 'saving' | 'saved' | 'error';
  /** Override the default Arabic label. */
  children?: React.ReactNode;
}

export function SaveBadge(props: SaveBadgeProps): JSX.Element;
