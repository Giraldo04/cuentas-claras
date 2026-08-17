Amount entry inside the quick-entry sheet — never a system keyboard for money.

```jsx
<Keypad onKey={k => setRaw(k === 'del' ? raw.slice(0,-1) : raw + k)} />
```

56px keys keep the whole grid within thumb reach.
