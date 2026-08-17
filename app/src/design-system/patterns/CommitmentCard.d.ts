import * as React from 'react';
export interface CommitmentCardProps {
  kind?: 'prestamo' | 'financiacion' | 'hipoteca' | 'viaje';
  name: string;
  /** Monthly instalment. */
  monthly: number;
  paid?: number;
  total?: number;
  balance?: number;
  expanded?: boolean;
  onToggle?: () => void;
  /** Rendered when expanded — normally <Escalera />. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function CommitmentCard(props: CommitmentCardProps): JSX.Element;
