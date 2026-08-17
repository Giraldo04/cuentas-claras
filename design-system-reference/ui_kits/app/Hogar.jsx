const { Card, MemberAvatar, Amount, Button, Chip, Icon, ProgressBar } = window.CC_DS;

function Hogar({ data }) {
  const [child, setChild] = React.useState('Tomás');
  const perChild = { 'Tomás': [{ label: 'Colegio', value: 640000 }, { label: 'Transporte', value: 48000 }, { label: 'Ropa', value: 96000 }], 'Lucía': [{ label: 'Jardín', value: 480000 }, { label: 'Salud', value: 74000 }] };
  const rows = perChild[child] || [];
  const total = rows.reduce((s, r) => s + r.value, 0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)' }}>
      <Card padding="var(--cc-space-5)">
        <span className="cc-eyebrow">Hogar</span>
        <h2 className="cc-display" style={{ margin: '4px 0 var(--cc-space-4)', fontSize: 'var(--cc-size-h2)' }}>{data.household}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)' }}>
          {data.members.map(m => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--cc-space-3)' }}>
              <MemberAvatar name={m.name} color={m.color} isChild={m.isChild} />
              <span style={{ flex: 1 }}>
                <span style={{ display: 'block', fontWeight: 'var(--cc-weight-medium)' }}>{m.name}</span>
                <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>{m.isChild ? 'Destino de gasto' : 'Registra y ve todo'}</span>
              </span>
              <Icon name="chevron-right" size={18} color="var(--cc-text-tertiary)" />
            </div>
          ))}
        </div>
        <Button variant="soft" iconLeft="plus" fullWidth style={{ marginTop: 'var(--cc-space-4)' }}>Invitar a alguien</Button>
      </Card>

      <Card padding="var(--cc-space-5)">
        <span className="cc-eyebrow">Gasto por hijo</span>
        <div style={{ display: 'flex', gap: 8, margin: 'var(--cc-space-3) 0 var(--cc-space-4)' }}>
          {data.members.filter(m => m.isChild).map(m => (
            <Chip key={m.id} tone="primary" selected={child === m.name} onClick={() => setChild(m.name)}>{m.name}</Chip>
          ))}
        </div>
        <Amount value={total} size={28} decimals={false} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)', marginTop: 'var(--cc-space-4)' }}>
          {rows.map(r => <ProgressBar key={r.label} value={r.value} max={total} tone="primary" label={r.label} trailing={<Amount value={r.value} size={13} tone="muted" decimals={false} />} />)}
        </div>
      </Card>

      <Card padding="var(--cc-space-5)" style={{ display: 'flex', alignItems: 'center', gap: 'var(--cc-space-3)' }}>
        <Icon name="file-text" size={22} color="var(--cc-primary)" />
        <span style={{ flex: 1 }}>
          <span style={{ display: 'block', fontWeight: 'var(--cc-weight-medium)' }}>Reporte en PDF</span>
          <span style={{ fontSize: 'var(--cc-size-sm)', color: 'var(--cc-text-tertiary)' }}>Agosto 2026 · Casa Ruiz</span>
        </span>
        <Button variant="secondary" size="sm" iconLeft="download">Descargar</Button>
      </Card>
    </div>
  );
}
Object.assign(window, { Hogar });
