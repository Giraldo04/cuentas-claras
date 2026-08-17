import * as React from 'react';
export interface KeypadProps {
  /** Receives "0"–"9", "." or "del". */
  onKey?: (key: string) => void;
  style?: React.CSSProperties;
}
export declare function Keypad(props: KeypadProps): JSX.Element;
