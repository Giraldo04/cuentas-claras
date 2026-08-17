import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Amount } from './Amount.jsx';

/** One transaction line: category icon chip, title, meta, signed amount. */
export function MovementRow({ icon = 'receipt', title, meta, value, tone = 'expense', member, onClick, style }) {
  const color = `var(--cc-${tone})`;
  const soft = `var(--cc-${tone}-soft)`;
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--cc-space-3)',
      minHeight: 'var(--cc-tap-target)', padding: 'var(--cc-space-3) 0',
      cursor: onClick ? 'pointer' : 'default', ...style
    }}>
      <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 'var(--cc-radius-full)', background: soft, flex: 'none' }}>
        <Icon name={icon} size={18} color={color} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 'var(--cc-size-base)', fontWeight: 'var(--cc-weight-medium)', color: 'var(--cc-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
        <span style={{ display: 'block', fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>{meta}{member ? ' · ' + member : ''}</span>
      </span>
      <Amount value={value} size={17} tone={tone} showSign decimals={false} />
    </div>
  );
}
