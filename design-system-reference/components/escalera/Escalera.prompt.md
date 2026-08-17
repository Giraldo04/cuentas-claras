The signature screen element. Replaces the amortisation table: one step per month, one bar split into interest (purple) and capital (green), so you see the month you stop paying the bank and start paying yourself.

```jsx
<Escalera months={fullSchedule} currentIndex={18} window={{ from: 15, count: 18 }}
  extraPayment={extra} onExtraPaymentChange={setExtra} />
```

Same component for loan, instalment plan, mortgage and trip. Paid months dim to 0.35 with a check; the current month carries an amber ring; tapping a step expands cuota / interés / capital / saldo. Always pass the FULL schedule and use `window` to limit what is drawn — the simulator projects over every month, so a slice would make it inert on long loans. The slider re-projects the schedule and states the outcome in one sentence. In PDF, render with `simulate={false}` and put the numeric table on the following page.
