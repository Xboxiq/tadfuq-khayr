import * as React from 'react';

/**
 * Department code square (CS / CB / CT / CA) with the fixed section color.
 * Use anywhere a row, chart slice or chip represents a department.
 */
export interface SectionBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Department code — sets the background color. */
  section: 'CS' | 'CB' | 'CT' | 'CA';
  /** Override the label (defaults to the section code). */
  children?: React.ReactNode;
}

export function SectionBadge(props: SectionBadgeProps): JSX.Element;
