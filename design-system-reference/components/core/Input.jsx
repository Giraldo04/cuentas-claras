import React from 'react';
import { Icon } from './Icon.jsx';

/** Text/number field on the sunken surface. Label sits above, never as placeholder-only. */
export function Input({ label, hint, error, iconLeft, suffix, style, id, ...rest }) {
  const rid = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-2)' }}>
      {label && <label htmlFor={rid} style={{ fontSize: 'var(--cc-size-sm)', fontWeight: 'var(--cc-weight-medium)', color: 'var(--cc-text-secondary)' }}>{label}</label>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--cc-space-2)', minHeight: 48,
        padding: '0 var(--cc-space-4)', background: 'var(--cc-surface-sunken)',
        border: `1px solid ${error ? 'var(--cc-expense)' : 'var(--cc-border)'}`,
        borderRadius: 'var(--cc-radius-sm)'
      }}>
        {iconLeft && <Icon name={iconLeft} size={18} color="var(--cc-text-tertiary)" />}
        <input id={rid} style={{
          flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
          font: 'inherit', fontFamily: 'var(--cc-font-body)', fontSize: 'var(--cc-size-lg)', color: 'var(--cc-text)', ...style
        }} {...rest} />
        {suffix && <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>{suffix}</span>}
      </div>
      {(hint || error) && <span style={{ fontSize: 'var(--cc-size-sm)', color: error ? 'var(--cc-expense)' : 'var(--cc-text-tertiary)' }}>{error || hint}</span>}
    </div>
  );
}
