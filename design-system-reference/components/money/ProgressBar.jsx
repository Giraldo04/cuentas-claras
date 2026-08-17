import React from 'react';

/** Rounded progress track for goals and instalment counts. */
export function ProgressBar({ value = 0, max = 100, tone = 'primary', height = 8, label, trailing, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const color = { primary: 'var(--cc-primary)', savings: 'var(--cc-savings)', debt: 'var(--cc-debt)', accent: 'var(--cc-accent)', warning: 'var(--cc-warning)', income: 'var(--cc-income)' }[tone] || 'var(--cc-primary)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {(label || trailing) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-secondary)' }}>
          <span>{label}</span><span>{trailing}</span>
        </div>
      )}
      <div style={{ height, background: 'var(--cc-surface-sunken)', borderRadius: 'var(--cc-radius-full)', overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: color, borderRadius: 'var(--cc-radius-full)', transition: 'width var(--cc-dur-base) var(--cc-ease)' }} />
      </div>
    </div>
  );
}
