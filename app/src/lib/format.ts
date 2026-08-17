/** Formateo es-CO compartido fuera de componentes (reportes, agregados, meta de movimientos). */

export function formatCOP(value: number, { showSign = false }: { showSign?: boolean } = {}): string {
  const abs = Math.round(Math.abs(value)).toLocaleString('es-CO');
  const sign = value < 0 ? '−' : showSign ? '+' : '';
  return `${sign}$${abs}`;
}

const WEEKDAY_MONTH = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short' });

/** "14 ago" — el formato de fecha corta que usan las filas de movimiento. */
export function formatShortDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return WEEKDAY_MONTH.format(d).replace('.', '');
}
