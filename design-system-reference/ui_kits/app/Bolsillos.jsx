const { PocketCard, Card, Amount, Button, ProgressBar, EmptyState } = window.CC_DS;

function Bolsillos({ data }) {
  const saved = data.pockets.reduce((s, p) => s + p.saved, 0);
  const goal = data.pockets.reduce((s, p) => s + p.goal, 0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)' }}>
      <Card padding="var(--cc-space-5)" tone="soft" elevation="none" style={{ borderColor: 'transparent' }}>
        <span className="cc-eyebrow" style={{ color: 'var(--cc-primary)' }}>Ahorrado en total</span>
        <div style={{ margin: '6px 0 12px' }}><Amount value={saved} size={32} tone="savings" decimals={false} /></div>
        <ProgressBar value={saved} max={goal} tone="savings" trailing={`${Math.round(saved / goal * 100)}% de tus metas`} />
      </Card>
      {data.pockets.map(p => <PocketCard key={p.id} {...p} />)}
      <Button variant="soft" iconLeft="plus" fullWidth style={{ marginTop: 'var(--cc-space-2)' }}>Crear un bolsillo</Button>
    </div>
  );
}
Object.assign(window, { Bolsillos });
