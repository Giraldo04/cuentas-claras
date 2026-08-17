/* @ds-bundle: {"format":4,"namespace":"CuentasClarasDesignSystem_f1fde6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Escalera","sourcePath":"components/escalera/Escalera.jsx"},{"name":"MemberAvatar","sourcePath":"components/household/MemberAvatar.jsx"},{"name":"WhoPicker","sourcePath":"components/household/WhoPicker.jsx"},{"name":"Amount","sourcePath":"components/money/Amount.jsx"},{"name":"BarChart","sourcePath":"components/money/BarChart.jsx"},{"name":"DonutChart","sourcePath":"components/money/DonutChart.jsx"},{"name":"MovementRow","sourcePath":"components/money/MovementRow.jsx"},{"name":"ProgressBar","sourcePath":"components/money/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/money/StatCard.jsx"},{"name":"AntWidget","sourcePath":"components/patterns/AntWidget.jsx"},{"name":"BottomNav","sourcePath":"components/patterns/BottomNav.jsx"},{"name":"BottomSheet","sourcePath":"components/patterns/BottomSheet.jsx"},{"name":"CommitmentCard","sourcePath":"components/patterns/CommitmentCard.jsx"},{"name":"EmptyState","sourcePath":"components/patterns/EmptyState.jsx"},{"name":"Keypad","sourcePath":"components/patterns/Keypad.jsx"},{"name":"PocketCard","sourcePath":"components/patterns/PocketCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8ca24990cab2","components/core/Button.jsx":"37de86d9fccd","components/core/Card.jsx":"6e0938250f92","components/core/Chip.jsx":"d143dc79d35e","components/core/Icon.jsx":"eafeab8ae6d0","components/core/IconButton.jsx":"706c73fb200a","components/core/Input.jsx":"a86a83dcba75","components/core/SegmentedControl.jsx":"8eedef7d5b80","components/escalera/Escalera.jsx":"d5ae354ff511","components/household/MemberAvatar.jsx":"bbcc0ca8ea70","components/household/WhoPicker.jsx":"d24e9a83b75f","components/money/Amount.jsx":"c50ecb59e059","components/money/BarChart.jsx":"1c7cf915253c","components/money/DonutChart.jsx":"6993366dc1f1","components/money/MovementRow.jsx":"5ffaab424c61","components/money/ProgressBar.jsx":"f285d02e8815","components/money/StatCard.jsx":"56cf7b7609f3","components/patterns/AntWidget.jsx":"2d7bd51119a6","components/patterns/BottomNav.jsx":"bf98b73ee7b5","components/patterns/BottomSheet.jsx":"1042dd99a1bf","components/patterns/CommitmentCard.jsx":"8b3b3979785a","components/patterns/EmptyState.jsx":"59f55de9af8b","components/patterns/Keypad.jsx":"c1e2ab04f726","components/patterns/PocketCard.jsx":"7733628423d5","ui_kits/app/App.jsx":"0dc9825ddc03","ui_kits/app/Bolsillos.jsx":"0e7d8a7c7120","ui_kits/app/Compromisos.jsx":"b8ccfd298110","ui_kits/app/Hogar.jsx":"5fe14811efef","ui_kits/app/Inicio.jsx":"9f56f20e7008","ui_kits/app/Movimientos.jsx":"7fcb3db094d7","ui_kits/app/QuickEntry.jsx":"134636110186","ui_kits/app/Shell.jsx":"957c082730b4","ui_kits/app/data.js":"0264e9efb54c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CuentasClarasDesignSystem_f1fde6 = window.CuentasClarasDesignSystem_f1fde6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tiny uppercase status label. */
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const map = {
    neutral: ['var(--cc-surface-sunken)', 'var(--cc-text-secondary)'],
    income: ['var(--cc-income-soft)', 'var(--cc-income)'],
    expense: ['var(--cc-expense-soft)', 'var(--cc-expense)'],
    warning: ['var(--cc-warning-soft)', 'var(--cc-warning)'],
    debt: ['var(--cc-debt-soft)', 'var(--cc-debt)'],
    savings: ['var(--cc-savings-soft)', 'var(--cc-savings)']
  };
  const [bg, fg] = map[tone] || map.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: '3px 8px',
      background: bg,
      color: fg,
      borderRadius: 'var(--cc-radius-xs)',
      fontSize: 'var(--cc-size-xs)',
      fontWeight: 'var(--cc-weight-semi)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--cc-tracking-eyebrow)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Base surface: white card, 16px radius, warm shadow. */
function Card({
  padding = 'var(--cc-space-4)',
  tone = 'surface',
  elevation = 'xs',
  children,
  style,
  ...rest
}) {
  const bg = {
    surface: 'var(--cc-surface)',
    alt: 'var(--cc-surface-alt)',
    soft: 'var(--cc-primary-soft)',
    sunken: 'var(--cc-surface-sunken)'
  }[tone] || 'var(--cc-surface)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      border: '1px solid var(--cc-border)',
      borderRadius: 'var(--cc-radius-md)',
      boxShadow: elevation === 'none' ? 'none' : `var(--cc-shadow-${elevation})`,
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cache = {};
const BASE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/** Lucide icon, stroke 1.75 per DESIGN.md. Fetches the official SVG once and inlines its paths. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [markup, setMarkup] = React.useState(cache[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (cache[name]) {
      setMarkup(cache[name]);
      return;
    }
    fetch(BASE + name + '.svg').then(r => r.text()).then(t => {
      const inner = t.replace(/[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*/, '').trim();
      cache[name] = inner;
      if (alive) setMarkup(inner);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup || ''
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: 36,
    px: 14,
    fs: 'var(--cc-size-sm)',
    icon: 16
  },
  md: {
    h: 44,
    px: 18,
    fs: 'var(--cc-size-base)',
    icon: 18
  },
  lg: {
    h: 52,
    px: 22,
    fs: 'var(--cc-size-lg)',
    icon: 20
  }
};
const variants = {
  primary: {
    background: 'var(--cc-primary)',
    color: 'var(--cc-primary-contrast)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--cc-accent)',
    color: '#3A1F06',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--cc-surface)',
    color: 'var(--cc-text)',
    border: '1px solid var(--cc-border)'
  },
  soft: {
    background: 'var(--cc-primary-soft)',
    color: 'var(--cc-primary)',
    border: '1px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--cc-primary)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--cc-expense-soft)',
    color: 'var(--cc-expense)',
    border: '1px solid transparent'
  }
};

/** Primary action control. Never uses the display serif — labels are Instrument Sans. */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--cc-space-2)',
      minHeight: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : undefined,
      font: 'inherit',
      fontFamily: 'var(--cc-font-body)',
      fontSize: s.fs,
      fontWeight: 'var(--cc-weight-semi)',
      lineHeight: 1,
      borderRadius: 'var(--cc-radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--cc-dur-fast) var(--cc-ease), background var(--cc-dur-fast) var(--cc-ease)',
      transform: press && !disabled ? 'scale(0.97)' : 'none',
      ...v,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: ['var(--cc-surface-sunken)', 'var(--cc-text-secondary)'],
  primary: ['var(--cc-primary-soft)', 'var(--cc-primary)'],
  income: ['var(--cc-income-soft)', 'var(--cc-income)'],
  expense: ['var(--cc-expense-soft)', 'var(--cc-expense)'],
  savings: ['var(--cc-savings-soft)', 'var(--cc-savings)'],
  debt: ['var(--cc-debt-soft)', 'var(--cc-debt)'],
  warning: ['var(--cc-warning-soft)', 'var(--cc-warning)'],
  ant: ['var(--cc-ant-soft)', 'var(--cc-ant)']
};

