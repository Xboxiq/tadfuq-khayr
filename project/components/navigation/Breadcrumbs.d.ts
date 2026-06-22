import * as React from 'react';

export interface Crumb {
  /** Crumb label. */
  label: React.ReactNode;
  /** Link target (ignored for the last crumb). */
  href?: string;
  /** Click handler for SPA navigation. */
  onClick?: (e: React.MouseEvent) => void;
}

/** Breadcrumb trail — the last item renders as the bold current page. */
export interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
