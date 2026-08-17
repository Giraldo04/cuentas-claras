# Cuentas Claras — Design System

**Cuentas claras, hogar en paz.**

PWA mobile-first de finanzas personales y del hogar. Una persona o una pareja crean un **Hogar** compartido donde ambos registran y ven los mismos ingresos, gastos fijos y variables, gastos hormiga, bolsillos de ahorro, préstamos y financiaciones amortizadas, hipoteca, viajes, y el gasto desglosado por cada hijo. Genera reportes PDF descargables.

**Principio rector: finanzas sin ansiedad.** El diseño nunca regaña al usuario. Se siente como una libreta bonita de cocina, no como un Excel ni como una app de banco. Prohibido: tono corporativo frío, alarmas rojas agresivas, gamificación infantil, culpa por gastar.

## Fuentes

| Fuente | Qué aportó |
|---|---|
| https://github.com/Giraldo04/cuentas-claras | `DESIGN.md` (principios, patrones de producto, La Escalera, spec de PDF) y `tokens.css` (**verdad única** de color, tipografía, forma, espacio y movimiento) |
| Brief de marca del cliente | Identidad, logo, paleta, accesibilidad |
| https://github.com/lucide-icons/lucide | Los 50 glifos copiados en `assets/icons/` |

El repositorio solo contiene documentación de diseño — no hay código de producto todavía. Las pantallas del UI kit son la **primera** materialización de esos documentos, no una recreación de una UI existente. Vale la pena explorar el repo a medida que crezca para afinar estas pantallas contra el producto real.

---

## CONTENT FUNDAMENTALS

**Idioma:** español de Colombia (es-CO). Tuteo (`tú`), nunca `usted` ni `vos`. La app le habla al usuario; el usuario nunca le habla a la app en primera persona ("Mis bolsillos" ✗ → "Bolsillos" ✓).

**Tono:** cálido, honesto, tranquilo, alentador. Frases cortas, verbo directo, cero jerga contable. Se enuncia el hecho y, si aporta, su equivalencia tangible. Nunca se juzga.

| Contexto | Así sí | Así no |
|---|---|---|
| Gasto hormiga | "Eso es media cuota de tu viaje a Cartagena." | "¡Cuidado! Otra vez gastaste de más 😱" |
| Vacío | "Aún no tienes bolsillos. Un bolsillo es un sobre de ahorro con nombre y meta." | "No hay datos disponibles" |
| Simulador | "Terminas 7 meses antes y te ahorras $2.340.000 en intereses." | "Optimiza tu deuda ahora" |
| Confirmación | "Listo. Lo anotamos en Mercado." | "¡Transacción registrada exitosamente!" |
| Error | "Ese monto supera tu presupuesto de agosto." | "Error: valor inválido" |

**Casing:** sentence case en todo — títulos, botones, etiquetas de nav. Solo los *eyebrows* de dato van en MAYÚSCULAS a 11px con tracking .08em ("INGRESOS DEL MES").

**Cifras:** siempre `$` + separador de miles con punto (es-CO): `$1.840.000`. Signo explícito `+` / `−` en todo movimiento. Nunca abreviar a "1,8M" en la app; en gráficas compactas se permite "1,8 M".

**Emoji:** solo en los bolsillos, donde el usuario elige el suyo. En ningún otro lugar de la interfaz, ni en microcopy, ni en reportes.

**Signos de exclamación:** máximo uno por pantalla, y preferiblemente ninguno. La calma es la marca.

---

## VISUAL FOUNDATIONS

**Color.** Verde Sereno `#0E6B54` como primario (confianza y dinero sin cliché bancario) y Ámbar Cálido `#E8964A` como acento para CTAs secundarios y destacados. El fondo nunca es blanco puro: crema `#FAF7F2`; las tarjetas sí son blancas, lo que crea una jerarquía cálida sin sombras fuertes. Seis semánticos de dinero fijos —ingreso verde, gasto terracota, ahorro azul, deuda morado, alerta ámbar, hormiga rosa— que se repiten idénticos en app, gráficas y PDF. **Regla dura: el color nunca comunica solo**; siempre lo acompaña un signo +/− y un ícono. Máximo dos fondos por pantalla (crema + blanco). Modo oscuro obligatorio vía `:root[data-theme="dark"]`, con los semánticos ~20% más luminosos.

