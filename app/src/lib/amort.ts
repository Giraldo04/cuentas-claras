/**
 * Amortización francesa (cuota fija). Port fiel de CC_CUOTA/CC_SCHEDULE/CC_WINDOW
 * de design-system-reference/ui_kits/app/data.js, con una diferencia deliberada:
 * el ancla de "hoy" ya no es un mes fijo (agosto 2026) sino la fecha real (startDate/today),
 * porque en producción `paid` se deriva de una fecha de inicio persistida, no de un contador manual.
 */

const MONTH_LABELS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export interface CommitmentInput {
  principal: number;
  /** Tasa mensual, decimal (0.0035 = 0.35%/mes). */
  rate: number;
  totalInstallments: number;
  startDate: string | Date;
}

export interface ScheduleMonth {
  label: string;
  year: number;
  monthIndex: number;
  capital: number;
  interest: number;
  balance: number;
}

export interface CommitmentStatus {
  monthly: number;
  balance: number;
  paid: number;
  fullSchedule: ScheduleMonth[];
}

export interface EscaleraWindow {
  months: ScheduleMonth[];
  currentIndex: number;
  window: { from: number; count: number };
}

/** M = P·r / (1 − (1+r)^−n), redondeada hacia arriba al millar. Se calcula, nunca se escribe a mano. */
export function cuota(principal: number, rate: number, n: number): number {
  return Math.ceil((principal * rate) / (1 - Math.pow(1 + rate, -n)) / 1000) * 1000;
}

export function schedule(principal: number, rate: number, n: number, monthly: number, startDate: Date): ScheduleMonth[] {
  const out: ScheduleMonth[] = [];
  let bal = principal;
  const startMonth = startDate.getMonth();
  const startYear = startDate.getFullYear();
  for (let i = 0; i < n && bal > 0; i++) {
    const interest = bal * rate;
    const capital = Math.max(0, Math.min(monthly - interest, bal));
    bal = Math.max(0, bal - capital);
    const monthIndex = (startMonth + i) % 12;
    const year = startYear + Math.floor((startMonth + i) / 12);
    out.push({ label: `${MONTH_LABELS[monthIndex]} ${year}`, year, monthIndex, capital, interest, balance: bal });
  }
  return out;
}

function toDate(d: string | Date): Date {
  return typeof d === 'string' ? new Date(d) : d;
}

export function monthsElapsed(startDate: Date, today: Date): number {
  const months = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
  return Math.max(0, months);
}

/** monthly/balance/paid nunca se persisten de forma independiente: siempre se derivan de principal/rate/total/startDate. */
export function commitmentStatus(c: CommitmentInput, today: Date = new Date()): CommitmentStatus {
  const start = toDate(c.startDate);
  const monthly = cuota(c.principal, c.rate, c.totalInstallments);
  const fullSchedule = schedule(c.principal, c.rate, c.totalInstallments, monthly, start);
  const paid = Math.min(monthsElapsed(start, today), fullSchedule.length);
  const balance = paid > 0 ? Math.round(fullSchedule[paid - 1].balance) : c.principal;
  return { monthly, balance, paid, fullSchedule };
}

/** Ventana de la Escalera: 3 meses pagados + el actual + 14 por venir. */
export function escaleraWindow(c: CommitmentInput, today: Date = new Date()): EscaleraWindow {
  const status = commitmentStatus(c, today);
  return {
    months: status.fullSchedule,
    currentIndex: status.paid,
    window: { from: Math.max(0, status.paid - 3), count: 18 },
  };
}
