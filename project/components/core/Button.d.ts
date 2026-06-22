import * as React from 'react';

/** Primary action button for the Tadfuq Al-Khayr service hub. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` uses the navy→crimson brand gradient. */
  variant?: 'default' | 'primary' | 'ghost' | 'danger';
  /** Control size. */
  size?: 'sm' | 'md' | 'lg';
  /** Material Symbols ligature name rendered before the label. */
  icon?: string;
  /** Material Symbols ligature name rendered after the label. */
  iconEnd?: string;
  /** Show the async spinner and block interaction. */
  busy?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
