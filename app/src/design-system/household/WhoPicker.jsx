import React from 'react';
import { MemberAvatar } from './MemberAvatar';

/** "¿Quién?" selector — always visible during quick entry. */
export function WhoPicker({ members = [], value, onChange, label = '¿Quién pagó?', style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)', ...style }}>
      <span className="cc-eyebrow">{label}</span>
      <div style={{ display: 'flex', gap: 'var(--cc-space-4)' }}>
        {members.map(m => (
          <button key={m.id} onClick={() => onChange && onChange(m.id)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            background: 'none', border: 'none', padding: 0, cursor: 'pointer'
          }}>
            <MemberAvatar name={m.name} color={m.color} isChild={m.isChild} selected={m.id === value} size={48} />
            <span style={{ fontSize: 'var(--cc-size-sm)', color: m.id === value ? 'var(--cc-text)' : 'var(--cc-text-secondary)', fontWeight: m.id === value ? 'var(--cc-weight-semi)' : 400 }}>{m.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
