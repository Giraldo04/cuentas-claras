import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Amount } from './Amount.jsx';

/** KPI tile: eyebrow label, amount, optional delta. Used in the dashboard and in PDF reports. */
export function StatCard({ label, value, tone = 'neutral', icon, delta, currency = '$', style }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-2)',
      padding: 'var(--cc-space-4)', background: 'var(--cc-surface)',
      border: '1px solid var(--cc-border)', borderRadius: 'var(--cc-radius-sm)', ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {icon && <Icon name={icon} size={14} color={`var(--cc-${tone === 'neutral' ? 'text-secondary' : tone})`} />}
        <span className="cc-eyebrow">{label}</span>
      </div>
      <Amount value={value} size={24} tone={tone} currency={currency} decimals={false} />
      {delta && <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-secondary)' }}>{delta}</span>}
    </div>
  );
}
