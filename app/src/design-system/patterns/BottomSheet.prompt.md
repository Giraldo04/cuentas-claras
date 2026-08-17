Every modal in the app is a bottom sheet — there are no centred dialogs.

```jsx
<BottomSheet open={open} title="Registro rápido" onClose={close} footer={<Button fullWidth>Guardar</Button>}>…</BottomSheet>
```

Positioned absolutely inside the phone frame, so the parent needs `position: relative`.
