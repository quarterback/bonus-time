# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

Its only job is to orient someone who has never met Ron and send them onward.
Four things, in this order, and nothing else:

1. **Photos** — evidence, not decoration, and **uncaptioned**. Each one carries an
   institution on its face: Design For The Public, 18F at GSA, Taubman College, AIGA
   Portland, the Oregon Athletic Coaches Association, a championship team. Pick images
   that show a room, a cohort, a banner, or a governing body — never a screenshot of
   software, and never a solo speaker shot. A photo of Ron presenting proves
   practitioner; a photo of the room proves institution. The image does the work, so
   don't label it; `alt` text carries the description for screen readers.
2. **A few orientation grafs** — written in the grammar of appointment: *hired me,
   asked me, made me president, appointed me*. The career is a sequence of people
   trusting Ron to build capability that didn't exist yet, in unrelated domains. That
   is the signal, and it is the thing every previous version of this page buried.
   Not an inventory of events, not a career timeline, not proof he still does the work.

   The test: **if someone spends two minutes here, do they realize this person has
   repeatedly been entrusted to build organizations, professions, communities, and
   public institutions?** If a change doesn't help that, it doesn't belong.
3. **What he does now** — the `Currently` module. The orientation grafs establish what
   Ron has been trusted with; this establishes that none of it is finished. It carries
   **no facts that aren't already on the page** — teaching, coaching, radio, and writing
   are each evidenced in the photos, the prose, or the site links. It exists purely so a
   stranger reads the career in present tense. Adding a fact here that appears nowhere
   else means it belongs in the grafs instead.
4. **Links to the other sites** — `.design`, `.dev`, `thinkingweapons.com`, the blog.
5. **Contact.**

Deliberately *not* here: talks (`.design`), **projects, case studies, prototypes and
indices** (`.dev`, `.design`), event write-ups (`thinkingweapons.com`), a résumé, a
timeline, or a "side quests" section. The portfolio is not a front-door asset — routing to
it doesn't add anything a stranger needs in the first two minutes, and it turns the page
into an inventory. Send people onward to it instead.

Coaching, boards, and the commission belong in the same prose as 18F — splitting them out
into their own narrative sections is what buried them last time. `Currently` is not an
exception to this: it's a four-card index of things stated in full elsewhere, not a
replacement for stating them.

## Structure

Single hand-authored `index.html`. No framework, no build step, no dependencies.

Module order in `.main`, and the reasoning behind it:

| Module | Why it sits there |
| --- | --- |
| About Me | Range and the grammar of appointment. Closes with the practice graf — what the work is *for*. Formerly a separate `Interests` module that restated the same thesis in a second box. |
| Currently | Present tense, immediately after the grafs, so "has been trusted with" is followed by "still doing it". |
| Elsewhere | The four site links. Four doors, four `href`s — sharpen the subtitles freely, don't add a fifth. |
| Ron's Top 8 | Photographic evidence, uncaptioned. |
| Now Playing | Podcasts. |

Board service is gone on purpose — it's a résumé grid. The appointments worth keeping are
in the opening grafs. Don't bring it back.

Rail B holds `Listening` and `Reading` only. The radio line used to live down there, where
it read as a hobby; it's in `Currently` now, which is the whole point of that module.

`.door--static` is a card with no link — used in `Currently` for Teaching and Coaching. It
suppresses the sky hover so the card doesn't imply a click it can't honour.

- `assets/site.css` and `assets/palette.js` are **copied verbatim across all four
  repos** — do not edit them here, it silently desyncs the other three sites. Anything
  site-specific goes in the `<style>` block in `index.html`.
- Body copy is **PP Neue Montreal Text** (`assets/fonts/MTL/`); captions, card
  subtitles, and the footer are **PP Pangram Sans Medium** (`assets/fonts/`). Both are
  self-hosted and declared in `index.html`. Display is Author from `site.css`. Nothing
  monospace is left on the page, and no fonts load from a third party.
  Note: the Pangram Sans upload has no Regular in the standard width — upright runs
  Thin / Medium / Semibold / Bold, and "Regular" exists only as an italic — and ships
  no woff2. Medium at 500 is the text weight.
- The email address is **never written into the DOM**. It's assembled from char codes
  at click time behind an "Email me" button, so there's no raw address or `mailto:`
  href in the source. Any new contact control just needs `data-contact`.
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
