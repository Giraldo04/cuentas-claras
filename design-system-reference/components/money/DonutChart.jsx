import React from 'react';

/** Rounded-cap donut with direct labels; no separate legend. */
export function DonutChart({ segments = [], size = 160, thickness = 18, centerLabel, centerValue, style }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--cc-surface-sunken)" strokeWidth={thickness} />
        {segments.map((s, i) => {
          const len = (s.value / total) * c;
          const el = (
            <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color} strokeWidth={thickness}
              strokeLinecap="round" strokeDasharray={`${Math.max(len - 6, 1)} ${c}`} strokeDashoffset={-offset} />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          {centerValue}
          {centerLabel && <div className="cc-eyebrow" style={{ marginTop: 4 }}>{centerLabel}</div>}
        </div>
      </div>
    </div>
  );
}
