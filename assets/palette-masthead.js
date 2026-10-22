/* ──────────────────────────────────────────────────────────
   Palette engine — masthead, WCAG-mapped. Same engine as .design
   and .dev; RBPalette.audit() prints the ratios.

   Front door (light, default) — the Front door board's palette
     Snow             #fffbfa   ground
     Deep Space Blue  #102f42   ink (13.55 on snow)
     Jasmine          #f6df79   soft fill (ink on it 10.45)
     Coral Glow       #f78e69   lead fill: bar and hero (ink on it 5.99)
     Cherry Rose      #a5243d   links and the deep chapter (7.00 on snow;
                                snow on it 7.00)
     Two tuned shades: soft text = ink 20% toward snow (#566a78, APCA Lc 76),
     hairline = ink 60% toward snow (#9fa9b0, decorative only).

   Navy (dark) — the Fresh Sky family
     Ink Black #00171f ground · White ink · Navy soft fill ·
     Fresh Sky lead and signal (6.67 with ink black) ·
     Cerulean deep (white on it 4.62)
   ────────────────────────────────────────────────────────── */
(function () {
  /* ── contrast math (audit only) ───────────────────── */
  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  }
  const lin = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  function luminance(rgb) {
    return 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
  }
  function contrast(a, b) {
    const la = luminance(hexToRgb(a)), lb = luminance(hexToRgb(b));
    const hi = Math.max(la, lb), lo = Math.min(la, lb);
    return (hi + 0.05) / (lo + 0.05);
  }

  /* ── the pigments ─────────────────────────────────── */
  const PIG = {
    snow:      '#fffbfa',
    deepSpace: '#102f42',
    jasmine:   '#f6df79',
    coral:     '#f78e69',
    cherry:    '#a5243d',
    softInk:   '#566a78',
    hair:      '#9fa9b0',
    white:     '#ffffff',
    freshSky:  '#00a7e1',
    inkBlack:  '#00171f',
    navy:      '#003459',
    cerulean:  '#007ea7',
  };

  /* ── role-mapped schemes ──────────────────────────────
     The masthead writes four roles beyond the house six:
       field   the ground behind the profile shell
       on-ink  text on an --ink fill (module title bars)
       mark    square list markers (a fill, so 3:1 is not required)
       shadow  the shell's hard offset */
  function build(label, m) {
    return {
      label,
      bg: m.bg, deeper: m.deeper, ink: m.ink, soft: m.soft, rule: m.rule, accent: m.accent,
      field: m.field, onInk: m.onInk, mark: m.mark, shadow: m.shadow,
      lead: m.lead, onLead: m.onLead, deep: m.deep, onDeep: m.onDeep,
      _audit: {
        'body ink / bg':  +contrast(m.ink, m.bg).toFixed(2),
        'soft / bg':      +contrast(m.soft, m.bg).toFixed(2),
        'accent / bg':    +contrast(m.accent, m.bg).toFixed(2),
        'ink on deeper':  +contrast(m.ink, m.deeper).toFixed(2),
        'on-lead / lead': +contrast(m.onLead, m.lead).toFixed(2),
        'on-deep / deep': +contrast(m.onDeep, m.deep).toFixed(2),
      },
    };
  }

  const PALETTES = {
    front: build('Front door', {
      bg: PIG.snow, deeper: PIG.jasmine, ink: PIG.deepSpace, soft: PIG.softInk,
      rule: PIG.hair, accent: PIG.cherry,
      field: PIG.snow, onInk: PIG.snow, mark: PIG.coral, shadow: PIG.deepSpace,
      lead: PIG.coral, onLead: PIG.deepSpace, deep: PIG.cherry, onDeep: PIG.snow,
    }),
    navy: build('Navy', {
      bg: PIG.inkBlack, deeper: PIG.navy, ink: PIG.white, soft: '#8ed8f2',
      rule: '#2a5a70', accent: '#94daf2', /* Fresh Sky 58% toward white: links, Lc 77 (DDR-013) */
      field: '#000a0e', onInk: PIG.inkBlack, mark: PIG.freshSky, shadow: 'rgba(0, 167, 225, .35)',
      lead: PIG.freshSky, onLead: PIG.inkBlack, deep: PIG.cerulean, onDeep: PIG.white,
    }),
  };
  const DEFAULT = 'front';

  /* ── application ──────────────────────────────────── */
  function setVars(p) {
    const r = document.documentElement.style;
    r.setProperty('--bg',        p.bg);
    r.setProperty('--bg-deeper', p.deeper);
    r.setProperty('--ink',       p.ink);
    r.setProperty('--ink-soft',  p.soft);
    r.setProperty('--rule',      p.rule);
    r.setProperty('--accent',    p.accent);
    r.setProperty('--field',     p.field);
    r.setProperty('--on-ink',    p.onInk);
    r.setProperty('--mark',      p.mark);
    r.setProperty('--shadow',    p.shadow);
    r.setProperty('--lead',      p.lead);
    r.setProperty('--on-lead',   p.onLead);
    r.setProperty('--deep',      p.deep);
    r.setProperty('--on-deep',   p.onDeep);
  }

  function recolorPatterns(p) {
    document.querySelectorAll('pattern#m3a > rect, pattern#ph-a > rect')
      .forEach((el) => el.setAttribute('fill', p.deeper));
    document.querySelectorAll('pattern#m3a > line, pattern#ph-a > line')
      .forEach((el) => el.setAttribute('stroke', p.rule));
  }

  function syncSwatchState(key) {
    document.querySelectorAll('.palette-swatch').forEach((el) => {
      el.setAttribute('aria-pressed', el.dataset.palette === key ? 'true' : 'false');
    });
  }

  function apply(key, persist) {
    const resolved = key in PALETTES ? key : DEFAULT;
    const p = PALETTES[resolved];
    setVars(p);
    if (document.readyState !== 'loading') recolorPatterns(p);
    document.documentElement.dataset.palette = resolved;
    syncSwatchState(resolved);
    if (persist) {
      try { localStorage.setItem('rb-palette-masthead', resolved); } catch (_) {}
    }
  }

  let saved;
  try { saved = localStorage.getItem('rb-palette-masthead'); } catch (_) {}
  apply(saved || DEFAULT, false);

  function injectUI() {
    if (document.querySelector('.palette-dock')) return;
    const dock = document.createElement('div');
    dock.className = 'palette-dock';
    dock.setAttribute('role', 'group');
    dock.setAttribute('aria-label', 'Theme');

    const tag = document.createElement('span');
    tag.className = 'palette-dock__tag';
    tag.textContent = 'THEME';
    dock.appendChild(tag);

    for (const [key, p] of Object.entries(PALETTES)) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-swatch';
      btn.dataset.palette = key;
      btn.setAttribute('aria-label', p.label + ' theme');
      btn.title = p.label;
      btn.style.setProperty('--sw-bg', p.bg);
      btn.style.setProperty('--sw-accent', p.accent);
      btn.addEventListener('click', () => apply(key, true));
      dock.appendChild(btn);
    }
    document.body.appendChild(dock);
    syncSwatchState(document.documentElement.dataset.palette || DEFAULT);
  }

  function onReady() {
    recolorPatterns(PALETTES[document.documentElement.dataset.palette] || PALETTES[DEFAULT]);
    injectUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  window.RBPalette = {
    apply: (k) => apply(k, true),
    palettes: PALETTES,
    pigments: PIG,
    current: () => document.documentElement.dataset.palette || DEFAULT,
    audit() {
      const rows = {};
      for (const [k, p] of Object.entries(PALETTES)) rows[k] = p._audit;
      if (console.table) console.table(rows);
      return rows;
    },
  };
})();
