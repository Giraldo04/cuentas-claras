import * as React from 'react';
export interface MemberAvatarProps {
  name: string;
  /** Member colour; falls back to the brand primary. */
  color?: string;
  size?: number;
  /** Children get a dashed ring — they are a spend destination, never a payer. */
  isChild?: boolean;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function MemberAvatar(props: MemberAvatarProps): JSX.Element;