**Tipografía.** Tres familias, tres roles: **Piazzolla** (display, serif variable de Huerta Tipográfica diseñada para el español desde el origen) solo en títulos de sección, monto héroe y portadas de PDF; **Instrument Sans** para toda la UI; **Inter** relegada exclusivamente a cifras, por sus numerales tabulares. Escala 44/32/24/20/17/15/13/11. Los montos son el héroe visual: grandes, peso 600, con el símbolo de moneda y los decimales al 62% del tamaño y 60% de opacidad — el ojo lee la magnitud primero.

**Espaciado y layout.** Base 4px, gutter lateral fijo de 20px, ancho máximo 430px (la app nunca se estira más). Bottom nav de 64px con FAB central; `env(safe-area-inset-bottom)` respetado. Áreas táctiles ≥44px sin excepciones.

**Fondos y texturas.** Planos. Sin degradados, sin fotografía, sin patrones repetidos, sin ruido. La calidez viene del crema y del serif, no de efectos. La única "imagen" del sistema es el isotipo, y solo aparece como marca de agua al 5% en los PDF.

**Ilustración.** Line-art de dos trazos en primario + ámbar, cálido y con humor suave, para estados vacíos. Se compone con glifos Lucide sobre discos `--cc-primary-soft` y `--cc-accent-soft` — no se dibujan ilustraciones nuevas a mano.

**Tarjetas.** Blancas, radio 16px, borde 1px `#E8E1D6`, sombra `xs` (`0 1px 2px rgba(20,33,28,.06)`). Borde **y** sombra juntos: el borde define en modo claro donde la sombra casi no se ve. Nunca borde de color a la izquierda. Los sheets suben a radio 24px y sombra `lg`.

**Sombras.** Todas cálidas, sobre `rgba(20,33,28,·)`, nunca gris neutro. Cinco niveles: xs (tarjetas en lista), sm (tarjeta destacada), md (elementos flotantes), lg (sheets y modales), fab (halo verde del botón +).

**Radios.** 8 chips pequeños e inputs internos · 12 inputs y botones · 16 tarjetas · 24 bottom sheets · 999 chips, avatares y FAB.

**Animación.** 140ms para press y hover, 220ms para barras, montos y tabs, 320ms para sheets. Easing estándar `cubic-bezier(.22,.61,.36,1)`; el spring `(.34,1.4,.64,1)` se reserva para el FAB y la entrada del sheet. Sin bounces alegres, sin confeti. `prefers-reduced-motion` corta toda transición.

**Hover / press.** Hover no existe en el producto principal (es táctil): en desktop, oscurecer al `-hover` del token. Press = `scale(0.97)` en 140ms, más el token `-press` en superficies primarias. Nunca opacidad como estado de press.

**Transparencia y blur.** Casi nunca. Solo el overlay del bottom sheet (`--cc-overlay`, 45% en claro / 60% en oscuro) y los tintes `color-mix` de los chips e íconos de categoría. Sin glassmorphism, sin backdrop-filter.

**Gráficas.** Donas y barras de esquinas redondeadas, sin gridlines, sin ejes, sin leyenda separada: la etiqueta va junto al dato. Siempre en la paleta semántica.

**Elemento firma — La Escalera.** Toda la audacia visual del sistema se gasta en un solo lugar: el timeline de amortización, donde cada mes es un escalón con una barra partida en morado (interés) y verde (capital). El resto de la interfaz se mantiene callada para que esto destaque.

---

## ICONOGRAPHY

