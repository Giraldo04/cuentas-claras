import React from 'react';
import { Icon } from '../core/Icon';

/** Modal sheet anchored to the bottom: 24px top radius, grab handle, dimmed overlay. */
export function BottomSheet({ open, title, onClose, children, footer, style }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 40, display: 'flex', alignItems: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--cc-overlay)' }} />
      <div style={{
        position: 'relative', width: '100%', maxHeight: '88%', overflowY: 'auto',
        background: 'var(--cc-surface)', borderRadius: 'var(--cc-radius-lg) var(--cc-radius-lg) 0 0',
        boxShadow: 'var(--cc-shadow-lg)', padding: 'var(--cc-space-3) var(--cc-gutter) var(--cc-space-6)',
        animation: 'ccSheetIn var(--cc-dur-sheet) var(--cc-ease)', ...style
      }}>
        <style>{'@keyframes ccSheetIn{from{transform:translateY(16px);opacity:.6}to{transform:none;opacity:1}}'}</style>
        <div style={{ width: 38, height: 4, borderRadius: 999, background: 'var(--cc-border-strong)', margin: '0 auto var(--cc-space-4)' }} />
        {title && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--cc-space-4)' }}>
            <h2 className="cc-display" style={{ margin: 0, fontSize: 'var(--cc-size-h3)' }}>{title}</h2>
            <button onClick={onClose} aria-label="Cerrar" style={{ width: 36, height: 36, display: 'grid', placeItems: 'center', border: 'none', background: 'var(--cc-surface-sunken)', borderRadius: 'var(--cc-radius-full)', cursor: 'pointer', color: 'var(--cc-text-secondary)' }}>
              <Icon name="x" size={18} />
            </button>
          </div>
        )}
        {children}
        {footer && <div style={{ marginTop: 'var(--cc-space-5)' }}>{footer}</div>}
      </div>
    </div>
  );
}
