const { Card, Amount, StatCard, MovementRow, AntWidget, DonutChart, Chip, Icon, MemberAvatar } = window.CC_DS;

function Inicio({ data, onOpenMovimientos }) {
  const ingresos = data.movements.filter(m => m.value > 0).reduce((s, m) => s + m.value, 0);
  const gastos = data.movements.filter(m => m.value < 0).reduce((s, m) => s - m.value, 0);
  return (
    <div>
      <Card padding="var(--cc-space-5)" elevation="sm" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="cc-eyebrow">Disponible este mes</span>
          <span style={{ display: 'flex', gap: -6 }}>
            {data.members.filter(m => !m.isChild).map(m => <MemberAvatar key={m.id} name={m.name} color={m.color} size={26} style={{ marginLeft: -6 }} />)}
          </span>
        </div>
        <Amount value={ingresos - gastos} size={40} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--cc-space-2)' }}>
          <StatCard label="Ingresos" value={ingresos} tone="income" icon="trending-up" />
          <StatCard label="Gastos" value={gastos} tone="expense" icon="trending-down" />
        </div>
      </Card>

      <SectionHeader>En qué se va</SectionHeader>
      <Card padding="var(--cc-space-4)" style={{ display: 'flex', gap: 'var(--cc-space-4)', alignItems: 'center' }}>
        <DonutChart size={128} thickness={16}
          segments={data.categories.map(c => ({ value: c.value, color: c.color }))}
          centerValue={<Amount value={gastos} size={17} decimals={false} />} centerLabel="Gasto" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.categories.map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--cc-size-sm)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: c.color, flex: 'none' }} />
              <span style={{ flex: 1, color: 'var(--cc-text-secondary)' }}>{c.name}</span>
              <Amount value={c.value} size={13} tone="muted" decimals={false} />
            </div>
          ))}
        </div>
      </Card>

      <SectionHeader>Gastos hormiga</SectionHeader>
      <AntWidget total={214300} count={19} equivalence="Eso es media cuota de tu viaje a Cartagena." />

      <SectionHeader action={<a onClick={onOpenMovimientos} style={{ fontSize: 'var(--cc-size-sm)', cursor: 'pointer' }}>Ver todo</a>}>Últimos movimientos</SectionHeader>
      <Card padding="0 var(--cc-space-4)">
        {data.movements.slice(0, 5).map((m, i) => (
          <div key={m.id} style={{ borderTop: i ? '1px solid var(--cc-border)' : 'none' }}>
            <MovementRow {...m} />
          </div>
        ))}
      </Card>
    </div>
  );
}
Object.assign(window, { Inicio });
