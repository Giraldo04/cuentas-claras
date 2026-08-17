Step 3 of quick entry, and the filter behind the "por hijo" view.

```jsx
<WhoPicker members={members} value={payer} onChange={setPayer} />
```

Payer selection excludes children; pass `label="¿Para quién?"` when the same row picks a destination instead.
