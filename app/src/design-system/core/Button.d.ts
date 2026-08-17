import * as React from 'react';
/**
 * @startingPoint section="Core" subtitle="Botones: primario, acento, suave, fantasma" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'soft' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown before the label. */
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
