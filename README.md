# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

**27 October 2026: the front door leads with authority.** Ron's instruction: the page has
to say what he does and who he has been, the way an SV, FAANG or YC alum writes a personal
intro page, and every earlier structure for this page is retired. The intro and section
copy below were drafted by an agent from facts Ron has stated, at his explicit request, and
are his to rewrite. The general rule still holds: edit his words only when he supplies new
ones or asks.

Copy rule from Ron: no negation, no contrastive frames, no repetition.

Page order, top to bottom:

1. **Name and nav.** Product Leadership (ronbronson.design), Web Dev (ronbronson.dev),
   Coaching, Blog, Email.
2. **Intro** (`.bioband`). One line on what he does (his own LinkedIn line), one paragraph
   of authority (18F, TTS Consulting, earlier city and state work), one paragraph on now
   (Michigan, GPO, client work, software). Keep the first sentence in sync with the meta
   description, the OG and Twitter descriptions, and `assets/og.html`, then regenerate
   `assets/og.png`.
3. **Now.** Current roles, one line each, pointing to the other sites.
4. **Previously.** Roles with scope: title, organization, the number that shows the scale.
   Numbers come from Ron; do not round or upgrade them.
5. **Talks and writing.** A short pick, plus All talks on ronbronson.design. Ron chooses
   what stays; keep it short.
6. **Outside work.** Coaching, the radio show, the podcast.
7. **Last played, Reading, Watching, Elsewhere.** The personality layer, at the bottom.
8. **Colophon, with Digressions.**

Retired with this change: the Selected talks, Selected interviews, Selected writing, Teaching
and Host & events lists. Their content lives on ronbronson.design and in this repo's history.

## Structure

Hand-authored HTML. No framework, no bundler, no dependencies, and nothing to run before
deploying — the pages are served as-is.

The front door is on the shared Chromatic Editorial System, `assets/faces.css` (this
site's faces and type slots) plus `assets/core.css` (the shared layer, byte-identical in
2026-site, dev-site and bonus-time), with `assets/palette-masthead.js` writing the colour
roles and `assets/home.css` carrying the front page's own layout. The course pages load
`faces.css` + `core.css` only. **`assets/front.css` and `assets/site.css` are no longer
loaded by any page**; they are left in the repo but nothing reads them. `assets/palette.js`
is still the archived Pollen engine behind `_indexarchive.html`.

**This is a single page that sends people to the other sites.** The TopBar links to
sites (Blog, .design, .dev), never to individual pages on them, and there are no About or
Talks pages here. The pages that do live here are masthead's own, with no home elsewhere:
the three course pages and `coaching.html`.

**`coaching.html` is the Story page type:** one narrative column on the plain ground
(title, lead, prose with photos set into it, one short Honors passage), between the TopBar
and the colophon, with no sections, figures or charts. Rules are at the end of
`assets/home.css` (`.story`). The paragraphs are Ron's own wording from his other pages,
placed for him to rewrite; `docs/aar-coaching-page-2026-10-22.md` names each source. Linked from the front page's Coaching module. Dropped pages 301 to `/` in `vercel.json`, so old links land on the front
page instead of a 404; add any page you drop there.

**Course pages.** `interaction-design.html` (UT 330, Fall 2026), `public-mechanics.html`
(UT 402 / URP 610, Fall 2026), and `service-design.html` (UT 360, Winter 2026). Each
carries the course facts and Ron's own copy: overview, objectives, week-by-week, project,
and readings. The front page's `Teaching` module links all three. Same copy rule applies:
nothing on these pages is drafted on Ron's behalf.

The introduction, `Practice`, and `Let's Talk About` were empty for a stretch pending
Ron's replacement copy. They are filled again. `Let's Talk About` is Ron's own list,
restored verbatim from `fd125d3`. The introduction and `Practice` were drafted by an agent
in the Kentucky register (`CAREER-NARRATIVE-REGISTER.md`, now kept in `2026-site`) at Ron's
explicit instruction, from facts already in these repos; that instruction is the only thing
that overrides the copy rule above, it applied to one run, and it does not carry to the
next. See `docs/aar-front-door-copy-2026-10-22.md`.

The one piece of machinery is `scripts/build-letterboxd.mjs`, run on a schedule by
`.github/workflows/refresh-letterboxd.yml`, which commits `data/letterboxd.json` for the
`Watching` grid. It is not a build step: the page works whether or not it has ever run,
and the module hides itself if the JSON is missing.

`.player--video` overrides the 152px audio-player height with a 16/9 ratio; without it the
video renders as a strip.

**The rail ends after Favorites.** Everything below it — the `Top 8` — sits in
`.main--wide`, which spans both columns. Three things make that work,
and breaking any one of them brings back a blue column running past its own content:

- `.railwrap` wraps both rail halves so they are **one** grid item. Placed in separate
  rows they got pushed apart, because a row-spanning `.main--top` inflates the
  `max-content` size of every row it crosses.
- `align-self: start` on the wrapper. Without it the rail's ground and its 3px border
  stretch to fill row 1, which is as tall as `.main--top`.
- The border-right lives on `.railwrap`, not on `.rail`, so it draws once and stops
  where the rail stops.

Rail B leads with `Let's Talk About`, then the live widgets, then `Favorites` and
`Links`.

