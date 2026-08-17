import * as React from 'react';
export interface ProgressBarProps {
  value: number;
  max?: number;
  tone?: 'primary' | 'savings' | 'debt' | 'accent' | 'warning' | 'income';
  height?: number;
  label?: React.ReactNode;
  /** Right-aligned caption, usually "8 de 24 cuotas". */
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
