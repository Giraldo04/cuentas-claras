import * as React from 'react';
export interface Member { id: string; name: string; color?: string; isChild?: boolean }
export interface WhoPickerProps {
  members: Member[];
  value?: string;
  onChange?: (id: string) => void;
  /** Defaults to "¿Quién pagó?"; use "¿Para quién?" when picking a spend destination. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function WhoPicker(props: WhoPickerProps): JSX.Element;
