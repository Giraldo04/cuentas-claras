Switch between sibling views (Mes / Año, Todos / Ingresos / Gastos).

```jsx
<SegmentedControl options={['Mes','Año']} value={range} onChange={setRange} />
```

Use for 2–4 short options; more than that becomes a filter chip row.
