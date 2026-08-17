import * as React from 'react';
export interface StatCardProps {
  label: string;
  value: number;
  tone?: 'income' | 'expense' | 'savings' | 'debt' | 'ant' | 'neutral';
  icon?: string;
  /** Short comparison line, e.g. "12% menos que en julio". */
  delta?: React.ReactNode;
  currency?: string;
  style?: React.CSSProperties;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
