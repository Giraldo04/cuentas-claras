import React from 'react';

/** Base surface: white card, 16px radius, warm shadow. */
export function Card({ padding = 'var(--cc-space-4)', tone = 'surface', elevation = 'xs', children, style, ...rest }) {
  const bg = { surface: 'var(--cc-surface)', alt: 'var(--cc-surface-alt)', soft: 'var(--cc-primary-soft)', sunken: 'var(--cc-surface-sunken)' }[tone] || 'var(--cc-surface)';
  return (
    <div style={{
      background: bg, border: '1px solid var(--cc-border)', borderRadius: 'var(--cc-radius-md)',
      boxShadow: elevation === 'none' ? 'none' : `var(--cc-shadow-${elevation})`,
      padding, ...style
    }} {...rest}>{children}</div>
  );
}
