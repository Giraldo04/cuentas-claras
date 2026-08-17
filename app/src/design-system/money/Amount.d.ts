import * as React from 'react';
/**
 * @startingPoint section="Dinero" subtitle="Cifra con tabular-nums, signo y moneda atenuada" viewport="700x160"
 */
export interface AmountProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  /** Font size in px. Hero amounts run 32–44. */
  size?: number;
  tone?: 'income' | 'expense' | 'savings' | 'debt' | 'ant' | 'neutral' | 'muted';
  currency?: string;
  /** Force a leading + on positive values. */
  showSign?: boolean;
  decimals?: boolean;
  weight?: string;
}
export declare function Amount(props: AmountProps): JSX.Element;
