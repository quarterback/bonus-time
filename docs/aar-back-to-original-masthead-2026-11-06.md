# Agent Action Record: ronbronson.com back to the original masthead

**Review date:** 6 November 2026
**Agent / system:** Claude Code (cloud session), on `claude/friendly-allen-7u5gyo`
**Accountable human:** Ron Bronson (owner)
**Trace:** checked against the session transcript only. No machine trace was available.

## 1. Intent

> masthead needs to revert back to ronbronson.com back to original masthead version. Implement this design in this codebase: [the Portfolio Demo canvas].

The board is "ronbronson.com, back to the original masthead" (`MastOriginal.dc.html`). Ron's earlier messages in this session set the reason: masthead read as an academic site, it didn't put Vloora up front, and it told a story too far from .design and .dev. He wants the content to play to his strengths and not imitate an academic.

## 2. Action

- **Name bar nav** is now Design, Software, Coaching, Blog and email. The section anchors are gone.
- **Introduction** uses the board's two paragraphs: "builds software and studies cities…", with the Michigan appointment, then Vloora ("the last mile infrastructure of the agentic web"), State Capacity AI, Nava PBC and 18F. The field list under it is removed.
- **Removed from the front page:** Research (the positions), Talks and media, the Writing block and the two site doors.
- **New order:** photo, introduction, Community (the board's copy), Teaching (three courses, with the board's term labels; the studio line is dropped), Coaching, then Reading, Watching and Writing as three shelves. Elsewhere, the radio banner, Now listening and the colophon follow.
- **Writing** is now a short list of three titles plus "Everything on the blog". Its rules are added at the end of `assets/tabloid.css`.
- **Meta description** follows the new introduction. It is in the third person and names Vloora.
- **Kept working:** the Bookhive and Letterboxd shelves, Now listening, the digressions and the Good Internetting ring, all as they were.

## 3. Judgment

- The board's photos are files already in `assets/`, matched by image: `design-month.jpg`, `dfp-room.jpg`, `michigan.jpg`, `tennis-title.jpg` and `sound-bulletin-banner.svg`.
- The board's copy is used as written, since Ron said not to fact-check.
- The name links to `index.html`, the site's existing convention, not to the board's `https://ronbronson.com`.

## 4. Consequence

- Rendered at 1440px and 390px in headless Chromium, with no horizontal scroll and no page errors.
- prosekeep found 0 mechanical findings.
- Not merged. The pull request is open for Ron to review.

## Addendum: no repeated content across the sites

**Intent.** Ron: "just make sure none of the content is repeat content".

**Action.** I compared the three home pages for repeated sentences, links, blog posts, photos and named items. Masthead and .design both linked "On Being Anything Other Than a Designer", and .design uses it as a pull quote, so masthead's Writing list now has "Public Delivery Is Statecraft" in its place. The link was checked and returns 200. Years Ahead, Design For The Public and the earlier roles stay here and were removed from the other sites.
