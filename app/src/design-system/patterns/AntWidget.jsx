import React from 'react';
import { Icon } from '../core/Icon';
import { Amount } from '../money/Amount';

/** "Gastos hormiga": sums micro-spend and translates it into something tangible. Never scolds. */
export function AntWidget({ total = 0, count = 0, equivalence, period = 'Este mes', onClick, style }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)',
      padding: 'var(--cc-space-4)', background: 'var(--cc-ant-soft)',
      border: '1px solid color-mix(in oklab, var(--cc-ant) 22%, transparent)',
      borderRadius: 'var(--cc-radius-md)', cursor: onClick ? 'pointer' : 'default', ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon name="coffee" size={16} color="var(--cc-ant)" />
        <span className="cc-eyebrow" style={{ color: 'var(--cc-ant)' }}>Gastos hormiga · {period}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <Amount value={total} size={28} tone="ant" decimals={false} />
        <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-secondary)' }}>en {count} compras pequeñas</span>
      </div>
      {equivalence && <p style={{ margin: 0, fontSize: 'var(--cc-size-base)', color: 'var(--cc-text)', lineHeight: 'var(--cc-leading-snug)' }}>{equivalence}</p>}
    </div>
  );
}
