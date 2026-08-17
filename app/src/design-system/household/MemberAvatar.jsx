import React from 'react';

/** Circular initial avatar for a household member; children render with a dashed ring. */
export function MemberAvatar({ name = '', color = 'var(--cc-primary)', size = 40, isChild = false, selected = false, onClick, style }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <span onClick={onClick} title={name} style={{
      display: 'grid', placeItems: 'center', width: size, height: size, flex: 'none',
      borderRadius: 'var(--cc-radius-full)', background: `color-mix(in oklab, ${color} 18%, transparent)`,
      color, fontFamily: 'var(--cc-font-body)', fontSize: size * 0.36, fontWeight: 'var(--cc-weight-semi)',
      border: isChild ? `1.5px dashed ${color}` : selected ? `2px solid ${color}` : '2px solid transparent',
      boxShadow: selected ? `0 0 0 3px color-mix(in oklab, ${color} 18%, transparent)` : 'none',
      cursor: onClick ? 'pointer' : 'default', ...style
    }}>{initials}</span>
  );
}
