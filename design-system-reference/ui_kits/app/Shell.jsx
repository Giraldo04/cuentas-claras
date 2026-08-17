const { BottomNav } = window.CC_DS;

function PhoneShell({ tab, onTab, onFab, title, subtitle, right, children, scrollKey }) {
  return (
    <div style={{
      position: 'relative', width: 390, height: 800, display: 'flex', flexDirection: 'column',
      background: 'var(--cc-bg)', borderRadius: 34, overflow: 'hidden',
      border: '1px solid var(--cc-border)', boxShadow: 'var(--cc-shadow-lg)'
    }}>
      <StatusBar />
      {title && (
        <header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, padding: '4px var(--cc-gutter) 12px' }}>
          <div>
            {subtitle && <span className="cc-eyebrow">{subtitle}</span>}
            <h1 className="cc-display" style={{ margin: '2px 0 0', fontSize: 'var(--cc-size-h2)' }}>{title}</h1>
          </div>
          {right}
        </header>
      )}
      <main key={scrollKey} style={{ flex: 1, overflowY: 'auto', padding: '0 var(--cc-gutter) 24px' }}>{children}</main>
      <BottomNav value={tab} onChange={onTab} onFab={onFab} />
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px var(--cc-gutter) 4px', fontFamily: 'var(--cc-font-numeric)', fontSize: 13, fontWeight: 600, color: 'var(--cc-text)' }}>
      <span>9:41</span>
      <span style={{ display: 'flex', gap: 5, alignItems: 'center', opacity: .75 }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><g fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></g></svg>
        <svg width="24" height="11" viewBox="0 0 24 11"><rect x="0.5" y="0.5" width="20" height="10" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="15" height="7" rx="1.5" fill="currentColor"/><rect x="22" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity=".5"/></svg>
      </span>
    </div>
  );
}

function SectionHeader({ children, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: 'var(--cc-space-6) 0 var(--cc-space-3)' }}>
      <h2 className="cc-display" style={{ margin: 0, fontSize: 'var(--cc-size-h3)' }}>{children}</h2>
      {action}
    </div>
  );
}

Object.assign(window, { PhoneShell, StatusBar, SectionHeader });
