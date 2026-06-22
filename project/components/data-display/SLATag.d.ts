import * as React from 'react';

/** Case-priority selector pill — standard / urgent / VIP. */
export interface SLATagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Priority level — sets the dot + active fill color. */
  level?: 'standard' | 'urgent' | 'vip';
  /** Filled active state. */
  active?: boolean;
  /** Override the default Arabic label. */
  children?: React.ReactNode;
}

export function SLATag(props: SLATagProps): JSX.Element;
