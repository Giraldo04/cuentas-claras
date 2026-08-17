import * as React from 'react';
export interface PocketCardProps {
  /** The pocket's own emoji — the one place emoji are allowed. */
  emoji?: string;
  name: string;
  saved: number;
  goal: number;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function PocketCard(props: PocketCardProps): JSX.Element;
