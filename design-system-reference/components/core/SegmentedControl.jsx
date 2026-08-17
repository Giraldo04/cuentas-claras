import React from 'react';

/** Two-to-four exclusive options in one sunken track. */
export function SegmentedControl({ options = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{
      display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '1fr', gap: 2, padding: 3,
      background: 'var(--cc-surface-sunken)', borderRadius: 'var(--cc-radius-full)', ...style
    }}>
      {options.map(o => {
        const v = typeof o === 'string' ? o : o.value;
        const l = typeof o === 'string' ? o : o.label;
        const on = v === value;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => onChange && onChange(v)}
            style={{
              minHeight: 36, border: 'none', borderRadius: 'var(--cc-radius-full)', cursor: 'pointer',
              background: on ? 'var(--cc-surface)' : 'transparent',
              boxShadow: on ? 'var(--cc-shadow-xs)' : 'none',
              color: on ? 'var(--cc-text)' : 'var(--cc-text-secondary)',
              fontFamily: 'var(--cc-font-body)', fontSize: 'var(--cc-size-sm)',
              fontWeight: 'var(--cc-weight-semi)',
              transition: 'background var(--cc-dur-fast) var(--cc-ease)'
            }}>{l}</button>
        );
      })}
    </div>
  );
}
