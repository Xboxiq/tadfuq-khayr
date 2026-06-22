import * as React from 'react';

/** Pill-shaped filter / input chip with a toggleable active state. */
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Filled active state. */
  active?: boolean;
  /** Department code — colors the active fill to match the section. */
  section?: 'CS' | 'CB' | 'CT' | 'CA';
  /** Material Symbols ligature name shown before the label. */
  icon?: string;
  children?: React.ReactNode;
}

export function Chip(props: ChipProps): JSX.Element;
