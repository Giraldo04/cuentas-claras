const { BottomSheet, Keypad, Chip, WhoPicker, Button, Amount, Icon } = window.CC_DS;

const CATS = [
  { name: 'Mercado', icon: 'shopping-cart', tone: 'expense' },
  { name: 'Comida fuera', icon: 'utensils', tone: 'ant' },
  { name: 'Transporte', icon: 'bus', tone: 'expense' },
  { name: 'Servicios', icon: 'zap', tone: 'warning' },
  { name: 'Salud', icon: 'heart-pulse', tone: 'expense' },
  { name: 'Colegio', icon: 'graduation-cap', tone: 'savings' },
  { name: 'Café', icon: 'coffee', tone: 'ant' },
  { name: 'Ocio', icon: 'film', tone: 'ant' }
];

/** Quick entry in 3 taps: amount -> category -> who paid. */
function QuickEntry({ open, onClose, members, onSave }) {
  const [raw, setRaw] = React.useState('');
  const [cat, setCat] = React.useState(null);
  const [who, setWho] = React.useState('ana');
  const value = Number(raw || 0);
  React.useEffect(() => { if (open) { setRaw(''); setCat(null); } }, [open]);
  return (
    <BottomSheet open={open} title="Registro rápido" onClose={onClose}
      footer={<Button variant="primary" size="lg" fullWidth disabled={!value || !cat} onClick={() => onSave({ value: -value, cat, who })}>Guardar gasto</Button>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-5)' }}>
        <div style={{ textAlign: 'center', padding: 'var(--cc-space-2) 0' }}>
          <Amount value={value} size={44} tone={value ? 'expense' : 'muted'} decimals={false} showSign={!!value} />
        </div>
        <Keypad onKey={k => setRaw(r => k === 'del' ? r.slice(0, -1) : k === '.' ? r : (r + k).slice(0, 9))} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-3)' }}>
          <span className="cc-eyebrow">¿En qué?</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CATS.map(c => <Chip key={c.name} tone={c.tone} icon={c.icon} selected={cat === c.name} onClick={() => setCat(c.name)}>{c.name}</Chip>)}
          </div>
        </div>
        <WhoPicker members={members.filter(m => !m.isChild)} value={who} onChange={setWho} />
      </div>
    </BottomSheet>
  );
}
Object.assign(window, { QuickEntry });