/** Pill label for categories, filters and states. */
function Chip({
  tone = 'neutral',
  icon,
  selected,
  onClick,
  children,
  style,
  ...rest
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: '0 12px',
      background: selected ? fg : bg,
      color: selected ? 'var(--cc-surface)' : fg,
      borderRadius: 'var(--cc-radius-full)',
      fontSize: 'var(--cc-size-sm)',
      fontWeight: 'var(--cc-weight-medium)',
      whiteSpace: 'nowrap',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square 44px tap target holding a single Lucide glyph. */
function IconButton({
  name,
  label,
  tone = 'default',
  size = 44,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: 'transparent',
      color: 'var(--cc-text-secondary)'
    },
    surface: {
      background: 'var(--cc-surface)',
      color: 'var(--cc-text)',
      boxShadow: 'var(--cc-shadow-xs)'
    },
    soft: {
      background: 'var(--cc-primary-soft)',
      color: 'var(--cc-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      border: 'none',
      borderRadius: 'var(--cc-radius-full)',
      cursor: 'pointer',
      ...(tones[tone] || tones.default),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text/number field on the sunken surface. Label sits above, never as placeholder-only. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  suffix,
  style,
  id,
  ...rest
}) {
  const rid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 'var(--cc-size-sm)',
      fontWeight: 'var(--cc-weight-medium)',
      color: 'var(--cc-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-2)',
      minHeight: 48,
      padding: '0 var(--cc-space-4)',
      background: 'var(--cc-surface-sunken)',
      border: `1px solid ${error ? 'var(--cc-expense)' : 'var(--cc-border)'}`,
      borderRadius: 'var(--cc-radius-sm)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--cc-text-tertiary)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontFamily: 'var(--cc-font-body)',
      fontSize: 'var(--cc-size-lg)',
      color: 'var(--cc-text)',
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-tertiary)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: error ? 'var(--cc-expense)' : 'var(--cc-text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
/** Two-to-four exclusive options in one sunken track. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      gap: 2,
      padding: 3,
      background: 'var(--cc-surface-sunken)',
      borderRadius: 'var(--cc-radius-full)',
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        minHeight: 36,
        border: 'none',
        borderRadius: 'var(--cc-radius-full)',
        cursor: 'pointer',
        background: on ? 'var(--cc-surface)' : 'transparent',
        boxShadow: on ? 'var(--cc-shadow-xs)' : 'none',
        color: on ? 'var(--cc-text)' : 'var(--cc-text-secondary)',
        fontFamily: 'var(--cc-font-body)',
        fontSize: 'var(--cc-size-sm)',
        fontWeight: 'var(--cc-weight-semi)',
        transition: 'background var(--cc-dur-fast) var(--cc-ease)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/household/MemberAvatar.jsx
try { (() => {
/** Circular initial avatar for a household member; children render with a dashed ring. */
function MemberAvatar({
  name = '',
  color = 'var(--cc-primary)',
  size = 40,
  isChild = false,
  selected = false,
  onClick,
  style
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    title: name,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--cc-radius-full)',
      background: `color-mix(in oklab, ${color} 18%, transparent)`,
      color,
      fontFamily: 'var(--cc-font-body)',
      fontSize: size * 0.36,
      fontWeight: 'var(--cc-weight-semi)',
      border: isChild ? `1.5px dashed ${color}` : selected ? `2px solid ${color}` : '2px solid transparent',
      boxShadow: selected ? `0 0 0 3px color-mix(in oklab, ${color} 18%, transparent)` : 'none',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { MemberAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/household/MemberAvatar.jsx", error: String((e && e.message) || e) }); }

// components/household/WhoPicker.jsx
try { (() => {
/** "¿Quién?" selector — always visible during quick entry. */
function WhoPicker({
  members = [],
  value,
  onChange,
  label = '¿Quién pagó?',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--cc-space-4)'
    }
  }, members.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => onChange && onChange(m.id),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MemberAvatar, {
    name: m.name,
    color: m.color,
    isChild: m.isChild,
    selected: m.id === value,
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: m.id === value ? 'var(--cc-text)' : 'var(--cc-text-secondary)',
      fontWeight: m.id === value ? 'var(--cc-weight-semi)' : 400
    }
  }, m.name.split(' ')[0])))));
}
Object.assign(__ds_scope, { WhoPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/household/WhoPicker.jsx", error: String((e && e.message) || e) }); }

// components/money/Amount.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fmt = n => {
  const abs = Math.abs(n);
  const int = Math.floor(abs).toLocaleString('es-CO');
  const dec = Math.round((abs - Math.floor(abs)) * 100);
  return [int, String(dec).padStart(2, '0')];
};
const toneColor = {
  income: 'var(--cc-income)',
  expense: 'var(--cc-expense)',
  savings: 'var(--cc-savings)',
  debt: 'var(--cc-debt)',
  ant: 'var(--cc-ant)',
  neutral: 'var(--cc-text)',
  muted: 'var(--cc-text-secondary)'
};

/** Money figure. Inter + tabular-nums; currency and decimals at 62% / 60% opacity. */
function Amount({
  value = 0,
  size = 20,
  tone = 'neutral',
  currency = '$',
  showSign = false,
  decimals = true,
  weight = 'var(--cc-weight-semi)',
  style,
  ...rest
}) {
  const [int, dec] = fmt(value);
  const sign = showSign ? value < 0 ? '−' : '+' : value < 0 ? '−' : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "cc-amount",
    style: {
      fontSize: size,
      lineHeight: 1.1,
      color: toneColor[tone] || toneColor.neutral,
      fontWeight: weight,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), sign, /*#__PURE__*/React.createElement("span", {
    className: "cc-amount__currency"
  }, currency), int, decimals && /*#__PURE__*/React.createElement("span", {
    className: "cc-amount__decimals"
  }, ",", dec));
}
Object.assign(__ds_scope, { Amount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/Amount.jsx", error: String((e && e.message) || e) }); }

// components/escalera/Escalera.jsx
try { (() => {
const money = n => '$' + Math.round(n).toLocaleString('es-CO');

/**
 * ELEMENTO FIRMA — "La Escalera".
 * Each month of a credit is a step. One bar per step, split into interest (purple)
 * and capital (green). As you walk down, purple shrinks and green grows.
 */
function Escalera({
  months = [],
  currentIndex = 0,
  window: win,
  extraPayment = 0,
  onExtraPaymentChange,
  simulate = true,
  style
}) {
  const [open, setOpen] = React.useState(null);
  const projected = React.useMemo(() => {
    if (!extraPayment) return months;
    let saldo = null;
    const out = [];
    for (let i = 0; i < months.length; i++) {
      const m = months[i];
      if (i <= currentIndex || saldo === null) {
        saldo = m.balance;
        out.push(m);
        continue;
      }
      const capital = m.capital + extraPayment;
      saldo = Math.max(0, saldo - capital);
      out.push({
        ...m,
        capital,
        balance: saldo
      });
      if (saldo <= 0) break;
    }
    return out;
  }, [months, extraPayment, currentIndex]);
  const removed = months.length - projected.length;
  const savedInterest = months.slice(projected.length).reduce((s, m) => s + m.interest, 0);
  const maxCuota = Math.max(...months.map(m => m.capital + m.interest), 1);
  // La proyección corre sobre el calendario completo; sólo se dibuja la ventana visible.
  const from = win ? Math.min(win.from || 0, Math.max(0, projected.length - 1)) : 0;
  const visible = win ? projected.slice(from, from + (win.count || 18)) : projected;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-4)'
    }
  }, /*#__PURE__*/React.createElement(LegendDot, {
    color: "var(--esc-interest)",
    label: "Inter\xE9s"
  }), /*#__PURE__*/React.createElement(LegendDot, {
    color: "var(--esc-capital)",
    label: "Capital"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--esc-step-gap)'
    }
  }, visible.map((m, vi) => {
    const i = from + vi;
    const paid = i < currentIndex;
    const today = i === currentIndex;
    const cuota = m.capital + m.interest;
    const w = cuota / maxCuota * 100;
    const ip = m.interest / cuota * 100;
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: m.label + i,
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--cc-space-3)',
        minHeight: isOpen ? undefined : 'var(--esc-step-height)',
        padding: 'var(--cc-space-2) var(--cc-space-2) var(--cc-space-2) 0',
        opacity: paid ? 'var(--esc-paid-opacity)' : 1,
        borderRadius: 'var(--cc-radius-sm)',
        cursor: 'pointer',
        background: isOpen ? 'var(--cc-surface-sunken)' : 'transparent',
        boxShadow: today ? 'inset 0 0 0 2px var(--esc-today-ring)' : 'none',
        transition: 'opacity var(--cc-dur-base) var(--cc-ease)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        width: 34,
        flex: 'none',
        alignSelf: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: Math.max(2, m.balance / (months[0]?.balance || 1) * 8),
        background: 'var(--cc-border-strong)',
        borderRadius: 999
      }
    }), paid && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        width: 18,
        height: 18,
        borderRadius: 999,
        background: 'var(--cc-income)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 12,
      color: "#fff",
      strokeWidth: 2.5
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--cc-size-sm)',
        color: 'var(--cc-text-secondary)',
        fontWeight: today ? 'var(--cc-weight-semi)' : 400
      }
    }, m.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--cc-font-numeric)',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 'var(--cc-size-sm)',
        color: 'var(--cc-text-tertiary)'
      }
    }, money(m.balance))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        width: w + '%',
        minWidth: 40,
        height: 'var(--esc-bar-height)',
        borderRadius: 'var(--esc-bar-radius)',
        overflow: 'hidden',
        background: 'var(--cc-surface-sunken)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: ip + '%',
        background: 'var(--esc-interest)',
        transition: 'width var(--cc-dur-base) var(--cc-ease)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        background: 'var(--esc-capital)'
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--cc-space-2) var(--cc-space-4)',
        padding: 'var(--cc-space-2) 0 var(--cc-space-1)'
      }
    }, /*#__PURE__*/React.createElement(Detail, {
      k: "Cuota",
      v: cuota
    }), /*#__PURE__*/React.createElement(Detail, {
      k: "Inter\xE9s",
      v: m.interest,
      tone: "debt"
    }), /*#__PURE__*/React.createElement(Detail, {
      k: "Capital",
      v: m.capital,
      tone: "income"
    }), /*#__PURE__*/React.createElement(Detail, {
      k: "Saldo",
      v: m.balance,
      tone: "muted"
    }))));
  })), simulate && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-2)',
      padding: 'var(--cc-space-4)',
      background: 'var(--cc-surface-sunken)',
      borderRadius: 'var(--cc-radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "Abono extra al mes"), /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: extraPayment,
    size: 17,
    tone: "neutral",
    decimals: false
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: 800000,
    step: 50000,
    value: extraPayment,
    onChange: e => onExtraPaymentChange && onExtraPaymentChange(Number(e.target.value)),
    style: {
      width: '100%',
      accentColor: 'var(--esc-extra)'
    }
  }), removed > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--cc-size-base)',
      color: 'var(--cc-text)',
      lineHeight: 'var(--cc-leading-snug)'
    }
  }, "Terminas ", removed, " ", removed === 1 ? 'mes' : 'meses', " antes y te ahorras ", money(savedInterest), " en intereses.")));
}
function LegendDot({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: color
    }
  }), label);
}
function Detail({
  k,
  v,
  tone = 'neutral'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--cc-size-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cc-text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: v,
    size: 13,
    tone: tone,
    decimals: false
  }));
}
Object.assign(__ds_scope, { Escalera });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/escalera/Escalera.jsx", error: String((e && e.message) || e) }); }

