/* ──────────────────────────────────────────────────────────
   Palette engine — masthead, WCAG-mapped. Same engine as .design
   and .dev; RBPalette.audit() prints the ratios.

     Ink Black #00171f   ink (18.38 on white)
     White     #ffffff   panel ground / dark-scheme ink
     Navy      #003459   soft text (12.84) and the field behind the shell
     Cerulean  #007ea7   links and marks (4.62 on white)
     Fresh Sky #00a7e1   fills and hovers (2.76 on white, never text);
                         the dark scheme's accent (6.67 on ink black)
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

  /* ── the five pigments ────────────────────────────── */
  const PIG = {
    white:    '#ffffff',
    freshSky: '#00a7e1',
    inkBlack: '#00171f',
    navy:     '#003459',
    cerulean: '#007ea7',
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
      _audit: {
        'body ink / bg':  +contrast(m.ink, m.bg).toFixed(2),
        'soft / bg':      +contrast(m.soft, m.bg).toFixed(2),
        'accent / bg':    +contrast(m.accent, m.bg).toFixed(2),
        'ink on deeper':  +contrast(m.ink, m.deeper).toFixed(2),
      },
    };
  }

  const PALETTES = {
    sky: build('Fresh Sky', {
      bg: PIG.white, deeper: PIG.freshSky, ink: PIG.inkBlack, soft: PIG.navy,
      rule: 'rgba(0, 23, 31, .18)', accent: PIG.cerulean,
      field: PIG.navy, onInk: PIG.white, mark: PIG.freshSky, shadow: 'rgba(0, 23, 31, .45)',
    }),
    navy: build('Navy', {
      bg: PIG.inkBlack, deeper: PIG.navy, ink: PIG.white, soft: '#7fd3f0',
      rule: '#2a5a70', accent: PIG.freshSky,
      field: '#000a0e', onInk: PIG.inkBlack, mark: PIG.freshSky, shadow: 'rgba(0, 167, 225, .35)',
    }),
  };

  const DEFAULT = 'sky';

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
