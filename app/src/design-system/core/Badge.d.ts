import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'income' | 'expense' | 'warning' | 'debt' | 'savings';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