// components/money/BarChart.jsx
try { (() => {
/** Rounded vertical bars with the value written on the bar, not in a legend. */
function BarChart({
  data = [],
  height = 120,
  color = 'var(--cc-primary)',
  highlightIndex,
  style
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--cc-space-2)',
      height,
      ...style
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      height: '100%',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: Math.max(d.value / max * (height - 26), 4),
      background: i === highlightIndex ? color : 'color-mix(in oklab, ' + color + ' 26%, transparent)',
      borderRadius: 'var(--cc-radius-xs)',
      transition: 'height var(--cc-dur-base) var(--cc-ease)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-xs)',
      color: i === highlightIndex ? 'var(--cc-text)' : 'var(--cc-text-tertiary)',
      fontWeight: i === highlightIndex ? 'var(--cc-weight-semi)' : 400
    }
  }, d.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/money/DonutChart.jsx
try { (() => {
/** Rounded-cap donut with direct labels; no separate legend. */
function DonutChart({
  segments = [],
  size = 160,
  thickness = 18,
  centerLabel,
  centerValue,
  style
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--cc-surface-sunken)",
    strokeWidth: thickness
  }), segments.map((s, i) => {
    const len = s.value / total * c;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: s.color,
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: `${Math.max(len - 6, 1)} ${c}`,
      strokeDashoffset: -offset
    });
    offset += len;
    return el;
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, centerValue, centerLabel && /*#__PURE__*/React.createElement("div", {
    className: "cc-eyebrow",
    style: {
      marginTop: 4
    }
  }, centerLabel))));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/money/MovementRow.jsx
try { (() => {
/** One transaction line: category icon chip, title, meta, signed amount. */
function MovementRow({
  icon = 'receipt',
  title,
  meta,
  value,
  tone = 'expense',
  member,
  onClick,
  style
}) {
  const color = `var(--cc-${tone})`;
  const soft = `var(--cc-${tone}-soft)`;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-3)',
      minHeight: 'var(--cc-tap-target)',
      padding: 'var(--cc-space-3) 0',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--cc-radius-full)',
      background: soft,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: color
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--cc-size-base)',
      fontWeight: 'var(--cc-weight-medium)',
      color: 'var(--cc-text)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-tertiary)'
    }
  }, meta, member ? ' · ' + member : '')), /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: value,
    size: 17,
    tone: tone,
    showSign: true,
    decimals: false
  }));
}
Object.assign(__ds_scope, { MovementRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/MovementRow.jsx", error: String((e && e.message) || e) }); }

// components/money/ProgressBar.jsx
try { (() => {
/** Rounded progress track for goals and instalment counts. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'primary',
  height = 8,
  label,
  trailing,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const color = {
    primary: 'var(--cc-primary)',
    savings: 'var(--cc-savings)',
    debt: 'var(--cc-debt)',
    accent: 'var(--cc-accent)',
    warning: 'var(--cc-warning)',
    income: 'var(--cc-income)'
  }[tone] || 'var(--cc-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (label || trailing) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, trailing)), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--cc-surface-sunken)',
      borderRadius: 'var(--cc-radius-full)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: color,
      borderRadius: 'var(--cc-radius-full)',
      transition: 'width var(--cc-dur-base) var(--cc-ease)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/money/StatCard.jsx
try { (() => {
/** KPI tile: eyebrow label, amount, optional delta. Used in the dashboard and in PDF reports. */
function StatCard({
  label,
  value,
  tone = 'neutral',
  icon,
  delta,
  currency = '$',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-2)',
      padding: 'var(--cc-space-4)',
      background: 'var(--cc-surface)',
      border: '1px solid var(--cc-border)',
      borderRadius: 'var(--cc-radius-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: `var(--cc-${tone === 'neutral' ? 'text-secondary' : tone})`
  }), /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, label)), /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: value,
    size: 24,
    tone: tone,
    currency: currency,
    decimals: false
  }), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-secondary)'
    }
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/money/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/AntWidget.jsx
try { (() => {
/** "Gastos hormiga": sums micro-spend and translates it into something tangible. Never scolds. */
function AntWidget({
  total = 0,
  count = 0,
  equivalence,
  period = 'Este mes',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)',
      padding: 'var(--cc-space-4)',
      background: 'var(--cc-ant-soft)',
      border: '1px solid color-mix(in oklab, var(--cc-ant) 22%, transparent)',
      borderRadius: 'var(--cc-radius-md)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "coffee",
    size: 16,
    color: "var(--cc-ant)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow",
    style: {
      color: 'var(--cc-ant)'
    }
  }, "Gastos hormiga \xB7 ", period)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: total,
    size: 28,
    tone: "ant",
    decimals: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-secondary)'
    }
  }, "en ", count, " compras peque\xF1as")), equivalence && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--cc-size-base)',
      color: 'var(--cc-text)',
      lineHeight: 'var(--cc-leading-snug)'
    }
  }, equivalence));
}
Object.assign(__ds_scope, { AntWidget });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/AntWidget.jsx", error: String((e && e.message) || e) }); }

