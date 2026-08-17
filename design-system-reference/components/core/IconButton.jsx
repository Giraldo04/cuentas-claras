import React from 'react';
import { Icon } from './Icon.jsx';

/** Square 44px tap target holding a single Lucide glyph. */
export function IconButton({ name, label, tone = 'default', size = 44, style, ...rest }) {
  const tones = {
    default: { background: 'transparent', color: 'var(--cc-text-secondary)' },
    surface: { background: 'var(--cc-surface)', color: 'var(--cc-text)', boxShadow: 'var(--cc-shadow-xs)' },
    soft: { background: 'var(--cc-primary-soft)', color: 'var(--cc-primary)' }
  };
  return (
    <button type="button" aria-label={label} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, border: 'none', borderRadius: 'var(--cc-radius-full)',
      cursor: 'pointer', ...(tones[tone] || tones.default), ...style
    }} {...rest}>
      <Icon name={name} size={Math.round(size * 0.45)} />
    </button>
  );
}
