import { describe, expect, it } from 'vitest';
import { commitmentStatus, cuota } from './amort';

/**
 * Valores de referencia obtenidos corriendo CC_CUOTA/CC_SCHEDULE originales de
 * design-system-reference/ui_kits/app/data.js sobre los 3 compromisos de ejemplo,
 * con startDate=2025-01-01 y `today` ajustado para reproducir el mismo `paid` que
 * el prototipo (18, 5 y 9 respectivamente). Este test es una regresión de fidelidad
 * del port, no una prueba de negocio.
 */
describe('amort — regresión contra el prototipo original', () => {
  it('c1 · Apartamento Chapinero', () => {
    const status = commitmentStatus(
      { principal: 340_000_000, rate: 0.0035, totalInstallments: 240, startDate: '2025-01-01' },
      new Date(2026, 6, 1), // 18 meses después
    );
    expect(cuota(340_000_000, 0.0035, 240)).toBe(2_097_000);
    expect(status.monthly).toBe(2_097_000);
    expect(status.paid).toBe(18);
    expect(status.balance).toBe(323_179_115);
    expect(status.fullSchedule).toHaveLength(240);
    expect(status.fullSchedule.at(-1)!.balance).toBe(0);
  });

  it('c2 · Nevera a 12 cuotas', () => {
    const status = commitmentStatus(
      { principal: 3_216_000, rate: 0.019, totalInstallments: 12, startDate: '2025-01-01' },
      new Date(2025, 5, 1), // 5 meses después
    );
    expect(status.monthly).toBe(303_000);
    expect(status.paid).toBe(5);
    expect(status.balance).toBe(1_959_678);
    expect(status.fullSchedule).toHaveLength(12);
    expect(status.fullSchedule.at(-1)!.balance).toBe(0);
  });

  it('c3 · Préstamo libre inversión', () => {
    const status = commitmentStatus(
      { principal: 22_320_000, rate: 0.0145, totalInstallments: 36, startDate: '2025-01-01' },
      new Date(2025, 9, 1), // 9 meses después
    );
    expect(status.monthly).toBe(801_000);
    expect(status.paid).toBe(9);
    expect(status.balance).toBe(17_765_961);
    expect(status.fullSchedule).toHaveLength(36);
    expect(status.fullSchedule.at(-1)!.balance).toBe(0);
  });

  it('toda cuota amortiza exactamente a 0 en el último mes (invariante de consistencia)', () => {
    const cases = [
      { principal: 340_000_000, rate: 0.0035, totalInstallments: 240 },
      { principal: 3_216_000, rate: 0.019, totalInstallments: 12 },
      { principal: 22_320_000, rate: 0.0145, totalInstallments: 36 },
    ];
    for (const c of cases) {
      const status = commitmentStatus({ ...c, startDate: '2025-01-01' }, new Date(2040, 0, 1));
      expect(status.fullSchedule.at(-1)!.balance).toBe(0);
    }
  });
});
