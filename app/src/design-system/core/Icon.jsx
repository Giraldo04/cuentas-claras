import React from 'react';

// Vendored Lucide SVGs (offline-safe, no CDN dependency) — see assets/icons/.
const localSvgs = import.meta.glob('../../assets/icons/*.svg', { eager: true, query: '?raw', import: 'default' });
const local = {};
for (const path in localSvgs) {
  const name = path.split('/').pop().replace('.svg', '');
  local[name] = localSvgs[path].replace(/[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*/, '').trim();
}

const cache = {};
const BASE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/** Lucide icon, stroke 1.75 per DESIGN.md. Uses the vendored local SVG set; falls back to the CDN for any name not vendored. */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = 'currentColor', style, ...rest }) {
  const [markup, setMarkup] = React.useState(local[name] || cache[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (local[name]) { setMarkup(local[name]); return; }
    if (cache[name]) { setMarkup(cache[name]); return; }
    fetch(BASE + name + '.svg').then(r => r.text()).then(t => {
      const inner = t.replace(/[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*/, '').trim();
      cache[name] = inner;
      if (alive) setMarkup(inner);
    }).catch(() => {});
    return () => { alive = false; };
  }, [name]);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ display: 'block', flex: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: markup || '' }} {...rest} />
  );
}
