import React from 'react';
import { Icon } from '../core/Icon.jsx';

const KEYS = ['1','2','3','4','5','6','7','8','9','.','0','del'];

/** Big numeric keypad for the amount step of quick entry. */
export function Keypad({ onKey, style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--cc-space-2)', ...style }}>
      {KEYS.map(k => (
        <button key={k} onClick={() => onKey && onKey(k)} style={{
          minHeight: 56, border: 'none', borderRadius: 'var(--cc-radius-sm)',
          background: 'var(--cc-surface-sunken)', color: 'var(--cc-text)',
          fontFamily: 'var(--cc-font-numeric)', fontSize: 'var(--cc-size-h3)',
          fontWeight: 'var(--cc-weight-semi)', cursor: 'pointer',
          display: 'grid', placeItems: 'center'
        }}>{k === 'del' ? <Icon name="chevron-left" size={22} /> : k}</button>
      ))}
    </div>
  );
}
