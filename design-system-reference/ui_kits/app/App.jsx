const { BottomSheet, Button, Icon, IconButton } = window.CC_DS;

function App() {
  const [tab, setTab] = React.useState('inicio');
  const [sheet, setSheet] = React.useState(false);
  const [saved, setSaved] = React.useState(null);
  const [dark, setDark] = React.useState(false);
  const [data, setData] = React.useState(window.CC_DATA);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const titles = {
    inicio: ['Agosto 2026', 'Hola, Ana'],
    movimientos: ['Agosto 2026', 'Movimientos'],
    bolsillos: ['Casa Ruiz', 'Bolsillos'],
    compromisos: ['Casa Ruiz', 'Compromisos'],
    hogar: ['Tu hogar', 'Casa Ruiz']
  };
  const [sub, title] = titles[tab];

  const handleSave = (mv) => {
    const cat = mv.cat;
    const member = data.members.find(m => m.id === mv.who);
    setData({ ...data, movements: [{ id: Date.now(), icon: 'receipt', title: cat, meta: 'hoy', member: member.name.split(' ')[0], value: mv.value, tone: cat === 'Café' || cat === 'Comida fuera' || cat === 'Ocio' ? 'ant' : 'expense', cat }, ...data.movements] });
    setSheet(false);
    setSaved('Listo. Lo anotamos en ' + cat + '.');
    setTimeout(() => setSaved(null), 2600);
  };

  const right = (
    <div style={{ display: 'flex', gap: 4 }}>
      {tab === 'bolsillos' && <IconButton name="plus" label="Nuevo bolsillo" tone="soft" size={38} />}
      <IconButton name={dark ? 'sun' : 'moon'} label="Cambiar tema" tone="surface" size={38} onClick={() => setDark(!dark)} />
    </div>
  );

  return (
    <PhoneShell tab={tab} onTab={setTab} onFab={() => setSheet(true)} title={title} subtitle={sub} right={right} scrollKey={tab}>
      {tab === 'inicio' && <Inicio data={data} onOpenMovimientos={() => setTab('movimientos')} />}
      {tab === 'movimientos' && <Movimientos data={data} />}
      {tab === 'bolsillos' && <Bolsillos data={data} />}
      {tab === 'compromisos' && <Compromisos data={data} />}
      {tab === 'hogar' && (
        <div>
          <Hogar data={data} />
          <div style={{ marginTop: 'var(--cc-space-3)' }}>
            <Button variant="secondary" fullWidth iconLeft="landmark" onClick={() => setTab('compromisos')}>Ver compromisos y La Escalera</Button>
          </div>
        </div>
      )}
      <QuickEntry open={sheet} onClose={() => setSheet(false)} members={data.members} onSave={handleSave} />
      {saved && (
        <div style={{
          position: 'absolute', left: 20, right: 20, bottom: 84, zIndex: 50,
          display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
          background: 'var(--cc-primary)', color: 'var(--cc-primary-contrast)',
          borderRadius: 'var(--cc-radius-sm)', boxShadow: 'var(--cc-shadow-md)', fontSize: 'var(--cc-size-base)'
        }}>
          <Icon name="circle-check" size={18} />{saved}
        </div>
      )}
    </PhoneShell>
  );
}
Object.assign(window, { App });
