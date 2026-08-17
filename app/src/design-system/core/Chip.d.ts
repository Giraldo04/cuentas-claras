import * as React from 'react';
export interface ChipProps {
  tone?: 'neutral' | 'primary' | 'income' | 'expense' | 'savings' | 'debt' | 'warning' | 'ant';
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** Filled (inverted) state for filter chips. */
  selected?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Chip(props: ChipProps): JSX.Element;
