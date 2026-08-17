import React from 'react';
import { Amount } from '../money/Amount.jsx';
import { ProgressBar } from '../money/ProgressBar.jsx';

/** Savings envelope: emoji, goal, colour, progress. */
export function PocketCard({ emoji = '🐷', name, saved = 0, goal = 0, color = 'var(--cc-savings)', onClick, style }) {
  const pct = goal ? Math.round((saved / goal) * 100) : 0;
  return (
    <div onClick={onClick} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)',
      padding: 'var(--cc-space-4)', background: 'var(--cc-surface)',
      border: '1px solid var(--cc-border)', borderRadius: 'var(--cc-radius-md)',
      boxShadow: 'var(--cc-shadow-xs)', cursor: onClick ? 'pointer' : 'default', ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cc-space-3)' }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 'var(--cc-radius-full)', background: `color-mix(in oklab, ${color} 16%, transparent)`, fontSize: 20 }}>{emoji}</span>
        <span style={{ flex: 1, fontSize: 'var(--cc-size-lg)', fontWeight: 'var(--cc-weight-semi)' }}>{name}</span>
        <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-secondary)' }}>{pct}%</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <Amount value={saved} size={22} tone="savings" decimals={false} />
        <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>de <Amount value={goal} size={13} tone="muted" decimals={false} /></span>
      </div>
      <ProgressBar value={saved} max={goal || 1} tone="savings" height={8} />
    </div>
  );
}