- **Lucide, stroke 1.75**, esquinas redondeadas. Es el único set del sistema.
- Los 50 glifos de uso frecuente están copiados en `assets/icons/` (SVG, `currentColor`) para uso offline, en PDF y en HTML estático.
- En React se usa el componente **`Icon`**, que trae el glifo oficial desde el CDN de `lucide-static` y lo pinta al stroke de marca. Nunca se dibujan SVG a mano.
- Cada categoría de gasto tiene su ícono fijo dentro de un chip circular con su color pastel: mercado `shopping-cart`, comida `utensils`, transporte `bus`/`car`, servicios `zap`, salud `heart-pulse`, educación `graduation-cap`, hormiga `coffee`, ocio `film`, hipoteca `landmark`, financiación `credit-card`, viaje `plane`, bolsillo `piggy-bank`.
- Sin fuente de íconos, sin sprite, sin PNG. Sin emoji como ícono — salvo el emoji que el usuario elige para su bolsillo.
- Unicode: solo el signo menos tipográfico `−` (U+2212) en montos negativos, para que alinee con el `+`.

---

## Logo

Isotipo: casa de esquinas redondeadas cuyo interior es una dona partida en dos segmentos asimétricos (los dos miembros del hogar); el techo remata en un trazo ascendente que insinúa check y flecha. Un solo color plano, legible a 24px.

Variantes en `assets/logo/`: `logo-horizontal.svg`, `logo-horizontal-mono-negativo.svg`, `logo-apilado.svg`, `isotipo.svg`, `isotipo-mono-negativo.svg`, `isotipo-mono-negro.svg`, `app-icon.svg`, `pwa-maskable-512.svg`, `favicon.svg`.

El logotipo va en Piazzolla SemiBold: "Cuentas" en primario, "Claras" en texto principal.

---

## Índice

| Ruta | Qué es |
|---|---|
| `styles.css` | Punto de entrada — solo `@import`s |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `shape` · `motion` · `escalera` · `base` |
| `components/` | Primitivos React (ver abajo) |
| `ui_kits/app/` | App PWA interactiva: 5 pestañas + registro rápido |
| `ui_kits/reporte-pdf/` | Reporte mensual A4 con portada, tabla, escalera y marca de agua |
| `guidelines/` | 17 tarjetas de especimen (color, tipo, espacio, marca) |
| `assets/logo/` · `assets/icons/` | Logo (9 variantes) e íconos Lucide (50) |
| `SKILL.md` | Envoltura para usar este sistema como Agent Skill |
| `github.md` | Asociación con el repositorio de origen |

### Components

**core/** — `Button`, `IconButton`, `Input`, `Chip`, `Card`, `Badge`, `SegmentedControl`, `Icon`
**money/** — `Amount`, `StatCard`, `MovementRow`, `ProgressBar`, `DonutChart`, `BarChart`
**household/** — `MemberAvatar`, `WhoPicker`
**patterns/** — `BottomNav`, `BottomSheet`, `Keypad`, `PocketCard`, `CommitmentCard`, `AntWidget`, `EmptyState`
**escalera/** — `Escalera`

Cada componente trae `.d.ts` (contrato de props) y `.prompt.md` (cuándo y cómo usarlo).

### Adiciones intencionales

El repo define patrones de producto, no un inventario de componentes. Estos primitivos se derivaron de los patrones descritos en `DESIGN.md`; dos no aparecen nombrados allí y se añadieron por necesidad:

- **`Icon`** — envoltura de Lucide al stroke 1.75, para que ningún consumidor dibuje SVG a mano.
- **`SegmentedControl`** — el filtro Todos/Ingresos/Gastos y Mes/Año que las pantallas necesitan y que no tenía forma definida.

### Sustituciones a confirmar

- **Fuentes por CDN.** Piazzolla, Instrument Sans e Inter se cargan desde Google Fonts; no hay binarios en el repo. Si tienes los archivos `.woff2` (sobre todo el variable de Piazzolla), pásalos y los empaquetamos como `@font-face` local.
- **`DESIGN.md` menciona "Fraunces mayúsculas 64px" para la marca de agua BORRADOR/CONFIDENCIAL**, pero la fuente display del sistema es Piazzolla. Se implementó en Piazzolla por consistencia; dime si Fraunces debe entrar solo para eso.
