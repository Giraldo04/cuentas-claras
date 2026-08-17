import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  name: string;
  /** Accessible label — required, the button has no visible text. */
  label: string;
  tone?: 'default' | 'surface' | 'soft';
  size?: number;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
