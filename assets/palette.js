/* ──────────────────────────────────────────────────────────
   Palette engine — "Pollen", WCAG-mapped.

   Five fixed pigments wired into the site's role tokens. Every
   role assignment below was chosen against measured contrast,
   and the audit still runs — open the console and call
   RBPalette.audit() to read the ratios the schemes land on.

     Midnight Violet #3a3042   ink ground / dark ink
     Coral Glow      #ff784f   signal — fills, borders, large display
     Golden Pollen   #ffd166   paper ground / light ink
     Cerulean        #0081a7   mid surface / decorative rule
     Tropical Teal   #00afb9   surface — media grounds

   Role rules (enforced by the values, verified by audit):
     · body ink ↔ ground is AAA (8.66) in both schemes.
     · Coral clears AA as text only on Violet (4.79); on the
       Pollen ground it is used for fills, borders, and large
       display, never as small body text on the light ground.
     · Essential structure (the frame) is drawn in --ink (the
       AAA pair), so it always clears the 3:1 non-text minimum;
       --rule is decorative hairline only.
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
  const grade = (n) => (n >= 7 ? 'AAA' : n >= 4.5 ? 'AA' : n >= 3 ? 'AA-large' : 'FAIL');

  /* ── the five pigments ────────────────────────────── */
  const PIG = {
    violet: '#3a3042',
    coral:  '#ff784f',
    pollen: '#ffd166',
    ceru:   '#0081a7',
    teal:   '#00afb9',
  };

  /* ── role-mapped schemes ──────────────────────────── */
  function build(label, m) {
    return {
      label,
      bg:     m.bg,
      deeper: m.deeper, /* media + spec-panel ground */
      ink:    m.ink,
      soft:   m.soft,   /* large/secondary only */
      rule:   m.rule,   /* decorative hairline */
      accent: m.accent,
      _audit: {
        'body ink / bg':  +contrast(m.ink, m.bg).toFixed(2),
        'soft / bg':      +contrast(m.soft, m.bg).toFixed(2),
        'accent / bg':    +contrast(m.accent, m.bg).toFixed(2),
        'ink on deeper':  +contrast(m.ink, m.deeper).toFixed(2),
      },
    };
  }

  const PALETTES = {
    pollen: build('Pollen', {
      bg:     PIG.pollen,
      deeper: PIG.teal,
      ink:    PIG.violet,
      soft:   PIG.ceru,
      rule:   PIG.ceru,
      accent: PIG.coral,
    }),
    violet: build('Violet', {
      bg:     PIG.violet,
      deeper: PIG.ceru,
      ink:    PIG.pollen,
      soft:   PIG.teal,
      rule:   PIG.ceru,
      accent: PIG.coral,
    }),
  };

  const DEFAULT = 'pollen';

  /* ── application ──────────────────────────────────── */
  function setVars(p) {
    const r = document.documentElement.style;
    r.setProperty('--bg',        p.bg);
    r.setProperty('--bg-deeper', p.deeper);
    r.setProperty('--ink',       p.ink);
    r.setProperty('--ink-soft',  p.soft);
    r.setProperty('--rule',      p.rule);
    r.setProperty('--accent',    p.accent);
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
      try { localStorage.setItem('rb-palette', resolved); } catch (_) {}
    }
  }

  let saved;
  try { saved = localStorage.getItem('rb-palette'); } catch (_) {}
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
