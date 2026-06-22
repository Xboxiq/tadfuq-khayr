import * as React from 'react';

/** Search box with a leading icon. `hero` is the large landing variant. */
export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Large hero size for landing / empty-state search. */
  hero?: boolean;
  /** Leading Material Symbols ligature (defaults to `search`). */
  icon?: string;
}

export function SearchInput(props: SearchInputProps): JSX.Element;
