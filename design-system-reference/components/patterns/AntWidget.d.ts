import * as React from 'react';
export interface AntWidgetProps {
  total: number;
  count?: number;
  /** Tangible translation, e.g. "Eso es una cuota de tu viaje a Cartagena." Always kind, never guilt-tripping. */
  equivalence?: React.ReactNode;
  period?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function AntWidget(props: AntWidgetProps): JSX.Element;
