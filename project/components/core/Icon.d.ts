import * as React from 'react';

/** Material Symbols Outlined glyph wrapper with variable-axis controls. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols ligature name, e.g. `bolt`, `receipt_long`. */
  name: string;
  /** Glyph size step. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Use the FILL axis (solid glyph). */
  filled?: boolean;
  /** Use weight 700. */
  bold?: boolean;
}

export function Icon(props: IconProps): JSX.Element;
