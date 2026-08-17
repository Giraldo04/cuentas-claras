import React from 'react';

/** Rounded vertical bars with the value written on the bar, not in a legend. */
export function BarChart({ data = [], height = 120, color = 'var(--cc-primary)', highlightIndex, style }) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--cc-space-2)', height, ...style }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
          <div style={{
            width: '100%', height: Math.max((d.value / max) * (height - 26), 4),
            background: i === highlightIndex ? color : 'color-mix(in oklab, ' + color + ' 26%, transparent)',
            borderRadius: 'var(--cc-radius-xs)', transition: 'height var(--cc-dur-base) var(--cc-ease)'
          }} />
          <span style={{ fontSize: 'var(--cc-size-xs)', color: i === highlightIndex ? 'var(--cc-text)' : 'var(--cc-text-tertiary)', fontWeight: i === highlightIndex ? 'var(--cc-weight-semi)' : 400 }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
