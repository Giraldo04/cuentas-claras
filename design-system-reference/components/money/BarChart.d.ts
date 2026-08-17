import * as React from 'react';
export interface BarDatum { label: string; value: number }
export interface BarChartProps {
  data: BarDatum[];
  height?: number;
  color?: string;
  /** Index rendered at full opacity — usually the current month. */
  highlightIndex?: number;
  style?: React.CSSProperties;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
