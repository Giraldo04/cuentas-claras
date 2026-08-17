import * as React from 'react';
export interface NavItem { id: string; label?: string; icon?: string }
/**
 * @startingPoint section="Patrones" subtitle="Bottom nav de 5 con FAB central" viewport="430x120"
 */
export interface BottomNavProps {
  /** Defaults to Inicio · Movimientos · [+] · Bolsillos · Hogar. */
  items?: NavItem[];
  value?: string;
  onChange?: (id: string) => void;
  onFab?: () => void;
  style?: React.CSSProperties;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
