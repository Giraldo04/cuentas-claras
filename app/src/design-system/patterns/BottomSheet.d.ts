import * as React from 'react';
export interface BottomSheetProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  /** Pinned action area, usually a full-width Button. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function BottomSheet(props: BottomSheetProps): JSX.Element | null;
