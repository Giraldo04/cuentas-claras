const { CommitmentCard, Escalera, Card, Amount } = window.CC_DS;

function Compromisos({ data }) {
  const [open, setOpen] = React.useState('c1');
  const [extra, setExtra] = React.useState(0);
  const totalDeuda = data.commitments.reduce((s, c) => s + c.balance, 0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)' }}>
      <Card padding="var(--cc-space-5)" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div><span className="cc-eyebrow">Saldo total</span><div style={{ marginTop: 4 }}><Amount value={totalDeuda} size={28} tone="debt" decimals={false} /></div></div>
        <div style={{ textAlign: 'right' }}><span className="cc-eyebrow">Al mes</span><div style={{ marginTop: 4 }}><Amount value={data.commitments.reduce((s, c) => s + c.monthly, 0)} size={20} tone="muted" decimals={false} /></div></div>
      </Card>
      {data.commitments.map(c => (
        <CommitmentCard key={c.id} {...c} expanded={open === c.id} onToggle={() => { setOpen(open === c.id ? null : c.id); setExtra(0); }}>
          <Escalera
            {...window.CC_WINDOW(c)}
            extraPayment={extra} onExtraPaymentChange={setExtra}
            style={{ marginTop: 'var(--cc-space-2)' }} />
        </CommitmentCard>
      ))}
    </div>
  );
}
Object.assign(window, { Compromisos });
