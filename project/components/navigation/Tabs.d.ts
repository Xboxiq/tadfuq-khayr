import * as React from 'react';

export interface TabItem {
  /** Unique key returned by `onChange`. */
  key: string;
  /** Tab label. */
  label: React.ReactNode;
  /** Optional Material Symbols ligature shown before the label. */
  icon?: string;
  /** Optional count badge. */
  badge?: number | string;
}

/** Underline tab strip with crimson active marker and optional count badges. */
export interface TabsProps {
  /** Tabs to render. */
  items: TabItem[];
  /** Active tab key. */
  value: string;
  /** Called with the new key on click. */
  onChange?: (key: string) => void;
  className?: string;
}

export function Tabs(props: TabsProps): JSX.Element;
