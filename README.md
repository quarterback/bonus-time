# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

Its only job is to orient someone who has never met Ron and send them onward.
Four things, in this order, and nothing else:

1. **Photos** — evidence, not decoration. Each one shows a room being run.
2. **A few orientation grafs** — name things, don't explain them. The point is the
   pattern (convening, governing, coaching across sectors for two decades), not an
   inventory of every event, and not a career timeline.
3. **Links to the other sites** — `.design`, `.dev`, `thinkingweapons.com`, the blog.
4. **Contact.**

Deliberately *not* here: talks (`.design`), projects (`.dev`), event write-ups
(`thinkingweapons.com`), a résumé, a timeline, or a "side quests" section. Coaching,
boards, and the commission belong in the same prose as 18F — splitting them out is what
buried them last time.

## Structure

Single hand-authored `index.html`. No framework, no build step, no dependencies.

- `assets/site.css` and `assets/palette.js` are **copied verbatim across all four
  repos** — do not edit them here, it silently desyncs the other three sites. Anything
  site-specific goes in the `<style>` block in `index.html`.
- Body copy is **PP Neue Montreal Text**, self-hosted from `assets/fonts/MTL/` and
  declared in `index.html`. Display is Author, mono is RX100, both from `site.css`.
  No fonts load from a third party.
- Colour comes from `palette.js`, which writes the `:root` tokens before first paint.
  Run `RBPalette.audit()` in the console after any colour change — `--ink-soft` measures
  3.85:1 on the Pollen ground and **fails AA for small text**, so label and note text
  uses `--ink`.
- Photos are pre-sized to ~1400px and under 260K each. Don't commit camera-resolution
  images; there is no build step to shrink them.

## Facts

Sourced from the other three repos and from Ron directly. The long versions of the
18F, Portland Digital Corps, Michigan, and Oregon tennis entries live in
`2026-site/legacy/src/content/work/`.
