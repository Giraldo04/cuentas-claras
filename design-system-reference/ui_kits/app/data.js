window.CC_DATA = {
  household: 'Casa Ruiz',
  members: [
    { id: 'ana', name: 'Ana Ruiz', color: 'var(--cc-savings)' },
    { id: 'diego', name: 'Diego M', color: 'var(--cc-primary)' },
    { id: 'tomas', name: 'Tomás', color: 'var(--cc-ant)', isChild: true },
    { id: 'lucia', name: 'Lucía', color: 'var(--cc-accent)', isChild: true }
  ],
  movements: [
    { id: 1, icon: 'shopping-cart', title: 'Mercado de la semana', meta: '14 ago', member: 'Ana', value: -182400, tone: 'expense', cat: 'Mercado' },
    { id: 2, icon: 'coffee', title: 'Café en la esquina', meta: '14 ago', member: 'Diego', value: -6500, tone: 'ant', cat: 'Hormiga' },
    { id: 3, icon: 'graduation-cap', title: 'Mensualidad colegio', meta: '13 ago', member: 'Tomás', value: -640000, tone: 'expense', cat: 'Educación' },
    { id: 4, icon: 'zap', title: 'Energía y agua', meta: '12 ago', member: 'Diego', value: -213800, tone: 'expense', cat: 'Servicios' },
    { id: 5, icon: 'piggy-bank', title: 'Abono a Viaje a Cartagena', meta: '10 ago', member: 'Ana', value: -350000, tone: 'savings', cat: 'Bolsillo' },
    { id: 6, icon: 'landmark', title: 'Cuota hipoteca', meta: '5 ago', member: 'Diego', value: -1840000, tone: 'debt', cat: 'Hipoteca' },
    { id: 7, icon: 'wallet', title: 'Nómina Ana', meta: '1 ago', member: 'Ana', value: 3100000, tone: 'income', cat: 'Salario' },
    { id: 8, icon: 'wallet', title: 'Nómina Diego', meta: '1 ago', member: 'Diego', value: 3100000, tone: 'income', cat: 'Salario' },
    { id: 9, icon: 'bus', title: 'Transporte', meta: '1 ago', member: 'Tomás', value: -48000, tone: 'expense', cat: 'Transporte' },
    { id: 10, icon: 'utensils', title: 'Almuerzo fuera', meta: '31 jul', member: 'Diego', value: -32000, tone: 'ant', cat: 'Hormiga' }
  ],
  pockets: [
    { id: 'p1', emoji: '✈️', name: 'Viaje a Cartagena', saved: 1850000, goal: 4000000 },
    { id: 'p2', emoji: '🛟', name: 'Fondo de emergencia', saved: 6200000, goal: 12000000 },
    { id: 'p3', emoji: '🎓', name: 'Universidad de Tomás', saved: 3400000, goal: 30000000 },
    { id: 'p4', emoji: '🎄', name: 'Diciembre', saved: 420000, goal: 2500000 }
  ],
  categories: [
    { name: 'Mercado', icon: 'shopping-cart', value: 1284000, color: 'var(--cc-expense)' },
    { name: 'Hipoteca', icon: 'landmark', value: 1840000, color: 'var(--cc-debt)' },
    { name: 'Educación', icon: 'graduation-cap', value: 640000, color: 'var(--cc-savings)' },
    { name: 'Servicios', icon: 'zap', value: 213800, color: 'var(--cc-warning)' },
    { name: 'Hormiga', icon: 'coffee', value: 214300, color: 'var(--cc-ant)' }
  ],
  commitments: [
    { id: 'c1', kind: 'hipoteca', name: 'Apartamento Chapinero', paid: 18, total: 240, rate: 0.0035, principal: 340000000 },
    { id: 'c2', kind: 'financiacion', name: 'Nevera a 12 cuotas', paid: 5, total: 12, rate: 0.019, principal: 3216000 },
    { id: 'c3', kind: 'prestamo', name: 'Préstamo libre inversión', paid: 9, total: 36, rate: 0.0145, principal: 22320000 }
  ]
};

window.CC_SCHEDULE = function (principal, rate, n, monthly, startMonth, startYear) {
  const out = []; let bal = principal;
  const M = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  for (let i = 0; i < n && bal > 0; i++) {
    const interest = bal * rate;
    const capital = Math.max(0, Math.min(monthly - interest, bal));
    bal = Math.max(0, bal - capital);
    const mi = (startMonth + i) % 12, yr = startYear + Math.floor((startMonth + i) / 12);
    out.push({ label: M[mi] + ' ' + yr, capital, interest, balance: bal });
  }
  return out;
};

/* Ventana de la Escalera: 3 meses pagados + el actual + 14 por venir.
   El primer pago de cada compromiso se calcula hacia atrás desde agosto de 2026. */
window.CC_WINDOW = function (c) {
  const start = 7 - c.paid;            // agosto = índice 7
  const startMonth = ((start % 12) + 12) % 12;
  const startYear = 2026 + Math.floor(start / 12);
  const full = window.CC_SCHEDULE(c.principal, c.rate, c.total, c.monthly, startMonth, startYear);
  return { months: full, currentIndex: c.paid, window: { from: Math.max(0, c.paid - 3), count: 18 } };
};

/* Cuota de amortización francesa: M = P·r / (1 − (1+r)^−n).
   Se calcula, nunca se escribe a mano, para que el crédito llegue a cero en su plazo. */
window.CC_CUOTA = function (principal, rate, n) {
  return Math.ceil(principal * rate / (1 - Math.pow(1 + rate, -n)) / 1000) * 1000;
};

window.CC_DATA.commitments.forEach(c => {
  c.monthly = window.CC_CUOTA(c.principal, c.rate, c.total);
  const full = window.CC_SCHEDULE(c.principal, c.rate, c.total, c.monthly, 0, 2025);
  c.balance = Math.round(full[Math.min(c.paid, full.length) - 1].balance);
  if (full[full.length - 1].balance > 1) console.warn('Escalera: el crédito ' + c.name + ' no amortiza a cero');
});

/* La cuota de la hipoteca aparece en tres pantallas: se toma siempre de la misma fuente. */
(function () {
  const hipoteca = window.CC_DATA.commitments.find(c => c.kind === 'hipoteca');
  const mv = window.CC_DATA.movements.find(m => m.cat === 'Hipoteca');
  if (mv) mv.value = -hipoteca.monthly;
  const cat = window.CC_DATA.categories.find(c => c.name === 'Hipoteca');
  if (cat) cat.value = hipoteca.monthly;
})();
