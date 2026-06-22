import * as React from 'react';

/** Square icon-only button — topbar actions, toolbars, list rows. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Material Symbols ligature name. */
  icon?: string;
  /** Control size. */
  size?: 'sm' | 'md' | 'lg';
  /** Transparent background until hover. */
  bare?: boolean;
  /** Accessible label (also the tooltip). */
  label?: string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
