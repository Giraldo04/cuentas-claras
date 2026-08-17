import React from 'react';
import { Icon } from '../core/Icon';

const DEFAULT_ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: 'house' },
  { id: 'movimientos', label: 'Movimientos', icon: 'receipt' },
  { id: 'fab' },
  { id: 'bolsillos', label: 'Bolsillos', icon: 'piggy-bank' },
  { id: 'hogar', label: 'Hogar', icon: 'users' }
];

/** Five-slot bottom navigation with the central FAB well. */
export function BottomNav({ items = DEFAULT_ITEMS, value = 'inicio', onChange, onFab, style }) {
  return (
    <nav style={{
      position: 'relative', display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '1fr',
      alignItems: 'center', height: 'var(--cc-nav-height)', paddingBottom: 'var(--cc-safe-bottom)',
      background: 'var(--cc-surface)', borderTop: '1px solid var(--cc-border)', ...style
    }}>
      {items.map(it => it.id === 'fab' ? (
        <div key="fab" style={{ display: 'grid', placeItems: 'center' }}>
          <button onClick={onFab} aria-label="Registro rápido" style={{
            width: 56, height: 56, marginTop: -28, border: '4px solid var(--cc-surface)',
            borderRadius: 'var(--cc-radius-full)', background: 'var(--cc-primary)',
            color: 'var(--cc-primary-contrast)', boxShadow: 'var(--cc-shadow-fab)',
            display: 'grid', placeItems: 'center', cursor: 'pointer'
          }}><Icon name="plus" size={26} strokeWidth={2} /></button>
        </div>
      ) : (
        <button key={it.id} onClick={() => onChange && onChange(it.id)} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          height: '100%', border: 'none', background: 'none', cursor: 'pointer',
          color: value === it.id ? 'var(--cc-primary)' : 'var(--cc-text-tertiary)', paddingTop: 10
        }}>
          <Icon name={it.icon} size={22} strokeWidth={value === it.id ? 2 : 1.75} />
          <span style={{ fontSize: 'var(--cc-size-xs)', fontWeight: value === it.id ? 'var(--cc-weight-semi)' : 500 }}>{it.label}</span>
        </button>
      ))}
    </nav>
  );
}
