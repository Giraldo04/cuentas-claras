import React from 'react';
import { Icon } from './Icon.jsx';

const tones = {
  neutral: ['var(--cc-surface-sunken)', 'var(--cc-text-secondary)'],
  primary: ['var(--cc-primary-soft)', 'var(--cc-primary)'],
  income: ['var(--cc-income-soft)', 'var(--cc-income)'],
  expense: ['var(--cc-expense-soft)', 'var(--cc-expense)'],
  savings: ['var(--cc-savings-soft)', 'var(--cc-savings)'],
  debt: ['var(--cc-debt-soft)', 'var(--cc-debt)'],
  warning: ['var(--cc-warning-soft)', 'var(--cc-warning)'],
  ant: ['var(--cc-ant-soft)', 'var(--cc-ant)']
};

/** Pill label for categories, filters and states. */
export function Chip({ tone = 'neutral', icon, selected, onClick, children, style, ...rest }) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return (
    <span role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, height: 30, padding: '0 12px',
        background: selected ? fg : bg, color: selected ? 'var(--cc-surface)' : fg,
        borderRadius: 'var(--cc-radius-full)', fontSize: 'var(--cc-size-sm)',
        fontWeight: 'var(--cc-weight-medium)', whiteSpace: 'nowrap',
        cursor: onClick ? 'pointer' : 'default', ...style
      }} {...rest}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}