Under 780px the wrapper becomes `display: contents` and the four pieces are placed by
explicit `grid-row`, so the widgets land at the bottom instead of following Contact.

**There is no portrait on the page.** Rail A is Contact and nothing else. `assets/profile.jpg`
stays in the repo because `assets/og.html` still uses it for the social card — don't delete
the file, and don't put it back on the page.

Rail B holds `Listening`, `Watching`, `Reading`, `Favorites` and `Links`. The rail is where the
page stops being a CV — the scrobble, the shelf, the favorites and the Are.na / PI.FYI /
Bluesky links are the counterweight to the institutions in the main column. If the page
starts reading corporate again, the fix is usually more here, not less there.

`Links` uses `.out`. The Bluesky butterfly is the official mark, inlined as an SVG
path: nothing on this page loads from a third party, so no icon font and no remote asset.
Any further social marks go the same way.

### Reading

Comes live from Bookhive (`bookhive.buzz/profile/ronbronson.com`), not Literal, which
lagged and had a thin catalogue. Bookhive stores the shelf as `buzz.bookhive.book`
records in Ron's own ATProto repo, so the page resolves the PDS from the DID via
`plc.directory`, pages through `com.atproto.repo.listRecords`, keeps
`status: buzz.bookhive.defs#reading`, and shows the six most recently started. Covers
are the record's own blob (`com.atproto.sync.getBlob`); each tile links to
`bookhive.buzz/books/<hiveId>`.

### Watching

Posters come from `data/letterboxd.json`, committed by the scheduled workflow — **not**
fetched live. `letterboxd.com/<user>/rss/` sends no `access-control-allow-origin`, so a
browser fetch is blocked; `Listening` and `Reading` can go direct only because last.fm and
the ATProto PDS do send it. The page reads the committed JSON same-origin instead, the same
arrangement `2026-site` uses for `data/stream.json`.

**It is recently-watched, not favourites.** Letterboxd publishes no favourites feed —
`/favorites/rss/`, `/favourites/rss/` and `/likes/rss/` all 403 — so favourites aren't
obtainable. If the module ever needs to be genuinely four faves, they have to be hand-kept.

The builder exits non-zero on a failed or empty fetch, which leaves the last good JSON
committed rather than blanking the grid. The module reuses the `.books` classes, so posters
and book covers share one 2:3 grid; don't fork the styles.

`Favorites` uses `.favs`, not the
2px-gap grid the main column uses — the rail is ~200–290px, so a label column would leave
nothing for the value. It mirrors the `.np` idiom (micro uppercase label, value in the
display face) so the rail reads as one thing.

Any new fill colour must be **opaque**. The 2px-gap grids show the ink gap colour behind
translucent fills, so an alpha value composites to near-black. Same trap the `.door`
hover comment describes.

## Social card

`assets/og.png` is 1200×630 and is generated from `assets/og.html`, which carries the
regeneration command in a comment at the top. **Regenerate it when the framing changes** —
the card carries its own one-line summary and nothing enforces a match with the page.

The card, `<meta name="description">`, and the OG/Twitter descriptions carry the first
sentence of the introduction, third person there and first person on the page. That is
four copies of one paragraph, and **the card is the copy that goes stale silently**,
because its text is baked into a PNG: it read "Advisor at State Capacity AI" for as long
as it took someone to notice. Change one, change all four, and regenerate.

The command in `og.html` carried a `deviceScaleFactor:2` that wrote a 2400×1260 file while
`og:image:width` / `og:image:height` still declared 1200×630. It's been dropped. If you
want the 2× card, update those two meta tags in the same commit.

Don't point `og:image` at `profile.jpg`. It's 4:5, and `summary_large_image` crops to
1.91:1 straight through Ron's forehead — which is what the card previously did.

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
