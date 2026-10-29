# Agent Action Record: monospaced colophon and Last.fm in the social row

**Review date:** 29 October 2026
**Agent / system:** Claude Code (cloud session), branch `design/colophon-mono-20261029`
**Accountable human:** Ron Bronson (owner)

## 1. Intent

> Colophon should always be in a monospace font and smaller
>
> Get rid of the last fm language but keep the logo and keep it in the social media row

The instruction was given about ronbronson.design (quarterback/2026-site#129). Ron then pointed out the masthead hadn't been updated. "Always" was read as every site.

## 2. Action

- `assets/tabloid.css`: loads Azeret Mono, which was already in `assets/fonts/`. A closing rule sets the colophon heading at 12px uppercase and its lines and digression at 13px, all in Azeret Mono. It was 30px condensed Archivo with an 18px serif italic digression.
- `index.html`, `coaching.html`, `events.html`: removed the "Last.fm til they shut it down" digression and changed the fonts line to name Azeret Mono.
- `index.html`: added a Last.fm icon to the social row, between Listening and Email. The other two pages have no social row.

## 3. Judgment

- The digression is no longer italic serif. That follows the instruction, but it is the biggest visual change here.
- Matched the .design sizes so the colophons agree across sites.

## 4. Deviation

None.

## 5. Consequence

Rendered at 390px in headless Chromium: all three pages show the colophon in Azeret Mono at 12/13px, with no Last.fm sentence, no horizontal scroll, and no script errors. The homepage shows the Last.fm icon in the social row.

## 6. Change

The .dev colophon is already small and monospaced. Check whether it still carries the Last.fm digression.
