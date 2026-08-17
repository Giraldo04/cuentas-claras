import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Amount } from '../money/Amount.jsx';

const money = n => '$' + Math.round(n).toLocaleString('es-CO');

/**
 * ELEMENTO FIRMA — "La Escalera".
 * Each month of a credit is a step. One bar per step, split into interest (purple)
 * and capital (green). As you walk down, purple shrinks and green grows.
 */
export function Escalera({ months = [], currentIndex = 0, window: win, extraPayment = 0, onExtraPaymentChange, simulate = true, style }) {
  const [open, setOpen] = React.useState(null);

  const projected = React.useMemo(() => {
    if (!extraPayment) return months;
    let saldo = null;
    const out = [];
    for (let i = 0; i < months.length; i++) {
      const m = months[i];
      if (i <= currentIndex || saldo === null) { saldo = m.balance; out.push(m); continue; }
      const capital = m.capital + extraPayment;
      saldo = Math.max(0, saldo - capital);
      out.push({ ...m, capital, balance: saldo });
      if (saldo <= 0) break;
    }
    return out;
  }, [months, extraPayment, currentIndex]);

  const removed = months.length - projected.length;
  const savedInterest = months.slice(projected.length).reduce((s, m) => s + m.interest, 0);
  const maxCuota = Math.max(...months.map(m => m.capital + m.interest), 1);
  // La proyección corre sobre el calendario completo; sólo se dibuja la ventana visible.
  const from = win ? Math.min(win.from || 0, Math.max(0, projected.length - 1)) : 0;
  const visible = win ? projected.slice(from, from + (win.count || 18)) : projected;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-4)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cc-space-4)' }}>
        <LegendDot color="var(--esc-interest)" label="Interés" />
        <LegendDot color="var(--esc-capital)" label="Capital" />
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--esc-step-gap)' }}>
        {visible.map((m, vi) => {
          const i = from + vi;
          const paid = i < currentIndex;
          const today = i === currentIndex;
          const cuota = m.capital + m.interest;
          const w = (cuota / maxCuota) * 100;
          const ip = (m.interest / cuota) * 100;
          const isOpen = open === i;
          return (
            <div key={m.label + i} onClick={() => setOpen(isOpen ? null : i)} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--cc-space-3)',
              minHeight: isOpen ? undefined : 'var(--esc-step-height)',
              padding: 'var(--cc-space-2) var(--cc-space-2) var(--cc-space-2) 0',
              opacity: paid ? 'var(--esc-paid-opacity)' : 1,
              borderRadius: 'var(--cc-radius-sm)', cursor: 'pointer',
              background: isOpen ? 'var(--cc-surface-sunken)' : 'transparent',
              boxShadow: today ? 'inset 0 0 0 2px var(--esc-today-ring)' : 'none',
              transition: 'opacity var(--cc-dur-base) var(--cc-ease)'
            }}>
              <div style={{ position: 'relative', display: 'grid', placeItems: 'center', width: 34, flex: 'none', alignSelf: 'stretch' }}>
                <span style={{ position: 'absolute', top: 0, bottom: 0, width: Math.max(2, (m.balance / (months[0]?.balance || 1)) * 8), background: 'var(--cc-border-strong)', borderRadius: 999 }} />
                {paid && <span style={{ position: 'relative', display: 'grid', placeItems: 'center', width: 18, height: 18, borderRadius: 999, background: 'var(--cc-income)' }}><Icon name="check" size={12} color="#fff" strokeWidth={2.5} /></span>}
              </div>

              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-secondary)', fontWeight: today ? 'var(--cc-weight-semi)' : 400 }}>{m.label}</span>
                  <span style={{ fontFamily: 'var(--cc-font-numeric)', fontVariantNumeric: 'tabular-nums', fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>{money(m.balance)}</span>
                </div>
                <div style={{ display: 'flex', width: w + '%', minWidth: 40, height: 'var(--esc-bar-height)', borderRadius: 'var(--esc-bar-radius)', overflow: 'hidden', background: 'var(--cc-surface-sunken)' }}>
                  <span style={{ width: ip + '%', background: 'var(--esc-interest)', transition: 'width var(--cc-dur-base) var(--cc-ease)' }} />
                  <span style={{ flex: 1, background: 'var(--esc-capital)' }} />
                </div>
                {isOpen && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--cc-space-2) var(--cc-space-4)', padding: 'var(--cc-space-2) 0 var(--cc-space-1)' }}>
                    <Detail k="Cuota" v={cuota} />
                    <Detail k="Interés" v={m.interest} tone="debt" />
                    <Detail k="Capital" v={m.capital} tone="income" />
                    <Detail k="Saldo" v={m.balance} tone="muted" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {simulate && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-2)', padding: 'var(--cc-space-4)', background: 'var(--cc-surface-sunken)', borderRadius: 'var(--cc-radius-sm)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span className="cc-eyebrow">Abono extra al mes</span>
            <Amount value={extraPayment} size={17} tone="neutral" decimals={false} />
          </div>
          <input type="range" min={0} max={800000} step={50000} value={extraPayment}
            onChange={e => onExtraPaymentChange && onExtraPaymentChange(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--esc-extra)' }} />
          {removed > 0 && (
            <p style={{ margin: 0, fontSize: 'var(--cc-size-base)', color: 'var(--cc-text)', lineHeight: 'var(--cc-leading-snug)' }}>
              Terminas {removed} {removed === 1 ? 'mes' : 'meses'} antes y te ahorras {money(savedInterest)} en intereses.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-secondary)' }}>
      <span style={{ width: 10, height: 10, borderRadius: 999, background: color }} />{label}
    </span>
  );
}

function Detail({ k, v, tone = 'neutral' }) {
  return (
    <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--cc-size-sm)' }}>
      <span style={{ color: 'var(--cc-text-secondary)' }}>{k}</span>
      <Amount value={v} size={13} tone={tone} decimals={false} />
    </span>
  );
}
