import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Amount } from '../money/Amount.jsx';
import { ProgressBar } from '../money/ProgressBar.jsx';

const KIND = {
  prestamo: { icon: 'landmark', label: 'Préstamo' },
  financiacion: { icon: 'credit-card', label: 'Financiación' },
  hipoteca: { icon: 'house', label: 'Hipoteca' },
  viaje: { icon: 'plane', label: 'Viaje' }
};

/** Loan / instalment / mortgage / trip card: instalment progress + expandable Escalera. */
export function CommitmentCard({ kind = 'prestamo', name, monthly, paid = 0, total = 1, balance, expanded, onToggle, children, style }) {
  const k = KIND[kind] || KIND.prestamo;
  return (
    <div style={{
      background: 'var(--cc-surface)', border: '1px solid var(--cc-border)',
      borderRadius: 'var(--cc-radius-md)', boxShadow: 'var(--cc-shadow-xs)',
      padding: 'var(--cc-space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)', ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cc-space-3)' }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 'var(--cc-radius-full)', background: 'var(--cc-debt-soft)' }}>
          <Icon name={k.icon} size={18} color="var(--cc-debt)" />
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 'var(--cc-size-lg)', fontWeight: 'var(--cc-weight-semi)' }}>{name}</span>
          <span className="cc-eyebrow">{k.label}</span>
        </span>
        <span style={{ textAlign: 'right' }}>
          <Amount value={monthly} size={17} tone="debt" decimals={false} />
          <span style={{ display: 'block', fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>al mes</span>
        </span>
      </div>
      <ProgressBar value={paid} max={total} tone="debt" label={`${paid} de ${total} cuotas`} trailing={balance != null ? <span>Saldo <Amount value={balance} size={13} tone="muted" decimals={false} /></span> : null} />
      <button onClick={onToggle} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, minHeight: 40,
        border: 'none', background: 'var(--cc-surface-sunken)', borderRadius: 'var(--cc-radius-sm)',
        color: 'var(--cc-primary)', fontFamily: 'var(--cc-font-body)', fontSize: 'var(--cc-size-sm)',
        fontWeight: 'var(--cc-weight-semi)', cursor: 'pointer'
      }}>
        {expanded ? 'Ocultar la escalera' : 'Ver la escalera'}
        <Icon name={expanded ? 'chevron-down' : 'chevron-right'} size={16} />
      </button>
      {expanded && children}
    </div>
  );
}
