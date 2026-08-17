import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number;
  tone?: 'surface' | 'alt' | 'soft' | 'sunken';
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
