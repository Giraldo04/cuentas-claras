import * as React from 'react';
export interface MovementRowProps {
  /** Lucide icon for the category. */
  icon?: string;
  title: string;
  /** Date / category caption. */
  meta?: string;
  value: number;
  tone?: 'income' | 'expense' | 'savings' | 'debt' | 'ant' | 'neutral';
  /** Who paid — appended to the meta line. */
  member?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function MovementRow(props: MovementRowProps): JSX.Element;
