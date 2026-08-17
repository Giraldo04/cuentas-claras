import React from 'react';

const cache = {};
const BASE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/** Lucide icon, stroke 1.75 per DESIGN.md. Fetches the official SVG once and inlines its paths. */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = 'currentColor', style, ...rest }) {
  const [markup, setMarkup] = React.useState(cache[name] || null);
  React.useEffect(() => {
    let alive = true;
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
