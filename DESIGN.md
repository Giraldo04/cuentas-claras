# Cuentas Claras — Design System

**Cuentas claras, hogar en paz.**

PWA mobile-first de finanzas personales y del hogar. Una persona o una pareja
crean un **Hogar** compartido donde ambos registran y ven los mismos ingresos,
gastos fijos y variables, gastos hormiga, bolsillos de ahorro, préstamos y
financiaciones amortizadas, hipoteca, viajes, y gasto desglosado por cada hijo.

---

## Principio rector

**Finanzas sin ansiedad.** El diseño nunca regaña al usuario. Debe sentirse como
una libreta bonita de cocina, no como un Excel ni como una app de banco.
Cálido, honesto, tranquilo, alentador.

Prohibido: tono corporativo frío, alarmas rojas agresivas, gamificación
infantil, culpa por gastar.

---

## Color

Todos los valores viven en `tokens.css`. No hardcodear hex fuera de ahí.

| Rol | Token | Light |
|---|---|---|
| Primario | `--cc-primary` | `#0E6B54` |
| Acento | `--cc-accent` | `#E8964A` |
| Fondo | `--cc-bg` | `#FAF7F2` |
| Superficie | `--cc-surface` | `#FFFFFF` |
| Texto | `--cc-text` | `#14211C` |

### Semánticos de dinero (consistentes en toda la app)

| Concepto | Token | Light |
|---|---|---|
| Ingreso | `--cc-income` | `#1E9E6A` |
| Gasto | `--cc-expense` | `#D9524F` |
| Ahorro / bolsillos | `--cc-savings` | `#3D7EA6` |
| Deuda / préstamos | `--cc-debt` | `#7C5CBF` |
| Alerta de presupuesto | `--cc-warning` | `#E0A63C` |
| Gasto hormiga | `--cc-ant` | `#C97B9A` |

**Regla dura:** nunca comunicar ingreso vs. gasto solo con color. Siempre
acompañar con signo `+` / `−` e ícono.

Modo oscuro es obligatorio y ya está definido en `:root[data-theme="dark"]`.

---

## Tipografía

Tres roles, tres familias. Ninguna es la opción por defecto.

- **Display / títulos: Piazzolla** (Huerta Tipográfica, Argentina). Serif
  variable diseñada para el español desde el origen — la eñe y los acentos no
  son un parche posterior. Eje de tamaño óptico. Uso restringido: títulos de
  sección, monto héroe, portadas de PDF. Nunca en párrafos largos ni en botones.
- **UI / cuerpo: Instrument Sans.** Neutral pero con carácter, ligeramente
  estrecha, aguanta bien en tamaños pequeños de interfaz.
- **Cifras: Inter**, exclusivamente. Se queda en el sistema solo por sus
  numerales tabulares. Usar la clase `.cc-amount`. El símbolo de moneda y los
  decimales van al 62% del tamaño y 60% de opacidad — el ojo lee la magnitud
  primero.

Escala: 44 / 32 / 24 / 20 / 17 / 15 / 13 / 11.

---

## Forma y elevación

- Radios: 12px inputs y botones, 16px tarjetas, 24px bottom sheets, 999px chips.
- Sombras cálidas (base `rgba(20,33,28,·)`), nunca gris neutro.
- Espaciado base 4px. Gutter lateral 20px. Ancho máximo 430px.
- Iconografía: Lucide, stroke 1.75.

---

## Patrones de producto

- **Bottom nav de 5:** Inicio · Movimientos · `[+]` FAB · Bolsillos · Hogar.
- **Registro rápido:** el FAB abre un bottom sheet. Máximo 3 taps:
  monto (teclado numérico grande) → categoría → quién pagó.
- **Selector "¿Quién?":** avatares de los miembros del hogar siempre visibles.
  Los hijos aparecen como destino de gasto, no como pagador.
- **Compromisos** (préstamo, financiación, hipoteca, viaje): tarjeta con barra de
  cuotas pagadas + timeline expandible de amortización mes a mes
  (capital / interés / saldo).
- **Gastos hormiga:** widget propio que suma micro-gastos y los traduce a algo
  tangible ("esto es una cuota de tu viaje"). Tono amable, nunca culpígeno.
