import React from 'react';
import { Icon } from '../core/Icon';

/** Two-stroke line-art empty state in primary + amber, with warm copy. */
export function EmptyState({ icon = 'piggy-bank', title, body, action, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--cc-space-3)', padding: 'var(--cc-space-8) var(--cc-space-5)', ...style }}>
      <span style={{ position: 'relative', display: 'grid', placeItems: 'center', width: 88, height: 88, borderRadius: 'var(--cc-radius-full)', background: 'var(--cc-primary-soft)' }}>
        <Icon name={icon} size={38} color="var(--cc-primary)" strokeWidth={1.5} />
        <span style={{ position: 'absolute', right: 6, bottom: 8, display: 'grid', placeItems: 'center', width: 26, height: 26, borderRadius: 'var(--cc-radius-full)', background: 'var(--cc-accent-soft)' }}>
          <Icon name="plus" size={14} color="var(--cc-accent)" strokeWidth={2} />
        </span>
      </span>
      <h3 className="cc-display" style={{ margin: 0, fontSize: 'var(--cc-size-h3)' }}>{title}</h3>
      {body && <p style={{ margin: 0, maxWidth: 300, fontSize: 'var(--cc-size-base)', color: 'var(--cc-text-secondary)', textWrap: 'pretty' }}>{body}</p>}
      {action}
    </div>
  );
}
