import React from 'react';
import { Icon } from './Icon.jsx';

const sizes = {
  sm: { h: 36, px: 14, fs: 'var(--cc-size-sm)', icon: 16 },
  md: { h: 44, px: 18, fs: 'var(--cc-size-base)', icon: 18 },
  lg: { h: 52, px: 22, fs: 'var(--cc-size-lg)', icon: 20 }
};

const variants = {
  primary: { background: 'var(--cc-primary)', color: 'var(--cc-primary-contrast)', border: '1px solid transparent' },
  accent: { background: 'var(--cc-accent)', color: '#3A1F06', border: '1px solid transparent' },
  secondary: { background: 'var(--cc-surface)', color: 'var(--cc-text)', border: '1px solid var(--cc-border)' },
  soft: { background: 'var(--cc-primary-soft)', color: 'var(--cc-primary)', border: '1px solid transparent' },
  ghost: { background: 'transparent', color: 'var(--cc-primary)', border: '1px solid transparent' },
  danger: { background: 'var(--cc-expense-soft)', color: 'var(--cc-expense)', border: '1px solid transparent' }
};

/** Primary action control. Never uses the display serif — labels are Instrument Sans. */
export function Button({ variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth, disabled, children, style, ...rest }) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [press, setPress] = React.useState(false);
  return (
    <button type="button" disabled={disabled}
      onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--cc-space-2)',
        minHeight: s.h, padding: `0 ${s.px}px`, width: fullWidth ? '100%' : undefined,
        font: 'inherit', fontFamily: 'var(--cc-font-body)', fontSize: s.fs, fontWeight: 'var(--cc-weight-semi)',
        lineHeight: 1, borderRadius: 'var(--cc-radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: 'transform var(--cc-dur-fast) var(--cc-ease), background var(--cc-dur-fast) var(--cc-ease)',
        transform: press && !disabled ? 'scale(0.97)' : 'none', ...v, ...style
      }} {...rest}>
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
