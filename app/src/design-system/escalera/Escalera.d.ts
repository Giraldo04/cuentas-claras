import * as React from 'react';
export interface EscaleraMonth {
  /** Month label, e.g. "Ago 2026". */
  label: string;
  capital: number;
  interest: number;
  /** Remaining balance after this instalment. */
  balance: number;
}
/**
 * @startingPoint section="Firma" subtitle="La Escalera — amortización mes a mes con simulador" viewport="430x720"
 */
export interface EscaleraProps {
  /** The FULL amortisation schedule — pass every month, not a slice. */
  months: EscaleraMonth[];
  /** Index of the current month; earlier steps render paid (dimmed + check). */
  currentIndex?: number;
  /** Render only a slice of the schedule while projecting over all of it. */
  window?: { from: number; count?: number };
  /** Extra monthly payment being simulated. */
  extraPayment?: number;
  onExtraPaymentChange?: (value: number) => void;
  /** Set false to hide the simulator (e.g. in PDF export). */
  simulate?: boolean;
  style?: React.CSSProperties;
}
export declare function Escalera(props: EscaleraProps): JSX.Element;