// components/patterns/BottomNav.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  id: 'inicio',
  label: 'Inicio',
  icon: 'house'
}, {
  id: 'movimientos',
  label: 'Movimientos',
  icon: 'receipt'
}, {
  id: 'fab'
}, {
  id: 'bolsillos',
  label: 'Bolsillos',
  icon: 'piggy-bank'
}, {
  id: 'hogar',
  label: 'Hogar',
  icon: 'users'
}];

/** Five-slot bottom navigation with the central FAB well. */
function BottomNav({
  items = DEFAULT_ITEMS,
  value = 'inicio',
  onChange,
  onFab,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      alignItems: 'center',
      height: 'var(--cc-nav-height)',
      paddingBottom: 'var(--cc-safe-bottom)',
      background: 'var(--cc-surface)',
      borderTop: '1px solid var(--cc-border)',
      ...style
    }
  }, items.map(it => it.id === 'fab' ? /*#__PURE__*/React.createElement("div", {
    key: "fab",
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onFab,
    "aria-label": "Registro r\xE1pido",
    style: {
      width: 56,
      height: 56,
      marginTop: -28,
      border: '4px solid var(--cc-surface)',
      borderRadius: 'var(--cc-radius-full)',
      background: 'var(--cc-primary)',
      color: 'var(--cc-primary-contrast)',
      boxShadow: 'var(--cc-shadow-fab)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 26,
    strokeWidth: 2
  }))) : /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onChange && onChange(it.id),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      height: '100%',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: value === it.id ? 'var(--cc-primary)' : 'var(--cc-text-tertiary)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 22,
    strokeWidth: value === it.id ? 2 : 1.75
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-xs)',
      fontWeight: value === it.id ? 'var(--cc-weight-semi)' : 500
    }
  }, it.label))));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/patterns/BottomSheet.jsx
