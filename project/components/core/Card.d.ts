import * as React from 'react';

/** Generic surface container — the base for every panel in the hub. */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Padding + radius step. */
  size?: 'md' | 'lg' | 'xl';
  /** Add the hover-lift affordance. */
  interactive?: boolean;
  /** Translucent backdrop-blur glass treatment. */
  glass?: boolean;
  /** 3px navy→crimson→gold sweep along the top edge. */
  brandRim?: boolean;
  /** Element tag to render. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
