import * as React from 'react';
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Lucide icon name in kebab-case, e.g. "piggy-bank". */
  name: string;
  size?: number;
  /** Brand default is 1.75. */
  strokeWidth?: number;
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