- **Bolsillos:** sobres de ahorro con meta, color y emoji propios.
- **Vista por hijo:** filtro que reagrupa todo el gasto asociado a un miembro.
- Multi-moneda, formato de miles con punto (es-CO).

---

## Gráficas

Donas y barras con esquinas redondeadas. Sin gridlines pesadas. Etiquetas
directas sobre el dato en vez de leyendas separadas. Siempre en la paleta
semántica de arriba.

---

## Elemento firma — "La Escalera"

Es la pantalla por la que la gente recuerda la app. Toda la audacia visual del
sistema se gasta aquí; el resto de la interfaz se mantiene callada para que esto
destaque.

Reemplaza la tabla de amortización tradicional. Cada mes del crédito es un
**escalón** en un riel vertical. Dentro de cada escalón hay una sola barra
partida en dos:

- **morado (`--esc-interest`)** = lo que se va en interés,
- **verde (`--esc-capital`)** = lo que realmente baja tu deuda.

A medida que bajas por la escalera, la banda morada se encoge y la verde crece.
El usuario *ve* el momento exacto en que deja de pagarle al banco y empieza a
pagarse a sí mismo. Eso no se entiende leyendo una tabla de números.

Reglas de comportamiento:

- Los meses pagados van atenuados (`--esc-paid-opacity`) con un check; el mes
  actual lleva un anillo en `--esc-today-ring`.
- El riel izquierdo muestra el saldo restante; se engrosa donde queda más deuda.
- Tocar un escalón lo expande con el detalle: cuota, interés, capital, saldo,
  fecha de pago.
- **Simulador de abono extra:** un slider en el pie. Al moverlo, la escalera se
  reanima y los meses que desaparecen se desvanecen con un resplandor
  (`--esc-saved-glow`), acompañados de una sola frase: "Terminas 7 meses antes
  y te ahorras $2.340.000 en intereses."
- Al exportar a PDF, la escalera se rasteriza tal cual y la tabla numérica va
  como anexo en la página siguiente. La escalera es el reporte; la tabla es el
  respaldo.
- Con `prefers-reduced-motion`, la reanimación es un corte seco sin transición.

Se reutiliza idéntica para préstamo, financiación de producto, hipoteca y viaje
por cuotas. Un solo componente, cuatro productos.

---

## Documentos PDF

- A4 vertical, márgenes 18mm, mismo sistema tipográfico y de color.
- **Encabezado:** banda `--cc-bg` con logo horizontal a la izquierda; a la
  derecha "Reporte de [tipo] · [rango] · Hogar: [nombre]".
- **KPIs:** 3–4 tarjetas, borde 1px `--cc-border`, radio 12px, cifra 24px
  tabular, etiqueta 10px mayúsculas `letter-spacing: .08em`.
- **Tablas:** encabezado con fondo `--cc-primary-soft`, filas alternas
  `--cc-surface-alt`, montos a la derecha en tabular-nums, chip de color por
  categoría. Sin bordes verticales.
- **Pie:** línea 1px, izquierda "Generado con Cuentas Claras · [fecha]",
  centro el tagline, derecha "Página X de Y".
- **Marca de agua:** isotipo casa-dona centrado, 45% del ancho de página,
  rotado −22°, `--cc-primary` al 5% de opacidad, detrás del contenido.
  Variantes "BORRADOR" y "CONFIDENCIAL" en Fraunces mayúsculas 64px al 7%.

---

## Logo

Isotipo: casa de esquinas muy redondeadas cuyo interior es un gráfico de dona
partido en dos segmentos asimétricos (los dos miembros del hogar). El techo se
forma con dos trazos que al unirse insinúan un check y una flecha ascendente.
Un solo color plano, sin degradados. Debe funcionar a 24px y en negativo.

Variantes requeridas: horizontal, apilado, isotipo, monocromo, favicon, e ícono
PWA maskable 512px con safe area.

---

## Piso de calidad

- Contraste AA mínimo en todo texto.
- Áreas táctiles ≥ 44px (`.cc-tappable`).
- Foco de teclado visible.
- `prefers-reduced-motion` respetado.
- El layout no se rompe con texto ampliado del sistema.
- Funciona offline (es una PWA).
