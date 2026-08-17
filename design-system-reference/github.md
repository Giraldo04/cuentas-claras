repo: Giraldo04/cuentas-claras
branch: main
path:

## Last sync
date: 2026-08-15T10:01:52Z

### Updated in this project
- Token layer rewritten verbatim from the repo's `tokens.css` (`--cc-*` names, dark theme, `--esc-*`).
- Display font switched to Piazzolla and UI to Instrument Sans per `DESIGN.md`.
- "La Escalera" built as the signature component, with the extra-payment simulator.
- PDF report kit built to the `DESIGN.md` spec (A4, watermark, KPI block, tables).

## Screen map
| Screen / file | Built from |
|---|---|
| `tokens/*.css` | `tokens.css` |
| `components/escalera/Escalera.jsx` | `DESIGN.md` § Elemento firma, `tokens.css` § --esc-* |
| `components/patterns/*` | `DESIGN.md` § Patrones de producto |
| `ui_kits/app/*` | `DESIGN.md` § Patrones de producto, § Gráficas |
| `ui_kits/reporte-pdf/index.html` | `DESIGN.md` § Documentos PDF |
| `assets/logo/*` | `DESIGN.md` § Logo |
