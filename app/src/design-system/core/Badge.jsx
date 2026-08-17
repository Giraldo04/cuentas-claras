import React from 'react';

/** Tiny uppercase status label. */
export function Badge({ tone = 'neutral', children, style, ...rest }) {
  const map = {
    neutral: ['var(--cc-surface-sunken)', 'var(--cc-text-secondary)'],
    income: ['var(--cc-income-soft)', 'var(--cc-income)'],
    expense: ['var(--cc-expense-soft)', 'var(--cc-expense)'],
    warning: ['var(--cc-warning-soft)', 'var(--cc-warning)'],
    debt: ['var(--cc-debt-soft)', 'var(--cc-debt)'],
    savings: ['var(--cc-savings-soft)', 'var(--cc-savings)']
  };
  const [bg, fg] = map[tone] || map.neutral;
  return <span style={{
    display: 'inline-block', padding: '3px 8px', background: bg, color: fg,
    borderRadius: 'var(--cc-radius-xs)', fontSize: 'var(--cc-size-xs)',
    fontWeight: 'var(--cc-weight-semi)', textTransform: 'uppercase',
    letterSpacing: 'var(--cc-tracking-eyebrow)', ...style
  }} {...rest}>{children}</span>;
}