try { (() => {
/** Modal sheet anchored to the bottom: 24px top radius, grab handle, dimmed overlay. */
function BottomSheet({
  open,
  title,
  onClose,
  children,
  footer,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--cc-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxHeight: '88%',
      overflowY: 'auto',
      background: 'var(--cc-surface)',
      borderRadius: 'var(--cc-radius-lg) var(--cc-radius-lg) 0 0',
      boxShadow: 'var(--cc-shadow-lg)',
      padding: 'var(--cc-space-3) var(--cc-gutter) var(--cc-space-6)',
      animation: 'ccSheetIn var(--cc-dur-sheet) var(--cc-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ccSheetIn{from{transform:translateY(16px);opacity:.6}to{transform:none;opacity:1}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 999,
      background: 'var(--cc-border-strong)',
      margin: '0 auto var(--cc-space-4)'
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--cc-space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cc-display",
    style: {
      margin: 0,
      fontSize: 'var(--cc-size-h3)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      width: 36,
      height: 36,
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      background: 'var(--cc-surface-sunken)',
      borderRadius: 'var(--cc-radius-full)',
      cursor: 'pointer',
      color: 'var(--cc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--cc-space-5)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CommitmentCard.jsx
try { (() => {
const KIND = {
  prestamo: {
    icon: 'landmark',
    label: 'Préstamo'
  },
  financiacion: {
    icon: 'credit-card',
    label: 'Financiación'
  },
  hipoteca: {
    icon: 'house',
    label: 'Hipoteca'
  },
  viaje: {
    icon: 'plane',
    label: 'Viaje'
  }
};

/** Loan / instalment / mortgage / trip card: instalment progress + expandable Escalera. */
function CommitmentCard({
  kind = 'prestamo',
  name,
  monthly,
  paid = 0,
  total = 1,
  balance,
  expanded,
  onToggle,
  children,
  style
}) {
  const k = KIND[kind] || KIND.prestamo;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cc-surface)',
      border: '1px solid var(--cc-border)',
      borderRadius: 'var(--cc-radius-md)',
      boxShadow: 'var(--cc-shadow-xs)',
      padding: 'var(--cc-space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--cc-radius-full)',
      background: 'var(--cc-debt-soft)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 18,
    color: "var(--cc-debt)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--cc-size-lg)',
      fontWeight: 'var(--cc-weight-semi)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, k.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: monthly,
    size: 17,
    tone: "debt",
    decimals: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-tertiary)'
    }
  }, "al mes"))), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: paid,
    max: total,
    tone: "debt",
    label: `${paid} de ${total} cuotas`,
    trailing: balance != null ? /*#__PURE__*/React.createElement("span", null, "Saldo ", /*#__PURE__*/React.createElement(__ds_scope.Amount, {
      value: balance,
      size: 13,
      tone: "muted",
      decimals: false
    })) : null
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      minHeight: 40,
      border: 'none',
      background: 'var(--cc-surface-sunken)',
      borderRadius: 'var(--cc-radius-sm)',
      color: 'var(--cc-primary)',
      fontFamily: 'var(--cc-font-body)',
      fontSize: 'var(--cc-size-sm)',
      fontWeight: 'var(--cc-weight-semi)',
      cursor: 'pointer'
    }
  }, expanded ? 'Ocultar la escalera' : 'Ver la escalera', /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: expanded ? 'chevron-down' : 'chevron-right',
    size: 16
  })), expanded && children);
}
Object.assign(__ds_scope, { CommitmentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CommitmentCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EmptyState.jsx
try { (() => {
/** Two-stroke line-art empty state in primary + amber, with warm copy. */
function EmptyState({
  icon = 'piggy-bank',
  title,
  body,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--cc-space-3)',
      padding: 'var(--cc-space-8) var(--cc-space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      width: 88,
      height: 88,
      borderRadius: 'var(--cc-radius-full)',
      background: 'var(--cc-primary-soft)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 38,
    color: "var(--cc-primary)",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 6,
      bottom: 8,
      display: 'grid',
      placeItems: 'center',
      width: 26,
      height: 26,
      borderRadius: 'var(--cc-radius-full)',
      background: 'var(--cc-accent-soft)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 14,
    color: "var(--cc-accent)",
    strokeWidth: 2
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "cc-display",
    style: {
      margin: 0,
      fontSize: 'var(--cc-size-h3)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 300,
      fontSize: 'var(--cc-size-base)',
      color: 'var(--cc-text-secondary)',
      textWrap: 'pretty'
    }
  }, body), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Keypad.jsx
try { (() => {
const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'];

/** Big numeric keypad for the amount step of quick entry. */
function Keypad({
  onKey,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--cc-space-2)',
      ...style
    }
  }, KEYS.map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => onKey && onKey(k),
    style: {
      minHeight: 56,
      border: 'none',
      borderRadius: 'var(--cc-radius-sm)',
      background: 'var(--cc-surface-sunken)',
      color: 'var(--cc-text)',
      fontFamily: 'var(--cc-font-numeric)',
      fontSize: 'var(--cc-size-h3)',
      fontWeight: 'var(--cc-weight-semi)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, k === 'del' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 22
  }) : k)));
}
Object.assign(__ds_scope, { Keypad });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Keypad.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PocketCard.jsx
try { (() => {
/** Savings envelope: emoji, goal, colour, progress. */
function PocketCard({
  emoji = '🐷',
  name,
  saved = 0,
  goal = 0,
  color = 'var(--cc-savings)',
  onClick,
  style
}) {
  const pct = goal ? Math.round(saved / goal * 100) : 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)',
      padding: 'var(--cc-space-4)',
      background: 'var(--cc-surface)',
      border: '1px solid var(--cc-border)',
      borderRadius: 'var(--cc-radius-md)',
      boxShadow: 'var(--cc-shadow-xs)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--cc-radius-full)',
      background: `color-mix(in oklab, ${color} 16%, transparent)`,
      fontSize: 20
    }
  }, emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--cc-size-lg)',
      fontWeight: 'var(--cc-weight-semi)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-secondary)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: saved,
    size: 22,
    tone: "savings",
    decimals: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-tertiary)'
    }
  }, "de ", /*#__PURE__*/React.createElement(__ds_scope.Amount, {
    value: goal,
    size: 13,
    tone: "muted",
    decimals: false
  }))), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: saved,
    max: goal || 1,
    tone: "savings",
    height: 8
  }));
}
Object.assign(__ds_scope, { PocketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PocketCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
const {
  BottomSheet,
  Button,
  Icon,
  IconButton
} = window.CC_DS;
function App() {
  const [tab, setTab] = React.useState('inicio');
  const [sheet, setSheet] = React.useState(false);
  const [saved, setSaved] = React.useState(null);
  const [dark, setDark] = React.useState(false);
  const [data, setData] = React.useState(window.CC_DATA);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const titles = {
    inicio: ['Agosto 2026', 'Hola, Ana'],
    movimientos: ['Agosto 2026', 'Movimientos'],
    bolsillos: ['Casa Ruiz', 'Bolsillos'],
    compromisos: ['Casa Ruiz', 'Compromisos'],
    hogar: ['Tu hogar', 'Casa Ruiz']
  };
  const [sub, title] = titles[tab];
  const handleSave = mv => {
    const cat = mv.cat;
    const member = data.members.find(m => m.id === mv.who);
    setData({
      ...data,
      movements: [{
        id: Date.now(),
        icon: 'receipt',
        title: cat,
        meta: 'hoy',
        member: member.name.split(' ')[0],
        value: mv.value,
        tone: cat === 'Café' || cat === 'Comida fuera' || cat === 'Ocio' ? 'ant' : 'expense',
        cat
      }, ...data.movements]
    });
    setSheet(false);
    setSaved('Listo. Lo anotamos en ' + cat + '.');
    setTimeout(() => setSaved(null), 2600);
  };
  const right = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, tab === 'bolsillos' && /*#__PURE__*/React.createElement(IconButton, {
    name: "plus",
    label: "Nuevo bolsillo",
    tone: "soft",
    size: 38
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: dark ? 'sun' : 'moon',
    label: "Cambiar tema",
    tone: "surface",
    size: 38,
    onClick: () => setDark(!dark)
  }));
  return /*#__PURE__*/React.createElement(PhoneShell, {
    tab: tab,
    onTab: setTab,
    onFab: () => setSheet(true),
    title: title,
    subtitle: sub,
    right: right,
    scrollKey: tab
  }, tab === 'inicio' && /*#__PURE__*/React.createElement(Inicio, {
    data: data,
    onOpenMovimientos: () => setTab('movimientos')
  }), tab === 'movimientos' && /*#__PURE__*/React.createElement(Movimientos, {
    data: data
  }), tab === 'bolsillos' && /*#__PURE__*/React.createElement(Bolsillos, {
    data: data
  }), tab === 'compromisos' && /*#__PURE__*/React.createElement(Compromisos, {
    data: data
  }), tab === 'hogar' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hogar, {
    data: data
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: "landmark",
    onClick: () => setTab('compromisos')
  }, "Ver compromisos y La Escalera"))), /*#__PURE__*/React.createElement(QuickEntry, {
    open: sheet,
    onClose: () => setSheet(false),
    members: data.members,
    onSave: handleSave
  }), saved && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 84,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      background: 'var(--cc-primary)',
      color: 'var(--cc-primary-contrast)',
      borderRadius: 'var(--cc-radius-sm)',
      boxShadow: 'var(--cc-shadow-md)',
      fontSize: 'var(--cc-size-base)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 18
  }), saved));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Bolsillos.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PocketCard,
  Card,
  Amount,
  Button,
  ProgressBar,
  EmptyState
} = window.CC_DS;
function Bolsillos({
  data
}) {
  const saved = data.pockets.reduce((s, p) => s + p.saved, 0);
  const goal = data.pockets.reduce((s, p) => s + p.goal, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-5)",
    tone: "soft",
    elevation: "none",
    style: {
      borderColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow",
    style: {
      color: 'var(--cc-primary)'
    }
  }, "Ahorrado en total"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(Amount, {
    value: saved,
    size: 32,
    tone: "savings",
    decimals: false
  })), /*#__PURE__*/React.createElement(ProgressBar, {
    value: saved,
    max: goal,
    tone: "savings",
    trailing: `${Math.round(saved / goal * 100)}% de tus metas`
  })), data.pockets.map(p => /*#__PURE__*/React.createElement(PocketCard, _extends({
    key: p.id
  }, p))), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    iconLeft: "plus",
    fullWidth: true,
    style: {
      marginTop: 'var(--cc-space-2)'
    }
  }, "Crear un bolsillo"));
}
Object.assign(window, {
  Bolsillos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Bolsillos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Compromisos.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  CommitmentCard,
  Escalera,
  Card,
  Amount
} = window.CC_DS;
function Compromisos({
  data
}) {
  const [open, setOpen] = React.useState('c1');
  const [extra, setExtra] = React.useState(0);
  const totalDeuda = data.commitments.reduce((s, c) => s + c.balance, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-5)",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "Saldo total"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Amount, {
    value: totalDeuda,
    size: 28,
    tone: "debt",
    decimals: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "Al mes"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Amount, {
    value: data.commitments.reduce((s, c) => s + c.monthly, 0),
    size: 20,
    tone: "muted",
    decimals: false
  })))), data.commitments.map(c => /*#__PURE__*/React.createElement(CommitmentCard, _extends({
    key: c.id
  }, c, {
    expanded: open === c.id,
    onToggle: () => {
      setOpen(open === c.id ? null : c.id);
      setExtra(0);
    }
  }), /*#__PURE__*/React.createElement(Escalera, _extends({}, window.CC_WINDOW(c), {
    extraPayment: extra,
    onExtraPaymentChange: setExtra,
    style: {
      marginTop: 'var(--cc-space-2)'
    }
  })))));
}
Object.assign(window, {
  Compromisos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Compromisos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Hogar.jsx
try { (() => {
const {
  Card,
  MemberAvatar,
  Amount,
  Button,
  Chip,
  Icon,
  ProgressBar
} = window.CC_DS;
function Hogar({
  data
}) {
  const [child, setChild] = React.useState('Tomás');
  const perChild = {
    'Tomás': [{
      label: 'Colegio',
      value: 640000
    }, {
      label: 'Transporte',
      value: 48000
    }, {
      label: 'Ropa',
      value: 96000
    }],
    'Lucía': [{
      label: 'Jardín',
      value: 480000
    }, {
      label: 'Salud',
      value: 74000
    }]
  };
  const rows = perChild[child] || [];
  const total = rows.reduce((s, r) => s + r.value, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-5)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "Hogar"), /*#__PURE__*/React.createElement("h2", {
    className: "cc-display",
    style: {
      margin: '4px 0 var(--cc-space-4)',
      fontSize: 'var(--cc-size-h2)'
    }
  }, data.household), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)'
    }
  }, data.members.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement(MemberAvatar, {
    name: m.name,
    color: m.color,
    isChild: m.isChild
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 'var(--cc-weight-medium)'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-tertiary)'
    }
  }, m.isChild ? 'Destino de gasto' : 'Registra y ve todo')), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--cc-text-tertiary)"
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    iconLeft: "plus",
    fullWidth: true,
    style: {
      marginTop: 'var(--cc-space-4)'
    }
  }, "Invitar a alguien")), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-5)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "Gasto por hijo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: 'var(--cc-space-3) 0 var(--cc-space-4)'
    }
  }, data.members.filter(m => m.isChild).map(m => /*#__PURE__*/React.createElement(Chip, {
    key: m.id,
    tone: "primary",
    selected: child === m.name,
    onClick: () => setChild(m.name)
  }, m.name))), /*#__PURE__*/React.createElement(Amount, {
    value: total,
    size: 28,
    decimals: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)',
      marginTop: 'var(--cc-space-4)'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(ProgressBar, {
    key: r.label,
    value: r.value,
    max: total,
    tone: "primary",
    label: r.label,
    trailing: /*#__PURE__*/React.createElement(Amount, {
      value: r.value,
      size: 13,
      tone: "muted",
      decimals: false
    })
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-5)",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 22,
    color: "var(--cc-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 'var(--cc-weight-medium)'
    }
  }, "Reporte en PDF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--cc-size-sm)',
      color: 'var(--cc-text-tertiary)'
    }
  }, "Agosto 2026 \xB7 Casa Ruiz")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "download"
  }, "Descargar")));
}
Object.assign(window, {
  Hogar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Hogar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Inicio.jsx
try { (() => {
const {
  Card,
  Amount,
  StatCard,
  MovementRow,
  AntWidget,
  DonutChart,
  Chip,
  Icon,
  MemberAvatar
} = window.CC_DS;
function Inicio({
  data,
  onOpenMovimientos
}) {
  const ingresos = data.movements.filter(m => m.value > 0).reduce((s, m) => s + m.value, 0);
  const gastos = data.movements.filter(m => m.value < 0).reduce((s, m) => s - m.value, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-5)",
    elevation: "sm",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "Disponible este mes"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: -6
    }
  }, data.members.filter(m => !m.isChild).map(m => /*#__PURE__*/React.createElement(MemberAvatar, {
    key: m.id,
    name: m.name,
    color: m.color,
    size: 26,
    style: {
      marginLeft: -6
    }
  })))), /*#__PURE__*/React.createElement(Amount, {
    value: ingresos - gastos,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--cc-space-2)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Ingresos",
    value: ingresos,
    tone: "income",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Gastos",
    value: gastos,
    tone: "expense",
    icon: "trending-down"
  }))), /*#__PURE__*/React.createElement(SectionHeader, null, "En qu\xE9 se va"), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--cc-space-4)",
    style: {
      display: 'flex',
      gap: 'var(--cc-space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    size: 128,
    thickness: 16,
    segments: data.categories.map(c => ({
      value: c.value,
      color: c.color
    })),
    centerValue: /*#__PURE__*/React.createElement(Amount, {
      value: gastos,
      size: 17,
      decimals: false
    }),
    centerLabel: "Gasto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, data.categories.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--cc-size-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: c.color,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--cc-text-secondary)'
    }
  }, c.name), /*#__PURE__*/React.createElement(Amount, {
    value: c.value,
    size: 13,
    tone: "muted",
    decimals: false
  }))))), /*#__PURE__*/React.createElement(SectionHeader, null, "Gastos hormiga"), /*#__PURE__*/React.createElement(AntWidget, {
    total: 214300,
    count: 19,
    equivalence: "Eso es media cuota de tu viaje a Cartagena."
  }), /*#__PURE__*/React.createElement(SectionHeader, {
    action: /*#__PURE__*/React.createElement("a", {
      onClick: onOpenMovimientos,
      style: {
        fontSize: 'var(--cc-size-sm)',
        cursor: 'pointer'
      }
    }, "Ver todo")
  }, "\xDAltimos movimientos"), /*#__PURE__*/React.createElement(Card, {
    padding: "0 var(--cc-space-4)"
  }, data.movements.slice(0, 5).map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      borderTop: i ? '1px solid var(--cc-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(MovementRow, m)))));
}
Object.assign(window, {
  Inicio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Inicio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Movimientos.jsx
try { (() => {
const {
  Card,
  MovementRow,
  Chip,
  SegmentedControl,
  Amount,
  Icon,
  IconButton
} = window.CC_DS;
function Movimientos({
  data
}) {
  const [filter, setFilter] = React.useState('Todos');
  const [member, setMember] = React.useState(null);
  const rows = data.movements.filter(m => {
    if (filter === 'Ingresos' && m.value < 0) return false;
    if (filter === 'Gastos' && m.value > 0) return false;
    if (member && m.member !== member) return false;
    return true;
  });
  const total = rows.reduce((s, m) => s + m.value, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['Todos', 'Ingresos', 'Gastos'],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: 'var(--cc-space-4) 0 var(--cc-space-2)'
    }
  }, data.members.map(m => /*#__PURE__*/React.createElement(Chip, {
    key: m.id,
    tone: "neutral",
    selected: member === m.name.split(' ')[0],
    onClick: () => setMember(member === m.name.split(' ')[0] ? null : m.name.split(' ')[0])
  }, m.isChild ? 'Para ' : '', m.name.split(' ')[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: 'var(--cc-space-2) 0 var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, rows.length, " movimientos"), /*#__PURE__*/React.createElement(Amount, {
    value: total,
    size: 17,
    tone: total < 0 ? 'expense' : 'income',
    showSign: true,
    decimals: false
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "0 var(--cc-space-4)"
  }, rows.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      borderTop: i ? '1px solid var(--cc-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(MovementRow, m))), !rows.length && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: 'var(--cc-space-6) 0',
      textAlign: 'center',
      color: 'var(--cc-text-secondary)'
    }
  }, "Nada por aqu\xED todav\xEDa.")));
}
Object.assign(window, {
  Movimientos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Movimientos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/QuickEntry.jsx
try { (() => {
const {
  BottomSheet,
  Keypad,
  Chip,
  WhoPicker,
  Button,
  Amount,
  Icon
} = window.CC_DS;
const CATS = [{
  name: 'Mercado',
  icon: 'shopping-cart',
  tone: 'expense'
}, {
  name: 'Comida fuera',
  icon: 'utensils',
  tone: 'ant'
}, {
  name: 'Transporte',
  icon: 'bus',
  tone: 'expense'
}, {
  name: 'Servicios',
  icon: 'zap',
  tone: 'warning'
}, {
  name: 'Salud',
  icon: 'heart-pulse',
  tone: 'expense'
}, {
  name: 'Colegio',
  icon: 'graduation-cap',
  tone: 'savings'
}, {
  name: 'Café',
  icon: 'coffee',
  tone: 'ant'
}, {
  name: 'Ocio',
  icon: 'film',
  tone: 'ant'
}];

/** Quick entry in 3 taps: amount -> category -> who paid. */
function QuickEntry({
  open,
  onClose,
  members,
  onSave
}) {
  const [raw, setRaw] = React.useState('');
  const [cat, setCat] = React.useState(null);
  const [who, setWho] = React.useState('ana');
  const value = Number(raw || 0);
  React.useEffect(() => {
    if (open) {
      setRaw('');
      setCat(null);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(BottomSheet, {
    open: open,
    title: "Registro r\xE1pido",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: !value || !cat,
      onClick: () => onSave({
        value: -value,
        cat,
        who
      })
    }, "Guardar gasto")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--cc-space-2) 0'
    }
  }, /*#__PURE__*/React.createElement(Amount, {
    value: value,
    size: 44,
    tone: value ? 'expense' : 'muted',
    decimals: false,
    showSign: !!value
  })), /*#__PURE__*/React.createElement(Keypad, {
    onKey: k => setRaw(r => k === 'del' ? r.slice(0, -1) : k === '.' ? r : (r + k).slice(0, 9))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, "\xBFEn qu\xE9?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.name,
    tone: c.tone,
    icon: c.icon,
    selected: cat === c.name,
    onClick: () => setCat(c.name)
  }, c.name)))), /*#__PURE__*/React.createElement(WhoPicker, {
    members: members.filter(m => !m.isChild),
    value: who,
    onChange: setWho
  })));
}
Object.assign(window, {
  QuickEntry
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/QuickEntry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.jsx
try { (() => {
const {
  BottomNav
} = window.CC_DS;
function PhoneShell({
  tab,
  onTab,
  onFab,
  title,
  subtitle,
  right,
  children,
  scrollKey
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      height: 800,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--cc-bg)',
      borderRadius: 34,
      overflow: 'hidden',
      border: '1px solid var(--cc-border)',
      boxShadow: 'var(--cc-shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), title && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      padding: '4px var(--cc-gutter) 12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, subtitle && /*#__PURE__*/React.createElement("span", {
    className: "cc-eyebrow"
  }, subtitle), /*#__PURE__*/React.createElement("h1", {
    className: "cc-display",
    style: {
      margin: '2px 0 0',
      fontSize: 'var(--cc-size-h2)'
    }
  }, title)), right), /*#__PURE__*/React.createElement("main", {
    key: scrollKey,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 var(--cc-gutter) 24px'
    }
  }, children), /*#__PURE__*/React.createElement(BottomNav, {
    value: tab,
    onChange: onTab,
    onFab: onFab
  }));
}
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px var(--cc-gutter) 4px',
      fontFamily: 'var(--cc-font-numeric)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--cc-text)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5,
      alignItems: 'center',
      opacity: .75
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "5",
    width: "3",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2.5",
    width: "3",
    height: "8.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "11",
    rx: "1"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "11",
    viewBox: "0 0 24 11"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "20",
    height: "10",
    rx: "3",
    fill: "none",
    stroke: "currentColor",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "15",
    height: "7",
    rx: "1.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "3.5",
    width: "1.5",
    height: "4",
    rx: "0.75",
    fill: "currentColor",
    opacity: ".5"
  }))));
}
function SectionHeader({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      margin: 'var(--cc-space-6) 0 var(--cc-space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cc-display",
    style: {
      margin: 0,
      fontSize: 'var(--cc-size-h3)'
    }
  }, children), action);
}
Object.assign(window, {
  PhoneShell,
  StatusBar,
  SectionHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
window.CC_DATA = {
  household: 'Casa Ruiz',
  members: [{
    id: 'ana',
    name: 'Ana Ruiz',
    color: 'var(--cc-savings)'
  }, {
    id: 'diego',
    name: 'Diego M',
    color: 'var(--cc-primary)'
  }, {
    id: 'tomas',
    name: 'Tomás',
    color: 'var(--cc-ant)',
    isChild: true
  }, {
    id: 'lucia',
    name: 'Lucía',
    color: 'var(--cc-accent)',
    isChild: true
  }],
  movements: [{
    id: 1,
    icon: 'shopping-cart',
    title: 'Mercado de la semana',
    meta: '14 ago',
    member: 'Ana',
    value: -182400,
    tone: 'expense',
    cat: 'Mercado'
  }, {
    id: 2,
    icon: 'coffee',
    title: 'Café en la esquina',
    meta: '14 ago',
    member: 'Diego',
    value: -6500,
    tone: 'ant',
    cat: 'Hormiga'
  }, {
    id: 3,
    icon: 'graduation-cap',
    title: 'Mensualidad colegio',
    meta: '13 ago',
    member: 'Tomás',
    value: -640000,
    tone: 'expense',
    cat: 'Educación'
  }, {
    id: 4,
    icon: 'zap',
    title: 'Energía y agua',
    meta: '12 ago',
    member: 'Diego',
    value: -213800,
    tone: 'expense',
    cat: 'Servicios'
  }, {
    id: 5,
    icon: 'piggy-bank',
    title: 'Abono a Viaje a Cartagena',
    meta: '10 ago',
    member: 'Ana',
    value: -350000,
    tone: 'savings',
    cat: 'Bolsillo'
  }, {
    id: 6,
    icon: 'landmark',
    title: 'Cuota hipoteca',
    meta: '5 ago',
    member: 'Diego',
    value: -1840000,
    tone: 'debt',
    cat: 'Hipoteca'
  }, {
    id: 7,
    icon: 'wallet',
    title: 'Nómina Ana',
    meta: '1 ago',
    member: 'Ana',
    value: 3100000,
    tone: 'income',
    cat: 'Salario'
  }, {
    id: 8,
    icon: 'wallet',
    title: 'Nómina Diego',
    meta: '1 ago',
    member: 'Diego',
    value: 3100000,
    tone: 'income',
    cat: 'Salario'
  }, {
    id: 9,
    icon: 'bus',
    title: 'Transporte',
    meta: '1 ago',
    member: 'Tomás',
    value: -48000,
    tone: 'expense',
    cat: 'Transporte'
  }, {
    id: 10,
    icon: 'utensils',
    title: 'Almuerzo fuera',
    meta: '31 jul',
    member: 'Diego',
    value: -32000,
    tone: 'ant',
    cat: 'Hormiga'
  }],
  pockets: [{
    id: 'p1',
    emoji: '✈️',
    name: 'Viaje a Cartagena',
    saved: 1850000,
    goal: 4000000
  }, {
    id: 'p2',
    emoji: '🛟',
    name: 'Fondo de emergencia',
    saved: 6200000,
    goal: 12000000
  }, {
    id: 'p3',
    emoji: '🎓',
    name: 'Universidad de Tomás',
    saved: 3400000,
    goal: 30000000
  }, {
    id: 'p4',
    emoji: '🎄',
    name: 'Diciembre',
    saved: 420000,
    goal: 2500000
  }],
  categories: [{
    name: 'Mercado',
    icon: 'shopping-cart',
    value: 1284000,
    color: 'var(--cc-expense)'
  }, {
    name: 'Hipoteca',
    icon: 'landmark',
    value: 1840000,
    color: 'var(--cc-debt)'
  }, {
    name: 'Educación',
    icon: 'graduation-cap',
    value: 640000,
    color: 'var(--cc-savings)'
  }, {
    name: 'Servicios',
    icon: 'zap',
    value: 213800,
    color: 'var(--cc-warning)'
  }, {
    name: 'Hormiga',
    icon: 'coffee',
    value: 214300,
    color: 'var(--cc-ant)'
  }],
  commitments: [{
    id: 'c1',
    kind: 'hipoteca',
    name: 'Apartamento Chapinero',
    paid: 18,
    total: 240,
    rate: 0.0035,
    principal: 340000000
  }, {
    id: 'c2',
    kind: 'financiacion',
    name: 'Nevera a 12 cuotas',
    paid: 5,
    total: 12,
    rate: 0.019,
    principal: 3216000
  }, {
    id: 'c3',
    kind: 'prestamo',
    name: 'Préstamo libre inversión',
    paid: 9,
    total: 36,
    rate: 0.0145,
    principal: 22320000
  }]
};
window.CC_SCHEDULE = function (principal, rate, n, monthly, startMonth, startYear) {
  const out = [];
  let bal = principal;
  const M = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  for (let i = 0; i < n && bal > 0; i++) {
    const interest = bal * rate;
    const capital = Math.max(0, Math.min(monthly - interest, bal));
    bal = Math.max(0, bal - capital);
    const mi = (startMonth + i) % 12,
      yr = startYear + Math.floor((startMonth + i) / 12);
    out.push({
      label: M[mi] + ' ' + yr,
      capital,
      interest,
      balance: bal
    });
  }
  return out;
};

/* Ventana de la Escalera: 3 meses pagados + el actual + 14 por venir.
   El primer pago de cada compromiso se calcula hacia atrás desde agosto de 2026. */
window.CC_WINDOW = function (c) {
  const start = 7 - c.paid; // agosto = índice 7
  const startMonth = (start % 12 + 12) % 12;
  const startYear = 2026 + Math.floor(start / 12);
  const full = window.CC_SCHEDULE(c.principal, c.rate, c.total, c.monthly, startMonth, startYear);
  return {
    months: full,
    currentIndex: c.paid,
    window: {
      from: Math.max(0, c.paid - 3),
      count: 18
    }
  };
};

/* Cuota de amortización francesa: M = P·r / (1 − (1+r)^−n).
   Se calcula, nunca se escribe a mano, para que el crédito llegue a cero en su plazo. */
window.CC_CUOTA = function (principal, rate, n) {
  return Math.ceil(principal * rate / (1 - Math.pow(1 + rate, -n)) / 1000) * 1000;
};
window.CC_DATA.commitments.forEach(c => {
  c.monthly = window.CC_CUOTA(c.principal, c.rate, c.total);
  const full = window.CC_SCHEDULE(c.principal, c.rate, c.total, c.monthly, 0, 2025);
  c.balance = Math.round(full[Math.min(c.paid, full.length) - 1].balance);
  if (full[full.length - 1].balance > 1) console.warn('Escalera: el crédito ' + c.name + ' no amortiza a cero');
});

/* La cuota de la hipoteca aparece en tres pantallas: se toma siempre de la misma fuente. */
(function () {
  const hipoteca = window.CC_DATA.commitments.find(c => c.kind === 'hipoteca');
  const mv = window.CC_DATA.movements.find(m => m.cat === 'Hipoteca');
  if (mv) mv.value = -hipoteca.monthly;
  const cat = window.CC_DATA.categories.find(c => c.name === 'Hipoteca');
  if (cat) cat.value = hipoteca.monthly;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Escalera = __ds_scope.Escalera;

__ds_ns.MemberAvatar = __ds_scope.MemberAvatar;

__ds_ns.WhoPicker = __ds_scope.WhoPicker;

__ds_ns.Amount = __ds_scope.Amount;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.MovementRow = __ds_scope.MovementRow;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.AntWidget = __ds_scope.AntWidget;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.CommitmentCard = __ds_scope.CommitmentCard;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Keypad = __ds_scope.Keypad;

__ds_ns.PocketCard = __ds_scope.PocketCard;

})();
