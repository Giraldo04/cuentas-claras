import * as React from 'react';
export interface DonutSegment { value: number; color: string; label?: string }
export interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  /** Uppercase caption under the centre figure. */
  centerLabel?: React.ReactNode;
  centerValue?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DonutChart(props: DonutChartProps): JSX.Element;
