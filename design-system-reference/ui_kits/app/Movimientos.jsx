const { Card, MovementRow, Chip, SegmentedControl, Amount, Icon, IconButton } = window.CC_DS;

function Movimientos({ data }) {
  const [filter, setFilter] = React.useState('Todos');
  const [member, setMember] = React.useState(null);
  const rows = data.movements.filter(m => {
    if (filter === 'Ingresos' && m.value < 0) return false;
    if (filter === 'Gastos' && m.value > 0) return false;
    if (member && m.member !== member) return false;
    return true;
  });
  const total = rows.reduce((s, m) => s + m.value, 0);
  return (
    <div>
      <SegmentedControl options={['Todos', 'Ingresos', 'Gastos']} value={filter} onChange={setFilter} />
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: 'var(--cc-space-4) 0 var(--cc-space-2)' }}>
        {data.members.map(m => (
          <Chip key={m.id} tone="neutral" selected={member === m.name.split(' ')[0]}
            onClick={() => setMember(member === m.name.split(' ')[0] ? null : m.name.split(' ')[0])}>
            {m.isChild ? 'Para ' : ''}{m.name.split(' ')[0]}
          </Chip>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: 'var(--cc-space-2) 0 var(--cc-space-3)' }}>
        <span className="cc-eyebrow">{rows.length} movimientos</span>
        <Amount value={total} size={17} tone={total < 0 ? 'expense' : 'income'} showSign decimals={false} />
      </div>
      <Card padding="0 var(--cc-space-4)">
        {rows.map((m, i) => (
          <div key={m.id} style={{ borderTop: i ? '1px solid var(--cc-border)' : 'none' }}><MovementRow {...m} /></div>
        ))}
        {!rows.length && <p style={{ padding: 'var(--cc-space-6) 0', textAlign: 'center', color: 'var(--cc-text-secondary)' }}>Nada por aquí todavía.</p>}
      </Card>
    </div>
  );
}
Object.assign(window, { Movimientos });
