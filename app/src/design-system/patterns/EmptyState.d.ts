import * as React from 'react';
export interface EmptyStateProps {
  icon?: string;
  title: string;
  body?: React.ReactNode;
  /** Usually a single Button. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
