# UI kit — App PWA Cuentas Claras

Recreación interactiva de la app móvil (390×800). Compone los primitivos del sistema; no reimplementa ninguno.

| Archivo | Pantalla |
|---|---|
| `Shell.jsx` | Marco de teléfono, status bar, header y bottom nav |
| `Inicio.jsx` | Dashboard: disponible, KPIs, dona por categoría, gastos hormiga, últimos movimientos |
| `Movimientos.jsx` | Lista filtrable por tipo y por miembro |
| `Bolsillos.jsx` | Sobres de ahorro con meta y progreso |
| `Compromisos.jsx` | Préstamos, financiaciones e hipoteca con **La Escalera** expandible |
| `Hogar.jsx` | Miembros, vista por hijo y descarga de reporte |
| `QuickEntry.jsx` | Bottom sheet de registro rápido: monto → categoría → quién pagó |
| `data.js` | Datos de ejemplo (es-CO) y generador de tabla de amortización |

El botón luna/sol del header conmuta `data-theme="dark"` sobre el documento.
