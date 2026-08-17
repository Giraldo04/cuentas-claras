import React from 'react';

const fmt = (n) => {
  const abs = Math.abs(n);
  const int = Math.floor(abs).toLocaleString('es-CO');
  const dec = Math.round((abs - Math.floor(abs)) * 100);
  return [int, String(dec).padStart(2, '0')];
};

const toneColor = { income: 'var(--cc-income)', expense: 'var(--cc-expense)', savings: 'var(--cc-savings)', debt: 'var(--cc-debt)', ant: 'var(--cc-ant)', neutral: 'var(--cc-text)', muted: 'var(--cc-text-secondary)' };

/** Money figure. Inter + tabular-nums; currency and decimals at 62% / 60% opacity. */
export function Amount({ value = 0, size = 20, tone = 'neutral', currency = '$', showSign = false, decimals = true, weight = 'var(--cc-weight-semi)', style, ...rest }) {
  const [int, dec] = fmt(value);
  const sign = showSign ? (value < 0 ? '−' : '+') : (value < 0 ? '−' : '');
  return (
    <span className="cc-amount" style={{ fontSize: size, lineHeight: 1.1, color: toneColor[tone] || toneColor.neutral, fontWeight: weight, whiteSpace: 'nowrap', ...style }} {...rest}>
      {sign}<span className="cc-amount__currency">{currency}</span>{int}
      {decimals && <span className="cc-amount__decimals">,{dec}</span>}
    </span>
  );
}
